import React, { useEffect, useState } from 'react';
import { fetchProductList } from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetchProductList().then(setList).catch(console.error);
  }, []);

  return (
    <div className="page page--center">
      <div className="card" style={{maxWidth:900}}>
        <h1>Products</h1>
        <p>Click a product to open product page:</p>
        {!list && <p>Loading...</p>}
        {list && (
          <ul>
            {list.map((p) => (
              <li key={p._id}>
                <strong>{p.title}</strong> — variants:
                <ul>
                  {p.variants.map(v => (
                    <li key={v.slug}>
                      <Link to={`/products/${v.slug}`}>{v.name} — ₹{v.price.toLocaleString()}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
