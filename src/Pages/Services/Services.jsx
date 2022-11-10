import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { InfinitySpin } from "react-loader-spinner";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { Link } from "react-router-dom";

const Services = () => {
  const [title, setTitle] = useState("My Services");
  const [services, setServices] = useState([]);

  //Dynamic title
  useEffect(() => {
    document.title = title;
  }, [title]);

  //Get all services
  useEffect(() => {
    fetch("https://server-photographer-tahsinkarim.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //Short text if more than 100 letters
  const textShort = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    } else {
      return text;
    }
  };

  if (services.length < 1) {
    return (
      <div className='flex justify-center'>
        <InfinitySpin width='200' color='#CA8A04' />
      </div>
    );
  }

  return (
    <div className='mb-16'>
      <div
        className='h-[90vh] sm:h-[65vh] bg-no-repeat bg-cover bg-center md:items-end px-8 text-white relative'
        style={{ backgroundImage: `url(${services[0].img})` }}
      >
        <div className='absolute top-0 right-0 w-full h-full bg-black opacity-50'></div>
        <div className='max-w-7xl mx-auto flex flex-col justify-center h-full relative'>
          <div>
            <h1 className='text-3xl sm:text-4xl font-bold'>My Services</h1>
            <p className='my-4 text-sm font-bold tracking-widest md:pt-4'>
              Ranked #1 Wedding Photographer in the USA
            </p>
            <p className='sm:text-lg max-w-3xl lg:max-w-4xl mb-8 font-medium md:py-4'>
              Welcome to my photography studio! I offers a wide range of
              services throughout Los Angeles, perfect for any occasion. I
              specialize in wedding, engagement, family, and pet photography,
              and I also offer portrait sessions, headshots, and product
              photography. Our talented photographers will work with you to
              create beautiful photographs that you'll cherish forever.
            </p>
          </div>
        </div>
      </div>
      <p className='sm:text-center text-xl md:text-3xl mt-20 mb-10 font-semibold mx-4'>
        Choose from a list of our services below
      </p>
      <div className='mx-4'>
        {
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 max-w-7xl mx-auto'>
            {services.map((service) => (
              <div className='border shadow' key={service._id}>
                <PhotoProvider>
                  <PhotoView src={service.img}>
                    <img
                      className='cursor-pointer'
                      src={service.img}
                      alt={service.title}
                    />
                  </PhotoView>
                </PhotoProvider>
                <div className='px-4'>
                  <h3 className='text-2xl font-semibold mt-6 underline'>
                    {service.title}
                  </h3>
                  <div className='mt-2 flex items-center gap-2 text-sm text-yellow-600 font-semibold'>
                    <FaStar />
                    <span>{service.rating}</span>
                  </div>
                  <p className='mt-2 text-gray-600'>
                    {textShort(service.description)}
                  </p>
                  <div className='my-3 flex items-center justify-between'>
                    <div>
                      <span className='text-yellow-600 font-semibold'>$</span>
                      <span className='text-2xl font-bold text-yellow-600'>
                        {service.price}
                      </span>
                    </div>
                    <Link
                      to={`/services/${service._id}`}
                      className='flex items-center px-2 py-1 round text-yellow-600 border-2 border-white hover:border-yellow-600 rounded mr-4'
                    >
                      <p className='font-semibold mr-1'>Details</p>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-5 h-5 mt-1'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Services;
