import React from "react";
import img from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className='h-[80vh] sm:h-[65vh] bg-bottom bg-no-repeat bg-cover md:items-end md:pr-8 text-white px-3 relative'
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className='max-w-7xl mx-auto flex flex-col md:items-end justify-center h-full'>
        <div>
          <h1 className='text-2xl lg:text-3xl max-w-md font-bold '>
            Often Imitated. Never Duplicated.
          </h1>
          <p className='my-4 text-sm font-bold tracking-widest'>
            Ranked #1 Wedding Photographer in the USA
          </p>
          <p className='text-lg max-w-sm lg:max-w-lg mb-8 font-medium'>
            The original luxury cinematic wedding photography studio. We are a
            Los Angeles Wedding Photographer serving all of Southern California
            and destinations worldwide
          </p>
          <button
            onClick={() => console.log("hello")}
            className='py-4 w-60 bg-white text-black text-sm font-bold tracking-widest cursor-pointer hover:bg-gray-200'
          >
            EXPLORE SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
