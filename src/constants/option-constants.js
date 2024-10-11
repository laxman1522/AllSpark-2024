export const BACKGROUND_VANTA_OPTIONS = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  maxHeight: 100.0,
  maxWidth: 100.0,
  scale: 2,
  scaleMobile: 1.0,
  color: 0x270212,
  shininess: 13.0,
  waveHeight: 7.5,
  waveSpeed: 1.2,
  zoom: 0.7,
};
// constants for memories mobile splide options
export const MEMORIES_MOBILE_SPLIDE_OPTIONS = {
  type: 'fade',
  drag: 'true',
  snap: true,
  height: 'auto',
  width: '83vw',
  gap: '1.5rem',
  lazyLoad: 'nearby',
  arrows: false,
  pagination: false,
  speed: 1000,
  easing: 'cubic-bezier( 0.25, 0.46, 0.45, 0.94 )',
};

export const GUEST_MOBILE_SPLIDE_OPTIONS = {
  type: 'loop',
  drag: 'true',
  snap: true,
  gap: '2rem',
  lazyLoad: 'nearby',
  padding: '3rem',
  height: '50vh',
  arrows: false,
  pagination: false,
  speed: 1000,
  easing: 'cubic-bezier( 0.25, 0.46, 0.45, 0.94 )',
  interval: 5000,
  clones: 4,
  breakpoints: {
    1024: {
      perPage: 2,
    },
    767: {
      perPage: 1,
    },
  },
};

export const GUEST_DESKTOP_SLICK_OPTIONS = {
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  speed: 500,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        infinite: true,
      },
    },
  ],
  arrows: false,
  infinite: true,
};

export const EVENTS_MOBILE_SPLIDE_OPTIONS = {
  type: 'fade',
  drag: 'true',
  snap: true,
  lazyLoad: 'nearby',
  arrows: false,
  pagination: true,
  speed: 1000,
  easing: 'cubic-bezier(0.6, 0.05, 0.2, 0.9)',
  autoplay: 'true',
  interval: 5000,
  width: '85vw',
  rewind: 'true',
};
