import LazyLoad from "vanilla-lazyload";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import { Fancybox } from "@fancyapps/ui";
import { isBrowserSupportWebp } from "./modules/support-webp.js";
import IMask from "imask";

// import { validInputs } from "./modules/valid-inputs.js";
// import { formHandle } from "./modules/form-handle.js";
// import { validateForm } from "./modules/validate.js";
// import { selector } from "./modules/selector.js";
// import { datePicker } from "./modules/date-picker.js";
import { swiper } from "./modules/swiper.js";
// import { fancy } from "./modules/fancy.js";
// import { accordeonFunc } from "./modules/accordeon.js";
// import { map } from "./modules/map.js";
// import { cardsAnim } from "./modules/cards-anim.js";
// import { tabs } from "./modules/tabs.js";
// import { mobileMenu } from "./modules/mobile-menu.js";

// datePicker();
// selector();
isBrowserSupportWebp();
swiper();
// fancy();
// accordeonFunc();
// map();
// cardsAnim();
// tabs();
// mobileMenu();
//handleAttachFiles();
// validInputs();
// formHandle();
// validateForm();

let myLazyLoad = new LazyLoad();
myLazyLoad.update();



document.addEventListener("DOMContentLoaded", function () {
    {
        const scrollToTop = document.getElementById("scrollToTop");
        scrollToTop.addEventListener("click", function () {
            document.querySelector(".header").scrollIntoView({ block: 'center', smooth: 'behavior' });
        });
    }

    {
        gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
        gsap.defaults({ease: 'none', duration: 2});
    

        ScrollTrigger.create({
            trigger: ".hero",
            start: "top top",
            end: "+=1000",
            pinSpacing: false,
            pin: true,
        })



        const tl = gsap.timeline();

        tl.to(".reviews__item-1", {backgroundColor: '#d8deea', scale: 0.9})
            .to(".reviews__item-2", {yPercent: -100}, "<")
            .to(".reviews__item-2", {backgroundColor: '#d8deea', scale: 0.9, yPercent: -115})
            .to(".reviews__item-3", {yPercent: -230}, "<")
            .to(".reviews__item-3", {backgroundColor: '#d8deea', scale: 0.9, yPercent: -245})
            .to(".reviews__item-4", {yPercent: -305}, "<");

        const reviewBlock = document.querySelector(".reviews");
        const reviewItem = reviewBlock.querySelector('.reviews__item');
        reviewBlock.style.height = reviewItem.offsetHeight + 10 + 'px';
       
        
        ScrollTrigger.create({
            animation: tl,
            trigger: ".content-block-2",
            start: "center",
            end: "+=2200",
            pin: true,
            scrub: true,
            anticipatePin: 1,
        })



        const tl2 = gsap.timeline();

        tl2.to(".reviews__item-5", {backgroundColor: '#d8deea', scale: 0.9})
            .to(".reviews__item-6", {yPercent: -80}, "<")
            .to(".reviews__item-6", {backgroundColor: '#d8deea', scale: 0.9, yPercent: -90})
            .to(".reviews__item-7", {yPercent: -186}, "<")

        const reviewBlock2 = document.querySelector(".reviews2");
        const reviewItem2 = reviewBlock.querySelector('.reviews__item');
        reviewBlock2.style.height = reviewItem2.offsetHeight + 15 + 'px';
       
        
        ScrollTrigger.create({
            animation: tl2,
            trigger: ".content-block-3",
            start: "bottom bottom",
            end: "+=2000",
            pin: true,
            scrub: true,
            anticipatePin: 1,
        })


    }

    {
        const tooltipBtn = document.querySelector(".footer .tooltip");
        const tooltipPlate = document.querySelector(".footer .tooltip-wrap");
        tooltipBtn.addEventListener("mouseover", function () {
            tooltipPlate.classList.add("active");
        });

        tooltipPlate.addEventListener("mouseover", function () {
            tooltipPlate.classList.add("active");
        });

        tooltipPlate.addEventListener("mouseout", function () {
            tooltipPlate.classList.remove("active");
        });

        tooltipBtn.addEventListener("mouseout", function () {
            tooltipPlate.classList.remove("active");
        });

    }
});