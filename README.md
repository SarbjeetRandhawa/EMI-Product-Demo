# 📱 Product EMI Plans Web Application

A simple **MERN stack** project that displays smartphones with multiple EMI plans.  
Products and EMI details are stored in **MongoDB Atlas** and served via a **Node.js + Express API**.  
The frontend is built with **React (Vite)**.

---

## 🚀 1. Setup and Run Instructions

## 🖥 Backend Setup

```bash
cd backend
npm install
```

---
## Create a .env file in the backend folder and add:

```bash

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

```

# Seed the database with sample data:
```bash

npm run seed
```

# Start the backend server:

```bash

npm run dev
```

# Backend will run on:

```bash
http://localhost:5000
```

# 💻 Frontend Setup

```bash

cd frontend
npm install
npm run dev
```

# Frontend will run on:
```bash
http://localhost:5173
```
# 🌐 2. API Endpoints and Example Responses

GET /api/products

Fetch all products with their variants and EMI plans.

Example Response:

```bash
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
```
GET ```bash/api/products/:slug```

Fetch a single product variant by its slug.

Example Request:

```bash

GET /api/products/iphone-17-pro-silver-256gb
```
# Example Response:

```bash
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
```
# ⚙️ 3. Tech Stack Used
## Frontend
React (Vite)

CSS

Axios

## Backend
Node.js

Express.js

Mongoose

Dotenv

Nodemon

Database
MongoDB Atlas

# 🧩 4. Schema Used
Product Schema
```bash
const mongoose = require('mongoose');

const EMIPlanSchema = new mongoose.Schema({
  tenureMonths: { type: Number, required: true },
  monthlyAmount: { type: Number, required: true },
  interestRatePercent: { type: Number, required: true },
  cashback: { type: Number, default: 0 },
  description: { type: String }
});

const VariantSchema = new mongoose.Schema({
  name: String,
  color: String,
  storage: String,
  price: Number,
  mrp: Number,
  imageUrl: String,
  slug: { type: String, required: true, unique: true },
  emiPlans: [EMIPlanSchema]
});

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: String,
  description: String,
  baseSlug: { type: String, required: true },
  variants: [VariantSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
```
