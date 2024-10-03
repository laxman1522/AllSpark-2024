(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [724],
  {
    6365: function (t) {
      t.exports = (function (t) {
        function e(n) {
          if (i[n]) return i[n].exports;
          var s = (i[n] = { exports: {}, id: n, loaded: !1 });
          return (
            t[n].call(s.exports, s, s.exports, e), (s.loaded = !0), s.exports
          );
        }
        var i = {};
        return (e.m = t), (e.c = i), (e.p = 'dist/'), e(0);
      })([
        function (t, e, i) {
          'use strict';
          function n(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var s =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                }
                return t;
              },
            o = (n(i(1)), i(6)),
            a = n(o),
            r = n(i(7)),
            l = n(i(8)),
            c = n(i(9)),
            u = n(i(10)),
            d = n(i(11)),
            h = n(i(14)),
            p = [],
            f = !1,
            m = {
              offset: 120,
              delay: 0,
              easing: 'ease',
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: 'DOMContentLoaded',
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            },
            g = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if ((t && (f = !0), f))
                return (p = (0, d.default)(p, m)), (0, u.default)(p, m.once), p;
            },
            y = function () {
              (p = (0, h.default)()), g();
            },
            v = function () {
              p.forEach(function (t, e) {
                t.node.removeAttribute('data-aos'),
                  t.node.removeAttribute('data-aos-easing'),
                  t.node.removeAttribute('data-aos-duration'),
                  t.node.removeAttribute('data-aos-delay');
              });
            };
          t.exports = {
            init: function (t) {
              (m = s(m, t)), (p = (0, h.default)());
              var e,
                i = document.all && !window.atob;
              return !0 === (e = m.disable) ||
                ('mobile' === e && c.default.mobile()) ||
                ('phone' === e && c.default.phone()) ||
                ('tablet' === e && c.default.tablet()) ||
                ('function' == typeof e && !0 === e()) ||
                i
                ? v()
                : (m.disableMutationObserver ||
                    l.default.isSupported() ||
                    (console.info(
                      '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    ',
                    ),
                    (m.disableMutationObserver = !0)),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-easing', m.easing),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-duration', m.duration),
                  document
                    .querySelector('body')
                    .setAttribute('data-aos-delay', m.delay),
                  'DOMContentLoaded' === m.startEvent &&
                  ['complete', 'interactive'].indexOf(document.readyState) > -1
                    ? g(!0)
                    : 'load' === m.startEvent
                      ? window.addEventListener(m.startEvent, function () {
                          g(!0);
                        })
                      : document.addEventListener(m.startEvent, function () {
                          g(!0);
                        }),
                  window.addEventListener(
                    'resize',
                    (0, r.default)(g, m.debounceDelay, !0),
                  ),
                  window.addEventListener(
                    'orientationchange',
                    (0, r.default)(g, m.debounceDelay, !0),
                  ),
                  window.addEventListener(
                    'scroll',
                    (0, a.default)(function () {
                      (0, u.default)(p, m.once);
                    }, m.throttleDelay),
                  ),
                  m.disableMutationObserver || l.default.ready('[data-aos]', y),
                  p);
            },
            refresh: g,
            refreshHard: y,
          };
        },
        function (t, e) {},
        ,
        ,
        ,
        ,
        function (t, e) {
          (function (e) {
            'use strict';
            function i(t) {
              var e = void 0 === t ? 'undefined' : s(t);
              return !!t && ('object' == e || 'function' == e);
            }
            function n(t) {
              if ('number' == typeof t) return t;
              if (
                'symbol' == (void 0 === (e = t) ? 'undefined' : s(e)) ||
                (e &&
                  'object' == (void 0 === e ? 'undefined' : s(e)) &&
                  g.call(e) == r)
              )
                return a;
              if (i(t)) {
                var e,
                  n = 'function' == typeof t.valueOf ? t.valueOf() : t;
                t = i(n) ? n + '' : n;
              }
              if ('string' != typeof t) return 0 === t ? t : +t;
              var o = u.test((t = t.replace(l, '')));
              return o || d.test(t)
                ? h(t.slice(2), o ? 2 : 8)
                : c.test(t)
                  ? a
                  : +t;
            }
            var s =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    },
              o = 'Expected a function',
              a = NaN,
              r = '[object Symbol]',
              l = /^\s+|\s+$/g,
              c = /^[-+]0x[0-9a-f]+$/i,
              u = /^0b[01]+$/i,
              d = /^0o[0-7]+$/i,
              h = parseInt,
              p =
                'object' == (void 0 === e ? 'undefined' : s(e)) &&
                e &&
                e.Object === Object &&
                e,
              f =
                'object' ==
                  ('undefined' == typeof self ? 'undefined' : s(self)) &&
                self &&
                self.Object === Object &&
                self,
              m = p || f || Function('return this')(),
              g = Object.prototype.toString,
              y = Math.max,
              v = Math.min,
              b = function () {
                return m.Date.now();
              };
            t.exports = function (t, e, s) {
              var a = !0,
                r = !0;
              if ('function' != typeof t) throw TypeError(o);
              return (
                i(s) &&
                  ((a = 'leading' in s ? !!s.leading : a),
                  (r = 'trailing' in s ? !!s.trailing : r)),
                (function (t, e, s) {
                  function a(e) {
                    var i = d,
                      n = h;
                    return (d = h = void 0), (w = e), (f = t.apply(n, i));
                  }
                  function r(t) {
                    var i = t - g,
                      n = t - w;
                    return void 0 === g || i >= e || i < 0 || (_ && n >= p);
                  }
                  function l() {
                    var t,
                      i,
                      n,
                      s = b();
                    return r(s)
                      ? c(s)
                      : void (m = setTimeout(
                          l,
                          ((t = s - g),
                          (i = s - w),
                          (n = e - t),
                          _ ? v(n, p - i) : n),
                        ));
                  }
                  function c(t) {
                    return (m = void 0), k && d ? a(t) : ((d = h = void 0), f);
                  }
                  function u() {
                    var t,
                      i = b(),
                      n = r(i);
                    if (((d = arguments), (h = this), (g = i), n)) {
                      if (void 0 === m)
                        return (
                          (w = t = g), (m = setTimeout(l, e)), x ? a(t) : f
                        );
                      if (_) return (m = setTimeout(l, e)), a(g);
                    }
                    return void 0 === m && (m = setTimeout(l, e)), f;
                  }
                  var d,
                    h,
                    p,
                    f,
                    m,
                    g,
                    w = 0,
                    x = !1,
                    _ = !1,
                    k = !0;
                  if ('function' != typeof t) throw TypeError(o);
                  return (
                    (e = n(e) || 0),
                    i(s) &&
                      ((x = !!s.leading),
                      (p = (_ = 'maxWait' in s) ? y(n(s.maxWait) || 0, e) : p),
                      (k = 'trailing' in s ? !!s.trailing : k)),
                    (u.cancel = function () {
                      void 0 !== m && clearTimeout(m),
                        (w = 0),
                        (d = g = h = m = void 0);
                    }),
                    (u.flush = function () {
                      return void 0 === m ? f : c(b());
                    }),
                    u
                  );
                })(t, e, { leading: a, maxWait: e, trailing: r })
              );
            };
          }).call(
            e,
            (function () {
              return this;
            })(),
          );
        },
        function (t, e) {
          (function (e) {
            'use strict';
            function i(t) {
              var e = void 0 === t ? 'undefined' : s(t);
              return !!t && ('object' == e || 'function' == e);
            }
            function n(t) {
              if ('number' == typeof t) return t;
              if (
                'symbol' == (void 0 === (e = t) ? 'undefined' : s(e)) ||
                (e &&
                  'object' == (void 0 === e ? 'undefined' : s(e)) &&
                  m.call(e) == a)
              )
                return o;
              if (i(t)) {
                var e,
                  n = 'function' == typeof t.valueOf ? t.valueOf() : t;
                t = i(n) ? n + '' : n;
              }
              if ('string' != typeof t) return 0 === t ? t : +t;
              var h = c.test((t = t.replace(r, '')));
              return h || u.test(t)
                ? d(t.slice(2), h ? 2 : 8)
                : l.test(t)
                  ? o
                  : +t;
            }
            var s =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        'function' == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? 'symbol'
                        : typeof t;
                    },
              o = NaN,
              a = '[object Symbol]',
              r = /^\s+|\s+$/g,
              l = /^[-+]0x[0-9a-f]+$/i,
              c = /^0b[01]+$/i,
              u = /^0o[0-7]+$/i,
              d = parseInt,
              h =
                'object' == (void 0 === e ? 'undefined' : s(e)) &&
                e &&
                e.Object === Object &&
                e,
              p =
                'object' ==
                  ('undefined' == typeof self ? 'undefined' : s(self)) &&
                self &&
                self.Object === Object &&
                self,
              f = h || p || Function('return this')(),
              m = Object.prototype.toString,
              g = Math.max,
              y = Math.min,
              v = function () {
                return f.Date.now();
              };
            t.exports = function (t, e, s) {
              function o(e) {
                var i = u,
                  n = d;
                return (u = d = void 0), (b = e), (p = t.apply(n, i));
              }
              function a(t) {
                var i = t - m,
                  n = t - b;
                return void 0 === m || i >= e || i < 0 || (x && n >= h);
              }
              function r() {
                var t,
                  i,
                  n,
                  s = v();
                return a(s)
                  ? l(s)
                  : void (f = setTimeout(
                      r,
                      ((t = s - m),
                      (i = s - b),
                      (n = e - t),
                      x ? y(n, h - i) : n),
                    ));
              }
              function l(t) {
                return (f = void 0), _ && u ? o(t) : ((u = d = void 0), p);
              }
              function c() {
                var t,
                  i = v(),
                  n = a(i);
                if (((u = arguments), (d = this), (m = i), n)) {
                  if (void 0 === f)
                    return (b = t = m), (f = setTimeout(r, e)), w ? o(t) : p;
                  if (x) return (f = setTimeout(r, e)), o(m);
                }
                return void 0 === f && (f = setTimeout(r, e)), p;
              }
              var u,
                d,
                h,
                p,
                f,
                m,
                b = 0,
                w = !1,
                x = !1,
                _ = !0;
              if ('function' != typeof t)
                throw TypeError('Expected a function');
              return (
                (e = n(e) || 0),
                i(s) &&
                  ((w = !!s.leading),
                  (h = (x = 'maxWait' in s) ? g(n(s.maxWait) || 0, e) : h),
                  (_ = 'trailing' in s ? !!s.trailing : _)),
                (c.cancel = function () {
                  void 0 !== f && clearTimeout(f),
                    (b = 0),
                    (u = m = d = f = void 0);
                }),
                (c.flush = function () {
                  return void 0 === f ? p : l(v());
                }),
                c
              );
            };
          }).call(
            e,
            (function () {
              return this;
            })(),
          );
        },
        function (t, e) {
          'use strict';
          function i() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function n(t) {
            t &&
              t.forEach(function (t) {
                var e = Array.prototype.slice.call(t.addedNodes),
                  i = Array.prototype.slice.call(t.removedNodes);
                if (
                  (function t(e) {
                    var i = void 0,
                      n = void 0;
                    for (i = 0; i < e.length; i += 1)
                      if (
                        ((n = e[i]).dataset && n.dataset.aos) ||
                        (n.children && t(n.children))
                      )
                        return !0;
                    return !1;
                  })(e.concat(i))
                )
                  return s();
              });
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var s = function () {};
          e.default = {
            isSupported: function () {
              return !!i();
            },
            ready: function (t, e) {
              var o = window.document,
                a = new (i())(n);
              (s = e),
                a.observe(o.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          };
        },
        function (t, e) {
          'use strict';
          function i() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ''
            );
          }
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n = (function () {
              function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                  var n = e[i];
                  (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    'value' in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
                }
              }
              return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e;
              };
            })(),
            s =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            o =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            a =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            r =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = (function () {
              function t() {
                !(function (t, e) {
                  if (!(t instanceof e))
                    throw TypeError('Cannot call a class as a function');
                })(this, t);
              }
              return (
                n(t, [
                  {
                    key: 'phone',
                    value: function () {
                      var t = i();
                      return !(!s.test(t) && !o.test(t.substr(0, 4)));
                    },
                  },
                  {
                    key: 'mobile',
                    value: function () {
                      var t = i();
                      return !(!a.test(t) && !r.test(t.substr(0, 4)));
                    },
                  },
                  {
                    key: 'tablet',
                    value: function () {
                      return this.mobile() && !this.phone();
                    },
                  },
                ]),
                t
              );
            })();
          e.default = new l();
        },
        function (t, e) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var i = function (t, e, i) {
            var n = t.node.getAttribute('data-aos-once');
            e > t.position
              ? t.node.classList.add('aos-animate')
              : void 0 === n ||
                ('false' !== n && (i || 'true' === n)) ||
                t.node.classList.remove('aos-animate');
          };
          e.default = function (t, e) {
            var n = window.pageYOffset,
              s = window.innerHeight;
            t.forEach(function (t, o) {
              i(t, s + n, e);
            });
          };
        },
        function (t, e, i) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n,
            s = (n = i(12)) && n.__esModule ? n : { default: n };
          e.default = function (t, e) {
            return (
              t.forEach(function (t, i) {
                t.node.classList.add('aos-init'),
                  (t.position = (0, s.default)(t.node, e.offset));
              }),
              t
            );
          };
        },
        function (t, e, i) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 });
          var n,
            s = (n = i(13)) && n.__esModule ? n : { default: n };
          e.default = function (t, e) {
            var i = 0,
              n = 0,
              o = window.innerHeight,
              a = {
                offset: t.getAttribute('data-aos-offset'),
                anchor: t.getAttribute('data-aos-anchor'),
                anchorPlacement: t.getAttribute('data-aos-anchor-placement'),
              };
            switch (
              (a.offset && !isNaN(a.offset) && (n = parseInt(a.offset)),
              a.anchor &&
                document.querySelectorAll(a.anchor) &&
                (t = document.querySelectorAll(a.anchor)[0]),
              (i = (0, s.default)(t).top),
              a.anchorPlacement)
            ) {
              case 'top-bottom':
                break;
              case 'center-bottom':
                i += t.offsetHeight / 2;
                break;
              case 'bottom-bottom':
                i += t.offsetHeight;
                break;
              case 'top-center':
                i += o / 2;
                break;
              case 'bottom-center':
                i += o / 2 + t.offsetHeight;
                break;
              case 'center-center':
                i += o / 2 + t.offsetHeight / 2;
                break;
              case 'top-top':
                i += o;
                break;
              case 'bottom-top':
                i += t.offsetHeight + o;
                break;
              case 'center-top':
                i += t.offsetHeight / 2 + o;
            }
            return a.anchorPlacement || a.offset || isNaN(e) || (n = e), i + n;
          };
        },
        function (t, e) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = function (t) {
              for (
                var e = 0, i = 0;
                t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);

              )
                (e += t.offsetLeft - ('BODY' != t.tagName ? t.scrollLeft : 0)),
                  (i += t.offsetTop - ('BODY' != t.tagName ? t.scrollTop : 0)),
                  (t = t.offsetParent);
              return { top: i, left: e };
            });
        },
        function (t, e) {
          'use strict';
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.default = function (t) {
              return (
                (t = t || document.querySelectorAll('[data-aos]')),
                Array.prototype.map.call(t, function (t) {
                  return { node: t };
                })
              );
            });
        },
      ]);
    },
    2499: function (t, e, i) {
      'use strict';
      i.r(e),
        i.d(e, {
          CountUp: function () {
            return s;
          },
        });
      var n = function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var s in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
              return t;
            }).apply(this, arguments);
        },
        s = (function () {
          function t(t, e, i) {
            var s = this;
            (this.endVal = e),
              (this.options = i),
              (this.version = '2.8.0'),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                useIndianSeparators: !1,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: '',
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1,
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ''),
              (this.startVal = 0),
              (this.paused = !0),
              (this.once = !1),
              (this.count = function (t) {
                s.startTime || (s.startTime = t);
                var e = t - s.startTime;
                (s.remaining = s.duration - e),
                  s.useEasing
                    ? s.countDown
                      ? (s.frameVal =
                          s.startVal -
                          s.easingFn(e, 0, s.startVal - s.endVal, s.duration))
                      : (s.frameVal = s.easingFn(
                          e,
                          s.startVal,
                          s.endVal - s.startVal,
                          s.duration,
                        ))
                    : (s.frameVal =
                        s.startVal +
                        (s.endVal - s.startVal) * (e / s.duration));
                var i = s.countDown
                  ? s.frameVal < s.endVal
                  : s.frameVal > s.endVal;
                (s.frameVal = i ? s.endVal : s.frameVal),
                  (s.frameVal = Number(
                    s.frameVal.toFixed(s.options.decimalPlaces),
                  )),
                  s.printValue(s.frameVal),
                  e < s.duration
                    ? (s.rAF = requestAnimationFrame(s.count))
                    : null !== s.finalEndVal
                      ? s.update(s.finalEndVal)
                      : s.options.onCompleteCallback &&
                        s.options.onCompleteCallback();
              }),
              (this.formatNumber = function (t) {
                var e,
                  i,
                  n,
                  o = (Math.abs(t).toFixed(s.options.decimalPlaces) + '').split(
                    '.',
                  );
                if (
                  ((e = o[0]),
                  (i = o.length > 1 ? s.options.decimal + o[1] : ''),
                  s.options.useGrouping)
                ) {
                  n = '';
                  for (var a = 3, r = 0, l = 0, c = e.length; l < c; ++l)
                    s.options.useIndianSeparators &&
                      4 === l &&
                      ((a = 2), (r = 1)),
                      0 !== l && r % a == 0 && (n = s.options.separator + n),
                      r++,
                      (n = e[c - l - 1] + n);
                  e = n;
                }
                return (
                  s.options.numerals &&
                    s.options.numerals.length &&
                    ((e = e.replace(/[0-9]/g, function (t) {
                      return s.options.numerals[+t];
                    })),
                    (i = i.replace(/[0-9]/g, function (t) {
                      return s.options.numerals[+t];
                    }))),
                  (t < 0 ? '-' : '') +
                    s.options.prefix +
                    e +
                    i +
                    s.options.suffix
                );
              }),
              (this.easeOutExpo = function (t, e, i, n) {
                return (i * (1 - Math.pow(2, (-10 * t) / n)) * 1024) / 1023 + e;
              }),
              (this.options = n(n({}, this.defaults), i)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(e)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces,
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              '' === this.options.separator && (this.options.useGrouping = !1),
              (this.el = 'string' == typeof t ? document.getElementById(t) : t),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = '[CountUp] target is null or undefined'),
              'undefined' != typeof window &&
                this.options.enableScrollSpy &&
                (this.error
                  ? console.error(this.error, t)
                  : ((window.onScrollFns = window.onScrollFns || []),
                    window.onScrollFns.push(function () {
                      return s.handleScroll(s);
                    }),
                    (window.onscroll = function () {
                      window.onScrollFns.forEach(function (t) {
                        return t();
                      });
                    }),
                    this.handleScroll(this)));
          }
          return (
            (t.prototype.handleScroll = function (t) {
              if (t && window && !t.once) {
                var e = window.innerHeight + window.scrollY,
                  i = t.el.getBoundingClientRect(),
                  n = i.top + window.pageYOffset,
                  s = i.top + i.height + window.pageYOffset;
                s < e && s > window.scrollY && t.paused
                  ? ((t.paused = !1),
                    setTimeout(function () {
                      return t.start();
                    }, t.options.scrollSpyDelay),
                    t.options.scrollSpyOnce && (t.once = !0))
                  : (window.scrollY > s || n > e) && !t.paused && t.reset();
              }
            }),
            (t.prototype.determineDirectionAndSmartEasing = function () {
              var t = this.finalEndVal ? this.finalEndVal : this.endVal;
              if (
                ((this.countDown = this.startVal > t),
                Math.abs(t - this.startVal) >
                  this.options.smartEasingThreshold && this.options.useEasing)
              ) {
                this.finalEndVal = t;
                var e = this.countDown ? 1 : -1;
                (this.endVal = t + e * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = t), (this.finalEndVal = null);
              null !== this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (t.prototype.start = function (t) {
              this.error ||
                (this.options.onStartCallback && this.options.onStartCallback(),
                t && (this.options.onCompleteCallback = t),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (t.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (t.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (t.prototype.update = function (t) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(t)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  null == this.finalEndVal && this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (t.prototype.printValue = function (t) {
              var e;
              if (this.el) {
                var i = this.formattingFn(t);
                (
                  null === (e = this.options.plugin) || void 0 === e
                    ? void 0
                    : e.render
                )
                  ? this.options.plugin.render(this.el, i)
                  : 'INPUT' === this.el.tagName
                    ? (this.el.value = i)
                    : 'text' === this.el.tagName || 'tspan' === this.el.tagName
                      ? (this.el.textContent = i)
                      : (this.el.innerHTML = i);
              }
            }),
            (t.prototype.ensureNumber = function (t) {
              return 'number' == typeof t && !isNaN(t);
            }),
            (t.prototype.validateValue = function (t) {
              var e = Number(t);
              return this.ensureNumber(e)
                ? e
                : ((this.error =
                    '[CountUp] invalid start or end value: '.concat(t)),
                  null);
            }),
            (t.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            t
          );
        })();
    },
    2815: function (t, e, i) {
      'use strict';
      i.d(e, {
        p8: function () {
          return tk;
        },
      });
      var n,
        s,
        o,
        a,
        r,
        l,
        c,
        u,
        d,
        h,
        p = i(9123),
        f = {},
        m = 180 / Math.PI,
        g = Math.PI / 180,
        y = Math.atan2,
        v = /([A-Z])/g,
        b = /(left|right|width|margin|padding|x)/i,
        w = /[\s,\(]\S/,
        x = {
          autoAlpha: 'opacity,visibility',
          scale: 'scaleX,scaleY',
          alpha: 'opacity',
        },
        _ = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e,
          );
        },
        k = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e,
          );
        },
        O = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
            e,
          );
        },
        P = function (t, e) {
          var i = e.s + e.c * t;
          e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        C = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        M = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        S = function (t, e, i) {
          return (t.style[e] = i);
        },
        z = function (t, e, i) {
          return t.style.setProperty(e, i);
        },
        T = function (t, e, i) {
          return (t._gsap[e] = i);
        },
        E = function (t, e, i) {
          return (t._gsap.scaleX = t._gsap.scaleY = i);
        },
        R = function (t, e, i, n, s) {
          var o = t._gsap;
          (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
        },
        I = function (t, e, i, n, s) {
          var o = t._gsap;
          (o[e] = i), o.renderTransform(s, o);
        },
        D = 'transform',
        A = D + 'Origin',
        j = function t(e, i) {
          var n = this,
            s = this.target,
            o = s.style;
          if (e in f && o) {
            if (((this.tfm = this.tfm || {}), 'transform' === e))
              return x.transform.split(',').forEach(function (e) {
                return t.call(n, e, i);
              });
            if (
              (~(e = x[e] || e).indexOf(',')
                ? e.split(',').forEach(function (t) {
                    return (n.tfm[t] = tt(s, t));
                  })
                : (this.tfm[e] = s._gsap.x ? s._gsap[e] : tt(s, e)),
              this.props.indexOf(D) >= 0)
            )
              return;
            s._gsap.svg &&
              ((this.svgo = s.getAttribute('data-svg-origin')),
              this.props.push(A, i, '')),
              (e = D);
          }
          (o || i) && this.props.push(e, i, o[e]);
        },
        L = function (t) {
          t.translate &&
            (t.removeProperty('translate'),
            t.removeProperty('scale'),
            t.removeProperty('rotate'));
        },
        F = function () {
          var t,
            e,
            i = this.props,
            n = this.target,
            s = n.style,
            o = n._gsap;
          for (t = 0; t < i.length; t += 3)
            i[t + 1]
              ? (n[i[t]] = i[t + 2])
              : i[t + 2]
                ? (s[i[t]] = i[t + 2])
                : s.removeProperty(
                    '--' === i[t].substr(0, 2)
                      ? i[t]
                      : i[t].replace(v, '-$1').toLowerCase(),
                  );
          if (this.tfm) {
            for (e in this.tfm) o[e] = this.tfm[e];
            o.svg &&
              (o.renderTransform(),
              n.setAttribute('data-svg-origin', this.svgo || '')),
              ((t = d()) && t.isStart) || s[D] || (L(s), (o.uncache = 1));
          }
        },
        B = function (t, e) {
          var i = { target: t, props: [], revert: F, save: j };
          return (
            t._gsap || p.p8.core.getCache(t),
            e &&
              e.split(',').forEach(function (t) {
                return i.save(t);
              }),
            i
          );
        },
        V = function (t, e) {
          var i = a.createElementNS
            ? a.createElementNS(
                (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                t,
              )
            : a.createElement(t);
          return i.style ? i : a.createElement(t);
        },
        q = function t(e, i, n) {
          var s = getComputedStyle(e);
          return (
            s[i] ||
            s.getPropertyValue(i.replace(v, '-$1').toLowerCase()) ||
            s.getPropertyValue(i) ||
            (!n && t(e, H(i) || i, 1)) ||
            ''
          );
        },
        W = 'O,Moz,ms,Ms,Webkit'.split(','),
        H = function (t, e, i) {
          var n = (e || c).style,
            s = 5;
          if (t in n && !i) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            s-- && !(W[s] + t in n);

          );
          return s < 0 ? null : (3 === s ? 'ms' : s >= 0 ? W[s] : '') + t;
        },
        N = function () {
          'undefined' != typeof window &&
            window.document &&
            ((r = (a = window.document).documentElement),
            (c = V('div') || { style: {} }),
            V('div'),
            (A = (D = H(D)) + 'Origin'),
            (c.style.cssText =
              'border-width:0;line-height:0;position:absolute;padding:0'),
            (h = !!H('perspective')),
            (d = p.p8.core.reverting),
            (l = 1));
        },
        U = function t(e) {
          var i,
            n = V(
              'svg',
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg',
            ),
            s = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (
            (r.appendChild(n),
            n.appendChild(this),
            (this.style.display = 'block'),
            e)
          )
            try {
              (i = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (i = this._gsapBBox());
          return (
            s && (o ? s.insertBefore(this, o) : s.appendChild(this)),
            r.removeChild(n),
            (this.style.cssText = a),
            i
          );
        },
        G = function (t, e) {
          for (var i = e.length; i--; )
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
        },
        Z = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (i) {
            e = U.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === U ||
              (e = U.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +G(t, ['x', 'cx', 'x1']) || 0,
                  y: +G(t, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        $ = function (t) {
          return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Z(t));
        },
        Y = function (t, e) {
          if (e) {
            var i = t.style;
            e in f && e !== A && (e = D),
              i.removeProperty
                ? (('ms' === e.substr(0, 2) || 'webkit' === e.substr(0, 6)) &&
                    (e = '-' + e),
                  i.removeProperty(e.replace(v, '-$1').toLowerCase()))
                : i.removeAttribute(e);
          }
        },
        K = function (t, e, i, n, s, o) {
          var a = new p.Fo(t._pt, e, i, 0, 1, o ? M : C);
          return (t._pt = a), (a.b = n), (a.e = s), t._props.push(i), a;
        },
        X = { deg: 1, rad: 1, turn: 1 },
        J = { grid: 1, flex: 1 },
        Q = function t(e, i, n, s) {
          var o,
            r,
            l,
            u,
            d = parseFloat(n) || 0,
            h = (n + '').trim().substr((d + '').length) || 'px',
            m = c.style,
            g = b.test(i),
            y = 'svg' === e.tagName.toLowerCase(),
            v = (y ? 'client' : 'offset') + (g ? 'Width' : 'Height'),
            w = 'px' === s,
            x = '%' === s;
          return s === h || !d || X[s] || X[h]
            ? d
            : ('px' === h || w || (d = t(e, i, n, 'px')),
                (u = e.getCTM && $(e)),
                (x || '%' === h) && (f[i] || ~i.indexOf('adius')))
              ? ((o = u ? e.getBBox()[g ? 'width' : 'height'] : e[v]),
                (0, p.Pr)(x ? (d / o) * 100 : (d / 100) * o))
              : ((m[g ? 'width' : 'height'] = 100 + (w ? h : s)),
                  (r =
                    ~i.indexOf('adius') || ('em' === s && e.appendChild && !y)
                      ? e
                      : e.parentNode),
                  u && (r = (e.ownerSVGElement || {}).parentNode),
                  (r && r !== a && r.appendChild) || (r = a.body),
                  (l = r._gsap) &&
                    x &&
                    l.width &&
                    g &&
                    l.time === p.xr.time &&
                    !l.uncache)
                ? (0, p.Pr)((d / l.width) * 100)
                : ((x || '%' === h) &&
                    !J[q(r, 'display')] &&
                    (m.position = q(e, 'position')),
                  r === e && (m.position = 'static'),
                  r.appendChild(c),
                  (o = c[v]),
                  r.removeChild(c),
                  (m.position = 'absolute'),
                  g &&
                    x &&
                    (((l = (0, p.DY)(r)).time = p.xr.time), (l.width = r[v])),
                  (0, p.Pr)(w ? (o * d) / 100 : o && d ? (100 / o) * d : 0));
        },
        tt = function (t, e, i, n) {
          var s;
          return (
            l || N(),
            e in x &&
              'transform' !== e &&
              ~(e = x[e]).indexOf(',') &&
              (e = e.split(',')[0]),
            f[e] && 'transform' !== e
              ? ((s = th(t, n)),
                (s =
                  'transformOrigin' !== e
                    ? s[e]
                    : s.svg
                      ? s.origin
                      : tp(q(t, A)) + ' ' + s.zOrigin + 'px'))
              : (!(s = t.style[e]) ||
                  'auto' === s ||
                  n ||
                  ~(s + '').indexOf('calc(')) &&
                (s =
                  (to[e] && to[e](t, e, i)) ||
                  q(t, e) ||
                  (0, p.Ok)(t, e) ||
                  ('opacity' === e ? 1 : 0)),
            i && !~(s + '').trim().indexOf(' ') ? Q(t, e, s, i) + i : s
          );
        },
        te = function (t, e, i, n) {
          if (!i || 'none' === i) {
            var s = H(e, t, 1),
              o = s && q(t, s, 1);
            o && o !== i
              ? ((e = s), (i = o))
              : 'borderColor' === e && (i = q(t, 'borderTopColor'));
          }
          var a,
            r,
            l,
            c,
            u,
            d,
            h,
            f,
            m,
            g,
            y,
            v = new p.Fo(this._pt, t.style, e, 0, 1, p.Ks),
            b = 0,
            w = 0;
          if (
            ((v.b = i),
            (v.e = n),
            (i += ''),
            'auto' == (n += '') &&
              ((t.style[e] = n), (n = q(t, e) || n), (t.style[e] = i)),
            (a = [i, n]),
            (0, p.kr)(a),
            (i = a[0]),
            (n = a[1]),
            (l = i.match(p.d4) || []),
            (n.match(p.d4) || []).length)
          ) {
            for (; (r = p.d4.exec(n)); )
              (h = r[0]),
                (m = n.substring(b, r.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ('rgba(' === m.substr(-5) || 'hsla(' === m.substr(-5)) &&
                    (u = 1),
                h !== (d = l[w++] || '') &&
                  ((c = parseFloat(d) || 0),
                  (y = d.substr((c + '').length)),
                  '=' === h.charAt(1) && (h = (0, p.cy)(c, h) + y),
                  (f = parseFloat(h)),
                  (g = h.substr((f + '').length)),
                  (b = p.d4.lastIndex - g.length),
                  g ||
                    ((g = g || p.Fc.units[e] || y),
                    b !== n.length || ((n += g), (v.e += g))),
                  y !== g && (c = Q(t, e, d, g) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: m || 1 === w ? m : ',',
                    s: c,
                    c: f - c,
                    m: (u && u < 4) || 'zIndex' === e ? Math.round : 0,
                  }));
            v.c = b < n.length ? n.substring(b, n.length) : '';
          } else v.r = 'display' === e && 'none' === n ? M : C;
          return p.bQ.test(n) && (v.e = 0), (this._pt = v), v;
        },
        ti = {
          top: '0%',
          bottom: '100%',
          left: '0%',
          right: '100%',
          center: '50%',
        },
        tn = function (t) {
          var e = t.split(' '),
            i = e[0],
            n = e[1] || '50%';
          return (
            ('top' === i || 'bottom' === i || 'left' === n || 'right' === n) &&
              ((t = i), (i = n), (n = t)),
            (e[0] = ti[i] || i),
            (e[1] = ti[n] || n),
            e.join(' ')
          );
        },
        ts = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var i,
              n,
              s,
              o = e.t,
              a = o.style,
              r = e.u,
              l = o._gsap;
            if ('all' === r || !0 === r) (a.cssText = ''), (n = 1);
            else
              for (s = (r = r.split(',')).length; --s > -1; )
                f[(i = r[s])] &&
                  ((n = 1), (i = 'transformOrigin' === i ? A : D)),
                  Y(o, i);
            n &&
              (Y(o, D),
              l &&
                (l.svg && o.removeAttribute('transform'),
                th(o, 1),
                (l.uncache = 1),
                L(a)));
          }
        },
        to = {
          clearProps: function (t, e, i, n, s) {
            if ('isFromStart' !== s.data) {
              var o = (t._pt = new p.Fo(t._pt, e, i, 0, 0, ts));
              return (
                (o.u = n), (o.pr = -10), (o.tween = s), t._props.push(i), 1
              );
            }
          },
        },
        ta = [1, 0, 0, 1, 0, 0],
        tr = {},
        tl = function (t) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t;
        },
        tc = function (t) {
          var e = q(t, D);
          return tl(e) ? ta : e.substr(7).match(p.SI).map(p.Pr);
        },
        tu = function (t, e) {
          var i,
            n,
            s,
            o,
            a = t._gsap || (0, p.DY)(t),
            l = t.style,
            c = tc(t);
          return a.svg && t.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (c = [
                (s = t.transform.baseVal.consolidate().matrix).a,
                s.b,
                s.c,
                s.d,
                s.e,
                s.f,
              ]).join(',')
              ? ta
              : c
            : (c !== ta ||
                t.offsetParent ||
                t === r ||
                a.svg ||
                ((s = l.display),
                (l.display = 'block'),
                ((i = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (n = t.nextElementSibling), r.appendChild(t)),
                (c = tc(t)),
                s ? (l.display = s) : Y(t, 'display'),
                o &&
                  (n
                    ? i.insertBefore(t, n)
                    : i
                      ? i.appendChild(t)
                      : r.removeChild(t))),
              e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        td = function (t, e, i, n, s, o) {
          var a,
            r,
            l,
            c,
            u = t._gsap,
            d = s || tu(t, !0),
            h = u.xOrigin || 0,
            p = u.yOrigin || 0,
            f = u.xOffset || 0,
            m = u.yOffset || 0,
            g = d[0],
            y = d[1],
            v = d[2],
            b = d[3],
            w = d[4],
            x = d[5],
            _ = e.split(' '),
            k = parseFloat(_[0]) || 0,
            O = parseFloat(_[1]) || 0;
          i
            ? d !== ta &&
              (r = g * b - y * v) &&
              ((l = k * (b / r) + O * (-v / r) + (v * x - b * w) / r),
              (c = k * (-y / r) + O * (g / r) - (g * x - y * w) / r),
              (k = l),
              (O = c))
            : ((k =
                (a = Z(t)).x + (~_[0].indexOf('%') ? (k / 100) * a.width : k)),
              (O =
                a.y +
                (~(_[1] || _[0]).indexOf('%') ? (O / 100) * a.height : O))),
            n || (!1 !== n && u.smooth)
              ? ((w = k - h),
                (x = O - p),
                (u.xOffset = f + (w * g + x * v) - w),
                (u.yOffset = m + (w * y + x * b) - x))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = k),
            (u.yOrigin = O),
            (u.smooth = !!n),
            (u.origin = e),
            (u.originIsAbsolute = !!i),
            (t.style[A] = '0px 0px'),
            o &&
              (K(o, u, 'xOrigin', h, k),
              K(o, u, 'yOrigin', p, O),
              K(o, u, 'xOffset', f, u.xOffset),
              K(o, u, 'yOffset', m, u.yOffset)),
            t.setAttribute('data-svg-origin', k + ' ' + O);
        },
        th = function (t, e) {
          var i = t._gsap || new p.l1(t);
          if ('x' in i && !e && !i.uncache) return i;
          var n,
            s,
            o,
            a,
            r,
            l,
            c,
            u,
            d,
            f,
            v,
            b,
            w,
            x,
            _,
            k,
            O,
            P,
            C,
            M,
            S,
            z,
            T,
            E,
            R,
            I,
            j,
            L,
            F,
            B,
            V,
            W,
            H = t.style,
            N = i.scaleX < 0,
            U = getComputedStyle(t),
            G = q(t, A) || '0';
          return (
            (n = s = o = l = c = u = d = f = v = 0),
            (a = r = 1),
            (i.svg = !!(t.getCTM && $(t))),
            U.translate &&
              (('none' !== U.translate ||
                'none' !== U.scale ||
                'none' !== U.rotate) &&
                (H[D] =
                  ('none' !== U.translate
                    ? 'translate3d(' +
                      (U.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                      ') '
                    : '') +
                  ('none' !== U.rotate ? 'rotate(' + U.rotate + ') ' : '') +
                  ('none' !== U.scale
                    ? 'scale(' + U.scale.split(' ').join(',') + ') '
                    : '') +
                  ('none' !== U[D] ? U[D] : '')),
              (H.scale = H.rotate = H.translate = 'none')),
            (x = tu(t, i.svg)),
            i.svg &&
              (i.uncache
                ? ((R = t.getBBox()),
                  (G = i.xOrigin - R.x + 'px ' + (i.yOrigin - R.y) + 'px'),
                  (E = ''))
                : (E = !e && t.getAttribute('data-svg-origin')),
              td(t, E || G, !!E || i.originIsAbsolute, !1 !== i.smooth, x)),
            (b = i.xOrigin || 0),
            (w = i.yOrigin || 0),
            x !== ta &&
              ((P = x[0]),
              (C = x[1]),
              (M = x[2]),
              (S = x[3]),
              (n = z = x[4]),
              (s = T = x[5]),
              6 === x.length
                ? ((a = Math.sqrt(P * P + C * C)),
                  (r = Math.sqrt(S * S + M * M)),
                  (l = P || C ? y(C, P) * m : 0),
                  (d = M || S ? y(M, S) * m + l : 0) &&
                    (r *= Math.abs(Math.cos(d * g))),
                  i.svg &&
                    ((n -= b - (b * P + w * M)), (s -= w - (b * C + w * S))))
                : ((W = x[6]),
                  (B = x[7]),
                  (j = x[8]),
                  (L = x[9]),
                  (F = x[10]),
                  (V = x[11]),
                  (n = x[12]),
                  (s = x[13]),
                  (o = x[14]),
                  (c = (_ = y(W, F)) * m),
                  _ &&
                    ((E = z * (k = Math.cos(-_)) + j * (O = Math.sin(-_))),
                    (R = T * k + L * O),
                    (I = W * k + F * O),
                    (j = -(z * O) + j * k),
                    (L = -(T * O) + L * k),
                    (F = -(W * O) + F * k),
                    (V = -(B * O) + V * k),
                    (z = E),
                    (T = R),
                    (W = I)),
                  (u = (_ = y(-M, F)) * m),
                  _ &&
                    ((E = P * (k = Math.cos(-_)) - j * (O = Math.sin(-_))),
                    (R = C * k - L * O),
                    (I = M * k - F * O),
                    (V = S * O + V * k),
                    (P = E),
                    (C = R),
                    (M = I)),
                  (l = (_ = y(C, P)) * m),
                  _ &&
                    ((k = Math.cos(_)),
                    (O = Math.sin(_)),
                    (E = P * k + C * O),
                    (R = z * k + T * O),
                    (C = C * k - P * O),
                    (T = T * k - z * O),
                    (P = E),
                    (z = R)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (a = (0, p.Pr)(Math.sqrt(P * P + C * C + M * M))),
                  (r = (0, p.Pr)(Math.sqrt(T * T + W * W))),
                  (d = Math.abs((_ = y(z, T))) > 2e-4 ? _ * m : 0),
                  (v = V ? 1 / (V < 0 ? -V : V) : 0)),
              i.svg &&
                ((E = t.getAttribute('transform')),
                (i.forceCSS = t.setAttribute('transform', '') || !tl(q(t, D))),
                E && t.setAttribute('transform', E))),
            Math.abs(d) > 90 &&
              270 > Math.abs(d) &&
              (N
                ? ((a *= -1),
                  (d += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((r *= -1), (d += d <= 0 ? 180 : -180))),
            (e = e || i.uncache),
            (i.x =
              n -
              ((i.xPercent =
                n &&
                ((!e && i.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (t.offsetWidth * i.xPercent) / 100
                : 0) +
              'px'),
            (i.y =
              s -
              ((i.yPercent =
                s &&
                ((!e && i.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-s)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * i.yPercent) / 100
                : 0) +
              'px'),
            (i.z = o + 'px'),
            (i.scaleX = (0, p.Pr)(a)),
            (i.scaleY = (0, p.Pr)(r)),
            (i.rotation = (0, p.Pr)(l) + 'deg'),
            (i.rotationX = (0, p.Pr)(c) + 'deg'),
            (i.rotationY = (0, p.Pr)(u) + 'deg'),
            (i.skewX = d + 'deg'),
            (i.skewY = f + 'deg'),
            (i.transformPerspective = v + 'px'),
            (i.zOrigin = parseFloat(G.split(' ')[2]) || 0) && (H[A] = tp(G)),
            (i.xOffset = i.yOffset = 0),
            (i.force3D = p.Fc.force3D),
            (i.renderTransform = i.svg ? tv : h ? ty : tm),
            (i.uncache = 0),
            i
          );
        },
        tp = function (t) {
          return (t = t.split(' '))[0] + ' ' + t[1];
        },
        tf = function (t, e, i) {
          var n = (0, p.Wy)(e);
          return (
            (0, p.Pr)(parseFloat(e) + parseFloat(Q(t, 'x', i + 'px', n))) + n
          );
        },
        tm = function (t, e) {
          (e.z = '0px'),
            (e.rotationY = e.rotationX = '0deg'),
            (e.force3D = 0),
            ty(t, e);
        },
        tg = '0deg',
        ty = function (t, e) {
          var i = e || this,
            n = i.xPercent,
            s = i.yPercent,
            o = i.x,
            a = i.y,
            r = i.z,
            l = i.rotation,
            c = i.rotationY,
            u = i.rotationX,
            d = i.skewX,
            h = i.skewY,
            p = i.scaleX,
            f = i.scaleY,
            m = i.transformPerspective,
            y = i.force3D,
            v = i.target,
            b = i.zOrigin,
            w = '',
            x = ('auto' === y && t && 1 !== t) || !0 === y;
          if (b && (u !== tg || c !== tg)) {
            var _,
              k = parseFloat(c) * g,
              O = Math.sin(k),
              P = Math.cos(k);
            (o = tf(v, o, -(O * (_ = Math.cos((k = parseFloat(u) * g))) * b))),
              (a = tf(v, a, -(-Math.sin(k) * b))),
              (r = tf(v, r, -(P * _ * b) + b));
          }
          '0px' !== m && (w += 'perspective(' + m + ') '),
            (n || s) && (w += 'translate(' + n + '%, ' + s + '%) '),
            (x || '0px' !== o || '0px' !== a || '0px' !== r) &&
              (w +=
                '0px' !== r || x
                  ? 'translate3d(' + o + ', ' + a + ', ' + r + ') '
                  : 'translate(' + o + ', ' + a + ') '),
            l !== tg && (w += 'rotate(' + l + ') '),
            c !== tg && (w += 'rotateY(' + c + ') '),
            u !== tg && (w += 'rotateX(' + u + ') '),
            (d !== tg || h !== tg) && (w += 'skew(' + d + ', ' + h + ') '),
            (1 !== p || 1 !== f) && (w += 'scale(' + p + ', ' + f + ') '),
            (v.style[D] = w || 'translate(0, 0)');
        },
        tv = function (t, e) {
          var i,
            n,
            s,
            o,
            a,
            r = e || this,
            l = r.xPercent,
            c = r.yPercent,
            u = r.x,
            d = r.y,
            h = r.rotation,
            f = r.skewX,
            m = r.skewY,
            y = r.scaleX,
            v = r.scaleY,
            b = r.target,
            w = r.xOrigin,
            x = r.yOrigin,
            _ = r.xOffset,
            k = r.yOffset,
            O = r.forceCSS,
            P = parseFloat(u),
            C = parseFloat(d);
          (h = parseFloat(h)),
            (f = parseFloat(f)),
            (m = parseFloat(m)) && ((f += m = parseFloat(m)), (h += m)),
            h || f
              ? ((h *= g),
                (f *= g),
                (i = Math.cos(h) * y),
                (n = Math.sin(h) * y),
                (s = -(Math.sin(h - f) * v)),
                (o = Math.cos(h - f) * v),
                f &&
                  ((m *= g),
                  (s *= a = Math.sqrt(1 + (a = Math.tan(f - m)) * a)),
                  (o *= a),
                  m &&
                    ((i *= a = Math.sqrt(1 + (a = Math.tan(m)) * a)),
                    (n *= a))),
                (i = (0, p.Pr)(i)),
                (n = (0, p.Pr)(n)),
                (s = (0, p.Pr)(s)),
                (o = (0, p.Pr)(o)))
              : ((i = y), (o = v), (n = s = 0)),
            ((P && !~(u + '').indexOf('px')) ||
              (C && !~(d + '').indexOf('px'))) &&
              ((P = Q(b, 'x', u, 'px')), (C = Q(b, 'y', d, 'px'))),
            (w || x || _ || k) &&
              ((P = (0, p.Pr)(P + w - (w * i + x * s) + _)),
              (C = (0, p.Pr)(C + x - (w * n + x * o) + k))),
            (l || c) &&
              ((a = b.getBBox()),
              (P = (0, p.Pr)(P + (l / 100) * a.width)),
              (C = (0, p.Pr)(C + (c / 100) * a.height))),
            (a =
              'matrix(' +
              i +
              ',' +
              n +
              ',' +
              s +
              ',' +
              o +
              ',' +
              P +
              ',' +
              C +
              ')'),
            b.setAttribute('transform', a),
            O && (b.style[D] = a);
        },
        tb = function (t, e, i, n, s) {
          var o,
            a,
            r = (0, p.r9)(s),
            l = parseFloat(s) * (r && ~s.indexOf('rad') ? m : 1) - n,
            c = n + l + 'deg';
          return (
            r &&
              ('short' === (o = s.split('_')[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              'cw' === o && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : 'ccw' === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (t._pt = a = new p.Fo(t._pt, e, i, n, l, k)),
            (a.e = c),
            (a.u = 'deg'),
            t._props.push(i),
            a
          );
        },
        tw = function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        tx = function (t, e, i) {
          var n,
            s,
            o,
            a,
            r,
            l,
            c,
            u = tw({}, i._gsap),
            d = i.style;
          for (s in (u.svg
            ? ((o = i.getAttribute('transform')),
              i.setAttribute('transform', ''),
              (d[D] = e),
              (n = th(i, 1)),
              Y(i, D),
              i.setAttribute('transform', o))
            : ((o = getComputedStyle(i)[D]),
              (d[D] = e),
              (n = th(i, 1)),
              (d[D] = o)),
          f))
            (o = u[s]) !== (a = n[s]) &&
              0 > 'perspective,force3D,transformOrigin,svgOrigin'.indexOf(s) &&
              ((r =
                (0, p.Wy)(o) !== (c = (0, p.Wy)(a))
                  ? Q(i, s, o, c)
                  : parseFloat(o)),
              (l = parseFloat(a)),
              (t._pt = new p.Fo(t._pt, n, s, r, l - r, _)),
              (t._pt.u = c || 0),
              t._props.push(s));
          tw(n, u);
        };
      (0, p.fS)('padding,margin,Width,Radius', function (t, e) {
        var i = 'Right',
          n = 'Bottom',
          s = 'Left',
          o = (
            e < 3 ? ['Top', i, n, s] : ['Top' + s, 'Top' + i, n + i, n + s]
          ).map(function (i) {
            return e < 2 ? t + i : 'border' + i + t;
          });
        to[e > 1 ? 'border' + t : t] = function (t, e, i, n, s) {
          var a, r;
          if (arguments.length < 4)
            return 5 ===
              (r = (a = o.map(function (e) {
                return tt(t, e, i);
              })).join(' ')).split(a[0]).length
              ? a[0]
              : r;
          (a = (n + '').split(' ')),
            (r = {}),
            o.forEach(function (t, e) {
              return (r[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
            }),
            t.init(e, r, s);
        };
      });
      var t_ = {
        name: 'css',
        register: N,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, i, n, s) {
          var o,
            a,
            r,
            c,
            u,
            d,
            h,
            m,
            g,
            y,
            v,
            b,
            k,
            C,
            M,
            S,
            z = this._props,
            T = t.style,
            E = i.vars.startAt;
          for (h in (l || N(),
          (this.styles = this.styles || B(t)),
          (S = this.styles.props),
          (this.tween = i),
          e))
            if (
              'autoRound' !== h &&
              ((a = e[h]), !(p.$i[h] && (0, p.if)(h, e, i, n, t, s)))
            ) {
              if (
                ((u = typeof a),
                (d = to[h]),
                'function' === u && (u = typeof (a = a.call(i, n, t, s))),
                'string' === u && ~a.indexOf('random(') && (a = (0, p.UI)(a)),
                d)
              )
                d(this, t, h, a, i) && (M = 1);
              else if ('--' === h.substr(0, 2))
                (o = (getComputedStyle(t).getPropertyValue(h) + '').trim()),
                  (a += ''),
                  (p.GN.lastIndex = 0),
                  p.GN.test(o) || ((m = (0, p.Wy)(o)), (g = (0, p.Wy)(a))),
                  g ? m !== g && (o = Q(t, h, o, g) + g) : m && (a += m),
                  this.add(T, 'setProperty', o, a, n, s, 0, 0, h),
                  z.push(h),
                  S.push(h, 0, T[h]);
              else if ('undefined' !== u) {
                if (
                  (E && h in E
                    ? ((o =
                        'function' == typeof E[h]
                          ? E[h].call(i, n, t, s)
                          : E[h]),
                      (0, p.r9)(o) &&
                        ~o.indexOf('random(') &&
                        (o = (0, p.UI)(o)),
                      (0, p.Wy)(o + '') ||
                        (o += p.Fc.units[h] || (0, p.Wy)(tt(t, h)) || ''),
                      '=' === (o + '').charAt(1) && (o = tt(t, h)))
                    : (o = tt(t, h)),
                  (c = parseFloat(o)),
                  (y =
                    'string' === u && '=' === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (r = parseFloat(a)),
                  h in x &&
                    ('autoAlpha' === h &&
                      (1 === c &&
                        'hidden' === tt(t, 'visibility') &&
                        r &&
                        (c = 0),
                      S.push('visibility', 0, T.visibility),
                      K(
                        this,
                        T,
                        'visibility',
                        c ? 'inherit' : 'hidden',
                        r ? 'inherit' : 'hidden',
                        !r,
                      )),
                    'scale' !== h &&
                      'transform' !== h &&
                      ~(h = x[h]).indexOf(',') &&
                      (h = h.split(',')[0])),
                  (v = h in f))
                ) {
                  if (
                    (this.styles.save(h),
                    b ||
                      (((k = t._gsap).renderTransform && !e.parseTransform) ||
                        th(t, e.parseTransform),
                      (C = !1 !== e.smoothOrigin && k.smooth),
                      ((b = this._pt =
                        new p.Fo(
                          this._pt,
                          T,
                          D,
                          0,
                          1,
                          k.renderTransform,
                          k,
                          0,
                          -1,
                        )).dep = 1)),
                    'scale' === h)
                  )
                    (this._pt = new p.Fo(
                      this._pt,
                      k,
                      'scaleY',
                      k.scaleY,
                      (y ? (0, p.cy)(k.scaleY, y + r) : r) - k.scaleY || 0,
                      _,
                    )),
                      (this._pt.u = 0),
                      z.push('scaleY', h),
                      (h += 'X');
                  else if ('transformOrigin' === h) {
                    S.push(A, 0, T[A]),
                      (a = tn(a)),
                      k.svg
                        ? td(t, a, 0, C, 0, this)
                        : ((g = parseFloat(a.split(' ')[2]) || 0) !==
                            k.zOrigin && K(this, k, 'zOrigin', k.zOrigin, g),
                          K(this, T, h, tp(o), tp(a)));
                    continue;
                  } else if ('svgOrigin' === h) {
                    td(t, a, 1, C, 0, this);
                    continue;
                  } else if (h in tr) {
                    tb(this, k, h, c, y ? (0, p.cy)(c, y + a) : a);
                    continue;
                  } else if ('smoothOrigin' === h) {
                    K(this, k, 'smooth', k.smooth, a);
                    continue;
                  } else if ('force3D' === h) {
                    k[h] = a;
                    continue;
                  } else if ('transform' === h) {
                    tx(this, a, t);
                    continue;
                  }
                } else h in T || (h = H(h) || h);
                if (
                  v ||
                  ((r || 0 === r) && (c || 0 === c) && !w.test(a) && h in T)
                )
                  (m = (o + '').substr((c + '').length)),
                    r || (r = 0),
                    (g = (0, p.Wy)(a) || (h in p.Fc.units ? p.Fc.units[h] : m)),
                    m !== g && (c = Q(t, h, o, g)),
                    (this._pt = new p.Fo(
                      this._pt,
                      v ? k : T,
                      h,
                      c,
                      (y ? (0, p.cy)(c, y + r) : r) - c,
                      v || ('px' !== g && 'zIndex' !== h) || !1 === e.autoRound
                        ? _
                        : P,
                    )),
                    (this._pt.u = g || 0),
                    m !== g &&
                      '%' !== g &&
                      ((this._pt.b = o), (this._pt.r = O));
                else if (h in T) te.call(this, t, h, o, y ? y + a : a);
                else if (h in t) this.add(t, h, o || t[h], y ? y + a : a, n, s);
                else if ('parseTransform' !== h) {
                  (0, p.lC)(h, a);
                  continue;
                }
                v || (h in T ? S.push(h, 0, T[h]) : S.push(h, 1, o || t[h])),
                  z.push(h);
              }
            }
          M && (0, p.JV)(this);
        },
        render: function (t, e) {
          if (e.tween._time || !d())
            for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
          else e.styles.revert();
        },
        get: tt,
        aliases: x,
        getSetter: function (t, e, i) {
          var n = x[e];
          return (
            n && 0 > n.indexOf(',') && (e = n),
            e in f && e !== A && (t._gsap.x || tt(t, 'x'))
              ? i && u === i
                ? 'scale' === e
                  ? E
                  : T
                : ((u = i || {}), 'scale' === e ? R : I)
              : t.style && !(0, p.m2)(t.style[e])
                ? S
                : ~e.indexOf('-')
                  ? z
                  : (0, p.S5)(t, e)
          );
        },
        core: { _removeProperty: Y, _getMatrix: tu },
      };
      (p.p8.utils.checkPrefix = H),
        (p.p8.core.getStyleSaver = B),
        (n = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent'),
        (s = 'rotation,rotationX,rotationY,skewX,skewY'),
        (o = (0, p.fS)(
          n +
            ',' +
            s +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (t) {
            f[t] = 1;
          },
        )),
        (0, p.fS)(s, function (t) {
          (p.Fc.units[t] = 'deg'), (tr[t] = 1);
        }),
        (x[o[13]] = n + ',' + s),
        (0, p.fS)(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (t) {
            var e = t.split(':');
            x[e[1]] = o[e[0]];
          },
        ),
        (0, p.fS)(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (t) {
            p.Fc.units[t] = 'px';
          },
        ),
        p.p8.registerPlugin(t_);
      var tk = p.p8.registerPlugin(t_) || p.p8;
      tk.core.Tween;
    },
    7607: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'addLocale', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(6070);
      let n = function (t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return t;
      };
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7561: function (t, e, i) {
      'use strict';
      function n(t, e, i, n) {
        return !1;
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(6070),
        ('function' == typeof e.default ||
          ('object' == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, '__esModule', { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    6685: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'default', {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = i(1024),
        s = n._(i(2265)),
        o = i(2156),
        a = i(3954),
        r = i(6162),
        l = i(5090),
        c = i(7607),
        u = i(2706),
        d = i(6656),
        h = i(283),
        p = i(7561),
        f = i(6711),
        m = i(5685),
        g = new Set();
      function y(t, e, i, n, s, o) {
        if (!o && !(0, a.isLocalURL)(e)) return;
        if (!n.bypassPrefetchedCheck) {
          let s =
              void 0 !== n.locale
                ? n.locale
                : 'locale' in t
                  ? t.locale
                  : void 0,
            o = e + '%' + i + '%' + s;
          if (g.has(o)) return;
          g.add(o);
        }
        let r = o ? t.prefetch(e, s) : t.prefetch(e, i, n);
        Promise.resolve(r).catch((t) => {});
      }
      function v(t) {
        return 'string' == typeof t ? t : (0, r.formatUrl)(t);
      }
      let b = s.default.forwardRef(function (t, e) {
          let i, n;
          let {
            href: r,
            as: g,
            children: b,
            prefetch: w = null,
            passHref: x,
            replace: _,
            shallow: k,
            scroll: O,
            locale: P,
            onClick: C,
            onMouseEnter: M,
            onTouchStart: S,
            legacyBehavior: z = !1,
            ...T
          } = t;
          (i = b),
            z &&
              ('string' == typeof i || 'number' == typeof i) &&
              (i = s.default.createElement('a', null, i));
          let E = s.default.useContext(u.RouterContext),
            R = s.default.useContext(d.AppRouterContext),
            I = null != E ? E : R,
            D = !E,
            A = !1 !== w,
            j = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
            { href: L, as: F } = s.default.useMemo(() => {
              if (!E) {
                let t = v(r);
                return { href: t, as: g ? v(g) : t };
              }
              let [t, e] = (0, o.resolveHref)(E, r, !0);
              return { href: t, as: g ? (0, o.resolveHref)(E, g) : e || t };
            }, [E, r, g]),
            B = s.default.useRef(L),
            V = s.default.useRef(F);
          z && (n = s.default.Children.only(i));
          let q = z ? n && 'object' == typeof n && n.ref : e,
            [W, H, N] = (0, h.useIntersection)({ rootMargin: '200px' }),
            U = s.default.useCallback(
              (t) => {
                (V.current !== F || B.current !== L) &&
                  (N(), (V.current = F), (B.current = L)),
                  W(t),
                  q &&
                    ('function' == typeof q
                      ? q(t)
                      : 'object' == typeof q && (q.current = t));
              },
              [F, q, L, N, W],
            );
          s.default.useEffect(() => {
            I && H && A && y(I, L, F, { locale: P }, { kind: j }, D);
          }, [F, L, H, P, A, null == E ? void 0 : E.locale, I, D, j]);
          let G = {
            ref: U,
            onClick(t) {
              z || 'function' != typeof C || C(t),
                z &&
                  n.props &&
                  'function' == typeof n.props.onClick &&
                  n.props.onClick(t),
                I &&
                  !t.defaultPrevented &&
                  (function (t, e, i, n, o, r, l, c, u, d) {
                    let { nodeName: h } = t.currentTarget,
                      p = 'A' === h.toUpperCase();
                    if (
                      p &&
                      ((function (t) {
                        let e = t.currentTarget,
                          i = e.getAttribute('target');
                        return (
                          (i && '_self' !== i) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which)
                        );
                      })(t) ||
                        (!u && !(0, a.isLocalURL)(i)))
                    )
                      return;
                    t.preventDefault();
                    let f = () => {
                      let t = null == l || l;
                      'beforePopState' in e
                        ? e[o ? 'replace' : 'push'](i, n, {
                            shallow: r,
                            locale: c,
                            scroll: t,
                          })
                        : e[o ? 'replace' : 'push'](n || i, {
                            forceOptimisticNavigation: !d,
                            scroll: t,
                          });
                    };
                    u ? s.default.startTransition(f) : f();
                  })(t, I, L, F, _, k, O, P, D, A);
            },
            onMouseEnter(t) {
              z || 'function' != typeof M || M(t),
                z &&
                  n.props &&
                  'function' == typeof n.props.onMouseEnter &&
                  n.props.onMouseEnter(t),
                I &&
                  (A || !D) &&
                  y(
                    I,
                    L,
                    F,
                    { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: j },
                    D,
                  );
            },
            onTouchStart(t) {
              z || 'function' != typeof S || S(t),
                z &&
                  n.props &&
                  'function' == typeof n.props.onTouchStart &&
                  n.props.onTouchStart(t),
                I &&
                  (A || !D) &&
                  y(
                    I,
                    L,
                    F,
                    { locale: P, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: j },
                    D,
                  );
            },
          };
          if ((0, l.isAbsoluteUrl)(F)) G.href = F;
          else if (!z || x || ('a' === n.type && !('href' in n.props))) {
            let t = void 0 !== P ? P : null == E ? void 0 : E.locale,
              e =
                (null == E ? void 0 : E.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  F,
                  t,
                  null == E ? void 0 : E.locales,
                  null == E ? void 0 : E.domainLocales,
                );
            G.href =
              e ||
              (0, f.addBasePath)(
                (0, c.addLocale)(F, t, null == E ? void 0 : E.defaultLocale),
              );
          }
          return z
            ? s.default.cloneElement(n, G)
            : s.default.createElement('a', { ...T, ...G }, i);
        }),
        w = b;
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8043: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          requestIdleCallback: function () {
            return i;
          },
          cancelIdleCallback: function () {
            return n;
          },
        });
      let i =
          ('undefined' != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        n =
          ('undefined' != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    283: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = i(2265),
        s = i(8043),
        o = 'function' == typeof IntersectionObserver,
        a = new Map(),
        r = [];
      function l(t) {
        let { rootRef: e, rootMargin: i, disabled: l } = t,
          c = l || !o,
          [u, d] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          p = (0, n.useCallback)((t) => {
            h.current = t;
          }, []);
        (0, n.useEffect)(() => {
          if (o) {
            if (c || u) return;
            let t = h.current;
            if (t && t.tagName) {
              let n = (function (t, e, i) {
                let {
                  id: n,
                  observer: s,
                  elements: o,
                } = (function (t) {
                  let e;
                  let i = { root: t.root || null, margin: t.rootMargin || '' },
                    n = r.find(
                      (t) => t.root === i.root && t.margin === i.margin,
                    );
                  if (n && (e = a.get(n))) return e;
                  let s = new Map(),
                    o = new IntersectionObserver((t) => {
                      t.forEach((t) => {
                        let e = s.get(t.target),
                          i = t.isIntersecting || t.intersectionRatio > 0;
                        e && i && e(i);
                      });
                    }, t);
                  return (
                    (e = { id: i, observer: o, elements: s }),
                    r.push(i),
                    a.set(i, e),
                    e
                  );
                })(i);
                return (
                  o.set(t, e),
                  s.observe(t),
                  function () {
                    if ((o.delete(t), s.unobserve(t), 0 === o.size)) {
                      s.disconnect(), a.delete(n);
                      let t = r.findIndex(
                        (t) => t.root === n.root && t.margin === n.margin,
                      );
                      t > -1 && r.splice(t, 1);
                    }
                  }
                );
              })(t, (t) => t && d(t), {
                root: null == e ? void 0 : e.current,
                rootMargin: i,
              });
              return n;
            }
          } else if (!u) {
            let t = (0, s.requestIdleCallback)(() => d(!0));
            return () => (0, s.cancelIdleCallback)(t);
          }
        }, [c, i, e, u, h.current]);
        let f = (0, n.useCallback)(() => {
          d(!1);
        }, []);
        return [p, u, f];
      }
      ('function' == typeof e.default ||
        ('object' == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, '__esModule', { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3805: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'escapeStringRegexp', {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let i = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function s(t) {
        return i.test(t) ? t.replace(n, '\\$&') : t;
      }
    },
    1295: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return c;
          },
          unstable_getImgProps: function () {
            return l;
          },
        });
      let n = i(1024),
        s = i(2301),
        o = i(7873),
        a = i(3222),
        r = n._(i(5033)),
        l = (t) => {
          (0, o.warnOnce)(
            'Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.',
          );
          let { props: e } = (0, s.getImgProps)(t, {
            defaultLoader: r.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: '/recap/2023/_next/image/',
              loader: 'default',
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
          return { props: e };
        },
        c = a.Image;
    },
    6162: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          formatUrl: function () {
            return a;
          },
          urlObjectKeys: function () {
            return r;
          },
          formatWithValidation: function () {
            return l;
          },
        });
      let n = i(8533),
        s = n._(i(5769)),
        o = /https?|ftp|gopher|file/;
      function a(t) {
        let { auth: e, hostname: i } = t,
          n = t.protocol || '',
          a = t.pathname || '',
          r = t.hash || '',
          l = t.query || '',
          c = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ':') + '@' : ''),
          t.host
            ? (c = e + t.host)
            : i &&
              ((c = e + (~i.indexOf(':') ? '[' + i + ']' : i)),
              t.port && (c += ':' + t.port)),
          l &&
            'object' == typeof l &&
            (l = String(s.urlQueryToSearchParams(l)));
        let u = t.search || (l && '?' + l) || '';
        return (
          n && !n.endsWith(':') && (n += ':'),
          t.slashes || ((!n || o.test(n)) && !1 !== c)
            ? ((c = '//' + (c || '')), a && '/' !== a[0] && (a = '/' + a))
            : c || (c = ''),
          r && '#' !== r[0] && (r = '#' + r),
          u && '?' !== u[0] && (u = '?' + u),
          '' +
            n +
            c +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace('#', '%23')) +
            r
        );
      }
      let r = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];
      function l(t) {
        return a(t);
      }
    },
    9232: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'interpolateAs', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = i(3658),
        s = i(8489);
      function o(t, e, i) {
        let o = '',
          a = (0, s.getRouteRegex)(t),
          r = a.groups,
          l = (e !== t ? (0, n.getRouteMatcher)(a)(e) : '') || i;
        o = t;
        let c = Object.keys(r);
        return (
          c.every((t) => {
            let e = l[t] || '',
              { repeat: i, optional: n } = r[t],
              s = '[' + (i ? '...' : '') + t + ']';
            return (
              n && (s = (e ? '' : '/') + '[' + s + ']'),
              i && !Array.isArray(e) && (e = [e]),
              (n || t in l) &&
                (o =
                  o.replace(
                    s,
                    i
                      ? e.map((t) => encodeURIComponent(t)).join('/')
                      : encodeURIComponent(e),
                  ) || '/')
            );
          }) || (o = ''),
          { params: c, result: o }
        );
      }
    },
    8354: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'isDynamicRoute', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let i = /\/\[[^/]+?\](?=\/|$)/;
      function n(t) {
        return i.test(t);
      }
    },
    3954: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'isLocalURL', {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = i(5090),
        s = i(3719);
      function o(t) {
        if (!(0, n.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, n.getLocationOrigin)(),
            i = new URL(t, e);
          return i.origin === e && (0, s.hasBasePath)(i.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    3259: function (t, e) {
      'use strict';
      function i(t, e) {
        let i = {};
        return (
          Object.keys(t).forEach((n) => {
            e.includes(n) || (i[n] = t[n]);
          }),
          i
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'omit', {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    5769: function (t, e) {
      'use strict';
      function i(t) {
        let e = {};
        return (
          t.forEach((t, i) => {
            void 0 === e[i]
              ? (e[i] = t)
              : Array.isArray(e[i])
                ? e[i].push(t)
                : (e[i] = [e[i], t]);
          }),
          e
        );
      }
      function n(t) {
        return 'string' != typeof t &&
          ('number' != typeof t || isNaN(t)) &&
          'boolean' != typeof t
          ? ''
          : String(t);
      }
      function s(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [i, s] = t;
            Array.isArray(s)
              ? s.forEach((t) => e.append(i, n(t)))
              : e.set(i, n(s));
          }),
          e
        );
      }
      function o(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return (
          i.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, i) => t.append(i, e));
          }),
          t
        );
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          searchParamsToUrlQuery: function () {
            return i;
          },
          urlQueryToSearchParams: function () {
            return s;
          },
          assign: function () {
            return o;
          },
        });
    },
    2156: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'resolveHref', {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = i(5769),
        s = i(6162),
        o = i(3259),
        a = i(5090),
        r = i(6070),
        l = i(3954),
        c = i(8354),
        u = i(9232);
      function d(t, e, i) {
        let d;
        let h = 'string' == typeof e ? e : (0, s.formatWithValidation)(e),
          p = h.match(/^[a-zA-Z]{1,}:\/\//),
          f = p ? h.slice(p[0].length) : h;
        if ((f.split('?')[0] || '').match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              h +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.",
          );
          let e = (0, a.normalizeRepeatedSlashes)(f);
          h = (p ? p[0] : '') + e;
        }
        if (!(0, l.isLocalURL)(h)) return i ? [h] : h;
        try {
          d = new URL(h.startsWith('#') ? t.asPath : t.pathname, 'http://n');
        } catch (t) {
          d = new URL('/', 'http://n');
        }
        try {
          let t = new URL(h, d);
          t.pathname = (0, r.normalizePathTrailingSlash)(t.pathname);
          let e = '';
          if ((0, c.isDynamicRoute)(t.pathname) && t.searchParams && i) {
            let i = (0, n.searchParamsToUrlQuery)(t.searchParams),
              { result: a, params: r } = (0, u.interpolateAs)(
                t.pathname,
                t.pathname,
                i,
              );
            a &&
              (e = (0, s.formatWithValidation)({
                pathname: a,
                hash: t.hash,
                query: (0, o.omit)(i, r),
              }));
          }
          let a =
            t.origin === d.origin ? t.href.slice(t.origin.length) : t.href;
          return i ? [a, e || a] : a;
        } catch (t) {
          return i ? [h] : h;
        }
      }
    },
    3658: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        Object.defineProperty(e, 'getRouteMatcher', {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(5090);
      function s(t) {
        let { re: e, groups: i } = t;
        return (t) => {
          let s = e.exec(t);
          if (!s) return !1;
          let o = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new n.DecodeError('failed to decode param');
              }
            },
            a = {};
          return (
            Object.keys(i).forEach((t) => {
              let e = i[t],
                n = s[e.pos];
              void 0 !== n &&
                (a[t] = ~n.indexOf('/')
                  ? n.split('/').map((t) => o(t))
                  : e.repeat
                    ? [o(n)]
                    : o(n));
            }),
            a
          );
        };
      }
    },
    8489: function (t, e, i) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getRouteRegex: function () {
            return l;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getNamedMiddlewareRegex: function () {
            return h;
          },
        });
      let n = i(4507),
        s = i(3805),
        o = i(7369);
      function a(t) {
        let e = t.startsWith('[') && t.endsWith(']');
        e && (t = t.slice(1, -1));
        let i = t.startsWith('...');
        return i && (t = t.slice(3)), { key: t, repeat: i, optional: e };
      }
      function r(t) {
        let e = (0, o.removeTrailingSlash)(t).slice(1).split('/'),
          i = {},
          r = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = n.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && o) {
                let { key: t, optional: n, repeat: l } = a(o[1]);
                return (
                  (i[t] = { pos: r++, repeat: l, optional: n }),
                  '/' + (0, s.escapeStringRegexp)(e) + '([^/]+?)'
                );
              }
              if (!o) return '/' + (0, s.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: n } = a(o[1]);
                return (
                  (i[t] = { pos: r++, repeat: e, optional: n }),
                  e ? (n ? '(?:/(.+?))?' : '/(.+?)') : '/([^/]+?)'
                );
              }
            })
            .join(''),
          groups: i,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: i } = r(t);
        return { re: RegExp('^' + e + '(?:/)?$'), groups: i };
      }
      function c(t) {
        let { getSafeRouteKey: e, segment: i, routeKeys: n, keyPrefix: s } = t,
          { key: o, optional: r, repeat: l } = a(i),
          c = o.replace(/\W/g, '');
        s && (c = '' + s + c);
        let u = !1;
        return (
          (0 === c.length || c.length > 30) && (u = !0),
          isNaN(parseInt(c.slice(0, 1))) || (u = !0),
          u && (c = e()),
          s ? (n[c] = '' + s + o) : (n[c] = '' + o),
          l
            ? r
              ? '(?:/(?<' + c + '>.+?))?'
              : '/(?<' + c + '>.+?)'
            : '/(?<' + c + '>[^/]+?)'
        );
      }
      function u(t, e) {
        let i;
        let a = (0, o.removeTrailingSlash)(t).slice(1).split('/'),
          r =
            ((i = 0),
            () => {
              let t = '',
                e = ++i;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: a
            .map((t) => {
              let i = n.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                o = t.match(/\[((?:\[.*\])|.+)\]/);
              return i && o
                ? c({
                    getSafeRouteKey: r,
                    segment: o[1],
                    routeKeys: l,
                    keyPrefix: e ? 'nxtI' : void 0,
                  })
                : o
                  ? c({
                      getSafeRouteKey: r,
                      segment: o[1],
                      routeKeys: l,
                      keyPrefix: e ? 'nxtP' : void 0,
                    })
                  : '/' + (0, s.escapeStringRegexp)(t);
            })
            .join(''),
          routeKeys: l,
        };
      }
      function d(t, e) {
        let i = u(t, e);
        return {
          ...l(t),
          namedRegex: '^' + i.namedParameterizedRoute + '(?:/)?$',
          routeKeys: i.routeKeys,
        };
      }
      function h(t, e) {
        let { parameterizedRoute: i } = r(t),
          { catchAll: n = !0 } = e;
        if ('/' === i) return { namedRegex: '^/' + (n ? '.*' : '') + '$' };
        let { namedParameterizedRoute: s } = u(t, !1);
        return { namedRegex: '^' + s + (n ? '(?:(/.*)?)' : '') + '$' };
      }
    },
    5090: function (t, e) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          WEB_VITALS: function () {
            return i;
          },
          execOnce: function () {
            return n;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return r;
          },
          getDisplayName: function () {
            return l;
          },
          isResSent: function () {
            return c;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return p;
          },
          DecodeError: function () {
            return f;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          MissingStaticPage: function () {
            return y;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          stringifyError: function () {
            return b;
          },
        });
      let i = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
      function n(t) {
        let e,
          i = !1;
        return function () {
          for (var n = arguments.length, s = Array(n), o = 0; o < n; o++)
            s[o] = arguments[o];
          return i || ((i = !0), (e = t(...s))), e;
        };
      }
      let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (t) => s.test(t);
      function a() {
        let { protocol: t, hostname: e, port: i } = window.location;
        return t + '//' + e + (i ? ':' + i : '');
      }
      function r() {
        let { href: t } = window.location,
          e = a();
        return t.substring(e.length);
      }
      function l(t) {
        return 'string' == typeof t ? t : t.displayName || t.name || 'Unknown';
      }
      function c(t) {
        return t.finished || t.headersSent;
      }
      function u(t) {
        let e = t.split('?'),
          i = e[0];
        return (
          i.replace(/\\/g, '/').replace(/\/\/+/g, '/') +
          (e[1] ? '?' + e.slice(1).join('?') : '')
        );
      }
      async function d(t, e) {
        let i = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await d(e.Component, e.ctx) }
            : {};
        let n = await t.getInitialProps(e);
        if (i && c(i)) return n;
        if (!n) {
          let e =
            '"' +
            l(t) +
            '.getInitialProps()" should resolve to an object. But found "' +
            n +
            '" instead.';
          throw Error(e);
        }
        return n;
      }
      let h = 'undefined' != typeof performance,
        p =
          h &&
          ['mark', 'measure', 'getEntriesByName'].every(
            (t) => 'function' == typeof performance[t],
          );
      class f extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(t) {
          super(),
            (this.code = 'ENOENT'),
            (this.name = 'PageNotFoundError'),
            (this.message = 'Cannot find module for page: ' + t);
        }
      }
      class y extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              'Failed to load static file for page: ' + t + ' ' + e);
        }
      }
      class v extends Error {
        constructor() {
          super(),
            (this.code = 'ENOENT'),
            (this.message = 'Cannot find the middleware module');
        }
      }
      function b(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    341: function () {},
    622: function (t, e, i) {
      'use strict';
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = i(2265),
        s = Symbol.for('react.element'),
        o = Symbol.for('react.fragment'),
        a = Object.prototype.hasOwnProperty,
        r =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(t, e, i) {
        var n,
          o = {},
          c = null,
          u = null;
        for (n in (void 0 !== i && (c = '' + i),
        void 0 !== e.key && (c = '' + e.key),
        void 0 !== e.ref && (u = e.ref),
        e))
          a.call(e, n) && !l.hasOwnProperty(n) && (o[n] = e[n]);
        if (t && t.defaultProps)
          for (n in (e = t.defaultProps)) void 0 === o[n] && (o[n] = e[n]);
        return {
          $$typeof: s,
          type: t,
          key: c,
          ref: u,
          props: o,
          _owner: r.current,
        };
      }
      (e.Fragment = o), (e.jsx = c), (e.jsxs = c);
    },
    7437: function (t, e, i) {
      'use strict';
      t.exports = i(622);
    },
    6691: function (t, e, i) {
      t.exports = i(1295);
    },
    1396: function (t, e, i) {
      t.exports = i(6685);
    },
    4033: function (t, e, i) {
      t.exports = i(8165);
    },
    3018: function (t, e, i) {
      'use strict';
      var n = i(1289);
      function s() {}
      function o() {}
      (o.resetWarningCache = s),
        (t.exports = function () {
          function t(t, e, i, s, o, a) {
            if (a !== n) {
              var r = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((r.name = 'Invariant Violation'), r);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: s,
          };
          return (i.PropTypes = i), i;
        });
    },
    4275: function (t, e, i) {
      t.exports = i(3018)();
    },
    1289: function (t) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    1729: function (t, e, i) {
      'use strict';
      var n = i(2265),
        s = i(2499);
      function o(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(i), !0).forEach(function (e) {
                var n, s;
                (n = e),
                  (s = i[e]),
                  (n = (function (t) {
                    var e = (function (t, e) {
                      if ('object' != typeof t || null === t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var n = i.call(t, e || 'default');
                        if ('object' != typeof n) return n;
                        throw TypeError(
                          '@@toPrimitive must return a primitive value.',
                        );
                      }
                      return ('string' === e ? String : Number)(t);
                    })(t, 'string');
                    return 'symbol' == typeof e ? e : String(e);
                  })(n)) in t
                    ? Object.defineProperty(t, n, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = s);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : o(Object(i)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(i, e),
                  );
                });
        }
        return t;
      }
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i)
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        if (null == t) return {};
        var i,
          n,
          s = (function (t, e) {
            if (null == t) return {};
            var i,
              n,
              s = {},
              o = Object.keys(t);
            for (n = 0; n < o.length; n++)
              (i = o[n]), e.indexOf(i) >= 0 || (s[i] = t[i]);
            return s;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (n = 0; n < o.length; n++)
            (i = o[n]),
              !(e.indexOf(i) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(t, i) &&
                (s[i] = t[i]);
        }
        return s;
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var u =
        'undefined' != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? n.useLayoutEffect
          : n.useEffect;
      function d(t) {
        var e = n.useRef(t);
        return (
          u(function () {
            e.current = t;
          }),
          n.useCallback(function () {
            for (var t = arguments.length, i = Array(t), n = 0; n < t; n++)
              i[n] = arguments[n];
            return e.current.apply(void 0, i);
          }, [])
        );
      }
      var h = function (t, e) {
          var i = e.decimal,
            n = e.decimals,
            o = e.duration,
            a = e.easingFn,
            r = e.end,
            l = e.formattingFn,
            c = e.numerals,
            u = e.prefix,
            d = e.separator,
            h = e.start,
            p = e.suffix,
            f = e.useEasing,
            m = e.useGrouping,
            g = e.useIndianSeparators,
            y = e.enableScrollSpy,
            v = e.scrollSpyDelay,
            b = e.scrollSpyOnce;
          return new s.CountUp(t, r, {
            startVal: h,
            duration: o,
            decimal: i,
            decimalPlaces: n,
            easingFn: a,
            formattingFn: l,
            numerals: c,
            separator: d,
            prefix: u,
            suffix: p,
            useEasing: f,
            useIndianSeparators: g,
            useGrouping: m,
            enableScrollSpy: y,
            scrollSpyDelay: v,
            scrollSpyOnce: b,
          });
        },
        p = [
          'ref',
          'startOnMount',
          'enableReinitialize',
          'delay',
          'onEnd',
          'onStart',
          'onPauseResume',
          'onReset',
          'onUpdate',
        ],
        f = {
          decimal: '.',
          separator: ',',
          delay: null,
          prefix: '',
          suffix: '',
          duration: 2,
          start: 0,
          decimals: 0,
          startOnMount: !0,
          enableReinitialize: !0,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
        },
        m = function (t) {
          var e = Object.fromEntries(
              Object.entries(t).filter(function (t) {
                return (
                  void 0 !==
                  ((function (t) {
                    if (Array.isArray(t)) return t;
                  })(t) ||
                    (function (t, e) {
                      var i =
                        null == t
                          ? null
                          : ('undefined' != typeof Symbol &&
                              t[Symbol.iterator]) ||
                            t['@@iterator'];
                      if (null != i) {
                        var n,
                          s,
                          o,
                          a,
                          r = [],
                          l = !0,
                          c = !1;
                        try {
                          if (((o = (i = i.call(t)).next), 0 === e)) {
                            if (Object(i) !== i) return;
                            l = !1;
                          } else
                            for (
                              ;
                              !(l = (n = o.call(i)).done) &&
                              (r.push(n.value), r.length !== e);
                              l = !0
                            );
                        } catch (t) {
                          (c = !0), (s = t);
                        } finally {
                          try {
                            if (
                              !l &&
                              null != i.return &&
                              ((a = i.return()), Object(a) !== a)
                            )
                              return;
                          } finally {
                            if (c) throw s;
                          }
                        }
                        return r;
                      }
                    })(t, 2) ||
                    (function (t, e) {
                      if (t) {
                        if ('string' == typeof t) return c(t, e);
                        var i = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ('Object' === i &&
                            t.constructor &&
                            (i = t.constructor.name),
                          'Map' === i || 'Set' === i)
                        )
                          return Array.from(t);
                        if (
                          'Arguments' === i ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
                        )
                          return c(t, e);
                      }
                    })(t, 2) ||
                    (function () {
                      throw TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                      );
                    })())[1]
                );
              }),
            ),
            i = n.useMemo(
              function () {
                return a(a({}, f), e);
              },
              [t],
            ),
            s = i.ref,
            o = i.startOnMount,
            r = i.enableReinitialize,
            u = i.delay,
            m = i.onEnd,
            g = i.onStart,
            y = i.onPauseResume,
            v = i.onReset,
            b = i.onUpdate,
            w = l(i, p),
            x = n.useRef(),
            _ = n.useRef(),
            k = n.useRef(!1),
            O = d(function () {
              return h('string' == typeof s ? s : s.current, w);
            }),
            P = d(function (t) {
              var e = x.current;
              if (e && !t) return e;
              var i = O();
              return (x.current = i), i;
            }),
            C = d(function () {
              var t = function () {
                return P(!0).start(function () {
                  null == m ||
                    m({ pauseResume: M, reset: S, start: T, update: z });
                });
              };
              u && u > 0 ? (_.current = setTimeout(t, 1e3 * u)) : t(),
                null == g || g({ pauseResume: M, reset: S, update: z });
            }),
            M = d(function () {
              P().pauseResume(),
                null == y || y({ reset: S, start: T, update: z });
            }),
            S = d(function () {
              P().el &&
                (_.current && clearTimeout(_.current),
                P().reset(),
                null == v || v({ pauseResume: M, start: T, update: z }));
            }),
            z = d(function (t) {
              P().update(t),
                null == b || b({ pauseResume: M, reset: S, start: T });
            }),
            T = d(function () {
              S(), C();
            }),
            E = d(function (t) {
              o && (t && S(), C());
            });
          return (
            n.useEffect(
              function () {
                k.current ? r && E(!0) : ((k.current = !0), E());
              },
              [
                r,
                k,
                E,
                u,
                t.start,
                t.suffix,
                t.prefix,
                t.duration,
                t.separator,
                t.decimals,
                t.decimal,
                t.formattingFn,
              ],
            ),
            n.useEffect(
              function () {
                return function () {
                  S();
                };
              },
              [S],
            ),
            { start: T, pauseResume: M, reset: S, update: z, getCountUp: P }
          );
        },
        g = ['className', 'redraw', 'containerProps', 'children', 'style'];
      e.ZP = function (t) {
        var e = t.className,
          i = t.redraw,
          s = t.containerProps,
          o = t.children,
          c = t.style,
          u = l(t, g),
          h = n.useRef(null),
          p = n.useRef(!1),
          f = m(
            a(
              a({}, u),
              {},
              {
                ref: h,
                startOnMount: 'function' != typeof o || 0 === t.delay,
                enableReinitialize: !1,
              },
            ),
          ),
          y = f.start,
          v = f.reset,
          b = f.update,
          w = f.pauseResume,
          x = f.getCountUp,
          _ = d(function () {
            y();
          }),
          k = d(function (e) {
            t.preserveValue || v(), b(e);
          }),
          O = d(function () {
            if (
              'function' == typeof t.children &&
              !(h.current instanceof Element)
            ) {
              console.error(
                'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.',
              );
              return;
            }
            x();
          });
        n.useEffect(
          function () {
            O();
          },
          [O],
        ),
          n.useEffect(
            function () {
              p.current && k(t.end);
            },
            [t.end, k],
          );
        var P = i && t;
        return (n.useEffect(
          function () {
            i && p.current && _();
          },
          [_, i, P],
        ),
        n.useEffect(
          function () {
            !i && p.current && _();
          },
          [
            _,
            i,
            t.start,
            t.suffix,
            t.prefix,
            t.duration,
            t.separator,
            t.decimals,
            t.decimal,
            t.className,
            t.formattingFn,
          ],
        ),
        n.useEffect(function () {
          p.current = !0;
        }, []),
        'function' == typeof o)
          ? o({
              countUpRef: h,
              start: y,
              reset: v,
              update: b,
              pauseResume: w,
              getCountUp: x,
            })
          : n.createElement(
              'span',
              r({ className: e, ref: h, style: c }, s),
              void 0 !== t.start ? x().formattingFn(t.start) : '',
            );
      };
    },
    3352: function (t, e, i) {
      'use strict';
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var n = i(2265),
        s = i(617);
      let o = (t) => 'object' == typeof t && null !== t;
      function a(t, e, i = () => !1) {
        if (!o(t) || !o(e)) return t === e;
        let n = Object.keys(t).filter((t) => !i(t)),
          s = Object.keys(e).filter((t) => !i(t));
        if (n.length !== s.length) return !1;
        for (let s of n) {
          let n = t[s],
            r = e[s];
          if (o(n) && o(r)) {
            if (n === e && r === t) continue;
            if (!a(n, r, i)) return !1;
          } else if (Array.isArray(n) && Array.isArray(r)) {
            if (
              !(function t(e, i, n) {
                if (e.length !== i.length) return !1;
                for (let s = 0; s < e.length; s++) {
                  let r = e[s],
                    l = i[s];
                  if (Array.isArray(r) && Array.isArray(l)) {
                    if (!t(r, l, n)) return !1;
                  } else if (o(r) && o(l)) {
                    if (!a(r, l, n)) return !1;
                  } else if (r !== l) return !1;
                }
                return !0;
              })(n, r, i)
            )
              return !1;
          } else if (n !== r) return !1;
        }
        return !0;
      }
      let r = 'tsparticles';
      class l extends n.Component {
        constructor(t) {
          super(t), (this.state = { init: !1, library: void 0 });
        }
        destroy() {
          this.state.library &&
            (this.state.library.destroy(), this.setState({ library: void 0 }));
        }
        shouldComponentUpdate(t) {
          let e = t.options ?? t.params,
            i = this.props.options ?? this.props.params;
          return (
            t.url !== this.props.url ||
            t.id !== this.props.id ||
            t.canvasClassName !== this.props.canvasClassName ||
            t.className !== this.props.className ||
            t.height !== this.props.height ||
            t.width !== this.props.width ||
            !a(t.style, this.props.style) ||
            t.init !== this.props.init ||
            t.loaded !== this.props.loaded ||
            !a(e, i, (t) => t.startsWith('_'))
          );
        }
        componentDidUpdate() {
          this.refresh();
        }
        forceUpdate() {
          this.refresh().then(() => {
            super.forceUpdate();
          });
        }
        componentDidMount() {
          (async () => {
            this.props.init && (await this.props.init(s.S6)),
              this.setState({ init: !0 }, async () => {
                await this.loadParticles();
              });
          })();
        }
        componentWillUnmount() {
          this.destroy();
        }
        render() {
          let {
            width: t,
            height: e,
            className: i,
            canvasClassName: s,
            id: o,
          } = this.props;
          return n.createElement(
            'div',
            { className: i, id: o },
            n.createElement('canvas', {
              className: s,
              style: { ...this.props.style, width: t, height: e },
            }),
          );
        }
        async refresh() {
          this.destroy(), await this.loadParticles();
        }
        async loadParticles() {
          if (!this.state.init) return;
          let t = this.props.id ?? l.defaultProps.id ?? r,
            e = await s.S6.load({
              url: this.props.url,
              id: t,
              options: this.props.options ?? this.props.params,
            });
          this.props.container && (this.props.container.current = e),
            this.setState({ library: e }),
            this.props.loaded && (await this.props.loaded(e));
        }
      }
      l.defaultProps = {
        width: '100%',
        height: '100%',
        options: {},
        style: {},
        url: void 0,
        id: r,
      };
      var c = l;
    },
    2836: function (t, e, i) {
      'use strict';
      i.d(e, {
        C: function () {
          return a;
        },
      });
      var n = i(6708),
        s = i(1995),
        o = i(3201);
      class a extends n.e {
        constructor(t, e, i) {
          super(t, e), (this.radius = i);
        }
        contains(t) {
          return (0, o.Sp)(t, this.position) <= this.radius;
        }
        intersects(t) {
          let e = this.position,
            i = t.position,
            n = { x: Math.abs(i.x - e.x), y: Math.abs(i.y - e.y) },
            o = this.radius;
          if (t instanceof a) {
            let e = o + t.radius,
              i = Math.sqrt(n.x ** 2 + n.y ** 2);
            return e > i;
          }
          if (t instanceof s.A) {
            let { width: e, height: i } = t.size,
              s = Math.pow(n.x - e, 2) + Math.pow(n.y - i, 2);
            return (
              s <= o ** 2 ||
              (n.x <= o + e && n.y <= o + i) ||
              n.x <= e ||
              n.y <= i
            );
          }
          return !1;
        }
      }
    },
    8026: function (t, e, i) {
      'use strict';
      i.d(e, {
        $o: function () {
          return u;
        },
        G1: function () {
          return r;
        },
        QL: function () {
          return f;
        },
        Re: function () {
          return c;
        },
        VH: function () {
          return h;
        },
        Wt: function () {
          return l;
        },
        YU: function () {
          return n;
        },
        ZL: function () {
          return s;
        },
        aM: function () {
          return a;
        },
        gK: function () {
          return m;
        },
        rR: function () {
          return p;
        },
        zX: function () {
          return d;
        },
        zw: function () {
          return o;
        },
      });
      let n = 'generated',
        s = 'pointerdown',
        o = 'pointerup',
        a = 'pointerleave',
        r = 'pointerout',
        l = 'pointermove',
        c = 'touchstart',
        u = 'touchend',
        d = 'touchmove',
        h = 'touchcancel',
        p = 'resize',
        f = 'visibilitychange',
        m = 'tsParticles - Error';
    },
    6708: function (t, e, i) {
      'use strict';
      i.d(e, {
        e: function () {
          return n;
        },
      });
      class n {
        constructor(t, e) {
          this.position = { x: t, y: e };
        }
      }
    },
    1995: function (t, e, i) {
      'use strict';
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(2836),
        s = i(6708);
      class o extends s.e {
        constructor(t, e, i, n) {
          super(t, e), (this.size = { height: n, width: i });
        }
        contains(t) {
          let e = this.size.width,
            i = this.size.height,
            n = this.position;
          return t.x >= n.x && t.x <= n.x + e && t.y >= n.y && t.y <= n.y + i;
        }
        intersects(t) {
          t instanceof n.C && t.intersects(this);
          let e = this.size.width,
            i = this.size.height,
            s = this.position,
            a = t.position,
            r = t instanceof o ? t.size : { width: 0, height: 0 },
            l = r.width,
            c = r.height;
          return (
            a.x < s.x + e && a.x + l > s.x && a.y < s.y + i && a.y + c > s.y
          );
        }
      }
    },
    6290: function (t, e, i) {
      'use strict';
      i.d(e, {
        O: function () {
          return s;
        },
      });
      var n = i(1190);
      class s extends n.U {
        constructor(t, e) {
          super(t, e, 0);
        }
        static get origin() {
          return s.create(0, 0);
        }
        static clone(t) {
          return s.create(t.x, t.y);
        }
        static create(t, e) {
          return new s(t, e);
        }
      }
    },
    1190: function (t, e, i) {
      'use strict';
      i.d(e, {
        U: function () {
          return o;
        },
      });
      var n = i(8026),
        s = i(3226);
      class o {
        constructor(t, e, i) {
          if (
            ((this._updateFromAngle = (t, e) => {
              (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
            }),
            !(0, s.hj)(t) && t)
          )
            (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : 0);
          else if (void 0 !== t && void 0 !== e)
            (this.x = t), (this.y = e), (this.z = i ?? 0);
          else throw Error(`${n.gK} Vector3d not initialized correctly`);
        }
        static get origin() {
          return o.create(0, 0, 0);
        }
        get angle() {
          return Math.atan2(this.y, this.x);
        }
        set angle(t) {
          this._updateFromAngle(t, this.length);
        }
        get length() {
          return Math.sqrt(this.getLengthSq());
        }
        set length(t) {
          this._updateFromAngle(this.angle, t);
        }
        static clone(t) {
          return o.create(t.x, t.y, t.z);
        }
        static create(t, e, i) {
          return new o(t, e, i);
        }
        add(t) {
          return o.create(this.x + t.x, this.y + t.y, this.z + t.z);
        }
        addTo(t) {
          (this.x += t.x), (this.y += t.y), (this.z += t.z);
        }
        copy() {
          return o.clone(this);
        }
        distanceTo(t) {
          return this.sub(t).length;
        }
        distanceToSq(t) {
          return this.sub(t).getLengthSq();
        }
        div(t) {
          return o.create(this.x / t, this.y / t, this.z / t);
        }
        divTo(t) {
          (this.x /= t), (this.y /= t), (this.z /= t);
        }
        getLengthSq() {
          return this.x ** 2 + this.y ** 2;
        }
        mult(t) {
          return o.create(this.x * t, this.y * t, this.z * t);
        }
        multTo(t) {
          (this.x *= t), (this.y *= t), (this.z *= t);
        }
        normalize() {
          let t = this.length;
          0 != t && this.multTo(1 / t);
        }
        rotate(t) {
          return o.create(
            this.x * Math.cos(t) - this.y * Math.sin(t),
            this.x * Math.sin(t) + this.y * Math.cos(t),
            0,
          );
        }
        setTo(t) {
          (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : 0);
        }
        sub(t) {
          return o.create(this.x - t.x, this.y - t.y, this.z - t.z);
        }
        subFrom(t) {
          (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
        }
      }
    },
    2665: function (t, e, i) {
      'use strict';
      i.d(e, {
        O: function () {
          return s;
        },
      });
      var n = i(3226);
      class s {
        constructor() {
          this.value = '';
        }
        static create(t, e) {
          let i = new s();
          return (
            i.load(t),
            void 0 !== e &&
              ((0, n.HD)(e) || (0, n.kJ)(e) ? i.load({ value: e }) : i.load(e)),
            i
          );
        }
        load(t) {
          t?.value !== void 0 && (this.value = t.value);
        }
      }
    },
    1050: function (t, e, i) {
      'use strict';
      i.d(e, {
        SW: function () {
          return a;
        },
      });
      class n {
        constructor() {
          (this.enable = !1), (this.minimumValue = 0);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue));
        }
      }
      var s = i(3226),
        o = i(3201);
      class a {
        constructor() {
          (this.random = new n()), (this.value = 0);
        }
        load(t) {
          t &&
            ((0, s.jn)(t.random)
              ? (this.random.enable = t.random)
              : this.random.load(t.random),
            void 0 !== t.value &&
              (this.value = (0, o.Cs)(
                t.value,
                this.random.enable ? this.random.minimumValue : void 0,
              )));
        }
      }
    },
    1425: function (t, e, i) {
      'use strict';
      i.d(e, {
        $F: function () {
          return d;
        },
        C3: function () {
          return r;
        },
        PL: function () {
          return h;
        },
        TQ: function () {
          return a;
        },
        Wd: function () {
          return o;
        },
        ZH: function () {
          return l;
        },
        Zw: function () {
          return u;
        },
        pS: function () {
          return s;
        },
        zv: function () {
          return c;
        },
      });
      var n = i(481);
      function s(t, e, i) {
        t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
      }
      function o(t, e, i, n) {
        t.beginPath(),
          t.moveTo(e.x, e.y),
          t.lineTo(i.x, i.y),
          t.lineTo(n.x, n.y),
          t.closePath();
      }
      function a(t, e, i) {
        (t.fillStyle = i ?? 'rgba(0,0,0,0)'),
          t.fillRect(0, 0, e.width, e.height);
      }
      function r(t, e, i, n) {
        i &&
          ((t.globalAlpha = n),
          t.drawImage(i, 0, 0, e.width, e.height),
          (t.globalAlpha = 1));
      }
      function l(t, e) {
        t.clearRect(0, 0, e.width, e.height);
      }
      function c(t) {
        let {
            container: e,
            context: i,
            particle: s,
            delta: o,
            colorStyles: a,
            backgroundMask: r,
            composite: l,
            radius: c,
            opacity: u,
            shadow: d,
            transform: h,
          } = t,
          p = s.getPosition(),
          f = s.rotation + (s.pathRotation ? s.velocity.angle : 0),
          m = { sin: Math.sin(f), cos: Math.cos(f) },
          g = {
            a: m.cos * (h.a ?? 1),
            b: m.sin * (h.b ?? 1),
            c: -m.sin * (h.c ?? 1),
            d: m.cos * (h.d ?? 1),
          };
        i.setTransform(g.a, g.b, g.c, g.d, p.x, p.y),
          i.beginPath(),
          r && (i.globalCompositeOperation = l);
        let y = s.shadowColor;
        d.enable &&
          y &&
          ((i.shadowBlur = d.blur),
          (i.shadowColor = (0, n.iz)(y)),
          (i.shadowOffsetX = d.offset.x),
          (i.shadowOffsetY = d.offset.y)),
          a.fill && (i.fillStyle = a.fill);
        let v = s.strokeWidth ?? 0;
        (i.lineWidth = v),
          a.stroke && (i.strokeStyle = a.stroke),
          (function (t, e, i, n, s, o) {
            if (!i.shape) return;
            let a = t.drawers.get(i.shape);
            a && a.draw(e, i, n, s, o, t.retina.pixelRatio);
          })(e, i, s, c, u, o),
          v > 0 && i.stroke(),
          s.close && i.closePath(),
          s.fill && i.fill(),
          (function (t, e, i, n, s, o) {
            if (!i.shape) return;
            let a = t.drawers.get(i.shape);
            a &&
              a.afterEffect &&
              a.afterEffect(e, i, n, s, o, t.retina.pixelRatio);
          })(e, i, s, c, u, o),
          (i.globalCompositeOperation = 'source-over'),
          i.setTransform(1, 0, 0, 1, 0, 0);
      }
      function u(t, e, i) {
        e.draw && e.draw(t, i);
      }
      function d(t, e, i, n) {
        e.drawParticle && e.drawParticle(t, i, n);
      }
      function h(t, e, i) {
        return { h: t.h, s: t.s, l: t.l + ('darken' === e ? -1 : 1) * i };
      }
    },
    481: function (t, e, i) {
      'use strict';
      i.d(e, {
        BE: function () {
          return v;
        },
        Dt: function () {
          return b;
        },
        VI: function () {
          return r;
        },
        Y6: function () {
          return p;
        },
        bS: function () {
          return x;
        },
        gW: function () {
          return w;
        },
        iz: function () {
          return m;
        },
        lC: function () {
          return d;
        },
        lN: function () {
          return u;
        },
        oc: function () {
          return y;
        },
        tX: function () {
          return c;
        },
        ve: function () {
          return h;
        },
        vz: function () {
          return g;
        },
      });
      var n = i(3201),
        s = i(3226);
      let o = 'random',
        a = new Map();
      function r(t) {
        a.set(t.key, t);
      }
      function l(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function c(t, e, i = !0) {
        if (!t) return;
        let n = (0, s.HD)(t) ? { value: t } : t;
        if ((0, s.HD)(n.value))
          return (function t(e, i, n = !0) {
            if (!e) return;
            let r = (0, s.HD)(e) ? { value: e } : e;
            if ((0, s.HD)(r.value))
              return r.value === o
                ? f()
                : (function (t) {
                    for (let [, e] of a)
                      if (t.startsWith(e.stringPrefix)) return e.parseString(t);
                    let e = t.replace(
                        /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
                        (t, e, i, n, s) =>
                          e + e + i + i + n + n + (void 0 !== s ? s + s : ''),
                      ),
                      i =
                        /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
                          e,
                        );
                    return i
                      ? {
                          a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                          b: parseInt(i[3], 16),
                          g: parseInt(i[2], 16),
                          r: parseInt(i[1], 16),
                        }
                      : void 0;
                  })(r.value);
            if ((0, s.kJ)(r.value))
              return t({ value: (0, s.c8)(r.value, i, n) });
            for (let [, t] of a) {
              let e = t.handleColor(r);
              if (e) return e;
            }
          })(n.value, e, i);
        if ((0, s.kJ)(n.value)) return c({ value: (0, s.c8)(n.value, e, i) });
        for (let [, t] of a) {
          let e = t.handleRangeColor(n);
          if (e) return e;
        }
      }
      function u(t, e, i = !0) {
        let n = c(t, e, i);
        return n ? d(n) : void 0;
      }
      function d(t) {
        let e = t.r / 255,
          i = t.g / 255,
          n = t.b / 255,
          s = Math.max(e, i, n),
          o = Math.min(e, i, n),
          a = { h: 0, l: (s + o) / 2, s: 0 };
        return (
          s !== o &&
            ((a.s = a.l < 0.5 ? (s - o) / (s + o) : (s - o) / (2 - s - o)),
            (a.h =
              e === s
                ? (i - n) / (s - o)
                : (a.h =
                    i === s ? 2 + (n - e) / (s - o) : 4 + (e - i) / (s - o)))),
          (a.l *= 100),
          (a.s *= 100),
          (a.h *= 60),
          a.h < 0 && (a.h += 360),
          a.h >= 360 && (a.h -= 360),
          a
        );
      }
      function h(t) {
        let e = { b: 0, g: 0, r: 0 },
          i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
        if (i.s) {
          let t = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
            n = 2 * i.l - t;
          (e.r = l(n, t, i.h + 1 / 3)),
            (e.g = l(n, t, i.h)),
            (e.b = l(n, t, i.h - 1 / 3));
        } else e.r = e.g = e.b = i.l;
        return (
          (e.r = Math.floor(255 * e.r)),
          (e.g = Math.floor(255 * e.g)),
          (e.b = Math.floor(255 * e.b)),
          e
        );
      }
      function p(t) {
        let e = h(t);
        return { a: t.a, b: e.b, g: e.g, r: e.r };
      }
      function f(t) {
        let e = t ?? 0;
        return {
          b: Math.floor((0, n.vd)((0, n.Cs)(e, 256))),
          g: Math.floor((0, n.vd)((0, n.Cs)(e, 256))),
          r: Math.floor((0, n.vd)((0, n.Cs)(e, 256))),
        };
      }
      function m(t, e) {
        return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
      }
      function g(t, e) {
        return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
      }
      function y(t, e, i, s) {
        let o = t,
          a = e;
        return (
          void 0 === o.r && (o = h(t)),
          void 0 === a.r && (a = h(e)),
          {
            b: (0, n.CD)(o.b, a.b, i, s),
            g: (0, n.CD)(o.g, a.g, i, s),
            r: (0, n.CD)(o.r, a.r, i, s),
          }
        );
      }
      function v(t, e, i) {
        if (i === o) return f();
        if ('mid' !== i) return i;
        {
          let i = t.getFillColor() ?? t.getStrokeColor(),
            n = e?.getFillColor() ?? e?.getStrokeColor();
          if (i && n && e) return y(i, n, t.getRadius(), e.getRadius());
          {
            let t = i ?? n;
            if (t) return h(t);
          }
        }
      }
      function b(t, e, i) {
        let n = (0, s.HD)(t) ? t : t.value;
        return n === o
          ? i
            ? c({ value: n })
            : e
              ? o
              : 'mid'
          : 'mid' === n
            ? 'mid'
            : c({ value: n });
      }
      function w(t) {
        return void 0 !== t
          ? { h: t.h.value, s: t.s.value, l: t.l.value }
          : void 0;
      }
      function x(t, e, i) {
        let n = {
          h: { enable: !1, value: t.h },
          s: { enable: !1, value: t.s },
          l: { enable: !1, value: t.l },
        };
        return e && (_(n.h, e.h, i), _(n.s, e.s, i), _(n.l, e.l, i)), n;
      }
      function _(t, e, i) {
        (t.enable = e.enable),
          t.enable
            ? ((t.velocity = ((0, n.Gu)(e.speed) / 100) * i),
              (t.decay = 1 - (0, n.Gu)(e.decay)),
              (t.status = 'increasing'),
              (t.loops = 0),
              (t.maxLoops = (0, n.Gu)(e.count)),
              (t.time = 0),
              (t.delayTime = 1e3 * (0, n.Gu)(e.delay)),
              e.sync || ((t.velocity *= (0, n.sZ)()), (t.value *= (0, n.sZ)())),
              (t.initialValue = t.value))
            : (t.velocity = 0);
      }
    },
    3201: function (t, e, i) {
      'use strict';
      i.d(e, {
        BV: function () {
          return O;
        },
        CD: function () {
          return d;
        },
        Cs: function () {
          return g;
        },
        Gk: function () {
          return w;
        },
        Gu: function () {
          return p;
        },
        KI: function () {
          return m;
        },
        NA: function () {
          return y;
        },
        Sp: function () {
          return b;
        },
        Uv: function () {
          return f;
        },
        _X: function () {
          return l;
        },
        bx: function () {
          return r;
        },
        hA: function () {
          return _;
        },
        lQ: function () {
          return x;
        },
        mC: function () {
          return k;
        },
        oW: function () {
          return v;
        },
        sZ: function () {
          return c;
        },
        uZ: function () {
          return u;
        },
        vd: function () {
          return h;
        },
      });
      var n = i(3226),
        s = i(6290);
      let o = Math.random,
        a = new Map();
      function r(t, e) {
        a.get(t) || a.set(t, e);
      }
      function l(t) {
        return a.get(t) || ((t) => t);
      }
      function c() {
        return u(o(), 0, 1 - 1e-16);
      }
      function u(t, e, i) {
        return Math.min(Math.max(t, e), i);
      }
      function d(t, e, i, n) {
        return Math.floor((t * i + e * n) / (i + n));
      }
      function h(t) {
        let e = m(t),
          i = f(t);
        return e === i && (i = 0), c() * (e - i) + i;
      }
      function p(t) {
        return (0, n.hj)(t) ? t : h(t);
      }
      function f(t) {
        return (0, n.hj)(t) ? t : t.min;
      }
      function m(t) {
        return (0, n.hj)(t) ? t : t.max;
      }
      function g(t, e) {
        if (t === e || (void 0 === e && (0, n.hj)(t))) return t;
        let i = f(t),
          s = m(t);
        return void 0 !== e
          ? { min: Math.min(i, e), max: Math.max(s, e) }
          : g(i, s);
      }
      function y(t) {
        let e = t.random,
          { enable: i, minimumValue: s } = (0, n.jn)(e)
            ? { enable: e, minimumValue: 0 }
            : e;
        return i ? p(g(t.value, s)) : p(t.value);
      }
      function v(t, e) {
        let i = t.x - e.x,
          n = t.y - e.y;
        return { dx: i, dy: n, distance: Math.sqrt(i ** 2 + n ** 2) };
      }
      function b(t, e) {
        return v(t, e).distance;
      }
      function w(t, e, i) {
        if ((0, n.hj)(t)) return (t * Math.PI) / 180;
        switch (t) {
          case 'top':
            return -Math.PI / 2;
          case 'top-right':
            return -Math.PI / 4;
          case 'right':
            return 0;
          case 'bottom-right':
            return Math.PI / 4;
          case 'bottom':
            return Math.PI / 2;
          case 'bottom-left':
            return (3 * Math.PI) / 4;
          case 'left':
            return Math.PI;
          case 'top-left':
            return (-3 * Math.PI) / 4;
          case 'inside':
            return Math.atan2(i.y - e.y, i.x - e.x);
          case 'outside':
            return Math.atan2(e.y - i.y, e.x - i.x);
          default:
            return c() * Math.PI * 2;
        }
      }
      function x(t) {
        let e = s.O.origin;
        return (e.length = 1), (e.angle = t), e;
      }
      function _(t, e, i, n) {
        return s.O.create(
          (t.x * (i - n)) / (i + n) + (2 * e.x * n) / (i + n),
          t.y,
        );
      }
      function k(t) {
        return {
          x: t.position?.x ?? c() * t.size.width,
          y: t.position?.y ?? c() * t.size.height,
        };
      }
      function O(t) {
        return t ? (t.endsWith('%') ? parseFloat(t) / 100 : parseFloat(t)) : 1;
      }
    },
    3226: function (t, e, i) {
      'use strict';
      i.d(e, {
        Ac: function () {
          return f;
        },
        HD: function () {
          return S;
        },
        HY: function () {
          return c;
        },
        KH: function () {
          return _;
        },
        Kn: function () {
          return E;
        },
        Kr: function () {
          return l;
        },
        M_: function () {
          return m;
        },
        V0: function () {
          return P;
        },
        XD: function () {
          return y;
        },
        ZB: function () {
          return function t(e, ...i) {
            for (let n of i) {
              if (null == n) continue;
              if (!E(n)) {
                e = n;
                continue;
              }
              let i = Array.isArray(n);
              for (let s in (i && (E(e) || !e || !Array.isArray(e))
                ? (e = [])
                : !i && (E(e) || !e || Array.isArray(e)) && (e = {}),
              n)) {
                if ('__proto__' === s) continue;
                let i = n[s],
                  o = e;
                o[s] =
                  E(i) && Array.isArray(i)
                    ? i.map((e) => t(o[s], e))
                    : t(o[s], i);
              }
            }
            return e;
          };
        },
        bt: function () {
          return C;
        },
        c8: function () {
          return p;
        },
        dB: function () {
          return d;
        },
        dp: function () {
          return x;
        },
        gy: function () {
          return b;
        },
        hj: function () {
          return z;
        },
        iC: function () {
          return v;
        },
        jl: function () {
          return a;
        },
        jn: function () {
          return M;
        },
        kJ: function () {
          return R;
        },
        kR: function () {
          return w;
        },
        mf: function () {
          return T;
        },
        mx: function () {
          return h;
        },
        wA: function () {
          return k;
        },
        wm: function () {
          return g;
        },
        yf: function () {
          return u;
        },
      });
      var n = i(3201),
        s = i(6290);
      let o = {
        debug: console.debug,
        error: console.error,
        info: console.info,
        log: console.log,
        verbose: console.log,
        warning: console.warn,
      };
      function a() {
        return o;
      }
      function r(t) {
        let e = { bounced: !1 },
          {
            pSide: i,
            pOtherSide: n,
            rectSide: s,
            rectOtherSide: o,
            velocity: a,
            factor: r,
          } = t;
        return (
          n.min < o.min ||
            n.min > o.max ||
            n.max < o.min ||
            n.max > o.max ||
            (((i.max >= s.min && i.max <= (s.max + s.min) / 2 && a > 0) ||
              (i.min <= s.max && i.min > (s.max + s.min) / 2 && a < 0)) &&
              ((e.velocity = -(a * r)), (e.bounced = !0))),
          e
        );
      }
      function l() {
        return (
          'undefined' == typeof window ||
          !window ||
          void 0 === window.document ||
          !window.document
        );
      }
      function c(t) {
        if (!l() && 'undefined' != typeof matchMedia) return matchMedia(t);
      }
      function u(t) {
        if (!l() && 'undefined' != typeof MutationObserver)
          return new MutationObserver(t);
      }
      function d(t, e) {
        return t === e || (R(e) && e.indexOf(t) > -1);
      }
      async function h(t, e) {
        try {
          await document.fonts.load(`${e ?? '400'} 36px '${t ?? 'Verdana'}'`);
        } catch {}
      }
      function p(t, e, i = !0) {
        return t[
          void 0 !== e && i ? e % t.length : Math.floor((0, n.sZ)() * t.length)
        ];
      }
      function f(t, e, i, n, s) {
        var o;
        let a;
        return (
          (o = m(t, n ?? 0)),
          (a = !0),
          (s && 'bottom' !== s) || (a = o.top < e.height + i.x),
          a && (!s || 'left' === s) && (a = o.right > i.x),
          a && (!s || 'right' === s) && (a = o.left < e.width + i.y),
          a && (!s || 'top' === s) && (a = o.bottom > i.y),
          a
        );
      }
      function m(t, e) {
        return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
      }
      function g(t, e) {
        return !!O(e, (e) => e.enable && d(t, e.mode));
      }
      function y(t, e, i) {
        _(e, (e) => {
          let n = e.mode,
            s = e.enable;
          s &&
            d(t, n) &&
            (function (t, e) {
              let i = t.selectors;
              _(i, (i) => {
                e(i, t);
              });
            })(e, i);
        });
      }
      function v(t, e) {
        if (e && t)
          return O(t, (t) =>
            (function (t, e) {
              let i = _(e, (e) => t.matches(e));
              return R(i) ? i.some((t) => t) : i;
            })(e, t.selectors),
          );
      }
      function b(t) {
        return {
          position: t.getPosition(),
          radius: t.getRadius(),
          mass: t.getMass(),
          velocity: t.velocity,
          factor: s.O.create(
            (0, n.NA)(t.options.bounce.horizontal),
            (0, n.NA)(t.options.bounce.vertical),
          ),
        };
      }
      function w(t, e) {
        let { x: i, y: s } = t.velocity.sub(e.velocity),
          [o, a] = [t.position, e.position],
          { dx: r, dy: l } = (0, n.oW)(a, o);
        if (i * r + s * l < 0) return;
        let c = -Math.atan2(l, r),
          u = t.mass,
          d = e.mass,
          h = t.velocity.rotate(c),
          p = e.velocity.rotate(c),
          f = (0, n.hA)(h, p, u, d),
          m = (0, n.hA)(p, h, u, d),
          g = f.rotate(-c),
          y = m.rotate(-c);
        (t.velocity.x = g.x * t.factor.x),
          (t.velocity.y = g.y * t.factor.y),
          (e.velocity.x = y.x * e.factor.x),
          (e.velocity.y = y.y * e.factor.y);
      }
      function x(t, e) {
        let i = t.getPosition(),
          s = t.getRadius(),
          o = m(i, s),
          a = r({
            pSide: { min: o.left, max: o.right },
            pOtherSide: { min: o.top, max: o.bottom },
            rectSide: { min: e.left, max: e.right },
            rectOtherSide: { min: e.top, max: e.bottom },
            velocity: t.velocity.x,
            factor: (0, n.NA)(t.options.bounce.horizontal),
          });
        a.bounced &&
          (void 0 !== a.velocity && (t.velocity.x = a.velocity),
          void 0 !== a.position && (t.position.x = a.position));
        let l = r({
          pSide: { min: o.top, max: o.bottom },
          pOtherSide: { min: o.left, max: o.right },
          rectSide: { min: e.top, max: e.bottom },
          rectOtherSide: { min: e.left, max: e.right },
          velocity: t.velocity.y,
          factor: (0, n.NA)(t.options.bounce.vertical),
        });
        l.bounced &&
          (void 0 !== l.velocity && (t.velocity.y = l.velocity),
          void 0 !== l.position && (t.position.y = l.position));
      }
      function _(t, e) {
        return R(t) ? t.map((t, i) => e(t, i)) : e(t, 0);
      }
      function k(t, e, i) {
        return R(t) ? p(t, e, i) : t;
      }
      function O(t, e) {
        return R(t) ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0;
      }
      function P(t, e) {
        let i = t.value,
          s = t.animation,
          o = {
            delayTime: 1e3 * (0, n.Gu)(s.delay),
            enable: s.enable,
            value: (0, n.Gu)(t.value) * e,
            max: (0, n.KI)(i) * e,
            min: (0, n.Uv)(i) * e,
            loops: 0,
            maxLoops: (0, n.Gu)(s.count),
            time: 0,
          };
        if (s.enable) {
          switch (((o.decay = 1 - (0, n.Gu)(s.decay)), s.mode)) {
            case 'increase':
              o.status = 'increasing';
              break;
            case 'decrease':
              o.status = 'decreasing';
              break;
            case 'random':
              o.status = (0, n.sZ)() >= 0.5 ? 'increasing' : 'decreasing';
          }
          let t = 'auto' === s.mode;
          switch (s.startValue) {
            case 'min':
              (o.value = o.min), t && (o.status = 'increasing');
              break;
            case 'max':
              (o.value = o.max), t && (o.status = 'decreasing');
              break;
            default:
              (o.value = (0, n.vd)(o)),
                t &&
                  (o.status = (0, n.sZ)() >= 0.5 ? 'increasing' : 'decreasing');
          }
        }
        return (o.initialValue = o.value), o;
      }
      function C(t, e) {
        return (function (t, e) {
          let i = 'percent' === t.mode;
          if (!i) {
            let { mode: e, ...i } = t;
            return i;
          }
          return 'x' in t
            ? { x: (t.x / 100) * e.width, y: (t.y / 100) * e.height }
            : {
                width: (t.width / 100) * e.width,
                height: (t.height / 100) * e.height,
              };
        })(t, e);
      }
      function M(t) {
        return 'boolean' == typeof t;
      }
      function S(t) {
        return 'string' == typeof t;
      }
      function z(t) {
        return 'number' == typeof t;
      }
      function T(t) {
        return 'function' == typeof t;
      }
      function E(t) {
        return 'object' == typeof t && null !== t;
      }
      function R(t) {
        return Array.isArray(t);
      }
    },
    617: function (t, e, i) {
      'use strict';
      i.d(e, {
        S6: function () {
          return tF;
        },
      });
      var n = i(8026),
        s = i(3226),
        o = i(1425),
        a = i(481);
      class r {
        constructor(t) {
          (this.container = t),
            (this._applyPostDrawUpdaters = (t) => {
              for (let e of this._postDrawUpdaters)
                e.afterDraw && e.afterDraw(t);
            }),
            (this._applyPreDrawUpdaters = (t, e, i, n, s, o) => {
              for (let a of this._preDrawUpdaters) {
                if (a.getColorStyles) {
                  let { fill: o, stroke: r } = a.getColorStyles(e, t, i, n);
                  o && (s.fill = o), r && (s.stroke = r);
                }
                if (a.getTransformValues) {
                  let t = a.getTransformValues(e);
                  for (let e in t)
                    !(function (t, e, i) {
                      let n = e[i];
                      void 0 !== n && (t[i] = (t[i] ?? 1) * n);
                    })(o, t, e);
                }
                a.beforeDraw && a.beforeDraw(e);
              }
            }),
            (this._applyResizePlugins = () => {
              for (let t of this._resizePlugins) t.resize && t.resize();
            }),
            (this._getPluginParticleColors = (t) => {
              let e, i;
              for (let n of this._colorPlugins)
                if (
                  (!e &&
                    n.particleFillColor &&
                    (e = (0, a.lN)(n.particleFillColor(t))),
                  !i &&
                    n.particleStrokeColor &&
                    (i = (0, a.lN)(n.particleStrokeColor(t))),
                  e && i)
                )
                  break;
              return [e, i];
            }),
            (this._initCover = () => {
              let t = this.container.actualOptions,
                e = t.backgroundMask.cover,
                i = e.color,
                n = (0, a.tX)(i);
              if (n) {
                let t = { ...n, a: e.opacity };
                this._coverColorStyle = (0, a.iz)(t, t.a);
              }
            }),
            (this._initStyle = () => {
              let t = this.element,
                e = this.container.actualOptions;
              if (t)
                for (let i in (this._fullScreen
                  ? ((this._originalStyle = (0, s.ZB)({}, t.style)),
                    this._setFullScreenStyle())
                  : this._resetOriginalStyle(),
                e.style)) {
                  if (!i || !e.style) continue;
                  let n = e.style[i];
                  n && t.style.setProperty(i, n, 'important');
                }
            }),
            (this._initTrail = async () => {
              let t = this.container.actualOptions,
                e = t.particles.move.trail,
                i = e.fill;
              if (e.enable) {
                if (i.color) {
                  let e = (0, a.tX)(i.color);
                  if (!e) return;
                  let n = t.particles.move.trail;
                  this._trailFill = { color: { ...e }, opacity: 1 / n.length };
                } else
                  await new Promise((t, n) => {
                    if (!i.image) return;
                    let s = document.createElement('img');
                    s.addEventListener('load', () => {
                      (this._trailFill = { image: s, opacity: 1 / e.length }),
                        t();
                    }),
                      s.addEventListener('error', (t) => {
                        n(t.error);
                      }),
                      (s.src = i.image);
                  });
              }
            }),
            (this._paintBase = (t) => {
              this.draw((e) => (0, o.TQ)(e, this.size, t));
            }),
            (this._paintImage = (t, e) => {
              this.draw((i) => (0, o.C3)(i, this.size, t, e));
            }),
            (this._repairStyle = () => {
              let t = this.element;
              t &&
                (this._safeMutationObserver((t) => t.disconnect()),
                this._initStyle(),
                this.initBackground(),
                this._safeMutationObserver((e) =>
                  e.observe(t, { attributes: !0 }),
                ));
            }),
            (this._resetOriginalStyle = () => {
              let t = this.element,
                e = this._originalStyle;
              if (!(t && e)) return;
              let i = t.style;
              (i.position = e.position),
                (i.zIndex = e.zIndex),
                (i.top = e.top),
                (i.left = e.left),
                (i.width = e.width),
                (i.height = e.height);
            }),
            (this._safeMutationObserver = (t) => {
              this._mutationObserver && t(this._mutationObserver);
            }),
            (this._setFullScreenStyle = () => {
              let t = this.element;
              if (!t) return;
              let e = 'important',
                i = t.style;
              i.setProperty('position', 'fixed', e),
                i.setProperty(
                  'z-index',
                  this.container.actualOptions.fullScreen.zIndex.toString(10),
                  e,
                ),
                i.setProperty('top', '0', e),
                i.setProperty('left', '0', e),
                i.setProperty('width', '100%', e),
                i.setProperty('height', '100%', e);
            }),
            (this.size = { height: 0, width: 0 }),
            (this._context = null),
            (this._generated = !1),
            (this._preDrawUpdaters = []),
            (this._postDrawUpdaters = []),
            (this._resizePlugins = []),
            (this._colorPlugins = []);
        }
        get _fullScreen() {
          return this.container.actualOptions.fullScreen.enable;
        }
        clear() {
          let t = this.container.actualOptions,
            e = t.particles.move.trail,
            i = this._trailFill;
          t.backgroundMask.enable
            ? this.paint()
            : e.enable && e.length > 0 && i
              ? i.color
                ? this._paintBase((0, a.iz)(i.color, i.opacity))
                : i.image && this._paintImage(i.image, i.opacity)
              : this.draw((t) => {
                  (0, o.ZH)(t, this.size);
                });
        }
        destroy() {
          if ((this.stop(), this._generated)) {
            let t = this.element;
            t && t.remove();
          } else this._resetOriginalStyle();
          (this._preDrawUpdaters = []),
            (this._postDrawUpdaters = []),
            (this._resizePlugins = []),
            (this._colorPlugins = []);
        }
        draw(t) {
          let e = this._context;
          if (e) return t(e);
        }
        drawParticle(t, e) {
          if (t.spawning || t.destroyed) return;
          let i = t.getRadius();
          if (i <= 0) return;
          let n = t.getFillColor(),
            s = t.getStrokeColor() ?? n,
            [r, l] = this._getPluginParticleColors(t);
          r || (r = n),
            l || (l = s),
            (r || l) &&
              this.draw((n) => {
                let s = this.container,
                  c = s.actualOptions,
                  u = t.options.zIndex,
                  d = (1 - t.zIndexFactor) ** u.opacityRate,
                  h = t.bubble.opacity ?? t.opacity?.value ?? 1,
                  p = t.strokeOpacity ?? h,
                  f = h * d,
                  m = {},
                  g = { fill: r ? (0, a.vz)(r, f) : void 0 };
                (g.stroke = l ? (0, a.vz)(l, p * d) : g.fill),
                  this._applyPreDrawUpdaters(n, t, i, f, g, m),
                  (0, o.zv)({
                    container: s,
                    context: n,
                    particle: t,
                    delta: e,
                    colorStyles: g,
                    backgroundMask: c.backgroundMask.enable,
                    composite: c.backgroundMask.composite,
                    radius: i * (1 - t.zIndexFactor) ** u.sizeRate,
                    opacity: f,
                    shadow: t.options.shadow,
                    transform: m,
                  }),
                  this._applyPostDrawUpdaters(t);
              });
        }
        drawParticlePlugin(t, e, i) {
          this.draw((n) => (0, o.$F)(n, t, e, i));
        }
        drawPlugin(t, e) {
          this.draw((i) => (0, o.Zw)(i, t, e));
        }
        async init() {
          this._safeMutationObserver((t) => t.disconnect()),
            (this._mutationObserver = (0, s.yf)((t) => {
              for (let e of t)
                'attributes' === e.type &&
                  'style' === e.attributeName &&
                  this._repairStyle();
            })),
            this.resize(),
            this._initStyle(),
            this._initCover();
          try {
            await this._initTrail();
          } catch (t) {
            (0, s.jl)().error(t);
          }
          this.initBackground(),
            this._safeMutationObserver((t) => {
              this.element && t.observe(this.element, { attributes: !0 });
            }),
            this.initUpdaters(),
            this.initPlugins(),
            this.paint();
        }
        initBackground() {
          let t = this.container.actualOptions,
            e = t.background,
            i = this.element;
          if (!i) return;
          let n = i.style;
          if (n) {
            if (e.color) {
              let t = (0, a.tX)(e.color);
              n.backgroundColor = t ? (0, a.iz)(t, e.opacity) : '';
            } else n.backgroundColor = '';
            (n.backgroundImage = e.image || ''),
              (n.backgroundPosition = e.position || ''),
              (n.backgroundRepeat = e.repeat || ''),
              (n.backgroundSize = e.size || '');
          }
        }
        initPlugins() {
          for (let [, t] of ((this._resizePlugins = []),
          this.container.plugins))
            t.resize && this._resizePlugins.push(t),
              (t.particleFillColor || t.particleStrokeColor) &&
                this._colorPlugins.push(t);
        }
        initUpdaters() {
          for (let t of ((this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          this.container.particles.updaters))
            t.afterDraw && this._postDrawUpdaters.push(t),
              (t.getColorStyles || t.getTransformValues || t.beforeDraw) &&
                this._preDrawUpdaters.push(t);
        }
        loadCanvas(t) {
          this._generated && this.element && this.element.remove(),
            (this._generated =
              t.dataset && n.YU in t.dataset
                ? 'true' === t.dataset[n.YU]
                : this._generated),
            (this.element = t),
            (this.element.ariaHidden = 'true'),
            (this._originalStyle = (0, s.ZB)({}, this.element.style)),
            (this.size.height = t.offsetHeight),
            (this.size.width = t.offsetWidth),
            (this._context = this.element.getContext('2d')),
            this._safeMutationObserver((t) => {
              this.element && t.observe(this.element, { attributes: !0 });
            }),
            this.container.retina.init(),
            this.initBackground();
        }
        paint() {
          let t = this.container.actualOptions;
          this.draw((e) => {
            t.backgroundMask.enable && t.backgroundMask.cover
              ? ((0, o.ZH)(e, this.size),
                this._paintBase(this._coverColorStyle))
              : this._paintBase();
          });
        }
        resize() {
          if (!this.element) return !1;
          let t = this.container,
            e = t.retina.pixelRatio,
            i = t.canvas.size,
            n = {
              width: this.element.offsetWidth * e,
              height: this.element.offsetHeight * e,
            };
          if (
            n.height === i.height &&
            n.width === i.width &&
            n.height === this.element.height &&
            n.width === this.element.width
          )
            return !1;
          let s = { ...i };
          return (
            (this.element.width = i.width = this.element.offsetWidth * e),
            (this.element.height = i.height = this.element.offsetHeight * e),
            this.container.started &&
              (this.resizeFactor = {
                width: i.width / s.width,
                height: i.height / s.height,
              }),
            !0
          );
        }
        stop() {
          this._safeMutationObserver((t) => t.disconnect()),
            (this._mutationObserver = void 0),
            this.draw((t) => (0, o.ZH)(t, this.size));
        }
        async windowResize() {
          if (!this.element || !this.resize()) return;
          let t = this.container,
            e = t.updateActualOptions();
          t.particles.setDensity(),
            this._applyResizePlugins(),
            e && (await t.refresh());
        }
      }
      function l(t, e, i, n, o) {
        if (n) {
          let n = { passive: !0 };
          (0, s.jn)(o) ? (n.capture = o) : void 0 !== o && (n = o),
            t.addEventListener(e, i, n);
        } else t.removeEventListener(e, i, o);
      }
      class c {
        constructor(t) {
          (this.container = t),
            (this._doMouseTouchClick = (t) => {
              let e = this.container,
                i = e.actualOptions;
              if (this._canPush) {
                let t = e.interactivity.mouse,
                  n = t.position;
                if (!n) return;
                (t.clickPosition = { ...n }),
                  (t.clickTime = new Date().getTime());
                let o = i.interactivity.events.onClick;
                (0, s.KH)(o.mode, (t) => this.container.handleClickMode(t));
              }
              'touchend' === t.type &&
                setTimeout(() => this._mouseTouchFinish(), 500);
            }),
            (this._handleThemeChange = (t) => {
              let e = this.container,
                i = e.options,
                n = i.defaultThemes,
                s = t.matches ? n.dark : n.light,
                o = i.themes.find((t) => t.name === s);
              o && o.default.auto && e.loadTheme(s);
            }),
            (this._handleVisibilityChange = () => {
              let t = this.container,
                e = t.actualOptions;
              this._mouseTouchFinish(),
                e.pauseOnBlur &&
                  (document && document.hidden
                    ? ((t.pageHidden = !0), t.pause())
                    : ((t.pageHidden = !1),
                      t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
            }),
            (this._handleWindowResize = async () => {
              this._resizeTimeout &&
                (clearTimeout(this._resizeTimeout), delete this._resizeTimeout),
                (this._resizeTimeout = setTimeout(async () => {
                  let t = this.container.canvas;
                  t && (await t.windowResize());
                }, 1e3 * this.container.actualOptions.interactivity.events.resize.delay));
            }),
            (this._manageInteractivityListeners = (t, e) => {
              let i = this._handlers,
                s = this.container,
                o = s.actualOptions,
                a = s.interactivity.element;
              if (!a) return;
              let r = s.canvas.element;
              r && (r.style.pointerEvents = a === r ? 'initial' : 'none'),
                (o.interactivity.events.onHover.enable ||
                  o.interactivity.events.onClick.enable) &&
                  (l(a, n.Wt, i.mouseMove, e),
                  l(a, n.Re, i.touchStart, e),
                  l(a, n.zX, i.touchMove, e),
                  o.interactivity.events.onClick.enable
                    ? (l(a, n.$o, i.touchEndClick, e),
                      l(a, n.zw, i.mouseUp, e),
                      l(a, n.ZL, i.mouseDown, e))
                    : l(a, n.$o, i.touchEnd, e),
                  l(a, t, i.mouseLeave, e),
                  l(a, n.VH, i.touchCancel, e));
            }),
            (this._manageListeners = (t) => {
              let e = this._handlers,
                i = this.container,
                s = i.actualOptions,
                o = s.interactivity.detectsOn,
                a = i.canvas.element,
                r = n.aM;
              'window' === o
                ? ((i.interactivity.element = window), (r = n.G1))
                : 'parent' === o && a
                  ? (i.interactivity.element = a.parentElement ?? a.parentNode)
                  : (i.interactivity.element = a),
                this._manageMediaMatch(t),
                this._manageResize(t),
                this._manageInteractivityListeners(r, t),
                document && l(document, n.QL, e.visibilityChange, t, !1);
            }),
            (this._manageMediaMatch = (t) => {
              let e = this._handlers,
                i = (0, s.HY)('(prefers-color-scheme: dark)');
              if (i) {
                if (void 0 !== i.addEventListener) {
                  l(i, 'change', e.themeChange, t);
                  return;
                }
                void 0 !== i.addListener &&
                  (t
                    ? i.addListener(e.oldThemeChange)
                    : i.removeListener(e.oldThemeChange));
              }
            }),
            (this._manageResize = (t) => {
              let e = this._handlers,
                i = this.container,
                s = i.actualOptions;
              if (!s.interactivity.events.resize) return;
              if ('undefined' == typeof ResizeObserver) {
                l(window, n.rR, e.resize, t);
                return;
              }
              let o = i.canvas.element;
              this._resizeObserver && !t
                ? (o && this._resizeObserver.unobserve(o),
                  this._resizeObserver.disconnect(),
                  delete this._resizeObserver)
                : !this._resizeObserver &&
                  t &&
                  o &&
                  ((this._resizeObserver = new ResizeObserver(async (t) => {
                    let e = t.find((t) => t.target === o);
                    e && (await this._handleWindowResize());
                  })),
                  this._resizeObserver.observe(o));
            }),
            (this._mouseDown = () => {
              let { interactivity: t } = this.container;
              if (!t) return;
              let { mouse: e } = t;
              (e.clicking = !0), (e.downPosition = e.position);
            }),
            (this._mouseTouchClick = (t) => {
              let e = this.container,
                i = e.actualOptions,
                { mouse: n } = e.interactivity;
              n.inside = !0;
              let s = !1,
                o = n.position;
              if (o && i.interactivity.events.onClick.enable) {
                for (let [, t] of e.plugins)
                  if (t.clickPositionValid && (s = t.clickPositionValid(o)))
                    break;
                s || this._doMouseTouchClick(t), (n.clicking = !1);
              }
            }),
            (this._mouseTouchFinish = () => {
              let t = this.container.interactivity;
              if (!t) return;
              let e = t.mouse;
              delete e.position,
                delete e.clickPosition,
                delete e.downPosition,
                (t.status = n.aM),
                (e.inside = !1),
                (e.clicking = !1);
            }),
            (this._mouseTouchMove = (t) => {
              let e;
              let i = this.container,
                s = i.actualOptions,
                o = i.interactivity,
                a = i.canvas.element;
              if (!o || !o.element) return;
              if (((o.mouse.inside = !0), t.type.startsWith('pointer'))) {
                if (((this._canPush = !0), o.element === window)) {
                  if (a) {
                    let i = a.getBoundingClientRect();
                    e = { x: t.clientX - i.left, y: t.clientY - i.top };
                  }
                } else if ('parent' === s.interactivity.detectsOn) {
                  let i = t.target,
                    n = t.currentTarget;
                  if (i && n && a) {
                    let s = i.getBoundingClientRect(),
                      o = n.getBoundingClientRect(),
                      r = a.getBoundingClientRect();
                    e = {
                      x: t.offsetX + 2 * s.left - (o.left + r.left),
                      y: t.offsetY + 2 * s.top - (o.top + r.top),
                    };
                  } else
                    e = {
                      x: t.offsetX ?? t.clientX,
                      y: t.offsetY ?? t.clientY,
                    };
                } else
                  t.target === a &&
                    (e = {
                      x: t.offsetX ?? t.clientX,
                      y: t.offsetY ?? t.clientY,
                    });
              } else if (((this._canPush = 'touchmove' !== t.type), a)) {
                let i = t.touches[t.touches.length - 1],
                  n = a.getBoundingClientRect();
                e = {
                  x: i.clientX - (n.left ?? 0),
                  y: i.clientY - (n.top ?? 0),
                };
              }
              let r = i.retina.pixelRatio;
              e && ((e.x *= r), (e.y *= r)),
                (o.mouse.position = e),
                (o.status = n.Wt);
            }),
            (this._touchEnd = (t) => {
              let e = Array.from(t.changedTouches);
              for (let t of e) this._touches.delete(t.identifier);
              this._mouseTouchFinish();
            }),
            (this._touchEndClick = (t) => {
              let e = Array.from(t.changedTouches);
              for (let t of e) this._touches.delete(t.identifier);
              this._mouseTouchClick(t);
            }),
            (this._touchStart = (t) => {
              let e = Array.from(t.changedTouches);
              for (let t of e)
                this._touches.set(t.identifier, performance.now());
              this._mouseTouchMove(t);
            }),
            (this._canPush = !0),
            (this._touches = new Map()),
            (this._handlers = {
              mouseDown: () => this._mouseDown(),
              mouseLeave: () => this._mouseTouchFinish(),
              mouseMove: (t) => this._mouseTouchMove(t),
              mouseUp: (t) => this._mouseTouchClick(t),
              touchStart: (t) => this._touchStart(t),
              touchMove: (t) => this._mouseTouchMove(t),
              touchEnd: (t) => this._touchEnd(t),
              touchCancel: (t) => this._touchEnd(t),
              touchEndClick: (t) => this._touchEndClick(t),
              visibilityChange: () => this._handleVisibilityChange(),
              themeChange: (t) => this._handleThemeChange(t),
              oldThemeChange: (t) => this._handleThemeChange(t),
              resize: () => {
                this._handleWindowResize();
              },
            });
        }
        addListeners() {
          this._manageListeners(!0);
        }
        removeListeners() {
          this._manageListeners(!1);
        }
      }
      var u = i(2665);
      class d {
        constructor() {
          (this.color = new u.O()),
            (this.color.value = ''),
            (this.image = ''),
            (this.position = ''),
            (this.repeat = ''),
            (this.size = ''),
            (this.opacity = 1);
        }
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = u.O.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image),
            void 0 !== t.position && (this.position = t.position),
            void 0 !== t.repeat && (this.repeat = t.repeat),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      }
      class h {
        constructor() {
          (this.color = new u.O()),
            (this.color.value = '#fff'),
            (this.opacity = 1);
        }
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = u.O.create(this.color, t.color)),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      }
      class p {
        constructor() {
          (this.composite = 'destination-out'),
            (this.cover = new h()),
            (this.enable = !1);
        }
        load(t) {
          if (t) {
            if (
              (void 0 !== t.composite && (this.composite = t.composite),
              void 0 !== t.cover)
            ) {
              let e = t.cover,
                i = (0, s.HD)(t.cover) ? { color: t.cover } : t.cover;
              this.cover.load(void 0 !== e.color ? e : { color: i });
            }
            void 0 !== t.enable && (this.enable = t.enable);
          }
        }
      }
      class f {
        constructor() {
          (this.enable = !0), (this.zIndex = 0);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.zIndex && (this.zIndex = t.zIndex));
        }
      }
      class m {
        constructor() {
          (this.enable = !1), (this.mode = []);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode));
        }
      }
      class g {
        constructor() {
          (this.selectors = []),
            (this.enable = !1),
            (this.mode = []),
            (this.type = 'circle');
        }
        get el() {
          return this.elementId;
        }
        set el(t) {
          this.elementId = t;
        }
        get elementId() {
          return this.ids;
        }
        set elementId(t) {
          this.ids = t;
        }
        get ids() {
          return (0, s.KH)(this.selectors, (t) => t.replace('#', ''));
        }
        set ids(t) {
          this.selectors = (0, s.KH)(t, (t) => `#${t}`);
        }
        load(t) {
          if (!t) return;
          let e = t.ids ?? t.elementId ?? t.el;
          void 0 !== e && (this.ids = e),
            void 0 !== t.selectors && (this.selectors = t.selectors),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.type && (this.type = t.type);
        }
      }
      class y {
        constructor() {
          (this.enable = !1), (this.force = 2), (this.smooth = 10);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.force && (this.force = t.force),
            void 0 !== t.smooth && (this.smooth = t.smooth));
        }
      }
      class v {
        constructor() {
          (this.enable = !1), (this.mode = []), (this.parallax = new y());
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            this.parallax.load(t.parallax));
        }
      }
      class b {
        constructor() {
          (this.delay = 0.5), (this.enable = !0);
        }
        load(t) {
          void 0 !== t &&
            (void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.enable && (this.enable = t.enable));
        }
      }
      class w {
        constructor() {
          (this.onClick = new m()),
            (this.onDiv = new g()),
            (this.onHover = new v()),
            (this.resize = new b());
        }
        get onclick() {
          return this.onClick;
        }
        set onclick(t) {
          this.onClick = t;
        }
        get ondiv() {
          return this.onDiv;
        }
        set ondiv(t) {
          this.onDiv = t;
        }
        get onhover() {
          return this.onHover;
        }
        set onhover(t) {
          this.onHover = t;
        }
        load(t) {
          if (!t) return;
          this.onClick.load(t.onClick ?? t.onclick);
          let e = t.onDiv ?? t.ondiv;
          void 0 !== e &&
            (this.onDiv = (0, s.KH)(e, (t) => {
              let e = new g();
              return e.load(t), e;
            })),
            this.onHover.load(t.onHover ?? t.onhover),
            (0, s.jn)(t.resize)
              ? (this.resize.enable = t.resize)
              : this.resize.load(t.resize);
        }
      }
      class x {
        constructor(t, e) {
          (this._engine = t), (this._container = e);
        }
        load(t) {
          if (!t || !this._container) return;
          let e = this._engine.plugins.interactors.get(this._container);
          if (e)
            for (let i of e) i.loadModeOptions && i.loadModeOptions(this, t);
        }
      }
      class _ {
        constructor(t, e) {
          (this.detectsOn = 'window'),
            (this.events = new w()),
            (this.modes = new x(t, e));
        }
        get detect_on() {
          return this.detectsOn;
        }
        set detect_on(t) {
          this.detectsOn = t;
        }
        load(t) {
          if (!t) return;
          let e = t.detectsOn ?? t.detect_on;
          void 0 !== e && (this.detectsOn = e),
            this.events.load(t.events),
            this.modes.load(t.modes);
        }
      }
      class k {
        load(t) {
          t &&
            (t.position &&
              (this.position = {
                x: t.position.x ?? 50,
                y: t.position.y ?? 50,
                mode: t.position.mode ?? 'percent',
              }),
            t.options && (this.options = (0, s.ZB)({}, t.options)));
        }
      }
      class O {
        constructor() {
          (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = 'canvas');
        }
        load(t) {
          t &&
            (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
            void 0 !== t.mode &&
              ('screen' === t.mode
                ? (this.mode = 'screen')
                : (this.mode = 'canvas')),
            void 0 !== t.options && (this.options = (0, s.ZB)({}, t.options)));
        }
      }
      class P {
        constructor() {
          (this.auto = !1), (this.mode = 'any'), (this.value = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.auto && (this.auto = t.auto),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.value && (this.value = t.value));
        }
      }
      class C {
        constructor() {
          (this.name = ''), (this.default = new P());
        }
        load(t) {
          t &&
            (void 0 !== t.name && (this.name = t.name),
            this.default.load(t.default),
            void 0 !== t.options && (this.options = (0, s.ZB)({}, t.options)));
        }
      }
      var M = i(3201);
      class S {
        constructor() {
          (this.count = 0),
            (this.enable = !1),
            (this.offset = 0),
            (this.speed = 1),
            (this.delay = 0),
            (this.decay = 0),
            (this.sync = !0);
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = (0, M.Cs)(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset && (this.offset = (0, M.Cs)(t.offset)),
            void 0 !== t.speed && (this.speed = (0, M.Cs)(t.speed)),
            void 0 !== t.decay && (this.decay = (0, M.Cs)(t.decay)),
            void 0 !== t.delay && (this.delay = (0, M.Cs)(t.delay)),
            void 0 !== t.sync && (this.sync = t.sync));
        }
      }
      class z {
        constructor() {
          (this.h = new S()), (this.s = new S()), (this.l = new S());
        }
        load(t) {
          t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
        }
      }
      class T extends u.O {
        constructor() {
          super(), (this.animation = new z());
        }
        static create(t, e) {
          let i = new T();
          return (
            i.load(t),
            void 0 !== e &&
              ((0, s.HD)(e) || (0, s.kJ)(e) ? i.load({ value: e }) : i.load(e)),
            i
          );
        }
        load(t) {
          if ((super.load(t), !t)) return;
          let e = t.animation;
          void 0 !== e &&
            (void 0 !== e.enable
              ? this.animation.h.load(e)
              : this.animation.load(t.animation));
        }
      }
      class E {
        constructor() {
          this.speed = 2;
        }
        load(t) {
          t && void 0 !== t.speed && (this.speed = t.speed);
        }
      }
      class R {
        constructor() {
          (this.enable = !0), (this.retries = 0);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.retries && (this.retries = t.retries));
        }
      }
      var I = i(1050);
      class D extends I.SW {
        constructor() {
          super(), (this.random.minimumValue = 0.1), (this.value = 1);
        }
      }
      class A {
        constructor() {
          (this.horizontal = new D()), (this.vertical = new D());
        }
        load(t) {
          t &&
            (this.horizontal.load(t.horizontal),
            this.vertical.load(t.vertical));
        }
      }
      class j {
        constructor() {
          (this.absorb = new E()),
            (this.bounce = new A()),
            (this.enable = !1),
            (this.maxSpeed = 50),
            (this.mode = 'bounce'),
            (this.overlap = new R());
        }
        load(t) {
          t &&
            (this.absorb.load(t.absorb),
            this.bounce.load(t.bounce),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.maxSpeed && (this.maxSpeed = (0, M.Cs)(t.maxSpeed)),
            void 0 !== t.mode && (this.mode = t.mode),
            this.overlap.load(t.overlap));
        }
      }
      class L {
        constructor() {
          (this.offset = 0), (this.value = 90);
        }
        load(t) {
          t &&
            (void 0 !== t.offset && (this.offset = (0, M.Cs)(t.offset)),
            void 0 !== t.value && (this.value = (0, M.Cs)(t.value)));
        }
      }
      class F {
        constructor() {
          (this.distance = 200),
            (this.enable = !1),
            (this.rotate = { x: 3e3, y: 3e3 });
        }
        get rotateX() {
          return this.rotate.x;
        }
        set rotateX(t) {
          this.rotate.x = t;
        }
        get rotateY() {
          return this.rotate.y;
        }
        set rotateY(t) {
          this.rotate.y = t;
        }
        load(t) {
          if (!t) return;
          void 0 !== t.distance && (this.distance = (0, M.Cs)(t.distance)),
            void 0 !== t.enable && (this.enable = t.enable);
          let e = t.rotate?.x ?? t.rotateX;
          void 0 !== e && (this.rotate.x = e);
          let i = t.rotate?.y ?? t.rotateY;
          void 0 !== i && (this.rotate.y = i);
        }
      }
      class B {
        constructor() {
          (this.x = 50),
            (this.y = 50),
            (this.mode = 'percent'),
            (this.radius = 0);
        }
        load(t) {
          t &&
            (void 0 !== t.x && (this.x = t.x),
            void 0 !== t.y && (this.y = t.y),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.radius && (this.radius = t.radius));
        }
      }
      class V {
        constructor() {
          (this.acceleration = 9.81),
            (this.enable = !1),
            (this.inverse = !1),
            (this.maxSpeed = 50);
        }
        load(t) {
          t &&
            (void 0 !== t.acceleration &&
              (this.acceleration = (0, M.Cs)(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.inverse && (this.inverse = t.inverse),
            void 0 !== t.maxSpeed && (this.maxSpeed = (0, M.Cs)(t.maxSpeed)));
        }
      }
      class q {
        constructor() {
          (this.clamp = !0),
            (this.delay = new I.SW()),
            (this.enable = !1),
            (this.options = {});
        }
        load(t) {
          t &&
            (void 0 !== t.clamp && (this.clamp = t.clamp),
            this.delay.load(t.delay),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.generator = t.generator),
            t.options && (this.options = (0, s.ZB)(this.options, t.options)));
        }
      }
      class W {
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = u.O.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image));
        }
      }
      class H {
        constructor() {
          (this.enable = !1), (this.length = 10), (this.fill = new W());
        }
        get fillColor() {
          return this.fill.color;
        }
        set fillColor(t) {
          this.fill.load({ color: t });
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            (void 0 !== t.fill || void 0 !== t.fillColor) &&
              this.fill.load(t.fill || { color: t.fillColor }),
            void 0 !== t.length && (this.length = t.length));
        }
      }
      class N {
        constructor() {
          this.default = 'out';
        }
        load(t) {
          t &&
            (void 0 !== t.default && (this.default = t.default),
            (this.bottom = t.bottom ?? t.default),
            (this.left = t.left ?? t.default),
            (this.right = t.right ?? t.default),
            (this.top = t.top ?? t.default));
        }
      }
      class U {
        constructor() {
          (this.acceleration = 0), (this.enable = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.acceleration &&
              (this.acceleration = (0, M.Cs)(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            t.position && (this.position = (0, s.ZB)({}, t.position)));
        }
      }
      class G {
        constructor() {
          (this.angle = new L()),
            (this.attract = new F()),
            (this.center = new B()),
            (this.decay = 0),
            (this.distance = {}),
            (this.direction = 'none'),
            (this.drift = 0),
            (this.enable = !1),
            (this.gravity = new V()),
            (this.path = new q()),
            (this.outModes = new N()),
            (this.random = !1),
            (this.size = !1),
            (this.speed = 2),
            (this.spin = new U()),
            (this.straight = !1),
            (this.trail = new H()),
            (this.vibrate = !1),
            (this.warp = !1);
        }
        get bounce() {
          return this.collisions;
        }
        set bounce(t) {
          this.collisions = t;
        }
        get collisions() {
          return !1;
        }
        set collisions(t) {}
        get noise() {
          return this.path;
        }
        set noise(t) {
          this.path = t;
        }
        get outMode() {
          return this.outModes.default;
        }
        set outMode(t) {
          this.outModes.default = t;
        }
        get out_mode() {
          return this.outMode;
        }
        set out_mode(t) {
          this.outMode = t;
        }
        load(t) {
          if (!t) return;
          this.angle.load((0, s.hj)(t.angle) ? { value: t.angle } : t.angle),
            this.attract.load(t.attract),
            this.center.load(t.center),
            void 0 !== t.decay && (this.decay = (0, M.Cs)(t.decay)),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.distance &&
              (this.distance = (0, s.hj)(t.distance)
                ? { horizontal: t.distance, vertical: t.distance }
                : { ...t.distance }),
            void 0 !== t.drift && (this.drift = (0, M.Cs)(t.drift)),
            void 0 !== t.enable && (this.enable = t.enable),
            this.gravity.load(t.gravity);
          let e = t.outModes ?? t.outMode ?? t.out_mode;
          void 0 !== e &&
            ((0, s.Kn)(e)
              ? this.outModes.load(e)
              : this.outModes.load({ default: e })),
            this.path.load(t.path ?? t.noise),
            void 0 !== t.random && (this.random = t.random),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.speed && (this.speed = (0, M.Cs)(t.speed)),
            this.spin.load(t.spin),
            void 0 !== t.straight && (this.straight = t.straight),
            this.trail.load(t.trail),
            void 0 !== t.vibrate && (this.vibrate = t.vibrate),
            void 0 !== t.warp && (this.warp = t.warp);
        }
      }
      class Z {
        constructor() {
          (this.count = 0),
            (this.enable = !1),
            (this.speed = 1),
            (this.decay = 0),
            (this.delay = 0),
            (this.sync = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = (0, M.Cs)(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, M.Cs)(t.speed)),
            void 0 !== t.decay && (this.decay = (0, M.Cs)(t.decay)),
            void 0 !== t.delay && (this.delay = (0, M.Cs)(t.delay)),
            void 0 !== t.sync && (this.sync = t.sync));
        }
      }
      class $ extends Z {
        constructor() {
          super(), (this.mode = 'auto'), (this.startValue = 'random');
        }
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.minimumValue &&
                (this.minimumValue = t.minimumValue),
              void 0 !== t.mode && (this.mode = t.mode),
              void 0 !== t.startValue && (this.startValue = t.startValue));
        }
      }
      class Y extends $ {
        constructor() {
          super(), (this.destroy = 'none'), (this.speed = 2);
        }
        get opacity_min() {
          return this.minimumValue;
        }
        set opacity_min(t) {
          this.minimumValue = t;
        }
        load(t) {
          t?.opacity_min !== void 0 &&
            void 0 === t.minimumValue &&
            (t.minimumValue = t.opacity_min),
            super.load(t),
            t && void 0 !== t.destroy && (this.destroy = t.destroy);
        }
      }
      class K extends I.SW {
        constructor() {
          super(),
            (this.animation = new Y()),
            (this.random.minimumValue = 0.1),
            (this.value = 1);
        }
        get anim() {
          return this.animation;
        }
        set anim(t) {
          this.animation = t;
        }
        load(t) {
          if (!t) return;
          super.load(t);
          let e = t.animation ?? t.anim;
          void 0 !== e &&
            (this.animation.load(e),
            (this.value = (0, M.Cs)(
              this.value,
              this.animation.enable ? this.animation.minimumValue : void 0,
            )));
        }
      }
      class X {
        constructor() {
          (this.enable = !1), (this.width = 1920), (this.height = 1080);
        }
        get area() {
          return this.width;
        }
        set area(t) {
          this.width = t;
        }
        get factor() {
          return this.height;
        }
        set factor(t) {
          this.height = t;
        }
        get value_area() {
          return this.area;
        }
        set value_area(t) {
          this.area = t;
        }
        load(t) {
          if (!t) return;
          void 0 !== t.enable && (this.enable = t.enable);
          let e = t.width ?? t.area ?? t.value_area;
          void 0 !== e && (this.width = e);
          let i = t.height ?? t.factor;
          void 0 !== i && (this.height = i);
        }
      }
      class J {
        constructor() {
          (this.density = new X()), (this.limit = 0), (this.value = 0);
        }
        get max() {
          return this.limit;
        }
        set max(t) {
          this.limit = t;
        }
        load(t) {
          if (!t) return;
          this.density.load(t.density);
          let e = t.limit ?? t.max;
          void 0 !== e && (this.limit = e),
            void 0 !== t.value && (this.value = t.value);
        }
      }
      class Q {
        constructor() {
          (this.blur = 0),
            (this.color = new u.O()),
            (this.enable = !1),
            (this.offset = { x: 0, y: 0 }),
            (this.color.value = '#000');
        }
        load(t) {
          t &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = u.O.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset &&
              (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
              void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
        }
      }
      let tt = 'character',
        te = 'char',
        ti = 'image',
        tn = 'images',
        ts = 'polygon',
        to = 'star';
      class ta {
        constructor() {
          (this.loadShape = (t, e, i, n) => {
            if (!t) return;
            let o = (0, s.kJ)(t),
              a = o ? [] : {},
              r = o !== (0, s.kJ)(this.options[e]),
              l = o !== (0, s.kJ)(this.options[i]);
            r && (this.options[e] = a),
              l && n && (this.options[i] = a),
              (this.options[e] = (0, s.ZB)(this.options[e] ?? a, t)),
              (!this.options[i] || n) &&
                (this.options[i] = (0, s.ZB)(this.options[i] ?? a, t));
          }),
            (this.close = !0),
            (this.fill = !0),
            (this.options = {}),
            (this.type = 'circle');
        }
        get character() {
          return this.options[tt] ?? this.options[te];
        }
        set character(t) {
          this.options[te] = this.options[tt] = t;
        }
        get custom() {
          return this.options;
        }
        set custom(t) {
          this.options = t;
        }
        get image() {
          return this.options[ti] ?? this.options[tn];
        }
        set image(t) {
          this.options[tn] = this.options[ti] = t;
        }
        get images() {
          return this.image;
        }
        set images(t) {
          this.image = t;
        }
        get polygon() {
          return this.options[ts] ?? this.options[to];
        }
        set polygon(t) {
          this.options[to] = this.options[ts] = t;
        }
        get stroke() {
          return [];
        }
        set stroke(t) {}
        load(t) {
          if (!t) return;
          let e = t.options ?? t.custom;
          if (void 0 !== e)
            for (let t in e) {
              let i = e[t];
              i && (this.options[t] = (0, s.ZB)(this.options[t] ?? {}, i));
            }
          this.loadShape(t.character, tt, te, !0),
            this.loadShape(t.polygon, ts, to, !1),
            this.loadShape(t.image ?? t.images, ti, tn, !0),
            void 0 !== t.close && (this.close = t.close),
            void 0 !== t.fill && (this.fill = t.fill),
            void 0 !== t.type && (this.type = t.type);
        }
      }
      class tr extends $ {
        constructor() {
          super(), (this.destroy = 'none'), (this.speed = 5);
        }
        get size_min() {
          return this.minimumValue;
        }
        set size_min(t) {
          this.minimumValue = t;
        }
        load(t) {
          t?.size_min !== void 0 &&
            void 0 === t.minimumValue &&
            (t.minimumValue = t.size_min),
            super.load(t),
            t && void 0 !== t.destroy && (this.destroy = t.destroy);
        }
      }
      class tl extends I.SW {
        constructor() {
          super(),
            (this.animation = new tr()),
            (this.random.minimumValue = 1),
            (this.value = 3);
        }
        get anim() {
          return this.animation;
        }
        set anim(t) {
          this.animation = t;
        }
        load(t) {
          if ((super.load(t), !t)) return;
          let e = t.animation ?? t.anim;
          void 0 !== e &&
            (this.animation.load(e),
            (this.value = (0, M.Cs)(
              this.value,
              this.animation.enable ? this.animation.minimumValue : void 0,
            )));
        }
      }
      class tc {
        constructor() {
          this.width = 0;
        }
        load(t) {
          t &&
            (void 0 !== t.color && (this.color = T.create(this.color, t.color)),
            void 0 !== t.width && (this.width = (0, M.Cs)(t.width)),
            void 0 !== t.opacity && (this.opacity = (0, M.Cs)(t.opacity)));
        }
      }
      class tu extends I.SW {
        constructor() {
          super(),
            (this.opacityRate = 1),
            (this.sizeRate = 1),
            (this.velocityRate = 1);
        }
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
              void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
              void 0 !== t.velocityRate &&
                (this.velocityRate = t.velocityRate));
        }
      }
      class td {
        constructor(t, e) {
          (this._engine = t),
            (this._container = e),
            (this.bounce = new A()),
            (this.collisions = new j()),
            (this.color = new T()),
            (this.color.value = '#fff'),
            (this.groups = {}),
            (this.move = new G()),
            (this.number = new J()),
            (this.opacity = new K()),
            (this.reduceDuplicates = !1),
            (this.shadow = new Q()),
            (this.shape = new ta()),
            (this.size = new tl()),
            (this.stroke = new tc()),
            (this.zIndex = new tu());
        }
        load(t) {
          if (!t) return;
          if (
            (this.bounce.load(t.bounce),
            this.color.load(T.create(this.color, t.color)),
            void 0 !== t.groups)
          )
            for (let e in t.groups) {
              let i = t.groups[e];
              void 0 !== i &&
                (this.groups[e] = (0, s.ZB)(this.groups[e] ?? {}, i));
            }
          this.move.load(t.move),
            this.number.load(t.number),
            this.opacity.load(t.opacity),
            void 0 !== t.reduceDuplicates &&
              (this.reduceDuplicates = t.reduceDuplicates),
            this.shape.load(t.shape),
            this.size.load(t.size),
            this.shadow.load(t.shadow),
            this.zIndex.load(t.zIndex);
          let e = t.move?.collisions ?? t.move?.bounce;
          void 0 !== e && (this.collisions.enable = e),
            this.collisions.load(t.collisions),
            void 0 !== t.interactivity &&
              (this.interactivity = (0, s.ZB)({}, t.interactivity));
          let i = t.stroke ?? t.shape?.stroke;
          if (
            (i &&
              (this.stroke = (0, s.KH)(i, (t) => {
                let e = new tc();
                return e.load(t), e;
              })),
            this._container)
          ) {
            let e = this._engine.plugins.updaters.get(this._container);
            if (e) for (let i of e) i.loadOptions && i.loadOptions(this, t);
            let i = this._engine.plugins.interactors.get(this._container);
            if (i)
              for (let e of i)
                e.loadParticlesOptions && e.loadParticlesOptions(this, t);
          }
        }
      }
      function th(t, ...e) {
        for (let i of e) t.load(i);
      }
      function tp(t, e, ...i) {
        let n = new td(t, e);
        return th(n, ...i), n;
      }
      class tf {
        constructor(t, e) {
          (this._findDefaultTheme = (t) =>
            this.themes.find((e) => e.default.value && e.default.mode === t) ??
            this.themes.find(
              (t) => t.default.value && 'any' === t.default.mode,
            )),
            (this._importPreset = (t) => {
              this.load(this._engine.plugins.getPreset(t));
            }),
            (this._engine = t),
            (this._container = e),
            (this.autoPlay = !0),
            (this.background = new d()),
            (this.backgroundMask = new p()),
            (this.defaultThemes = {}),
            (this.delay = 0),
            (this.fullScreen = new f()),
            (this.detectRetina = !0),
            (this.duration = 0),
            (this.fpsLimit = 120),
            (this.interactivity = new _(t, e)),
            (this.manualParticles = []),
            (this.particles = tp(this._engine, this._container)),
            (this.pauseOnBlur = !0),
            (this.pauseOnOutsideViewport = !0),
            (this.responsive = []),
            (this.smooth = !1),
            (this.style = {}),
            (this.themes = []),
            (this.zLayers = 100);
        }
        get backgroundMode() {
          return this.fullScreen;
        }
        set backgroundMode(t) {
          this.fullScreen.load(t);
        }
        get fps_limit() {
          return this.fpsLimit;
        }
        set fps_limit(t) {
          this.fpsLimit = t;
        }
        get retina_detect() {
          return this.detectRetina;
        }
        set retina_detect(t) {
          this.detectRetina = t;
        }
        load(t) {
          if (!t) return;
          void 0 !== t.preset &&
            (0, s.KH)(t.preset, (t) => this._importPreset(t)),
            void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
            void 0 !== t.delay && (this.delay = (0, M.Cs)(t.delay));
          let e = t.detectRetina ?? t.retina_detect;
          void 0 !== e && (this.detectRetina = e),
            void 0 !== t.duration && (this.duration = (0, M.Cs)(t.duration));
          let i = t.fpsLimit ?? t.fps_limit;
          void 0 !== i && (this.fpsLimit = i),
            void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
            void 0 !== t.pauseOnOutsideViewport &&
              (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
            void 0 !== t.zLayers && (this.zLayers = t.zLayers),
            this.background.load(t.background);
          let n = t.fullScreen ?? t.backgroundMode;
          (0, s.jn)(n) ? (this.fullScreen.enable = n) : this.fullScreen.load(n),
            this.backgroundMask.load(t.backgroundMask),
            this.interactivity.load(t.interactivity),
            t.manualParticles &&
              (this.manualParticles = t.manualParticles.map((t) => {
                let e = new k();
                return e.load(t), e;
              })),
            this.particles.load(t.particles),
            (this.style = (0, s.ZB)(this.style, t.style)),
            this._engine.plugins.loadOptions(this, t),
            void 0 !== t.smooth && (this.smooth = t.smooth);
          let o = this._engine.plugins.interactors.get(this._container);
          if (o) for (let e of o) e.loadOptions && e.loadOptions(this, t);
          if (void 0 !== t.responsive)
            for (let e of t.responsive) {
              let t = new O();
              t.load(e), this.responsive.push(t);
            }
          if (
            (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
            void 0 !== t.themes)
          )
            for (let e of t.themes) {
              let t = this.themes.find((t) => t.name === e.name);
              if (t) t.load(e);
              else {
                let t = new C();
                t.load(e), this.themes.push(t);
              }
            }
          (this.defaultThemes.dark = this._findDefaultTheme('dark')?.name),
            (this.defaultThemes.light = this._findDefaultTheme('light')?.name);
        }
        setResponsive(t, e, i) {
          this.load(i);
          let n = this.responsive.find((i) =>
            'screen' === i.mode && screen
              ? i.maxWidth > screen.availWidth
              : i.maxWidth * e > t,
          );
          return this.load(n?.options), n?.maxWidth;
        }
        setTheme(t) {
          if (t) {
            let e = this.themes.find((e) => e.name === t);
            e && this.load(e.options);
          } else {
            let t = (0, s.HY)('(prefers-color-scheme: dark)'),
              e = t && t.matches,
              i = this._findDefaultTheme(e ? 'dark' : 'light');
            i && this.load(i.options);
          }
        }
      }
      class tm {
        constructor(t, e) {
          (this.container = e),
            (this._engine = t),
            (this._interactors = t.plugins.getInteractors(this.container, !0)),
            (this._externalInteractors = []),
            (this._particleInteractors = []);
        }
        async externalInteract(t) {
          for (let e of this._externalInteractors)
            e.isEnabled() && (await e.interact(t));
        }
        handleClickMode(t) {
          for (let e of this._externalInteractors)
            e.handleClickMode && e.handleClickMode(t);
        }
        init() {
          for (let t of ((this._externalInteractors = []),
          (this._particleInteractors = []),
          this._interactors)) {
            switch (t.type) {
              case 'external':
                this._externalInteractors.push(t);
                break;
              case 'particles':
                this._particleInteractors.push(t);
            }
            t.init();
          }
        }
        async particlesInteract(t, e) {
          for (let i of this._externalInteractors) i.clear(t, e);
          for (let i of this._particleInteractors)
            i.isEnabled(t) && (await i.interact(t, e));
        }
        async reset(t) {
          for (let e of this._externalInteractors) e.isEnabled() && e.reset(t);
          for (let e of this._particleInteractors) e.isEnabled(t) && e.reset(t);
        }
      }
      var tg = i(6290),
        ty = i(1190);
      let tv = (t) => {
        if (!(0, s.dB)(t.outMode, t.checkModes)) return;
        let e = 2 * t.radius;
        t.coord > t.maxCoord - e
          ? t.setCb(-t.radius)
          : t.coord < e && t.setCb(t.radius);
      };
      class tb {
        constructor(t, e, i, a, r, l) {
          (this.container = i),
            (this._calcPosition = (t, e, i, n = 0) => {
              for (let [, n] of t.plugins) {
                let t =
                  void 0 !== n.particlePosition
                    ? n.particlePosition(e, this)
                    : void 0;
                if (t) return ty.U.create(t.x, t.y, i);
              }
              let s = t.canvas.size,
                o = (0, M.mC)({ size: s, position: e }),
                a = ty.U.create(o.x, o.y, i),
                r = this.getRadius(),
                l = this.options.move.outModes,
                c = (e) => {
                  tv({
                    outMode: e,
                    checkModes: ['bounce', 'bounce-horizontal'],
                    coord: a.x,
                    maxCoord: t.canvas.size.width,
                    setCb: (t) => (a.x += t),
                    radius: r,
                  });
                },
                u = (e) => {
                  tv({
                    outMode: e,
                    checkModes: ['bounce', 'bounce-vertical'],
                    coord: a.y,
                    maxCoord: t.canvas.size.height,
                    setCb: (t) => (a.y += t),
                    radius: r,
                  });
                };
              return (c(l.left ?? l.default),
              c(l.right ?? l.default),
              u(l.top ?? l.default),
              u(l.bottom ?? l.default),
              this._checkOverlap(a, n))
                ? this._calcPosition(t, void 0, i, n + 1)
                : a;
            }),
            (this._calculateVelocity = () => {
              let t = (0, M.lQ)(this.direction),
                e = t.copy(),
                i = this.options.move;
              if ('inside' === i.direction || 'outside' === i.direction)
                return e;
              let n = (Math.PI / 180) * (0, M.Gu)(i.angle.value),
                s = (Math.PI / 180) * (0, M.Gu)(i.angle.offset),
                o = { left: s - n / 2, right: s + n / 2 };
              return (
                i.straight ||
                  (e.angle += (0, M.vd)((0, M.Cs)(o.left, o.right))),
                i.random &&
                  'number' == typeof i.speed &&
                  (e.length *= (0, M.sZ)()),
                e
              );
            }),
            (this._checkOverlap = (t, e = 0) => {
              let i = this.options.collisions,
                s = this.getRadius();
              if (!i.enable) return !1;
              let o = i.overlap;
              if (o.enable) return !1;
              let a = o.retries;
              if (a >= 0 && e > a)
                throw Error(
                  `${n.gK} particle is overlapping and can't be placed`,
                );
              return !!this.container.particles.find(
                (e) => (0, M.Sp)(t, e.position) < s + e.getRadius(),
              );
            }),
            (this._getRollColor = (t) => {
              if (!t || !this.roll || (!this.backColor && !this.roll.alter))
                return t;
              let e = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                i = this.roll.horizontal ? Math.PI / 2 : 0,
                n =
                  Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / e)) % 2;
              return n
                ? this.backColor
                  ? this.backColor
                  : this.roll.alter
                    ? (0, o.PL)(t, this.roll.alter.type, this.roll.alter.value)
                    : t
                : t;
            }),
            (this._initPosition = (t) => {
              let e = this.container,
                i = (0, M.Gu)(this.options.zIndex.value);
              (this.position = this._calcPosition(
                e,
                t,
                (0, M.uZ)(i, 0, e.zLayers),
              )),
                (this.initialPosition = this.position.copy());
              let n = e.canvas.size;
              switch (
                ((this.moveCenter = {
                  ...(0, s.bt)(this.options.move.center, n),
                  radius: this.options.move.center.radius ?? 0,
                  mode: this.options.move.center.mode ?? 'percent',
                }),
                (this.direction = (0, M.Gk)(
                  this.options.move.direction,
                  this.position,
                  this.moveCenter,
                )),
                this.options.move.direction)
              ) {
                case 'inside':
                  this.outType = 'inside';
                  break;
                case 'outside':
                  this.outType = 'outside';
              }
              this.offset = tg.O.origin;
            }),
            (this._loadShapeData = (t, e) => {
              let i = t.options[this.shape];
              if (i)
                return (0, s.ZB)(
                  { close: t.close, fill: t.fill },
                  (0, s.wA)(i, this.id, e),
                );
            }),
            (this._engine = t),
            this.init(e, a, r, l);
        }
        destroy(t) {
          if (this.unbreakable || this.destroyed) return;
          (this.destroyed = !0),
            (this.bubble.inRange = !1),
            (this.slow.inRange = !1);
          let e = this.container,
            i = this.pathGenerator;
          for (let [, i] of e.plugins)
            i.particleDestroyed && i.particleDestroyed(this, t);
          for (let i of e.particles.updaters)
            i.particleDestroyed && i.particleDestroyed(this, t);
          i && i.reset(this);
        }
        draw(t) {
          let e = this.container;
          for (let [, i] of e.plugins) e.canvas.drawParticlePlugin(i, this, t);
          e.canvas.drawParticle(this, t);
        }
        getFillColor() {
          return this._getRollColor(this.bubble.color ?? (0, a.gW)(this.color));
        }
        getMass() {
          return (this.getRadius() ** 2 * Math.PI) / 2;
        }
        getPosition() {
          return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
          };
        }
        getRadius() {
          return this.bubble.radius ?? this.size.value;
        }
        getStrokeColor() {
          return this._getRollColor(
            this.bubble.color ?? (0, a.gW)(this.strokeColor),
          );
        }
        init(t, e, i, n) {
          let o = this.container,
            r = this._engine;
          (this.id = t),
            (this.group = n),
            (this.fill = !0),
            (this.pathRotation = !1),
            (this.close = !0),
            (this.lastPathTime = 0),
            (this.destroyed = !1),
            (this.unbreakable = !1),
            (this.rotation = 0),
            (this.misplaced = !1),
            (this.retina = { maxDistance: {} }),
            (this.outType = 'normal'),
            (this.ignoresResizeRatio = !0);
          let l = o.retina.pixelRatio,
            c = o.actualOptions,
            u = tp(this._engine, o, c.particles),
            d = u.shape.type,
            { reduceDuplicates: h } = u;
          this.shape = (0, s.wA)(d, this.id, h);
          let p = u.shape;
          if (i && i.shape && i.shape.type) {
            let t = i.shape.type,
              e = (0, s.wA)(t, this.id, h);
            e && ((this.shape = e), p.load(i.shape));
          }
          (this.shapeData = this._loadShapeData(p, h)), u.load(i);
          let f = this.shapeData;
          f && u.load(f.particles);
          let m = new _(r, o);
          m.load(o.actualOptions.interactivity),
            m.load(u.interactivity),
            (this.interactivity = m),
            (this.fill = f?.fill ?? u.shape.fill),
            (this.close = f?.close ?? u.shape.close),
            (this.options = u);
          let g = this.options.move.path;
          (this.pathDelay = 1e3 * (0, M.NA)(g.delay)),
            g.generator &&
              ((this.pathGenerator = this._engine.plugins.getPathGenerator(
                g.generator,
              )),
              this.pathGenerator &&
                o.addPath(g.generator, this.pathGenerator) &&
                this.pathGenerator.init(o)),
            o.retina.initParticle(this),
            (this.size = (0, s.V0)(this.options.size, l)),
            (this.bubble = { inRange: !1 }),
            (this.slow = { inRange: !1, factor: 1 }),
            this._initPosition(e),
            (this.initialVelocity = this._calculateVelocity()),
            (this.velocity = this.initialVelocity.copy()),
            (this.moveDecay = 1 - (0, M.Gu)(this.options.move.decay));
          let y = o.particles;
          (y.needsSort = y.needsSort || y.lastZIndex < this.position.z),
            (y.lastZIndex = this.position.z),
            (this.zIndexFactor = this.position.z / o.zLayers),
            (this.sides = 24);
          let v = o.drawers.get(this.shape);
          !v &&
            (v = this._engine.plugins.getShapeDrawer(this.shape)) &&
            o.drawers.set(this.shape, v),
            v && v.loadShape && v.loadShape(this);
          let b = v?.getSidesCount;
          for (let t of (b && (this.sides = b(this)),
          (this.spawning = !1),
          (this.shadowColor = (0, a.tX)(this.options.shadow.color)),
          o.particles.updaters))
            t.init(this);
          for (let t of o.particles.movers) t.init && t.init(this);
          for (let [, t] of (v && v.particleInit && v.particleInit(o, this),
          o.plugins))
            t.particleCreated && t.particleCreated(this);
        }
        isInsideCanvas() {
          let t = this.getRadius(),
            e = this.container.canvas.size,
            i = this.position;
          return (
            i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t
          );
        }
        isVisible() {
          return !this.destroyed && !this.spawning && this.isInsideCanvas();
        }
        reset() {
          for (let t of this.container.particles.updaters)
            t.reset && t.reset(this);
        }
      }
      class tw {
        constructor(t, e) {
          (this.position = t), (this.particle = e);
        }
      }
      var tx = i(2836),
        t_ = i(1995);
      class tk {
        constructor(t, e) {
          (this.rectangle = t),
            (this.capacity = e),
            (this._subdivide = () => {
              let { x: t, y: e } = this.rectangle.position,
                { width: i, height: n } = this.rectangle.size,
                { capacity: s } = this;
              for (let o = 0; o < 4; o++)
                this._subs.push(
                  new tk(
                    new t_.A(
                      t + (i / 2) * (o % 2),
                      e + (n / 2) * (Math.round(o / 2) - (o % 2)),
                      i / 2,
                      n / 2,
                    ),
                    s,
                  ),
                );
              this._divided = !0;
            }),
            (this._points = []),
            (this._divided = !1),
            (this._subs = []);
        }
        insert(t) {
          return (
            !!this.rectangle.contains(t.position) &&
            (this._points.length < this.capacity
              ? (this._points.push(t), !0)
              : (this._divided || this._subdivide(),
                this._subs.some((e) => e.insert(t))))
          );
        }
        query(t, e, i) {
          let n = i || [];
          if (!t.intersects(this.rectangle)) return [];
          for (let i of this._points)
            (!t.contains(i.position) &&
              (0, M.Sp)(t.position, i.position) > i.particle.getRadius() &&
              (!e || e(i.particle))) ||
              n.push(i.particle);
          if (this._divided) for (let i of this._subs) i.query(t, e, n);
          return n;
        }
        queryCircle(t, e, i) {
          return this.query(new tx.C(t.x, t.y, e), i);
        }
        queryRectangle(t, e, i) {
          return this.query(new t_.A(t.x, t.y, e.width, e.height), i);
        }
      }
      let tO = (t) =>
        new t_.A(
          -t.width / 4,
          -t.height / 4,
          (3 * t.width) / 2,
          (3 * t.height) / 2,
        );
      class tP {
        constructor(t, e) {
          (this._applyDensity = (t, e, i) => {
            if (!t.number.density?.enable) return;
            let n = t.number,
              s = this._initDensityFactor(n.density),
              o = n.value,
              a = n.limit > 0 ? n.limit : o,
              r = Math.min(o, a) * s + e,
              l = Math.min(
                this.count,
                this.filter((t) => t.group === i).length,
              );
            (this.limit = n.limit * s),
              l < r
                ? this.push(Math.abs(r - l), void 0, t, i)
                : l > r && this.removeQuantity(l - r, i);
          }),
            (this._initDensityFactor = (t) => {
              let e = this._container;
              if (!e.canvas.element || !t.enable) return 1;
              let i = e.canvas.element,
                n = e.retina.pixelRatio;
              return (i.width * i.height) / (t.factor * n ** 2 * t.area);
            }),
            (this._pushParticle = (t, e, i, o) => {
              try {
                let n = this.pool.pop();
                n
                  ? n.init(this._nextId, t, e, i)
                  : (n = new tb(
                      this._engine,
                      this._nextId,
                      this._container,
                      t,
                      e,
                      i,
                    ));
                let s = !0;
                if ((o && (s = o(n)), !s)) return;
                return (
                  this._array.push(n),
                  this._zArray.push(n),
                  this._nextId++,
                  this._engine.dispatchEvent('particleAdded', {
                    container: this._container,
                    data: { particle: n },
                  }),
                  n
                );
              } catch (t) {
                (0, s.jl)().warning(`${n.gK} adding particle: ${t}`);
                return;
              }
            }),
            (this._removeParticle = (t, e, i) => {
              let n = this._array[t];
              if (!n || n.group !== e) return !1;
              n.destroy(i);
              let s = this._zArray.indexOf(n);
              return (
                this._array.splice(t, 1),
                this._zArray.splice(s, 1),
                this.pool.push(n),
                this._engine.dispatchEvent('particleRemoved', {
                  container: this._container,
                  data: { particle: n },
                }),
                !0
              );
            }),
            (this._engine = t),
            (this._container = e),
            (this._nextId = 0),
            (this._array = []),
            (this._zArray = []),
            (this.pool = []),
            (this.limit = 0),
            (this.needsSort = !1),
            (this.lastZIndex = 0),
            (this._interactionManager = new tm(t, e));
          let i = e.canvas.size;
          (this.quadTree = new tk(tO(i), 4)),
            (this.movers = this._engine.plugins.getMovers(e, !0)),
            (this.updaters = this._engine.plugins.getUpdaters(e, !0));
        }
        get count() {
          return this._array.length;
        }
        addManualParticles() {
          let t = this._container,
            e = t.actualOptions;
          for (let i of e.manualParticles)
            this.addParticle(
              i.position ? (0, s.bt)(i.position, t.canvas.size) : void 0,
              i.options,
            );
        }
        addParticle(t, e, i, n) {
          let s = this._container,
            o = s.actualOptions,
            a = o.particles.number.limit;
          if (a > 0) {
            let t = this.count + 1 - a;
            t > 0 && this.removeQuantity(t);
          }
          return this._pushParticle(t, e, i, n);
        }
        clear() {
          (this._array = []), (this._zArray = []);
        }
        destroy() {
          (this._array = []),
            (this._zArray = []),
            (this.movers = []),
            (this.updaters = []);
        }
        async draw(t) {
          let e = this._container;
          for (let [, i] of (e.canvas.clear(), await this.update(t), e.plugins))
            e.canvas.drawPlugin(i, t);
          for (let e of this._zArray) e.draw(t);
        }
        filter(t) {
          return this._array.filter(t);
        }
        find(t) {
          return this._array.find(t);
        }
        handleClickMode(t) {
          this._interactionManager.handleClickMode(t);
        }
        init() {
          let t = this._container,
            e = t.actualOptions;
          (this.lastZIndex = 0), (this.needsSort = !1);
          let i = !1;
          for (let [, e] of ((this.updaters = this._engine.plugins.getUpdaters(
            t,
            !0,
          )),
          this._interactionManager.init(),
          t.plugins))
            if (
              (void 0 !== e.particlesInitialization &&
                (i = e.particlesInitialization()),
              i)
            )
              break;
          for (let [, e] of (this._interactionManager.init(), t.pathGenerators))
            e.init(t);
          if ((this.addManualParticles(), !i)) {
            for (let t in e.particles.groups) {
              let i = e.particles.groups[t];
              for (
                let n = this.count, s = 0;
                s < i.number?.value && n < e.particles.number.value;
                n++, s++
              )
                this.addParticle(void 0, i, t);
            }
            for (let t = this.count; t < e.particles.number.value; t++)
              this.addParticle();
          }
        }
        push(t, e, i, n) {
          this.pushing = !0;
          for (let s = 0; s < t; s++) this.addParticle(e?.position, i, n);
          this.pushing = !1;
        }
        async redraw() {
          this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
        }
        remove(t, e, i) {
          this.removeAt(this._array.indexOf(t), void 0, e, i);
        }
        removeAt(t, e = 1, i, n) {
          if (t < 0 || t > this.count) return;
          let s = 0;
          for (let o = t; s < e && o < this.count; o++)
            this._removeParticle(o--, i, n) && s++;
        }
        removeQuantity(t, e) {
          this.removeAt(0, t, e);
        }
        setDensity() {
          let t = this._container.actualOptions,
            e = t.particles.groups;
          for (let t in e) this._applyDensity(e[t], 0, t);
          this._applyDensity(t.particles, t.manualParticles.length);
        }
        async update(t) {
          let e = this._container,
            i = new Set();
          for (let [, t] of ((this.quadTree = new tk(tO(e.canvas.size), 4)),
          e.pathGenerators))
            t.update();
          for (let [, i] of e.plugins) i.update && i.update(t);
          for (let n of this._array) {
            let s = e.canvas.resizeFactor;
            for (let [, e] of (s &&
              !n.ignoresResizeRatio &&
              ((n.position.x *= s.width),
              (n.position.y *= s.height),
              (n.initialPosition.x *= s.width),
              (n.initialPosition.y *= s.height)),
            (n.ignoresResizeRatio = !1),
            await this._interactionManager.reset(n),
            this._container.plugins)) {
              if (n.destroyed) break;
              e.particleUpdate && e.particleUpdate(n, t);
            }
            for (let e of this.movers) e.isEnabled(n) && e.move(n, t);
            if (n.destroyed) {
              i.add(n);
              continue;
            }
            this.quadTree.insert(new tw(n.getPosition(), n));
          }
          if (i.size) {
            let t = (t) => !i.has(t);
            (this._array = this.filter(t)),
              (this._zArray = this._zArray.filter(t)),
              this.pool.push(...i);
          }
          for (let e of (await this._interactionManager.externalInteract(t),
          this._array)) {
            for (let i of this.updaters) i.update(e, t);
            e.destroyed ||
              e.spawning ||
              (await this._interactionManager.particlesInteract(e, t));
          }
          if ((delete e.canvas.resizeFactor, this.needsSort)) {
            let t = this._zArray;
            t.sort((t, e) => e.position.z - t.position.z || t.id - e.id),
              (this.lastZIndex = t[t.length - 1].position.z),
              (this.needsSort = !1);
          }
        }
      }
      class tC {
        constructor(t) {
          (this.container = t), (this.pixelRatio = 1), (this.reduceFactor = 1);
        }
        init() {
          let t = this.container,
            e = t.actualOptions;
          (this.pixelRatio =
            !e.detectRetina || (0, s.Kr)() ? 1 : window.devicePixelRatio),
            (this.reduceFactor = 1);
          let i = this.pixelRatio;
          if (t.canvas.element) {
            let e = t.canvas.element;
            (t.canvas.size.width = e.offsetWidth * i),
              (t.canvas.size.height = e.offsetHeight * i);
          }
          let n = e.particles,
            o = n.move;
          (this.attractDistance = (0, M.Gu)(o.attract.distance) * i),
            (this.maxSpeed = (0, M.Gu)(o.gravity.maxSpeed) * i),
            (this.sizeAnimationSpeed = (0, M.Gu)(n.size.animation.speed) * i);
        }
        initParticle(t) {
          let e = t.options,
            i = this.pixelRatio,
            n = e.move,
            s = n.distance,
            o = t.retina;
          (o.attractDistance = (0, M.Gu)(n.attract.distance) * i),
            (o.moveDrift = (0, M.Gu)(n.drift) * i),
            (o.moveSpeed = (0, M.Gu)(n.speed) * i),
            (o.sizeAnimationSpeed = (0, M.Gu)(e.size.animation.speed) * i);
          let a = o.maxDistance;
          (a.horizontal = void 0 !== s.horizontal ? s.horizontal * i : void 0),
            (a.vertical = void 0 !== s.vertical ? s.vertical * i : void 0),
            (o.maxSpeed = (0, M.Gu)(n.gravity.maxSpeed) * i);
        }
      }
      function tM(t) {
        return t && !t.destroyed;
      }
      function tS(t, e, ...i) {
        let n = new tf(t, e);
        return th(n, ...i), n;
      }
      let tz = {
        generate: (t) => t.velocity,
        init: () => {},
        update: () => {},
        reset: () => {},
      };
      class tT {
        constructor(t, e, i) {
          (this.id = e),
            (this._intersectionManager = (t) => {
              if (tM(this) && this.actualOptions.pauseOnOutsideViewport)
                for (let e of t)
                  e.target === this.interactivity.element &&
                    (e.isIntersecting ? this.play : this.pause)();
            }),
            (this._nextFrame = async (t) => {
              try {
                if (
                  !this.smooth &&
                  void 0 !== this.lastFrameTime &&
                  t < this.lastFrameTime + 1e3 / this.fpsLimit
                ) {
                  this.draw(!1);
                  return;
                }
                this.lastFrameTime ??= t;
                let e = (function (t, e = 60, i = !1) {
                  return { value: t, factor: i ? 60 / e : (60 * t) / 1e3 };
                })(t - this.lastFrameTime, this.fpsLimit, this.smooth);
                if (
                  (this.addLifeTime(e.value),
                  (this.lastFrameTime = t),
                  e.value > 1e3)
                ) {
                  this.draw(!1);
                  return;
                }
                if ((await this.particles.draw(e), !this.alive())) {
                  this.destroy();
                  return;
                }
                this.getAnimationStatus() && this.draw(!1);
              } catch (t) {
                (0, s.jl)().error(`${n.gK} in animation loop`, t);
              }
            }),
            (this._engine = t),
            (this.fpsLimit = 120),
            (this.smooth = !1),
            (this._delay = 0),
            (this._duration = 0),
            (this._lifeTime = 0),
            (this._firstStart = !0),
            (this.started = !1),
            (this.destroyed = !1),
            (this._paused = !0),
            (this.lastFrameTime = 0),
            (this.zLayers = 100),
            (this.pageHidden = !1),
            (this._sourceOptions = i),
            (this._initialSourceOptions = i),
            (this.retina = new tC(this)),
            (this.canvas = new r(this)),
            (this.particles = new tP(this._engine, this)),
            (this.pathGenerators = new Map()),
            (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
            (this.plugins = new Map()),
            (this.drawers = new Map()),
            (this._options = tS(this._engine, this)),
            (this.actualOptions = tS(this._engine, this)),
            (this._eventListeners = new c(this)),
            'undefined' != typeof IntersectionObserver &&
              IntersectionObserver &&
              (this._intersectionObserver = new IntersectionObserver((t) =>
                this._intersectionManager(t),
              )),
            this._engine.dispatchEvent('containerBuilt', { container: this });
        }
        get options() {
          return this._options;
        }
        get sourceOptions() {
          return this._sourceOptions;
        }
        addClickHandler(t) {
          if (!tM(this)) return;
          let e = this.interactivity.element;
          if (!e) return;
          let i = (e, i, n) => {
              if (!tM(this)) return;
              let s = this.retina.pixelRatio,
                o = { x: i.x * s, y: i.y * s },
                a = this.particles.quadTree.queryCircle(o, n * s);
              t(e, a);
            },
            n = !1,
            s = !1;
          e.addEventListener('click', (t) => {
            if (!tM(this)) return;
            let e = { x: t.offsetX || t.clientX, y: t.offsetY || t.clientY };
            i(t, e, 1);
          }),
            e.addEventListener('touchstart', () => {
              tM(this) && ((n = !0), (s = !1));
            }),
            e.addEventListener('touchmove', () => {
              tM(this) && (s = !0);
            }),
            e.addEventListener('touchend', (t) => {
              if (tM(this)) {
                if (n && !s) {
                  let e = t.touches[t.touches.length - 1];
                  if (
                    !e &&
                    !(e = t.changedTouches[t.changedTouches.length - 1])
                  )
                    return;
                  let n = this.canvas.element,
                    s = n ? n.getBoundingClientRect() : void 0,
                    o = {
                      x: e.clientX - (s ? s.left : 0),
                      y: e.clientY - (s ? s.top : 0),
                    };
                  i(t, o, Math.max(e.radiusX, e.radiusY));
                }
                (n = !1), (s = !1);
              }
            }),
            e.addEventListener('touchcancel', () => {
              tM(this) && ((n = !1), (s = !1));
            });
        }
        addLifeTime(t) {
          this._lifeTime += t;
        }
        addPath(t, e, i = !1) {
          return (
            !(!tM(this) || (!i && this.pathGenerators.has(t))) &&
            (this.pathGenerators.set(t, e ?? tz), !0)
          );
        }
        alive() {
          return !this._duration || this._lifeTime <= this._duration;
        }
        destroy() {
          if (!tM(this)) return;
          for (let [, t] of (this.stop(),
          this.particles.destroy(),
          this.canvas.destroy(),
          this.drawers))
            t.destroy && t.destroy(this);
          for (let t of this.drawers.keys()) this.drawers.delete(t);
          this._engine.plugins.destroy(this), (this.destroyed = !0);
          let t = this._engine.dom(),
            e = t.findIndex((t) => t === this);
          e >= 0 && t.splice(e, 1),
            this._engine.dispatchEvent('containerDestroyed', {
              container: this,
            });
        }
        draw(t) {
          if (!tM(this)) return;
          let e = t;
          this._drawAnimationFrame = requestAnimationFrame(async (t) => {
            e && ((this.lastFrameTime = void 0), (e = !1)),
              await this._nextFrame(t);
          });
        }
        async export(t, e = {}) {
          for (let [, i] of this.plugins) {
            if (!i.export) continue;
            let n = await i.export(t, e);
            if (n.supported) return n.blob;
          }
          (0, s.jl)().error(`${n.gK} - Export plugin with type ${t} not found`);
        }
        getAnimationStatus() {
          return !this._paused && !this.pageHidden && tM(this);
        }
        handleClickMode(t) {
          if (tM(this))
            for (let [, e] of (this.particles.handleClickMode(t), this.plugins))
              e.handleClickMode && e.handleClickMode(t);
        }
        async init() {
          if (!tM(this)) return;
          let t = this._engine.plugins.getSupportedShapes();
          for (let e of t) {
            let t = this._engine.plugins.getShapeDrawer(e);
            t && this.drawers.set(e, t);
          }
          (this._options = tS(
            this._engine,
            this,
            this._initialSourceOptions,
            this.sourceOptions,
          )),
            (this.actualOptions = tS(this._engine, this, this._options));
          let e = this._engine.plugins.getAvailablePlugins(this);
          for (let [t, i] of e) this.plugins.set(t, i);
          for (let [, t] of (this.retina.init(),
          await this.canvas.init(),
          this.updateActualOptions(),
          this.canvas.initBackground(),
          this.canvas.resize(),
          (this.zLayers = this.actualOptions.zLayers),
          (this._duration = 1e3 * (0, M.Gu)(this.actualOptions.duration)),
          (this._delay = 1e3 * (0, M.Gu)(this.actualOptions.delay)),
          (this._lifeTime = 0),
          (this.fpsLimit =
            this.actualOptions.fpsLimit > 0
              ? this.actualOptions.fpsLimit
              : 120),
          (this.smooth = this.actualOptions.smooth),
          this.drawers))
            t.init && (await t.init(this));
          for (let [, t] of this.plugins) t.init && (await t.init());
          for (let [, t] of (this._engine.dispatchEvent('containerInit', {
            container: this,
          }),
          this.particles.init(),
          this.particles.setDensity(),
          this.plugins))
            t.particlesSetup && t.particlesSetup();
          this._engine.dispatchEvent('particlesSetup', { container: this });
        }
        async loadTheme(t) {
          tM(this) && ((this._currentTheme = t), await this.refresh());
        }
        pause() {
          if (
            tM(this) &&
            (void 0 !== this._drawAnimationFrame &&
              (cancelAnimationFrame(this._drawAnimationFrame),
              delete this._drawAnimationFrame),
            !this._paused)
          ) {
            for (let [, t] of this.plugins) t.pause && t.pause();
            this.pageHidden || (this._paused = !0),
              this._engine.dispatchEvent('containerPaused', {
                container: this,
              });
          }
        }
        play(t) {
          if (!tM(this)) return;
          let e = this._paused || t;
          if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = !1;
            return;
          }
          if ((this._paused && (this._paused = !1), e))
            for (let [, t] of this.plugins) t.play && t.play();
          this._engine.dispatchEvent('containerPlay', { container: this }),
            this.draw(e || !1);
        }
        async refresh() {
          if (tM(this)) return this.stop(), this.start();
        }
        async reset() {
          if (tM(this))
            return (
              (this._initialSourceOptions = void 0),
              (this._options = tS(this._engine, this)),
              (this.actualOptions = tS(this._engine, this, this._options)),
              this.refresh()
            );
        }
        setNoise(t, e, i) {
          tM(this) && this.setPath(t, e, i);
        }
        setPath(t, e, i) {
          if (!t || !tM(this)) return;
          let n = { ...tz };
          (0, s.mf)(t)
            ? ((n.generate = t), e && (n.init = e), i && (n.update = i))
            : ((n.generate = t.generate || n.generate),
              (n.init = t.init || n.init),
              (n.update = t.update || n.update)),
            this.addPath('default', n, !0);
        }
        async start() {
          tM(this) &&
            !this.started &&
            (await this.init(),
            (this.started = !0),
            await new Promise((t) => {
              this._delayTimeout = setTimeout(async () => {
                for (let [, t] of (this._eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this._intersectionObserver &&
                  this._intersectionObserver.observe(
                    this.interactivity.element,
                  ),
                this.plugins))
                  t.start && (await t.start());
                this._engine.dispatchEvent('containerStarted', {
                  container: this,
                }),
                  this.play(),
                  t();
              }, this._delay);
            }));
        }
        stop() {
          if (tM(this) && this.started) {
            for (let [, t] of (this._delayTimeout &&
              (clearTimeout(this._delayTimeout), delete this._delayTimeout),
            (this._firstStart = !0),
            (this.started = !1),
            this._eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.stop(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.unobserve(this.interactivity.element),
            this.plugins))
              t.stop && t.stop();
            for (let t of this.plugins.keys()) this.plugins.delete(t);
            (this._sourceOptions = this._options),
              this._engine.dispatchEvent('containerStopped', {
                container: this,
              });
          }
        }
        updateActualOptions() {
          this.actualOptions.responsive = [];
          let t = this.actualOptions.setResponsive(
            this.canvas.size.width,
            this.retina.pixelRatio,
            this._options,
          );
          return (
            this.actualOptions.setTheme(this._currentTheme),
            this.responsiveMaxWidth !== t && ((this.responsiveMaxWidth = t), !0)
          );
        }
      }
      class tE {
        constructor() {
          this._listeners = new Map();
        }
        addEventListener(t, e) {
          this.removeEventListener(t, e);
          let i = this._listeners.get(t);
          i || ((i = []), this._listeners.set(t, i)), i.push(e);
        }
        dispatchEvent(t, e) {
          let i = this._listeners.get(t);
          i && i.forEach((t) => t(e));
        }
        hasEventListener(t) {
          return !!this._listeners.get(t);
        }
        removeAllEventListeners(t) {
          t ? this._listeners.delete(t) : (this._listeners = new Map());
        }
        removeEventListener(t, e) {
          let i = this._listeners.get(t);
          if (!i) return;
          let n = i.length,
            s = i.indexOf(e);
          s < 0 || (1 === n ? this._listeners.delete(t) : i.splice(s, 1));
        }
      }
      function tR(t, e, i, n = !1) {
        let s = e.get(t);
        return (
          (!s || n) && ((s = [...i.values()].map((e) => e(t))), e.set(t, s)), s
        );
      }
      class tI {
        constructor(t) {
          (this._engine = t),
            (this.plugins = []),
            (this._initializers = {
              interactors: new Map(),
              movers: new Map(),
              updaters: new Map(),
            }),
            (this.interactors = new Map()),
            (this.movers = new Map()),
            (this.updaters = new Map()),
            (this.presets = new Map()),
            (this.drawers = new Map()),
            (this.pathGenerators = new Map());
        }
        addInteractor(t, e) {
          this._initializers.interactors.set(t, e);
        }
        addParticleMover(t, e) {
          this._initializers.movers.set(t, e);
        }
        addParticleUpdater(t, e) {
          this._initializers.updaters.set(t, e);
        }
        addPathGenerator(t, e) {
          this.getPathGenerator(t) || this.pathGenerators.set(t, e);
        }
        addPlugin(t) {
          this.getPlugin(t.id) || this.plugins.push(t);
        }
        addPreset(t, e, i = !1) {
          (i || !this.getPreset(t)) && this.presets.set(t, e);
        }
        addShapeDrawer(t, e) {
          (0, s.KH)(t, (t) => {
            this.getShapeDrawer(t) || this.drawers.set(t, e);
          });
        }
        destroy(t) {
          this.updaters.delete(t),
            this.movers.delete(t),
            this.interactors.delete(t);
        }
        getAvailablePlugins(t) {
          let e = new Map();
          for (let i of this.plugins)
            i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
          return e;
        }
        getInteractors(t, e = !1) {
          return tR(t, this.interactors, this._initializers.interactors, e);
        }
        getMovers(t, e = !1) {
          return tR(t, this.movers, this._initializers.movers, e);
        }
        getPathGenerator(t) {
          return this.pathGenerators.get(t);
        }
        getPlugin(t) {
          return this.plugins.find((e) => e.id === t);
        }
        getPreset(t) {
          return this.presets.get(t);
        }
        getShapeDrawer(t) {
          return this.drawers.get(t);
        }
        getSupportedShapes() {
          return this.drawers.keys();
        }
        getUpdaters(t, e = !1) {
          return tR(t, this.updaters, this._initializers.updaters, e);
        }
        loadOptions(t, e) {
          for (let i of this.plugins) i.loadOptions(t, e);
        }
        loadParticlesOptions(t, e, ...i) {
          let n = this.updaters.get(t);
          if (n) for (let t of n) t.loadOptions && t.loadOptions(e, ...i);
        }
      }
      async function tD(t) {
        let e = (0, s.wA)(t.url, t.index);
        if (!e) return t.fallback;
        let i = await fetch(e);
        return i.ok
          ? i.json()
          : ((0, s.jl)().error(
              `${n.gK} ${i.status} while retrieving config file`,
            ),
            t.fallback);
      }
      class tA {
        constructor() {
          (this._configs = new Map()),
            (this._domArray = []),
            (this._eventDispatcher = new tE()),
            (this._initialized = !1),
            (this.plugins = new tI(this));
        }
        get configs() {
          let t = {};
          for (let [e, i] of this._configs) t[e] = i;
          return t;
        }
        get version() {
          return '2.12.0';
        }
        addConfig(t, e) {
          (0, s.HD)(t)
            ? e && ((e.name = t), this._configs.set(t, e))
            : this._configs.set(t.name ?? 'default', t);
        }
        addEventListener(t, e) {
          this._eventDispatcher.addEventListener(t, e);
        }
        async addInteractor(t, e, i = !0) {
          this.plugins.addInteractor(t, e), await this.refresh(i);
        }
        async addMover(t, e, i = !0) {
          this.plugins.addParticleMover(t, e), await this.refresh(i);
        }
        async addParticleUpdater(t, e, i = !0) {
          this.plugins.addParticleUpdater(t, e), await this.refresh(i);
        }
        async addPathGenerator(t, e, i = !0) {
          this.plugins.addPathGenerator(t, e), await this.refresh(i);
        }
        async addPlugin(t, e = !0) {
          this.plugins.addPlugin(t), await this.refresh(e);
        }
        async addPreset(t, e, i = !1, n = !0) {
          this.plugins.addPreset(t, e, i), await this.refresh(n);
        }
        async addShape(t, e, i, n, o, a = !0) {
          let r;
          let l = a,
            c,
            u,
            d;
          (0, s.jn)(i) ? ((l = i), (c = void 0)) : (c = i),
            (0, s.jn)(n) ? ((l = n), (u = void 0)) : (u = n),
            (0, s.jn)(o) ? ((l = o), (d = void 0)) : (d = o),
            (r = (0, s.mf)(e)
              ? { afterEffect: u, destroy: d, draw: e, init: c }
              : e),
            this.plugins.addShapeDrawer(t, r),
            await this.refresh(l);
        }
        dispatchEvent(t, e) {
          this._eventDispatcher.dispatchEvent(t, e);
        }
        dom() {
          return this._domArray;
        }
        domItem(t) {
          let e = this.dom(),
            i = e[t];
          if (!i || i.destroyed) {
            e.splice(t, 1);
            return;
          }
          return i;
        }
        init() {
          this._initialized || (this._initialized = !0);
        }
        async load(t, e) {
          return this.loadFromArray(t, e);
        }
        async loadFromArray(t, e, i) {
          let n;
          return (
            t.id || t.element || t.url || t.options
              ? (n = t)
              : ((n = {}),
                (0, s.HD)(t) ? (n.id = t) : (n.options = t),
                (0, s.hj)(e) ? (n.index = e) : (n.options = e ?? n.options),
                (n.index = i ?? n.index)),
            this._loadParams(n)
          );
        }
        async loadJSON(t, e, i) {
          let n, o;
          return (
            (0, s.hj)(e) || void 0 === e ? (n = t) : ((o = t), (n = e)),
            this._loadParams({ id: o, url: n, index: i })
          );
        }
        async refresh(t = !0) {
          t && this.dom().forEach((t) => t.refresh());
        }
        removeEventListener(t, e) {
          this._eventDispatcher.removeEventListener(t, e);
        }
        async set(t, e, i, n) {
          let o = { index: n };
          return (
            (0, s.HD)(t) ? (o.id = t) : (o.element = t),
            e instanceof HTMLElement ? (o.element = e) : (o.options = e),
            (0, s.hj)(i) ? (o.index = i) : (o.options = i ?? o.options),
            this._loadParams(o)
          );
        }
        async setJSON(t, e, i, n) {
          let s = {};
          return (
            t instanceof HTMLElement
              ? ((s.element = t), (s.url = e), (s.index = i))
              : ((s.id = t), (s.element = e), (s.url = i), (s.index = n)),
            this._loadParams(s)
          );
        }
        setOnClickHandler(t) {
          let e = this.dom();
          if (!e.length)
            throw Error(
              `${n.gK} can only set click handlers after calling tsParticles.load()`,
            );
          for (let i of e) i.addClickHandler(t);
        }
        async _loadParams(t) {
          let e;
          let i = t.id ?? `tsparticles${Math.floor(1e4 * (0, M.sZ)())}`,
            { index: o, url: a } = t,
            r = a
              ? await tD({ fallback: t.options, url: a, index: o })
              : t.options,
            l = t.element ?? document.getElementById(i);
          l ||
            (((l = document.createElement('div')).id = i),
            document.body.append(l));
          let c = (0, s.wA)(r, o),
            u = this.dom(),
            d = u.findIndex((t) => t.id === i);
          if (d >= 0) {
            let t = this.domItem(d);
            t && !t.destroyed && (t.destroy(), u.splice(d, 1));
          }
          if ('canvas' === l.tagName.toLowerCase())
            (e = l).dataset[n.YU] = 'false';
          else {
            let t = l.getElementsByTagName('canvas');
            t.length
              ? ((e = t[0]).dataset[n.YU] = 'false')
              : (((e = document.createElement('canvas')).dataset[n.YU] =
                  'true'),
                l.appendChild(e));
          }
          e.style.width || (e.style.width = '100%'),
            e.style.height || (e.style.height = '100%');
          let h = new tT(this, i, c);
          return (
            d >= 0 ? u.splice(d, 0, h) : u.push(h),
            h.canvas.loadCanvas(e),
            await h.start(),
            h
          );
        }
      }
      class tj {
        constructor() {
          (this.key = 'hsl'), (this.stringPrefix = 'hsl');
        }
        handleColor(t) {
          let e = t.value,
            i = e.hsl ?? t.value;
          if (void 0 !== i.h && void 0 !== i.s && void 0 !== i.l)
            return (0, a.ve)(i);
        }
        handleRangeColor(t) {
          let e = t.value,
            i = e.hsl ?? t.value;
          if (void 0 !== i.h && void 0 !== i.l)
            return (0, a.ve)({
              h: (0, M.Gu)(i.h),
              l: (0, M.Gu)(i.l),
              s: (0, M.Gu)(i.s),
            });
        }
        parseString(t) {
          if (!t.startsWith('hsl')) return;
          let e =
            /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
              t,
            );
          return e
            ? (0, a.Y6)({
                a: e.length > 4 ? (0, M.BV)(e[5]) : 1,
                h: parseInt(e[1], 10),
                l: parseInt(e[3], 10),
                s: parseInt(e[2], 10),
              })
            : void 0;
        }
      }
      class tL {
        constructor() {
          (this.key = 'rgb'), (this.stringPrefix = 'rgb');
        }
        handleColor(t) {
          let e = t.value,
            i = e.rgb ?? t.value;
          if (void 0 !== i.r) return i;
        }
        handleRangeColor(t) {
          let e = t.value,
            i = e.rgb ?? t.value;
          if (void 0 !== i.r)
            return { r: (0, M.Gu)(i.r), g: (0, M.Gu)(i.g), b: (0, M.Gu)(i.b) };
        }
        parseString(t) {
          if (!t.startsWith(this.stringPrefix)) return;
          let e =
            /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
              t,
            );
          return e
            ? {
                a: e.length > 4 ? (0, M.BV)(e[5]) : 1,
                b: parseInt(e[3], 10),
                g: parseInt(e[2], 10),
                r: parseInt(e[1], 10),
              }
            : void 0;
        }
      }
      let tF = (function () {
        let t = new tL(),
          e = new tj();
        (0, a.VI)(t), (0, a.VI)(e);
        let i = new tA();
        return i.init(), i;
      })();
      (0, s.Kr)() || (window.tsParticles = tF);
    },
    5675: function (t, e, i) {
      'use strict';
      i.d(e, {
        S: function () {
          return ew;
        },
      });
      var n = i(617);
      class s {
        static init(t) {
          let e = new s(),
            i = t.selector;
          if (!i) throw Error('No selector provided');
          let o = document.querySelector(i);
          if (!o) throw Error('No element found for selector');
          return (
            n.S6.set(i.replace('.', '').replace('!', ''), o, {
              fullScreen: { enable: !1 },
              particles: {
                color: { value: t.color ?? '!000000' },
                links: {
                  color: 'random',
                  distance: t.minDistance ?? 120,
                  enable: t.connectParticles ?? !1,
                },
                move: { enable: !0, speed: t.speed ?? 0.5 },
                number: { value: t.maxParticles ?? 100 },
                size: { value: { min: 1, max: t.sizeVariations ?? 3 } },
              },
              responsive: t.responsive?.map((e) => ({
                maxWidth: e.breakpoint,
                options: {
                  particles: {
                    color: { value: e.options?.color },
                    links: {
                      distance: e.options?.minDistance,
                      enable: e.options?.connectParticles,
                    },
                    number: { value: t.maxParticles },
                    move: { enable: !0, speed: e.options?.speed },
                    size: { value: e.options?.sizeVariations },
                  },
                },
              })),
            }).then((t) => {
              e._container = t;
            }),
            e
          );
        }
        destroy() {
          let t = this._container;
          t && t.destroy();
        }
        pauseAnimation() {
          let t = this._container;
          t && t.pause();
        }
        resumeAnimation() {
          let t = this._container;
          t && t.play();
        }
      }
      let o = (t) => {
          let e = (e, i) => t.load(e, i);
          (e.load = (e, i, n) => {
            t.loadJSON(e, i)
              .then((t) => {
                t && n(t);
              })
              .catch(() => {
                n(void 0);
              });
          }),
            (e.setOnClickHandler = (e) => {
              t.setOnClickHandler(e);
            });
          let i = t.dom();
          return { particlesJS: e, pJSDom: i };
        },
        a = (t) => {
          let { particlesJS: e, pJSDom: i } = o(t);
          return (
            (window.particlesJS = e),
            (window.pJSDom = i),
            (window.Particles = s),
            { particlesJS: e, pJSDom: i, Particles: s }
          );
        };
      var r = i(3201);
      class l {
        constructor() {
          this._initSpin = (t) => {
            let e = t.container,
              i = t.options,
              n = i.move.spin;
            if (!n.enable) return;
            let s = n.position ?? { x: 50, y: 50 },
              o = {
                x: (s.x / 100) * e.canvas.size.width,
                y: (s.y / 100) * e.canvas.size.height,
              },
              a = t.getPosition(),
              l = (0, r.Sp)(a, o),
              c = (0, r.Gu)(n.acceleration);
            (t.retina.spinAcceleration = c * e.retina.pixelRatio),
              (t.spin = {
                center: o,
                direction:
                  t.velocity.x >= 0 ? 'clockwise' : 'counter-clockwise',
                angle: t.velocity.angle,
                radius: l,
                acceleration: t.retina.spinAcceleration,
              });
          };
        }
        init(t) {
          let e = t.options,
            i = e.move.gravity;
          (t.gravity = {
            enable: i.enable,
            acceleration: (0, r.Gu)(i.acceleration),
            inverse: i.inverse,
          }),
            this._initSpin(t);
        }
        isEnabled(t) {
          return !t.destroyed && t.options.move.enable;
        }
        move(t, e) {
          let i = t.options,
            n = i.move;
          if (!n.enable) return;
          let s = t.container,
            o = s.retina.pixelRatio,
            a = t.slow.inRange ? t.slow.factor : 1,
            l =
              (t.retina.moveSpeed ??= (0, r.Gu)(n.speed) * o) *
              s.retina.reduceFactor,
            c = (t.retina.moveDrift ??= (0, r.Gu)(t.options.move.drift) * o),
            u = (0, r.KI)(i.size.value) * o,
            d = n.size ? t.getRadius() / u : 1,
            h = (l * d * a * (e.factor || 1)) / 2,
            p = t.retina.maxSpeed ?? s.retina.maxSpeed;
          n.spin.enable
            ? (function (t, e) {
                let i = t.container;
                if (!t.spin) return;
                let n = {
                  x: 'clockwise' === t.spin.direction ? Math.cos : Math.sin,
                  y: 'clockwise' === t.spin.direction ? Math.sin : Math.cos,
                };
                (t.position.x =
                  t.spin.center.x + t.spin.radius * n.x(t.spin.angle)),
                  (t.position.y =
                    t.spin.center.y + t.spin.radius * n.y(t.spin.angle)),
                  (t.spin.radius += t.spin.acceleration);
                let s = Math.max(i.canvas.size.width, i.canvas.size.height);
                t.spin.radius > s / 2
                  ? ((t.spin.radius = s / 2), (t.spin.acceleration *= -1))
                  : t.spin.radius < 0 &&
                    ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
                  (t.spin.angle += (e / 100) * (1 - t.spin.radius / s));
              })(t, h)
            : (function (t, e, i, n, s, o) {
                (function (t, e) {
                  let i = t.options,
                    n = i.move.path,
                    s = n.enable;
                  if (!s) return;
                  if (t.lastPathTime <= t.pathDelay) {
                    t.lastPathTime += e.value;
                    return;
                  }
                  let o = t.pathGenerator?.generate(t, e);
                  o && t.velocity.addTo(o),
                    n.clamp &&
                      ((t.velocity.x = (0, r.uZ)(t.velocity.x, -1, 1)),
                      (t.velocity.y = (0, r.uZ)(t.velocity.y, -1, 1))),
                    (t.lastPathTime -= t.pathDelay);
                })(t, o);
                let a = t.gravity,
                  l = a?.enable && a.inverse ? -1 : 1;
                s && i && (t.velocity.x += (s * o.factor) / (60 * i)),
                  a?.enable &&
                    i &&
                    (t.velocity.y +=
                      (l * (a.acceleration * o.factor)) / (60 * i));
                let c = t.moveDecay;
                t.velocity.multTo(c);
                let u = t.velocity.mult(i);
                a?.enable &&
                  n > 0 &&
                  ((!a.inverse && u.y >= 0 && u.y >= n) ||
                    (a.inverse && u.y <= 0 && u.y <= -n)) &&
                  ((u.y = l * n), i && (t.velocity.y = u.y / i));
                let d = t.options.zIndex,
                  h = (1 - t.zIndexFactor) ** d.velocityRate;
                u.multTo(h);
                let { position: p } = t;
                p.addTo(u),
                  e.vibrate &&
                    ((p.x += Math.sin(p.x * Math.cos(p.y))),
                    (p.y += Math.cos(p.y * Math.sin(p.x))));
              })(t, n, h, p, c, e),
            (function (t) {
              let e = t.initialPosition,
                { dx: i, dy: n } = (0, r.oW)(e, t.position),
                s = Math.abs(i),
                o = Math.abs(n),
                { maxDistance: a } = t.retina,
                l = a.horizontal,
                c = a.vertical;
              if (l || c) {
                if (((l && s >= l) || (c && o >= c)) && !t.misplaced)
                  (t.misplaced = (!!l && s > l) || (!!c && o > c)),
                    l && (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                    c && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
                else if ((!l || s < l) && (!c || o < c) && t.misplaced)
                  t.misplaced = !1;
                else if (t.misplaced) {
                  let i = t.position,
                    n = t.velocity;
                  l &&
                    ((i.x < e.x && n.x < 0) || (i.x > e.x && n.x > 0)) &&
                    (n.x *= -(0, r.sZ)()),
                    c &&
                      ((i.y < e.y && n.y < 0) || (i.y > e.y && n.y > 0)) &&
                      (n.y *= -(0, r.sZ)());
                }
              }
            })(t);
        }
      }
      async function c(t, e = !0) {
        await t.addMover('base', () => new l(), e);
      }
      var u = i(3226);
      class d {
        draw(t, e, i) {
          e.circleRange || (e.circleRange = { min: 0, max: 2 * Math.PI });
          let n = e.circleRange;
          t.arc(0, 0, i, n.min, n.max, !1);
        }
        getSidesCount() {
          return 12;
        }
        particleInit(t, e) {
          let i = e.shapeData,
            n = i?.angle ?? { max: 360, min: 0 };
          e.circleRange = (0, u.Kn)(n)
            ? { min: (n.min * Math.PI) / 180, max: (n.max * Math.PI) / 180 }
            : { min: 0, max: (n * Math.PI) / 180 };
        }
      }
      async function h(t, e = !0) {
        await t.addShape('circle', new d(), e);
      }
      var p = i(481);
      function f(t, e, i, n, s) {
        if (
          !e ||
          !i.enable ||
          ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0)) ||
          (e.time || (e.time = 0),
          (e.delayTime ?? 0) > 0 &&
            e.time < (e.delayTime ?? 0) &&
            (e.time += t.value),
          (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
        )
          return;
        let o = (0, r.vd)(i.offset),
          a = (e.velocity ?? 0) * t.factor + 3.6 * o,
          l = e.decay ?? 1;
        s && 'increasing' !== e.status
          ? ((e.value -= a),
            e.value < 0 &&
              (e.loops || (e.loops = 0),
              e.loops++,
              (e.status = 'increasing'),
              (e.value += e.value)))
          : ((e.value += a),
            e.value > n &&
              (e.loops || (e.loops = 0),
              e.loops++,
              s && ((e.status = 'decreasing'), (e.value -= e.value % n)))),
          e.velocity && 1 !== l && (e.velocity *= l),
          e.value > n && (e.value %= n);
      }
      class m {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = (0, p.lN)(t.options.color, t.id, t.options.reduceDuplicates);
          e &&
            (t.color = (0, p.bS)(
              e,
              t.options.color.animation,
              this.container.retina.reduceFactor,
            ));
        }
        isEnabled(t) {
          let { h: e, s: i, l: n } = t.options.color.animation,
            { color: s } = t;
          return (
            !t.destroyed &&
            !t.spawning &&
            ((s?.h.value !== void 0 && e.enable) ||
              (s?.s.value !== void 0 && i.enable) ||
              (s?.l.value !== void 0 && n.enable))
          );
        }
        update(t, e) {
          !(function (t, e) {
            let { h: i, s: n, l: s } = t.options.color.animation,
              { color: o } = t;
            if (!o) return;
            let { h: a, s: r, l } = o;
            a && f(e, a, i, 360, !1),
              r && f(e, r, n, 100, !0),
              l && f(e, l, s, 100, !0);
          })(t, e);
        }
      }
      async function g(t, e = !0) {
        await t.addParticleUpdater('color', (t) => new m(t), e);
      }
      class y {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = t.options.opacity;
          t.opacity = (0, u.V0)(e, 1);
          let i = e.animation;
          i.enable &&
            ((t.opacity.velocity =
              ((0, r.Gu)(i.speed) / 100) * this.container.retina.reduceFactor),
            i.sync || (t.opacity.velocity *= (0, r.sZ)()));
        }
        isEnabled(t) {
          return (
            !t.destroyed &&
            !t.spawning &&
            !!t.opacity &&
            t.opacity.enable &&
            ((t.opacity.maxLoops ?? 0) <= 0 ||
              ((t.opacity.maxLoops ?? 0) > 0 &&
                (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0)))
          );
        }
        reset(t) {
          t.opacity && ((t.opacity.time = 0), (t.opacity.loops = 0));
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              let i = t.opacity;
              if (
                t.destroyed ||
                !i?.enable ||
                ((i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
              )
                return;
              let n = i.min,
                s = i.max,
                o = i.decay ?? 1;
              if (
                (i.time || (i.time = 0),
                (i.delayTime ?? 0) > 0 &&
                  i.time < (i.delayTime ?? 0) &&
                  (i.time += e.value),
                !((i.delayTime ?? 0) > 0) || !(i.time < (i.delayTime ?? 0)))
              ) {
                switch (i.status) {
                  case 'increasing':
                    i.value >= s
                      ? ((i.status = 'decreasing'),
                        i.loops || (i.loops = 0),
                        i.loops++)
                      : (i.value += (i.velocity ?? 0) * e.factor);
                    break;
                  case 'decreasing':
                    i.value <= n
                      ? ((i.status = 'increasing'),
                        i.loops || (i.loops = 0),
                        i.loops++)
                      : (i.value -= (i.velocity ?? 0) * e.factor);
                }
                i.velocity && 1 !== i.decay && (i.velocity *= o),
                  (function (t, e, i, n) {
                    switch (t.options.opacity.animation.destroy) {
                      case 'max':
                        e >= n && t.destroy();
                        break;
                      case 'min':
                        e <= i && t.destroy();
                    }
                  })(t, i.value, n, s),
                  t.destroyed || (i.value = (0, r.uZ)(i.value, n, s));
              }
            })(t, e);
        }
      }
      async function v(t, e = !0) {
        await t.addParticleUpdater('opacity', (t) => new y(t), e);
      }
      class b {
        constructor(t) {
          (this.container = t),
            (this.modes = [
              'bounce',
              'bounce-vertical',
              'bounce-horizontal',
              'bounceVertical',
              'bounceHorizontal',
              'split',
            ]);
        }
        update(t, e, i, n) {
          if (!this.modes.includes(n)) return;
          let s = this.container,
            o = !1;
          for (let [, n] of s.plugins)
            if (
              (void 0 !== n.particleBounce && (o = n.particleBounce(t, i, e)),
              o)
            )
              break;
          if (o) return;
          let a = t.getPosition(),
            l = t.offset,
            c = t.getRadius(),
            d = (0, u.M_)(a, c),
            h = s.canvas.size;
          !(function (t) {
            if (
              ('bounce' !== t.outMode &&
                'bounce-horizontal' !== t.outMode &&
                'bounceHorizontal' !== t.outMode &&
                'split' !== t.outMode) ||
              ('left' !== t.direction && 'right' !== t.direction)
            )
              return;
            t.bounds.right < 0 && 'left' === t.direction
              ? (t.particle.position.x = t.size + t.offset.x)
              : t.bounds.left > t.canvasSize.width &&
                'right' === t.direction &&
                (t.particle.position.x =
                  t.canvasSize.width - t.size - t.offset.x);
            let e = t.particle.velocity.x,
              i = !1;
            if (
              ('right' === t.direction &&
                t.bounds.right >= t.canvasSize.width &&
                e > 0) ||
              ('left' === t.direction && t.bounds.left <= 0 && e < 0)
            ) {
              let e = (0, r.NA)(t.particle.options.bounce.horizontal);
              (t.particle.velocity.x *= -e), (i = !0);
            }
            if (!i) return;
            let n = t.offset.x + t.size;
            t.bounds.right >= t.canvasSize.width && 'right' === t.direction
              ? (t.particle.position.x = t.canvasSize.width - n)
              : t.bounds.left <= 0 &&
                'left' === t.direction &&
                (t.particle.position.x = n),
              'split' === t.outMode && t.particle.destroy();
          })({
            particle: t,
            outMode: n,
            direction: e,
            bounds: d,
            canvasSize: h,
            offset: l,
            size: c,
          }),
            (function (t) {
              if (
                ('bounce' !== t.outMode &&
                  'bounce-vertical' !== t.outMode &&
                  'bounceVertical' !== t.outMode &&
                  'split' !== t.outMode) ||
                ('bottom' !== t.direction && 'top' !== t.direction)
              )
                return;
              t.bounds.bottom < 0 && 'top' === t.direction
                ? (t.particle.position.y = t.size + t.offset.y)
                : t.bounds.top > t.canvasSize.height &&
                  'bottom' === t.direction &&
                  (t.particle.position.y =
                    t.canvasSize.height - t.size - t.offset.y);
              let e = t.particle.velocity.y,
                i = !1;
              if (
                ('bottom' === t.direction &&
                  t.bounds.bottom >= t.canvasSize.height &&
                  e > 0) ||
                ('top' === t.direction && t.bounds.top <= 0 && e < 0)
              ) {
                let e = (0, r.NA)(t.particle.options.bounce.vertical);
                (t.particle.velocity.y *= -e), (i = !0);
              }
              if (!i) return;
              let n = t.offset.y + t.size;
              t.bounds.bottom >= t.canvasSize.height && 'bottom' === t.direction
                ? (t.particle.position.y = t.canvasSize.height - n)
                : t.bounds.top <= 0 &&
                  'top' === t.direction &&
                  (t.particle.position.y = n),
                'split' === t.outMode && t.particle.destroy();
            })({
              particle: t,
              outMode: n,
              direction: e,
              bounds: d,
              canvasSize: h,
              offset: l,
              size: c,
            });
        }
      }
      var w = i(6290);
      class x {
        constructor(t) {
          (this.container = t), (this.modes = ['destroy']);
        }
        update(t, e, i, n) {
          if (!this.modes.includes(n)) return;
          let s = this.container;
          switch (t.outType) {
            case 'normal':
            case 'outside':
              if (
                (0, u.Ac)(
                  t.position,
                  s.canvas.size,
                  w.O.origin,
                  t.getRadius(),
                  e,
                )
              )
                return;
              break;
            case 'inside': {
              let { dx: e, dy: i } = (0, r.oW)(t.position, t.moveCenter),
                { x: n, y: s } = t.velocity;
              if (
                (n < 0 && e > t.moveCenter.radius) ||
                (s < 0 && i > t.moveCenter.radius) ||
                (n >= 0 && e < -t.moveCenter.radius) ||
                (s >= 0 && i < -t.moveCenter.radius)
              )
                return;
            }
          }
          s.particles.remove(t, void 0, !0);
        }
      }
      class _ {
        constructor(t) {
          (this.container = t), (this.modes = ['none']);
        }
        update(t, e, i, n) {
          if (
            !this.modes.includes(n) ||
            (t.options.move.distance.horizontal &&
              ('left' === e || 'right' === e)) ||
            (t.options.move.distance.vertical &&
              ('top' === e || 'bottom' === e))
          )
            return;
          let s = t.options.move.gravity,
            o = this.container,
            a = o.canvas.size,
            r = t.getRadius();
          if (s.enable) {
            let i = t.position;
            ((!s.inverse && i.y > a.height + r && 'bottom' === e) ||
              (s.inverse && i.y < -r && 'top' === e)) &&
              o.particles.remove(t);
          } else {
            if (
              (t.velocity.y > 0 && t.position.y <= a.height + r) ||
              (t.velocity.y < 0 && t.position.y >= -r) ||
              (t.velocity.x > 0 && t.position.x <= a.width + r) ||
              (t.velocity.x < 0 && t.position.x >= -r)
            )
              return;
            (0, u.Ac)(t.position, o.canvas.size, w.O.origin, r, e) ||
              o.particles.remove(t);
          }
        }
      }
      class k {
        constructor(t) {
          (this.container = t), (this.modes = ['out']);
        }
        update(t, e, i, n) {
          if (!this.modes.includes(n)) return;
          let s = this.container;
          if ('inside' === t.outType) {
            let { x: e, y: i } = t.velocity,
              n = w.O.origin;
            (n.length = t.moveCenter.radius),
              (n.angle = t.velocity.angle + Math.PI),
              n.addTo(w.O.create(t.moveCenter));
            let { dx: o, dy: a } = (0, r.oW)(t.position, n);
            if (
              (e <= 0 && o >= 0) ||
              (i <= 0 && a >= 0) ||
              (e >= 0 && o <= 0) ||
              (i >= 0 && a <= 0)
            )
              return;
            (t.position.x = Math.floor(
              (0, r.vd)({ min: 0, max: s.canvas.size.width }),
            )),
              (t.position.y = Math.floor(
                (0, r.vd)({ min: 0, max: s.canvas.size.height }),
              ));
            let { dx: l, dy: c } = (0, r.oW)(t.position, t.moveCenter);
            (t.direction = Math.atan2(-c, -l)),
              (t.velocity.angle = t.direction);
          } else {
            if (
              (0, u.Ac)(t.position, s.canvas.size, w.O.origin, t.getRadius(), e)
            )
              return;
            switch (t.outType) {
              case 'outside': {
                (t.position.x =
                  Math.floor(
                    (0, r.vd)({
                      min: -t.moveCenter.radius,
                      max: t.moveCenter.radius,
                    }),
                  ) + t.moveCenter.x),
                  (t.position.y =
                    Math.floor(
                      (0, r.vd)({
                        min: -t.moveCenter.radius,
                        max: t.moveCenter.radius,
                      }),
                    ) + t.moveCenter.y);
                let { dx: e, dy: i } = (0, r.oW)(t.position, t.moveCenter);
                t.moveCenter.radius &&
                  ((t.direction = Math.atan2(i, e)),
                  (t.velocity.angle = t.direction));
                break;
              }
              case 'normal': {
                let i = t.options.move.warp,
                  n = s.canvas.size,
                  o = {
                    bottom: n.height + t.getRadius() + t.offset.y,
                    left: -t.getRadius() - t.offset.x,
                    right: n.width + t.getRadius() + t.offset.x,
                    top: -t.getRadius() - t.offset.y,
                  },
                  a = t.getRadius(),
                  l = (0, u.M_)(t.position, a);
                'right' === e && l.left > n.width + t.offset.x
                  ? ((t.position.x = o.left),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = (0, r.sZ)() * n.height),
                      (t.initialPosition.y = t.position.y)))
                  : 'left' === e &&
                    l.right < -t.offset.x &&
                    ((t.position.x = o.right),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = (0, r.sZ)() * n.height),
                      (t.initialPosition.y = t.position.y))),
                  'bottom' === e && l.top > n.height + t.offset.y
                    ? (i ||
                        ((t.position.x = (0, r.sZ)() * n.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = o.top),
                      (t.initialPosition.y = t.position.y))
                    : 'top' === e &&
                      l.bottom < -t.offset.y &&
                      (i ||
                        ((t.position.x = (0, r.sZ)() * n.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = o.bottom),
                      (t.initialPosition.y = t.position.y));
              }
            }
          }
        }
      }
      class O {
        constructor(t) {
          (this.container = t),
            (this._updateOutMode = (t, e, i, n) => {
              for (let s of this.updaters) s.update(t, n, e, i);
            }),
            (this.updaters = [new b(t), new x(t), new k(t), new _(t)]);
        }
        init() {}
        isEnabled(t) {
          return !t.destroyed && !t.spawning;
        }
        update(t, e) {
          let i = t.options.move.outModes;
          this._updateOutMode(t, e, i.bottom ?? i.default, 'bottom'),
            this._updateOutMode(t, e, i.left ?? i.default, 'left'),
            this._updateOutMode(t, e, i.right ?? i.default, 'right'),
            this._updateOutMode(t, e, i.top ?? i.default, 'top');
        }
      }
      async function P(t, e = !0) {
        await t.addParticleUpdater('outModes', (t) => new O(t), e);
      }
      class C {
        init(t) {
          let e = t.container,
            i = t.options.size,
            n = i.animation;
          n.enable &&
            ((t.size.velocity =
              ((t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) /
                100) *
              e.retina.reduceFactor),
            n.sync || (t.size.velocity *= (0, r.sZ)()));
        }
        isEnabled(t) {
          return (
            !t.destroyed &&
            !t.spawning &&
            t.size.enable &&
            ((t.size.maxLoops ?? 0) <= 0 ||
              ((t.size.maxLoops ?? 0) > 0 &&
                (t.size.loops ?? 0) < (t.size.maxLoops ?? 0)))
          );
        }
        reset(t) {
          t.size.loops = 0;
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              let i = t.size;
              if (
                t.destroyed ||
                !i ||
                !i.enable ||
                ((i.maxLoops ?? 0) > 0 && (i.loops ?? 0) > (i.maxLoops ?? 0))
              )
                return;
              let n = (i.velocity ?? 0) * e.factor,
                s = i.min,
                o = i.max,
                a = i.decay ?? 1;
              if (
                (i.time || (i.time = 0),
                (i.delayTime ?? 0) > 0 &&
                  i.time < (i.delayTime ?? 0) &&
                  (i.time += e.value),
                !((i.delayTime ?? 0) > 0) || !(i.time < (i.delayTime ?? 0)))
              ) {
                switch (i.status) {
                  case 'increasing':
                    i.value >= o
                      ? ((i.status = 'decreasing'),
                        i.loops || (i.loops = 0),
                        i.loops++)
                      : (i.value += n);
                    break;
                  case 'decreasing':
                    i.value <= s
                      ? ((i.status = 'increasing'),
                        i.loops || (i.loops = 0),
                        i.loops++)
                      : (i.value -= n);
                }
                i.velocity && 1 !== a && (i.velocity *= a),
                  (function (t, e, i, n) {
                    switch (t.options.size.animation.destroy) {
                      case 'max':
                        e >= n && t.destroy();
                        break;
                      case 'min':
                        e <= i && t.destroy();
                    }
                  })(t, i.value, s, o),
                  t.destroyed || (i.value = (0, r.uZ)(i.value, s, o));
              }
            })(t, e);
        }
      }
      async function M(t, e = !0) {
        await t.addParticleUpdater('size', () => new C(), e);
      }
      async function S(t, e = !0) {
        await c(t, !1),
          await h(t, !1),
          await g(t, !1),
          await v(t, !1),
          await P(t, !1),
          await M(t, !1),
          await t.refresh(e);
      }
      async function z() {
        (0, r.bx)('ease-in-quad', (t) => t ** 2),
          (0, r.bx)('ease-out-quad', (t) => 1 - (1 - t) ** 2),
          (0, r.bx)('ease-in-out-quad', (t) =>
            t < 0.5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2,
          );
      }
      class T {
        constructor(t) {
          (this.container = t), (this.type = 'external');
        }
      }
      var E = i(2836),
        R = i(8026);
      class I {
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.easing = 'ease-out-quad'),
            (this.factor = 1),
            (this.maxSpeed = 50),
            (this.speed = 1);
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
            void 0 !== t.speed && (this.speed = t.speed));
        }
      }
      class D extends T {
        constructor(t, e) {
          super(e),
            (this._clickAttract = () => {
              let t = this.container;
              t.attract || (t.attract = { particles: [] });
              let { attract: e } = t;
              if (
                (e.finish ||
                  (e.count || (e.count = 0),
                  e.count++,
                  e.count !== t.particles.count || (e.finish = !0)),
                e.clicking)
              ) {
                let e = t.interactivity.mouse.clickPosition,
                  i = t.retina.attractModeDistance;
                if (!i || i < 0 || !e) return;
                this._processAttract(e, i, new E.C(e.x, e.y, i));
              } else !1 === e.clicking && (e.particles = []);
            }),
            (this._hoverAttract = () => {
              let t = this.container,
                e = t.interactivity.mouse.position,
                i = t.retina.attractModeDistance;
              i &&
                !(i < 0) &&
                e &&
                this._processAttract(e, i, new E.C(e.x, e.y, i));
            }),
            (this._processAttract = (t, e, i) => {
              let n = this.container,
                s = n.actualOptions.interactivity.modes.attract;
              if (!s) return;
              let o = n.particles.quadTree.query(i, (t) => this.isEnabled(t));
              for (let i of o) {
                let { dx: n, dy: o, distance: a } = (0, r.oW)(i.position, t),
                  l = s.speed * s.factor,
                  c = (0, r.uZ)(
                    (0, r._X)(s.easing)(1 - a / e) * l,
                    0,
                    s.maxSpeed,
                  ),
                  u = w.O.create(
                    0 === a ? l : (n / a) * c,
                    0 === a ? l : (o / a) * c,
                  );
                i.position.subFrom(u);
              }
            }),
            (this._engine = t),
            e.attract || (e.attract = { particles: [] }),
            (this.handleClickMode = (t) => {
              let i = this.container.actualOptions,
                n = i.interactivity.modes.attract;
              if (n && 'attract' === t) {
                for (let t of (e.attract || (e.attract = { particles: [] }),
                (e.attract.clicking = !0),
                (e.attract.count = 0),
                e.attract.particles))
                  this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                (e.attract.particles = []),
                  (e.attract.finish = !1),
                  setTimeout(() => {
                    e.destroyed ||
                      (e.attract || (e.attract = { particles: [] }),
                      (e.attract.clicking = !1));
                  }, 1e3 * n.duration);
              }
            });
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.attract;
          e &&
            (t.retina.attractModeDistance = e.distance * t.retina.pixelRatio);
        }
        async interact() {
          let t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === R.Wt,
            n = e.interactivity.events,
            s = n.onHover.enable,
            o = n.onHover.mode,
            a = n.onClick.enable,
            r = n.onClick.mode;
          i && s && (0, u.dB)('attract', o)
            ? this._hoverAttract()
            : a && (0, u.dB)('attract', r) && this._clickAttract();
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            n = e.interactivity.mouse,
            s = (t?.interactivity ?? i.interactivity).events;
          if (
            (!n.position || !s.onHover.enable) &&
            (!n.clickPosition || !s.onClick.enable)
          )
            return !1;
          let o = s.onHover.mode,
            a = s.onClick.mode;
          return (0, u.dB)('attract', o) || (0, u.dB)('attract', a);
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.attract || (t.attract = new I()), e))
            t.attract.load(i?.attract);
        }
        reset() {}
      }
      async function A(t, e = !0) {
        await t.addInteractor('externalAttract', (e) => new D(t, e), e);
      }
      var j = i(1995);
      class L {
        constructor() {
          this.distance = 200;
        }
        load(t) {
          t && void 0 !== t.distance && (this.distance = t.distance);
        }
      }
      class F extends T {
        constructor(t) {
          super(t),
            (this._processBounce = (t, e, i) => {
              let n = this.container.particles.quadTree.query(i, (t) =>
                this.isEnabled(t),
              );
              for (let s of n)
                i instanceof E.C
                  ? (0, u.kR)((0, u.gy)(s), {
                      position: t,
                      radius: e,
                      mass: (e ** 2 * Math.PI) / 2,
                      velocity: w.O.origin,
                      factor: w.O.origin,
                    })
                  : i instanceof j.A && (0, u.dp)(s, (0, u.M_)(t, e));
            }),
            (this._processMouseBounce = () => {
              let t = this.container,
                e = t.retina.pixelRatio,
                i = t.interactivity.mouse.position,
                n = t.retina.bounceModeDistance;
              n &&
                !(n < 0) &&
                i &&
                this._processBounce(i, n, new E.C(i.x, i.y, n + 10 * e));
            }),
            (this._singleSelectorBounce = (t, e) => {
              let i = this.container,
                n = document.querySelectorAll(t);
              n.length &&
                n.forEach((t) => {
                  let n = i.retina.pixelRatio,
                    s = {
                      x: (t.offsetLeft + t.offsetWidth / 2) * n,
                      y: (t.offsetTop + t.offsetHeight / 2) * n,
                    },
                    o = (t.offsetWidth / 2) * n,
                    a = 10 * n,
                    r =
                      'circle' === e.type
                        ? new E.C(s.x, s.y, o + a)
                        : new j.A(
                            t.offsetLeft * n - a,
                            t.offsetTop * n - a,
                            t.offsetWidth * n + 2 * a,
                            t.offsetHeight * n + 2 * a,
                          );
                  this._processBounce(s, o, r);
                });
            });
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.bounce;
          e && (t.retina.bounceModeDistance = e.distance * t.retina.pixelRatio);
        }
        async interact() {
          let t = this.container,
            e = t.actualOptions,
            i = e.interactivity.events,
            n = t.interactivity.status === R.Wt,
            s = i.onHover.enable,
            o = i.onHover.mode,
            a = i.onDiv;
          n && s && (0, u.dB)('bounce', o)
            ? this._processMouseBounce()
            : (0, u.XD)('bounce', a, (t, e) =>
                this._singleSelectorBounce(t, e),
              );
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            n = e.interactivity.mouse,
            s = (t?.interactivity ?? i.interactivity).events,
            o = s.onDiv;
          return (
            (n.position &&
              s.onHover.enable &&
              (0, u.dB)('bounce', s.onHover.mode)) ||
            (0, u.wm)('bounce', o)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.bounce || (t.bounce = new L()), e))
            t.bounce.load(i?.bounce);
        }
        reset() {}
      }
      async function B(t, e = !0) {
        await t.addInteractor('externalBounce', (t) => new F(t), e);
      }
      var V = i(2665);
      class q {
        constructor() {
          (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
        }
        load(t) {
          if (t) {
            if (
              (void 0 !== t.distance && (this.distance = t.distance),
              void 0 !== t.duration && (this.duration = t.duration),
              void 0 !== t.mix && (this.mix = t.mix),
              void 0 !== t.opacity && (this.opacity = t.opacity),
              void 0 !== t.color)
            ) {
              let e = (0, u.kJ)(this.color) ? void 0 : this.color;
              this.color = (0, u.KH)(t.color, (t) => V.O.create(e, t));
            }
            void 0 !== t.size && (this.size = t.size);
          }
        }
      }
      class W extends q {
        constructor() {
          super(), (this.selectors = []);
        }
        get ids() {
          return (0, u.KH)(this.selectors, (t) => t.replace('#', ''));
        }
        set ids(t) {
          this.selectors = (0, u.KH)(t, (t) => `#${t}`);
        }
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.ids && (this.ids = t.ids),
              void 0 !== t.selectors && (this.selectors = t.selectors));
        }
      }
      class H extends q {
        load(t) {
          super.load(t),
            t &&
              (this.divs = (0, u.KH)(t.divs, (t) => {
                let e = new W();
                return e.load(t), e;
              }));
        }
      }
      function N(t, e, i, n) {
        if (e >= i) {
          let s = t + (e - i) * n;
          return (0, r.uZ)(s, t, e);
        }
        if (e < i) {
          let s = t - (i - e) * n;
          return (0, r.uZ)(s, e, t);
        }
      }
      class U extends T {
        constructor(t) {
          super(t),
            (this._clickBubble = () => {
              let t = this.container,
                e = t.actualOptions,
                i = t.interactivity.mouse.clickPosition,
                n = e.interactivity.modes.bubble;
              if (!n || !i) return;
              t.bubble || (t.bubble = {});
              let s = t.retina.bubbleModeDistance;
              if (!s || s < 0) return;
              let o = t.particles.quadTree.queryCircle(i, s, (t) =>
                  this.isEnabled(t),
                ),
                { bubble: a } = t;
              for (let e of o) {
                if (!a.clicking) continue;
                e.bubble.inRange = !a.durationEnd;
                let o = e.getPosition(),
                  l = (0, r.Sp)(o, i),
                  c =
                    (new Date().getTime() -
                      (t.interactivity.mouse.clickTime || 0)) /
                    1e3;
                c > n.duration && (a.durationEnd = !0),
                  c > 2 * n.duration &&
                    ((a.clicking = !1), (a.durationEnd = !1));
                let u = {
                  bubbleObj: {
                    optValue: t.retina.bubbleModeSize,
                    value: e.bubble.radius,
                  },
                  particlesObj: {
                    optValue:
                      (0, r.KI)(e.options.size.value) * t.retina.pixelRatio,
                    value: e.size.value,
                  },
                  type: 'size',
                };
                this._process(e, l, c, u);
                let d = {
                  bubbleObj: { optValue: n.opacity, value: e.bubble.opacity },
                  particlesObj: {
                    optValue: (0, r.KI)(e.options.opacity.value),
                    value: e.opacity?.value ?? 1,
                  },
                  type: 'opacity',
                };
                this._process(e, l, c, d),
                  !a.durationEnd && l <= s
                    ? this._hoverBubbleColor(e, l)
                    : delete e.bubble.color;
              }
            }),
            (this._hoverBubble = () => {
              let t = this.container,
                e = t.interactivity.mouse.position,
                i = t.retina.bubbleModeDistance;
              if (!i || i < 0 || void 0 === e) return;
              let n = t.particles.quadTree.queryCircle(e, i, (t) =>
                this.isEnabled(t),
              );
              for (let s of n) {
                s.bubble.inRange = !0;
                let n = s.getPosition(),
                  o = (0, r.Sp)(n, e),
                  a = 1 - o / i;
                o <= i
                  ? a >= 0 &&
                    t.interactivity.status === R.Wt &&
                    (this._hoverBubbleSize(s, a),
                    this._hoverBubbleOpacity(s, a),
                    this._hoverBubbleColor(s, a))
                  : this.reset(s),
                  t.interactivity.status === R.aM && this.reset(s);
              }
            }),
            (this._hoverBubbleColor = (t, e, i) => {
              let n = this.container.actualOptions,
                s = i ?? n.interactivity.modes.bubble;
              if (s) {
                if (!t.bubble.finalColor) {
                  let e = s.color;
                  if (!e) return;
                  let i = (0, u.wA)(e);
                  t.bubble.finalColor = (0, p.lN)(i);
                }
                if (t.bubble.finalColor) {
                  if (s.mix) {
                    t.bubble.color = void 0;
                    let i = t.getFillColor();
                    t.bubble.color = i
                      ? (0, p.lC)((0, p.oc)(i, t.bubble.finalColor, 1 - e, e))
                      : t.bubble.finalColor;
                  } else t.bubble.color = t.bubble.finalColor;
                }
              }
            }),
            (this._hoverBubbleOpacity = (t, e, i) => {
              let n = this.container,
                s = n.actualOptions,
                o = i?.opacity ?? s.interactivity.modes.bubble?.opacity;
              if (!o) return;
              let a = t.options.opacity.value,
                l = t.opacity?.value ?? 1,
                c = N(l, o, (0, r.KI)(a), e);
              void 0 !== c && (t.bubble.opacity = c);
            }),
            (this._hoverBubbleSize = (t, e, i) => {
              let n = this.container,
                s = i?.size
                  ? i.size * n.retina.pixelRatio
                  : n.retina.bubbleModeSize;
              if (void 0 === s) return;
              let o = (0, r.KI)(t.options.size.value) * n.retina.pixelRatio,
                a = t.size.value,
                l = N(a, s, o, e);
              void 0 !== l && (t.bubble.radius = l);
            }),
            (this._process = (t, e, i, n) => {
              let s = this.container,
                o = n.bubbleObj.optValue,
                a = s.actualOptions,
                r = a.interactivity.modes.bubble;
              if (!r || void 0 === o) return;
              let l = r.duration,
                c = s.retina.bubbleModeDistance,
                u = n.particlesObj.optValue,
                d = n.bubbleObj.value,
                h = n.particlesObj.value || 0,
                p = n.type;
              if (c && !(c < 0) && o !== u) {
                if ((s.bubble || (s.bubble = {}), s.bubble.durationEnd))
                  d &&
                    ('size' === p && delete t.bubble.radius,
                    'opacity' === p && delete t.bubble.opacity);
                else if (e <= c) {
                  if ((d ?? h) !== o) {
                    let e = h - (i * (h - o)) / l;
                    'size' === p && (t.bubble.radius = e),
                      'opacity' === p && (t.bubble.opacity = e);
                  }
                } else
                  'size' === p && delete t.bubble.radius,
                    'opacity' === p && delete t.bubble.opacity;
              }
            }),
            (this._singleSelectorHover = (t, e, i) => {
              let n = this.container,
                s = document.querySelectorAll(e),
                o = n.actualOptions.interactivity.modes.bubble;
              o &&
                s.length &&
                s.forEach((e) => {
                  let s = n.retina.pixelRatio,
                    a = {
                      x: (e.offsetLeft + e.offsetWidth / 2) * s,
                      y: (e.offsetTop + e.offsetHeight / 2) * s,
                    },
                    r = (e.offsetWidth / 2) * s,
                    l =
                      'circle' === i.type
                        ? new E.C(a.x, a.y, r)
                        : new j.A(
                            e.offsetLeft * s,
                            e.offsetTop * s,
                            e.offsetWidth * s,
                            e.offsetHeight * s,
                          ),
                    c = n.particles.quadTree.query(l, (t) => this.isEnabled(t));
                  for (let i of c) {
                    if (!l.contains(i.getPosition())) continue;
                    i.bubble.inRange = !0;
                    let n = o.divs,
                      s = (0, u.iC)(n, e);
                    (i.bubble.div && i.bubble.div === e) ||
                      (this.clear(i, t, !0), (i.bubble.div = e)),
                      this._hoverBubbleSize(i, 1, s),
                      this._hoverBubbleOpacity(i, 1, s),
                      this._hoverBubbleColor(i, 1, s);
                  }
                });
            }),
            t.bubble || (t.bubble = {}),
            (this.handleClickMode = (e) => {
              'bubble' === e &&
                (t.bubble || (t.bubble = {}), (t.bubble.clicking = !0));
            });
        }
        clear(t, e, i) {
          (!t.bubble.inRange || i) &&
            (delete t.bubble.div,
            delete t.bubble.opacity,
            delete t.bubble.radius,
            delete t.bubble.color);
        }
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.bubble;
          e &&
            ((t.retina.bubbleModeDistance = e.distance * t.retina.pixelRatio),
            void 0 !== e.size &&
              (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio));
        }
        async interact(t) {
          let e = this.container.actualOptions,
            i = e.interactivity.events,
            n = i.onHover,
            s = i.onClick,
            o = n.enable,
            a = n.mode,
            r = s.enable,
            l = s.mode,
            c = i.onDiv;
          o && (0, u.dB)('bubble', a)
            ? this._hoverBubble()
            : r && (0, u.dB)('bubble', l)
              ? this._clickBubble()
              : (0, u.XD)('bubble', c, (e, i) =>
                  this._singleSelectorHover(t, e, i),
                );
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            n = e.interactivity.mouse,
            s = (t?.interactivity ?? i.interactivity).events,
            { onClick: o, onDiv: a, onHover: r } = s,
            l = (0, u.wm)('bubble', a);
          return (
            (!!l ||
              (!!r.enable && !!n.position) ||
              (!!o.enable && !!n.clickPosition)) &&
            ((0, u.dB)('bubble', r.mode) || (0, u.dB)('bubble', o.mode) || l)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.bubble || (t.bubble = new H()), e))
            t.bubble.load(i?.bubble);
        }
        reset(t) {
          t.bubble.inRange = !1;
        }
      }
      async function G(t, e = !0) {
        await t.addInteractor('externalBubble', (t) => new U(t), e);
      }
      class Z {
        constructor() {
          this.opacity = 0.5;
        }
        load(t) {
          t && void 0 !== t.opacity && (this.opacity = t.opacity);
        }
      }
      class $ {
        constructor() {
          (this.distance = 80), (this.links = new Z()), (this.radius = 60);
        }
        get lineLinked() {
          return this.links;
        }
        set lineLinked(t) {
          this.links = t;
        }
        get line_linked() {
          return this.links;
        }
        set line_linked(t) {
          this.links = t;
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(t.links ?? t.lineLinked ?? t.line_linked),
            void 0 !== t.radius && (this.radius = t.radius));
        }
      }
      var Y = i(1425);
      class K extends T {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.connect;
          e &&
            ((t.retina.connectModeDistance = e.distance * t.retina.pixelRatio),
            (t.retina.connectModeRadius = e.radius * t.retina.pixelRatio));
        }
        async interact() {
          let t = this.container,
            e = t.actualOptions;
          if (
            e.interactivity.events.onHover.enable &&
            'pointermove' === t.interactivity.status
          ) {
            let e = t.interactivity.mouse.position;
            if (
              !t.retina.connectModeDistance ||
              t.retina.connectModeDistance < 0 ||
              !t.retina.connectModeRadius ||
              t.retina.connectModeRadius < 0 ||
              !e
            )
              return;
            let i = Math.abs(t.retina.connectModeRadius),
              n = t.particles.quadTree.queryCircle(e, i, (t) =>
                this.isEnabled(t),
              ),
              s = 0;
            for (let e of n) {
              let i = e.getPosition();
              for (let o of n.slice(s + 1)) {
                let n = o.getPosition(),
                  s = Math.abs(t.retina.connectModeDistance),
                  a = Math.abs(i.x - n.x),
                  r = Math.abs(i.y - n.y);
                a < s &&
                  r < s &&
                  (function (t, e, i) {
                    t.canvas.draw((n) => {
                      var s;
                      let o = (function (t, e, i, n) {
                        let s = t.actualOptions,
                          o = s.interactivity.modes.connect;
                        if (o)
                          return (function (t, e, i, n) {
                            let s = Math.floor(i.getRadius() / e.getRadius()),
                              o = e.getFillColor(),
                              a = i.getFillColor();
                            if (!o || !a) return;
                            let r = e.getPosition(),
                              l = i.getPosition(),
                              c = (0, p.oc)(o, a, e.getRadius(), i.getRadius()),
                              u = t.createLinearGradient(r.x, r.y, l.x, l.y);
                            return (
                              u.addColorStop(0, (0, p.vz)(o, n)),
                              u.addColorStop(s > 1 ? 1 : s, (0, p.iz)(c, n)),
                              u.addColorStop(1, (0, p.vz)(a, n)),
                              u
                            );
                          })(e, i, n, o.links.opacity);
                      })(t, n, e, i);
                      if (!o) return;
                      let a = e.getPosition(),
                        r = i.getPosition();
                      (s = e.retina.linksWidth ?? 0),
                        (0, Y.pS)(n, a, r),
                        (n.lineWidth = s),
                        (n.strokeStyle = o),
                        n.stroke();
                    });
                  })(t, e, o);
              }
              ++s;
            }
          }
        }
        isEnabled(t) {
          let e = this.container,
            i = e.interactivity.mouse,
            n = (t?.interactivity ?? e.actualOptions.interactivity).events;
          return (
            !!n.onHover.enable &&
            !!i.position &&
            (0, u.dB)('connect', n.onHover.mode)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.connect || (t.connect = new $()), e))
            t.connect.load(i?.connect);
        }
        reset() {}
      }
      async function X(t, e = !0) {
        await t.addInteractor('externalConnect', (t) => new K(t), e);
      }
      class J {
        constructor() {
          (this.blink = !1), (this.consent = !1), (this.opacity = 1);
        }
        load(t) {
          t &&
            (void 0 !== t.blink && (this.blink = t.blink),
            void 0 !== t.color &&
              (this.color = V.O.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      }
      class Q {
        constructor() {
          (this.distance = 100), (this.links = new J());
        }
        get lineLinked() {
          return this.links;
        }
        set lineLinked(t) {
          this.links = t;
        }
        get line_linked() {
          return this.links;
        }
        set line_linked(t) {
          this.links = t;
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(t.links ?? t.lineLinked ?? t.line_linked));
        }
      }
      class tt extends T {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.grab;
          e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio);
        }
        async interact() {
          let t = this.container,
            e = t.actualOptions,
            i = e.interactivity;
          if (
            !i.modes.grab ||
            !i.events.onHover.enable ||
            t.interactivity.status !== R.Wt
          )
            return;
          let n = t.interactivity.mouse.position;
          if (!n) return;
          let s = t.retina.grabModeDistance;
          if (!s || s < 0) return;
          let o = t.particles.quadTree.queryCircle(n, s, (t) =>
            this.isEnabled(t),
          );
          for (let e of o) {
            let o = e.getPosition(),
              a = (0, r.Sp)(o, n);
            if (a > s) continue;
            let l = i.modes.grab.links,
              c = l.opacity,
              u = c - (a * c) / s;
            if (u <= 0) continue;
            let d = l.color ?? e.options.links?.color;
            if (!t.particles.grabLineColor && d) {
              let e = i.modes.grab.links;
              t.particles.grabLineColor = (0, p.Dt)(d, e.blink, e.consent);
            }
            let h = (0, p.BE)(e, void 0, t.particles.grabLineColor);
            h &&
              (function (t, e, i, n, s) {
                t.canvas.draw((t) => {
                  var o;
                  let a = e.getPosition();
                  (o = e.retina.linksWidth ?? 0),
                    (0, Y.pS)(t, a, s),
                    (t.strokeStyle = (0, p.iz)(i, n)),
                    (t.lineWidth = o),
                    t.stroke();
                });
              })(t, e, h, u, n);
          }
        }
        isEnabled(t) {
          let e = this.container,
            i = e.interactivity.mouse,
            n = (t?.interactivity ?? e.actualOptions.interactivity).events;
          return (
            n.onHover.enable &&
            !!i.position &&
            (0, u.dB)('grab', n.onHover.mode)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.grab || (t.grab = new Q()), e)) t.grab.load(i?.grab);
        }
        reset() {}
      }
      async function te(t, e = !0) {
        await t.addInteractor('externalGrab', (t) => new tt(t), e);
      }
      class ti extends T {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ('pause' !== t) return;
              let e = this.container;
              e.getAnimationStatus() ? e.pause() : e.play();
            });
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
          return !0;
        }
        reset() {}
      }
      async function tn(t, e = !0) {
        await t.addInteractor('externalPause', (t) => new ti(t), e);
      }
      class ts {
        constructor() {
          (this.default = !0), (this.groups = []), (this.quantity = 4);
        }
        get particles_nb() {
          return this.quantity;
        }
        set particles_nb(t) {
          this.quantity = (0, r.Cs)(t);
        }
        load(t) {
          if (!t) return;
          void 0 !== t.default && (this.default = t.default),
            void 0 !== t.groups && (this.groups = t.groups.map((t) => t)),
            this.groups.length || (this.default = !0);
          let e = t.quantity ?? t.particles_nb;
          void 0 !== e && (this.quantity = (0, r.Cs)(e));
        }
      }
      class to extends T {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ('push' !== t) return;
              let e = this.container,
                i = e.actualOptions,
                n = i.interactivity.modes.push;
              if (!n) return;
              let s = (0, r.Gu)(n.quantity);
              if (s <= 0) return;
              let o = (0, u.c8)([void 0, ...n.groups]),
                a = void 0 !== o ? e.actualOptions.particles.groups[o] : void 0;
              e.particles.push(s, e.interactivity.mouse, a, o);
            });
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
          return !0;
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.push || (t.push = new ts()), e))
            t.push.load(i?.push);
        }
        reset() {}
      }
      async function ta(t, e = !0) {
        await t.addInteractor('externalPush', (t) => new to(t), e);
      }
      class tr {
        constructor() {
          this.quantity = 2;
        }
        get particles_nb() {
          return this.quantity;
        }
        set particles_nb(t) {
          this.quantity = (0, r.Cs)(t);
        }
        load(t) {
          if (!t) return;
          let e = t.quantity ?? t.particles_nb;
          void 0 !== e && (this.quantity = (0, r.Cs)(e));
        }
      }
      class tl extends T {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              let e = this.container,
                i = e.actualOptions;
              if (!i.interactivity.modes.remove || 'remove' !== t) return;
              let n = (0, r.Gu)(i.interactivity.modes.remove.quantity);
              e.particles.removeQuantity(n);
            });
        }
        clear() {}
        init() {}
        async interact() {}
        isEnabled() {
          return !0;
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.remove || (t.remove = new tr()), e))
            t.remove.load(i?.remove);
        }
        reset() {}
      }
      async function tc(t, e = !0) {
        await t.addInteractor('externalRemove', (t) => new tl(t), e);
      }
      class tu {
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.factor = 100),
            (this.speed = 1),
            (this.maxSpeed = 50),
            (this.easing = 'ease-out-quad');
        }
        load(t) {
          t &&
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
        }
      }
      class td extends tu {
        constructor() {
          super(), (this.selectors = []);
        }
        get ids() {
          return (0, u.KH)(this.selectors, (t) => t.replace('#', ''));
        }
        set ids(t) {
          this.selectors = (0, u.KH)(t, (t) => `#${t}`);
        }
        load(t) {
          super.load(t),
            t &&
              (void 0 !== t.ids && (this.ids = t.ids),
              void 0 !== t.selectors && (this.selectors = t.selectors));
        }
      }
      class th extends tu {
        load(t) {
          super.load(t),
            t &&
              (this.divs = (0, u.KH)(t.divs, (t) => {
                let e = new td();
                return e.load(t), e;
              }));
        }
      }
      class tp extends T {
        constructor(t, e) {
          super(e),
            (this._clickRepulse = () => {
              let t = this.container,
                e = t.actualOptions.interactivity.modes.repulse;
              if (!e) return;
              let i = t.repulse || { particles: [] };
              if (
                (i.finish ||
                  (i.count || (i.count = 0),
                  i.count++,
                  i.count !== t.particles.count || (i.finish = !0)),
                i.clicking)
              ) {
                let n = t.retina.repulseModeDistance;
                if (!n || n < 0) return;
                let s = Math.pow(n / 6, 3),
                  o = t.interactivity.mouse.clickPosition;
                if (void 0 === o) return;
                let a = new E.C(o.x, o.y, s),
                  l = t.particles.quadTree.query(a, (t) => this.isEnabled(t));
                for (let t of l) {
                  let { dx: n, dy: a, distance: l } = (0, r.oW)(o, t.position),
                    c = l ** 2,
                    u = e.speed,
                    d = (-s * u) / c;
                  if (c <= s) {
                    i.particles.push(t);
                    let e = w.O.create(n, a);
                    (e.length = d), t.velocity.setTo(e);
                  }
                }
              } else if (!1 === i.clicking) {
                for (let t of i.particles) t.velocity.setTo(t.initialVelocity);
                i.particles = [];
              }
            }),
            (this._hoverRepulse = () => {
              let t = this.container,
                e = t.interactivity.mouse.position,
                i = t.retina.repulseModeDistance;
              i &&
                !(i < 0) &&
                e &&
                this._processRepulse(e, i, new E.C(e.x, e.y, i));
            }),
            (this._processRepulse = (t, e, i, n) => {
              let s = this.container,
                o = s.particles.quadTree.query(i, (t) => this.isEnabled(t)),
                a = s.actualOptions.interactivity.modes.repulse;
              if (a)
                for (let i of o) {
                  let { dx: s, dy: o, distance: l } = (0, r.oW)(i.position, t),
                    c = (n?.speed ?? a.speed) * a.factor,
                    u = (0, r.uZ)(
                      (0, r._X)(a.easing)(1 - l / e) * c,
                      0,
                      a.maxSpeed,
                    ),
                    d = w.O.create(
                      0 === l ? c : (s / l) * u,
                      0 === l ? c : (o / l) * u,
                    );
                  i.position.addTo(d);
                }
            }),
            (this._singleSelectorRepulse = (t, e) => {
              let i = this.container,
                n = i.actualOptions.interactivity.modes.repulse;
              if (!n) return;
              let s = document.querySelectorAll(t);
              s.length &&
                s.forEach((t) => {
                  let s = i.retina.pixelRatio,
                    o = {
                      x: (t.offsetLeft + t.offsetWidth / 2) * s,
                      y: (t.offsetTop + t.offsetHeight / 2) * s,
                    },
                    a = (t.offsetWidth / 2) * s,
                    r =
                      'circle' === e.type
                        ? new E.C(o.x, o.y, a)
                        : new j.A(
                            t.offsetLeft * s,
                            t.offsetTop * s,
                            t.offsetWidth * s,
                            t.offsetHeight * s,
                          ),
                    l = n.divs,
                    c = (0, u.iC)(l, t);
                  this._processRepulse(o, a, r, c);
                });
            }),
            (this._engine = t),
            e.repulse || (e.repulse = { particles: [] }),
            (this.handleClickMode = (t) => {
              let i = this.container.actualOptions,
                n = i.interactivity.modes.repulse;
              if (!n || 'repulse' !== t) return;
              e.repulse || (e.repulse = { particles: [] });
              let s = e.repulse;
              for (let t of ((s.clicking = !0),
              (s.count = 0),
              e.repulse.particles))
                this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
              (s.particles = []),
                (s.finish = !1),
                setTimeout(() => {
                  e.destroyed || (s.clicking = !1);
                }, 1e3 * n.duration);
            });
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.repulse;
          e &&
            (t.retina.repulseModeDistance = e.distance * t.retina.pixelRatio);
        }
        async interact() {
          let t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === R.Wt,
            n = e.interactivity.events,
            s = n.onHover,
            o = s.enable,
            a = s.mode,
            r = n.onClick,
            l = r.enable,
            c = r.mode,
            d = n.onDiv;
          i && o && (0, u.dB)('repulse', a)
            ? this._hoverRepulse()
            : l && (0, u.dB)('repulse', c)
              ? this._clickRepulse()
              : (0, u.XD)('repulse', d, (t, e) =>
                  this._singleSelectorRepulse(t, e),
                );
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            n = e.interactivity.mouse,
            s = (t?.interactivity ?? i.interactivity).events,
            o = s.onDiv,
            a = s.onHover,
            r = s.onClick,
            l = (0, u.wm)('repulse', o);
          if (!(l || (a.enable && n.position) || (r.enable && n.clickPosition)))
            return !1;
          let c = a.mode,
            d = r.mode;
          return (0, u.dB)('repulse', c) || (0, u.dB)('repulse', d) || l;
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.repulse || (t.repulse = new th()), e))
            t.repulse.load(i?.repulse);
        }
        reset() {}
      }
      async function tf(t, e = !0) {
        await t.addInteractor('externalRepulse', (e) => new tp(t, e), e);
      }
      class tm {
        constructor() {
          (this.factor = 3), (this.radius = 200);
        }
        load(t) {
          t &&
            (void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.radius && (this.radius = t.radius));
        }
      }
      class tg extends T {
        constructor(t) {
          super(t);
        }
        clear(t, e, i) {
          (!t.slow.inRange || i) && (t.slow.factor = 1);
        }
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.slow;
          e && (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio);
        }
        async interact() {}
        isEnabled(t) {
          let e = this.container,
            i = e.interactivity.mouse,
            n = (t?.interactivity ?? e.actualOptions.interactivity).events;
          return (
            n.onHover.enable &&
            !!i.position &&
            (0, u.dB)('slow', n.onHover.mode)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.slow || (t.slow = new tm()), e))
            t.slow.load(i?.slow);
        }
        reset(t) {
          t.slow.inRange = !1;
          let e = this.container,
            i = e.actualOptions,
            n = e.interactivity.mouse.position,
            s = e.retina.slowModeRadius,
            o = i.interactivity.modes.slow;
          if (!o || !s || s < 0 || !n) return;
          let a = t.getPosition(),
            l = (0, r.Sp)(n, a),
            c = o.factor,
            { slow: u } = t;
          l > s || ((u.inRange = !0), (u.factor = l / s / c));
        }
      }
      async function ty(t, e = !0) {
        await t.addInteractor('externalSlow', (t) => new tg(t), e);
      }
      let tv = [0, 4, 2, 1],
        tb = [8, 8, 4, 2];
      class tw {
        constructor(t) {
          (this.pos = 0), (this.data = new Uint8ClampedArray(t));
        }
        getString(t) {
          let e = this.data.slice(this.pos, this.pos + t);
          return (
            (this.pos += e.length),
            e.reduce((t, e) => t + String.fromCharCode(e), '')
          );
        }
        nextByte() {
          return this.data[this.pos++];
        }
        nextTwoBytes() {
          return (
            (this.pos += 2),
            this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
          );
        }
        readSubBlocks() {
          let t = '',
            e = 0;
          do {
            e = this.data[this.pos++];
            for (
              let i = e;
              --i >= 0;
              t += String.fromCharCode(this.data[this.pos++])
            );
          } while (0 !== e);
          return t;
        }
        readSubBlocksBin() {
          let t = 0,
            e = 0;
          for (let i = 0; 0 !== (t = this.data[this.pos + i]); i += t + 1)
            e += t;
          let i = new Uint8Array(e);
          for (let e = 0; 0 !== (t = this.data[this.pos++]); )
            for (let n = t; --n >= 0; i[e++] = this.data[this.pos++]);
          return i;
        }
        skipSubBlocks() {
          for (
            ;
            0 !== this.data[this.pos];
            this.pos += this.data[this.pos] + 1
          );
          this.pos++;
        }
      }
      function tx(t, e) {
        let i = [];
        for (let n = 0; n < e; n++)
          i.push({
            r: t.data[t.pos],
            g: t.data[t.pos + 1],
            b: t.data[t.pos + 2],
          }),
            (t.pos += 3);
        return i;
      }
      async function t_(t, e, i, n) {
        switch (t.nextByte()) {
          case 249: {
            let s = e.frames[i(!1)];
            t.pos++;
            let o = t.nextByte();
            (s.GCreserved = (224 & o) >>> 5),
              (s.disposalMethod = (28 & o) >>> 2),
              (s.userInputDelayFlag = (2 & o) == 2),
              (s.delayTime = 10 * t.nextTwoBytes());
            let a = t.nextByte();
            (1 & o) == 1 && n(a), t.pos++;
            break;
          }
          case 255: {
            t.pos++;
            let i = {
              identifier: t.getString(8),
              authenticationCode: t.getString(3),
              data: t.readSubBlocksBin(),
            };
            e.applicationExtensions.push(i);
            break;
          }
          case 254:
            e.comments.push([i(!1), t.readSubBlocks()]);
            break;
          case 1:
            if (0 === e.globalColorTable.length)
              throw EvalError(
                'plain text extension without global color table',
              );
            t.pos++,
              (e.frames[i(!1)].plainTextData = {
                left: t.nextTwoBytes(),
                top: t.nextTwoBytes(),
                width: t.nextTwoBytes(),
                height: t.nextTwoBytes(),
                charSize: { width: t.nextTwoBytes(), height: t.nextTwoBytes() },
                foregroundColor: t.nextByte(),
                backgroundColor: t.nextByte(),
                text: t.readSubBlocks(),
              });
            break;
          default:
            t.skipSubBlocks();
        }
      }
      async function tk(t, e, i, n, s, o) {
        let a = e.frames[n(!0)];
        (a.left = t.nextTwoBytes()),
          (a.top = t.nextTwoBytes()),
          (a.width = t.nextTwoBytes()),
          (a.height = t.nextTwoBytes());
        let r = t.nextByte(),
          l = (128 & r) == 128;
        (a.sortFlag = (32 & r) == 32),
          (a.reserved = (24 & r) >>> 3),
          l && (a.localColorTable = tx(t, 1 << ((7 & r) + 1)));
        let c = (t) => {
            let {
              r: n,
              g: o,
              b: r,
            } = (l ? a.localColorTable : e.globalColorTable)[t];
            return {
              r: n,
              g: o,
              b: r,
              a: t === s(null) ? (i ? ~~((n + o + r) / 3) : 0) : 255,
            };
          },
          u = (() => {
            try {
              return new ImageData(a.width, a.height, { colorSpace: 'srgb' });
            } catch (t) {
              if (t instanceof DOMException && 'IndexSizeError' === t.name)
                return null;
              throw t;
            }
          })();
        if (null == u) throw EvalError('GIF frame size is to large');
        let d = t.nextByte(),
          h = t.readSubBlocksBin(),
          p = 1 << d,
          f = (t, e) => {
            let i = t >>> 3,
              n = 7 & t;
            return (
              ((h[i] + (h[i + 1] << 8) + (h[i + 2] << 16)) &
                (((1 << e) - 1) << n)) >>>
              n
            );
          };
        if ((64 & r) == 64) {
          for (let i = 0, s = d + 1, r = 0, l = [[0]], h = 0; h < 4; h++) {
            if (tv[h] < a.height)
              for (let t = 0, e = 0; ; ) {
                let n = i;
                if (((i = f(r, s)), (r += s + 1), i === p)) {
                  (s = d + 1), (l.length = p + 2);
                  for (let t = 0; t < l.length; t++) l[t] = t < p ? [t] : [];
                } else {
                  i >= l.length
                    ? l.push(l[n].concat(l[n][0]))
                    : n !== p && l.push(l[n].concat(l[i][0]));
                  for (let n = 0; n < l[i].length; n++) {
                    let { r: s, g: o, b: r, a: d } = c(l[i][n]);
                    u.data.set(
                      [s, o, r, d],
                      tv[h] * a.width + tb[h] * e + (t % (4 * a.width)),
                    ),
                      (t += 4);
                  }
                  l.length === 1 << s && s < 12 && s++;
                }
                if (
                  t === 4 * a.width * (e + 1) &&
                  (e++, tv[h] + tb[h] * e >= a.height)
                )
                  break;
              }
            o?.(
              t.pos / (t.data.length - 1),
              n(!1) + 1,
              u,
              { x: a.left, y: a.top },
              { width: e.width, height: e.height },
            );
          }
          (a.image = u), (a.bitmap = await createImageBitmap(u));
        } else {
          for (let t = 0, e = d + 1, i = 0, n = [[0]], s = -4; ; ) {
            let o = t;
            if (((t = f(i, e)), (i += e), t === p)) {
              (e = d + 1), (n.length = p + 2);
              for (let t = 0; t < n.length; t++) n[t] = t < p ? [t] : [];
            } else {
              if (t === p + 1) break;
              t >= n.length
                ? n.push(n[o].concat(n[o][0]))
                : o !== p && n.push(n[o].concat(n[t][0]));
              for (let e = 0; e < n[t].length; e++) {
                let { r: i, g: o, b: a, a: r } = c(n[t][e]);
                u.data.set([i, o, a, r], (s += 4));
              }
              n.length >= 1 << e && e < 12 && e++;
            }
          }
          (a.image = u),
            (a.bitmap = await createImageBitmap(u)),
            o?.(
              (t.pos + 1) / t.data.length,
              n(!1) + 1,
              a.image,
              { x: a.left, y: a.top },
              { width: e.width, height: e.height },
            );
        }
      }
      async function tO(t, e, i, n, s, o) {
        switch (t.nextByte()) {
          case 59:
            return !0;
          case 44:
            await tk(t, e, i, n, s, o);
            break;
          case 33:
            await t_(t, e, n, s);
            break;
          default:
            throw EvalError('undefined block found');
        }
        return !1;
      }
      async function tP(t, e, i) {
        i || (i = !1);
        let n = await fetch(t);
        if (!n.ok && 404 === n.status) throw EvalError('file not found');
        let s = await n.arrayBuffer(),
          o = {
            width: 0,
            height: 0,
            totalTime: 0,
            colorRes: 0,
            pixelAspectRatio: 0,
            frames: [],
            sortFlag: !1,
            globalColorTable: [],
            backgroundImage: new ImageData(1, 1, { colorSpace: 'srgb' }),
            comments: [],
            applicationExtensions: [],
          },
          a = new tw(new Uint8ClampedArray(s));
        if ('GIF89a' !== a.getString(6))
          throw Error('not a supported GIF file');
        (o.width = a.nextTwoBytes()), (o.height = a.nextTwoBytes());
        let r = a.nextByte(),
          l = (128 & r) == 128;
        (o.colorRes = (112 & r) >>> 4), (o.sortFlag = (8 & r) == 8);
        let c = a.nextByte();
        (o.pixelAspectRatio = a.nextByte()),
          0 !== o.pixelAspectRatio &&
            (o.pixelAspectRatio = (o.pixelAspectRatio + 15) / 64),
          l && (o.globalColorTable = tx(a, 1 << ((7 & r) + 1)));
        let u = (() => {
          try {
            return new ImageData(o.width, o.height, { colorSpace: 'srgb' });
          } catch (t) {
            if (t instanceof DOMException && 'IndexSizeError' === t.name)
              return null;
            throw t;
          }
        })();
        if (null == u) throw Error('GIF frame size is to large');
        let { r: d, g: h, b: p } = o.globalColorTable[c];
        u.data.set(l ? [d, h, p, 255] : [0, 0, 0, 0]);
        for (let t = 4; t < u.data.length; t *= 2) u.data.copyWithin(t, 0, t);
        o.backgroundImage = u;
        let f = -1,
          m = !0,
          g = -1,
          y = (t) => (t && (m = !0), f),
          v = (t) => (null != t && (g = t), g);
        try {
          do
            m &&
              (o.frames.push({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                disposalMethod: 0,
                image: new ImageData(1, 1, { colorSpace: 'srgb' }),
                plainTextData: null,
                userInputDelayFlag: !1,
                delayTime: 0,
                sortFlag: !1,
                localColorTable: [],
                reserved: 0,
                GCreserved: 0,
              }),
              f++,
              (g = -1),
              (m = !1));
          while (!(await tO(a, o, i, y, v, e)));
          for (let t of (o.frames.length--, o.frames)) {
            if (t.userInputDelayFlag && 0 === t.delayTime) {
              o.totalTime = 1 / 0;
              break;
            }
            o.totalTime += t.delayTime;
          }
          return o;
        } catch (t) {
          if (t instanceof EvalError)
            throw Error(`error while parsing frame ${f} "${t.message}"`);
          throw t;
        }
      }
      let tC =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
      async function tM(t) {
        return new Promise((e) => {
          t.loading = !0;
          let i = new Image();
          (t.element = i),
            i.addEventListener('load', () => {
              (t.loading = !1), e();
            }),
            i.addEventListener('error', () => {
              (t.element = void 0),
                (t.error = !0),
                (t.loading = !1),
                (0, u.jl)().error(`${R.gK} loading image: ${t.source}`),
                e();
            }),
            (i.src = t.source);
        });
      }
      async function tS(t) {
        if ('gif' !== t.type) {
          await tM(t);
          return;
        }
        t.loading = !0;
        try {
          (t.gifData = await tP(t.source)),
            (t.gifLoopCount =
              (function (t) {
                for (let e of t.applicationExtensions)
                  if (e.identifier + e.authenticationCode === 'NETSCAPE2.0')
                    return e.data[1] + (e.data[2] << 8);
                return NaN;
              })(t.gifData) ?? 0),
            0 === t.gifLoopCount && (t.gifLoopCount = 1 / 0);
        } catch {
          t.error = !0;
        }
        t.loading = !1;
      }
      async function tz(t) {
        if ('svg' !== t.type) {
          await tM(t);
          return;
        }
        t.loading = !0;
        let e = await fetch(t.source);
        e.ok
          ? (t.svgData = await e.text())
          : ((0, u.jl)().error(`${R.gK} Image not found`), (t.error = !0)),
          (t.loading = !1);
      }
      class tT {
        constructor(t) {
          (this.loadImageShape = async (t) => {
            if (!this._engine.loadImage)
              throw Error(`${R.gK} image shape not initialized`);
            await this._engine.loadImage({
              gif: t.gif,
              name: t.name,
              replaceColor: t.replaceColor ?? t.replace_color ?? !1,
              src: t.src,
            });
          }),
            (this._engine = t);
        }
        addImage(t) {
          this._engine.images || (this._engine.images = []),
            this._engine.images.push(t);
        }
        draw(t, e, i, n, s) {
          let o = e.image,
            a = o?.element;
          if (o) {
            if (((t.globalAlpha = n), o.gif && o.gifData)) {
              let n = new OffscreenCanvas(o.gifData.width, o.gifData.height),
                a = n.getContext('2d');
              if (!a) throw Error('could not create offscreen canvas context');
              (a.imageSmoothingQuality = 'low'),
                (a.imageSmoothingEnabled = !1),
                a.clearRect(0, 0, n.width, n.height),
                void 0 === e.gifLoopCount &&
                  (e.gifLoopCount = o.gifLoopCount ?? 0);
              let r = e.gifFrame ?? 0,
                l = {
                  x: -(0.5 * o.gifData.width),
                  y: -(0.5 * o.gifData.height),
                },
                c = o.gifData.frames[r];
              if ((void 0 === e.gifTime && (e.gifTime = 0), !c.bitmap)) return;
              switch (
                (t.scale(i / o.gifData.width, i / o.gifData.height),
                c.disposalMethod)
              ) {
                case 4:
                case 5:
                case 6:
                case 7:
                case 0:
                  a.drawImage(c.bitmap, c.left, c.top),
                    t.drawImage(n, l.x, l.y),
                    a.clearRect(0, 0, n.width, n.height);
                  break;
                case 1:
                  a.drawImage(c.bitmap, c.left, c.top),
                    t.drawImage(n, l.x, l.y);
                  break;
                case 2:
                  a.drawImage(c.bitmap, c.left, c.top),
                    t.drawImage(n, l.x, l.y),
                    a.clearRect(0, 0, n.width, n.height),
                    0 === o.gifData.globalColorTable.length
                      ? a.putImageData(
                          o.gifData.frames[0].image,
                          l.x + c.left,
                          l.y + c.top,
                        )
                      : a.putImageData(o.gifData.backgroundImage, l.x, l.y);
                  break;
                case 3: {
                  let e = a.getImageData(0, 0, n.width, n.height);
                  a.drawImage(c.bitmap, c.left, c.top),
                    t.drawImage(n, l.x, l.y),
                    a.clearRect(0, 0, n.width, n.height),
                    a.putImageData(e, 0, 0);
                }
              }
              if (((e.gifTime += s.value), e.gifTime > c.delayTime)) {
                if (
                  ((e.gifTime -= c.delayTime), ++r >= o.gifData.frames.length)
                ) {
                  if (--e.gifLoopCount <= 0) return;
                  (r = 0), a.clearRect(0, 0, n.width, n.height);
                }
                e.gifFrame = r;
              }
              t.scale(o.gifData.width / i, o.gifData.height / i);
            } else if (a) {
              let e = o.ratio,
                n = { x: -i, y: -i };
              t.drawImage(a, n.x, n.y, 2 * i, (2 * i) / e);
            }
            t.globalAlpha = 1;
          }
        }
        getSidesCount() {
          return 12;
        }
        async init(t) {
          let e = t.actualOptions;
          if (e.preload && this._engine.loadImage)
            for (let t of e.preload) await this._engine.loadImage(t);
        }
        loadShape(t) {
          if ('image' !== t.shape && 'images' !== t.shape) return;
          this._engine.images || (this._engine.images = []);
          let e = t.shapeData,
            i = this._engine.images.find(
              (t) => t.name === e.name || t.source === e.src,
            );
          i ||
            this.loadImageShape(e).then(() => {
              this.loadShape(t);
            });
        }
        particleInit(t, e) {
          if ('image' !== e.shape && 'images' !== e.shape) return;
          this._engine.images || (this._engine.images = []);
          let i = this._engine.images,
            n = e.shapeData,
            s = e.getFillColor(),
            o = i.find((t) => t.name === n.name || t.source === n.src);
          if (!o) return;
          let a = n.replaceColor ?? n.replace_color ?? o.replaceColor;
          if (o.loading) {
            setTimeout(() => {
              this.particleInit(t, e);
            });
            return;
          }
          (async () => {
            let t;
            (t =
              o.svgData && s
                ? await (function (t, e, i, n) {
                    let s = (function (t, e, i) {
                        let { svgData: n } = t;
                        if (!n) return '';
                        let s = (0, p.vz)(e, i);
                        if (n.includes('fill')) return n.replace(tC, () => s);
                        let o = n.indexOf('>');
                        return `${n.substring(0, o)} fill="${s}"${n.substring(o)}`;
                      })(t, i, n.opacity?.value ?? 1),
                      o = {
                        color: i,
                        gif: e.gif,
                        data: { ...t, svgData: s },
                        loaded: !1,
                        ratio: e.width / e.height,
                        replaceColor: e.replaceColor ?? e.replace_color,
                        source: e.src,
                      };
                    return new Promise((e) => {
                      let i = new Blob([s], { type: 'image/svg+xml' }),
                        n = URL || window.URL || window.webkitURL || window,
                        a = n.createObjectURL(i),
                        r = new Image();
                      r.addEventListener('load', () => {
                        (o.loaded = !0),
                          (o.element = r),
                          e(o),
                          n.revokeObjectURL(a);
                      }),
                        r.addEventListener('error', async () => {
                          n.revokeObjectURL(a);
                          let i = { ...t, error: !1, loading: !0 };
                          await tM(i),
                            (o.loaded = !0),
                            (o.element = i.element),
                            e(o);
                        }),
                        (r.src = a);
                    });
                  })(o, n, s, e)
                : {
                    color: s,
                    data: o,
                    element: o.element,
                    gif: o.gif,
                    gifData: o.gifData,
                    gifLoopCount: o.gifLoopCount,
                    loaded: !0,
                    ratio:
                      n.width && n.height ? n.width / n.height : (o.ratio ?? 1),
                    replaceColor: a,
                    source: n.src,
                  }).ratio || (t.ratio = 1);
            let i = n.fill ?? e.fill,
              r = n.close ?? e.close,
              l = { image: t, fill: i, close: r };
            (e.image = l.image), (e.fill = l.fill), (e.close = l.close);
          })();
        }
      }
      class tE {
        constructor() {
          (this.src = ''), (this.gif = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.gif && (this.gif = t.gif),
            void 0 !== t.height && (this.height = t.height),
            void 0 !== t.name && (this.name = t.name),
            void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor),
            void 0 !== t.src && (this.src = t.src),
            void 0 !== t.width && (this.width = t.width));
        }
      }
      class tR {
        constructor(t) {
          (this.id = 'imagePreloader'), (this._engine = t);
        }
        getPlugin() {
          return {};
        }
        loadOptions(t, e) {
          if (!e || !e.preload) return;
          t.preload || (t.preload = []);
          let i = t.preload;
          for (let t of e.preload) {
            let e = i.find((e) => e.name === t.name || e.src === t.src);
            if (e) e.load(t);
            else {
              let e = new tE();
              e.load(t), i.push(e);
            }
          }
        }
        needsPlugin() {
          return !0;
        }
      }
      async function tI(t, e = !0) {
        t.loadImage ||
          (t.loadImage = async (e) => {
            if (!e.name && !e.src)
              throw Error(`${R.gK} no image source provided`);
            if (
              (t.images || (t.images = []),
              !t.images.find((t) => t.name === e.name || t.source === e.src))
            )
              try {
                let i = {
                  gif: e.gif ?? !1,
                  name: e.name ?? e.src,
                  source: e.src,
                  type: e.src.substring(e.src.length - 3),
                  error: !1,
                  loading: !0,
                  replaceColor: e.replaceColor,
                  ratio: e.width && e.height ? e.width / e.height : void 0,
                };
                t.images.push(i);
                let n = e.gif ? tS : e.replaceColor ? tz : tM;
                await n(i);
              } catch {
                throw Error(`${R.gK} ${e.name ?? e.src} not found`);
              }
          });
        let i = new tR(t);
        await t.addPlugin(i, e),
          await t.addShape(['image', 'images'], new tT(t), e);
      }
      var tD = i(1050);
      class tA extends tD.SW {
        constructor() {
          super(), (this.sync = !1);
        }
        load(t) {
          t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
        }
      }
      class tj extends tD.SW {
        constructor() {
          super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
        }
        load(t) {
          t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
        }
      }
      class tL {
        constructor() {
          (this.count = 0), (this.delay = new tA()), (this.duration = new tj());
        }
        load(t) {
          t &&
            (void 0 !== t.count && (this.count = t.count),
            this.delay.load(t.delay),
            this.duration.load(t.duration));
        }
      }
      class tF {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = this.container,
            i = t.options,
            n = i.life;
          n &&
            ((t.life = {
              delay: e.retina.reduceFactor
                ? (((0, r.Gu)(n.delay.value) *
                    (n.delay.sync ? 1 : (0, r.sZ)())) /
                    e.retina.reduceFactor) *
                  1e3
                : 0,
              delayTime: 0,
              duration: e.retina.reduceFactor
                ? (((0, r.Gu)(n.duration.value) *
                    (n.duration.sync ? 1 : (0, r.sZ)())) /
                    e.retina.reduceFactor) *
                  1e3
                : 0,
              time: 0,
              count: n.count,
            }),
            t.life.duration <= 0 && (t.life.duration = -1),
            t.life.count <= 0 && (t.life.count = -1),
            t.life && (t.spawning = t.life.delay > 0));
        }
        isEnabled(t) {
          return !t.destroyed;
        }
        loadOptions(t, ...e) {
          for (let i of (t.life || (t.life = new tL()), e))
            t.life.load(i?.life);
        }
        update(t, e) {
          if (!this.isEnabled(t) || !t.life) return;
          let i = t.life,
            n = !1;
          if (t.spawning) {
            if (((i.delayTime += e.value), !(i.delayTime >= t.life.delay)))
              return;
            (n = !0), (t.spawning = !1), (i.delayTime = 0), (i.time = 0);
          }
          if (
            -1 === i.duration ||
            t.spawning ||
            (n ? (i.time = 0) : (i.time += e.value), i.time < i.duration)
          )
            return;
          if (
            ((i.time = 0),
            t.life.count > 0 && t.life.count--,
            0 === t.life.count)
          ) {
            t.destroy();
            return;
          }
          let s = this.container.canvas.size,
            o = (0, r.Cs)(0, s.width),
            a = (0, r.Cs)(0, s.width);
          (t.position.x = (0, r.vd)(o)),
            (t.position.y = (0, r.vd)(a)),
            (t.spawning = !0),
            (i.delayTime = 0),
            (i.time = 0),
            t.reset();
          let l = t.options.life;
          l &&
            ((i.delay = 1e3 * (0, r.Gu)(l.delay.value)),
            (i.duration = 1e3 * (0, r.Gu)(l.duration.value)));
        }
      }
      async function tB(t, e = !0) {
        await t.addParticleUpdater('life', (t) => new tF(t), e);
      }
      class tV {
        draw(t, e, i) {
          let n = e.shapeData;
          t.moveTo(-i / 2, 0),
            t.lineTo(i / 2, 0),
            (t.lineCap = n?.cap ?? 'butt');
        }
        getSidesCount() {
          return 1;
        }
      }
      async function tq(t, e = !0) {
        await t.addShape('line', new tV(), e);
      }
      class tW {
        init() {}
        isEnabled(t) {
          return (
            !(0, u.Kr)() &&
            !t.destroyed &&
            t.container.actualOptions.interactivity.events.onHover.parallax
              .enable
          );
        }
        move(t) {
          let e = t.container,
            i = e.actualOptions,
            n = i.interactivity.events.onHover.parallax;
          if ((0, u.Kr)() || !n.enable) return;
          let s = n.force,
            o = e.interactivity.mouse.position;
          if (!o) return;
          let a = e.canvas.size,
            r = { x: a.width / 2, y: a.height / 2 },
            l = n.smooth,
            c = t.getRadius() / s,
            d = { x: (o.x - r.x) * c, y: (o.y - r.y) * c },
            { offset: h } = t;
          (h.x += (d.x - h.x) / l), (h.y += (d.y - h.y) / l);
        }
      }
      async function tH(t, e = !0) {
        await t.addMover('parallax', () => new tW(), e);
      }
      class tN {
        constructor(t) {
          (this.container = t), (this.type = 'particles');
        }
      }
      class tU extends tN {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {}
        async interact(t) {
          let e = this.container,
            i = t.retina.attractDistance ?? e.retina.attractDistance,
            n = t.getPosition(),
            s = e.particles.quadTree.queryCircle(n, i);
          for (let e of s) {
            if (
              t === e ||
              !e.options.move.attract.enable ||
              e.destroyed ||
              e.spawning
            )
              continue;
            let i = e.getPosition(),
              { dx: s, dy: o } = (0, r.oW)(n, i),
              a = t.options.move.attract.rotate,
              l = s / (1e3 * a.x),
              c = o / (1e3 * a.y),
              u = e.size.value / t.size.value,
              d = 1 / u;
            (t.velocity.x -= l * u),
              (t.velocity.y -= c * u),
              (e.velocity.x += l * d),
              (e.velocity.y += c * d);
          }
        }
        isEnabled(t) {
          return t.options.move.attract.enable;
        }
        reset() {}
      }
      async function tG(t, e = !0) {
        await t.addInteractor('particlesAttract', (t) => new tU(t), e);
      }
      function tZ(t, e, i, n, s, o) {
        let a = (0, r.uZ)(
          (t.options.collisions.absorb.speed * s.factor) / 10,
          0,
          n,
        );
        (t.size.value += a / 2),
          (i.size.value -= a),
          n <= o && ((i.size.value = 0), i.destroy());
      }
      let t$ = (t) => {
        void 0 === t.collisionMaxSpeed &&
          (t.collisionMaxSpeed = (0, r.Gu)(t.options.collisions.maxSpeed)),
          t.velocity.length > t.collisionMaxSpeed &&
            (t.velocity.length = t.collisionMaxSpeed);
      };
      function tY(t, e) {
        (0, u.kR)((0, u.gy)(t), (0, u.gy)(e)), t$(t), t$(e);
      }
      class tK extends tN {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {}
        async interact(t, e) {
          if (t.destroyed || t.spawning) return;
          let i = this.container,
            n = t.getPosition(),
            s = t.getRadius(),
            o = i.particles.quadTree.queryCircle(n, 2 * s);
          for (let a of o) {
            if (
              t === a ||
              !a.options.collisions.enable ||
              t.options.collisions.mode !== a.options.collisions.mode ||
              a.destroyed ||
              a.spawning
            )
              continue;
            let o = a.getPosition(),
              l = a.getRadius();
            if (Math.abs(Math.round(n.z) - Math.round(o.z)) > s + l) continue;
            let c = (0, r.Sp)(n, o),
              u = s + l;
            c > u ||
              (function (t, e, i, n) {
                switch (t.options.collisions.mode) {
                  case 'absorb':
                    !(function (t, e, i, n) {
                      let s = t.getRadius(),
                        o = e.getRadius();
                      void 0 === s && void 0 !== o
                        ? t.destroy()
                        : void 0 !== s && void 0 === o
                          ? e.destroy()
                          : void 0 !== s &&
                            void 0 !== o &&
                            (s >= o
                              ? tZ(t, s, e, o, i, n)
                              : tZ(e, o, t, s, i, n));
                    })(t, e, i, n);
                    break;
                  case 'bounce':
                    tY(t, e);
                    break;
                  case 'destroy':
                    !(function (t, e) {
                      if (
                        (t.unbreakable || e.unbreakable || tY(t, e),
                        void 0 === t.getRadius() && void 0 !== e.getRadius())
                      )
                        t.destroy();
                      else if (
                        void 0 !== t.getRadius() &&
                        void 0 === e.getRadius()
                      )
                        e.destroy();
                      else if (
                        void 0 !== t.getRadius() &&
                        void 0 !== e.getRadius()
                      ) {
                        let i = t.getRadius() >= e.getRadius() ? e : t;
                        i.destroy();
                      }
                    })(t, e);
                }
              })(t, a, e, i.retina.pixelRatio);
          }
        }
        isEnabled(t) {
          return t.options.collisions.enable;
        }
        reset() {}
      }
      async function tX(t, e = !0) {
        await t.addInteractor('particlesCollisions', (t) => new tK(t), e);
      }
      class tJ extends E.C {
        constructor(t, e, i, n) {
          super(t, e, i), (this.canvasSize = n), (this.canvasSize = { ...n });
        }
        contains(t) {
          let { width: e, height: i } = this.canvasSize,
            { x: n, y: s } = t;
          return (
            super.contains(t) ||
            super.contains({ x: n - e, y: s }) ||
            super.contains({ x: n - e, y: s - i }) ||
            super.contains({ x: n, y: s - i })
          );
        }
        intersects(t) {
          if (super.intersects(t)) return !0;
          let e = {
            x: t.position.x - this.canvasSize.width,
            y: t.position.y - this.canvasSize.height,
          };
          if (void 0 !== t.radius) {
            let i = new E.C(e.x, e.y, 2 * t.radius);
            return super.intersects(i);
          }
          if (void 0 !== t.size) {
            let i = new j.A(e.x, e.y, 2 * t.size.width, 2 * t.size.height);
            return super.intersects(i);
          }
          return !1;
        }
      }
      class tQ {
        constructor() {
          (this.blur = 5),
            (this.color = new V.O()),
            (this.color.value = '#000'),
            (this.enable = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = V.O.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable));
        }
      }
      class t0 {
        constructor() {
          (this.enable = !1), (this.frequency = 1);
        }
        load(t) {
          t &&
            (void 0 !== t.color &&
              (this.color = V.O.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity));
        }
      }
      class t1 {
        constructor() {
          (this.blink = !1),
            (this.color = new V.O()),
            (this.color.value = '#fff'),
            (this.consent = !1),
            (this.distance = 100),
            (this.enable = !1),
            (this.frequency = 1),
            (this.opacity = 1),
            (this.shadow = new tQ()),
            (this.triangles = new t0()),
            (this.width = 1),
            (this.warp = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.id && (this.id = t.id),
            void 0 !== t.blink && (this.blink = t.blink),
            (this.color = V.O.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            this.shadow.load(t.shadow),
            this.triangles.load(t.triangles),
            void 0 !== t.width && (this.width = t.width),
            void 0 !== t.warp && (this.warp = t.warp));
        }
      }
      class t2 extends tN {
        constructor(t) {
          super(t),
            (this._setColor = (t) => {
              if (!t.options.links) return;
              let e = this.linkContainer,
                i = t.options.links,
                n =
                  void 0 === i.id
                    ? e.particles.linksColor
                    : e.particles.linksColors.get(i.id);
              if (n) return;
              let s = i.color;
              (n = (0, p.Dt)(s, i.blink, i.consent)),
                void 0 === i.id
                  ? (e.particles.linksColor = n)
                  : e.particles.linksColors.set(i.id, n);
            }),
            (this.linkContainer = t);
        }
        clear() {}
        init() {
          (this.linkContainer.particles.linksColor = void 0),
            (this.linkContainer.particles.linksColors = new Map());
        }
        async interact(t) {
          if (!t.options.links) return;
          t.links = [];
          let e = t.getPosition(),
            i = this.container,
            n = i.canvas.size;
          if (e.x < 0 || e.y < 0 || e.x > n.width || e.y > n.height) return;
          let s = t.options.links,
            o = s.opacity,
            a = t.retina.linksDistance ?? 0,
            l = s.warp,
            c = l ? new tJ(e.x, e.y, a, n) : new E.C(e.x, e.y, a),
            u = i.particles.quadTree.query(c);
          for (let i of u) {
            let c = i.options.links;
            if (
              t === i ||
              !c?.enable ||
              s.id !== c.id ||
              i.spawning ||
              i.destroyed ||
              !i.links ||
              t.links.some((t) => t.destination === i) ||
              i.links.some((e) => e.destination === t)
            )
              continue;
            let u = i.getPosition();
            if (u.x < 0 || u.y < 0 || u.x > n.width || u.y > n.height) continue;
            let d = (function (t, e, i, n, s) {
              let { dx: o, dy: a, distance: l } = (0, r.oW)(t, e);
              if (!s || l <= i) return l;
              let c = { x: Math.abs(o), y: Math.abs(a) },
                u = {
                  x: Math.min(c.x, n.width - c.x),
                  y: Math.min(c.y, n.height - c.y),
                };
              return Math.sqrt(u.x ** 2 + u.y ** 2);
            })(e, u, a, n, l && c.warp);
            if (d > a) continue;
            let h = (1 - d / a) * o;
            this._setColor(t), t.links.push({ destination: i, opacity: h });
          }
        }
        isEnabled(t) {
          return !!t.options.links?.enable;
        }
        loadParticlesOptions(t, ...e) {
          for (let i of (t.links || (t.links = new t1()), e))
            t.links.load(i?.links ?? i?.lineLinked ?? i?.line_linked);
        }
        reset() {}
      }
      async function t3(t, e = !0) {
        await t.addInteractor('particlesLinks', (t) => new t2(t), e);
      }
      function t5(t, e) {
        var i;
        let n = ((i = t.map((t) => t.id)).sort((t, e) => t - e), i.join('_')),
          s = e.get(n);
        return void 0 === s && ((s = (0, r.sZ)()), e.set(n, s)), s;
      }
      class t6 {
        constructor(t) {
          (this.container = t),
            (this._drawLinkLine = (t, e) => {
              let i = t.options.links;
              if (!i?.enable) return;
              let n = this.container,
                s = n.actualOptions,
                o = e.destination,
                a = t.getPosition(),
                l = o.getPosition(),
                c = e.opacity;
              n.canvas.draw((e) => {
                let u;
                let d = t.options.twinkle?.lines;
                if (d?.enable) {
                  let t = d.frequency,
                    e = (0, p.tX)(d.color),
                    i = (0, r.sZ)() < t;
                  i && e && ((u = e), (c = (0, r.Gu)(d.opacity)));
                }
                if (!u) {
                  let e =
                    void 0 !== i.id
                      ? n.particles.linksColors.get(i.id)
                      : n.particles.linksColor;
                  u = (0, p.BE)(t, o, e);
                }
                if (!u) return;
                let h = t.retina.linksWidth ?? 0,
                  f = t.retina.linksDistance ?? 0,
                  { backgroundMask: m } = s;
                !(function (t) {
                  let e = !1,
                    {
                      begin: i,
                      end: n,
                      maxDistance: s,
                      context: o,
                      canvasSize: a,
                      width: l,
                      backgroundMask: c,
                      colorLine: u,
                      opacity: d,
                      links: h,
                    } = t;
                  if ((0, r.Sp)(i, n) <= s) (0, Y.pS)(o, i, n), (e = !0);
                  else if (h.warp) {
                    let t, l;
                    let c = { x: n.x - a.width, y: n.y },
                      u = (0, r.oW)(i, c);
                    if (u.distance <= s) {
                      let e = i.y - (u.dy / u.dx) * i.x;
                      (t = { x: 0, y: e }), (l = { x: a.width, y: e });
                    } else {
                      let e = { x: n.x, y: n.y - a.height },
                        o = (0, r.oW)(i, e);
                      if (o.distance <= s) {
                        let e = i.y - (o.dy / o.dx) * i.x,
                          n = -e / (o.dy / o.dx);
                        (t = { x: n, y: 0 }), (l = { x: n, y: a.height });
                      } else {
                        let e = { x: n.x - a.width, y: n.y - a.height },
                          o = (0, r.oW)(i, e);
                        if (o.distance <= s) {
                          let e = i.y - (o.dy / o.dx) * i.x,
                            n = -e / (o.dy / o.dx);
                          l = {
                            x: (t = { x: n, y: e }).x + a.width,
                            y: t.y + a.height,
                          };
                        }
                      }
                    }
                    t &&
                      l &&
                      ((0, Y.pS)(o, i, t), (0, Y.pS)(o, n, l), (e = !0));
                  }
                  if (!e) return;
                  (o.lineWidth = l),
                    c.enable && (o.globalCompositeOperation = c.composite),
                    (o.strokeStyle = (0, p.iz)(u, d));
                  let { shadow: f } = h;
                  if (f.enable) {
                    let t = (0, p.tX)(f.color);
                    t &&
                      ((o.shadowBlur = f.blur), (o.shadowColor = (0, p.iz)(t)));
                  }
                  o.stroke();
                })({
                  context: e,
                  width: h,
                  begin: a,
                  end: l,
                  maxDistance: f,
                  canvasSize: n.canvas.size,
                  links: i,
                  backgroundMask: m,
                  colorLine: u,
                  opacity: c,
                });
              });
            }),
            (this._drawLinkTriangle = (t, e, i) => {
              let n = t.options.links;
              if (!n?.enable) return;
              let s = n.triangles;
              if (!s.enable) return;
              let o = this.container,
                a = o.actualOptions,
                l = e.destination,
                c = i.destination,
                u = s.opacity ?? (e.opacity + i.opacity) / 2;
              u <= 0 ||
                o.canvas.draw((e) => {
                  let i = t.getPosition(),
                    d = l.getPosition(),
                    h = c.getPosition(),
                    f = t.retina.linksDistance ?? 0;
                  if (
                    (0, r.Sp)(i, d) > f ||
                    (0, r.Sp)(h, d) > f ||
                    (0, r.Sp)(h, i) > f
                  )
                    return;
                  let m = (0, p.tX)(s.color);
                  if (!m) {
                    let e =
                      void 0 !== n.id
                        ? o.particles.linksColors.get(n.id)
                        : o.particles.linksColor;
                    m = (0, p.BE)(t, l, e);
                  }
                  m &&
                    (function (t) {
                      let {
                        context: e,
                        pos1: i,
                        pos2: n,
                        pos3: s,
                        backgroundMask: o,
                        colorTriangle: a,
                        opacityTriangle: r,
                      } = t;
                      (0, Y.Wd)(e, i, n, s),
                        o.enable && (e.globalCompositeOperation = o.composite),
                        (e.fillStyle = (0, p.iz)(a, r)),
                        e.fill();
                    })({
                      context: e,
                      pos1: i,
                      pos2: d,
                      pos3: h,
                      backgroundMask: a.backgroundMask,
                      colorTriangle: m,
                      opacityTriangle: u,
                    });
                });
            }),
            (this._drawTriangles = (t, e, i, n) => {
              let s = i.destination;
              if (
                !(
                  t.links?.triangles.enable && s.options.links?.triangles.enable
                )
              )
                return;
              let o = s.links?.filter((t) => {
                let e = this._getLinkFrequency(s, t.destination);
                return (
                  s.options.links &&
                  e <= s.options.links.frequency &&
                  n.findIndex((e) => e.destination === t.destination) >= 0
                );
              });
              if (o?.length)
                for (let n of o) {
                  let o = n.destination,
                    a = this._getTriangleFrequency(e, s, o);
                  a > t.links.triangles.frequency ||
                    this._drawLinkTriangle(e, i, n);
                }
            }),
            (this._getLinkFrequency = (t, e) => t5([t, e], this._freqs.links)),
            (this._getTriangleFrequency = (t, e, i) =>
              t5([t, e, i], this._freqs.triangles)),
            (this._freqs = { links: new Map(), triangles: new Map() });
        }
        drawParticle(t, e) {
          let { links: i, options: n } = e;
          if (!i || i.length <= 0) return;
          let s = i.filter(
            (t) =>
              n.links &&
              this._getLinkFrequency(e, t.destination) <= n.links.frequency,
          );
          for (let t of s)
            this._drawTriangles(n, e, t, s),
              t.opacity > 0 &&
                (e.retina.linksWidth ?? 0) > 0 &&
                this._drawLinkLine(e, t);
        }
        async init() {
          (this._freqs.links = new Map()), (this._freqs.triangles = new Map());
        }
        particleCreated(t) {
          if (((t.links = []), !t.options.links)) return;
          let e = this.container.retina.pixelRatio,
            { retina: i } = t,
            { distance: n, width: s } = t.options.links;
          (i.linksDistance = n * e), (i.linksWidth = s * e);
        }
        particleDestroyed(t) {
          t.links = [];
        }
      }
      class t8 {
        constructor() {
          this.id = 'links';
        }
        getPlugin(t) {
          return new t6(t);
        }
        loadOptions() {}
        needsPlugin() {
          return !0;
        }
      }
      async function t4(t, e = !0) {
        let i = new t8();
        await t.addPlugin(i, e);
      }
      async function t9(t, e = !0) {
        await t3(t, e), await t4(t, e);
      }
      class t7 {
        draw(t, e, i) {
          let n = this.getCenter(e, i),
            s = this.getSidesData(e, i),
            o = s.count.numerator * s.count.denominator,
            a = s.count.numerator / s.count.denominator,
            r = Math.PI - (Math.PI * ((180 * (a - 2)) / a)) / 180;
          if (t) {
            t.beginPath(), t.translate(n.x, n.y), t.moveTo(0, 0);
            for (let e = 0; e < o; e++)
              t.lineTo(s.length, 0), t.translate(s.length, 0), t.rotate(r);
          }
        }
        getSidesCount(t) {
          let e = t.shapeData;
          return Math.round((0, r.Gu)(e?.sides ?? e?.nb_sides ?? 5));
        }
      }
      class et extends t7 {
        getCenter(t, e) {
          return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
        }
        getSidesData(t, e) {
          let i = t.sides;
          return {
            count: { denominator: 1, numerator: i },
            length: (2.66 * e) / (i / 3),
          };
        }
      }
      class ee extends t7 {
        getCenter(t, e) {
          return { x: -e, y: e / 1.66 };
        }
        getSidesCount() {
          return 3;
        }
        getSidesData(t, e) {
          return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
        }
      }
      async function ei(t, e = !0) {
        await t.addShape('polygon', new et(), e);
      }
      async function en(t, e = !0) {
        await t.addShape('triangle', new ee(), e);
      }
      async function es(t, e = !0) {
        await ei(t, e), await en(t, e);
      }
      class eo {
        constructor() {
          (this.enable = !1),
            (this.speed = 0),
            (this.decay = 0),
            (this.sync = !1);
        }
        load(t) {
          t &&
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, r.Cs)(t.speed)),
            void 0 !== t.decay && (this.decay = (0, r.Cs)(t.decay)),
            void 0 !== t.sync && (this.sync = t.sync));
        }
      }
      class ea extends tD.SW {
        constructor() {
          super(),
            (this.animation = new eo()),
            (this.direction = 'clockwise'),
            (this.path = !1),
            (this.value = 0);
        }
        load(t) {
          t &&
            (super.load(t),
            void 0 !== t.direction && (this.direction = t.direction),
            this.animation.load(t.animation),
            void 0 !== t.path && (this.path = t.path));
        }
      }
      class er {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = t.options.rotate;
          if (!e) return;
          (t.rotate = {
            enable: e.animation.enable,
            value: ((0, r.Gu)(e.value) * Math.PI) / 180,
          }),
            (t.pathRotation = e.path);
          let i = e.direction;
          if ('random' === i) {
            let t = Math.floor(2 * (0, r.sZ)());
            i = t > 0 ? 'counter-clockwise' : 'clockwise';
          }
          switch (i) {
            case 'counter-clockwise':
            case 'counterClockwise':
              t.rotate.status = 'decreasing';
              break;
            case 'clockwise':
              t.rotate.status = 'increasing';
          }
          let n = e.animation;
          n.enable &&
            ((t.rotate.decay = 1 - (0, r.Gu)(n.decay)),
            (t.rotate.velocity =
              ((0, r.Gu)(n.speed) / 360) * this.container.retina.reduceFactor),
            n.sync || (t.rotate.velocity *= (0, r.sZ)())),
            (t.rotation = t.rotate.value);
        }
        isEnabled(t) {
          let e = t.options.rotate;
          return (
            !!e && !t.destroyed && !t.spawning && e.animation.enable && !e.path
          );
        }
        loadOptions(t, ...e) {
          for (let i of (t.rotate || (t.rotate = new ea()), e))
            t.rotate.load(i?.rotate);
        }
        update(t, e) {
          this.isEnabled(t) &&
            (!(function (t, e) {
              let i = t.rotate,
                n = t.options.rotate;
              if (!i || !n) return;
              let s = n.animation,
                o = (i.velocity ?? 0) * e.factor,
                a = 2 * Math.PI,
                r = i.decay ?? 1;
              s.enable &&
                ('increasing' === i.status
                  ? ((i.value += o), i.value > a && (i.value -= a))
                  : ((i.value -= o), i.value < 0 && (i.value += a)),
                i.velocity && 1 !== r && (i.velocity *= r));
            })(t, e),
            (t.rotation = t.rotate?.value ?? 0));
        }
      }
      async function el(t, e = !0) {
        await t.addParticleUpdater('rotate', (t) => new er(t), e);
      }
      let ec = Math.sqrt(2);
      class eu {
        draw(t, e, i) {
          let n = i / ec,
            s = 2 * n;
          t.rect(-n, -n, s, s);
        }
        getSidesCount() {
          return 4;
        }
      }
      async function ed(t, e = !0) {
        await t.addShape(['edge', 'square'], new eu(), e);
      }
      class eh {
        draw(t, e, i) {
          let n = e.sides,
            s = e.starInset ?? 2;
          t.moveTo(0, 0 - i);
          for (let e = 0; e < n; e++)
            t.rotate(Math.PI / n),
              t.lineTo(0, 0 - i * s),
              t.rotate(Math.PI / n),
              t.lineTo(0, 0 - i);
        }
        getSidesCount(t) {
          let e = t.shapeData;
          return Math.round((0, r.Gu)(e?.sides ?? e?.nb_sides ?? 5));
        }
        particleInit(t, e) {
          let i = e.shapeData,
            n = (0, r.Gu)(i?.inset ?? 2);
          e.starInset = n;
        }
      }
      async function ep(t, e = !0) {
        await t.addShape('star', new eh(), e);
      }
      function ef(t, e, i, n, s) {
        if (
          !e ||
          !i.enable ||
          ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0)) ||
          (e.time || (e.time = 0),
          (e.delayTime ?? 0) > 0 &&
            e.time < (e.delayTime ?? 0) &&
            (e.time += t.value),
          (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0))
        )
          return;
        let o = (0, r.vd)(i.offset),
          a = (e.velocity ?? 0) * t.factor + 3.6 * o,
          l = e.decay ?? 1;
        s && 'increasing' !== e.status
          ? ((e.value -= a),
            e.value < 0 &&
              (e.loops || (e.loops = 0),
              e.loops++,
              (e.status = 'increasing'),
              (e.value += e.value)))
          : ((e.value += a),
            e.value > n &&
              (e.loops || (e.loops = 0),
              e.loops++,
              s && ((e.status = 'decreasing'), (e.value -= e.value % n)))),
          e.velocity && 1 !== l && (e.velocity *= l),
          e.value > n && (e.value %= n);
      }
      class em {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = this.container,
            i = t.options,
            n = (0, u.wA)(i.stroke, t.id, i.reduceDuplicates);
          (t.strokeWidth = (0, r.Gu)(n.width) * e.retina.pixelRatio),
            (t.strokeOpacity = (0, r.Gu)(n.opacity ?? 1)),
            (t.strokeAnimation = n.color?.animation);
          let s = (0, p.lN)(n.color) ?? t.getFillColor();
          s &&
            (t.strokeColor = (0, p.bS)(
              s,
              t.strokeAnimation,
              e.retina.reduceFactor,
            ));
        }
        isEnabled(t) {
          let e = t.strokeAnimation,
            { strokeColor: i } = t;
          return (
            !t.destroyed &&
            !t.spawning &&
            !!e &&
            ((i?.h.value !== void 0 && i.h.enable) ||
              (i?.s.value !== void 0 && i.s.enable) ||
              (i?.l.value !== void 0 && i.l.enable))
          );
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              if (!t.strokeColor || !t.strokeAnimation) return;
              let { h: i, s: n, l: s } = t.strokeColor,
                { h: o, s: a, l: r } = t.strokeAnimation;
              i && ef(e, i, o, 360, !1),
                n && ef(e, n, a, 100, !0),
                s && ef(e, s, r, 100, !0);
            })(t, e);
        }
      }
      async function eg(t, e = !0) {
        await t.addParticleUpdater('strokeColor', (t) => new em(t), e);
      }
      let ey = ['text', 'character', 'char'];
      class ev {
        draw(t, e, i, n) {
          let s = e.shapeData;
          if (void 0 === s) return;
          let o = s.value;
          if (void 0 === o) return;
          void 0 === e.text && (e.text = (0, u.wA)(o, e.randomIndexData));
          let a = e.text,
            r = s.style ?? '',
            l = s.weight ?? '400',
            c = s.font ?? 'Verdana',
            d = e.fill,
            h = (a.length * i) / 2;
          t.font = `${r} ${l} ${2 * Math.round(i)}px "${c}"`;
          let p = { x: -h, y: i / 2 };
          (t.globalAlpha = n),
            d ? t.fillText(a, p.x, p.y) : t.strokeText(a, p.x, p.y),
            (t.globalAlpha = 1);
        }
        getSidesCount() {
          return 12;
        }
        async init(t) {
          let e = t.actualOptions;
          if (ey.find((t) => (0, u.dB)(t, e.particles.shape.type))) {
            let t = ey
                .map((t) => e.particles.shape.options[t])
                .find((t) => !!t),
              i = [];
            (0, u.KH)(t, (t) => {
              i.push((0, u.mx)(t.font, t.weight));
            }),
              await Promise.all(i);
          }
        }
        particleInit(t, e) {
          if (!e.shape || !ey.includes(e.shape)) return;
          let i = e.shapeData;
          if (void 0 === i) return;
          let n = i.value;
          void 0 !== n && (e.text = (0, u.wA)(n, e.randomIndexData));
        }
      }
      async function eb(t, e = !0) {
        await t.addShape(ey, new ev(), e);
      }
      async function ew(t, e = !0) {
        a(t),
          await tH(t, !1),
          await A(t, !1),
          await B(t, !1),
          await G(t, !1),
          await X(t, !1),
          await te(t, !1),
          await tn(t, !1),
          await ta(t, !1),
          await tc(t, !1),
          await tf(t, !1),
          await ty(t, !1),
          await tG(t, !1),
          await tX(t, !1),
          await t9(t, !1),
          await z(),
          await tI(t, !1),
          await tq(t, !1),
          await es(t, !1),
          await ed(t, !1),
          await ep(t, !1),
          await eb(t, !1),
          await tB(t, !1),
          await el(t, !1),
          await eg(t, !1),
          await S(t, e);
      }
    },
  },
]);
