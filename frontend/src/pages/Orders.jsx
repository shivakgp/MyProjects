import React, { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then((r) => r.json())
      .then(setOrders)
      .catch(() => {});
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((o) => (
          <li key={o.id} className="border p-2 mb-2">
            Order #{o.id} - ${o.total}
          </li>
        ))}
      </ul>
    </div>
  );
}
