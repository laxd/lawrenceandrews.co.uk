$(document).ready(function($) {
    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function() {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Set all the items in skills to fade in in a staircase fashion
    let delay = 50
    $('#skills li').each(function () {
        $(this)
            .attr("data-aos-delay", delay)
            .attr("data-aos", "fade-up")
        delay += 50
    })

    AOS.init();
})
