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