import React from "react";



function Feature({ icon, title }) {
  
  return (
   
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <div
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../img/${icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
        </div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-4">
          Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
          libero, sit amet laoreet lorem.
        </span>

        <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
          Learn more
        </span>
      </div>
    
  );
}

export default Feature;