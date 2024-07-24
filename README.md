# JWT Application

This is a simple authentication application that uses JSON Web Tokens (JWT) for user registration and login. The application is built with Node.js, Express, MongoDB, and React.

## Features

- User Registration
- User Login
- Password Hashing
- JWT Authentication
- CORS Support

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- React
- Axios
- JWT (jsonwebtoken)
- bcrypt
- dotenv

## Prerequisites

- Node.js (v14 or later)
- MongoDB
- npm (Node Package Manager)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Tushar-goyal-25/jwtapplication.git
cd jwtapplication
```

### 2. Backend Setup

#### Install Dependencies

```bash
cd backend
npm install
```

#### Environment Variables

Create a `.env` file in the `backend` directory with the following contents:

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start the Backend Server

```bash
npm start
```

The backend server will start on `http://localhost:8000`.

### 3. Frontend Setup

#### Install Dependencies

```bash
cd frontend
npm install
```

#### Start the Frontend Server

```bash
npm run dev
```

The frontend server will start on `http://localhost:3000`.

## Project Structure

```
jwtapplication
├── backend
│   ├── controllers
│   │   └── authcontroller.js
│   ├── helpers
│   │   └── auth.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   └── authroutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend
    ├── public
    ├── src
    │   ├── components
    │   │   └── Login.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── .env
```

## API Endpoints

### Registration

- **URL:** `/register`
- **Method:** `POST`
- **Description:** Register a new user
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

### Login

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Log in an existing user
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

## Security Considerations

- Ensure that the `JWT_SECRET` is kept secure and not exposed in public repositories.
- Use HTTPS in production to secure the communication between the client and server.
- Implement rate limiting to protect against brute force attacks.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, feel free to contact me at pottertushar@gmail.com.

---

Feel free to customize the README as per your specific requirements and add more details as necessary.
