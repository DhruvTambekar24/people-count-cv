


import cv2
import numpy as np
import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


weights_path = r'backend\yolov3.weights'
config_path = r'backend\yolov3.cfg'
names_path = r'backend\coco.names'
video_path = r'backend\video2.mp4'

if not os.path.isfile(weights_path):
    raise FileNotFoundError(f"{weights_path} file not found.")
if not os.path.isfile(config_path):
    raise FileNotFoundError(f"{config_path} file not found.")
if not os.path.isfile(names_path):
    raise FileNotFoundError(f"{names_path} file not found.")

net = cv2.dnn.readNet(weights_path, config_path)
layer_names = net.getLayerNames()
output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]


with open(names_path, 'r') as f:
    classes = [line.strip() for line in f.readlines()]


person_class_id = 0

def detect_people(frame):
    """Runs object detection on the provided frame and returns the count of people detected."""
    height, width, _ = frame.shape
    blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
    net.setInput(blob)
    detections = net.forward(output_layers)

    boxes = []
    confidences = []
    class_ids = []

    for detection in detections:
        for obj in detection:
            scores = obj[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            if confidence > 0.5 and class_id == person_class_id:
                center_x = int(obj[0] * width)
                center_y = int(obj[1] * height)
                w = int(obj[2] * width)
                h = int(obj[3] * height)

            
                boxes.append([center_x - w // 2, center_y - h // 2, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)

   
    indices = cv2.dnn.NMSBoxes(boxes, confidences, score_threshold=0.5, nms_threshold=0.4)
    people_count = len(indices)

    return people_count

@app.route('/detect', methods=['GET'])
def detect():
    """API endpoint that captures video feed from the webcam and returns people count."""
  
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        return jsonify({'error': 'Unable to access webcam'})

    ret, frame = cap.read()
    if not ret:
        cap.release()
        return jsonify({'error': 'Failed to capture image from webcam'})

   
    people_count = detect_people(frame)

    # Release the video capture
    cap.release()

    # Return the result as JSON
    return jsonify({'people_count': people_count})

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True, host='0.0.0.0', port=5000)

