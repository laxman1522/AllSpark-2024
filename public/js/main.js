$(document).ready(function ($) {
  var contentSections = $('.navbar-section'),
    navigationItems = $('#navbar-vertical-nav a');
  $('#homeArrowIcon').on('click', () => navigationItems[1].click());

  updateNavigation();
  updateNavigationClass();
  $('#screeensContainer').on('scroll', function () {
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
  $('.navbar-nav-trigger').on('click', function () {
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
        navigationItems.eq(activeSection).removeClass('is-selected');
      }
    });
  }

  function smoothScroll(target) {
    target[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateNavigationClass() {
    if (window.innerWidth < 1024) {
      $('html').removeClass('no-touch').addClass('touch');
    } else {
      $('html').removeClass('touch').addClass('no-touch');
    }
  }

  function isotopeImplement(currentSelected) {
    // Initialize Isotope after all images are loaded
    if (document.querySelector('.members-grid')) {
      var iso = new Isotope('.members-grid', {
        itemSelector: '.element-item',
        layoutMode: 'masonry',
        filter: currentSelected,
      });

      // bind filter button click
      var filtersElem = document.querySelector('.filters-button-group');

      if (filtersElem) {
        filtersElem.addEventListener('click', function (event) {
          // only work with buttons
          if (!matchesSelector(event.target, 'button')) {
            return;
          }
          var filterValue = event.target.getAttribute('data-filter');
          // use matching filter function
          filterValue = filterValue;
          iso.arrange({ filter: filterValue });
        });

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group');
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
          var buttonGroup = buttonGroups[i];
          radioButtonGroup(buttonGroup);
        }

        function radioButtonGroup(buttonGroup) {
          buttonGroup.addEventListener('click', function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, 'button')) {
              return;
            }
            buttonGroup
              .querySelector('.is-checked')
              .classList.remove('is-checked');
            event.target.classList.add('is-checked');
          });
        }
      }
    }
  }

  // Optionally, trigger layout reflow on window resize
  window.addEventListener('resize', function () {
    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            }),
        ),
    ).then(() => {
      var currentClass = document.querySelector('.is-checked').getAttribute('data-filter');
      isotopeImplement(currentClass);
    });
  });

  Promise.all(
    Array.from(document.images)
      .filter((img) => !img.complete)
      .map(
        (img) =>
          new Promise((resolve) => {
            img.onload = img.onerror = resolve;
          }),
      ),
  ).then(() => {
    isotopeImplement('.core-organisers');
  });
});
