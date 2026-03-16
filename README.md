# Backend API – Project 2

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![Status](https://img.shields.io/badge/Project-Completed-brightgreen)

## 📌 Project Overview

This project is part of the **DecodeLabs Full Stack Development Internship – Project 2**.

The goal of this project is to build a **simple backend API** using **Node.js and Express.js**.  
The API handles user data, performs basic validation, and returns JSON responses.

---

## 🚀 Features

- REST API built with **Node.js & Express**
- **GET API** to fetch users
- **POST API** to create users
- Basic **input validation**
- JSON request and response handling
- In-memory data storage

---

## 📂 Project Structure

```
Project2-api
│
├── README.md
├── package.json
└── server.js
```

---

## ⚙️ Installation

1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/project2-api.git
```

2️⃣ Navigate to the project folder

```bash
cd project2-api
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Run the server

```bash
node server.js
```

---

## 🔗 API Endpoints

### GET Users

```
GET /users
```

Example Response:

```json
{
  "message": "Users fetched successfully",
  "data": []
}
```

---

### POST User

```
POST /users
```

Request Body:

```json
{
  "name": "Sangam",
  "email": "sangam@gmail.com"
}
```

Response:

```json
{
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "Sangam",
    "email": "sangam@gmail.com"
  }
}
```

---

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript
- REST API

---

## 📖 Learning Outcome

Through this project I learned how to:

- Build a backend API
- Handle HTTP requests
- Validate user input
- Return JSON responses
- Understand server-side application logic

---

## 👨‍💻 Author

**Sangam Maurya**  
DecodeLabs Internship – 2026
