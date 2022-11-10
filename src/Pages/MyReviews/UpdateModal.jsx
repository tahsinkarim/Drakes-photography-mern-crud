import React, { useState } from "react";
import toast from "react-hot-toast";

const UpdateModal = ({ setShowModal, review, setReviews, reviews }) => {
  const [previousReview, setPreviousReview] = useState(review.review);
  const dbReview = {
    review: previousReview,
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(
      `https://server-photographer-tahsinkarim.vercel.app/update/${review._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(dbReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((rev) => rev._id !== review._id);
          const updated = reviews.find((rev) => rev._id === review._id);
          updated.review = dbReview.review;

          const newReviews = [updated, ...remaining];
          setReviews(newReviews);
          toast.success("Review Updated");
          setShowModal(false);
        }
      });
  };
  return (
    <div>
      <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative my-6 mx-auto max-w-5xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
              <h3 className='text-3xl font-semibold'>Update Review</h3>
            </div>
            <div className='relative p-4 flex-auto'>
              <form onSubmit={handleUpdate} className='rounded w-full'>
                <label className='block text-black text-sm font-bold mb-1'>
                  Your Review
                </label>
                <textarea
                  onChange={(e) => setPreviousReview(e.target.value)}
                  defaultValue={review.review}
                  name='newReview'
                  className='shadow appearance-none border rounded w-full py-2 px-1 text-black'
                ></textarea>
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-gray-500 font-bold uppercase text-sm px-6 py-3 rounded  hover:underline outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className='text-white bg-yellow-600/70 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                    type='submit'
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
