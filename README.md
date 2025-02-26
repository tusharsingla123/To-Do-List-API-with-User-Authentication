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
* MongoDB

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
     resposne:200 OK with a JWT token:
     {
       "token": "jwt_token_here"
     }
   
    ```


*post


     
