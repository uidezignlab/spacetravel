
$(document).ready(function () {
    var travelWrapper = $('.travel-wrapper');
    travelWrapper.css({'min-height': window.innerHeight});
    // $(window).resize(function () {
    //     travelWrapper.css({'min-height': window.innerHeight});
    // });

    var options = {
        strings: ["" ,"Travel", "Exploration", "Denomination", "Innovation"],
        typeSpeed: 100,
        backSpeed: 30,
        //backDelay: 700,
        loop: true
    };

    var typed = new Typed(".uix-typed", options);
});