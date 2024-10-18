'use strict';
(self.webpackChunkall_spark_website_2022 =
  self.webpackChunkall_spark_website_2022 || []).push([
  [776],
  {
    8283: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return f;
          },
        });
      var n = s(3433),
        i = s(9439),
        r = 'SpeakerPage_SpeakerPageWrapper__K7EoP',
        t = 'SpeakerPage_imageWrapper__Yc2ff',
        l = s(2791),
        c = s(7106),
        o = s(3024),
        u = s(184),
        m = function (e) {
          var a = e.speakerData,
            s = e.sessionData,
            m = (0, l.useState)(!0),
            f = (0, i.Z)(m, 2),
            p = f[0],
            k = f[1],
            d = (0, l.useState)({}),
            g = (0, i.Z)(d, 2),
            _ = g[0],
            h = g[1],
            v = [];
          Object.keys(a).forEach(function (e) {
            a[e].email && (v = [].concat((0, n.Z)(v), [a[e]]));
          }),
            v.sort(function (e, a) {
              return e.name > a.name ? 1 : -1;
            });
          var b = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(
              function () {
                0 === Object.keys(_).length &&
                  b.current.scrollIntoView({ block: 'start' });
              },
              [_],
            ),
            (0, u.jsxs)('div', {
              ref: b,
              className: r,
              children: [
                !p &&
                  (0, u.jsx)(c.$K, {
                    setSpeakerDetailClose: k,
                    isSpeakerDetailClose: p,
                    speakerDetail: _,
                  }),
                (0, u.jsx)(c.V1, { label: o.h.SPEAKER }),
                (0, u.jsx)('div', {
                  className: 'imageCardsContainer',
                  children: v.map(function (e, a) {
                    var n = e.imageUrl,
                      i = e.name,
                      r = e.designation,
                      l = void 0 === r ? null : r;
                    return (0, u.jsx)(
                      'div',
                      {
                        className: 'imageWrapper '.concat(t),
                        onClick: function () {
                          !(function (e) {
                            k(!1);
                            var a = v[e],
                              n = {
                                name: a.name,
                                mail: a.email,
                                image: a.imageUrl,
                                session: a.sessionId,
                                sessionData: s,
                              };
                            h(n);
                          })(a);
                        },
                        children: (0, u.jsx)(c.Ee, {
                          imageURL: n,
                          name: i,
                          designation: l,
                        }),
                      },
                      a,
                    );
                  }),
                }),
              ],
            })
          );
        },
        f = l.memo(m);
    },
  },
]);
//# sourceMappingURL=776.fce11576.chunk.js.map
