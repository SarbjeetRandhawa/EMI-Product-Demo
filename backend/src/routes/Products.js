const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// GET /api/products
router.get('/', async (req, res) => {
  try {
    const prods = await Product.find({}, 'title brand baseSlug variants.name variants.slug variants.price variants.imageUrl');
    res.json(prods);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/products/:slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const prod = await Product.findOne({ 'variants.slug': slug });
    if (!prod) return res.status(404).json({ error: 'Not found' });
    const variant = prod.variants.find(v => v.slug === slug);
    res.json({
      product: {
        title: prod.title,
        brand: prod.brand,
        description: prod.description,
        baseSlug: prod.baseSlug,
        variants: prod.variants.map(v => ({ name: v.name, slug: v.slug }))
      },
      variant
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
