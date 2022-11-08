import React from "react";
import img from "../../assets/banner2.jpg";

const AboutUs = () => {
  return (
    <div className='mt-20'>
      <h1 className='text-4xl font-bold text-center mb-8'>About Us</h1>
      <div className='bg-black'>
        <div className=' md:flex flex-row-reverse text-white py-20 md:py-28 px-8 gap-16 max-w-7xl mx-auto items-center'>
          <div className='md:w-1/2'>
            <h2 className='text-2xl lg:text-3xl font-bold mb-4 lg:text-center'>
              THE MAPHOTO EXPERIENCE
            </h2>
            <p className='lg:text-lg'>
              We specialize in wedding photography, engagement photography,
              maternity photography, family photography, and more. Indoors or
              outdoors, by the sea or inland, we've done it all! If you're
              thinking of adding a wedding video, we offer cinematography
              services as well. We also have options for destination bridal
              shoots for couples who want to shoot in locations outside of
              Southern California, and have photographed weddings all over the
              world. Since 2012, we have helped over 750 amazing couples
              document their weddings around the world.
            </p>
          </div>
          <div className='md:w-1/2 mt-20'>
            <img className='border' src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
