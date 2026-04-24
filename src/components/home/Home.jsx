import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { categories, slides } from "../../data/category";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const Home = () => {
  return (
    <div className="container py-3">
      <div className="grid gap-10 lg:grid-cols-12 ">
        {/* CATEGORIES */}
        <div className="col-span-3  border border-red-100 ">
          <h4 className="bg-sky-300 text-white capitalize p-3">Categories </h4>

          {/* list */}
          <ul>
            {categories.map((item, index) => {
              return (
                <>
                  <li
                    key={index}
                    className="px-4 hover:bg-sky-100 relative group py-1 cursor-pointer flex items-center justify-between"
                  >
                    {item.title}
                    {item.subMenu && (
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    )}

                    {/* submenu */}
                    <ul className="absolute shadow-lg z-50 bg-white  border-none invisible group-hover:visible left-full border w-full top-0">
                      {item.subMenu &&
                        item.subMenu.map((el, index) => {
                          return (
                            <li
                              className="py-1 px-3 hover:bg-sky-100"
                              key={index}
                            >
                              {el}
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        {/* SLIDERS */}
        <div className="col-span-9">
          <>
            <Swiper
              loop={true}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {slides.map((slide, index) => {
                return (
                  <div className="">
                    <SwiperSlide>
                      <div
                        style={{ backgroundImage: `url(${slide.image})` }}
                        className="bg-cover bg-center h-100 w-full "
                      >
                        <div
                          style={{
                            backgroundColor: `rgba(0, 0, 0, ${0.6})`,
                          }}
                          className=" h-full flex items-center flex-col justify-center"
                        >
                          <h1 className="text-4xl text-white">{slide.title}</h1>
                          <p className="text-white">{slide.subtitle}</p>
                          <span className="text-white">
                            {slide.description}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
              <button className="button-prev absolute top-1/2 left-2 -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow">
                <GrFormPreviousLink />
              </button>

              <button className="button-next absolute top-1/2 right-2 -translate-y-1/2 z-50 bg-white p-2 rounded-full shadow">
                <GrFormNextLink />
              </button>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
