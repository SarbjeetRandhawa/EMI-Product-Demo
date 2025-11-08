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

module.exports = mongoose.model('Products', ProductSchema);
