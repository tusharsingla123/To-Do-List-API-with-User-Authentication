# To-Do-List-API-with-User-Authentication

**Project Description**

The To-Do List API with User Authentication is a secure task management application that allows users to register, login, and manage their tasks. The system provides full CRUD (Create, Read, Update, Delete) functionality for tasks, with user authentication through JWT tokens. The backend is built using Node.js with Express and MongoDB, while authentication is handled using JWT. This API ensures that only authenticated users can access and modify their tasks.

**Technical Decisions and Overview**

* Frontend: Though not included in this repository, the frontend can be developed with React.js or any other framework to interact with the API.
* Backend: Built using Node.js and Express, providing a secure REST API for task management.
* User Authentication: Authentication is managed using JWT (JSON Web Tokens) and bcrypt (for password hashing), ensuring secure user login and token-based session management.
* CRUD Functionality: Users can create, read, update, and delete tasks. Tasks contain information such as title, description, and completion status.
* Database: MongoDB is used to store user and task data, utilizing Mongoose for schema modeling and seamless data integration.
* Error Handling: Robust error handling is implemented for both client-side input validation and server-side API responses.


## Setup Instructions

**Prerequisites**

* Node.js
* MongoDB(compass)

**Installation**

* Clone the Repository:
     ```bash
     git clone https://github.com/tusharsingla123/To-Do-List-API-with-User-Authentication.git
     cd To-Do-List-API-with-User-Authentication
     ```
* Install Server Dependencies: Navigate to the backend folder and install dependencies
  ```bash
  npm install
  ```
* Configure Environment Variables: Create a .env file in the backend directory and specify the following environment variables
  ```bash
  PORT=9000
  MONGO_URI=mongodb://localhost:27017/todolist
  JWT_SECRET=your_jwt_secret_key or TECHQWER123
  ```
* Database Setup: Ensure MongoDB is running locally or modify the MONGODB_URI in the .env file to match your database setup.
* Run the Backend Server: Start the backend server in the backend folder
  ```bash
  npm run dev
  ```
   The server will start at http://localhost:9000.

## API Endpoints

**User Authentication**
* POST /api/register/
  * Request Body:
    ```bash
      {
        "username": "your_username",
        "password": "your_password"
      }
    ```
    
* POST /api/login/
   * Request Body:
     ```bash
     {
      "username": "your_username",
      "password": "your_password"
     }
     ```
   * resposne:200 OK with a JWT token:

     ```bash
     {
       "token": "jwt_token_here"
     }
     ```

**Task Management (Authenticated APIs)**

* POST /api/tasks/
  * Request Body:
    ```bash
    {
       "title": "Task title",
       "description": "Task description",
       "is_completed": false
     }

    ```

  * Response: 201 Created with the task details.

* GET /api/tasks/
  * Query Parameters: is_completed (optional, to filter tasks)
  * Response: 200 OK with an array of tasks.

* PUT /api/tasks/:id
  * Request Body:
    ```bash
    {
       "title": "Updated title",
       "description": "Updated description",
       "is_completed": true
     }

    ```
    
  * Response: 200 OK with the updated task details.

* DELETE /api/tasks/:id
  * Response: 200 OK if the task is deleted successfully.


## Database Schema

* User Schema
  ```bash
  const mongoose = require("mongoose");
  const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  is_completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Task", taskSchema);

  ```

* Task Schema
  ```bash
  const mongoose = require("mongoose");
  const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  });

  module.exports = mongoose.model("User", userSchema);

  ```

These schemas are used to store user and task information in MongoDB. Ensure you have created the database and added these schemas to your backend.

## Project Structure

**Backend**
* Routes: Defined in Express for CRUD operations at endpoints like /tasks, /auth/register, and /auth/login.
* Controllers: Handle business logic for each operation (e.g., adding, updating tasks, and authenticating users).
* Authentication Middleware: Used to secure task management routes with JWT token validation.
* Database: MongoDB stores user and task data, with Mongoose for schema modeling.
* Validation & Error Handling: Includes checks for required fields, user authentication, and error responses for invalid operations.

## Running Tests

To test API endpoints or other functionality, use tools like Postman or ThunderClient.
     
