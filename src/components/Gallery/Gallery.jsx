import React from "react";

const Gallery = () => {
  return (
    <div>
         <div id="Gallery" className="flex justify-center items-center flex-col text-center">
        <h1 className="uppercase text-orange-400 text-lg sm:text-xl tracking-wide">Gallery</h1>
        <h2 className="font-Wedding text-4xl sm:text-5xl lg:text-6xl my-5 border-b-4 p-4 border-orange-400 mb-10">
        A Visual Feast
        </h2>
      </div>
      <section className="text-gray-600 body-font">
        
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
      
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./KKM_0236.JPG"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./KKM_0222.JPG"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="./KKM_0300.JPG"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="./KKM_0215.JPG"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./KKM_0273.JPG"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="./KKM_0396.JPG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
