import React from "react";

import "./starRatings.scss";

export const StarRating: React.FC = () => {
  return (
    <div className="star-rating-block">
      <div className="star-ratings">
        <div className="fill-ratings">
          <span>★★★★★</span>
        </div>
        <div className="empty-ratings">
          <span>★★★★★</span>
        </div>
      </div>
      <div>
        <span className="signUpEmailText">Trusted by 100k+ users</span>
      </div>
    </div>
  );
};
