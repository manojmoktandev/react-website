import React from "react";
import './../css/ReviewContainer.css';
const ReviewProduct = ({productReviews})=>{
  // Function to render stars based on the rating
  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <span key={i} className="star">
          &#9733;
        </span>
      ));
  };

  return (
    <div className="reviews-container">
      <h2 className="reviews-heading">Customer Reviews</h2>
      <div className="reviews-grid">
        {productReviews?.map((review) => (
          <div className="review-card">
            <h3 className="review-name">{review.reviewerName}</h3>
            <div className="review-rating">{renderStars(review.rating)}</div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

export default ReviewProduct;