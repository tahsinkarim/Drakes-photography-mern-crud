import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewCard from "../Shared/ReviewCard";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://server-photographer-tahsinkarim.vercel.app/reviews/?user=${user?.uid}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto my-20'>
      {reviews.map((rev) => (
        <ReviewCard key={rev._id} rev={rev}></ReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
