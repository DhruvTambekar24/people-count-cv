# 📊 People Count CV  

**People Count CV** is a robust computer vision application designed to count the number of people in a given frame or video feed. This project integrates **OpenCV**, **Flask**, and a modern React frontend to deliver accurate real-time insights into crowd density.  

---

## 🛠️ Features  
- **Real-Time Detection**: Detect and count people from live video or pre-recorded feeds.  
- **Dark Mode Support**: Switch seamlessly between light and dark themes on the frontend.  
- **API-Driven**: Powered by a Flask backend with an easy-to-use REST API.  
- **User-Friendly Interface**: Responsive design with dynamic animations.  
- **Customizability**: Configurable detection thresholds and video inputs.  

---

## 🖥️ Tech Stack  

### Backend  
- **Python**  
- **OpenCV**  
- **Flask**  
- Pre-trained YOLOv3 models for object detection  

### Frontend  
- **React.js**  
- CSS Animations (Dark mode, loading spinner, and more)  

### Other  
- **Flask-CORS**: Enables seamless communication between the backend and frontend.  

---

## 🚀 Getting Started  

### Prerequisites  
1. Install Python (>= 3.8).  
2. Install Node.js (>= 14.x).  
3. Clone the repository:  
   ```bash
   git clone https://github.com/DhruvTambekar24/people-count-cv.git
   cd people-count-cv

   
***Download YOLOv3 Weights***
The yolov3.weights file is required for the detection model to work. Download it from the link below and place it in the backend directory:
Download Link: YOLOv3.weights (Official Source)
Alternatively,You can download from https://drive.google.com/drive/folders/1XqvLvv_uC8DCTGsEgw4arWg8bFOBj-bC?usp=sharing

---
#Installation
**Installation**

##Backend Setup
-Navigate to the backend directory:
  cd backend

-Install Python dependencies:
  pip install -r requirements.txt
  Place the downloaded yolov3.weights, yolov3.cfg, and coco.names files in the backend directory.

-Start the Flask server:
  python main.py
  
##Frontend Setup
-Navigate to the frontend directory:
 cd frontend
-Install dependencies:
 npm install
-Start the React development server:
 npm start
 or npm run dev
 
 ---
 
#🎥 Usage
**🎥 Usage**
Open the React app in your browser (default: http://localhost:3000).
Provide a video input or connect to a live webcam feed.
View the real-time count of people on the dashboard.

---

##📧 Contact
-Feel free to reach out if you have any questions or suggestions:
-Author: Dhruv Tambekar
-GitHub: DhruvTambekar24
-LinkedIn: https://www.linkedin.com/in/dhruv-tambekar-190a1728a/
