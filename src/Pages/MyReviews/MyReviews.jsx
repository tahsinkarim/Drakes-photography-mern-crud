import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InfinitySpin } from "react-loader-spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import UpdateModal from "./UpdateModal";

const MyReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [review, setReview] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [title, setTitle] = useState("My Reviews");

  //Dynamic title
  useEffect(() => {
    document.title = title;
  }, [title]);

  //Delete review
  const handleDelete = (id) => {
    fetch(`https://server-photographer-tahsinkarim.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Review Deleted");
          const remaining = reviews.filter((e) => e._id !== id);
          setReviews(remaining);
        }
      });
  };

  //Modal Toggle
  const handleModal = (rev) => {
    setReview(rev);
    setShowModal(!showModal);
  };

  useEffect(() => {
    fetch(
      `https://server-photographer-tahsinkarim.vercel.app/reviews/?user=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user]);

  //Show spinner while loading
  if (reviews === null) {
    return (
      <div className='flex justify-center'>
        <InfinitySpin width='200' color='#CA8A04' />
      </div>
    );
  }
  return (
    <div className='max-w-7xl mx-auto my-20'>
      {reviews?.length < 1 ? (
        <p className='text-center text-3xl'>No Reviews were added</p>
      ) : (
        <table className='border w-[90%] max-w-7xl mx-auto'>
          <thead className='border-b bg-gray-800'>
            <tr>
              <th
                scope='col'
                className='text-sm font-medium text-white px-4 py-4'
              >
                Service
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-white px-4 py-4'
              >
                Review
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-white px-4 pr-8 py-4'
              >
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((rev) => (
              <tr className='bg-white border-b' key={rev._id}>
                <td className='px-6 py-4 text-sm font-medium text-gray-900'>
                  {rev.title}
                </td>
                <td className='text-sm text-gray-900 px-6 py-4'>
                  {rev.review}
                </td>
                <td className='text-sm text-gray-900 py-4 flex justify-center'>
                  <button
                    onClick={() => handleModal(rev)}
                    className='mr-4 py-2 px-4 bg-green-600 rounded text-white'
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(rev._id)}
                    className='py-2 px-4 bg-red-500 rounded text-white'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showModal && (
        <UpdateModal
          setReviews={setReviews}
          reviews={reviews}
          setReview={setReview}
          review={review}
          setShowModal={setShowModal}
        ></UpdateModal>
      )}
    </div>
  );
};

export default MyReviews;
