(function () {
  const windowHeight = window.innerHeight;

  // GET NAVBAR TO STICK TO TOP ONCE YOU SCROLLED PASS IT
  $(window).scroll(function () {
    if ($(window).scrollTop() > windowHeight) {
      $('.navbar').addClass('fixed-top');
    } else if ($(window).scrollTop() < windowHeight - 1) {
      $('.navbar').removeClass('fixed-top');
    };
  });

  // SMOOTH SCROLL FOR ALL BUTTONS FROM THE PAGE
  $('.navbar ul li a[href^=\'#\'], #parallax a, .scroll-to-top a, #be-part-of-it, #learn-more').on('click', function (e) {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function () {
      window.location.hash = hash;
    });
  });

  // ON SCROLL ANIMATION
  const jsWp1 = $('.js-wp-1');
  const waypoint = new Waypoint({
    element: jsWp1,
    handler: function (direction) {
      jsWp1.addClass('animate__animated animate__fadeInDown');
      console.log(direction);
    },
    offset: windowHeight - 100
  });

  const jsWp2 = $('.js-wp-2');
  const waypoint2 = new Waypoint({
    element: jsWp2,
    handler: function () {
      jsWp2.addClass('animate__animated animate__fadeInDown');
    },
    offset: windowHeight - 100
  });

  // TIMELINE HEADING AND SUBHEADING ON SCROLL ANIMATION
  // const y = document.querySelector('.timeline_heading').getBoundingClientRect().y;

  const timelineHeadings = $('.timeline_heading, .timeline_subheading');
  const waypoint3 = new Waypoint({
    element: timelineHeadings,
    handler: function () {
      timelineHeadings.addClass('animate__animated animate__fadeInDown');
      console.log('triggered');
    },
    offset: windowHeight - 100
  });




})();