(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [591],
  {
    6299: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 3860));
    },
    3860: function (e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, {
          default: function () {
            return w;
          },
        });
      var r = t(7437),
        l = t(7989),
        i = t.n(l),
        n = t(2759),
        s = t(504),
        c = t(683),
        o = t(9995);
      function g(e) {
        let a = c.nn,
          t = e.currentNav,
          l = [];
        a.forEach((e, r) => {
          e.name === t &&
            (l =
              0 == r
                ? a.slice(0, 3)
                : r == a.length - 1
                  ? a.slice(a.length - 3, a.length)
                  : a.slice(r - 1, r + 2));
        });
        let g = [];
        return (
          l.forEach((e, a) => {
            g.push(
              (0, r.jsxs)(
                'li',
                {
                  children: [
                    (0, r.jsx)(
                      'a',
                      {
                        href: e.links,
                        id: 'year',
                        className: t == e.name ? i().active : '',
                        children: e.name,
                      },
                      a,
                    ),
                    t == e.name
                      ? (0, r.jsx)('div', {
                          children: (0, r.jsxs)('a', {
                            id: ''.concat(i().link),
                            href: e.link,
                            target: '_blank',
                            children: [
                              o.pb,
                              ' ',
                              (0, r.jsx)(s.G, {
                                className: i().rightArrow,
                                icon: n.eFW,
                              }),
                            ],
                          }),
                        })
                      : '',
                  ],
                },
                a,
              ),
            );
          }),
          (0, r.jsx)('ul', { className: i().list, children: g })
        );
      }
      var p = t(1886),
        u = t.n(p),
        S = t(6691),
        d = t.n(S),
        m = t(5508);
      function h() {
        let e = (0, m.if)(),
          a = [];
        return (
          e.forEach((e) => {
            let t = e.name ? e.name + ' ' + o.Zs : o.Zs,
              l = e.imageUrls,
              i = [];
            l.map((e, a) => {
              i.push(
                (0, r.jsx)(
                  d(),
                  {
                    id: u().img,
                    src: e,
                    width: 800,
                    height: 500,
                    priority: !0,
                    alt: t,
                    'aria-label': t,
                    className: (a + 1) % 2 == 0 ? u().right : u().left,
                  },
                  a,
                ),
              );
            }),
              a.push(
                (0, r.jsx)(
                  'section',
                  { id: e.name, className: u().contentsection, children: i },
                  e.name,
                ),
              );
          }),
          (0, r.jsx)('div', { children: a })
        );
      }
      var _ = t(4770),
        k = t.n(_),
        A = t(2265);
      t(8515), t(4159);
      var j = t(5813),
        f = t.n(j),
        v = () =>
          (0, r.jsx)('div', {
            className: f().loaderWrapper,
            children: (0, r.jsxs)('div', {
              className: f().loader,
              children: [
                (0, r.jsx)(d(), {
                  src: '/logos/outer-circle.png',
                  alt: 'outer circle',
                  className: f().outerCircle,
                  height: 100,
                  width: 100,
                }),
                (0, r.jsx)(d(), {
                  src: '/images/spark-with-arrow.png',
                  alt: 'spark logo',
                  className: f().loaderSpark,
                  height: 100,
                  width: 100,
                }),
              ],
            }),
          });
      function x() {
        return (0, r.jsx)(v, {});
      }
      var N = t(3354);
      function w() {
        let e = c.nn,
          [a, t] = (0, A.useState)(0),
          [l, i] = (0, A.useState)(e[0].name),
          n = 0,
          s = 0;
        return (0, r.jsxs)(A.Suspense, {
          fallback: (0, r.jsx)(x, {}),
          children: [
            (0, r.jsxs)('div', {
              className: ''.concat(k().pageWrapper),
              children: [
                (0, r.jsx)(g, { currentNav: l }),
                (0, r.jsx)('div', {
                  className: ''.concat(k().sectionWrapper),
                  children: (0, r.jsx)('div', {
                    className: ''.concat(k().sectionContainer),
                    onScroll: (r) => {
                      Math.abs(Math.round((a - s) / n)) <= e.length &&
                        t(r.currentTarget.scrollTop),
                        (s = Math.round(
                          (n = Math.round(
                            r.currentTarget.scrollHeight / e.length,
                          )) /
                            (e.length / 2),
                        )),
                        i(e[Math.abs(Math.round((a - s) / n))].name + '');
                    },
                    children: (0, r.jsx)(h, {}),
                  }),
                }),
              ],
            }),
            (0, r.jsx)('div', {
              className: 'arch',
              children: (0, r.jsx)(N.qW, {}),
            }),
          ],
        });
      }
    },
    5508: function (e, a, t) {
      'use strict';
      t.d(a, {
        iV: function () {
          return s;
        },
        if: function () {
          return g;
        },
        T3: function () {
          return i;
        },
        Jy: function () {
          return c;
        },
        Mz: function () {
          return n;
        },
        f2: function () {
          return o;
        },
      });
      var r = t(683),
        l = t(3545);
      let i = (e) => l.iG[''.concat(e)],
        n = (e) => l.eY[''.concat(e)];
      function s(e) {
        let a = new Date(e),
          t = a.getFullYear(),
          r = (a.getMonth() + 1).toString().padStart(2, '0'),
          l = a.getDate().toString().padStart(2, '0'),
          i = a.getHours().toString().padStart(2, '0'),
          n = a.getMinutes().toString().padStart(2, '0'),
          s = a.getSeconds().toString().padStart(2, '0'),
          c = ''
            .concat(t)
            .concat(r)
            .concat(l, 'T')
            .concat(i)
            .concat(n)
            .concat(s, 'Z');
        return c;
      }
      let c = (e) => {
        let a = [],
          t = l.iG,
          r = Object.keys(t);
        for (let l of r) {
          let r = t[l],
            i = r.date;
          i === e && a.push(r);
        }
        return a;
      };
      function o(e, a) {
        let t = [];
        if ('' === e || void 0 === e) return a;
        let r = null == e ? void 0 : e.toLowerCase();
        for (let e in a) {
          let l = a[e];
          (l.title.toLowerCase().includes(r) ||
            l.category.toLowerCase().includes(r) ||
            (l.speakersId &&
              l.speakersId.some((e) => n(e).name.toLowerCase().includes(r))) ||
            (l.tags && l.tags.some((e) => e.toLowerCase().includes(r)))) &&
            t.push(l);
        }
        return t;
      }
      let g = () => r.nn;
    },
    4770: function (e) {
      e.exports = {
        pageWrapper: 'recapPage_pageWrapper__V0_Bj',
        navWrapper: 'recapPage_navWrapper__OnKv4',
        sectionWrapper: 'recapPage_sectionWrapper__Hm2o1',
        sectionContainer: 'recapPage_sectionContainer__YZSgy',
      };
    },
    5813: function (e) {
      e.exports = {
        loaderWrapper: 'Loader_loaderWrapper__gcMsr',
        loader: 'Loader_loader__WB6Pt',
        loaderSpark: 'Loader_loaderSpark__7FYsq',
        outerCircle: 'Loader_outerCircle__B1EQ4',
        rotation: 'Loader_rotation__j_fEN',
      };
    },
    7989: function (e) {
      e.exports = {
        list: 'NavigationStyle_list__IemKM',
        rightArrow: 'NavigationStyle_rightArrow__KUpS1',
        active: 'NavigationStyle_active__IoH_j',
        inactive: 'NavigationStyle_inactive__Vy9kD',
        link: 'NavigationStyle_link__VoXbV',
      };
    },
    1886: function (e) {
      e.exports = {
        img: 'SectionStyle_img__5KZ2X',
        left: 'SectionStyle_left__m_ILQ',
        right: 'SectionStyle_right__i4qPt',
      };
    },
    8515: function (e, a, t) {
      'use strict';
      t.r(a),
        (a.default = {
          src: '/recap/2023/_next/static/media/spark-with-arrow.b37484ce.png',
          height: 893,
          width: 2887,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEX6+vr6+vry9fXm5ubwusHo4uTYAiDr6+vMAADslaD1///LIpsLAAAAC3RSTlNsiVp6R5FXpgrNt5hJF5IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2Dj5GJlZmZnYuBgYWJkYGBkAAAC/wA+TYb/+AAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 2,
        });
    },
    683: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '{"nn":[{"name":"2022","imageUrls":["/images/allSparkStills/2022/1.jpg","/images/allSparkStills/2022/2.jpg","/images/allSparkStills/2022/3.jpg","/images/allSparkStills/2022/4.jpg"],"link":"/recap/2022/","links":"#2022"},{"name":"2019","imageUrls":["/images/allSparkStills/2019/1.jpg","/images/allSparkStills/2019/2.jpg","/images/allSparkStills/2019/3.jpg","/images/allSparkStills/2019/4.jpg"],"link":"/recap/2019/","links":"#2019"},{"name":"2018","imageUrls":["/images/allSparkStills/2018/1.jpg","/images/allSparkStills/2018/2.jpg","/images/allSparkStills/2018/3.jpg","/images/allSparkStills/2018/4.jpg"],"link":"/recap/2018/","links":"#2018"},{"name":"2017","imageUrls":["/images/allSparkStills/2017/1.jpg","/images/allSparkStills/2017/2.jpg","/images/allSparkStills/2017/3.jpg","/images/allSparkStills/2017/4.jpg"],"link":"/recap/2017/","links":"#2017"},{"name":"2016","imageUrls":["/images/allSparkStills/2016/1.jpg","/images/allSparkStills/2016/2.jpg","/images/allSparkStills/2016/3.jpg","/images/allSparkStills/2016/4.jpg"],"link":"/recap/2016/","links":"#2016"}]}',
      );
    },
  },
  function (e) {
    e.O(0, [922, 676, 222, 724, 504, 862, 971, 596, 744], function () {
      return e((e.s = 6299));
    }),
      (_N_E = e.O());
  },
]);
