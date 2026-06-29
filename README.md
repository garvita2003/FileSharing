# FileSharing - MERN Stack Application 📤

## 📌 Introduction

**FileSharing** is a full-stack MERN (MongoDB, Express, React, Node.js) application that enables users to upload files and generate shareable links for easy file distribution. Upload any file type instantly, get a unique shareable link, and seamlessly share files with anyone without authentication complications.

**Key Features:**
- ✅ Universal file upload supporting any file type
- ✅ Instant shareable link generation
- ✅ Download tracking and counting
- ✅ Simple and intuitive user interface
- ✅ No authentication required for sharing
- ✅ Fast file access and retrieval

---

## 🔄 Process / Flow

**Key Steps:**
1. User selects and uploads file via React UI
2. Express backend receives file using Multer middleware
3. File saved to `uploads/` folder on server
4. File metadata (path, name, download count) stored in MongoDB
5. Unique download link generated: `http://localhost:8000/file/{fileId}`
6. Link displayed to user for immediate sharing
7. When link is accessed, file is downloaded and counter incremented
8. Users can track how many times their file has been downloaded

---

## 🛠️ Technology Used

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, HTML, CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **File Handling** | Multer middleware |
| **Communication** | CORS, RESTful API |

---

## 🎓 Skills Gained

**Frontend Development:**
- ✅ React Hooks (useState, useRef, useEffect) implementation
- ✅ State management and component lifecycle management
- ✅ File input handling and FormData API usage
- ✅ Axios HTTP client integration and API calls
- ✅ User interface design and responsiveness

**Backend Development:**
- ✅ Express server setup and configuration
- ✅ RESTful API design (POST/GET endpoints)
- ✅ Middleware integration (CORS, Multer, body-parser)
- ✅ File handling, validation, and storage
- ✅ Error handling and response management

**Database:**
- ✅ MongoDB connection and configuration
- ✅ Mongoose schema design and models
- ✅ CRUD operations implementation
- ✅ Data persistence and querying
- ✅ Indexing and data optimization

**Full-Stack Skills:**
- ✅ Frontend-backend integration and communication
- ✅ Async/await programming patterns
- ✅ Error handling and validation strategies
- ✅ MVC architecture implementation
- ✅ Environment configuration and deployment

---

## 📂 Project Structure

```
FileSharing/
├── backend/
│   ├── index.js              # Express server entry point
│   ├── database/
│   │   └── db.js             # MongoDB connection
│   ├── models/
│   │   └── File.js           # Mongoose file schema
│   ├── routes/
│   │   └── fileRoutes.js      # API routes for upload/download
│   ├── uploads/              # Uploaded files storage
│   ├── package.json          # Backend dependencies
│   └── .env                  # Environment variables
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js            # Main React component
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   ├── package.json          # Frontend dependencies
│   └── .env                  # Frontend configuration
│
└── README.md                 # Documentation
```

---

## 📸 Demonstration

**File Upload Interface:**
![Screenshot 2023-09-09 000606](https://github.com/garvita2003/FileSharing/assets/102051676/286bdcac-7ad2-4973-af79-924ff9b98287)

**Shareable Link Generated:**
![Screenshot 2023-09-09 001244](https://github.com/garvita2003/FileSharing/assets/102051676/3c7bd295-cc94-4687-91bb-e3eb583efa15)

---

## ⚙️ Setup Instructions

### Prerequisites:
- Node.js and npm installed on your system
- MongoDB account (MongoDB Atlas recommended for cloud database)
- Code editor (VSCode recommended)

### Backend Setup:

```bash
# 1. Navigate to backend directory
cd backend

# 2. Initialize and install dependencies
npm init -y
npm install express cors mongoose multer dotenv

# 3. Create .env file with MongoDB connection string
# DATABASE_URL=your_mongodb_connection_string
# PORT=8000

# 4. Update database/db.js with your MongoDB connection string

# 5. Start the backend server
node index.js
# Server runs on http://localhost:8000
```

### Frontend Setup:

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Create React app (if not already created)
npx create-react-app .

# 3. Install required dependencies
npm install axios react-router-dom

# 4. Create .env file for API configuration
# REACT_APP_API_URL=http://localhost:8000

# 5. Start the development server
npm start
# Application runs on http://localhost:3000
```

### API Endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload` | Upload file and generate shareable link |
| GET | `/file/:fileId` | Download file by unique ID |
| GET | `/file/:fileId/info` | Get file information and download count |

### Usage:

1. Start both backend and frontend servers
2. Navigate to http://localhost:3000 in your browser
3. Click on file input to select a file
4. Click "Upload" button
5. Copy the generated shareable link
6. Share the link with anyone
7. Recipients can download the file by clicking the link
