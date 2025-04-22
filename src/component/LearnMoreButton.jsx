import React from 'react';

const LearnMoreButton = () => {
  return (
    <div className="flex justify-center items-center  m-0  h-14 ">
      <a
        href="/map"
        className="flex items-center justify-center bg-gradient-to-br from-red-600 to-black rounded-[25px] py-[15px] px-[30px] text-white text-xl no-underline shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
      >
        <img
          src="https://www.shutterstock.com/image-vector/map-nepal-red-fabric-draping-260nw-724165618.jpg"
          alt="Map of Nepal"
          className="w-[30px] mr-[10px]"
        />
        Learn More ➔
      </a>
    </div>
  );
};

export default LearnMoreButton;