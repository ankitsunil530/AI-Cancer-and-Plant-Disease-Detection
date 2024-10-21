# AI-Cancer-and-Plant-Disease-Detection
AI-based system for detecting cancer and plant leaf diseases using CNNs. This project includes image classification models, trained on medical and agricultural datasets, integrated into a web app with React (Frontend) and Flask (Backend) for real-time detection. Enhancing early diagnosis in healthcare and agriculture.
Here’s a complete **README** file for your GitHub repository:

---

# **AI-Cancer-and-Plant-Disease-Detection**

This repository contains the code and models for detecting **cancer** and **plant leaf diseases** using **Artificial Intelligence**. The project leverages **Convolutional Neural Networks (CNNs)** to analyze medical images and plant leaf images for early detection and classification of diseases. The system is integrated into a web interface built with **Flask** and **React** for user interaction, allowing real-time image upload and prediction results.

---

## **Table of Contents**
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Datasets](#datasets)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## **Introduction**

This project addresses two significant challenges:
1. **Cancer Detection**: Early detection of cancer using medical images (e.g., X-rays, histopathology images) to support healthcare professionals in identifying cancerous cells.
2. **Plant Disease Detection**: Detecting diseases in plant leaves to help farmers prevent crop damage and improve agricultural productivity.

Both systems use CNNs to classify images and provide users with real-time predictions through a web application.

---

## **Features**

- **CNN-based models** for cancer and plant disease detection.
- **Web interface** for easy image uploads and result display.
- **Real-time predictions** of cancer or plant diseases.
- **Modular architecture** allowing for future extensions to other types of diseases.
- **Pre-trained models** for fast deployment and evaluation.

---

## **Technologies Used**

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Machine Learning Frameworks**: TensorFlow, Keras
- **Image Processing**: OpenCV, NumPy
- **Deployment**: Flask API for model inference
- **Web Design**: HTML, CSS, Bootstrap

---

## **Setup and Installation**

### **Prerequisites**
Ensure that you have the following installed:
- Python 3.x
- Node.js and npm
- TensorFlow, Keras, OpenCV

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/AI-Cancer-and-Plant-Disease-Detection.git
cd AI-Cancer-and-Plant-Disease-Detection
```

### **2. Backend Setup (Flask API)**
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### **3. Frontend Setup (React App)**
```bash
cd frontend
npm install
npm start
```

### **4. Running the Application**
- After setting up both the backend and frontend, open your browser and navigate to `http://localhost:3000/`.
- You can upload images of medical scans or plant leaves, and the system will provide real-time predictions.

---

## **Usage**

### **1. Upload Image**
- Navigate to the home page.
- Click on the "Upload" button and select an image of a medical scan or plant leaf.

### **2. Get Predictions**
- The AI model will process the uploaded image and display the result (cancer detected or not, plant disease identified or not).

### **3. Interpretation of Results**
- For cancer detection: The system will predict whether the input image shows signs of cancer.
- For plant disease detection: The system will classify the plant leaf as healthy or provide the disease name.

---

## **Project Structure**

```
AI-Cancer-and-Plant-Disease-Detection/
│
├── backend/                    # Flask API (Backend)
│   ├── static/                 # Static files (CSS, JS, images)
│   ├── templates/              # HTML templates
│   ├── models/                 # Saved AI models (Cancer, Plant Disease)
│   └── app.py                  # Main Flask app
│
├── frontend/                   # React App (Frontend)
│   ├── public/                 # Public assets
│   ├── src/                    # Source code
│   └── App.js                  # Main React component
│
├── datasets/                   # Placeholder for datasets
├── README.md                   # Project documentation
└── requirements.txt            # Python dependencies
```

---

## **Datasets**

The models were trained on publicly available datasets:

1. **Cancer Detection**: [Breast Cancer Histopathological Dataset](https://www.kaggle.com/paultimothymooney/breast-histopathology-images)
2. **Plant Disease Detection**: [PlantVillage Dataset](https://www.kaggle.com/emmarex/plantdisease)

You can download these datasets and use them for training the models.

---

## **Future Improvements**

- **Expand Cancer Detection**: Extend the system to detect more types of cancer (e.g., lung, skin).
- **Mobile App**: Develop a mobile version of the web app to make it accessible to farmers in the field.
- **Advanced AI Techniques**: Use **Transfer Learning** or **Ensemble Models** to improve accuracy.
- **Cloud Deployment**: Deploy the web app on cloud services like AWS or Heroku for broader accessibility.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## **Contributing**

Contributions are welcome! Please create a pull request or submit issues to suggest improvements or report bugs.

---
