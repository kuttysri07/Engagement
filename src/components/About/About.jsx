import React from "react";

const About = () => {
  return (
    <div id="About" className="px-4 md:px-20 lg:px-40 py-12 md:py-24">
      {/* Section Header */}
      <div className="flex justify-center items-center flex-col text-center">
        <h1 className="uppercase text-orange-400 text-lg sm:text-xl tracking-wide">About</h1>
        <h2 className="font-Wedding text-4xl sm:text-5xl lg:text-6xl my-5 border-b-4 p-4 border-orange-400 mb-10">
          Groom & Bride
        </h2>
      </div>

      {/* Groom Section */}
      <div className="flex flex-wrap  md:flex-nowrap h-auto mb-12 lg:mb-0 ">
        <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-right bg-sky-100 flex flex-col justify-center">
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl pb-4">The Groom</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione nulla ea, facere commodi iure delectus nobis accusamus natus
            nemo quod est sequi impedit eius animi voluptates odit. Natus,
            nulla!
          </p>
          <div className="flex items-center justify-center md:justify-end py-3">
            <img className="h-8 sm:h-10 mr-2" src="./male.png" alt="Male Icon" />
            <h2 className="text-3xl sm:text-4xl font-Wedding">Arun</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            className="h-full sm:h-64 md:h-auto w-full object-cover"
            src="./KKM_0285.JPG"
            alt="The Groom"
          />
        </div>
      </div>

      {/* Bride Section */}
      <div className="flex flex-wrap md:flex-nowrap h-auto">
        <div className="w-full md:w-1/2">
          <img
            className="h-full sm:h-64 md:h-auto w-full object-cover"
            src="./sowmi.png"
            alt="The Bride"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-10 text-center md:text-left bg-sky-100 flex flex-col justify-center">
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl pb-4">The Bride</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione nulla ea, facere commodi iure delectus nobis accusamus natus
            nemo quod est sequi impedit eius animi voluptates odit. Natus,
            nulla!
          </p>
          <div className="flex items-center justify-center lg:justify-start py-3">
            <h2 className="text-3xl sm:text-4xl font-Wedding mr-2">Sowmi</h2>
            <img className="h-8 sm:h-10" src="./female.png" alt="Female Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
