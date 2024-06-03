import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Controller,
  FreeMode,
  Mousewheel,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";

export const swiper = () => {
  const eventsSwiper = new Swiper(".videos-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    navigation: {
      prevEl: ".videos-swiper .swiper-button-prev",
      nextEl: ".videos-swiper .swiper-button-next",
    },
    spaceBetween: 155,
    pagination: {
      //@ts-ignore
      el: ".videos-swiper .swiper-pagination",
    },
   
  });
};
