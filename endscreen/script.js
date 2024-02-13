(function ($) {
  "use strict";

  $(".card").tilt({
    maxTilt: 20,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 2000,
    glare: true,
    maxGlare: 0.2,
    scale: 1.1,
  });
})(jQuery);
