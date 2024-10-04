(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [681],
  {
    2609: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 8508)),
        Promise.resolve().then(n.bind(n, 3227)),
        Promise.resolve().then(n.bind(n, 7422)),
        Promise.resolve().then(n.t.bind(n, 3222, 23)),
        Promise.resolve().then(n.bind(n, 2275)),
        Promise.resolve().then(n.bind(n, 3846)),
        Promise.resolve().then(n.bind(n, 7610)),
        Promise.resolve().then(n.bind(n, 2511)),
        Promise.resolve().then(n.bind(n, 4159)),
        Promise.resolve().then(n.bind(n, 7810)),
        Promise.resolve().then(n.bind(n, 210)),
        Promise.resolve().then(n.bind(n, 2849)),
        Promise.resolve().then(n.bind(n, 524)),
        Promise.resolve().then(n.bind(n, 4532)),
        Promise.resolve().then(n.bind(n, 8515)),
        Promise.resolve().then(n.bind(n, 6278));
    },
    6278: function (e, t, n) {
      'use strict';
      let a;
      n.r(t),
        n.d(t, {
          default: function () {
            return eu;
          },
        });
      var r = n(7437),
        l = n(9995),
        s = n(5984),
        i = n.n(s)(),
        c = n(5508),
        o = n(2265);
      function d(e) {
        return (t) => !!t.type && t.type.tabsRole === e;
      }
      let u = d('Tab'),
        p = d('TabList'),
        m = d('TabPanel');
      function h(e, t) {
        return o.Children.map(e, (e) =>
          null === e
            ? null
            : u(e) || p(e) || m(e)
              ? t(e)
              : e.props &&
                  e.props.children &&
                  'object' == typeof e.props.children
                ? (0, o.cloneElement)(e, {
                    ...e.props,
                    children: h(e.props.children, t),
                  })
                : e,
        );
      }
      var f = function () {
        for (var e, t, n = 0, a = ''; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                a,
                r = '';
              if ('string' == typeof t || 'number' == typeof t) r += t;
              else if ('object' == typeof t) {
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (a = e(t[n])) && (r && (r += ' '), (r += a));
                else for (n in t) t[n] && (r && (r += ' '), (r += n));
              }
              return r;
            })(e)) &&
            (a && (a += ' '), (a += t));
        return a;
      };
      function b(e) {
        let t = 0;
        return (
          !(function e(t, n) {
            return o.Children.forEach(t, (t) => {
              null !== t &&
                (u(t) || m(t)
                  ? n(t)
                  : t.props &&
                    t.props.children &&
                    'object' == typeof t.props.children &&
                    (p(t) && n(t), e(t.props.children, n)));
            });
          })(e, (e) => {
            u(e) && t++;
          }),
          t
        );
      }
      function g(e) {
        return e && 'getAttribute' in e;
      }
      function x(e) {
        return g(e) && e.getAttribute('data-rttab');
      }
      function _(e) {
        return g(e) && 'true' === e.getAttribute('aria-disabled');
      }
      let j = { className: 'react-tabs', focus: !1 },
        N = (e) => {
          let t = (0, o.useRef)([]),
            n = (0, o.useRef)([]),
            r = (0, o.useRef)();
          function l(t, n) {
            if (t < 0 || t >= c()) return;
            let { onSelect: a, selectedIndex: r } = e;
            a(t, r, n);
          }
          function s(e) {
            let t = c();
            for (let n = e + 1; n < t; n++) if (!_(d(n))) return n;
            for (let t = 0; t < e; t++) if (!_(d(t))) return t;
            return e;
          }
          function i(e) {
            let t = e;
            for (; t--; ) if (!_(d(t))) return t;
            for (t = c(); t-- > e; ) if (!_(d(t))) return t;
            return e;
          }
          function c() {
            let { children: t } = e;
            return b(t);
          }
          function d(e) {
            return t.current[`tabs-${e}`];
          }
          function g(e) {
            let t = e.target;
            do
              if (N(t)) {
                if (_(t)) return;
                let n = [].slice
                  .call(t.parentNode.children)
                  .filter(x)
                  .indexOf(t);
                l(n, e);
                return;
              }
            while (null != (t = t.parentNode));
          }
          function N(e) {
            if (!x(e)) return !1;
            let t = e.parentElement;
            do {
              if (t === r.current) return !0;
              if (t.getAttribute('data-rttabs')) break;
              t = t.parentElement;
            } while (t);
            return !1;
          }
          let {
            children: v,
            className: S,
            disabledTabClassName: A,
            domRef: T,
            focus: k,
            forceRenderTabPanel: C,
            onSelect: E,
            selectedIndex: y,
            selectedTabClassName: w,
            selectedTabPanelClassName: R,
            environment: I,
            disableUpDownKeys: D,
            disableLeftRightKeys: O,
            ...L
          } = { ...j, ...e };
          return o.createElement(
            'div',
            Object.assign({}, L, {
              className: f(S),
              onClick: g,
              onKeyDown: function (t) {
                let {
                  direction: n,
                  disableUpDownKeys: a,
                  disableLeftRightKeys: r,
                } = e;
                if (N(t.target)) {
                  let { selectedIndex: o } = e,
                    u = !1,
                    p = !1;
                  ('Space' === t.code ||
                    32 === t.keyCode ||
                    'Enter' === t.code ||
                    13 === t.keyCode) &&
                    ((u = !0), (p = !1), g(t)),
                    (r || (37 !== t.keyCode && 'ArrowLeft' !== t.code)) &&
                    (a || (38 !== t.keyCode && 'ArrowUp' !== t.code))
                      ? (r || (39 !== t.keyCode && 'ArrowRight' !== t.code)) &&
                        (a || (40 !== t.keyCode && 'ArrowDown' !== t.code))
                        ? 35 === t.keyCode || 'End' === t.code
                          ? ((o = (function () {
                              let e = c();
                              for (; e--; ) if (!_(d(e))) return e;
                              return null;
                            })()),
                            (u = !0),
                            (p = !0))
                          : (36 === t.keyCode || 'Home' === t.code) &&
                            ((o = (function () {
                              let e = c();
                              for (let t = 0; t < e; t++)
                                if (!_(d(t))) return t;
                              return null;
                            })()),
                            (u = !0),
                            (p = !0))
                        : ((o = 'rtl' === n ? i(o) : s(o)), (u = !0), (p = !0))
                      : ((o = 'rtl' === n ? s(o) : i(o)), (u = !0), (p = !0)),
                    u && t.preventDefault(),
                    p && l(o, t);
                }
              },
              ref: (e) => {
                (r.current = e), T && T(e);
              },
              'data-rttabs': !0,
            }),
            (function () {
              let r = 0,
                {
                  children: l,
                  disabledTabClassName: s,
                  focus: i,
                  forceRenderTabPanel: f,
                  selectedIndex: b,
                  selectedTabClassName: g,
                  selectedTabPanelClassName: x,
                  environment: _,
                } = e;
              n.current = n.current || [];
              let j = n.current.length - c(),
                N = (0, o.useId)();
              for (; j++ < 0; ) n.current.push(`${N}${n.current.length}`);
              return h(l, (e) => {
                let l = e;
                if (p(e)) {
                  let r = 0,
                    c = !1;
                  null == a &&
                    (function (e) {
                      let t =
                        e || ('undefined' != typeof window ? window : void 0);
                      try {
                        a = !!(
                          void 0 !== t &&
                          t.document &&
                          t.document.activeElement
                        );
                      } catch (e) {
                        a = !1;
                      }
                    })(_);
                  let p = _ || ('undefined' != typeof window ? window : void 0);
                  a &&
                    p &&
                    (c = o.Children.toArray(e.props.children)
                      .filter(u)
                      .some((e, t) => p.document.activeElement === d(t))),
                    (l = (0, o.cloneElement)(e, {
                      children: h(e.props.children, (e) => {
                        let a = `tabs-${r}`,
                          l = b === r,
                          d = {
                            tabRef: (e) => {
                              t.current[a] = e;
                            },
                            id: n.current[r],
                            selected: l,
                            focus: l && (i || c),
                          };
                        return (
                          g && (d.selectedClassName = g),
                          s && (d.disabledClassName = s),
                          r++,
                          (0, o.cloneElement)(e, d)
                        );
                      }),
                    }));
                } else if (m(e)) {
                  let t = { id: n.current[r], selected: b === r };
                  f && (t.forceRender = f),
                    x && (t.selectedClassName = x),
                    r++,
                    (l = (0, o.cloneElement)(e, t));
                }
                return l;
              });
            })(),
          );
        };
      N.propTypes = {};
      let v = {
          defaultFocus: !1,
          focusTabOnClick: !0,
          forceRenderTabPanel: !1,
          selectedIndex: null,
          defaultIndex: null,
          environment: null,
          disableUpDownKeys: !1,
          disableLeftRightKeys: !1,
        },
        S = (e) => (null === e.selectedIndex ? 1 : 0),
        A = (e, t) => {},
        T = (e) => {
          let {
              children: t,
              defaultFocus: n,
              defaultIndex: a,
              focusTabOnClick: r,
              onSelect: l,
              ...s
            } = { ...v, ...e },
            [i, c] = (0, o.useState)(n),
            [d] = (0, o.useState)(S(s)),
            [u, p] = (0, o.useState)(1 === d ? a || 0 : null);
          if (
            ((0, o.useEffect)(() => {
              c(!1);
            }, []),
            1 === d)
          ) {
            let e = b(t);
            (0, o.useEffect)(() => {
              if (null != u) {
                let t = Math.max(0, e - 1);
                p(Math.min(u, t));
              }
            }, [e]);
          }
          A(s, d);
          let m = { ...e, ...s };
          return (
            (m.focus = i),
            (m.onSelect = (e, t, n) => {
              ('function' != typeof l || !1 !== l(e, t, n)) &&
                (r && c(!0), 1 === d && p(e));
            }),
            null != u && (m.selectedIndex = u),
            delete m.defaultFocus,
            delete m.defaultIndex,
            delete m.focusTabOnClick,
            o.createElement(N, m, t)
          );
        };
      (T.propTypes = {}), (T.tabsRole = 'Tabs');
      let k = { className: 'react-tabs__tab-list' },
        C = (e) => {
          let { children: t, className: n, ...a } = { ...k, ...e };
          return o.createElement(
            'ul',
            Object.assign({}, a, { className: f(n), role: 'tablist' }),
            t,
          );
        };
      (C.tabsRole = 'TabList'), (C.propTypes = {});
      let E = 'react-tabs__tab',
        y = {
          className: E,
          disabledClassName: `${E}--disabled`,
          focus: !1,
          id: null,
          selected: !1,
          selectedClassName: `${E}--selected`,
        },
        w = (e) => {
          let t = (0, o.useRef)(),
            {
              children: n,
              className: a,
              disabled: r,
              disabledClassName: l,
              focus: s,
              id: i,
              selected: c,
              selectedClassName: d,
              tabIndex: u,
              tabRef: p,
              ...m
            } = { ...y, ...e };
          return (
            (0, o.useEffect)(() => {
              c && s && t.current.focus();
            }, [c, s]),
            o.createElement(
              'li',
              Object.assign({}, m, {
                className: f(a, { [d]: c, [l]: r }),
                ref: (e) => {
                  (t.current = e), p && p(e);
                },
                role: 'tab',
                id: `tab${i}`,
                'aria-selected': c ? 'true' : 'false',
                'aria-disabled': r ? 'true' : 'false',
                'aria-controls': `panel${i}`,
                tabIndex: u || (c ? '0' : null),
                'data-rttab': !0,
              }),
              n,
            )
          );
        };
      (w.propTypes = {}), (w.tabsRole = 'Tab');
      let R = 'react-tabs__tab-panel',
        I = {
          className: R,
          forceRender: !1,
          selectedClassName: `${R}--selected`,
        },
        D = (e) => {
          let {
            children: t,
            className: n,
            forceRender: a,
            id: r,
            selected: l,
            selectedClassName: s,
            ...i
          } = { ...I, ...e };
          return o.createElement(
            'div',
            Object.assign({}, i, {
              className: f(n, { [s]: l }),
              role: 'tabpanel',
              id: `panel${r}`,
              'aria-labelledby': `tab${r}`,
            }),
            a || l ? t : null,
          );
        };
      (D.tabsRole = 'TabPanel'), (D.propTypes = {}), n(5474);
      var O = n(2511),
        L = n(4275),
        P = n.n(L),
        U = n(1560),
        M = n.n(U);
      let V = (e) => {
        let {
          startTime: t,
          endTime: n,
          date: a,
          title: s,
          sessionDescription: i,
        } = e;
        return (0, r.jsx)('button', {
          className: ''.concat(M()['calendar-container']),
          onClick: () => {
            let e = l.BQ.LOCATION,
              r = (0, c.iV)(''.concat(l.EO.YEAR, ' ').concat(a, ' ').concat(t)),
              o = (0, c.iV)(''.concat(l.EO.YEAR, ' ').concat(a, ' ').concat(n)),
              d =
                '\nBEGIN:VCALENDAR\nVERSION:2.0\nMETHOD:PUBLISH\nBEGIN:VEVENT\nTZID:Asia/Kolkata\nTZOFFSETFROM:+0530\nTZOFFSETTO:+0530\nDTSTART;TZID=Asia/Kolkata:'
                  .concat(r, '\nDTEND;TZID=Asia/Kolkata:')
                  .concat(o, '\nLOCATION:')
                  .concat(e, '\nTRANSP:OPAQUE\nSUMMARY:')
                  .concat(s, '\nDESCRIPTION:')
                  .concat(
                    i,
                    '\nPRIORITY:5\nCLASS:PUBLIC\nBEGIN:VALARM\nTRIGGER:-PT15M\nACTION:DISPLAY\ntitle:Reminder\nEND:VALARM\nEND:VEVENT\nEND:VCALENDAR\n',
                  ),
              u = new Blob([d], { type: l.EO.TYPE }),
              p = window.URL.createObjectURL(u),
              m = document.createElement(l.EO.ELEMENT);
            (m.href = p),
              m.setAttribute(l.EO.ATTRIBUTE, ''.concat(s, '.ics')),
              document.body.appendChild(m),
              m.click(),
              document.body.removeChild(m);
          },
          children: '+ add to calendar',
        });
      };
      V.propTypes = {
        startTime: P().string,
        endTime: P().string,
        date: P().string,
        title: P().string,
        sessionDescription: P().string,
      };
      var Y = n(262),
        B = n.n(Y),
        F = n(6691),
        J = n.n(F);
      let H = (e) => {
        let { profileImageUrlPath: t, profileName: n } = e;
        return (0, r.jsxs)('div', {
          className: ''.concat(B()['profile-container']),
          children: [
            (0, r.jsx)(J(), { src: t, alt: n + l.Qy, width: 100, height: 100 }),
            (0, r.jsx)('h5', { children: n }),
          ],
        });
      };
      H.propTypes = {
        profileImageUrlPath: P().string,
        profileName: P().string,
      };
      var Z = n(6089),
        $ = n.n(Z);
      let G = (e) => {
        let { tagName: t } = e;
        return (0, r.jsx)('div', {
          className: ''.concat($()['tag-container']),
          children: t,
        });
      };
      G.propTypes = { tagName: P().string };
      var K = n(3846),
        X = n(3574),
        Q = n.n(X);
      let W = (e) => {
        let { props: t } = e,
          {
            startTime: n,
            endTime: a,
            date: l,
            title: s,
            speakersId: i,
            sessionDescription: o,
            tags: d,
            category: u,
            speakers: p,
            spearkerDescription: m,
          } = t,
          h =
            null == i
              ? void 0
              : i.map((e) =>
                  (0, r.jsx)(
                    H,
                    {
                      profileImageUrlPath: (0, c.Mz)(e).imageUrl,
                      profileName: (0, c.Mz)(e).name,
                    },
                    e,
                  ),
                );
        null == h ||
          h.sort((e, t) => {
            let n = e.props.profileName.toLowerCase(),
              a = t.props.profileName.toLowerCase();
            return n.localeCompare(a);
          });
        let f =
          null == p
            ? void 0
            : p.map((e) =>
                (0, r.jsxs)(
                  'div',
                  {
                    className: Q()['external-speakers'],
                    children: [
                      (0, r.jsx)('h4', { children: e.name }, e),
                      (0, r.jsx)('p', { children: e.description }),
                    ],
                  },
                  e.name,
                ),
              );
        return (
          null == f ||
            f.sort((e, t) => {
              let n = e.key.toLowerCase(),
                a = t.key.toLowerCase();
              return n.localeCompare(a);
            }),
          (0, r.jsx)('div', {
            children:
              'External Partner Session' === u
                ? (0, r.jsxs)(K.default, {
                    styleName: 'brown-glass-card',
                    children: [
                      (0, r.jsx)(V, {
                        startTime: n,
                        endTime: a,
                        date: l,
                        title: s,
                        sessionDescription: o,
                      }),
                      (0, r.jsxs)('div', {
                        className: Q()['external-speaker-container'],
                        children: [
                          (0, r.jsxs)('p', { children: ['[', u, ']'] }),
                          (0, r.jsxs)('h4', {
                            className: Q()['schedule-time'],
                            children: [n, ' - ', a],
                          }),
                          (0, r.jsx)('h3', {
                            className: Q().topic,
                            children: s,
                          }),
                          f &&
                            (0, r.jsx)('div', {
                              className: Q()['member-container'],
                              children: f,
                            }),
                          (0, r.jsx)('p', { children: m }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)(K.default, {
                    styleName: 'glass-card',
                    children: [
                      (0, r.jsx)(V, {
                        startTime: n,
                        endTime: a,
                        date: l,
                        title: s,
                        sessionDescription: o,
                      }),
                      (0, r.jsxs)('h4', {
                        className: Q()['schedule-time'],
                        children: [n, ' - ', a],
                      }),
                      (0, r.jsx)('h3', { className: Q().topic, children: s }),
                      h &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)('div', {
                              className: Q()['profiles-container'],
                              children: h,
                            }),
                            (0, r.jsx)('p', {
                              className: Q().description,
                              children: o,
                            }),
                            (0, r.jsx)('div', {
                              className: ''.concat(Q()['tags-container']),
                              children: d.map((e) =>
                                (0, r.jsx)(G, { tagName: e }, e),
                              ),
                            }),
                          ],
                        }),
                      f &&
                        (0, r.jsx)('div', {
                          className: Q()['member-container'],
                          children: f,
                        }),
                    ],
                  }),
          })
        );
      };
      W.propTypes = {
        scheduleTime: P().string,
        topicName: P().string,
        members: P().array,
        description: P().string,
        tags: P().array,
      };
      var z = n(685),
        q = n.n(z),
        ee = (e) => {
          let { time: t } = e;
          return (0, r.jsx)('span', {
            className: ''.concat(q().displayTime),
            children: t,
          });
        },
        et = n(9442),
        en = n.n(et),
        ea = n(7610),
        er = (e) => {
          let { searchTerm: t, clearInput: n } = e,
            a = (0, c.Jy)('October 11'),
            s = (0, c.Jy)('October 12'),
            [d, u] = (0, o.useState)(a),
            [p, m] = (0, o.useState)(s),
            [h, f] = (0, o.useState)(0),
            { setIndex: b } = (0, o.useContext)(ea.TabContext),
            g = () => {
              u(a), m(s), n();
            };
          (0, o.useEffect)(() => {
            let e = (0, c.f2)(t, a);
            u(e);
            let n = (0, c.f2)(t, s);
            m(n),
              0 === e.length && n.length > 0
                ? f(1)
                : 0 === n.length && e.length > 0 && f(0),
              '' === t && g();
          }, [t]);
          let x = (e) => {
            f(e), b(e);
          };
          return (0, r.jsx)('div', {
            className: ''.concat(en()['schedule-tab'], ' ').concat(i.className),
            children: (0, r.jsxs)(T, {
              selectedTabClassName: en()['active-tab-title'],
              selectedIndex: h,
              onSelect: '',
              children: [
                (0, r.jsxs)(C, {
                  className: en()['tab-title'],
                  children: [
                    ['October 11', 'October 12'].map((e, t) =>
                      (0, r.jsx)(
                        w,
                        { 'aria-label': e, onClick: () => x(t), children: e },
                        e,
                      ),
                    ),
                    (0, r.jsx)('div', { className: en().line }),
                  ],
                }),
                (0, r.jsxs)(D, {
                  className: en()['schedule-content'],
                  children: [
                    (0, r.jsx)('div', { className: en()['mask-div'] }),
                    (0, r.jsx)('div', {
                      className: en().content,
                      children:
                        0 === d.length
                          ? (0, r.jsxs)('div', {
                              className: en()['fallback-schedule'],
                              children: [
                                l.Cq,
                                ' ',
                                '"'.concat(t, '"'),
                                (0, r.jsx)(O.default, {
                                  onClick: g,
                                  styleName: 'gradient-border-btn',
                                  name: l.jX,
                                }),
                              ],
                            })
                          : d.map((e, t) =>
                              (0, r.jsxs)(
                                'div',
                                {
                                  className: en()['card-session'],
                                  children: [
                                    (0, r.jsx)('div', {
                                      className: en()['card-time'],
                                      children: (0, r.jsx)(ee, {
                                        time: e.startTime,
                                      }),
                                    }),
                                    (0, r.jsx)('div', {
                                      className: en()['session-wrapper'],
                                      children: (0, r.jsx)('div', {
                                        className: en()['card-content'],
                                        children: (0, r.jsx)('div', {
                                          className: en()['card-detail'],
                                          children: (0, r.jsx)(W, { props: e }),
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                    }),
                  ],
                }),
                (0, r.jsxs)(D, {
                  className: en()['schedule-content'],
                  children: [
                    (0, r.jsx)('div', { className: en()['mask-div'] }),
                    (0, r.jsx)('div', {
                      className: en().content,
                      children:
                        0 === p.length
                          ? (0, r.jsxs)('div', {
                              className: en()['fallback-schedule'],
                              children: [
                                l.Cq,
                                ' ',
                                '"'.concat(t, '"'),
                                (0, r.jsx)(O.default, {
                                  onClick: g,
                                  styleName: 'gradient-border-btn',
                                  name: l.jX,
                                }),
                              ],
                            })
                          : p.map((e, t) =>
                              (0, r.jsxs)(
                                'div',
                                {
                                  className: en()['card-session'],
                                  children: [
                                    (0, r.jsx)('div', {
                                      className: en()['card-time'],
                                      children: (0, r.jsx)(ee, {
                                        time: e.startTime,
                                      }),
                                    }),
                                    (0, r.jsx)('div', {
                                      className: en()['session-wrapper'],
                                      children: (0, r.jsx)('div', {
                                        className: en()['card-content'],
                                        children: (0, r.jsx)('div', {
                                          className: en()['card-detail'],
                                          children: (0, r.jsx)(W, { props: e }),
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        el = n(6533),
        es = n.n(el);
      let ei = (0, o.forwardRef)((e, t) => {
        let { type: n, placeholder: a, buttonClick: l } = e,
          [s, i] = (0, o.useState)(),
          c = (e) => {
            i(null == e ? void 0 : e.trim()),
              (null == e ? void 0 : e.trim()) === '' && l(e);
          };
        return (0, r.jsxs)('div', {
          className: ''.concat(es().search),
          id: 'searchInput',
          children: [
            (0, r.jsx)('input', {
              type: n,
              ref: t,
              onChange: (e) => c(e.target.value),
              placeholder: a,
              onKeyDown: (e) => {
                'Enter' === e.key && l(s);
              },
            }),
            (0, r.jsx)(O.default, {
              styleName: 'orange-arrow-btn',
              onClick: () => {
                l(s);
              },
            }),
          ],
        });
      });
      ei.propTypes = {
        type: P().string,
        style: P().string,
        placeholder: P().string,
        onChange: P().func,
        buttonClick: P().func,
        onKeyDown: P().func,
      };
      let ec = { placeholder: 'Find the schedule' };
      var eo = n(6480),
        ed = n.n(eo),
        eu = function () {
          let [e, t] = (0, o.useState)(),
            n = (0, o.useRef)(null);
          return (0, r.jsxs)('div', {
            className: ed().wrapper,
            children: [
              (0, r.jsx)(er, {
                searchTerm: e,
                clearInput: () => {
                  n.current.value = '';
                },
              }),
              (0, r.jsx)('div', {
                className: ed()['search-box-parent'],
                children: (0, r.jsx)('div', {
                  className: ed()['search-box'],
                  children: (0, r.jsx)(ei, {
                    placeholder: ec.placeholder,
                    type: ec.type,
                    buttonClick: (e) => {
                      t(e);
                    },
                    ref: n,
                  }),
                }),
              }),
            ],
          });
        };
    },
    5508: function (e, t, n) {
      'use strict';
      n.d(t, {
        iV: function () {
          return i;
        },
        if: function () {
          return d;
        },
        T3: function () {
          return l;
        },
        Jy: function () {
          return c;
        },
        Mz: function () {
          return s;
        },
        f2: function () {
          return o;
        },
      });
      var a = n(683),
        r = n(3545);
      let l = (e) => r.iG[''.concat(e)],
        s = (e) => r.eY[''.concat(e)];
      function i(e) {
        let t = new Date(e),
          n = t.getFullYear(),
          a = (t.getMonth() + 1).toString().padStart(2, '0'),
          r = t.getDate().toString().padStart(2, '0'),
          l = t.getHours().toString().padStart(2, '0'),
          s = t.getMinutes().toString().padStart(2, '0'),
          i = t.getSeconds().toString().padStart(2, '0'),
          c = ''
            .concat(n)
            .concat(a)
            .concat(r, 'T')
            .concat(l)
            .concat(s)
            .concat(i, 'Z');
        return c;
      }
      let c = (e) => {
        let t = [],
          n = r.iG,
          a = Object.keys(n);
        for (let r of a) {
          let a = n[r],
            l = a.date;
          l === e && t.push(a);
        }
        return t;
      };
      function o(e, t) {
        let n = [];
        if ('' === e || void 0 === e) return t;
        let a = null == e ? void 0 : e.toLowerCase();
        for (let e in t) {
          let r = t[e];
          (r.title.toLowerCase().includes(a) ||
            r.category.toLowerCase().includes(a) ||
            (r.speakersId &&
              r.speakersId.some((e) => s(e).name.toLowerCase().includes(a))) ||
            (r.tags && r.tags.some((e) => e.toLowerCase().includes(a)))) &&
            n.push(r);
        }
        return n;
      }
      let d = () => a.nn;
    },
    5474: function () {},
    1560: function (e) {
      e.exports = {
        'calendar-container': 'AddToCalendar_calendar-container__EwZVc',
      };
    },
    262: function (e) {
      e.exports = { 'profile-container': 'Profile_profile-container__ajo3h' };
    },
    3574: function (e) {
      e.exports = {
        'external-speaker-container':
          'EventDetailCard_external-speaker-container__NXa8L',
        'schedule-time': 'EventDetailCard_schedule-time__yo1LJ',
        'member-container': 'EventDetailCard_member-container__CboO2',
        'external-speakers': 'EventDetailCard_external-speakers__ULNYK',
        'tags-container': 'EventDetailCard_tags-container__hEhBM',
        'profiles-container': 'EventDetailCard_profiles-container__Mrpoe',
        topic: 'EventDetailCard_topic__wVnTq',
        description: 'EventDetailCard_description__QNYL_',
      };
    },
    9442: function (e) {
      e.exports = {
        'schedule-tab': 'ScheduleTab_schedule-tab__W18YE',
        'fallback-schedule': 'ScheduleTab_fallback-schedule__BsL3Q',
        'tab-title': 'ScheduleTab_tab-title__1zhZA',
        'card-session': 'ScheduleTab_card-session__Y4eVI',
        'card-time': 'ScheduleTab_card-time__JjdIZ',
        'active-tab-title': 'ScheduleTab_active-tab-title__Hi1WH',
        'schedule-content': 'ScheduleTab_schedule-content__vwIl5',
        'mask-div': 'ScheduleTab_mask-div__auOLY',
        'session-wrapper': 'ScheduleTab_session-wrapper__J0s5H',
        'card-content': 'ScheduleTab_card-content__6pfyh',
        'card-detail': 'ScheduleTab_card-detail__FhYUI',
      };
    },
    6533: function (e) {
      e.exports = { search: 'Search_search__gJyxj' };
    },
    6089: function (e) {
      e.exports = { 'tag-container': 'Tag_tag-container__f0H24' };
    },
    685: function (e) {
      e.exports = { displayTime: 'TimeDisplay_displayTime__t0WUh' };
    },
    6480: function (e) {
      e.exports = {
        wrapper: 'ScheduleContainer_wrapper__TEAP4',
        'search-box-parent': 'ScheduleContainer_search-box-parent__VCHDX',
      };
    },
    8515: function (e, t, n) {
      'use strict';
      n.r(t),
        (t.default = {
          src: '/recap/2023/_next/static/media/spark-with-arrow.b37484ce.png',
          height: 893,
          width: 2887,
          blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEX6+vr6+vry9fXm5ubwusHo4uTYAiDr6+vMAADslaD1///LIpsLAAAAC3RSTlNsiVp6R5FXpgrNt5hJF5IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2Dj5GJlZmZnYuBgYWJkYGBkAAAC/wA+TYb/+AAAAABJRU5ErkJggg==',
          blurWidth: 8,
          blurHeight: 2,
        });
    },
    5984: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Montserrat_c6d327', '__Montserrat_Fallback_c6d327'",
        },
        className: '__className_c6d327',
      };
    },
    683: function (e) {
      'use strict';
      e.exports = JSON.parse(
        '{"nn":[{"name":"2022","imageUrls":["/images/allSparkStills/2022/1.jpg","/images/allSparkStills/2022/2.jpg","/images/allSparkStills/2022/3.jpg","/images/allSparkStills/2022/4.jpg"],"link":"/recap/2022/","links":"#2022"},{"name":"2019","imageUrls":["/images/allSparkStills/2019/1.jpg","/images/allSparkStills/2019/2.jpg","/images/allSparkStills/2019/3.jpg","/images/allSparkStills/2019/4.jpg"],"link":"/recap/2019/","links":"#2019"},{"name":"2018","imageUrls":["/images/allSparkStills/2018/1.jpg","/images/allSparkStills/2018/2.jpg","/images/allSparkStills/2018/3.jpg","/images/allSparkStills/2018/4.jpg"],"link":"/recap/2018/","links":"#2018"},{"name":"2017","imageUrls":["/images/allSparkStills/2017/1.jpg","/images/allSparkStills/2017/2.jpg","/images/allSparkStills/2017/3.jpg","/images/allSparkStills/2017/4.jpg"],"link":"/recap/2017/","links":"#2017"},{"name":"2016","imageUrls":["/images/allSparkStills/2016/1.jpg","/images/allSparkStills/2016/2.jpg","/images/allSparkStills/2016/3.jpg","/images/allSparkStills/2016/4.jpg"],"link":"/recap/2016/","links":"#2016"}]}',
      );
    },
  },
  function (e) {
    e.O(0, [922, 222, 724, 679, 862, 971, 596, 744], function () {
      return e((e.s = 2609));
    }),
      (_N_E = e.O());
  },
]);
