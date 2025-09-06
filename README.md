# ✈️ CS-465 Full Stack Project – Travlr Getaways

This project was developed for **CS-465: Full Stack Development** at Southern New Hampshire University.  
It is a **travel booking web application** built with the **MEAN stack** (MongoDB, Express.js, Angular, Node.js).  

The project includes both **customer-facing** and **admin-facing** applications, RESTful API services, and secure database-backed functionality.  

---

## 🌍 Overview
- **Customer Site** → Express, HTML, CSS, and Handlebars templates for trip browsing and booking.  
- **Admin SPA** → Angular Single Page Application for trip management.  
- **Backend** → Node.js & Express RESTful APIs for trips and users.  
- **Database** → MongoDB with Mongoose for scalable, flexible data storage.  
- **Authentication** → JWT + Passport.js for secure admin login.  

---

## 📌 Features
- Dynamic trip listing and trip detail pages.  
- Admin authentication with login/logout.  
- Trip management → Create, edit, delete trips.  
- RESTful API with full CRUD operations.  
- Token-based security for protected endpoints.  
- Reusable Angular components and services.  

---

## 🛠️ Tech Stack
- **Frontend:** Angular (SPA)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** JWT, Passport.js  
- **Testing:** Postman (API testing)  
- **Version Control:** Git / GitHub  

---

## 🚀 How to Run
1. **Clone the repo:**  
   ```bash
   git clone https://github.com/colynkaighen/cs465-fullstack.git
   cd cs465-fullstack


---

Backend setup:
npm install
npm run dev

---

Frontend setup:
cd app_admin/
npm install
ng serve

---

Environment variables:

Create a .env file in the backend with:
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

---

Access the app:

Customer site → http://localhost:3000/

Admin SPA → http://localhost:4200/

---

🎓 Academic Context

This project demonstrates full-stack development skills, including:

Building and securing RESTful APIs.

Designing reusable Angular components.

Managing a NoSQL database with Mongoose.

Implementing JWT authentication.

Deploying and testing applications with industry tools.

