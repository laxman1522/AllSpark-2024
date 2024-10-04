!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
      ? define(t)
      : ((e = e || self).firebase = t());
})(this, function () {
  'use strict';
  var r = function (e, t) {
    return (r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      })(e, t);
  };
  var a = function () {
    return (a =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  };
  function e(e, a, s, c) {
    return new (s = s || Promise)(function (r, t) {
      function n(e) {
        try {
          o(c.next(e));
        } catch (e) {
          t(e);
        }
      }
      function i(e) {
        try {
          o(c.throw(e));
        } catch (e) {
          t(e);
        }
      }
      function o(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value) instanceof s
              ? t
              : new s(function (e) {
                  e(t);
                })
            ).then(n, i);
      }
      o((c = c.apply(e, a || [])).next());
    });
  }
  function n(r, n) {
    var i,
      o,
      a,
      e,
      s = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (e = { next: t(0), throw: t(1), return: t(2) }),
      'function' == typeof Symbol &&
        (e[Symbol.iterator] = function () {
          return this;
        }),
      e
    );
    function t(t) {
      return function (e) {
        return (function (t) {
          if (i) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((i = 1),
                o &&
                  (a =
                    2 & t[0]
                      ? o.return
                      : t[0]
                        ? o.throw || ((a = o.return) && a.call(o), 0)
                        : o.next) &&
                  !(a = a.call(o, t[1])).done)
              )
                return a;
              switch (((o = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                case 0:
                case 1:
                  a = t;
                  break;
                case 4:
                  return s.label++, { value: t[1], done: !1 };
                case 5:
                  s.label++, (o = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                    (6 === t[0] || 2 === t[0])
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                    s.label = t[1];
                    break;
                  }
                  if (6 === t[0] && s.label < a[1]) {
                    (s.label = a[1]), (a = t);
                    break;
                  }
                  if (a && s.label < a[2]) {
                    (s.label = a[2]), s.ops.push(t);
                    break;
                  }
                  a[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              t = n.call(r, s);
            } catch (e) {
              (t = [6, e]), (o = 0);
            } finally {
              i = a = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        })([t, e]);
      };
    }
  }
  function d(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return (
            e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
    );
  }
  function p(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      i,
      o = r.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(n = o.next()).done; )
        a.push(n.value);
    } catch (e) {
      i = { error: e };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function v(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = v(e[r], t[r]));
    return e;
  }
  var i =
    ((t.prototype.wrapCallback = function (r) {
      var n = this;
      return function (e, t) {
        e ? n.reject(e) : n.resolve(t),
          'function' == typeof r &&
            (n.promise.catch(function () {}), 1 === r.length ? r(e) : r(e, t));
      };
    }),
    t);
  function t() {
    var r = this;
    (this.reject = function () {}),
      (this.resolve = function () {}),
      (this.promise = new Promise(function (e, t) {
        (r.resolve = e), (r.reject = t);
      }));
  }
  var o,
    s,
    c,
    h =
      ((o = Error),
      r((s = u), (c = o)),
      (s.prototype =
        null === c ? Object.create(c) : ((l.prototype = c.prototype), new l())),
      u);
  function l() {
    this.constructor = s;
  }
  function u(e, t) {
    var r = o.call(this, t) || this;
    return (
      (r.code = e),
      (r.name = 'FirebaseError'),
      Object.setPrototypeOf(r, u.prototype),
      Error.captureStackTrace && Error.captureStackTrace(r, f.prototype.create),
      r
    );
  }
  var f =
    ((y.prototype.create = function (e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      for (
        var n,
          i = t[0] || {},
          o = this.service + '/' + e,
          a = this.errors[e],
          s = a
            ? ((n = i),
              a.replace(m, function (e, t) {
                var r = n[t];
                return null != r ? r.toString() : '<' + t + '?>';
              }))
            : 'Error',
          c = this.serviceName + ': ' + s + ' (' + o + ').',
          l = new h(o, c),
          p = 0,
          u = Object.keys(i);
        p < u.length;
        p++
      ) {
        var f = u[p];
        '_' !== f.slice(-1) &&
          (f in l &&
            console.warn(
              'Overwriting FirebaseError base field "' +
                f +
                '" can cause unexpected behavior.',
            ),
          (l[f] = i[f]));
      }
      return l;
    }),
    y);
  function y(e, t, r) {
    (this.service = e), (this.serviceName = t), (this.errors = r);
  }
  var m = /\{\$([^}]+)}/g;
  function g(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function b(e, t) {
    var r = new w(e, t);
    return r.subscribe.bind(r);
  }
  var w =
    ((E.prototype.next = function (t) {
      this.forEachObserver(function (e) {
        e.next(t);
      });
    }),
    (E.prototype.error = function (t) {
      this.forEachObserver(function (e) {
        e.error(t);
      }),
        this.close(t);
    }),
    (E.prototype.complete = function () {
      this.forEachObserver(function (e) {
        e.complete();
      }),
        this.close();
    }),
    (E.prototype.subscribe = function (e, t, r) {
      var n,
        i = this;
      if (void 0 === e && void 0 === t && void 0 === r)
        throw new Error('Missing Observer.');
      void 0 ===
        (n = (function (e, t) {
          if ('object' == typeof e && null !== e)
            for (var r = 0, n = t; r < n.length; r++) {
              var i = n[r];
              if (i in e && 'function' == typeof e[i]) return 1;
            }
        })(e, ['next', 'error', 'complete'])
          ? e
          : { next: e, error: t, complete: r }).next && (n.next = O),
        void 0 === n.error && (n.error = O),
        void 0 === n.complete && (n.complete = O);
      var o = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(function () {
            try {
              i.finalError ? n.error(i.finalError) : n.complete();
            } catch (e) {}
          }),
        this.observers.push(n),
        o
      );
    }),
    (E.prototype.unsubscribeOne = function (e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        --this.observerCount,
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }),
    (E.prototype.forEachObserver = function (e) {
      if (!this.finalized)
        for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }),
    (E.prototype.sendOne = function (e, t) {
      var r = this;
      this.task.then(function () {
        if (void 0 !== r.observers && void 0 !== r.observers[e])
          try {
            t(r.observers[e]);
          } catch (e) {
            'undefined' != typeof console && console.error && console.error(e);
          }
      });
    }),
    (E.prototype.close = function (e) {
      var t = this;
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(function () {
          (t.observers = void 0), (t.onNoObservers = void 0);
        }));
    }),
    E);
  function E(e, t) {
    var r = this;
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(function () {
          e(r);
        })
        .catch(function (e) {
          r.error(e);
        });
  }
  function O() {}
  var _ =
    ((I.prototype.setInstantiationMode = function (e) {
      return (this.instantiationMode = e), this;
    }),
    (I.prototype.setMultipleInstances = function (e) {
      return (this.multipleInstances = e), this;
    }),
    (I.prototype.setServiceProps = function (e) {
      return (this.serviceProps = e), this;
    }),
    I);
  function I(e, t, r) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY');
  }
  var N = '[DEFAULT]',
    L =
      ((S.prototype.get = function (e) {
        void 0 === e && (e = N);
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          var r = new i();
          this.instancesDeferred.set(t, r);
          try {
            var n = this.getOrInitializeService(t);
            n && r.resolve(n);
          } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }),
      (S.prototype.getImmediate = function (e) {
        var t = a({ identifier: N, optional: !1 }, e),
          r = t.identifier,
          n = t.optional,
          i = this.normalizeInstanceIdentifier(r);
        try {
          var o = this.getOrInitializeService(i);
          if (o) return o;
          if (n) return null;
          throw Error('Service ' + this.name + ' is not available');
        } catch (e) {
          if (n) return null;
          throw e;
        }
      }),
      (S.prototype.getComponent = function () {
        return this.component;
      }),
      (S.prototype.setComponent = function (e) {
        var t, r;
        if (e.name !== this.name)
          throw Error(
            'Mismatching Component ' +
              e.name +
              ' for Provider ' +
              this.name +
              '.',
          );
        if (this.component)
          throw Error(
            'Component for ' + this.name + ' has already been provided',
          );
        if ('EAGER' === (this.component = e).instantiationMode)
          try {
            this.getOrInitializeService(N);
          } catch (e) {}
        try {
          for (
            var n = d(this.instancesDeferred.entries()), i = n.next();
            !i.done;
            i = n.next()
          ) {
            var o = p(i.value, 2),
              a = o[0],
              s = o[1],
              c = this.normalizeInstanceIdentifier(a);
            try {
              var l = this.getOrInitializeService(c);
              s.resolve(l);
            } catch (e) {}
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (S.prototype.clearInstance = function (e) {
        void 0 === e && (e = N),
          this.instancesDeferred.delete(e),
          this.instances.delete(e);
      }),
      (S.prototype.delete = function () {
        return e(this, void 0, void 0, function () {
          var t;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return (
                  (t = Array.from(this.instances.values())),
                  [
                    4,
                    Promise.all(
                      t
                        .filter(function (e) {
                          return 'INTERNAL' in e;
                        })
                        .map(function (e) {
                          return e.INTERNAL.delete();
                        }),
                    ),
                  ]
                );
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (S.prototype.isComponentSet = function () {
        return null != this.component;
      }),
      (S.prototype.getOrInitializeService = function (e) {
        var t,
          r = this.instances.get(e);
        return (
          !r &&
            this.component &&
            ((r = this.component.instanceFactory(
              this.container,
              (t = e) === N ? void 0 : t,
            )),
            this.instances.set(e, r)),
          r || null
        );
      }),
      (S.prototype.normalizeInstanceIdentifier = function (e) {
        return !this.component || this.component.multipleInstances ? e : N;
      }),
      S);
  function S(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map());
  }
  var R,
    P =
      ((A.prototype.addComponent = function (e) {
        var t = this.getProvider(e.name);
        if (t.isComponentSet())
          throw new Error(
            'Component ' +
              e.name +
              ' has already been registered with ' +
              this.name,
          );
        t.setComponent(e);
      }),
      (A.prototype.addOrOverwriteComponent = function (e) {
        this.getProvider(e.name).isComponentSet() &&
          this.providers.delete(e.name),
          this.addComponent(e);
      }),
      (A.prototype.getProvider = function (e) {
        if (this.providers.has(e)) return this.providers.get(e);
        var t = new L(e, this);
        return this.providers.set(e, t), t;
      }),
      (A.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      }),
      A);
  function A(e) {
    (this.name = e), (this.providers = new Map());
  }
  function j() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
      e += arguments[t].length;
    var n = Array(e),
      i = 0;
    for (t = 0; t < r; t++)
      for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
        n[i] = o[a];
    return n;
  }
  var C,
    D,
    F = [];
  ((D = C = C || {})[(D.DEBUG = 0)] = 'DEBUG'),
    (D[(D.VERBOSE = 1)] = 'VERBOSE'),
    (D[(D.INFO = 2)] = 'INFO'),
    (D[(D.WARN = 3)] = 'WARN'),
    (D[(D.ERROR = 4)] = 'ERROR'),
    (D[(D.SILENT = 5)] = 'SILENT');
  function k(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
        o = z[t];
      if (!o)
        throw new Error(
          'Attempted to log a message with an invalid logType (value: ' +
            t +
            ')',
        );
      console[o].apply(console, j(['[' + i + ']  ' + e.name + ':'], r));
    }
  }
  var x,
    H = {
      debug: C.DEBUG,
      verbose: C.VERBOSE,
      info: C.INFO,
      warn: C.WARN,
      error: C.ERROR,
      silent: C.SILENT,
    },
    T = C.INFO,
    z =
      (((R = {})[C.DEBUG] = 'log'),
      (R[C.VERBOSE] = 'log'),
      (R[C.INFO] = 'info'),
      (R[C.WARN] = 'warn'),
      (R[C.ERROR] = 'error'),
      R),
    B =
      (Object.defineProperty(V.prototype, 'logLevel', {
        get: function () {
          return this._logLevel;
        },
        set: function (e) {
          if (!(e in C))
            throw new TypeError('Invalid value assigned to `logLevel`');
          this._logLevel = e;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(V.prototype, 'logHandler', {
        get: function () {
          return this._logHandler;
        },
        set: function (e) {
          if ('function' != typeof e)
            throw new TypeError(
              'Value assigned to `logHandler` must be a function',
            );
          this._logHandler = e;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(V.prototype, 'userLogHandler', {
        get: function () {
          return this._userLogHandler;
        },
        set: function (e) {
          this._userLogHandler = e;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (V.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, j([this, C.DEBUG], e)),
          this._logHandler.apply(this, j([this, C.DEBUG], e));
      }),
      (V.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, j([this, C.VERBOSE], e)),
          this._logHandler.apply(this, j([this, C.VERBOSE], e));
      }),
      (V.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, j([this, C.INFO], e)),
          this._logHandler.apply(this, j([this, C.INFO], e));
      }),
      (V.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, j([this, C.WARN], e)),
          this._logHandler.apply(this, j([this, C.WARN], e));
      }),
      (V.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._userLogHandler &&
          this._userLogHandler.apply(this, j([this, C.ERROR], e)),
          this._logHandler.apply(this, j([this, C.ERROR], e));
      }),
      V);
  function V(e) {
    (this.name = e),
      (this._logLevel = T),
      (this._logHandler = k),
      (this._userLogHandler = null),
      F.push(this);
  }
  function U(e) {
    var t = 'string' == typeof e ? H[e] : e;
    F.forEach(function (e) {
      e.logLevel = t;
    });
  }
  var M,
    W =
      (((x = {})['no-app'] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (x['bad-app-name'] = "Illegal App name: '{$appName}"),
      (x['duplicate-app'] = "Firebase App named '{$appName}' already exists"),
      (x['app-deleted'] = "Firebase App named '{$appName}' already deleted"),
      (x['invalid-app-argument'] =
        'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
      (x['invalid-log-argument'] =
        'First argument to `onLog` must be null or a function.'),
      x),
    G = new f('app', 'Firebase', W),
    $ = '@firebase/app',
    Y = '[DEFAULT]',
    K =
      (((M = {})[$] = 'fire-core'),
      (M['@firebase/analytics'] = 'fire-analytics'),
      (M['@firebase/auth'] = 'fire-auth'),
      (M['@firebase/database'] = 'fire-rtdb'),
      (M['@firebase/functions'] = 'fire-fn'),
      (M['@firebase/installations'] = 'fire-iid'),
      (M['@firebase/messaging'] = 'fire-fcm'),
      (M['@firebase/performance'] = 'fire-perf'),
      (M['@firebase/remote-config'] = 'fire-rc'),
      (M['@firebase/storage'] = 'fire-gcs'),
      (M['@firebase/firestore'] = 'fire-fst'),
      (M['fire-js'] = 'fire-js'),
      (M['firebase-wrapper'] = 'fire-js-all'),
      M),
    J = new B('@firebase/app'),
    Z =
      (Object.defineProperty(q.prototype, 'automaticDataCollectionEnabled', {
        get: function () {
          return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
        },
        set: function (e) {
          this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(q.prototype, 'name', {
        get: function () {
          return this.checkDestroyed_(), this.name_;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(q.prototype, 'options', {
        get: function () {
          return this.checkDestroyed_(), this.options_;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (q.prototype.delete = function () {
        var t = this;
        return new Promise(function (e) {
          t.checkDestroyed_(), e();
        })
          .then(function () {
            return (
              t.firebase_.INTERNAL.removeApp(t.name_),
              Promise.all(
                t.container.getProviders().map(function (e) {
                  return e.delete();
                }),
              )
            );
          })
          .then(function () {
            t.isDeleted_ = !0;
          });
      }),
      (q.prototype._getService = function (e, t) {
        return (
          void 0 === t && (t = Y),
          this.checkDestroyed_(),
          this.container.getProvider(e).getImmediate({ identifier: t })
        );
      }),
      (q.prototype._removeServiceInstance = function (e, t) {
        void 0 === t && (t = Y), this.container.getProvider(e).clearInstance(t);
      }),
      (q.prototype._addComponent = function (t) {
        try {
          this.container.addComponent(t);
        } catch (e) {
          J.debug(
            'Component ' +
              t.name +
              ' failed to register with FirebaseApp ' +
              this.name,
            e,
          );
        }
      }),
      (q.prototype._addOrOverwriteComponent = function (e) {
        this.container.addOrOverwriteComponent(e);
      }),
      (q.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_)
          throw G.create('app-deleted', { appName: this.name_ });
      }),
      q);
  function q(e, t, r) {
    var n,
      i,
      o = this;
    (this.firebase_ = r),
      (this.isDeleted_ = !1),
      (this.name_ = t.name),
      (this.automaticDataCollectionEnabled_ =
        t.automaticDataCollectionEnabled || !1),
      (this.options_ = v(void 0, e)),
      (this.container = new P(t.name)),
      this._addComponent(
        new _(
          'app',
          function () {
            return o;
          },
          'PUBLIC',
        ),
      );
    try {
      for (
        var a = d(this.firebase_.INTERNAL.components.values()), s = a.next();
        !s.done;
        s = a.next()
      ) {
        var c = s.value;
        this._addComponent(c);
      }
    } catch (e) {
      n = { error: e };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (n) throw n.error;
      }
    }
  }
  (Z.prototype.name && Z.prototype.options) ||
    Z.prototype.delete ||
    console.log('dc');
  var Q = '7.14.0';
  function X(c) {
    var l = {},
      p = new Map(),
      u = {
        __esModule: !0,
        initializeApp: function (e, t) {
          void 0 === t && (t = {});
          if ('object' != typeof t || null === t) {
            t = { name: t };
          }
          var r = t;
          void 0 === r.name && (r.name = Y);
          var n = r.name;
          if ('string' != typeof n || !n)
            throw G.create('bad-app-name', { appName: String(n) });
          if (g(l, n)) throw G.create('duplicate-app', { appName: n });
          var i = new c(e, r, u);
          return (l[n] = i);
        },
        app: f,
        registerVersion: function (e, t, r) {
          var n,
            i = null !== (n = K[e]) && void 0 !== n ? n : e;
          r && (i += '-' + r);
          var o = i.match(/\s|\//),
            a = t.match(/\s|\//);
          if (o || a) {
            var s = [
              'Unable to register library "' +
                i +
                '" with version "' +
                t +
                '":',
            ];
            return (
              o &&
                s.push(
                  'library name "' +
                    i +
                    '" contains illegal characters (whitespace or "/")',
                ),
              o && a && s.push('and'),
              a &&
                s.push(
                  'version name "' +
                    t +
                    '" contains illegal characters (whitespace or "/")',
                ),
              void J.warn(s.join(' '))
            );
          }
          h(
            new _(
              i + '-version',
              function () {
                return { library: i, version: t };
              },
              'VERSION',
            ),
          );
        },
        setLogLevel: U,
        onLog: function (e, t) {
          if (null !== e && 'function' != typeof e)
            throw G.create('invalid-log-argument', { appName: name });
          !(function (a, t) {
            for (
              var e = function (e) {
                  var o = null;
                  t && t.level && (o = H[t.level]),
                    (e.userLogHandler =
                      null === a
                        ? null
                        : function (e, t) {
                            for (var r = [], n = 2; n < arguments.length; n++)
                              r[n - 2] = arguments[n];
                            var i = r
                              .map(function (e) {
                                if (null == e) return null;
                                if ('string' == typeof e) return e;
                                if (
                                  'number' == typeof e ||
                                  'boolean' == typeof e
                                )
                                  return e.toString();
                                if (e instanceof Error) return e.message;
                                try {
                                  return JSON.stringify(e);
                                } catch (e) {
                                  return null;
                                }
                              })
                              .filter(function (e) {
                                return e;
                              })
                              .join(' ');
                            t >= (null != o ? o : e.logLevel) &&
                              a({
                                level: C[t].toLowerCase(),
                                message: i,
                                args: r,
                                type: e.name,
                              });
                          });
                },
                r = 0,
                n = F;
              r < n.length;
              r++
            ) {
              e(n[r]);
            }
          })(e, t);
        },
        apps: null,
        SDK_VERSION: Q,
        INTERNAL: {
          registerComponent: h,
          removeApp: function (e) {
            delete l[e];
          },
          components: p,
          useAsService: function (e, t) {
            return 'serverAuth' !== t ? t : null;
          },
        },
      };
    function f(e) {
      if (!g(l, (e = e || Y))) throw G.create('no-app', { appName: e });
      return l[e];
    }
    function h(r) {
      var t,
        e,
        n = r.name;
      if (p.has(n))
        return (
          J.debug(
            'There were multiple attempts to register component ' + n + '.',
          ),
          'PUBLIC' === r.type ? u[n] : null
        );
      if ((p.set(n, r), 'PUBLIC' === r.type)) {
        var i = function (e) {
          if ((void 0 === e && (e = f()), 'function' != typeof e[n]))
            throw G.create('invalid-app-argument', { appName: n });
          return e[n]();
        };
        void 0 !== r.serviceProps && v(i, r.serviceProps),
          (u[n] = i),
          (c.prototype[n] = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return this._getService
              .bind(this, n)
              .apply(this, r.multipleInstances ? e : []);
          });
      }
      try {
        for (var o = d(Object.keys(l)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          l[s]._addComponent(r);
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          a && !a.done && (e = o.return) && e.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return 'PUBLIC' === r.type ? u[n] : null;
    }
    return (
      (u.default = u),
      Object.defineProperty(u, 'apps', {
        get: function () {
          return Object.keys(l).map(function (e) {
            return l[e];
          });
        },
      }),
      (f.App = c),
      u
    );
  }
  var ee = (function e() {
      var t = X(Z);
      return (
        (t.INTERNAL = a(a({}, t.INTERNAL), {
          createFirebaseNamespace: e,
          extendNamespace: function (e) {
            v(t, e);
          },
          createSubscribe: b,
          ErrorFactory: f,
          deepExtend: v,
        })),
        t
      );
    })(),
    te =
      ((re.prototype.getPlatformInfoString = function () {
        return this.container
          .getProviders()
          .map(function (e) {
            if (
              'VERSION' !== (null == (t = e.getComponent()) ? void 0 : t.type)
            )
              return null;
            var t,
              r = e.getImmediate();
            return r.library + '/' + r.version;
          })
          .filter(function (e) {
            return e;
          })
          .join(' ');
      }),
      re);
  function re(e) {
    this.container = e;
  }
  if (
    'object' == typeof self &&
    self.self === self &&
    void 0 !== self.firebase
  ) {
    J.warn(
      '\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ',
    );
    var ne = self.firebase.SDK_VERSION;
    ne &&
      0 <= ne.indexOf('LITE') &&
      J.warn(
        '\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ',
      );
  }
  var ie = ee.initializeApp;
  ee.initializeApp = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return (
      (function () {
        try {
          return (
            '[object process]' ===
            Object.prototype.toString.call(global.process)
          );
        } catch (e) {
          return;
        }
      })() &&
        J.warn(
          '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ',
        ),
      ie.apply(void 0, e)
    );
  };
  var oe,
    ae,
    se = ee;
  (oe = se).INTERNAL.registerComponent(
    new _(
      'platform-logger',
      function (e) {
        return new te(e);
      },
      'PRIVATE',
    ),
  ),
    oe.registerVersion($, '0.6.1', ae),
    oe.registerVersion('fire-js', '');
  return se.registerVersion('firebase', '7.14.0', 'app'), se;
});
//# sourceMappingURL=firebase-app.js.map
