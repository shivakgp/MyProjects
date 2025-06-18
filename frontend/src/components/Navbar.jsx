import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = null; // replace with auth logic
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      {user ? (
        <>
          <span>{user.name}</span>
          <Link to="/orders">My Orders</Link>
          <button>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
