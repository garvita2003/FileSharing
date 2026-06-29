# FileSharing - MERN Stack Application 📤

## 📌 Introduction

**FileSharing** is a full-stack MERN application that enables users to upload files and generate shareable links for easy file distribution. The application combines Express backend with React frontend in a single repository, allowing users to upload files instantly and get unique shareable links.

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
3. File saved to `uploads/` folder
4. File metadata (path, name, downloadContent count) stored in MongoDB
5. Unique download link generated: `http://localhost:8000/file/{fileId}`
6. Link displayed to user for sharing
7. When link is accessed, file is downloaded and download counter incremented
8. Users can track how many times their file has been downloaded

---

## 🛠️ Technology Used

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, HTML, CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **File Handling** | Multer |
| **Communication** | CORS, RESTful API |

**Language Composition:**
- JavaScript: 68.6%
- HTML: 20.4%
- CSS: 11%

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
- ✅ Middleware integration (CORS, Multer)
- ✅ File handling, validation, and storage
- ✅ Error handling and response management

**Database:**
- ✅ MongoDB connection and configuration
- ✅ Mongoose schema design and models
- ✅ CRUD operations implementation
- ✅ Data persistence and querying

**Full-Stack Skills:**
- ✅ Frontend-backend integration and communication
- ✅ Async/await programming patterns
- ✅ Error handling and validation strategies

---

## 📂 Project Structure

```
FileSharing/
├── controller/              # Request handlers
│   └── image-controller.js  # Upload and download controllers
├── database/                # Database configuration
│   └── db.js                # MongoDB connection setup
├── models/                  # Database schemas
│   └── file.js              # File schema definition
├── routes/                  # API route definitions
│   └── routes.js            # Route configurations
├── utils/                   # Utility functions
│   └── upload.js            # Multer configuration
├── uploads/                 # Uploaded files storage
├── public/                  # React public assets
│   └── index.html
├── src/                     # React source code
│   ├── App.js               # Main React component
│   ├── App.css              # Application styling
│   ├── index.js             # React entry point
│   ├── index.css            # Global styles
│   └── services/
│       └── api.js           # API client for backend communication
├── index.js                 # Express server entry point
└── README.md                # Documentation
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
- MongoDB connection string (MongoDB Atlas or local MongoDB)

### Installation Steps:

```bash
# 1. Clone the repository
git clone https://github.com/garvita2003/FileSharing.git
cd FileSharing

# 2. Install dependencies
npm install

# 3. Create .env file at root level with MongoDB connection string
# Add the following:
# MONGODB_URI=your_mongodb_connection_string

# 4. Start the server
# This will start both Express backend (port 8000) and React frontend (port 3000)
npm start
```

### Running Frontend and Backend:

The application runs in full-stack mode:

**Backend (Express Server):**
- Runs on `http://localhost:8000`
- Handles file uploads and downloads
- Manages MongoDB operations
- Serves RESTful API endpoints

**Frontend (React Application):**
- Runs on `http://localhost:3000`
- File upload UI
- Link display and download tracking
- Communicates with backend via Axios

### API Endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload` | Upload file and generate shareable link |
| GET | `/file/:fileId` | Download file by unique ID |

---

## 📝 Environment Configuration

Create a `.env` file in the root directory:

```
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=8000
```

Replace `your_mongodb_atlas_connection_string` with your actual MongoDB connection string from MongoDB Atlas.

---

## 🚀 Usage

1. Navigate to `http://localhost:3000` in your browser
2. Click "Upload File" button
3. Select a file from your system
4. The file will be uploaded and a shareable link will be generated
5. Copy the link and share it with others
6. Others can download the file using the shared link
7. Download count is tracked automatically
