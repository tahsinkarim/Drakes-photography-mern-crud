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
      photoURL: user.photoURL,
      review: review,
      service: id,
      date: new Date(),
    };
    console.log(reviewObj);
    //Post Review
    fetch("https://server-photographer-tahsinkarim.vercel.app/reviews", {
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
    <div className='mx-4 md:mx-8'>
      <h1>Reviews</h1>
      {user?.uid ? (
        <form
          onSubmit={handleSubmit}
          className='flex flex-col max-w-5xl mx-auto mb-20'
        >
          <textarea
            className='bg-gray-200 mb-8 h-28 px-4 py-4'
            type='text'
            placeholder='Your review'
            name='review'
          ></textarea>
          <button
            className='text-sm font-bold tracking-widest bg-yellow-600/70 text-white w-40 mx-auto py-3 '
            type='submit'
          >
            Submit
          </button>
        </form>
      ) : (
        <Link to='/login'>Log in to comment</Link>
      )}
    </div>
  );
};

export default ReviewsSection;
