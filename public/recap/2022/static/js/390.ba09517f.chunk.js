'use strict';
(self.webpackChunkall_spark_website_2022 =
  self.webpackChunkall_spark_website_2022 || []).push([
  [390],
  {
    4846: function (e, s, n) {
      n.r(s),
        n.d(s, {
          default: function () {
            return De;
          },
        });
      var a = n(2791),
        t = 'AgendaListUI_agendaListContainer__XFJoR',
        i = 'AgendaListUI_agendaContainer__h9uQ8',
        r = 'AgendaListUI_agendaRightContainer__RJ-Vv',
        l = 'AgendaListUI_sameTimelineSessions__BjxaQ',
        c = n(7707),
        d = 'AgendaDateUI_AgendaDateContainer__hGASG',
        o = 'AgendaDateUI_AgendaDay__e8cpy',
        _ = 'AgendaDateUI_AgendaFullDate__ThrSg',
        v = 'AgendaDateUI_AgendaDate__pNSsK',
        u = n(2007),
        m = n.n(u),
        h = n(184),
        f = function (e) {
          var s = e.day,
            n = e.date,
            a = e.fullDate;
          return (0, h.jsxs)('div', {
            className: d,
            children: [
              (0, h.jsx)('div', { className: o, children: s }),
              (0, h.jsx)('div', { className: v, children: n }),
              (0, h.jsx)('div', { className: _, children: a }),
            ],
          });
        };
      m().AgendaDateUI = {
        day: m().string.isRequired,
        date: m().string.isRequired,
        fullDate: m().string.isRequired,
      };
      var j = 'SessionInfo_sessionInfoContainer__54C6x',
        x = 'SessionInfo_break__evOAn',
        g = 'SessionDetails_sessionInfoLeftContainer__D5lR7',
        p = 'SessionDetails_sessionTitle__hP+Jt',
        N = 'SessionDetails_link__aNxca',
        D = 'SessionDetails_sessionInfoRightContainer__4t6MA',
        I = 'SessionDetails_sessionSpeakersContainer__MOUHV',
        T = 'EventTime_eventTimeline__Cizd4',
        S = 'EventTime_separator__bOjHA',
        E = 'EventTime_category__-BPOJ',
        C = 'EventTime_screen__3v+rQ',
        k = 'EventTime_techTalk__jPDKo',
        A = 'EventTime_solutionSpace__qQcwq',
        y = n(3726),
        b = function (e) {
          var s = e.startTime,
            n = e.endTime,
            a = e.screen,
            t = void 0 === a ? '' : a,
            i = e.category,
            r = e.repeat;
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsxs)('div', {
                className: T,
                children: [
                  (0, h.jsx)('span', { children: s }),
                  n
                    ? (0, h.jsxs)(h.Fragment, {
                        children: [
                          (0, h.jsx)('span', { className: S, children: '-' }),
                          ' ',
                          (0, h.jsx)('span', { children: n }),
                        ],
                      })
                    : '',
                ],
              }),
              t && i
                ? (0, h.jsxs)('div', {
                    className: E,
                    children: [
                      t && !0 === r
                        ? (0, h.jsxs)('span', {
                            className: C,
                            children: [t, y.Repeat.REPEAT],
                          })
                        : (0, h.jsx)('span', { className: C, children: t }),
                      i
                        ? (0, h.jsx)('span', {
                            className: 'Tech Talks' === i ? k : A,
                            children: i,
                          })
                        : '',
                    ],
                  })
                : null,
            ],
          });
        };
      m().EventTime = {
        startTime: m().string.isRequired,
        endTime: m().string.isRequired,
        screen: m().string,
        category: m().string,
        repeat: m().bool,
      };
      var R = function (e) {
          var s = e.sessionDetails,
            a = e.speakersID,
            t = void 0 === a ? [] : a,
            i = s.title,
            r = s.startTime,
            l = s.endTime,
            d = s.url,
            o = void 0 === d ? '' : d,
            _ = s.screen,
            v = void 0 === _ ? '' : _,
            u = c.speakers;
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsxs)('div', {
                className: g,
                children: [
                  '' === o
                    ? (0, h.jsx)('div', { className: p, children: i })
                    : (0, h.jsx)('a', {
                        href: o,
                        target: 'blank',
                        children: (0, h.jsx)('div', {
                          className: ''.concat(N, ' ').concat(p),
                          children: i,
                        }),
                      }),
                  (0, h.jsx)(b, {
                    startTime: r,
                    endTime: l,
                    screen: v,
                    category: 'break' !== s.category ? s.category : '',
                    repeat: s.repeat,
                  }),
                ],
              }),
              (0, h.jsx)('div', {
                className: D,
                children:
                  t &&
                  (0, h.jsx)('div', {
                    className: I,
                    children: t.map(function (e, s) {
                      var a = u[e] || {},
                        t = a.thumbnail,
                        i = a.name,
                        r = n(990)('./'.concat(t));
                      return (0, h.jsx)('img', { src: r, alt: i }, s);
                    }),
                  }),
              }),
            ],
          });
        },
        F = (0, a.forwardRef)(function (e, s) {
          var n = e.sessionDetails,
            a = e.speakersID,
            t = void 0 === a ? [] : a,
            i = e.singleSession,
            r = void 0 === i || i,
            l = n.category,
            c = void 0 === l ? '' : l;
          return (0, h.jsx)(h.Fragment, {
            children:
              'break' === c
                ? (0, h.jsx)('div', {
                    className: ''.concat(j, ' ').concat(x),
                    children: (0, h.jsx)(R, {
                      sessionDetails: n,
                      speakersID: t,
                      singleSession: r,
                    }),
                  })
                : (0, h.jsx)('div', {
                    className: ''.concat(j, ' session-detail-card'),
                    ref: s,
                    children: (0, h.jsx)(R, {
                      sessionDetails: n,
                      speakersID: t,
                      singleSession: r,
                    }),
                  }),
          });
        }),
        M = 'AgendaSessions_agendaSessionsContainer__sywm0',
        P = 'AgendaSessions_singleSession__lTajs',
        w = 'AgendaSessions_multipleSession__0IL+2',
        L = 'AgendaSessions_toolTip__5SKao',
        O = 'EventInfo_eventInfoContainer__tcXkJ',
        q = 'EventInfo_theme__xcMZI',
        U = 'EventInfo_eventInfo__GIoMn',
        W = 'EventInfo_eventTitle__ZCWw9',
        J = 'EventInfo_eventCategory__ySEMd',
        Z = 'EventInfo_eventDuration__el9Rn',
        G = 'EventInfo_screen__jgkhk',
        B = 'EventInfo_speakers__k6hfJ',
        H = 'EventInfo_speaker__1J3a1',
        K = 'EventInfo_speakerName__AsavM',
        V = 'EventInfo_speakerImageContainer__9fpPK',
        Q = 'EventInfo_speakerImage__fEruG',
        X = function (e) {
          var s = e.speakers_ID,
            a = e.sessionDetails,
            t = c.speakers;
          return (0, h.jsxs)('div', {
            className: O,
            children: [
              (0, h.jsx)('div', { className: q }),
              (0, h.jsxs)('div', {
                className: U,
                children: [
                  '' === a.url
                    ? (0, h.jsx)('div', { className: W, children: a.title })
                    : (0, h.jsx)('a', {
                        href: a.url,
                        target: 'blank',
                        children: (0, h.jsx)('div', {
                          className: W,
                          children: a.title,
                        }),
                      }),
                  (0, h.jsx)('div', { className: J, children: a.category }),
                  (0, h.jsx)('div', {
                    className: Z,
                    children: ''
                      .concat(a.startTime, ' - ')
                      .concat(a.endTime, ' (')
                      .concat(a.duration, ' ')
                      .concat(y.TimeConstants.minutes, ')'),
                  }),
                  a.screen
                    ? (0, h.jsx)('div', { className: G, children: a.screen })
                    : null,
                  0 !== s.length &&
                    (0, h.jsx)('div', {
                      className: B,
                      children: y.EventInfoConstants.presenters,
                    }),
                  s &&
                    s.map(function (e, s) {
                      var a = t[e] || {},
                        i = a.thumbnail,
                        r = a.name,
                        l = n(990)('./'.concat(i));
                      return (0, h.jsxs)(
                        'div',
                        {
                          className: H,
                          children: [
                            (0, h.jsx)('div', {
                              className: V,
                              children: (0, h.jsx)('img', {
                                className: Q,
                                src: l,
                                alt: r,
                              }),
                            }),
                            (0, h.jsx)('div', { className: K, children: r }),
                          ],
                        },
                        s,
                      );
                    }),
                ],
              }),
            ],
          });
        },
        z = n(2271),
        Y =
          (n(4992),
          function (e) {
            var s = e.sessionsInfo,
              n = e.data,
              a = e.singleSession,
              t = void 0 === a || a;
            return (0, h.jsx)('div', {
              className: M,
              children: s.map(function (e, s) {
                var a = e.sessionId,
                  i = e.speakers_id,
                  r = void 0 === i ? [] : i,
                  l = n.sessions[a];
                return (0, h.jsx)(
                  'div',
                  {
                    className: t ? P : w,
                    children: (0, h.jsx)(
                      z.ZP,
                      {
                        className: L,
                        content: (0, h.jsx)(X, {
                          speakers_ID: r,
                          sessionDetails: l,
                          data: e,
                        }),
                        interactive: !0,
                        placement: 'bottom',
                        children: (0, h.jsx)(F, {
                          speakersID: r,
                          sessionDetails: l,
                          singleSession: t,
                          data: e,
                          index: a,
                        }),
                      },
                      s,
                    ),
                  },
                  s,
                );
              }),
            });
          });
      m().AgendaSessions = {
        sessionsInfo: m().array.isRequired,
        data: m().object.isRequired,
        singleSession: m().bool,
      };
      var $ = (0, a.forwardRef)(function (e, s) {
          var n = c.agenda,
            d = (0, a.useRef)([]);
          return (
            (d.current = n.map(function (e, s) {
              var n;
              return null !== (n = d.current[s]) && void 0 !== n
                ? n
                : (0, a.createRef)();
            })),
            (0, a.useImperativeHandle)(s, function () {
              return {
                scrollToAgenda: function (e) {
                  d.current[e].current.scrollIntoView({ behavior: 'smooth' });
                },
              };
            }),
            (0, h.jsx)('div', {
              className: t,
              children: n.map(function (e, s) {
                var n = e.day,
                  a = e.date,
                  t = e.fullDate,
                  o = e.info;
                return (0, h.jsxs)(
                  'div',
                  {
                    className: i,
                    ref: d.current[s],
                    children: [
                      (0, h.jsx)(f, { day: n, date: a, fullDate: t }),
                      (0, h.jsx)('div', {
                        className: r,
                        children: o.map(function (e, s) {
                          return (0, h.jsx)(h.Fragment, {
                            children:
                              e.length > 1
                                ? (0, h.jsx)(
                                    'div',
                                    {
                                      className: l,
                                      children: (0, h.jsx)(Y, {
                                        sessionsInfo: e,
                                        data: c,
                                        singleSession: !1,
                                      }),
                                    },
                                    s,
                                  )
                                : (0, h.jsx)(
                                    'div',
                                    {
                                      children: (0, h.jsx)(Y, {
                                        sessionsInfo: e,
                                        data: c,
                                        singleSession: !0,
                                      }),
                                    },
                                    s,
                                  ),
                          });
                        }),
                      }),
                    ],
                  },
                  s,
                );
              }),
            })
          );
        }),
        ee = n(9439),
        se = {
          eventDates: 'CalendarEventDate_eventDates__yLBzp',
          selectedDate: 'CalendarEventDate_selectedDate__2X8us',
        };
      function ne(e) {
        var s = (0, a.useState)(!1),
          n = (0, ee.Z)(s, 2),
          t = n[0],
          i = n[1],
          r = (0, a.useRef)([]),
          l = e.handleDateSelection,
          c = [19, 20],
          d = function (e, s) {
            l(s), i(!t);
            for (var n = 0, a = c; n < a.length; n++) {
              var d = a[n];
              d === parseInt(e)
                ? (r.current[d].className = se.selectedDate)
                : (r.current[d].className = '');
            }
          };
        return (0, h.jsxs)('div', {
          className: se.eventDates,
          children: [
            (0, h.jsx)('div', {
              className: se.selectedDate,
              onClick: function (e) {
                return d(e.target.getAttribute('value'), 0);
              },
              value: '19',
              ref: function (e) {
                r.current[19] = e;
              },
              id: '19',
              children: '19',
            }),
            (0, h.jsx)('div', {
              onClick: function (e) {
                return d(e.target.getAttribute('value'), 1);
              },
              value: '20',
              ref: function (e) {
                r.current[20] = e;
              },
              id: '20',
              children: '20',
            }),
          ],
        });
      }
      var ae = {
        calendarItems: 'CalendarItem_calendarItems__YuOlt',
        faded: 'CalendarItem_faded__zLL4-',
        notFaded: 'CalendarItem_notFaded__nMcJZ',
      };
      function te(e) {
        var s = e.items,
          n = e.isFade;
        return (0, h.jsx)('div', {
          className: ae.calendarItems,
          children: s.map(function (e, s) {
            return (0, h.jsx)(
              'div',
              {
                className:
                  1 === n
                    ? e >= 25 && e <= 30
                      ? ae.faded
                      : ae.notFaded
                    : ae.notFaded && 6 === n && e >= 1 && e <= 5
                      ? ae.faded
                      : ae.notFaded,
                children: e,
              },
              s,
            );
          }),
        });
      }
      var ie = {
        calendarTitle: 'CalendarMonth_calendarTitle__90sdi',
        arrow: 'CalendarMonth_arrow__0yFVK',
      };
      function re() {
        return (0, h.jsx)('div', {
          className: ie.calendarTitle,
          children: 'October 2022',
        });
      }
      var le = [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['25', '26', '27', '28', '29', '30', '1'],
          ['2', '3', '4', '5', '6', '7', '8'],
          [' 9', '10', '11', '12', '13', '14', '15'],
          ['16', '17', '18', '19', '20', '21', '22'],
          ['23', '24', '25', '26', '27', '28', '29'],
          ['30', '31', '1', '2', '3', '4', '5'],
        ],
        ce = { calendarWrapper: 'Calendar_calendarWrapper__-C22M' };
      function de(e) {
        var s = e.handleDateSelection;
        return (0, h.jsxs)('div', {
          className: ce.calendarWrapper,
          children: [
            (0, h.jsx)(re, {}),
            le.map(function (e, s) {
              return (0, h.jsx)(
                te,
                { items: e, isFade: 1 === s || s === le.length - 1 ? s : 0 },
                s,
              );
            }),
            (0, h.jsx)(ne, { handleDateSelection: s }),
          ],
        });
      }
      var oe = 'EventDetail_eventDetailsContainer__rZAOF',
        _e = 'EventDetail_eventDetailsHeader__9xg+v',
        ve = 'EventDetail_title__lqIt5',
        ue = 'EventDetail_eventDetailsContent__DBjMG',
        me = 'EventDetail_eventsPerDay__BuPoy',
        he = 'EventDetail_eventDate__sf+oi',
        fe = 'EventDetail_eventTimeline__XQKCC',
        je = 'EventDetail_event__a-lHq',
        xe = 'EventDetail_eventTitle__1MO8M',
        ge = function (e) {
          var s = e.events,
            n = [];
          return (
            s.forEach(function (e) {
              var s = [];
              e.info.forEach(function (e) {
                s.push(
                  (0, h.jsxs)(
                    'div',
                    {
                      className: je,
                      children: [
                        (0, h.jsx)(b, {
                          startTime: e.startTime,
                          endTime: e.endTime,
                        }),
                        (0, h.jsx)('div', { className: xe, children: e.title }),
                      ],
                    },
                    e.title,
                  ),
                );
              }),
                n.push(
                  (0, h.jsxs)(
                    'div',
                    {
                      className: me,
                      children: [
                        (0, h.jsx)('div', { className: he, children: e.date }),
                        (0, h.jsx)('div', { className: fe, children: s }),
                      ],
                    },
                    e.date,
                  ),
                );
            }),
            (0, h.jsxs)('div', {
              className: oe,
              children: [
                (0, h.jsx)('div', {
                  className: _e,
                  children: (0, h.jsx)('span', {
                    className: ve,
                    children: y.COMMONS.EVENTS,
                  }),
                }),
                (0, h.jsx)('div', { className: ue, children: n }),
              ],
            })
          );
        },
        pe = n(9836),
        Ne = {
          scheduleWrapper: 'SchedulePage_scheduleWrapper__GJB6s',
          note: 'SchedulePage_note__+cFaf',
          leftContainer: 'SchedulePage_leftContainer__Zf4mh',
          rightContainer: 'SchedulePage_rightContainer__slyce',
          containerWrapper: 'SchedulePage_containerWrapper__MhZ-d',
        };
      function De(e) {
        var s = e.events,
          n = e.agenda,
          t = (0, a.useRef)(null),
          i = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(function () {
            i.current.scrollIntoView({ block: 'start' });
          }),
          (0, h.jsxs)('div', {
            ref: i,
            className: Ne.scheduleWrapper,
            children: [
              (0, h.jsx)(pe.Z, { label: y.PAGE_TITLE_CONSTANT.SCHEDULE }),
              (0, h.jsx)('p', {
                className: Ne.note,
                children: y.TIME_NOTE.note,
              }),
              (0, h.jsxs)('div', {
                className: Ne.containerWrapper,
                children: [
                  (0, h.jsxs)('div', {
                    className: Ne.leftContainer,
                    children: [
                      (0, h.jsx)(de, {
                        handleDateSelection: function (e) {
                          t.current.scrollToAgenda(e);
                        },
                      }),
                      (0, h.jsx)(ge, { className: Ne.eventDetails, events: s }),
                    ],
                  }),
                  (0, h.jsx)('div', {
                    className: Ne.rightContainer,
                    children: (0, h.jsx)($, { ref: t, agenda: n }),
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=390.ba09517f.chunk.js.map
