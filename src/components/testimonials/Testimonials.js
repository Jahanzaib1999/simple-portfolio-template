import "./Testimonials.css";
import AVATAR from "../../assets/client.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import React from "react";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        pagination={true}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="client-avatar" />
          </div>
          <h5>Anonymous</h5>
          <small className="client__review">lorem ipsum</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="client-avatar" />
          </div>
          <h5>Anonymous</h5>
          <small className="client__review">lorem ipsum</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR} alt="client-avatar" />
          </div>
          <h5>Anonymous</h5>
          <small className="client__review">lorem ipsum</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
