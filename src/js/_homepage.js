import { tns } from 'tiny-slider/src/tiny-slider'
import { gsap } from "gsap";

if (document.querySelector('.client-section')) {
    tns({
        container: '.client-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        controls:false,
        autoplayTimeout:8000,
        autoplayButtonOutput: false,
        autoHeight: true,
    })
}

if(document.querySelector(".distribution-sec")){
    tns({
        container:".distribution-sec .slider-container",
        items:6,
        nav:false,
        controls:true,
        autoplay: true,
        autoplayTimeout:8000,
        autoplayButtonOutput: false,
        gutter:10,
        mouseDrag:true,
        controls: false,
        controlsText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
        responsive: {
            320: {
              items: 1,  
              nav:true,
            },
            576:{
                items:2,
            },
            768: {
              items: 4,
              controls: true,
              nav:false,
             
            },
            992:{
                items: 5,
            },
                     
        },
    })
}

if(document.querySelector(".author-sec")){
    tns({
        container:".author-sec .slider-container",
        items:7,
        nav:true,
        controls:false,
        autoplay: true,
        autoplayTimeout:8000,
        autoplayButtonOutput: false,
        mouseDrag:true,
        
        responsive: {
            320: {
              items: 2,

            },
            576:{
                items:2,      
            },
            768: {
              items: 4,
             
            },
            992:{
                items: 6,     
            },        
        },
    })
}

if(document.querySelector(".new-releases-sec")){
    tns({
        container:".new-releases-sec .slider-container",
        items:4,
        nav:false,
        gutter: 20,
        controls:false,
        autoplay: true,
        autoplayTimeout:4000,
        autoplayButtonOutput: false,
        mouseDrag:true,
        speed: 400,
        responsive: {
            320: {
              items: 1,

            },
            576:{
                items:2,      
            },
            768: {
              items: 3,
             
            },
            992:{
                items: 4,     
            },        
        },
    })
}

window.addEventListener('load', () => {
    const tl = gsap.timeline()

    tl.from('.book-images .book-image:nth-child(1)', {
        x: '-100vw',
        autoAlpha: 0,
        duration: 1, 
        ease: "circ.out"
    })

    tl.from('.book-images .book-image:nth-child(4)', {
        x: '100vw',
        autoAlpha: 0,
        duration: 1, 
        ease: "circ.out"
    }, "<")

    tl.from('.book-images .book-image:nth-child(2)', {
        y: '-100vh',
        autoAlpha: 0,
        duration: 1, 
        ease: "circ.out"
    }, "<+0.5")

    tl.from('.book-images .book-image:nth-child(3)', {
        y: '100vh',
        autoAlpha: 0,
        duration: 1, 
        ease: "circ.out"
    }, "<")
})
