$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 4,
        loop: true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,

        nav:true,
        navText: [
            '<div class="icon">'+
                '<svg viewBox="0 0 512 512">'+
                    '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-slider"></use>'+
                '</svg>'+
            '</div>',
            '<div class="icon">'+
                '<svg viewBox="0 0 512 512">'+
                    '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-slider"></use>'+
                '</svg>'+
            '</div>'
        ]
    });

    $(".comment").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,

        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed:450,

        nav: true,
        dots: true,
        navText: [
            '<div class="icon">'+
                '<svg viewBox="0 0 512 512">'+
                    '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-slider"></use>'+
                '</svg>'+
            '</div>',
            '<div class="icon">'+
                '<svg viewBox="0 0 512 512">'+
                    '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-slider"></use>'+
                '</svg>'+
            '</div>'
        ]
    });


    $(".owl-carousel").on('changed.owl.carousel',function () {
        ChangeMiniature($(".owl-carousel .center .img"));
    });

    $.each($("#s3 .img"),function (i,e) {
        $(e).css('background','url(img/miniatures/'+$(e).data('image')+'.jpg) center no-repeat');
        $(e).on('click',function () {
            ChangeMiniature(this)
        })
    });

    initMap();
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.568180, lng: 30.464230},
            zoom: 15
        });

        var marker = new google.maps.Marker({
            position: {lat: 50.568180, lng: 30.464230},
            map: map
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        var infowindow = new google.maps.InfoWindow({
            content: "ResultAgency"
        });

    }

});
var miniature=$("#miniature");
function ChangeMiniature(element) {
    miniature.addClass('fadeOut');
    setTimeout(function () {
        miniature.css('background',
            'url(img/miniatures/'
            +$(element).data('image')
            +'.jpg) center no-repeat');
        miniature.removeClass('fadeOut');
    },150);
}