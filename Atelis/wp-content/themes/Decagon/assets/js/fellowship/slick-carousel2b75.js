jQuery(document).ready(function($){
    $('.slideshow-container').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: false,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

});
