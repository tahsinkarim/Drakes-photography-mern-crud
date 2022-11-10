import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ReviewsSection from "./ReviewsSection";

const Service = () => {
  const service = useLoaderData();
  const { _id, title, img, rating, price, description } = service;
  const [pageTitle, setPageTitle] = useState(`${title}`);

  useEffect(() => {
    document.title = pageTitle;
  }, [title]);

  return (
    <div>
      <div
        className='h-[80vh] sm:h-[65vh] bg-no-repeat bg-cover bg-center md:items-end px-8 text-white relative'
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className='absolute top-0 right-0 w-full h-full bg-black opacity-50'></div>
        <div className='max-w-7xl mx-auto flex flex-col justify-center h-full relative'>
          <div>
            <h1 className='text-3xl sm:text-6xl font-bold'>
              {title} Collections
            </h1>
            <p className='my-4 text-sm font-bold tracking-widest md:pt-4'>
              Ranked #1 Wedding Photographer in the USA
            </p>
            <p className='sm:text-lg max-w-2xl lg:max-w-lg mb-8 font-medium md:py-4'>
              The original luxury cinematic wedding photography studio. We are a
              Los Angeles Wedding Photographer serving all of Southern
              California and destinations worldwide
            </p>
            <Link
              to='/services'
              className='py-4 px-8 bg-white text-black text-sm font-bold tracking-widest cursor-pointer hover:bg-gray-200 lg:mt-8'
            >
              EXPLORE OTHER SERVICES
            </Link>
          </div>
        </div>
      </div>
      <div className='my-20 px-8 max-w-7xl mx-auto'>
        <div className='md:flex gap-8 items-center'>
          <div className='md:w-1/2'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-10'>
              {title} Services Description
            </h2>
            <p className='text-lg font-medium text-gray-600 sm:pr-12'>
              {description}
            </p>
            <div className='my-4 flex items-center text-yellow-600 font-semibold'>
              <FaStar />
              <span className='text-gray-300 mx-2'>•</span>
              <span>{rating}</span>
            </div>
            <div className=''>
              <span className='text-lg font-semibold mr-4'>Price:</span>
              <span className='text-yellow-600 font-semibold'>$</span>
              <span className='text-2xl font-bold text-yellow-600'>
                {price}
              </span>
            </div>
          </div>
          <div className='md:w-1/2 mt-10 md:mt-0'>
            <img className='' src={img} alt='' />
          </div>
        </div>
      </div>
      <ReviewsSection service={service}></ReviewsSection>
    </div>
  );
};

export default Service;
