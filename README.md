1. Setup and Run Instructions
Backend Setup
cd backend
npm install


Create a .env file inside the backend folder and add:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000


Seed the database:

npm run seed


Run the backend:

npm run dev


Backend runs on http://localhost:5000

Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on http://localhost:5173

2. API Endpoints and Example Responses
GET /api/products

Description: Fetch all products with their variants and EMI plans.

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

GET /api/products/:slug

Description: Fetch a single product variant by its slug.

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

4. Schema Used

Product Schema

{
  title: String,
  brand: String,
  description: String,
  baseSlug: String,
  variants: [
    {
      name: String,
      color: String,
      storage: String,
      price: Number,
      mrp: Number,
      imageUrl: String,
      slug: String,
      emiPlans: [
        {
          tenureMonths: Number,
          monthlyAmount: Number,
          interestRatePercent: Number,
          cashback: Number
        }
      ]
    }
  ],
  createdAt: Date
}
