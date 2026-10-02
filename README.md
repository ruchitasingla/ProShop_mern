# ProShop — MERN E-Commerce Platform

A full-stack e-commerce application built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and Redux.

## 🚀 Project Overview

ProShop is a full-featured e-commerce platform that allows users to browse products, manage their shopping cart, place orders, and manage their profiles.

The project also includes an administrative interface for managing products, users, and orders.

## ✨ Features

### Customer Features

* Product browsing and search
* Product reviews and ratings
* Product pagination
* Shopping cart
* User registration and authentication
* User profile
* Order history
* Shipping information
* Payment method selection
* PayPal payment integration

### Admin Features

* Admin dashboard
* Product management
* User management
* Order management
* Order details
* Mark orders as delivered

## 🛠️ Tech Stack

### Application

* **Frontend:** React.js, Redux
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT
* **Payment:** PayPal

### DevOps

* **Version Control:** Git & GitHub
* **Containerization:** Docker
* **Cloud:** AWS
* **Configuration Management:** Ansible
* **CI/CD:** GitHub Actions
* **Operating System:** Linux/Ubuntu

## 📁 Project Structure

```text
ProShop/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│
├── uploads/
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## ⚙️ Local Setup

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB
* Git

### 1. Clone the repository

```bash
git clone https://github.com/ruchitasingla/ProShop_mern.git
cd ProShop_mern
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

**Never commit your `.env` file or secret credentials to GitHub.**

### 5. Run the application

Run both frontend and backend:

```bash
npm run dev
```

The application will normally be available at:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```

## 🐳 Docker

The application is being containerized using Docker to provide a consistent development and deployment environment.

Build the Docker image:

```bash
docker build -t proshop .
```

Run the container:

```bash
docker run -p 5000:5000 proshop
```

Docker Compose can also be used to manage the application's containers:

```bash
docker compose up -d
```

To stop the containers:

```bash
docker compose down
```

## ☁️ AWS Deployment

The application is deployed on **AWS** as part of the project's DevOps implementation.

The deployment workflow includes:

```text
GitHub
   ↓
CI/CD Pipeline
   ↓
Docker Build
   ↓
AWS
   ↓
Application Deployment
```

## 🔄 CI/CD

The project uses **GitHub Actions** to automate parts of the application delivery process.

The intended workflow is:

```text
Developer pushes code
        ↓
GitHub
        ↓
GitHub Actions
        ↓
Build & Test
        ↓
Docker Image
        ↓
Deployment
        ↓
AWS
```

## 🤖 Ansible

Ansible is used for automating server configuration and deployment tasks.

The goal is to reduce manual configuration by automating tasks such as:

* Server setup
* Required package installation
* Docker configuration
* Application deployment
* Container management

## 📚 What I Learned

Through this project, I worked with:

* MERN stack application structure
* Git and GitHub
* Docker containerization
* AWS deployment
* Linux server administration
* Ansible automation
* CI/CD concepts
* Environment and configuration management
* Application deployment workflows

## 👩‍💻 Author

**Ruchita Singla**

* GitHub: https://github.com/ruchitasingla
* LinkedIn: https://www.linkedin.com/in/ruchita-singla/
