# FileSharing - MERN Stack Application 📤

## 📌 Introduction

**FileSharing** is a full-stack MERN application that enables users to upload files and generate shareable links for easy file distribution. Upload any file type, get an instant shareable link, and track downloads—all without creating an account.

**Key Features:**
- ✅ Universal file upload (any file type)
- ✅ Instant shareable link generation
- ✅ Download tracking
- ✅ Simple, intuitive UI
- ✅ No authentication required
- ✅ Fast file access

---

## 🔄 Process / Flow

```
User Upload → Multer Processes File → Saved to Server → 
MongoDB Stores Metadata → Unique Link Generated → 
Shareable Link Displayed → Recipient Downloads → 
Download Count Updated
```

**Key Steps:**
1. User selects and uploads file via React UI
2. Express backend receives file using Multer middleware
3. File saved to `uploads/` folder
4. File metadata (path, name, download count) stored in MongoDB
5. Unique download link generated: `http://localhost:8000/file/{fileId}`
6. Link displayed to user for sharing
7. When link is accessed, file is downloaded and counter incremented

---

## 🛠️ Technology Used

| Layer | Technology |
|-------|-----------|
| **Frontend** | React.js, HTML, CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **File Handling** | Multer |
| **Communication** | CORS, RESTful API |

---

## 🎓 Skills Gained

**Frontend Development:**
- React Hooks (useState, useRef, useEffect)
- State management and component lifecycle
- File input handling & FormData API
- Axios HTTP client integration

**Backend Development:**
- Express server setup and routing
- RESTful API design (POST/GET)
- Middleware integration (CORS, Multer)
- File handling and storage

**Database:**
- MongoDB connection and configuration
- Mongoose schema design
- CRUD operations
- Data persistence and querying

**Full-Stack Skills:**
- Frontend-backend integration
- Async/await programming
- Error handling and validation
- MVC architecture implementation

---

## 📸 Demonstration

**Upload Interface:**
![Screenshot 2023-09-09 000533](https://github.com/garvita2003/FileSharing/assets/102051676/b59a6296-4d3f-4eae-bd70-73cef481fcb8)

**File Upload in Progress:**
![Screenshot 2023-09-09 000606](https://github.com/garvita2003/FileSharing/assets/102051676/286bdcac-7ad2-4973-af79-924ff9b98287)

**Shareable Link Generated:**
![Screenshot 2023-09-09 001244](https://github.com/garvita2003/FileSharing/assets/102051676/3c7bd295-cc94-4687-91bb-e3eb583efa15)

**Download Success:**
![Screenshot 2023-09-09 001206](https://github.com/garvita2003/FileSharing/assets/102051676/f1be3bf0-5fb6-4554-975c-aa944a2e8766)

---

## ⚙️ Setup Instructions

### Prerequisites:
- Node.js and npm installed
- MongoDB account (MongoDB Atlas)

### Backend Setup:
```bash
# 1. Install dependencies
npm init -y
npm install express cors mongoose multer

# 2. Update database/db.js with MongoDB connection string

# 3. Start server
node index.js
# Runs on http://localhost:8000
```

### Frontend Setup:
```bash
# 1. Create React app
npx create-react-app .

# 2. Install dependencies
npm install axios

# 3. Start development server
npm start
# Runs on http://localhost:3000
```

### API Endpoints:
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload` | Upload file |
| GET | `/file/:fileId` | Download file by ID |

---

**Created:** September 8, 2023
