import React from "react";

const Awards = () => {
  return (
    <div className='mt-20 max-w-7xl mx-auto px-4 sm:px-8'>
      <h2 className='text-4xl font-bold text-center mb-6'>
        AWARDS AND FELICITATIONS
      </h2>
      <h2 className='text-3xl font-semibold text-center mb-6'>
        WEDDING PHOTOGRAPHY
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 text-center text-3xl font-semibold my-20 gap-4'>
        <div className='relative'>
          <img
            className='opacity-50'
            src='https://images.unsplash.com/photo-1562782500-cac2d3b5b54d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=30'
            alt=''
          />
          <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
            <p>50+</p>
            <p className='tracking-widest text-lg'>
              PREMIUM <br /> WEDDING
            </p>
          </div>
        </div>
        <div className='relative'>
          <img
            className='opacity-50'
            src='https://images.unsplash.com/photo-1536567307162-551e460b7fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=30'
            alt=''
          />
          <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
            <p>500+</p>
            <p className='tracking-widest text-lg'>ELITE PACKAGE</p>
          </div>
        </div>
        <div className='relative'>
          <img
            className='opacity-50'
            src='https://images.unsplash.com/photo-1523369579000-4ec0fe04db44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=30'
            alt=''
          />
          <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
            <p>320+</p>
            <p className='tracking-widest text-lg'>
              HONEYMOON <br /> PACKAGES
            </p>
          </div>
        </div>
        <div className='relative'>
          <img
            className='opacity-50'
            src='https://images.unsplash.com/photo-1524055117800-683336a51803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=30'
            alt=''
          />
          <div className='absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
            <p>1000+</p>
            <p className='tracking-widest text-lg'>
              STANDARD <br /> WEDDING
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
