(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [498],
  {
    27: function (e, a, r) {
      Promise.resolve().then(r.bind(r, 8508)),
        Promise.resolve().then(r.bind(r, 3227)),
        Promise.resolve().then(r.bind(r, 7422)),
        Promise.resolve().then(r.t.bind(r, 3222, 23)),
        Promise.resolve().then(r.bind(r, 3846)),
        Promise.resolve().then(r.bind(r, 2275)),
        Promise.resolve().then(r.bind(r, 2511)),
        Promise.resolve().then(r.bind(r, 7610)),
        Promise.resolve().then(r.bind(r, 4159)),
        Promise.resolve().then(r.bind(r, 7810)),
        Promise.resolve().then(r.bind(r, 210)),
        Promise.resolve().then(r.bind(r, 2849)),
        Promise.resolve().then(r.bind(r, 524)),
        Promise.resolve().then(r.bind(r, 4532)),
        Promise.resolve().then(r.bind(r, 8515)),
        Promise.resolve().then(r.bind(r, 1292));
    },
    1985: function (e, a, r) {
      'use strict';
      r.r(a),
        r.d(a, {
          default: function () {
            return m;
          },
        });
      var o = r(7437),
        n = r(6020),
        s = r.n(n),
        i = r(6691),
        t = r.n(i),
        l = r(9995);
      function m(e) {
        let {
            data: a,
            isDesignationVisible: r,
            isKnowMoreIconVisible: n,
            toggleSpeakerModalPopup: i,
          } = e,
          { name: m, imageUrl: d, designation: c, speakerId: u } = a;
        return (0, o.jsx)(o.Fragment, {
          children:
            (d || m || c) &&
            (0, o.jsx)('div', {
              className: ''
                .concat(s().memberCardWrapperOutline, ' ')
                .concat(n ? ''.concat(s().speaker) : ''),
              role: 'button',
              tabIndex: '0',
              onKeyDown: (e) => {
                'Enter' === e.key && n && i(u);
              },
              'data-aos': 'zoom-in',
              children: (0, o.jsxs)('div', {
                className: ''
                  .concat(s().memberCardWrapper, ' ')
                  .concat(n ? ''.concat(s().speaker) : '', '}'),
                'data-aos': 'zoom-in',
                children: [
                  n &&
                    (0, o.jsxs)('div', {
                      className: s().memberKnowMoreIcon,
                      onClick: () => i && i(u),
                      children: [
                        (0, o.jsx)(t(), {
                          src: '/icons/info-icon.svg',
                          alt: l.b4,
                          className: s().knowMoreIcon,
                          loading: 'lazy',
                          width: 100,
                          height: 100,
                        }),
                        (0, o.jsx)('h3', {
                          className: ''.concat(s().knowMoreText),
                          children: 'Know More',
                        }),
                      ],
                    }),
                  (0, o.jsx)('div', {
                    className: ''
                      .concat(s().memberCardImage, ' ')
                      .concat(n ? ''.concat(s().speaker) : ''),
                    children: (0, o.jsx)(t(), {
                      src: d || '/images/member-image.png',
                      alt: l.$r,
                      fill: !0,
                      className: s().cardImage,
                      priority: !0,
                      sizes: '100%',
                    }),
                  }),
                  (0, o.jsxs)('div', {
                    className: ''
                      .concat(s().memberCardInfo, ' ')
                      .concat(n ? ''.concat(s().speaker) : ''),
                    onClick: () => i(u),
                    children: [
                      (0, o.jsx)('h1', {
                        className: s().memberName,
                        children: m,
                      }),
                      r &&
                        (0, o.jsx)('h1', {
                          className: s().memberDesignation,
                          children: c,
                        }),
                    ],
                  }),
                ],
              }),
            }),
        });
      }
    },
    1292: function (e, a, r) {
      'use strict';
      r.r(a),
        r.d(a, {
          default: function () {
            return _;
          },
        });
      var o = r(7437),
        n = r(9878),
        s = r.n(n),
        i = r(1985),
        t = r(2265),
        l = r(9995),
        m = r(5508),
        d = r(2759),
        c = r(504),
        u = r(6691),
        f = r.n(u),
        p = r(7120),
        I = r.n(p),
        M = (e) => {
          let { isOpen: a, toggleSpeakerModalPopup: r, selectedSpeaker: n } = e,
            { name: s, email: i, imageUrl: t, sessionDetails: u } = e.data,
            p = Object.keys(u),
            M = () => {
              r(n);
            };
          return (0, o.jsx)('section', {
            className: a
              ? I().userInformationModalWrapper
              : I().userInformationModalWrapperClose,
            children: (0, o.jsx)('div', {
              children: (0, o.jsxs)(
                'div',
                {
                  className: I().userInformationModal,
                  children: [
                    (0, o.jsx)('div', {
                      role: 'button',
                      tabIndex: '1',
                      onKeyDown: (e) => {
                        'Enter' == e.key ? M() : e.preventDefault();
                      },
                      onClick: M,
                      className: I().userInformationModalCloseIconWrapper,
                      id: 'popupCloseIcon',
                      children: (0, o.jsx)(c.G, {
                        className: I().userInformationModalCloseIcon,
                        icon: d.g82,
                      }),
                    }),
                    (0, o.jsxs)('div', {
                      className: I().userInformationModalDescription,
                      children: [
                        (0, o.jsxs)('div', {
                          className: I().userInformationModalProfileInfo,
                          children: [
                            (0, o.jsx)('h1', {
                              className: I().userInformationModalProfileName,
                              children: s,
                            }),
                            (0, o.jsx)('h2', {
                              className: I().userInformationModalProfileEmail,
                              children: i,
                            }),
                          ],
                        }),
                        p.map((e, a) => {
                          let r = (0, m.T3)(e);
                          return (0, o.jsxs)(
                            'div',
                            {
                              className: I().userInformationModalSessionWrapper,
                              children: [
                                (0, o.jsxs)('div', {
                                  className:
                                    I().userInformationModalTitleWrapper,
                                  children: [
                                    (0, o.jsx)('div', {
                                      className:
                                        I().userInformationModalTitlePresenting,
                                      children: l.qR.PRESENTING,
                                    }),
                                    (0, o.jsx)('h1', {
                                      className: I().userInformationModalTitle,
                                      children: r.title,
                                    }),
                                  ],
                                }),
                                (0, o.jsxs)('div', {
                                  className:
                                    I().userInformationModalTeamWrapper,
                                  children: [
                                    (0, o.jsx)('div', {
                                      className:
                                        I().userInformationModalAlongWith,
                                      children: l.qR.ALONG_WITH,
                                    }),
                                    (0, o.jsx)('div', {
                                      className:
                                        I()
                                          .userInformationModalTeammatesWrapper,
                                      children: u[''.concat(e)].map((e, a) => {
                                        let r = (0, m.Mz)(e);
                                        return (0, o.jsxs)(
                                          'div',
                                          {
                                            className:
                                              I().userInformationModalTeammates,
                                            children: [
                                              (0, o.jsx)('div', {
                                                className:
                                                  I()
                                                    .userInformationModalTeammatesProfileImage,
                                                children: (0, o.jsx)(f(), {
                                                  src:
                                                    null == r
                                                      ? void 0
                                                      : r.imageUrl,
                                                  width: 0,
                                                  height: 0,
                                                  sizes: '100vw',
                                                  style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                  },
                                                  objectFit: 'cover',
                                                  alt: l.qR.IMG_ALT,
                                                  loading: 'lazy',
                                                }),
                                              }),
                                              (0, o.jsx)('div', {
                                                className:
                                                  I()
                                                    .userInformationModalTeammatesProfileName,
                                                children:
                                                  null == r ? void 0 : r.name,
                                              }),
                                            ],
                                          },
                                          a,
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                                (0, o.jsxs)('div', {
                                  className:
                                    I().userInformationModalAboutWrapper,
                                  children: [
                                    (0, o.jsx)('div', {
                                      className: I().userInformationModalAbout,
                                      children: l.qR.ABOUT,
                                    }),
                                    (0, o.jsx)('div', {
                                      className:
                                        I().userInformationModalAboutDesc,
                                      children: r.sessionDescription,
                                    }),
                                  ],
                                }),
                                (0, o.jsxs)('div', {
                                  className:
                                    I()
                                      .userInformationModalEventDateTimeWrapper,
                                  children: [
                                    (0, o.jsx)('div', {
                                      className:
                                        I().userInformationModalWatchMe,
                                      children: l.qR.WATCH_ME,
                                    }),
                                    (0, o.jsxs)('div', {
                                      className:
                                        I().userInformationModalEventDateTime,
                                      children: [r.date, ' at ', r.startTime],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            a,
                          );
                        }),
                      ],
                    }),
                    (0, o.jsx)('div', {
                      className: I().userInformationProfileImage,
                      children: (0, o.jsx)(f(), {
                        src: t,
                        width: 0,
                        height: 0,
                        sizes: '100vw',
                        style: { width: '100%', height: '100%' },
                        alt: l.qR.IMG_ALT,
                        priority: !0,
                      }),
                    }),
                  ],
                },
                '1',
              ),
            }),
          });
        };
      function _(e) {
        let { speakers: a } = e,
          [r, n] = (0, t.useState)(!1),
          [l, m] = (0, t.useState)(-1),
          d = (e) => {
            n(!r), m(e);
          },
          c = (0, t.useRef)(null);
        (0, t.useEffect)(() => {
          var e, a;
          r
            ? ((c.current = document.activeElement),
              null === (e = document.getElementById('popupCloseIcon')) ||
                void 0 === e ||
                e.focus())
            : null == c ||
              null === (a = c.current) ||
              void 0 === a ||
              a.focus();
        }, [r]);
        let u = a.map((e, a) =>
          (0, o.jsx)(
            i.default,
            {
              data: e,
              isDesignationVisible: !1,
              isKnowMoreIconVisible: !0,
              toggleSpeakerModalPopup: d,
            },
            a,
          ),
        );
        return (0, o.jsxs)('div', {
          className: s().memberCardsContainer,
          children: [
            -1 !== l &&
              (0, o.jsx)(M, {
                data: a[l],
                isOpen: r,
                selectedSpeaker: l,
                toggleSpeakerModalPopup: d,
              }),
            u,
          ],
        });
      }
    },
    5508: function (e, a, r) {
      'use strict';
      r.d(a, {
        iV: function () {
          return t;
        },
        if: function () {
          return d;
        },
        T3: function () {
          return s;
        },
        Jy: function () {
          return l;
        },
        Mz: function () {
          return i;
        },
        f2: function () {
          return m;
        },
      });
      var o = r(683),
        n = r(3545);
      let s = (e) => n.iG[''.concat(e)],
        i = (e) => n.eY[''.concat(e)];
      function t(e) {
        let a = new Date(e),
          r = a.getFullYear(),
          o = (a.getMonth() + 1).toString().padStart(2, '0'),
          n = a.getDate().toString().padStart(2, '0'),
          s = a.getHours().toString().padStart(2, '0'),
          i = a.getMinutes().toString().padStart(2, '0'),
          t = a.getSeconds().toString().padStart(2, '0'),
          l = ''
            .concat(r)
            .concat(o)
            .concat(n, 'T')
            .concat(s)
            .concat(i)
            .concat(t, 'Z');
        return l;
      }
      let l = (e) => {
        let a = [],
          r = n.iG,
          o = Object.keys(r);
        for (let n of o) {
          let o = r[n],
            s = o.date;
          s === e && a.push(o);
        }
        return a;
      };
      function m(e, a) {
        let r = [];
        if ('' === e || void 0 === e) return a;
        let o = null == e ? void 0 : e.toLowerCase();
        for (let e in a) {
          let n = a[e];
          (n.title.toLowerCase().includes(o) ||
            n.category.toLowerCase().includes(o) ||
            (n.speakersId &&
              n.speakersId.some((e) => i(e).name.toLowerCase().includes(o))) ||
            (n.tags && n.tags.some((e) => e.toLowerCase().includes(o)))) &&
            r.push(n);
        }
        return r;
      }
      let d = () => o.nn;
    },
    6020: function (e) {
      e.exports = {
        memberCardWrapperOutline: 'MemberCard_memberCardWrapperOutline__2kcbB',
        speaker: 'MemberCard_speaker__b_wbc',
        rotate: 'MemberCard_rotate__dp9Z0',
        memberKnowMoreIcon: 'MemberCard_memberKnowMoreIcon__Bkp_x',
        memberCardImage: 'MemberCard_memberCardImage__6rRkJ',
        memberCardInfo: 'MemberCard_memberCardInfo__KXeDV',
        memberCardWrapper: 'MemberCard_memberCardWrapper__WT9B8',
        knowMoreIcon: 'MemberCard_knowMoreIcon__oRALt',
        knowMoreText: 'MemberCard_knowMoreText___bk9q',
        cardImage: 'MemberCard_cardImage__jLbJK',
        memberName: 'MemberCard_memberName__r08BS',
        memberDesignation: 'MemberCard_memberDesignation__FkFtD',
      };
    },
    7120: function (e) {
      e.exports = {
        userInformationModalWrapper:
          'UserInformationModal_userInformationModalWrapper__L1Bor',
        userInformationModalWrapperClose:
          'UserInformationModal_userInformationModalWrapperClose__cwcsf',
        userInformationModal:
          'UserInformationModal_userInformationModal__ryWZM',
        userInformationModalCloseIconWrapper:
          'UserInformationModal_userInformationModalCloseIconWrapper__Ew7E_',
        userInformationModalCloseIcon:
          'UserInformationModal_userInformationModalCloseIcon__JKh_8',
        userInformationModalDescription:
          'UserInformationModal_userInformationModalDescription__R71Mt',
        userInformationModalProfileName:
          'UserInformationModal_userInformationModalProfileName__cpv83',
        userInformationModalProfileEmail:
          'UserInformationModal_userInformationModalProfileEmail___TE73',
        userInformationModalTitlePresenting:
          'UserInformationModal_userInformationModalTitlePresenting__fA3cc',
        userInformationModalSessionWrapper:
          'UserInformationModal_userInformationModalSessionWrapper___R_ea',
        userInformationModalTitle:
          'UserInformationModal_userInformationModalTitle__AMzsf',
        userInformationModalAlongWith:
          'UserInformationModal_userInformationModalAlongWith__sJDLr',
        userInformationModalTeammatesWrapper:
          'UserInformationModal_userInformationModalTeammatesWrapper__iHK56',
        userInformationModalTeammates:
          'UserInformationModal_userInformationModalTeammates__mSndV',
        userInformationModalTeammatesProfileName:
          'UserInformationModal_userInformationModalTeammatesProfileName__9RlWf',
        userInformationModalTeammatesProfileImage:
          'UserInformationModal_userInformationModalTeammatesProfileImage__fC9dh',
        userInformationModalAboutWrapper:
          'UserInformationModal_userInformationModalAboutWrapper__HaB4r',
        userInformationModalAbout:
          'UserInformationModal_userInformationModalAbout__FZdc_',
        userInformationModalAboutDesc:
          'UserInformationModal_userInformationModalAboutDesc__C6bpD',
        userInformationModalWatchMe:
          'UserInformationModal_userInformationModalWatchMe__H4oCL',
        userInformationModalEventDateTime:
          'UserInformationModal_userInformationModalEventDateTime__WaE4F',
        userInformationProfileImage:
          'UserInformationModal_userInformationProfileImage__txxdW',
        'modal-scale-animation':
          'UserInformationModal_modal-scale-animation__ktHDm',
        'modal-scale-animation-out':
          'UserInformationModal_modal-scale-animation-out__d9OIE',
      };
    },
    9878: function (e) {
      e.exports = {
        memberCardsContainer:
          'SpeakerCardsContainer_memberCardsContainer__WWGnc',
      };
    },
    8515: function (e, a, r) {
      'use strict';
      r.r(a),
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
    e.O(0, [922, 676, 222, 724, 504, 862, 271, 971, 596, 744], function () {
      return e((e.s = 27));
    }),
      (_N_E = e.O());
  },
]);
