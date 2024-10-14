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
    if (document.querySelector('.members-grid')) {
      const images = document.querySelectorAll('.members-grid img');
      const loadedImages = [];
      const imagePromises = Array.from(images).map((img) => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = img.onerror = resolve; 
          }
        });
      });
      Promise.all(imagePromises).then(() => {
        const iso = new Isotope('.members-grid', {
          itemSelector: '.element-item',
          layoutMode: 'masonry',
          filter: currentSelected,
        });
        const filtersElem = document.querySelector('.filters-button-group');
  
        if (filtersElem) {
          filtersElem.addEventListener('click', function (event) {
            if (!matchesSelector(event.target, 'button')) {
              return;
            }
            const filterValue = event.target.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
          });
          const buttonGroups = document.querySelectorAll('.button-group');
          buttonGroups.forEach((buttonGroup) => {
            radioButtonGroup(buttonGroup);
          });
          function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener('click', function (event) {
              if (!matchesSelector(event.target, 'button')) {
                return;
              }
              buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
              event.target.classList.add('is-checked');
            });
          }
        }
      });
    }
  }

  window.addEventListener('resize', function () {
    const currentClass = document.querySelector('.is-checked').getAttribute('data-filter');
    isotopeImplement(currentClass);
  });

  isotopeImplement('.core-organisers');
  
});
