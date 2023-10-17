import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function HomepageAnimations() {
  // Hero section animation

  const tl = gsap.timeline({
    scrollTrigger: ".banner-top",
  });

  tl.from(".book-images .book-image:nth-child(1)", {
    x: "-100vw",
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
  });

  tl.from(
    ".book-images .book-image:nth-child(4)",
    {
      x: "100vw",
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
    },
    "<"
  );

  tl.from(
    ".book-images .book-image:nth-child(2)",
    {
      y: "-100vh",
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
    },
    "<+0.5"
  );

  tl.from(
    ".book-images .book-image:nth-child(3)",
    {
      y: "100vh",
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
    },
    "<"
  );

  // About us animation

  const aboutusTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-us",
      start: "top center",
    },
  });

  aboutusTl.from(".about-us .about-heading", {
    x: "50",
    autoAlpha: 0,
    duration: 0.2,
    ease: "sine.out",
  });

  aboutusTl.from(
    ".about-us .about-sub-heading",
    {
      x: "50",
      autoAlpha: 0,
      duration: 0.5,
      ease: "sine.out",
    },
    "<+0.5"
  );

  aboutusTl.from(
    ".about-us .about-sub-text",
    {
      x: "50",
      autoAlpha: 0,
      duration: 0.5,
      ease: "sine.out",
    },
    "<"
  );
  aboutusTl.from(".about-us .about-text", {
    scale: 0,
    // autoAlpha: 0,
    duration: 0.5,
    ease: "power1.out",
  });

  aboutusTl.from(
    ".about-us .logocircle",
    {
      scale: 0,
      // autoAlpha: 0,
      duration: 1,
      ease: "bounce.out",
    },
    "<+1"
  );

  aboutusTl.from(
    ".about-us .circle",
    {
      y: "50",
      autoAlpha: 0,
      duration: 0.5,
      ease: "circ.out",
    },
    "<+0.5"
  );

  //   New Releases Section animation

  const releaseTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".new-releases-sec",
      start: "top center",
      // markers: true,
    },
  });

  releaseTl.from(".new-releases-sec .new-releases-heading", {
    y: "-100vh",
    autoAlpha: 0,
    duration: 1,
    ease: "bounce.out",
  });
  releaseTl.from(".new-releases-sec .new-releases-sub-heading", {
    x: "-50vw",
    autoAlpha: 0,
    duration: 1.5,
    ease: "back.out(2)",
  });

  // releaseTl.from(
  //   ".new-releases-sec .slider-container",
  //   {
  //     autoAlpha: 0,
  //     duration: 0.2,
  //     ease: "back.out(2)",
  //   },
   
  // );

  //   Event section

  const eventsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".events-sec",
      start: "top center",
    },
  });

  eventsTl.from(".events-sec .events-sec-heading", {
    scale: 0,
    // autoAlpha: 0,
    duration: 1,
    ease: "bounce.out",
  });
  eventsTl.from(
    ".events-sec .events-sec-sub-heading",
    {
      scale: 0,
      //   autoAlpha: 0,
      duration: 1,
      ease: "bounce.out",
    },
    "<"
  );
  eventsTl.from(
    ".events-sec .event-content .event-btn:nth-child(1)",
    {
      x: "-100",
      autoAlpha: 0,
      duration: 1,
      ease: "sine.out",
    },
    "<+1.5"
  );
  eventsTl.from(
    ".events-sec .event-content .event-btn:nth-child(2)",
    {
      x: "100",
      autoAlpha: 0,
      duration: 1,
      ease: "sine.out",
    },
    "<"
  );
  // eventsTl.from(".events-sec .grid-container ", {
  //   duration: 0.2,
  //   autoAlpha: 0,
  //   y: 40,
  //   ease: "power1.out",
  //   // stagger: {
  //   //   // wrap advanced options in an object
  //   //   each: 0.1,
  //   //   from: "center",
  //   //   grid: "auto",
  //   //   ease: "none",
  //   //   axis: null,
  //   // },
  // });
  //   eventsTl.from(
  //     ".events-sec .grid-container .grid-image5",
  //     {
  //       x: "-50",
  //       autoAlpha: 0,
  //       duration: 0.5,
  //       ease: "power1.out",
  //     },
  //     "<"
  //   );

  //   eventsTl.from(
  //     ".events-sec .grid-container .grid-image6",
  //     {
  //       x: "-50",
  //       autoAlpha: 0,
  //       duration: 0.5,
  //       ease: "power1.out",
  //     },
  //     "<"
  //   );

  // Glimps section

  const glimpsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".glimpse-sec",
      start: "top center",
    },
  });

  glimpsTl.from(".glimpse-sec .glimpse-row", {
    x: "-50",
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
  });
  glimpsTl.from(".glimpse-sec .glimpse-second", {
    y: "-50",
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
  });

  // Publishing Service

  const publishingTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".publishing-service-sec",
      start: "top center",
    },
  });

  publishingTl.from(".publishing-service-sec .publishing-service-heading", {
    scale: 0,
    autoAlpha: 0,
    duration: 1,
    ease: "bounce.out",
  });
  publishingTl.from(
    ".publishing-service-sec .publishing-service-sub-heading",
    {
      scale: 0,
      autoAlpha: 0,
      duration: 1,
      ease: "bounce.out",
    },
    "<"
  );
  publishingTl.from(
    ".publishing-service-sec .publishing-service-container .publishing-service-item:nth-child(1)",
    {
      y: "-150",
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
    }
  );
  publishingTl.from(
    ".publishing-service-sec .publishing-service-container .publishing-service-item:nth-child(2)",
    {
      y: "150",
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
    },
    "<"
  );
  publishingTl.from(
    ".publishing-service-sec .publishing-service-container .publishing-service-item:nth-child(3)",
    {
      y: "-150",
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
    },
    "<"
  );
  publishingTl.from(
    ".publishing-service-sec .publishing-service-container .publishing-service-item:nth-child(4)",
    {
      y: "150",
      autoAlpha: 0,
      duration: 1,
      ease: "circ.out",
    },
    "<"
  );

  // client-section

  const clientTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".client-section",
      start: "top center",
    },
  });
  clientTl.from(".client-section", {
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
  });

  // distribution-sec

  const distributionTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".distribution-sec",
      start: "top center",
    },
  });

  distributionTl.from(".distribution-sec .distribution-heading", {
    x: "250",
    duration: 1,
    ease: "bounce.out",
  });

  // Author section

  const authorTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".author-sec",
      start: "top center",
    },
  });

  distributionTl.from(".author-sec .author-heading", {
    x: "-250",
    duration: 1,
    ease: "bounce.out",
  });

  // Brochure-section

  const brochureTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".brochure-section",
      start: "top center",
    },
  });

  brochureTl.from(".brochure-section ", {
    y: "-200",
    duration: 1,
    autoAlpha: 0,
    ease: "power2.out",
  });
  // Blog section

  const blogTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".blogs-sec",
      start: "top center",
    },
  });

  blogTl.from(".blogs-sec .blogs-sec-heading", {
    y: "-100",
    autoAlpha: 0,
    duration: 1,
    ease: "circ.out",
  });
  blogTl.from(
    ".blogs-sec .blog-area .blog-box",
    {
      y: -50,
      stagger: 0.1,
    },
    "<+0.5"
  );

  // faq-section

  // const faqTl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".faq-section",
  //     start: "top center",
  //   },
  // });

  // faqTl.from(
  //   ".faq-section",
  //   {
  //     x: "50",
  //     autoAlpha: 0,
  //     duration: 1,
  //     ease: "circ.out",
  //   },
  //   "<+0.5"
  // );

  // contact-section
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top center",
    },
  });
  contactTl.from(".contact-section .contact-middle", {
    y: "-500",
    autoAlpha: 0,
    duration: 1,
    ease: "bounce.out",
  });
}

export { HomepageAnimations };
