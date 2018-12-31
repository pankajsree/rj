var docWidth;
var nav1Top;
var scrollTop;

var bannerHeight;

function wResize() {
    docWidth = $(document).width();
    $("#banner").height(0.4 * docWidth);
    // console.log(docWidth);
    nav1Top = $("#nav-1").offset().top;
    scrollTop = $(document).scrollTop();
}

function initMap() {
    var location = {lat: 23.835164, lng: 91.270409};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: location
    });
}

$(window).resize(function() {
    wResize();
});

$(document).ready(function() {
    wResize();

    $(document).scroll(function() {
        scrollTop = $(this).scrollTop();

        if(scrollTop > nav1Top) {
            $("#banner").css({
                "margin-top": "3.5rem"
            });

            $("#nav-ul-1").css({
                "right": "calc(50% + 4rem)"
            });
            $("#nav-ul-2").css({
                "left": "calc(50% + 4rem)"
            });

            $("#nav-1").css({
                "position": "fixed"
            });

            $(".navbar-brand img").css({
                "height": "4rem"
            })
        }
        else {
            $("#banner").css({
                "margin-top": "0"
            });
            $("#nav-ul-1").css({
                "right": "50%"
            });
            $("#nav-ul-2").css({
                "left": "50%"
            });

            $("#nav-1").css({
                "position": "relative"
            });

            $(".navbar-brand img").css({
                "height": "0"
            })
        }

        // if(scrollTop > 1000) {
        //     $("#anchor-top").show();
        // }
        // else {
        //     $("#anchor-top").hide();
        // }
    });

    // $("#anchor-top").click(function() {
    //     $("html, body").animate({scrollTop:0}, 500);
    // });
});
