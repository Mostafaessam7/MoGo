$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 500,
        slidesToScroll: 1,
       
        // arrows: {
		// 	prev: '<i id="unslider-arrow" class="fas fa-angle-left text-dark"></i>',
		// 	next: '<i id="unslider-arrow" class="fas fa-angle-right text-dark"></i>',
		// },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})

$('.single-item').slick({
    speed: 300,
    autoplay: true,
    controls:true,
});

//loader
// $(window).load(function() {
//     // Animate loader off screen
//     $(".spinner").animate({
//         top: -200
//     }, 1500);
// });

/* pre loader */
// jQuery(window).on('load', function () { 
//     jQuery('#status').fadeOut(); 
//     jQuery('#preloader').delay(350).fadeOut('slow');  
//     jQuery('body').delay(350).css({ 'overflow': 'visible' });
// })
