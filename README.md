⚙️ Setup and Run Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/product-emi-app.git
cd product-emi-app

2️⃣ Backend Setup
cd backend
npm install


Create a .env file inside /backend:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

Seed the database with sample products:
npm run seed

Start the backend server:
npm run dev


The backend will run at:

http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


The frontend will run at:

http://localhost:5173


Make sure your backend is running before opening the frontend.

🧩 API Endpoints
🔹 Get all products

GET /api/products

Response Example:

[
  {
    "_id": "674b12345f",
    "title": "Apple iPhone 17 Pro",
    "brand": "Apple",
    "description": "The latest iPhone with A18 chip.",
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

🔹 Get product by slug

GET /api/products/:slug

Example Request:

GET /api/products/iphone-17-pro-silver-256gb


Response Example:

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

🧾 Database Schema
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
