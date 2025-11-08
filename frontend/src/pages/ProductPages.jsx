import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductBySlug } from '../services/api';
import EMIPlanCard from '../components/EMIPlanCard';

export default function ProductPage() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null); setError(null);
    fetchProductBySlug(slug).then(setData).catch(err => setError(err.message || String(err)));
  }, [slug]);

  if (error) return <div className="page"><div className="card"><p>Error: {error}</p><Link to="/">Back</Link></div></div>;
  if (!data) return <div className="page"><p>Loading...</p></div>;

  const { product, variant } = data;

  return (
    <div className="page">
      <div className="container">
        <aside className="left-col card">
          <div className="meta small">{product.brand}</div>
          <h1 className="title">{product.title}</h1>
          <div className="variant">{variant.name}</div>
          <div className="image-wrap">
            <img src={variant.imageUrl} alt={variant.name} className="product-image" />
          </div>
          <div className="pricing">
            <div className="price">₹{variant.price.toLocaleString()}</div>
            <div className="mrp">₹{variant.mrp.toLocaleString()}</div>
          </div>
          <div className="variants-indicator">
            <div>Available in {product.variants.length} finishes</div>
            <div className="dots">
              {product.variants.map((v) => (
                <Link key={v.slug} to={`/products/${v.slug}`} className={`dot ${v.slug === variant.slug ? 'active' : ''}`} />
              ))}
            </div>
          </div>
          <div style={{marginTop:12}}>
            <Link to="/" className="link">← Back to products</Link>
          </div>
        </aside>

        <main className="right-col">
          <div className="card">
            <h2 className="section-title">EMI plans backed by mutual funds</h2>
            <div className="emi-list">
              {variant.emiPlans && variant.emiPlans.length ? (
                variant.emiPlans.map((plan, idx) => (
                  <EMIPlanCard
                    key={idx}
                    plan={plan}
                    isSelected={selectedPlanIndex === idx}
                    onSelect={() => setSelectedPlanIndex(idx)}
                  />
                ))
              ) : (
                <p>No EMI plans available.</p>
              )}
            </div>

            <div className="actions">
              <button
                className="primary-btn"
                onClick={() => {
                  if (selectedPlanIndex === null) {
                    alert('Select an EMI plan first');
                    return;
                  }
                  const p = variant.emiPlans[selectedPlanIndex];
                  alert(`Proceeding with ${p.tenureMonths} months — ₹${p.monthlyAmount} / month`);
                }}
              >
                Proceed with selected plan
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
