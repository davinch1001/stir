$(document).ready(function() {
    $("#team").owlCarousel({
        items: 5,
        // autoplay: true,
        loop: true,
        // autoplayTimeout: 1000
    });
    const leads = $("#leads")
    leads.owlCarousel({
        items: 2,
        // autoplay: true,
        // autoplayTimeout: 1000,
        loop: true,
        center: true,
        margin: 70,
        dots: false
    });
    $('.owl-next').click(function() {
        leads.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        leads.trigger('prev.owl.carousel', [300]);
    })
})

