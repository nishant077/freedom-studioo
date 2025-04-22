import React from 'react';

// import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchImage } from '../../../Api/ImageConfig';

const Section3 = ({location}) => {
  return (
    <>
      <div className="bg-[#f7f9f9] min-h-[400px] mt-12 flex-wrap p-3">
        <div className="md:flex md:justify-evenly  md:gap-12 ">
          <img
            src={fetchImage(location.issuedDetailImage1)}
            className="md:h-60 h-54 md:w-60 w-72 ml-10 md:ml-28 mt-7 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h1 className="font-bold md:text-3xl text-xl text-justify mt-20 md:tracking-tighter">
            {location.issuedDetailTitle}
            </h1>

            <p className="text-pretty antialiased font-sans opacity-70 text-justify m-2">
              {location.issuedDetailDescription} 
            </p>
          </div>
          <img
            src={fetchImage(location.issuedDetailImage2)}
            className="h-52 w-52 object-cover mt-64 mr-28 rounded-lg lg:block hidden"
          />
        </div>
      </div>
    </>
  );
};


export default Section3;