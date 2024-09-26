jQuery(document).ready(function ($) {
  var contentSections = $('.navbar-section'),
    navigationItems = $('#navbar-vertical-nav a');
  $('#homeArrowIcon').on('click', () => navigationItems[1].click());

  updateNavigation();
  updateNavigationClass();
  $(window).on('scroll', function () {
    updateNavigation();
  });
  $(window).on('resize', function () {
    updateNavigationClass();
  });

  //smooth scroll to the section
  navigationItems.on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });
  //smooth scroll to second section
  $('.navbar-scroll-down').on('click', function (event) {
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  //open-close navigation on touch devices
  $('.touch .navbar-nav-trigger').on('click', function () {
    $('.touch #navbar-vertical-nav').toggleClass('open');
  });
  //close navigation on touch devices when selectin an elemnt from the list
  $('.touch #navbar-vertical-nav a').on('click', function () {
    $('.touch #navbar-vertical-nav').removeClass('open');
  });

  $('#navCloseIcon').on('click', function () {
    $('.touch #navbar-vertical-nav').removeClass('open');
  });

  function updateNavigation() {
    console.log('hariharn');

    contentSections.each(function () {
      $this = $(this);
      var activeSection =
        $('#navbar-vertical-nav a[href="#' + $this.attr('id') + '"]').data(
          'number',
        ) - 1;
      if (
        $this.offset().top - $(window).height() / 2 < $(window).scrollTop() &&
        $this.offset().top + $this.height() - $(window).height() / 2 >
          $(window).scrollTop()
      ) {
        navigationItems.eq(activeSection).addClass('is-selected');
      } else {
        console.log(navigationItems.eq(activeSection));
        navigationItems.eq(activeSection).removeClass('is-selected');
      }
    });
  }

  function smoothScroll(target) {
    $('body,html').animate({ scrollTop: target.offset()?.top }, 600);
  }

  function updateNavigationClass() {
    if (window.innerWidth < 767) {
      $('html').removeClass('no-touch').addClass('touch');
    } else {
      $('html').removeClass('touch').addClass('no-touch');
    }
  }
});
