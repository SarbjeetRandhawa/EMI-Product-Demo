Product EMI Plans Web App

This is a full-stack web application that displays products such as smartphones along with multiple EMI plans.
The data (product details, variants, and EMI options) is stored in MongoDB Atlas and fetched dynamically through a Node.js + Express API.
The frontend is built using React (Vite) and styled with plain CSS.

1. Setup and Run Instructions
Backend Setup

Navigate to the backend folder:

cd backend


Install dependencies:

npm install


Create a .env file inside the backend folder and add:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000


Seed the database with sample data:

npm run seed


Start the backend server:

npm run dev


The backend will run on http://localhost:5000.

Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend development server:

npm run dev


The frontend will run on http://localhost:5173.

2. API Endpoints and Example Responses
Get All Products

Endpoint:

GET /api/products


Example Response:

[
  {
    "_id": "674b12345f",
    "title": "Apple iPhone 17 Pro",
    "brand": "Apple",
    "description": "Latest generation iPhone with advanced features.",
    "baseSlug": "iphone-17-pro",
    "variants": [
      {
        "name": "Silver 256GB",
        "color": "Silver",
        "storage": "256GB",
        "price": 149999,
        "mrp": 159999,
        "imageUrl": "https://example.com/iphone17-silver.png",
        "slug": "iphone-17-pro-silver-256gb",
        "emiPlans": [
          {
            "tenureMonths": 12,
            "monthlyAmount": 12499,
            "interestRatePercent": 0,
            "cashback": 2000
          }
        ]
      }
    ]
  }
]

Get Product by Slug

Endpoint:

GET /api/products/:slug


Example:

GET /api/products/iphone-17-pro-silver-256gb


Example Response:

{
  "title": "Apple iPhone 17 Pro",
  "brand": "Apple",
  "variant": {
    "name": "Silver 256GB",
    "price": 149999,
    "emiPlans": [
      {
        "tenureMonths": 12,
        "monthlyAmount": 12499,
        "interestRatePercent": 0
      }
    ]
  }
}

3. Tech Stack Used
Frontend

React (Vite)

CSS

Axios

Backend

Node.js

Express.js

Mongoose

Dotenv

Nodemon

Database

MongoDB Atlas
