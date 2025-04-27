# cs465-fullstack
Travlr Getaways Full Stack Project

CS-465 Full Stack Development with MEAN Stack (MongoDB, Express, Angular, Node.js)

## Overview
This project is a full stack travel booking web application. It includes:
- A **customer-facing** site using Express, HTML, CSS, and Handlebars templates
- An **admin-facing** Single Page Application (SPA) using Angular
- A backend with **Node.js** and **Express** serving RESTful API endpoints
- A **MongoDB** database for flexible, scalable trip and user data storage
- **Authentication and security** features using JWT and Passport.js for admin login

## Features
- Dynamic trip listing and trip detail pages
- Admin login, trip creation, editing, and deletion
- RESTful API for CRUD operations
- API security with token-based authentication
- Reusable Angular components and services

## Technologies Used
- Angular
- Express.js
- Node.js
- MongoDB / Mongoose
- JWT Authentication
- Postman (for API testing)
- Git / GitHub

## How to Run
1. Clone the repository
2. Install backend dependencies (`npm install`)
3. Navigate to `app_admin/` and install frontend dependencies (`npm install`)
4. Set up `.env` file with database URI and secret key
5. Run the backend server (`npm run dev`)
6. Run the Angular app (`ng serve` inside `app_admin/`)
