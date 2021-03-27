
//navbar add class fixed
$(window).scroll(function () {
    if ($(this).scrollTop() > $('#header').height() ) {
        $('body').addClass("fixed-nav");
    } else {
        $('body').removeClass("fixed-nav");
    }
});
//nav scroll links
$('#navbar a').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-20
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});
//nav hide when header scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 50 && $(this).scrollTop() < $('#header').height() ) {
        $('.navbar').addClass('d-none');
    } else {
        $('.navbar').removeClass('d-none');

    }
});

/////////////////////////////////
$(window).on('load', function (e){
    $('a').removeClass("active");
})

//scroll to top
$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});
$('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

