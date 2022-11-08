import React from "react";

const Awards = () => {
  return (
    <div className='mt-20 max-w-7xl mx-auto px-8'>
      <h2 className='text-4xl font-bold text-center mb-6'>
        AWARDS AND FELICITATIONS
      </h2>
      <h2 className='text-3xl font-semibold text-center mb-6'>
        WEDDING PHOTOGRAPHY
      </h2>
      <div className='flex justify-between text-center text-3xl font-semibold my-20'>
        <div>
          <p>50+</p>
          <p className='tracking-widest text-lg'>
            PREMIUM <br /> WEDDING
          </p>
        </div>
        <div>
          <p>500+</p>
          <p className='tracking-widest text-lg'>
            ELITE WEDDING <br /> PACKAGE
          </p>
        </div>
        <div>
          <p>320+</p>
          <p className='tracking-widest text-lg'>
            HONEYMOON <br /> PACKAGES
          </p>
        </div>
        <div>
          <p>1000+</p>
          <p className='tracking-widest text-lg'>
            STANDARD <br /> WEDDING
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
