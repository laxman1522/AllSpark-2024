'use strict';
(self.webpackChunkall_spark_website_2022 =
  self.webpackChunkall_spark_website_2022 || []).push([
  [746],
  {
    2746: function (e, a, r) {
      r.r(a),
        r.d(a, {
          default: function () {
            return _;
          },
        });
      var n = {
          recapWrapper: 'RecapContainer_recapWrapper__bkfq1',
          imageCardsContainer: 'RecapContainer_imageCardsContainer__btqH5',
          imagewrapper: 'RecapContainer_imagewrapper__Gd1b0',
        },
        i = r(9836),
        s = r(7897),
        t = r(1087),
        c = r(3726),
        l = r(2791),
        p = r(184);
      var _ = function (e) {
        var a = e.details,
          r = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(function () {
            r.current.scrollIntoView({ block: 'start' });
          }),
          (0, p.jsxs)('div', {
            ref: r,
            className: n.recapWrapper,
            children: [
              (0, p.jsx)(i.Z, { label: c.PAGE_TITLE_CONSTANT.RECAP }),
              (0, p.jsx)('div', {
                className: n.imageCardsContainer,
                children: a.map(function (e, a) {
                  var r = e.imageUrl,
                    i = e.name,
                    c = e.link;
                  return (0, p.jsx)(
                    t.OL,
                    {
                      to: c,
                      target: '_blank',
                      className: n.imagewrapper,
                      children: (0, p.jsx)(s.Z, {
                        imageURL: r,
                        name: i,
                        className: n.imageCard,
                      }),
                    },
                    a,
                  );
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=746.a8d7d618.chunk.js.map
