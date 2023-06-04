import React from "react";

import "./starRatings.scss";

interface StarRatingProps {
  color: "white" | "black";
}

export const StarRating: React.FC<StarRatingProps> = ({ color }) => {
  return (
    <div className="star-rating-block">
      <div className={`star-ratings ${color}`}>
        <div className={`fill-ratings ${color}`}>
          <span>★★★★★</span>
        </div>
        <div className="empty-ratings">
          <span>★★★★★</span>
        </div>
      </div>
      <div>
        <span className={`signUpEmailText ${color}`}>
          Trusted by 100k+ users
        </span>
      </div>
    </div>
  );
};
