import React, { useState } from 'react';

export default function Checkout() {
  const [address, setAddress] = useState('');

  const placeOrder = () => {
    // send order to API
    setAddress('');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
