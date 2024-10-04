(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    6837: function (e, r, n) {
      Promise.resolve().then(n.t.bind(n, 3015, 23)),
        Promise.resolve().then(n.t.bind(n, 3222, 23)),
        Promise.resolve().then(n.bind(n, 8515)),
        Promise.resolve().then(n.bind(n, 4159)),
        Promise.resolve().then(n.bind(n, 8508)),
        Promise.resolve().then(n.bind(n, 3227)),
        Promise.resolve().then(n.bind(n, 7422)),
        Promise.resolve().then(n.bind(n, 2275)),
        Promise.resolve().then(n.bind(n, 3846)),
        Promise.resolve().then(n.bind(n, 7610)),
        Promise.resolve().then(n.bind(n, 2511)),
        Promise.resolve().then(n.bind(n, 7810)),
        Promise.resolve().then(n.bind(n, 210)),
        Promise.resolve().then(n.bind(n, 2849)),
        Promise.resolve().then(n.bind(n, 524)),
        Promise.resolve().then(n.bind(n, 4532)),
        Promise.resolve().then(n.bind(n, 5823)),
        Promise.resolve().then(n.bind(n, 6321)),
        Promise.resolve().then(n.t.bind(n, 3827, 23)),
        Promise.resolve().then(n.t.bind(n, 6873, 23)),
        Promise.resolve().then(n.t.bind(n, 5813, 23)),
        Promise.resolve().then(n.t.bind(n, 4375, 23)),
        Promise.resolve().then(n.t.bind(n, 1751, 23)),
        Promise.resolve().then(n.t.bind(n, 2883, 23)),
        Promise.resolve().then(n.t.bind(n, 5154, 23));
    },
    2145: function (e, r, n) {
      'use strict';
      n.d(r, {
        Z: function () {
          return c;
        },
      });
      var t = n(7437),
        o = n(7234),
        s = n.n(o),
        i = n(6691),
        a = n.n(i),
        l = n(3771);
      function c() {
        return (0, t.jsx)('div', {
          className: s().logoWrapper,
          children: (0, t.jsx)('a', {
            href: l.DH,
            target: '_blank',
            rel: 'noopener noreferrer',
            children: (0, t.jsx)(a(), {
              className: s().cdwLogo,
              src: '/logos/cdwLogo.png',
              alt: 'CDW Logo',
              priority: !0,
              width: 100,
              height: 100,
            }),
          }),
        });
      }
    },
    363: function (e, r, n) {
      'use strict';
      var t = n(7437),
        o = n(2265);
      r.Z = (e) => {
        let { children: r, delaySeconds: n } = e,
          [s, i] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            let e = 1e3 * n,
              r = setTimeout(() => {
                i(!0);
              }, [e]);
            return () => {
              clearTimeout(r);
            };
          }, [n]),
          s ? (0, t.jsx)(t.Fragment, { children: r }) : null
        );
      };
    },
    5823: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          default: function () {
            return d;
          },
        });
      var t = n(7437),
        o = n(8197),
        s = n.n(o),
        i = n(7239),
        a = n(2083),
        l = n(2145),
        c = n(4033),
        u = n(363);
      function d() {
        let e = (0, c.usePathname)();
        return (0, t.jsx)(t.Fragment, {
          children:
            '/' === e
              ? (0, t.jsx)(u.Z, {
                  delaySeconds: 5.5,
                  children: (0, t.jsxs)('section', {
                    className: s().footerWrapper,
                    children: [
                      (0, t.jsx)(a.Z, {}),
                      (0, t.jsx)(i.Z, {}),
                      (0, t.jsx)(l.Z, {}),
                    ],
                  }),
                })
              : (0, t.jsxs)('section', {
                  className: s().footerWrapper,
                  children: [
                    (0, t.jsx)(a.Z, {}),
                    (0, t.jsx)(i.Z, {}),
                    (0, t.jsx)(l.Z, {}),
                  ],
                }),
        });
      }
    },
    7239: function (e, r, n) {
      'use strict';
      n.d(r, {
        Z: function () {
          return u;
        },
      });
      var t = n(7437),
        o = n(633),
        s = n.n(o),
        i = n(1396),
        a = n.n(i),
        l = n(3771),
        c = n(4033);
      function u(e) {
        var r;
        let { setIsOpen: n } = e,
          o = (0, c.usePathname)();
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)('div', {
            className: s().navWrapper,
            children:
              null === (r = l.CZ) || void 0 === r
                ? void 0
                : r.map((e, r) =>
                    (0, t.jsx)(
                      'div',
                      {
                        onClick: n && (() => n(!1)),
                        children: (0, t.jsx)(
                          a(),
                          {
                            href: e.link,
                            passHref: !0,
                            legacyBehavior: !0,
                            tabIndex: e.key,
                            as: e.link,
                            prefetch: !1,
                            children: (0, t.jsxs)('div', {
                              className: ''
                                .concat(s().btnCont, ' \n              ')
                                .concat(o == e.link ? s().active : ''),
                              children: [
                                (0, t.jsx)('span', {
                                  className: s().hoverSpan,
                                }),
                                (0, t.jsx)('span', {
                                  className: s().hoverSpan,
                                }),
                                (0, t.jsx)('button', {
                                  className: s().hoverButton,
                                  children: e.id,
                                }),
                              ],
                            }),
                          },
                          r,
                        ),
                      },
                      r,
                    ),
                  ),
          }),
        });
      }
    },
    6321: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          default: function () {
            return g;
          },
        });
      var t = n(7437),
        o = n(4440),
        s = n.n(o);
      n(9783);
      var i = (e) => {
          let { className: r, isOpen: n, ...o } = e;
          return (0, t.jsx)('div', {
            className: s()('burger', r, { burgerSqueeze: n, open: n }),
            ...o,
            children: (0, t.jsx)('div', { className: 'burger-lines' }),
          });
        },
        a = n(9995),
        l = n(1396),
        c = n.n(l),
        u = n(2265),
        d = n(2145),
        p = n(7239),
        h = n(3354),
        _ = n(2083),
        m = n(507),
        v = n.n(m);
      function g() {
        let [e, r] = (0, u.useState)(!1),
          n = () => {
            e && r(!1);
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsxs)('div', {
            className: e ? v().hamburgerWrapperOpen : v().hamburgerWrapper,
            children: [
              (0, t.jsxs)('div', {
                className: v().menuBtn,
                onClick: () => {
                  r(!0), n();
                },
                children: [
                  (0, t.jsx)(i, { isOpen: e, className: v().burger }),
                  (0, t.jsxs)('div', {
                    className: ''
                      .concat(v().burger, ' ')
                      .concat(v().burgerSqueeze),
                    children: [
                      (0, t.jsx)('div', {
                        className: ''.concat(v()['burger-lines']),
                      }),
                      (0, t.jsx)('style', {
                        children:
                          '\n             .burger .burger-lines:after, .burger .burger-lines:before {\n              width: 1.7em !important;\n              background-color: #ff8c4e;\n            }\n            .burger .burger-lines {\n              background-color: #ffc06c;\n            }\n            ',
                      }),
                    ],
                  }),
                ],
              }),
              e
                ? (0, t.jsx)('div', {
                    className: v().navBar,
                    children: (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)('div', {
                          className: v().logo,
                          children: (0, t.jsx)(c(), {
                            href: '/',
                            'aria-label': a.us,
                            as: '/',
                            onClick: () => {
                              r(!1);
                            },
                            children: (0, t.jsx)(h.TR, {}),
                          }),
                        }),
                        (0, t.jsx)(p.Z, { setIsOpen: r }),
                        (0, t.jsx)(_.Z, {}),
                        (0, t.jsx)(d.Z, {}),
                      ],
                    }),
                  })
                : null,
            ],
          }),
        });
      }
    },
    2083: function (e, r, n) {
      'use strict';
      n.d(r, {
        Z: function () {
          return l;
        },
      });
      var t = n(7437),
        o = n(3771),
        s = n(9591),
        i = n.n(s),
        a = n(504);
      function l() {
        var e;
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)('div', {
            className: i().iconWrapper,
            children:
              null === (e = o.Vq) || void 0 === e
                ? void 0
                : e.map((e, r) =>
                    (0, t.jsx)(
                      'a',
                      {
                        href: e.link,
                        target: '_blank',
                        className: i().iconStyles,
                        rel: 'noopener noreferrer',
                        'aria-label': e.id.iconName,
                        children: (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)('svg', {
                              width: '0',
                              height: '0',
                              children: (0, t.jsxs)('linearGradient', {
                                id: 'rg',
                                x1: '0%',
                                y1: '10%',
                                x2: '100%',
                                y2: '90%',
                                children: [
                                  (0, t.jsx)('stop', {
                                    offset: '14%',
                                    style: {
                                      stopColor: 'rgb(255,192,108)',
                                      stopOpacity: '1.00',
                                    },
                                  }),
                                  (0, t.jsx)('stop', {
                                    offset: '67%',
                                    style: {
                                      stopColor: 'rgb(255,140,78)',
                                      stopOpacity: '1.00',
                                    },
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)(
                              a.G,
                              { icon: null == e ? void 0 : e.id },
                              e.key,
                            ),
                          ],
                        }),
                      },
                      r,
                    ),
                  ),
          }),
        });
      }
    },
    3771: function (e, r, n) {
      'use strict';
      n.d(r, {
        CZ: function () {
          return o;
        },
        DH: function () {
          return i;
        },
        Vq: function () {
          return s;
        },
      });
      var t = n(62);
      let o = [
          { id: 'ABOUT', link: '/about', key: 1 },
          { id: 'EVENT', link: '/event', key: 2 },
          { id: 'GUESTS', link: '/guests', key: 3 },
          { id: 'SCHEDULE', link: '/schedule', key: 4 },
          { id: 'SPEAKERS', link: '/speakers', key: 5 },
          { id: 'RECAP', link: '/recap', key: 6 },
          { id: 'COMMITTEE', link: '/committee', key: 7 },
        ],
        s = [
          { id: t.AYu, link: 'https://www.facebook.com/AllSparkTX', key: 1 },
          { id: t.Zzi, link: 'https://www.instagram.com/allsparktx/', key: 2 },
          { id: t.hwn, link: 'https://www.linkedin.com/company/cdw', key: 3 },
        ],
        i = 'https://www.cdw.com';
    },
    9783: function () {},
    6873: function () {},
    7234: function (e) {
      e.exports = {
        logoWrapper: 'CdwLogo_logoWrapper__fOzLm',
        cdwLogo: 'CdwLogo_cdwLogo__qesy4',
      };
    },
    1751: function (e) {
      e.exports = {
        card: 'EventCard_card__r1ItO',
        pictureWrapper: 'EventCard_pictureWrapper__RJh3O',
        picture: 'EventCard_picture__hMjiX',
        title: 'EventCard_title__ehiqm',
        description: 'EventCard_description__VQoBw',
        date: 'EventCard_date__Il7fq',
      };
    },
    8197: function (e) {
      e.exports = { footerWrapper: 'Footer_footerWrapper__JGMM1' };
    },
    633: function (e) {
      e.exports = {
        navWrapper: 'footerNavItems_navWrapper__rqZGW',
        active: 'footerNavItems_active__EwIcX',
        hoverButton: 'footerNavItems_hoverButton__Pl7HY',
        btnCont: 'footerNavItems_btnCont__5XLt4',
        hoverSpan: 'footerNavItems_hoverSpan__9WLdT',
        navContent: 'footerNavItems_navContent__hu0oh',
      };
    },
    507: function (e) {
      e.exports = {
        hamburgerWrapper: 'HamburgerMenu_hamburgerWrapper__ULX8L',
        allSparkLogo: 'HamburgerMenu_allSparkLogo__aX_B5',
        navLiks: 'HamburgerMenu_navLiks__v3S9Y',
        navBar: 'HamburgerMenu_navBar__I8Efu',
        menuBtn: 'HamburgerMenu_menuBtn__jBnTT',
        hamburgerWrapperOpen: 'HamburgerMenu_hamburgerWrapperOpen__ht9vU',
        logo: 'HamburgerMenu_logo__ZSkYI',
        burgerSqueeze: 'HamburgerMenu_burgerSqueeze__thCRp',
        'burger-lines': 'HamburgerMenu_burger-lines__S9AOY',
        open: 'HamburgerMenu_open__nydFa',
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
    9591: function (e) {
      e.exports = {
        iconWrapper: 'SocialIcons_iconWrapper__4eZ4f',
        iconStyles: 'SocialIcons_iconStyles__FjJFu',
      };
    },
    8515: function (e, r, n) {
      'use strict';
      n.r(r),
        (r.default = {
          src: '/recap/2023/_next/static/media/spark-with-arrow.b37484ce.png',
          height: 893,
          width: 2887,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEX6+vr6+vry9fXm5ubwusHo4uTYAiDr6+vMAADslaD1///LIpsLAAAAC3RSTlNsiVp6R5FXpgrNt5hJF5IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2Dj5GJlZmZnYuBgYWJkYGBkAAAC/wA+TYb/+AAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 2,
        });
    },
  },
  function (e) {
    e.O(0, [922, 958, 222, 724, 504, 40, 862, 971, 596, 744], function () {
      return e((e.s = 6837));
    }),
      (_N_E = e.O());
  },
]);
