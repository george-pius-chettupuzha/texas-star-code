import React, { useRef, useState } from "react";
import ProfileImage from "../../assets/profile--1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"

      >
      <SwiperSlide>

        <div className="testimonial--content">
          <div className="top--content">
            <h3 className="h3">Texas Star help us improve Our Health</h3>
            <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="bottom--content">
            <img src={ProfileImage} alt={ProfileImage} />
            <div className="profile--content">
              <h3>John Doe</h3>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
        </div>

      </SwiperSlide>

        <SwiperSlide>

        <div className="testimonial--content">
          <div className="top--content">
            <h3 className="h3">Texas Star help us improve Our Health</h3>
            <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="bottom--content">
            <img src={ProfileImage} alt={ProfileImage} />
            <div className="profile--content">
              <h3>John Doe</h3>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
        </div>

        </SwiperSlide>

        <SwiperSlide>

        <div className="testimonial--content">
          <div className="top--content">
            <h3 className="h3">Texas Star help us improve Our Health</h3>
            <p className="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="bottom--content">
            <img src={ProfileImage} alt={ProfileImage} />
            <div className="profile--content">
              <h3>John Doe</h3>
              <p>Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
        </div>

        </SwiperSlide>

      </Swiper>
  );
}
