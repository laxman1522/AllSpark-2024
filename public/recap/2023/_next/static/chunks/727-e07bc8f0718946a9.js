(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [727],
  {
    7422: function (e, a, t) {
      'use strict';
      t.r(a);
      var i = t(7437),
        r = t(4033);
      a.default = () => {
        let e = (0, r.usePathname)();
        return (0, i.jsxs)(i.Fragment, {
          children: [
            ' ',
            '/' !== e && (0, i.jsx)('div', { className: 'arch-background' }),
          ],
        });
      };
    },
    2511: function (e, a, t) {
      'use strict';
      t.r(a);
      var i = t(7437),
        r = t(7739),
        n = t.n(r);
      a.default = (e) => {
        let { styleName: a = '', onClick: t = () => {}, name: r = '' } = e;
        return (0, i.jsx)('button', {
          className: ''.concat(n()[a]),
          onClick: () => {
            t();
          },
          children:
            'rounded-btn-arrow' == a
              ? (0, i.jsxs)('svg', {
                  width: '25.221',
                  height: '28.7',
                  viewBox: '0 0 25.221 28.7',
                  children: [
                    (0, i.jsx)('defs', {
                      children: (0, i.jsxs)('linearGradient', {
                        id: 'linear-gradient-black',
                        x1: '0.033',
                        y1: '0.709',
                        x2: '1',
                        y2: '0.69',
                        gradientUnits: 'objectBoundingBox',
                        children: [
                          (0, i.jsx)('stop', {
                            offset: '0',
                            stopColor: '#111111',
                          }),
                          (0, i.jsx)('stop', {
                            offset: '1',
                            stopColor: '#111111',
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)('path', {
                      id: 'arrow-yellow',
                      d: 'M14.35,0,28.7,25.222s-6.34-6.245-13.515-6.245S0,25.222,0,25.222Z',
                      transform: 'translate(25.221) rotate(90)',
                      fill: 'url(#linear-gradient-black)',
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    r,
                    ('gradient-border-btn' == a || 'orange-arrow-btn' == a) &&
                      (0, i.jsxs)('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 25.221 28.7',
                        id: 'black',
                        children: [
                          (0, i.jsx)('defs', {
                            children: (0, i.jsxs)('linearGradient', {
                              id: 'linear-gradient',
                              x1: '0.033',
                              y1: '0.709',
                              x2: '1',
                              y2: '0.69',
                              gradientUnits: 'objectBoundingBox',
                              children: [
                                (0, i.jsx)('stop', {
                                  offset: '0',
                                  stopColor: '#ffc06c',
                                }),
                                (0, i.jsx)('stop', {
                                  offset: '1',
                                  stopColor: '#ff8c4e',
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)('path', {
                            id: 'arrow-yellow',
                            d: 'M14.35,0,28.7,25.222s-6.34-6.245-13.515-6.245S0,25.222,0,25.222Z',
                            transform: 'translate(25.221) rotate(90)',
                            fill: 'url(#linear-gradient)',
                          }),
                        ],
                      }),
                  ],
                }),
        });
      };
    },
    2275: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return d;
          },
        });
      var i = t(7437),
        r = t(2265),
        n = t(3522),
        s = t.n(n),
        o = t(1729),
        l = t(3545),
        c = t(9995);
      function d() {
        let e = 0;
        Object.values(l.iG).map((a) => {
          'Tech Talk' === a.category && e++;
        });
        let a = [
          { count: Object.keys(l.TZ).length, title: c.p2.DAYS },
          { count: c.p2.REGISTRATION_COUNT, title: c.p2.REGISTRATION },
          { count: e, title: c.p2.TECH_TALKS },
          { count: Object.keys(l.eY).length, title: c.p2.SPEAKERS },
          {
            count: c.p2.GEEKY_ATTENDEES_COUNT,
            title: c.p2.GEEKY_ATTENDEES,
            plus: '+',
          },
        ];
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)('main', {
            className: s().eventLayout,
            children:
              null == a
                ? void 0
                : a.map((e, a) =>
                    (0, i.jsxs)(
                      r.Fragment,
                      {
                        children: [
                          (0, i.jsxs)('section', {
                            className: s().eventWrapper,
                            children: [
                              (0, i.jsxs)('div', {
                                className: s().eventCount,
                                children: [
                                  (0, i.jsx)(o.ZP, { start: 0, end: e.count }),
                                  (0, i.jsx)('span', { children: e.plus }),
                                ],
                              }),
                              (0, i.jsx)('div', {
                                className: s().eventTitle,
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, i.jsx)('span', { className: s().separator }, a),
                        ],
                      },
                      a,
                    ),
                  ),
          }),
        });
      }
    },
    4532: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return m;
          },
        });
      var i = t(7437),
        r = t(4033),
        n = t(4305),
        s = t.n(n),
        o = t(3354),
        l = t(1396),
        c = t.n(l),
        d = t(9995);
      function m() {
        let e = (0, r.usePathname)(),
          a = e.replace('/', '');
        return (0, i.jsx)(i.Fragment, {
          children:
            '/' !== e
              ? (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsxs)('header', {
                    className: ''.concat(s().header),
                    children: [
                      (0, i.jsx)('div', {
                        className: s().logo,
                        children: (0, i.jsx)(c(), {
                          href: '/',
                          'aria-label': d.us,
                          as: '/',
                          prefetch: !1,
                          children: (0, i.jsx)(o.TR, {}),
                        }),
                      }),
                      (0, i.jsxs)('h1', { children: [a, ' '] }),
                    ],
                  }),
                })
              : '',
        });
      }
    },
    3354: function (e, a, t) {
      'use strict';
      t.d(a, {
        qW: function () {
          return T.default;
        },
        zx: function () {
          return w.default;
        },
        Ye: function () {
          return f.default;
        },
        TR: function () {
          return k;
        },
        zU: function () {
          return u;
        },
      }),
        t(8508);
      var i = t(7437),
        r = t(6691),
        n = t.n(r),
        s = t(5154),
        o = t.n(s),
        l = t(7810),
        c = t(2849),
        d = t(524),
        m = t(4159),
        u = () =>
          (0, i.jsxs)('div', {
            className: o()['main-logo'],
            children: [
              (0, i.jsx)(n(), {
                src: l.default,
                alt: 'arrow',
                className: o().arrow,
                priority: !0,
              }),
              (0, i.jsx)(n(), {
                src: c.default,
                alt: 'spark image',
                className: o()['spark-image'],
                priority: !0,
              }),
              (0, i.jsx)(n(), {
                src: d.default,
                alt: 'line',
                className: o().line,
                priority: !0,
              }),
              (0, i.jsx)(n(), {
                src: m.default,
                alt: 'outer circle',
                className: o().circle,
                priority: !0,
              }),
            ],
          }),
        g = t(2883),
        A = t.n(g),
        p = t(210),
        h = t(4275),
        _ = t.n(h);
      let b = (e) => {
        let { src: a, alt: t, customStyle: r } = e;
        return (0, i.jsx)('div', {
          className: A().logo,
          children: a
            ? (0, i.jsx)(n(), {
                src: a,
                alt: t,
                className: A()[''.concat(r)],
                priority: !0,
              })
            : (0, i.jsxs)('div', {
                className: A()['all-spark-logo'],
                children: [
                  (0, i.jsx)(n(), {
                    src: l.default,
                    alt: 'arrow',
                    className: A().arrow,
                    priority: !0,
                  }),
                  (0, i.jsx)(n(), {
                    src: p.default,
                    alt: 'spark logo',
                    className: A()['spark-logo'],
                    priority: !0,
                  }),
                  (0, i.jsx)(n(), {
                    src: m.default,
                    alt: 'outer circle',
                    className: A()['outer-circle'],
                    priority: !0,
                  }),
                ],
              }),
        });
      };
      b.propTypes = {
        src: _().string,
        alt: _().string,
        customStyle: _().string,
      };
      var k = b,
        f = t(3227);
      t(4532);
      var T = t(7422);
      t(2265), t(2275), t(3846), t(7610);
      var w = t(2511);
    },
    7610: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          LayoutWrapper: function () {
            return c;
          },
          TabContext: function () {
            return l;
          },
        });
      var i = t(7437),
        r = t(4033),
        n = t(2265),
        s = t(6365),
        o = t.n(s);
      t(341);
      let l = (0, n.createContext)(''),
        c = (e) => {
          let { children: a } = e,
            t = (0, r.usePathname)(),
            s = (0, n.useRef)(),
            [c, d] = (0, n.useState)(0);
          return (
            (0, n.useEffect)(() => {
              o().init({
                duration: 800,
                offset: 50,
                startEvent: 'DOMContentLoaded',
              });
              let e = document.getElementById('scrollable-container');
              return (
                e.addEventListener('scroll', () => {
                  o().refresh();
                }),
                () => {
                  e.removeEventListener('scroll', () => {
                    o().refresh();
                  });
                }
              );
            }, []),
            (0, n.useEffect)(() => {
              s.current.scrollTo(0, 0);
            }, [c]),
            (0, i.jsx)(l.Provider, {
              value: { setIndex: d },
              children: (0, i.jsx)('div', {
                id: 'scrollable-container',
                className: '/' === t ? 'landing-wrapper' : 'wrapper',
                ref: s,
                children: a,
              }),
            })
          );
        };
    },
    3227: function (e, a, t) {
      'use strict';
      t.r(a);
      var i = t(7437),
        r = t(7215),
        n = t.n(r),
        s = t(4275),
        o = t.n(s),
        l = t(2815),
        c = t(2265);
      let d = (e) => {
        let a, t, r;
        let { DATE: s, LOCATION: o, FULL_LOCATION: d, ALIAS: m } = e.data;
        (a = o[0].toUpperCase()),
          (t = o.slice(-1).toUpperCase()),
          (r = o.slice(1, -1));
        let u = (0, c.useRef)(null),
          g = (0, c.useRef)(null),
          A = (0, c.useRef)(null);
        return (
          (0, c.useEffect)(() => {
            let e = l.p8.timeline({ repeat: -1, repeatDelay: 0 });
            return (
              e.set([u.current, g.current, A.current], { opacity: 0 }),
              e.fromTo(
                u.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.OutIn' },
                0.5,
              ),
              e.fromTo(
                u.current,
                { opacity: 1 },
                { opacity: 0, y: -30, duration: 0.5, ease: 'power2.inOut' },
                2,
              ),
              e.fromTo(
                g.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.OutIn' },
                3,
              ),
              e.fromTo(
                g.current,
                { opacity: 1 },
                { opacity: 0, y: -30, duration: 0.5, ease: 'power2.inOut' },
                4.5,
              ),
              e.fromTo(
                A.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.OutIn' },
                5.5,
              ),
              e.fromTo(
                A.current,
                { opacity: 1 },
                { opacity: 0, y: -50, duration: 0.5, ease: 'power2.inOut' },
                7,
              ),
              e.play(),
              () => {
                e.kill();
              }
            );
          }, []),
          (0, i.jsxs)('div', {
            className: ''.concat(n().location),
            children: [
              (0, i.jsx)('p', { children: s }),
              (0, i.jsx)('div', { className: n().line }),
              (0, i.jsxs)('div', {
                className: n().locationWrapper,
                children: [
                  (0, i.jsxs)('h2', {
                    ref: u,
                    className: n().rotatingTextWords,
                    children: [
                      (0, i.jsx)('span', { children: a }),
                      r,
                      (0, i.jsx)('span', { children: t }),
                    ],
                  }),
                  (0, i.jsx)('h2', {
                    ref: g,
                    className: n().rotatingTextWords,
                    children: m,
                  }),
                  (0, i.jsx)('h2', {
                    ref: A,
                    className: n().rotatingTextWords,
                    children: d,
                  }),
                ],
              }),
            ],
          })
        );
      };
      (d.propTypes = { data: o().object }), (a.default = d);
    },
    8508: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return d;
          },
        });
      var i = t(7437),
        r = t(2265),
        n = t(3352),
        s = t(5675),
        o = {
          particles: {
            retina_detect: !1,
            number: {
              value: 100,
              density: { enable: !0, value_area: 789.1476416322727 },
            },
            color: { value: '#fff' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000' } },
            opacity: {
              value: { min: 0, max: 1 },
              animation: {
                count: 1,
                enable: !0,
                speed: 2,
                startValue: 'min',
                sync: !1,
              },
            },
            size: {
              value: 2,
              random: !0,
              anim: { enable: !0, speed: 2, size_min: 0, sync: !1 },
            },
            move: {
              enable: !0,
              speed: 0.3,
              direction: 'none',
              random: !1,
              straight: !1,
              out_mode: 'out',
              bounce: !1,
              attract: { enable: !1, rotateX: 600, rotateY: 1200 },
            },
          },
          fullScreen: { enable: !0, zIndex: -1 },
          detectRetina: !0,
          fpsLimit: 120,
          interactivity: {
            detect_on: 'window',
            events: {
              onhover: {
                enable: !0,
                mode: 'bubble',
                parallax: { enable: !0, force: 50, smooth: 50 },
              },
              onclick: { enable: !0, mode: 'repulse' },
              resize: !0,
            },
            modes: {
              bubble: {
                distance: 100,
                size: 3,
                duration: 1,
                opacity: 1,
                speed: 10,
              },
              repulse: {
                distance: 100,
                duration: 1,
                speed: 0.5,
                maxSpeed: 50,
                easing: 'ease-out',
                factor: 1,
              },
            },
          },
        },
        l = t(4319),
        c = t.n(l),
        d = () => {
          let e = (0, r.useCallback)(async (e) => {
            await (0, s.S)(e);
          }, []);
          return (0, i.jsx)(n.Z, {
            className: c().tsparticles,
            init: e,
            options: o,
          });
        };
    },
    3846: function (e, a, t) {
      'use strict';
      t.r(a);
      var i = t(7437),
        r = t(1461),
        n = t.n(r),
        s = t(4275),
        o = t.n(s);
      let l = (e) => {
        let { children: a, styleName: t } = e;
        return (0, i.jsx)('div', { className: ''.concat(n()[t]), children: a });
      };
      (l.propTypes = { children: o().node }), (a.default = l);
    },
    9995: function (e, a, t) {
      'use strict';
      t.d(a, {
        $r: function () {
          return d;
        },
        BQ: function () {
          return s;
        },
        Cq: function () {
          return g;
        },
        EO: function () {
          return c;
        },
        Qu: function () {
          return r;
        },
        Qy: function () {
          return i;
        },
        Zs: function () {
          return p;
        },
        b4: function () {
          return m;
        },
        jX: function () {
          return A;
        },
        p2: function () {
          return l;
        },
        pb: function () {
          return o;
        },
        qR: function () {
          return n;
        },
        us: function () {
          return u;
        },
      });
      let i = ' profile image',
        r = {
          TARGET_DATE: 'Oct 11, 2023 10:30:00',
          CLOSING_TIME: 'Oct 12, 2023 21:00:00',
          LIVE_IN: 'Live in ',
          ON_LIVE: 'Event is Live Now !!',
          ON_END: 'See you all in 2024 !!',
          DAYS: 'd : ',
          HOURS: 'h : ',
          MINUTES: 'm : ',
          SECONDS: 's',
          ZEROS: '00',
        },
        n = {
          PRESENTING: 'Presenting Tech Talk On',
          ALONG_WITH: 'Along with',
          IMG_ALT: 'profile-image',
          WATCH_ME: 'Watch Me On',
          ABOUT: 'About',
        },
        s = {
          DATE: 'October 11 & 12',
          LOCATION: 'Bengaluru',
          FULL_LOCATION: 'Bengaluru, India',
          ALIAS: 'Silicon Valley Of India',
        },
        o = 'Take me there',
        l = {
          DAYS: 'Days',
          TECH_TALKS: 'Tech Talks',
          SPEAKERS: 'Speakers',
          GEEKY_ATTENDEES: 'Geeky Attendees',
          GEEKY_ATTENDEES_COUNT: 600,
          REGISTRATION: 'Idea Submissions',
          REGISTRATION_COUNT: 57,
        },
        c = {
          YEAR: '2023',
          TYPE: 'text/calendar',
          ELEMENT: 'a',
          ATTRIBUTE: 'download',
        },
        d = 'Member',
        m = 'Icon',
        u = 'Allspark 2023',
        g = 'No Schedule found with ',
        A = 'View All Sessions',
        p = 'AllSpark';
    },
    7739: function (e) {
      e.exports = {
        'rounded-btn-arrow': 'Button_rounded-btn-arrow__gkgtj',
        'orange-arrow-btn': 'Button_orange-arrow-btn__HlOSZ',
        'gradient-border-btn': 'Button_gradient-border-btn__uKlo_',
        fadeIn: 'Button_fadeIn__MqunM',
      };
    },
    3522: function (e) {
      e.exports = {
        eventLayout: 'DetailsCounter_eventLayout__docQK',
        eventWrapper: 'DetailsCounter_eventWrapper__Sr13d',
        eventCount: 'DetailsCounter_eventCount__o7Fd6',
        eventTitle: 'DetailsCounter_eventTitle__APdcU',
        counterWrapper: 'DetailsCounter_counterWrapper__vVgE_',
        separator: 'DetailsCounter_separator__NHadf',
      };
    },
    4305: function (e) {
      e.exports = {
        header: 'Header_header__gtmFw',
        textShine: 'Header_textShine__cXlSP',
        logo: 'Header_logo__h_d_N',
      };
    },
    7215: function (e) {
      e.exports = {
        location: 'Location_location__S0oWs',
        locationWrapper: 'Location_locationWrapper__uxx46',
        line: 'Location_line__JW_D2',
        rotatingTextWords: 'Location_rotatingTextWords__njmBz',
      };
    },
    2883: function (e) {
      e.exports = {
        logo: 'Logo_logo__J_V2f',
        'all-spark-logo': 'Logo_all-spark-logo__1Pdwl',
        arrow: 'Logo_arrow__0NkSW',
        'spark-logo': 'Logo_spark-logo__Ff56V',
        'outer-circle': 'Logo_outer-circle__9oxvj',
      };
    },
    5154: function (e) {
      e.exports = {
        'main-logo': 'MainLogo_main-logo___FJTk',
        arrow: 'MainLogo_arrow__W56WR',
        'arrow-animation': 'MainLogo_arrow-animation__Ay0dq',
        hitRight: 'MainLogo_hitRight__RXuF_',
        'spark-image': 'MainLogo_spark-image__Gnl7g',
        'spark-animation': 'MainLogo_spark-animation__eRLSG',
        hide: 'MainLogo_hide__euOZx',
        line: 'MainLogo_line__geXQk',
        'grow-line': 'MainLogo_grow-line__uxwPp',
        circle: 'MainLogo_circle__14ATt',
        rotation: 'MainLogo_rotation__U1l2r',
        'tablet-arrow-animation': 'MainLogo_tablet-arrow-animation__Da_J_',
        'mobile-hitRight': 'MainLogo_mobile-hitRight__iZ5GF',
        'tablet-spark-animation': 'MainLogo_tablet-spark-animation__yO_K_',
        'mobile-hide': 'MainLogo_mobile-hide__b6cNY',
        shake: 'MainLogo_shake__zf9_y',
        'tablet-grow-line': 'MainLogo_tablet-grow-line__O1IQp',
        'mobile-arrow-animation': 'MainLogo_mobile-arrow-animation__Wu_nJ',
        'mobile-spark-animation': 'MainLogo_mobile-spark-animation__RKE6N',
        'mobile-grow-line': 'MainLogo_mobile-grow-line___lW_Q',
      };
    },
    4319: function (e) {
      e.exports = { tsparticles: 'Particle_tsparticles__V_WZ4' };
    },
    1461: function (e) {
      e.exports = {
        'brown-glass-card': 'GlassCard_brown-glass-card__DbDy1',
        'glass-card': 'GlassCard_glass-card__O2bLC',
        rotate: 'GlassCard_rotate___vT47',
      };
    },
    7810: function (e, a, t) {
      'use strict';
      t.r(a),
        (a.default = {
          src: '/recap/2023/_next/static/media/arrow-red.f59e7ab3.png',
          height: 2019,
          width: 2287,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAKlBMVEVMaXHcJj7dJj7hJ0DfJz/gJz/jJ0HUKjjWKD3aJELfJz/jJz/jKED5LEa+xSMwAAAADXRSTlMAQlbca82fEhkq6ID+6DW9vAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJwty7kRACAMxEAZG8xz9N8uw4CSjQRQjJfXZ0hxTZe8A2tLu8GYrVhU+0vaARVUAM1GdVS7AAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 7,
        });
    },
    524: function (e, a, t) {
      'use strict';
      t.r(a),
        (a.default = {
          src: '/recap/2023/_next/static/media/line.57cd9e18.png',
          height: 20,
          width: 2194,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAA1BMVEURERGD9/d/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAC0lEQVR4nGNggAIAAAkAAftSuKkAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    210: function (e, a, t) {
      'use strict';
      t.r(a),
        (a.default = {
          src: '/recap/2023/_next/static/media/llspark-with-line.19ccf03d.png',
          height: 889,
          width: 2364,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEXv7+/6+vrs7Oz5+fn19fXv7+/09PTn5+f////////////////t7e1kBSxEAAAADXRSTlMsTcDQh5o4sAo9DRTKvPz16wAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJwFwYcBADAMwyDZWV3/31sgStAJr8L2JPeI1VsfBMEAZwZH4PcAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    2849: function (e, a, t) {
      'use strict';
      t.r(a),
        (a.default = {
          src: '/recap/2023/_next/static/media/llspark.eddf436d.png',
          height: 889,
          width: 2354,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAG1BMVEX///////////////////////////////////8HBRbfAAAACXRSTlM40bopEU2Fk6tA9I/5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nAXBgQEAMAjCsCKg+//iJehqWKPTzLwlqQP9BEIAUHlaO3kAAAAASUVORK5CYII=',
          blurWidth: 8,
          blurHeight: 3,
        });
    },
    4159: function (e, a, t) {
      'use strict';
      t.r(a),
        (a.default = {
          src: '/recap/2023/_next/static/media/outer-circle.8552b266.png',
          height: 2164,
          width: 2164,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEU/CgphFh68JDvIIzd2GCSeHTIkZxN6AAAABnRSTlMBEhZMKDdWyGeUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGNgYGJlYWFkYGBgYgaRjAwMzEwMEMAMpZEYMCm4Yph2AAllAD/ZhFEeAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    3545: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '{"iG":{"1":{"date":"October 11","startTime":"10:30 AM","endTime":"10:40 AM","duration":10,"title":"Welcome to AllSpark","category":""},"2":{"date":"October 11","startTime":"10:45 AM","endTime":"11:45 AM","duration":60,"title":"Keynote by Mike and Ravi","category":""},"3":{"date":"October 11","startTime":"12:00 PM","endTime":"12:30 PM","duration":30,"title":"All About Power Platform","category":"Tech Talk","sessionDescription":"Supercharge your business by crafting applications for a data-driven destiny!","tags":["Apps","Automation","Bots","Reports"],"speakersId":[1,2,3]},"4":{"date":"October 11","startTime":"12:40 PM","endTime":"01:00 PM","duration":20,"title":"Neuralink: An in-body device","category":"Tech Talk","sessionDescription":"Bridging minds and machines; Pioneering the path to a connected tomorrow","tags":["AI","Neuroscience","BMI"],"speakersId":[4,5,6]},"5":{"date":"October 11","startTime":"01:00 PM","endTime":"02:25 PM","duration":85,"title":"Lunch","category":"Break"},"6":{"date":"October 11","startTime":"2:25 PM","endTime":"3:30 PM","duration":65,"title":"Snowflake Keynote","category":"External Partner Session","speakers":[{"name":"Robby Thomas","description":"Manager - Partner Sales Engineering"}]},"7":{"date":"October 11","startTime":"03:30 PM","endTime":"04:00 PM","duration":30,"title":"Engagement Activity","category":"Break"},"8":{"date":"October 11","startTime":"04:15 PM","endTime":"04:45 PM","duration":30,"title":"From Screen to Mind: How Business transforms User Experience into Portals of possibility","category":"Tech Talk","sessionDescription":"Ever wondered why some websites are a breeze to navigate, while others leave you scratching your head to find what you need? Join us to explore the winning formulas that set these standout websites or products apart","tags":["UXperience","Design Innovation","User Research and Insights"],"speakersId":[10,11,12]},"9":{"date":"October 11","startTime":"04:45 PM","endTime":"05:00 PM","duration":15,"title":"Snacks Break","category":"Break"},"10":{"date":"October 11","startTime":"05:00 PM","endTime":"05:30 PM","duration":30,"title":"Infrastructure as code with AWS CDK: Leveraging Advantages for cloud development","category":"Tech Talk","sessionDescription":"Code Less, Build More","tags":["AWS CDK","IaaC","DevOps","AWS Cloud","Infrastructure Modernization"],"speakersId":[15,16,17]},"11":{"date":"October 11","startTime":"05:40 PM","endTime":"06:00 PM","duration":20,"title":"Data Governance","category":"Tech Talk","sessionDescription":"Together we can govern data effectively","tags":["Data","DataGovernance","IndividualResponsibility"],"speakersId":[24,25,26]},"12":{"date":"October 11","startTime":"06:10 PM","endTime":"06:40 PM","duration":20,"title":"ServiceNow - Unleashing the Power of ServiceNow\'s Generative AI and Cloud Observability","category":"Tech Talk","sessionDescription":"Optimizing ServiceNow for Seamless User Experience with Gen AI and Cloud Observability Integration","tags":["ServiceNow","AI","Cloud"],"speakersId":[18,19,20]},"13":{"date":"October 11","startTime":"07:00 PM","endTime":"08:00 PM","duration":"","title":"Dinner","category":"Break"},"14":{"date":"October 12","startTime":"09:30 AM","endTime":"10:35 AM","duration":65,"title":"ServiceNow Keynote","category":"External Partner Session","speakers":[{"name":"Kapil Jacob","description":"Senior Manager - Partner Technology Strategy"}]},"15":{"date":"October 12","startTime":"10:45 AM","endTime":"11:15 AM","duration":30,"title":"Automate Incident and Change Mangement","category":"Tech Talk","sessionDescription":"Automate the INC\'s and changes with precise and swift resolutions that increase customer satisfaction","tags":["NetBrain","SL1","ServiceNow"],"speakersId":[7,8,9]},"16":{"date":"October 12","startTime":"11:15 AM","endTime":"11:45 AM","duration":15,"title":"Engagement Activity & Break","category":"Break"},"17":{"date":"October 12","startTime":"11:45 AM","endTime":"12:15 PM","duration":30,"title":"Code, Text, and Everything Next: LLMs Demystified","category":"Tech Talk","sessionDescription":"Basics to Boundless Possibilities in the World of LLMs","tags":["LLM","LanguageModel","GenAI"],"speakersId":[21,22,23]},"18":{"date":"October 12","startTime":"12:25 PM","endTime":"12:55 PM","duration":30,"title":"Juniper Mist for AI Driven Enterprise","category":"Tech Talk","sessionDescription":"Wired and Wireless Networks empowered with AI and automation.","tags":["AI","Analytics","Network and Security"],"speakersId":[13,14]},"19":{"date":"October 12","startTime":"01:00 PM","endTime":"02:30 PM","duration":90,"title":"Lunch","category":"Break"},"20":{"date":"October 12","startTime":"02:30 PM","endTime":"04:00 PM","duration":90,"title":"Journal Session","category":"","speakers":[{"name":"Ravi Vungarala","description":"General Manager India"},{"name":"Mike Gutknecht","description":"Dir Global Service Delivery"},{"name":"Stephen Morris","description":"Practice VP Global Delivery"},{"name":"Tara Barbieri","description":"VP & GM Orchestration"},{"name":"Tom DeCoster","description":"VP Managed Services"}]},"21":{"date":"October 12","startTime":"04:00 PM","endTime":"04:30 PM","duration":30,"title":"Snacks break & Engagement Activity","category":"Break"},"22":{"date":"October 12","startTime":"04:30 PM","endTime":"05:00 PM","duration":30,"title":"Shopify Unleashed: Powering E-Commernce Evolution","category":"Tech Talk","sessionDescription":"Elevate Your E-Commerce Game with Shopify Unleashed","tags":["Digital Commerce","Personalization","quickToMarket","cost friendly","Analytics"],"speakersId":[27,28,29]},"23":{"date":"October 12","startTime":"05:10 PM","endTime":"05:30 PM","duration":20,"title":"Beyond Disposal: The Digital Twin Revolution in EV Battery Recycling","category":"Tech Talk","sessionDescription":"Breath-In New Life into Old EV batteries - Bringing Revolution through Digital-twins\\nfor a \\"Greater Sustainable Economy and Green Mobility\\"","tags":["Digital Twins","AI","ML","Cloud"],"speakersId":[30,31,32]},"24":{"date":"October 12","startTime":"05:40 PM","endTime":"06:10 PM","duration":20,"title":"Multi Cloud Rapid Networking","category":"Tech Talk","sessionDescription":"Multi-cloud networking with MPLS enables seamless and secure data transfer across multiple cloud environments using a unified, high-performance network infrastructure.","tags":["Networking","Cloud"],"speakersId":[33,34,35]},"25":{"date":"October 12","startTime":"07:00 PM","endTime":"08:00 PM","duration":"","title":"Dinner","category":"Break"}},"eY":{"1":{"name":"Akshaya Dhanraj","email":"akshaya.dhanraj@cdw.com","imageUrl":"/images/speakers/Akshaya Dhanraj.jpg","sessionDetails":{"3":[2,3]}},"2":{"name":"Ridesh Raj","email":"ridesh.raj@cdw.com","imageUrl":"/images/speakers/Ridesh Raj.jpg","sessionDetails":{"3":[1,3]}},"3":{"name":"Sai Krishna Babu","email":"saikrishna.babu@cdw.com","imageUrl":"/images/speakers/Sai Krishna Babu.jpg","sessionDetails":{"3":[1,2]}},"4":{"name":"Prarthana Ponnath","email":"prarthana.ponnath@cdw.com","imageUrl":"/images/speakers/Prarthana Ponnath.jpg","sessionDetails":{"4":[5,6]}},"5":{"name":"Akash Sabu","email":"akash.sabu@cdw.com","imageUrl":"/images/speakers/Akash Sabu.jpg","sessionDetails":{"4":[4,6]}},"6":{"name":"Yeshwant Rajaraman","email":"yeshwant.rajaraman@cdw.com","imageUrl":"/images/speakers/Yeshwant Rajaraman.jpg","sessionDetails":{"4":[4,5]}},"7":{"name":"Avinash Bembavarapu","email":"avinash.bembavarapu@cdw.com","imageUrl":"/images/speakers/Avinash Bembavarapu.jpg","sessionDetails":{"15":[8,9]}},"8":{"name":"Veerappan Muthuraman","email":"veerappan.muthuraman@cdw.com","imageUrl":"/images/speakers/Veerappan Muthuraman.jpg","sessionDetails":{"15":[7,9]}},"9":{"name":"Rajiv Kumar","email":"rajiv.kumar@cdw.com","imageUrl":"/images/speakers/Rajiv Kumar.jpg","sessionDetails":{"15":[7,8]}},"10":{"name":"Gladstone Abraham Rajan","email":"gladstoneabraham.rajan@cdw.com","imageUrl":"/images/speakers/Gladstone Abraham Rajan.jpg","sessionDetails":{"8":[11,12]}},"11":{"name":"Kevin Jacob Selvan","email":"kevinjacob.selvan@cdw.com","imageUrl":"/images/speakers/Kevin Jacob Selvan.jpg","sessionDetails":{"8":[10,12]}},"12":{"name":"Veena Kumaran","email":"veena.kumaran@cdw.com","imageUrl":"/images/speakers/Veena Kumaran.jpg","sessionDetails":{"8":[10,11]}},"13":{"name":"Vijay Krishna Pothuganti","email":"vijay.pothuganti@cdw.com","imageUrl":"/images/speakers/Vijay Krishna Pothuganti.jpg","sessionDetails":{"18":[14]}},"14":{"name":"Sreekumar Nandakumar","email":"sreenan@cdw.com","imageUrl":"/images/speakers/Sreekumar Nandakumar.jpg","sessionDetails":{"18":[13]}},"15":{"name":"Rahul Arora","email":"rahul.arora@cdw.com","imageUrl":"/images/speakers/Rahul Arora.jpg","sessionDetails":{"10":[16,17]}},"16":{"name":"Manoj Prabhu","email":"manoj.prabhu@cdw.com","imageUrl":"/images/speakers/Manoj Prabhu.jpg","sessionDetails":{"10":[15,17]}},"17":{"name":"Swaathi Suresh","email":"swaathi.suresh@cdw.com","imageUrl":"/images/speakers/Swaathi Suresh.jpg","sessionDetails":{"10":[15,16]}},"18":{"name":"Harish Murugaiyan","email":"harish.murugaiyan@cdw.com","imageUrl":"/images/speakers/Harish Murugaiyan.jpg","sessionDetails":{"12":[19,20]}},"19":{"name":"Shivani Anbumozhi","email":"shivani.anbumozhi@cdw.com","imageUrl":"/images/speakers/Shivani Anbumozhi.jpg","sessionDetails":{"12":[18,20]}},"20":{"name":"Naveen Gowthaman","email":"naveen.gowthaman@cdw.com","imageUrl":"/images/speakers/Naveen Gowthaman.jpg","sessionDetails":{"12":[18,19]}},"21":{"name":"Mukesh Ravi","email":"mukesh.ravi@cdw.com","imageUrl":"/images/speakers/Mukesh Ravi.jpg","sessionDetails":{"17":[22,23]}},"22":{"name":"Hemapriya Nagarajan","email":"hemapriya.nagarajan@cdw.com","imageUrl":"/images/speakers/Hemapriya Nagarajan.jpg","sessionDetails":{"17":[21,23]}},"23":{"name":"Dineshkumar Ravi","email":"dineshkumar.ravi@cdw.com","imageUrl":"/images/speakers/Dineshkumar Ravi.jpg","sessionDetails":{"17":[21,22]}},"24":{"name":"Narendhiran Neelakandan","email":"narendhiran.neelakandan@cdw.com","imageUrl":"/images/speakers/Narendhiran Neelakandan.jpg","sessionDetails":{"11":[25,26]}},"25":{"name":"Praveen Rathinavel","email":"praveen.rathinavel@cdw.com","imageUrl":"/images/speakers/Praveen Rathinavel.jpg","sessionDetails":{"11":[24,26]}},"26":{"name":"Gnana Sarathy Alagesan","email":"gnanasarathy.alagesan@cdw.com","imageUrl":"/images/speakers/Gnana Sarathy Alagesan.jpg","sessionDetails":{"11":[24,25]}},"27":{"name":"Anbezhil Marban","email":"anbezhil.marban@cdw.com","imageUrl":"/images/speakers/Anbezhil Marban.jpg","sessionDetails":{"22":[28,29]}},"28":{"name":"Arunjunai Selvi Murugan","email":"arunjunaiselvi.murugan@cdw.com","imageUrl":"/images/speakers/Arunjunai Selvi Murugan.jpg","sessionDetails":{"22":[27,29]}},"29":{"name":"Hareesh Raj Ramanathan","email":"hareeshraja.ramanathan@cdw.com","imageUrl":"/images/speakers/Hareesh Raj Ramanathan.jpg","sessionDetails":{"22":[27,28]}},"30":{"name":"Vimala Devi Gerrela","email":"vimaladevi.gerrela@cdw.com","imageUrl":"/images/speakers/Vimala Devi Gerrela.jpg","sessionDetails":{"23":[31,32]}},"31":{"name":"Murali Krishna Vujji","email":"muralikrishna.vujji@cdw.com","imageUrl":"/images/speakers/Murali Krishna Vujji.jpg","sessionDetails":{"23":[30,32]}},"32":{"name":"Prakruthi Itagalli","email":"prakruthi.itagalli@cdw.com","imageUrl":"/images/speakers/Prakruthi Itagalli.jpg","sessionDetails":{"23":[30,31]}},"33":{"name":"Madhu Nandya Naik","email":"madhu.nandyanaik@cdw.com","imageUrl":"/images/speakers/Madhu Nandya Naik.jpg","sessionDetails":{"24":[34,35]}},"34":{"name":"Sasikumar Loganathan","email":"sasikumar.loganathan@cdw.com","imageUrl":"/images/speakers/Sasikumar Loganathan.jpg","sessionDetails":{"24":[33,35]}},"35":{"name":"Ilancheran Muthumari","email":"ilancheran.muthumari@cdw.com","imageUrl":"/images/speakers/Ilancheran Muthumari.jpg","sessionDetails":{"24":[33,34]}}},"TZ":{"1":{"date":"October 11","sessions":[1,2,3,4,5,6,7,8,9,10,11,12,13]},"2":{"date":"October 12","sessions":[14,15,16,17,18,19,20,21,22,23,24,25]}}}',
      );
    },
  },
]);
