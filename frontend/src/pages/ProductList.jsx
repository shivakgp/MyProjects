import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => {});
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-4">
        {filtered.map((p) => (
          <Link key={p.id} to={`/products/${p.id}`} className="border p-2">
            <img src={p.image} alt={p.name} className="h-32 w-full object-cover" />
            <div>{p.name}</div>
            <div>${p.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
