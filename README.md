# Back-End Developer Test Project
A Node.js application designed to interact with a provided API to fetch and display product information, including product details, stock status, and sale eligibility. While the main focus of this project is on the back-end development, an optional front-end interface built with React.js is included, but with minimal code for the purpose of showcasing the backend functionality.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologiesUsed)
- [Installation](#installation)
- [Contributors](#contributors)

## Demo
[Video Demo](https://drive.google.com/file/d/1HJ1kAhktl9q5LbdIa91pKzeqbvy02wJq/view?usp=sharing)

## Features
- ### **Fetching Product Catalog**
  - Retrieves and displays a list of all available products from the API.

- ### **Fetching Detailed Product Information**
  - Fetches and displays detailed information for a specific product based on the product ID.

- ### **Checking Stock and Sale Eligibility**
  - Verifies the stock availability and sale eligibility of a specific product.

- ### **Optional Front-End Interface**
  - A simple React.js interface is included to display the fetched data. The front-end implementation was kept minimal and was developed only to demonstrate the backend functionality.

## Technologies Used

- **Frontend (Optional)**:
  - **Ant Design (antd)**: A React UI library that provides pre-designed components.
  - **Axios**: A promise-based HTTP client for making requests to the API.
  - **React Router**: For handling navigation within the React app.
  - **Tailwind CSS**: A utility-first CSS framework for styling.

- **Backend**:
  - **Axios**: Used for making HTTP requests to the external API.
  - **Express.js**: Web application framework for Node.js, used for building RESTful APIs.
  - **Node.js**: JavaScript runtime for building the server-side application.
  - **Swagger**: API documentation tool, used to generate interactive API docs.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/back-end-developer-test.git`
2. Install dependencies for the backend:
   - `cd backend && npm install`
3. Create a `.env` file in the `backend` directory.
   - Add the following environment variables to the `.env` file:
     ```
     PORT=your-preferred-port
     ACCESS_TOKEN=your-api-access-token
     ```
4. **Optional: Install dependencies for the frontend**:
   - `cd frontend && npm install`
5. Run the backend server: `cd backend && node server.js`
6. Access the backend service in your browser at `http://localhost:<PORT>`.
7. **Optional: Start the frontend server**:
   - `cd frontend && npm start`
8. Access the application in your web browser at `http://localhost:3000`.

## API Documentation
The following endpoints are provided for interacting with the product data:

- **GET /product**: Fetches the full list of products.
- **GET /product/{id}**: Retrieves detailed information for a specific product.
- **POST /product/{id}/check**: Checks the stock availability and sale eligibility for a specific product.

## Contributors

- [Jvan Hussein](https://github.com/jwanhussein151044078)
