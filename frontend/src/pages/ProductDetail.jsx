import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState('');

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((r) => r.json())
      .then(setProduct)
      .catch(() => {});
  }, [id]);

  const addReview = () => {
    // placeholder: send review to API
    setReview('');
  };

  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="h-48" />
      <p>{product.description}</p>
      <div>${product.price}</div>
      <button>Add to Cart</button>

      <h3>Reviews</h3>
      <ul>
        {(product.reviews || []).map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write a review"
      />
      <button onClick={addReview}>Submit Review</button>
    </div>
  );
}
