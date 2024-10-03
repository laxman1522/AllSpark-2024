(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    4445: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 7917));
    },
    7917: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var r = n(7437),
        i = n(3050),
        s = n.n(i),
        a = function (e) {
          let t = Math.floor(e / 864e5)
              .toString()
              .padStart(2, '0'),
            n = Math.floor((e % 864e5) / 36e5)
              .toString()
              .padStart(2, '0'),
            r = Math.floor((e % 36e5) / 6e4)
              .toString()
              .padStart(2, '0'),
            i = Math.floor((e % 6e4) / 1e3)
              .toString()
              .padStart(2, '0');
          return [t, n, r, i];
        },
        o = n(2265),
        l = n(9995);
      function c() {
        let e = new Date(l.Qu.TARGET_DATE).getTime(),
          t = new Date(l.Qu.CLOSING_TIME).getTime(),
          [n, i, c, u] = ((e) => {
            let t = new Date(e).getTime(),
              [n, r] = (0, o.useState)(t - new Date().getTime());
            return (
              (0, o.useEffect)(() => {
                let e = setInterval(() => {
                  r(t - new Date().getTime());
                }, 1e3);
                return () => clearInterval(e);
              }, [t]),
              a(n)
            );
          })(e),
          d = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)('span', { children: l.Qu.LIVE_IN }),
              (0, r.jsx)('span', { children: n + l.Qu.DAYS }),
              (0, r.jsx)('span', { children: i + l.Qu.HOURS }),
              (0, r.jsx)('span', { children: c + l.Qu.MINUTES }),
              (0, r.jsx)('span', { children: u + l.Qu.SECONDS }),
            ],
          });
        return (
          n <= l.Qu.ZEROS &&
            i <= l.Qu.ZEROS &&
            c <= l.Qu.ZEROS &&
            u <= l.Qu.ZEROS &&
            (d = l.Qu.ON_LIVE),
          t <= new Date().getTime() && (d = l.Qu.ON_END),
          (0, r.jsxs)('div', {
            className: s().timer,
            children: [
              (0, r.jsx)('div', { className: s().circle }),
              (0, r.jsx)('div', { className: s().time, children: d }),
            ],
          })
        );
      }
      var u = n(3354),
        d = n(4239),
        m = n.n(d),
        _ = n(363),
        h = n(1396),
        x = n.n(h),
        f = () =>
          (0, r.jsxs)('div', {
            className: m()['home-page'],
            children: [
              (0, r.jsx)(_.Z, {
                delaySeconds: 5,
                children: (0, r.jsx)('div', {
                  className: m().timer,
                  children: (0, r.jsx)(c, {}),
                }),
              }),
              (0, r.jsx)(_.Z, {
                delaySeconds: 0.5,
                children: (0, r.jsx)('div', {
                  className: m().logo,
                  children: (0, r.jsx)(u.zU, {}),
                }),
              }),
              (0, r.jsxs)(_.Z, {
                delaySeconds: 5,
                children: [
                  (0, r.jsx)('div', {
                    className: m().location,
                    children: (0, r.jsx)(u.Ye, { data: l.BQ }),
                  }),
                  (0, r.jsx)('div', {
                    className: m()['enter-button'],
                    children: (0, r.jsx)(x(), {
                      href: '/about',
                      as: 'about',
                      prefetch: !1,
                      children: (0, r.jsx)(u.zx, {
                        styleName: 'rounded-btn-arrow',
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
    },
    363: function (e, t, n) {
      'use strict';
      var r = n(7437),
        i = n(2265);
      t.Z = (e) => {
        let { children: t, delaySeconds: n } = e,
          [s, a] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = 1e3 * n,
              t = setTimeout(() => {
                a(!0);
              }, [e]);
            return () => {
              clearTimeout(t);
            };
          }, [n]),
          s ? (0, r.jsx)(r.Fragment, { children: t }) : null
        );
      };
    },
    4239: function (e) {
      e.exports = {
        'home-page': 'Home_home-page__xHBA6',
        timer: 'Home_timer__93_b6',
        fadein: 'Home_fadein__9P1PD',
        location: 'Home_location__yomsU',
        logo: 'Home_logo__2mtd4',
        'enter-button': 'Home_enter-button__2Dib1',
      };
    },
    3050: function (e) {
      e.exports = {
        timer: 'Timer_timer__y7Eh_',
        circle: 'Timer_circle__HiBnK',
        time: 'Timer_time__72OgL',
      };
    },
  },
  function (e) {
    e.O(0, [922, 222, 724, 727, 971, 596, 744], function () {
      return e((e.s = 4445));
    }),
      (_N_E = e.O());
  },
]);
