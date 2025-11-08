const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('../models/Products');
const seedData = require('../seedData');

async function seed() {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await Product.deleteMany({});
  await Product.insertMany(seedData);
  console.log('Seeded DB with', seedData.length, 'products');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
