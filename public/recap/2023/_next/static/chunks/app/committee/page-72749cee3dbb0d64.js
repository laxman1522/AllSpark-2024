(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [297],
  {
    1731: function (e, r, a) {
      Promise.resolve().then(a.t.bind(a, 3222, 23)),
        Promise.resolve().then(a.bind(a, 8515)),
        Promise.resolve().then(a.bind(a, 4159)),
        Promise.resolve().then(a.bind(a, 7810)),
        Promise.resolve().then(a.bind(a, 210)),
        Promise.resolve().then(a.bind(a, 524)),
        Promise.resolve().then(a.bind(a, 2849)),
        Promise.resolve().then(a.bind(a, 8508)),
        Promise.resolve().then(a.bind(a, 3227)),
        Promise.resolve().then(a.bind(a, 4532)),
        Promise.resolve().then(a.bind(a, 7422)),
        Promise.resolve().then(a.bind(a, 2275)),
        Promise.resolve().then(a.bind(a, 3846)),
        Promise.resolve().then(a.bind(a, 2511)),
        Promise.resolve().then(a.bind(a, 7610)),
        Promise.resolve().then(a.bind(a, 1985)),
        Promise.resolve().then(a.t.bind(a, 6487, 23));
    },
    1985: function (e, r, a) {
      'use strict';
      a.r(r),
        a.d(r, {
          default: function () {
            return d;
          },
        });
      var n = a(7437),
        t = a(6020),
        m = a.n(t),
        o = a(6691),
        i = a.n(o),
        s = {
          src: '/recap/2023/_next/static/media/info-icon.b210ae61.svg',
          height: 36,
          width: 36,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: '/recap/2023/_next/static/media/member-image.cca33f93.png',
          height: 1e3,
          width: 972,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEX8rGTq3c/4mFJaMhNkSjiWZ1e9ooxbWFrh1cg6IxRDJxZlYWPU0snCv7OtqJ/RrpTtjEJLMRz2nlMmFguvZi0kFQy8ZySGSBjZei9UTEpOTE97US10dnpaTUacnJytgWupfVWropG8kny9lHu6tqpOcJmcAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARUlEQVR4nAXBBQKAMAwEsJu2c9wd/v9GEkjgYsEMidW8xWZU8OYp9sPUOHMKwRg6r7W9E8bWzTvlCNXXYaEjQjlNgbb0A2/qA0pJ025EAAAAAElFTkSuQmCC',
          blurWidth: 8,
          blurHeight: 8,
        },
        A = a(9995);
      function d(e) {
        let {
            data: r,
            isDesignationVisible: a,
            isKnowMoreIconVisible: t,
            toggleSpeakerModalPopup: o,
          } = e,
          { name: d, imageUrl: b, designation: l, speakerId: _ } = r;
        return (0, n.jsx)(n.Fragment, {
          children:
            (b || d || l) &&
            (0, n.jsx)('div', {
              className: ''
                .concat(m().memberCardWrapperOutline, ' ')
                .concat(t ? ''.concat(m().speaker) : ''),
              role: 'button',
              tabIndex: '0',
              onKeyDown: (e) => {
                'Enter' === e.key && t && o(_);
              },
              'data-aos': 'zoom-in',
              children: (0, n.jsxs)('div', {
                className: ''
                  .concat(m().memberCardWrapper, ' ')
                  .concat(t ? ''.concat(m().speaker) : '', '}'),
                'data-aos': 'zoom-in',
                children: [
                  t &&
                    (0, n.jsxs)('div', {
                      className: m().memberKnowMoreIcon,
                      onClick: () => o && o(_),
                      children: [
                        (0, n.jsx)(i(), {
                          src: s,
                          alt: A.b4,
                          className: m().knowMoreIcon,
                          loading: 'lazy',
                        }),
                        (0, n.jsx)('h3', {
                          className: ''.concat(m().knowMoreText),
                          children: 'Know More',
                        }),
                      ],
                    }),
                  (0, n.jsx)('div', {
                    className: ''
                      .concat(m().memberCardImage, ' ')
                      .concat(t ? ''.concat(m().speaker) : ''),
                    children: (0, n.jsx)(i(), {
                      src: b || c,
                      alt: A.$r,
                      fill: !0,
                      className: m().cardImage,
                      priority: !0,
                      sizes: '100%',
                    }),
                  }),
                  (0, n.jsxs)('div', {
                    className: ''
                      .concat(m().memberCardInfo, ' ')
                      .concat(t ? ''.concat(m().speaker) : ''),
                    onClick: () => o(_),
                    children: [
                      (0, n.jsx)('h1', {
                        className: m().memberName,
                        children: d,
                      }),
                      a &&
                        (0, n.jsx)('h1', {
                          className: m().memberDesignation,
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
    6487: function (e) {
      e.exports = {
        committeesContainer: 'committee_committeesContainer__gC0zR',
        committeeContainer: 'committee_committeeContainer__KcskU',
        committeeHeader: 'committee_committeeHeader__2lfUs',
        headerRectangle: 'committee_headerRectangle___pGGd',
        headerText: 'committee_headerText__WT_ka',
        memberCardsContainer: 'committee_memberCardsContainer__ZRSMq',
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
    8515: function (e, r, a) {
      'use strict';
      a.r(r),
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
      return e((e.s = 1731));
    }),
      (_N_E = e.O());
  },
]);
