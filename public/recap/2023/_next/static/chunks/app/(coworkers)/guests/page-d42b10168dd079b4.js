(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    7974: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 8508)),
        Promise.resolve().then(n.bind(n, 3227)),
        Promise.resolve().then(n.bind(n, 7422)),
        Promise.resolve().then(n.t.bind(n, 3222, 23)),
        Promise.resolve().then(n.bind(n, 3846)),
        Promise.resolve().then(n.bind(n, 2275)),
        Promise.resolve().then(n.bind(n, 2511)),
        Promise.resolve().then(n.bind(n, 7610)),
        Promise.resolve().then(n.bind(n, 4159)),
        Promise.resolve().then(n.bind(n, 7810)),
        Promise.resolve().then(n.bind(n, 210)),
        Promise.resolve().then(n.bind(n, 2849)),
        Promise.resolve().then(n.bind(n, 524)),
        Promise.resolve().then(n.bind(n, 4532)),
        Promise.resolve().then(n.bind(n, 8515)),
        Promise.resolve().then(n.bind(n, 1985)),
        Promise.resolve().then(n.t.bind(n, 4229, 23));
    },
    1985: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          default: function () {
            return c;
          },
        });
      var a = n(7437),
        o = n(6020),
        s = n.n(o),
        m = n(6691),
        i = n.n(m),
        t = n(9995);
      function c(e) {
        let {
            data: r,
            isDesignationVisible: n,
            isKnowMoreIconVisible: o,
            toggleSpeakerModalPopup: m,
          } = e,
          { name: c, imageUrl: d, designation: b, speakerId: l } = r;
        return (0, a.jsx)(a.Fragment, {
          children:
            (d || c || b) &&
            (0, a.jsx)('div', {
              className: ''
                .concat(s().memberCardWrapperOutline, ' ')
                .concat(o ? ''.concat(s().speaker) : ''),
              role: 'button',
              tabIndex: '0',
              onKeyDown: (e) => {
                'Enter' === e.key && o && m(l);
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
                      onClick: () => m && m(l),
                      children: [
                        (0, a.jsx)(i(), {
                          src: '/icons/info-icon.svg',
                          alt: t.b4,
                          className: s().knowMoreIcon,
                          loading: 'lazy',
                          width: 100,
                          height: 100,
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
                    children: (0, a.jsx)(i(), {
                      src: d || '/images/member-image.png',
                      alt: t.$r,
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
                    onClick: () => m(l),
                    children: [
                      (0, a.jsx)('h1', {
                        className: s().memberName,
                        children: c,
                      }),
                      n &&
                        (0, a.jsx)('h1', {
                          className: s().memberDesignation,
                          children: b,
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
    e.O(0, [922, 222, 724, 862, 271, 971, 596, 744], function () {
      return e((e.s = 7974));
    }),
      (_N_E = e.O());
  },
]);
