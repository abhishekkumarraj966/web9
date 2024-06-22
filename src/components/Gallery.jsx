import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopupAlbum from "./PopupAlbum";
import gl1 from "./assets/gal1.png";
import gl2 from "./assets/gal2.png";
import gl3 from "./assets/gal1.png";
import gl4 from "./assets/gal2.png";
import gl5 from "./assets/gal1.png";
import AppLayout from "./AppLayout";
const Galleary = () => {
  let [isPopOpen, setIsPopupOpen] = useState(false);
  let [imsg, setImage] = useState(0);

  let openPopup = (ImageNo) => {
    setIsPopupOpen(true);
    setImage(ImageNo);
  };

  return (
    <div> 
      {" "}
      <div className="border-y-4 border-[#920C26]" id="gallery">
        <AppLayout>
          <p className="text-center font-bold text-[30px] items-start   text-[#FFF]">
            Gallery
          </p>
        </AppLayout>
        <div className="w-[80%] mx-auto pb-10 ">
          <div className=" pt-[15px]  md:hidden ">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              <div className="flex items-center justify-center ">
                <img
                  src={gl1}
                  className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] mx-auto rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px]"
                  onClick={() => openPopup(0)}
                  alt="Image 1"
                />
              </div>
              <div className="flex items-center justify-center ">
                <img
                  src={gl2}
                  className="transition-transform transform duration-100 hover:scale-110 w-[281px] mx-auto h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px]"
                  alt="Image 2"
                  onClick={() => openPopup(1)}
                />
              </div>
            </Slider>
          </div>

          <div className=" flex-wrap justify-center mt-[60px] hidden px-[10px] gap-y-[12px] md:flex">
            <img
              src={gl1}
              className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="Image 1"
              onClick={() => openPopup(0)}
            />
            <img
              src={gl2}
              className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="Image 2"
              onClick={() => openPopup(1)}
            />

            <img
              src={gl3}
              className="w-[281px] h-[168px] transition-transform transform duration-100 hover:scale-110 rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="Image 1"
              onClick={() => openPopup(0)}
            />
            <img
              src={gl4}
              className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="Image 2"
              onClick={() => openPopup(1)}
            />

            <img
              src={gl5}
              className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="Image 1"
              onClick={() => openPopup(0)}
            />
            <img
              src={gl1}
              className="w-[281px] transition-transform transform duration-100 hover:scale-110 h-[168px] rounded-[12px] lg:h-[191px] lg:w-[318px] lg:rounded-[12px] mx-2"
              alt="Image 2"
              onClick={() => openPopup(1)}
            />
          </div>
        </div>
        {isPopOpen && (
          <PopupAlbum
            setIsPopupOpen={setIsPopupOpen}
            imsg={imsg}
            setImage={setImage}
          />
        )}
      </div>
    </div>
  );
};

export default Galleary;
