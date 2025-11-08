const BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export async function fetchProductList() {
  const res = await fetch(`${BASE}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductBySlug(slug) {
  const res = await fetch(`${BASE}/api/products/${slug}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Product not found');
  }
  return res.json();
}
