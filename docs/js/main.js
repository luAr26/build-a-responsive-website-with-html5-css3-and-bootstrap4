(function () {
  const windowHeight = window.innerHeight;

  // GET NAVBAR TO STICK TO TOP ONCE YOU SCROLLED PASS IT
  $(window).scroll(function () {
    if ($(window).scrollTop() > windowHeight) {
      $(".navbar").addClass("fixed-top");
    } else if ($(window).scrollTop() < windowHeight - 1) {
      $(".navbar").removeClass("fixed-top");
    }
  });

  // SMOOTH SCROLL FOR ALL BUTTONS FROM THE PAGE
  $(
    ".navbar ul li a[href^='#'], #parallax a, .scroll-to-top a, #be-part-of-it, #learn-more"
  ).on("click", function (e) {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      300,
      function () {
        window.location.hash = hash;
      }
    );
  });

  // ON SCROLL ANIMATION
  const jsWp1 = $(".js-wp-1");
  const waypoint = new Waypoint({
    element: jsWp1,
    handler: function (direction) {
      jsWp1.addClass("animate__animated animate__fadeInDown");
      console.log(direction);
    },
    offset: "50%",
  });

  const jsWp2 = $(".js-wp-2");
  const waypoint2 = new Waypoint({
    element: jsWp2,
    handler: function () {
      jsWp2.addClass("animate__animated animate__fadeInDown");
    },
    offset: "50%",
  });

  // TIMELINE HEADING AND SUBHEADING ON SCROLL ANIMATION
  // const y = document.querySelector('.timeline_heading').getBoundingClientRect().y;

  const timelineHeadings = $(".timeline_heading, .timeline_subheading");
  const waypoint3 = new Waypoint({
    element: timelineHeadings,
    handler: function () {
      timelineHeadings.addClass("animate__animated animate__fadeInDown");
    },
    offset: "50%",
  });

  // TIMELINE LI ELEMENTS
  const timelineElEven = $(".timeline li:nth-child(even)");
  const timelineElOdd = $(".timeline li:nth-child(odd)");

  const waypoint4 = new Waypoint({
    element: timelineElEven,
    handler: function () {
      timelineElEven.addClass("animate__animated animate__fadeInRightBig");
    },
    offset: "50%",
  });

  const waypoint5 = new Waypoint({
    element: timelineElOdd,
    handler: function () {
      timelineElOdd.addClass("animate__animated animate__fadeInLeftBig");
    },
    offset: "50%",
  });

  // PARALLAX CONTENT
  const parallaxContent = $(".js-wp-3");
  const waypoint6 = new Waypoint({
    element: parallaxContent,
    handler: function () {
      parallaxContent.addClass("animate__animated animate__fadeInRightBig");
    },
    offset: "50%",
  });

  // CARDS
  const cards = $(".js-wp-4");
  const waypoint7 = new Waypoint({
    element: cards,
    handler: function () {
      cards.addClass("animate__animated animate__fadeInUp");
    },
    offset: "50%",
  });

  // NUMBERS
  const numbers = $(".js-wp-5");
  const waypoint8 = new Waypoint({
    element: numbers,
    handler: function () {
      numbers.addClass("animate__animated animate__bounce");
    },
    offset: "50%",
  });

  // TESTIMONIALS
  const testimonial1 = $(".js-testimonial-1");
  const testimonial2 = $(".js-testimonial-2");
  const testimonial3 = $(".js-testimonial-3");

  // TESTIMONIAL LEFT
  const waypoint9 = new Waypoint({
    element: testimonial1,
    handler: function () {
      testimonial1.addClass("animate__animated animate__fadeInLeft");
    },
    offset: "50%",
  });

  // TESTIMONIAL MIDDLE
  const waypoint10 = new Waypoint({
    element: testimonial2,
    handler: function () {
      testimonial2.addClass("animate__animated animate__fadeIn");
    },
    offset: "50%",
  });

  // TESTIMONIAL RIGHT
  const waypoint11 = new Waypoint({
    element: testimonial3,
    handler: function () {
      testimonial3.addClass("animate__animated animate__fadeInRight");
    },
    offset: "50%",
  });

  // CONTACT FORM
  const contactForm = $(".contact-form");
  const waypoint12 = new Waypoint({
    element: contactForm,
    handler: function () {
      contactForm.addClass("animate__animated animate__pulse");
    },
    offset: "50%",
  });
})();
