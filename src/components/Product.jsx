import AppLayout from "./AppLayout";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Productmock from "./MockData/Productmock";
// import required modules
import { Keyboard, Pagination } from "swiper/modules";
// import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="my-10 mx-6" id="products">
      <AppLayout>
        <h2 className=" font-bold text-[30px] text-center text-white">Products</h2>
        <div className=" hidden sm:block">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={{
            //   clickable: true,
            // }}
            modules={[Keyboard, Pagination]}
            className="mySwiper"
          >
            {Productmock.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="px-2">
                  <div className="w-[90%]  sm:h-[330px] flex-col mt-8 sm:mb-10 group mx-auto sm:pb-4 mb-24 bg-[#5E1523] border-2 border-black rounded-md ">
                    <div className="">
                      <div className="relative">
                        <a href={`/product/${slide.id}`}>
                          <img
                            src={slide.img}
                            alt=""
                            className="h-[200px] py-4 mx-[20%]"
                          />
                        </a>
                      </div>
                      <p className="pt-2 text-center text-[15px] ">
                        <a href={`/product/${slide.id}`}>{slide.description}</a>
                      </p>
                      <h2 className="font-bold text-[22px] text-center">
                        &#8377;{slide.price}
                      </h2>
                      <button className="bg-white hover:bg-black text-black  hover:text-white font-bold py-2 px-4 mt-4 rounded mx-[25%]">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="sm:hidden block ">
          {Productmock.map((slide, index) => (
            <div className="px-2">
              <div className="w-[90%]  sm:h-[330px] flex-col mt-2 sm:mb-10  mx-auto sm:pb-4 mb-8 bg-[#5E1523] border-2 border-black rounded-md ">
                <div className="">
                  <div className="relative">
                    <a href={`/product/${slide.id}`}>
                      <img
                        src={slide.img}
                        alt=""
                        className="h-[200px] py-4 mx-[20%]"
                      />
                    </a>
                  </div>
                  <p className="pt-2 text-center text-[15px] ">
                    <a href={`/product/${slide.id}`}>{slide.description}</a>
                  </p>
                  <h2 className="font-bold text-[22px] text-center">
                    &#8377;{slide.price}
                  </h2>
                  <button className="bg-white hover:bg-black text-black  hover:text-white font-bold py-2 px-4 mt-4 rounded mx-[25%]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AppLayout>
    </div>
  );
};

export default Product;
