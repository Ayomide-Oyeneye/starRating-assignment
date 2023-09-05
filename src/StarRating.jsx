import React from 'react';

function StarRating({ rating }) {
  // Create an array to store the star elements based on the 'rating' prop
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <img
        key={i}
        alt=" "
        className="gold star"
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      />
    );
  }

  return <div className="star-wrapper">{stars}</div>;
}

export default StarRating;
