📊 People Count CV
People Count CV is a robust computer vision application designed to count the number of people in a given frame or video feed. This project integrates OpenCV, Flask, and a modern React frontend to deliver accurate real-time insights into crowd density.

🛠️ Features
1.Real-Time Detection: Detect and count people from live video or pre-recorded feeds.
2.Dark Mode Support: Switch seamlessly between light and dark themes on the frontend.
3.API-Driven: Powered by a Flask backend with an easy-to-use REST API.
4.User-Friendly Interface: Responsive design with dynamic animations.
5.Customizability: Configurable detection thresholds and video inputs.

🖥️ Tech Stack
**Backend
   1.Python
   2.OpenCV
   3.Flask
   4.Pre-trained YOLOv3 models for object detection
**Frontend
   1.React.js
   2.CSS Animations (Dark mode, loading spinner, and more)
**Other
   1.Flask-CORS: Enables seamless communication between the backend and frontend.
   
🚀 Getting Started
Prerequisites
1.Install Python (>= 3.8)
2.Install Node.js (>= 14.x)
3.Clone the repository:
   git clone https://github.com/DhruvTambekar24/people-count-cv.git
   cd people-count-cv
   
***Download YOLOv3 Weights
The yolov3.weights file is required for the detection model to work. Download it from the link below and place it in the backend directory:
Download Link: YOLOv3.weights (Official Source)
Alternatively,You can download from https://drive.google.com/drive/folders/1XqvLvv_uC8DCTGsEgw4arWg8bFOBj-bC?usp=sharing

Installation

##Backend Setup
1.Navigate to the backend directory:
  cd backend

2.Install Python dependencies:
  pip install -r requirements.txt
  Place the downloaded yolov3.weights, yolov3.cfg, and coco.names files in the backend directory.

3.Start the Flask server:
  python main.py
  
##Frontend Setup
1.Navigate to the frontend directory:
 cd frontend
2.Install dependencies:
 npm install
3.Start the React development server:
 npm start
 or npm run dev
 
🎥 Usage
Open the React app in your browser (default: http://localhost:3000).
Provide a video input or connect to a live webcam feed.
View the real-time count of people on the dashboard.

📧 Contact
Feel free to reach out if you have any questions or suggestions:
Author: Dhruv Tambekar
GitHub: DhruvTambekar24
LinkedIn: https://www.linkedin.com/in/dhruv-tambekar-190a1728a/
