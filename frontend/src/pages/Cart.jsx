import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [items, setItems] = useState([]); // placeholder state

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const updateQty = (id, qty) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border p-2 mb-2">
            <div>{item.name}</div>
            <div>${item.price}</div>
            <input
              type="number"
              value={item.qty}
              onChange={(e) => updateQty(item.id, Number(e.target.value))}
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Total: ${total.toFixed(2)}</div>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}
