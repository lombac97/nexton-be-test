
# Nexton BE Test

## Description
This project is a basic Calculator API built with Node.js and Express. It evaluates mathematical expressions, including basic operations (addition, subtraction, multiplication, and division) and supports parentheses for grouped operations and decimal numbers.

## Features
- Supports addition, subtraction, multiplication, and division.
- Evaluates expressions with parentheses.
- Handles decimal numbers.
- Provides a REST API endpoint to evaluate mathematical expressions.

## Prerequisites
- Node.js (version 18.x or higher)
- npm (Node Package Manager)

## Installation
1. Clone the repository to your local machine:
   ```bash
   git clone git@github.com:lombac97/nexton-be-test.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nexton-be-test
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Project
1. Start the server by running:
   ```bash
   node src/index.js
   ```
   alternatively you can run:
   ```bash
   npm start
   ```
2. The server will start on the default port `3000`. You should see a message in the console:
   ```
   Server is running on http://localhost:3000
   ```
NOTE: if you want to use another port, you can just create a .env file in the route of the project with PORT= (see .env.example for reference)

## Usage
- Once the server is running, you can send a POST request to the API endpoint `/api/calculate` to evaluate an expression.

### Example Request
- URL: `http://localhost:3000/api/calculate`
- Method: `POST`
- Body:
   ```json
   {
     "expression": "10 * (2 + 3) / 2"
   }
   ```

### Example Response
   ```json
   {
     "result": 25
   }
   ```

## Project Structure
- `src/`: Contains the main source code.
   - `app.js`: Configures the Express app and sets up middleware.
   - `index.js`: The main entry point to start the server.
   - `controllers/`: Contains the controller for the calculator endpoint.
   - `services/`: Contains the core calculation logic in `calculatorService.js`.
   - `routes/`: Defines the API routes for the application.

## Author
Carlos Gonzalez