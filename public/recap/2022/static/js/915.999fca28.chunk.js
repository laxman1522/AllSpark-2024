'use strict';
(self.webpackChunkall_spark_website_2022 =
  self.webpackChunkall_spark_website_2022 || []).push([
  [915],
  {
    2915: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return _;
          },
        });
      var a = s(7106),
        r = s(6688),
        i = 'CommitteePage_container__Fg2yl',
        n = 'CommitteePage_committeeTitle__Xs2zF',
        l = 'CommitteePage_committeeContainer__rX6X-',
        c = s(3726),
        m = s(2791),
        u = s(184);
      var _ = function (e) {
        var t = e.details,
          s = (0, m.useRef)(null);
        return (
          (0, m.useEffect)(function () {
            s.current.scrollIntoView({ block: 'start' });
          }),
          (0, u.jsxs)('div', {
            ref: s,
            className: i,
            children: [
              (0, u.jsx)(a.V1, { label: c.PAGE_TITLE_CONSTANT.COMMITTEE }),
              t.map(function (e, t) {
                var s = e.members;
                return (0, u.jsxs)(
                  'div',
                  {
                    className: l,
                    children: [
                      (0, u.jsx)('h4', {
                        className: n,
                        children: e.committeeName,
                      }),
                      (0, u.jsx)(r.h$, { details: s }),
                    ],
                  },
                  t,
                );
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=915.999fca28.chunk.js.map
