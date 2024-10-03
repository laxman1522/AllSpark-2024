(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    7750: function (e, r, n) {
      Promise.resolve().then(n.t.bind(n, 3222, 23)),
        Promise.resolve().then(n.bind(n, 8515)),
        Promise.resolve().then(n.bind(n, 4159)),
        Promise.resolve().then(n.bind(n, 7810)),
        Promise.resolve().then(n.bind(n, 210)),
        Promise.resolve().then(n.bind(n, 524)),
        Promise.resolve().then(n.bind(n, 2849)),
        Promise.resolve().then(n.bind(n, 8508)),
        Promise.resolve().then(n.bind(n, 3227)),
        Promise.resolve().then(n.bind(n, 4532)),
        Promise.resolve().then(n.bind(n, 7422)),
        Promise.resolve().then(n.bind(n, 2275)),
        Promise.resolve().then(n.bind(n, 3846)),
        Promise.resolve().then(n.bind(n, 2511)),
        Promise.resolve().then(n.bind(n, 7610)),
        Promise.resolve().then(n.bind(n, 1985)),
        Promise.resolve().then(n.t.bind(n, 4229, 23));
    },
    1985: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          default: function () {
            return b;
          },
        });
      var a = n(7437),
        o = n(6020),
        s = n.n(o),
        i = n(6691),
        m = n.n(i),
        t = {
          src: '/recap/2023/_next/static/media/info-icon.b210ae61.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: '/recap/2023/_next/static/media/member-image.cca33f93.png',
          height: 1e3,
          width: 972,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEX8rGTq3c/4mFJaMhNkSjiWZ1e9ooxbWFrh1cg6IxRDJxZlYWPU0snCv7OtqJ/RrpTtjEJLMRz2nlMmFguvZi0kFQy8ZySGSBjZei9UTEpOTE97US10dnpaTUacnJytgWupfVWropG8kny9lHu6tqpOcJmcAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARUlEQVR4nAXBBQKAMAwEsJu2c9wd/v9GEkjgYsEMidW8xWZU8OYp9sPUOHMKwRg6r7W9E8bWzTvlCNXXYaEjQjlNgbb0A2/qA0pJ025EAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        c = n(9995);
      function b(e) {
        let {
            data: r,
            isDesignationVisible: n,
            isKnowMoreIconVisible: o,
            toggleSpeakerModalPopup: i,
          } = e,
          { name: b, imageUrl: d, designation: l, speakerId: h } = r;
        return (0, a.jsx)(a.Fragment, {
          children:
            (d || b || l) &&
            (0, a.jsx)('div', {
              className: ''
                .concat(s().memberCardWrapperOutline, ' ')
                .concat(o ? ''.concat(s().speaker) : ''),
              role: 'button',
              tabIndex: '0',
              onKeyDown: (e) => {
                'Enter' === e.key && o && i(h);
              },
              'data-aos': 'zoom-in',
              children: (0, a.jsxs)('div', {
                className: ''
                  .concat(s().memberCardWrapper, ' ')
                  .concat(o ? ''.concat(s().speaker) : '', '}'),
                'data-aos': 'zoom-in',
                children: [
                  o &&
                    (0, a.jsxs)('div', {
                      className: s().memberKnowMoreIcon,
                      onClick: () => i && i(h),
                      children: [
                        (0, a.jsx)(m(), {
                          src: t,
                          alt: c.b4,
                          className: s().knowMoreIcon,
                          loading: 'lazy',
                        }),
                        (0, a.jsx)('h3', {
                          className: ''.concat(s().knowMoreText),
                          children: 'Know More',
                        }),
                      ],
                    }),
                  (0, a.jsx)('div', {
                    className: ''
                      .concat(s().memberCardImage, ' ')
                      .concat(o ? ''.concat(s().speaker) : ''),
                    children: (0, a.jsx)(m(), {
                      src: d || A,
                      alt: c.$r,
                      fill: !0,
                      className: s().cardImage,
                      priority: !0,
                      sizes: '100%',
                    }),
                  }),
                  (0, a.jsxs)('div', {
                    className: ''
                      .concat(s().memberCardInfo, ' ')
                      .concat(o ? ''.concat(s().speaker) : ''),
                    onClick: () => i(h),
                    children: [
                      (0, a.jsx)('h1', {
                        className: s().memberName,
                        children: b,
                      }),
                      n &&
                        (0, a.jsx)('h1', {
                          className: s().memberDesignation,
                          children: l,
                        }),
                    ],
                  }),
                ],
              }),
            }),
        });
      }
    },
    4229: function (e) {
      e.exports = {
        memberCardsContainer: 'guests_memberCardsContainer__J23kp',
      };
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
    e.O(0, [922, 222, 724, 727, 271, 971, 596, 744], function () {
      return e((e.s = 7750));
    }),
      (_N_E = e.O());
  },
]);
