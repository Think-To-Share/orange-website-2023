import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.client-section')) {
    tns({
        container: '.client-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        controls:false,
        autoplayTimeout:8000,
        autoplayButtonOutput: false,
    })
}

if(document.querySelector(".distribution-sec")){
    tns({
        container:".distribution-sec .slider-container",
        items:6,
        nav:true,
        controls:true,
        autoplay: true,
        autoplayTimeout:8000,
        autoplayButtonOutput: false,
        gutter:10,
        controlsText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>' , '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>'],
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
    })
}