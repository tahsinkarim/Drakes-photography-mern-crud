import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const ReviewsSection = ({ id }) => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const reviewObj = {
      user: user.uid,
      review: review,
      service: id,
      date: new Date().toISOString(),
    };
    console.log(reviewObj);
  };
  return (
    <div>
      <h1>Reviews</h1>
      {user?.uid ? (
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='review' name='review' />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <Link to='/login'>Log in to comment</Link>
      )}
    </div>
  );
};

export default ReviewsSection;
