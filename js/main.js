$(function() {
    // smooth scrolling function
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset - 100
                }, 1000);
                return false;
            }
        }
    });

    // email function
    $('form').on("submit", function(event) {
        event.preventDefault();
        var userEmail = $('input[type="email"]').val();
        if (userEmail) {
            alert("thank you for subsucribing")

        } else {

            alert("please provide an email address")
        }

    });

    // product slider (flickity plugin)
    $('.product-slider').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: true,
        prevNextButtons: false,
        wrapAround: true
    });

    // animation of submit button

    //    $('form').on('submit', function(event) {
    //
    //          var $self = $(this),
    //              $pulse = $self.siblings('.pulse-overlay'),
    //              offsetTop = $self.offset().top, // button offset
    //              offsetLeft = $self.offset().left, // button offset
    //              clickedX = event.pageX, // x position of click to doc
    //              clickedY = event.pageY, // y position of click to doc
    //              centerX = ( clickedX - offsetLeft ),
    //              centerY = ( clickedY - offsetTop );
    //
    //          $pulse.addClass('radial-pulse').show();
    //          $pulse.css({top: centerY, left: centerX});
    //
    //          setTimeout(function() {
    //            $pulse.removeClass('radial-pulse');
    //          }, 1000);
    //
    //      });
    //
});
