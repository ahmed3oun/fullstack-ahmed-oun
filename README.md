# React-Node Project

---

# Node.js Backend Project
## Description

This is a Node.js backend project built with TypeScript. It provides a robust and scalable backend solution, utilizing modern tools and best practices for development and deployment.

---

## Project Setup

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nodejs-back.git
   cd nodejs-back
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Starting the Server

- **For Production Mode:**
  ```bash
  npm run start
  ```
  This will build the project and start the server from the compiled files.

- **For Development Mode:**
  ```bash
  npm run serve
  ```
  This will run the TypeScript compiler in watch mode and start the server using `nodemon` for hot reloading.

---

## Project Structure

```
nodejs-back/
├── src/                 # TypeScript source files
│   ├── server.ts         # Main application entry point
│   ├── routes/          # API route definitions
│   ├── controllers/     # Controllers for handling requests
│   ├── services/      # Custom middleware
├── dist/                # Compiled JavaScript files (generated)
├── package.json         # Project configuration and dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

---

## Dependencies

### Core Dependencies
- **axios**: HTTP client for making API requests.
- **compression**: Middleware for response compression.
- **concurrently**: For running multiple processes during development.
- **cors**: Middleware for handling CORS policies.
- **dotenv**: For environment variable management.
- **express**: Web framework for building APIs.

### Development Dependencies
- **typescript**: For TypeScript compilation.
- **ts-node**: To run TypeScript files directly.
- **nodemon**: For hot reloading during development.
- **rimraf**: For cleaning up files and directories.

---

## Environment Variables

Create a `.env` file in the root directory with the required environment variables:

```env
PORT=4000
NODE_ENV=development
```

---

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## Author

Developed by [Ahmed OUN](https://github.com/ahmed3oun).
