import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewCard from "../Shared/ReviewCard";

const ReviewsSection = ({ service }) => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const reviewObj = {
      user: user.uid,
      name: user.displayName,
      photoURL: user.photoURL,
      review: review,
      service: service._id,
      title: service.title,
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

  useEffect(() => {
    fetch(
      `https://server-photographer-tahsinkarim.vercel.app/reviews/${service._id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [handleSubmit]);
  return (
    <div className='mx-4 md:mx-8 pt-16'>
      <h1 className='text-3xl md:text-5xl lg:text-4xl font-bold mb-4 text-center'>
        Check out what our customers have to say
      </h1>

      {reviews.length < 1 ? (
        <h2 className='text-center text-gray-500 font-semibold text-2xl my-16'>
          No reviews for this service
        </h2>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto my-9'>
          {reviews.map((rev) => (
            <ReviewCard key={rev._id} rev={rev}></ReviewCard>
          ))}
        </div>
      )}

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
        <div className='flex justify-center'>
          <Link
            state={{ from: location }}
            replace
            className='text-center text-white text-sm font-bold bg-[#141414] py-4 px-7 tracking-widest mb-4'
            to='/login'
          >
            Log in to add review
          </Link>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
