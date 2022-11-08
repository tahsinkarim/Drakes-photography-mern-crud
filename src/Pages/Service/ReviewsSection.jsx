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
      name: user.displayName,
      review: review,
      service: id,
      date: new Date(),
    };
    console.log(reviewObj);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review posted");
          form.reset();
        }
      });
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
