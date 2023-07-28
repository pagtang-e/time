(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports, function() {
        "use strict";
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date())
            return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = function(t2) {
          return t2 instanceof _;
        }, S = function t2(e2, n2, r2) {
          var i2;
          if (!e2)
            return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1)
              return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, w = function(t2, e2) {
          if (p(t2))
            return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, O = v;
        O.l = S, O.i = p, O.w = function(t2, e2) {
          return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = S(t2.locale, null, true), this.parse(t2);
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2)
                return /* @__PURE__ */ new Date(NaN);
              if (O.u(e2))
                return /* @__PURE__ */ new Date();
              if (e2 instanceof Date)
                return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.$x = t2.x || {}, this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return O;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = w(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return w(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < w(t2);
          }, m2.$g = function(t2, e2, n2) {
            return O.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), l2 = function(t3, e3) {
              var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (h2) {
              case c:
                return r2 ? l2(1, 0) : l2(31, 11);
              case f:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === f || o2 === c) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else
              l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[O.p(t2)]();
          }, m2.add = function(r2, h2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = O.p(h2), y2 = function(t2) {
              var e2 = w(l2);
              return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === f)
              return this.set(f, this.$M + r2);
            if ($2 === c)
              return this.set(c, this.$y + r2);
            if ($2 === a)
              return y2(1);
            if ($2 === o)
              return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return O.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid())
              return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, c2 = function(t3) {
              return O.s(s2 % 12 || 12, t3, "0");
            }, d2 = n2.meridiem || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            }, $2 = { YY: String(this.$y).slice(-2), YYYY: O.s(this.$y, 4, "0"), M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
            return r2.replace(y, function(t3, e3) {
              return e3 || $2[t3] || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
            return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i] = v2 / t, $2)[y2] || v2, l2 ? g2 : O.a(g2);
          }, m2.daysInMonth = function() {
            return this.endOf(f).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2)
              return this.$L;
            var n2 = this.clone(), r2 = S(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return O.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), T = _.prototype;
        return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
          T[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), w.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, w), t2.$i = true), w;
        }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
          return w(1e3 * t2);
        }, w.en = D[g], w.Ls = D, w.p = {}, w;
      });
    }
  });

  // node_modules/dayjs/plugin/utc.js
  var require_utc = __commonJS({
    "node_modules/dayjs/plugin/utc.js"(exports, module) {
      !function(t, i) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_utc = i();
      }(exports, function() {
        "use strict";
        var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
        return function(s, f, n) {
          var u = f.prototype;
          n.utc = function(t2) {
            var i2 = { date: t2, utc: true, args: arguments };
            return new f(i2);
          }, u.utc = function(i2) {
            var e2 = n(this.toDate(), { locale: this.$L, utc: true });
            return i2 ? e2.add(this.utcOffset(), t) : e2;
          }, u.local = function() {
            return n(this.toDate(), { locale: this.$L, utc: false });
          };
          var o = u.parse;
          u.parse = function(t2) {
            t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
          };
          var r = u.init;
          u.init = function() {
            if (this.$u) {
              var t2 = this.$d;
              this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
            } else
              r.call(this);
          };
          var a = u.utcOffset;
          u.utcOffset = function(s2, f2) {
            var n2 = this.$utils().u;
            if (n2(s2))
              return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
            if ("string" == typeof s2 && (s2 = function(t2) {
              void 0 === t2 && (t2 = "");
              var s3 = t2.match(i);
              if (!s3)
                return null;
              var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
              return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
            }(s2), null === s2))
              return this;
            var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
            if (f2)
              return o2.$offset = u2, o2.$u = 0 === s2, o2;
            if (0 !== s2) {
              var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
              (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
            } else
              o2 = this.utc();
            return o2;
          };
          var h = u.format;
          u.format = function(t2) {
            var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return h.call(this, i2);
          }, u.valueOf = function() {
            var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t2;
          }, u.isUTC = function() {
            return !!this.$u;
          }, u.toISOString = function() {
            return this.toDate().toISOString();
          }, u.toString = function() {
            return this.toDate().toUTCString();
          };
          var l = u.toDate;
          u.toDate = function(t2) {
            return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
          };
          var c = u.diff;
          u.diff = function(t2, i2, e2) {
            if (t2 && this.$u === t2.$u)
              return c.call(this, t2, i2, e2);
            var s2 = this.local(), f2 = n(t2).local();
            return c.call(s2, f2, i2, e2);
          };
        };
      });
    }
  });

  // node_modules/dayjs/plugin/timezone.js
  var require_timezone = __commonJS({
    "node_modules/dayjs/plugin/timezone.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_timezone = e();
      }(exports, function() {
        "use strict";
        var t = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e = {};
        return function(n, i, o) {
          var r, a = function(t2, n2, i2) {
            void 0 === i2 && (i2 = {});
            var o2 = new Date(t2), r2 = function(t3, n3) {
              void 0 === n3 && (n3 = {});
              var i3 = n3.timeZoneName || "short", o3 = t3 + "|" + i3, r3 = e[o3];
              return r3 || (r3 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t3, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: i3 }), e[o3] = r3), r3;
            }(n2, i2);
            return r2.formatToParts(o2);
          }, u = function(e2, n2) {
            for (var i2 = a(e2, n2), r2 = [], u2 = 0; u2 < i2.length; u2 += 1) {
              var f2 = i2[u2], s2 = f2.type, m = f2.value, c = t[s2];
              c >= 0 && (r2[c] = parseInt(m, 10));
            }
            var d = r2[3], l = 24 === d ? 0 : d, v = r2[0] + "-" + r2[1] + "-" + r2[2] + " " + l + ":" + r2[4] + ":" + r2[5] + ":000", h = +e2;
            return (o.utc(v).valueOf() - (h -= h % 1e3)) / 6e4;
          }, f = i.prototype;
          f.tz = function(t2, e2) {
            void 0 === t2 && (t2 = r);
            var n2 = this.utcOffset(), i2 = this.toDate(), a2 = i2.toLocaleString("en-US", { timeZone: t2 }), u2 = Math.round((i2 - new Date(a2)) / 1e3 / 60), f2 = o(a2).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(i2.getTimezoneOffset() / 15) - u2, true);
            if (e2) {
              var s2 = f2.utcOffset();
              f2 = f2.add(n2 - s2, "minute");
            }
            return f2.$x.$timezone = t2, f2;
          }, f.offsetName = function(t2) {
            var e2 = this.$x.$timezone || o.tz.guess(), n2 = a(this.valueOf(), e2, { timeZoneName: t2 }).find(function(t3) {
              return "timezonename" === t3.type.toLowerCase();
            });
            return n2 && n2.value;
          };
          var s = f.startOf;
          f.startOf = function(t2, e2) {
            if (!this.$x || !this.$x.$timezone)
              return s.call(this, t2, e2);
            var n2 = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
            return s.call(n2, t2, e2).tz(this.$x.$timezone, true);
          }, o.tz = function(t2, e2, n2) {
            var i2 = n2 && e2, a2 = n2 || e2 || r, f2 = u(+o(), a2);
            if ("string" != typeof t2)
              return o(t2).tz(a2);
            var s2 = function(t3, e3, n3) {
              var i3 = t3 - 60 * e3 * 1e3, o2 = u(i3, n3);
              if (e3 === o2)
                return [i3, e3];
              var r2 = u(i3 -= 60 * (o2 - e3) * 1e3, n3);
              return o2 === r2 ? [i3, o2] : [t3 - 60 * Math.min(o2, r2) * 1e3, Math.max(o2, r2)];
            }(o.utc(t2, i2).valueOf(), f2, a2), m = s2[0], c = s2[1], d = o(m).utcOffset(c);
            return d.$x.$timezone = a2, d;
          }, o.tz.guess = function() {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
          }, o.tz.setDefault = function(t2) {
            r = t2;
          };
        };
      });
    }
  });

  // node_modules/dayjs/plugin/advancedFormat.js
  var require_advancedFormat = __commonJS({
    "node_modules/dayjs/plugin/advancedFormat.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t();
      }(exports, function() {
        "use strict";
        return function(e, t) {
          var r = t.prototype, n = r.format;
          r.format = function(e2) {
            var t2 = this, r2 = this.$locale();
            if (!this.isValid())
              return n.bind(this)(e2);
            var s = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
              switch (e3) {
                case "Q":
                  return Math.ceil((t2.$M + 1) / 3);
                case "Do":
                  return r2.ordinal(t2.$D);
                case "gggg":
                  return t2.weekYear();
                case "GGGG":
                  return t2.isoWeekYear();
                case "wo":
                  return r2.ordinal(t2.week(), "W");
                case "w":
                case "ww":
                  return s.s(t2.week(), "w" === e3 ? 1 : 2, "0");
                case "W":
                case "WW":
                  return s.s(t2.isoWeek(), "W" === e3 ? 1 : 2, "0");
                case "k":
                case "kk":
                  return s.s(String(0 === t2.$H ? 24 : t2.$H), "k" === e3 ? 1 : 2, "0");
                case "X":
                  return Math.floor(t2.$d.getTime() / 1e3);
                case "x":
                  return t2.$d.getTime();
                case "z":
                  return "[" + t2.offsetName() + "]";
                case "zzz":
                  return "[" + t2.offsetName("long") + "]";
                default:
                  return e3;
              }
            });
            return n.bind(this)(a);
          };
        };
      });
    }
  });

  // node_modules/micromodal/dist/micromodal.js
  var require_micromodal = __commonJS({
    "node_modules/micromodal/dist/micromodal.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).MicroModal = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2) {
          for (var o2 = 0; o2 < t2.length; o2++) {
            var n2 = t2[o2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
          }
        }
        function t(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return o(e3);
          }(e2) || function(e3) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3))
              return Array.from(e3);
          }(e2) || function(e3, t2) {
            if (!e3)
              return;
            if ("string" == typeof e3)
              return o(e3, t2);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
            if ("Map" === n2 || "Set" === n2)
              return Array.from(e3);
            if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return o(e3, t2);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function o(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var o2 = 0, n2 = new Array(t2); o2 < t2; o2++)
            n2[o2] = e2[o2];
          return n2;
        }
        var n, i, a, r, s, l = (n = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], i = function() {
          function o2(e2) {
            var n2 = e2.targetModal, i3 = e2.triggers, a3 = void 0 === i3 ? [] : i3, r3 = e2.onShow, s2 = void 0 === r3 ? function() {
            } : r3, l2 = e2.onClose, c = void 0 === l2 ? function() {
            } : l2, d = e2.openTrigger, u = void 0 === d ? "data-micromodal-trigger" : d, f = e2.closeTrigger, h = void 0 === f ? "data-micromodal-close" : f, v = e2.openClass, g = void 0 === v ? "is-open" : v, m = e2.disableScroll, b = void 0 !== m && m, y = e2.disableFocus, p = void 0 !== y && y, w = e2.awaitCloseAnimation, E = void 0 !== w && w, k = e2.awaitOpenAnimation, M = void 0 !== k && k, A = e2.debugMode, C = void 0 !== A && A;
            !function(e3, t2) {
              if (!(e3 instanceof t2))
                throw new TypeError("Cannot call a class as a function");
            }(this, o2), this.modal = document.getElementById(n2), this.config = { debugMode: C, disableScroll: b, openTrigger: u, closeTrigger: h, openClass: g, onShow: s2, onClose: c, awaitCloseAnimation: E, awaitOpenAnimation: M, disableFocus: p }, a3.length > 0 && this.registerTriggers.apply(this, t(a3)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
          }
          var i2, a2, r2;
          return i2 = o2, (a2 = [{ key: "registerTriggers", value: function() {
            for (var e2 = this, t2 = arguments.length, o3 = new Array(t2), n2 = 0; n2 < t2; n2++)
              o3[n2] = arguments[n2];
            o3.filter(Boolean).forEach(function(t3) {
              t3.addEventListener("click", function(t4) {
                return e2.showModal(t4);
              });
            });
          } }, { key: "showModal", value: function() {
            var e2 = this, t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
              var o3 = function t3() {
                e2.modal.removeEventListener("animationend", t3, false), e2.setFocusToFirstNode();
              };
              this.modal.addEventListener("animationend", o3, false);
            } else
              this.setFocusToFirstNode();
            this.config.onShow(this.modal, this.activeElement, t2);
          } }, { key: "closeModal", value: function() {
            var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t2 = this.modal;
            if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e2), this.config.awaitCloseAnimation) {
              var o3 = this.config.openClass;
              this.modal.addEventListener("animationend", function e3() {
                t2.classList.remove(o3), t2.removeEventListener("animationend", e3, false);
              }, false);
            } else
              t2.classList.remove(this.config.openClass);
          } }, { key: "closeModalById", value: function(e2) {
            this.modal = document.getElementById(e2), this.modal && this.closeModal();
          } }, { key: "scrollBehaviour", value: function(e2) {
            if (this.config.disableScroll) {
              var t2 = document.querySelector("body");
              switch (e2) {
                case "enable":
                  Object.assign(t2.style, { overflow: "" });
                  break;
                case "disable":
                  Object.assign(t2.style, { overflow: "hidden" });
              }
            }
          } }, { key: "addEventListeners", value: function() {
            this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
          } }, { key: "removeEventListeners", value: function() {
            this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
          } }, { key: "onClick", value: function(e2) {
            (e2.target.hasAttribute(this.config.closeTrigger) || e2.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e2.preventDefault(), e2.stopPropagation(), this.closeModal(e2));
          } }, { key: "onKeydown", value: function(e2) {
            27 === e2.keyCode && this.closeModal(e2), 9 === e2.keyCode && this.retainFocus(e2);
          } }, { key: "getFocusableNodes", value: function() {
            var e2 = this.modal.querySelectorAll(n);
            return Array.apply(void 0, t(e2));
          } }, { key: "setFocusToFirstNode", value: function() {
            var e2 = this;
            if (!this.config.disableFocus) {
              var t2 = this.getFocusableNodes();
              if (0 !== t2.length) {
                var o3 = t2.filter(function(t3) {
                  return !t3.hasAttribute(e2.config.closeTrigger);
                });
                o3.length > 0 && o3[0].focus(), 0 === o3.length && t2[0].focus();
              }
            }
          } }, { key: "retainFocus", value: function(e2) {
            var t2 = this.getFocusableNodes();
            if (0 !== t2.length)
              if (t2 = t2.filter(function(e3) {
                return null !== e3.offsetParent;
              }), this.modal.contains(document.activeElement)) {
                var o3 = t2.indexOf(document.activeElement);
                e2.shiftKey && 0 === o3 && (t2[t2.length - 1].focus(), e2.preventDefault()), !e2.shiftKey && t2.length > 0 && o3 === t2.length - 1 && (t2[0].focus(), e2.preventDefault());
              } else
                t2[0].focus();
          } }]) && e(i2.prototype, a2), r2 && e(i2, r2), o2;
        }(), a = null, r = function(e2) {
          if (!document.getElementById(e2))
            return console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(e2, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e2, '"></div>')), false;
        }, s = function(e2, t2) {
          if (function(e3) {
            e3.length <= 0 && (console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
          }(e2), !t2)
            return true;
          for (var o2 in t2)
            r(o2);
          return true;
        }, { init: function(e2) {
          var o2 = Object.assign({}, { openTrigger: "data-micromodal-trigger" }, e2), n2 = t(document.querySelectorAll("[".concat(o2.openTrigger, "]"))), r2 = function(e3, t2) {
            var o3 = [];
            return e3.forEach(function(e4) {
              var n3 = e4.attributes[t2].value;
              void 0 === o3[n3] && (o3[n3] = []), o3[n3].push(e4);
            }), o3;
          }(n2, o2.openTrigger);
          if (true !== o2.debugMode || false !== s(n2, r2))
            for (var l2 in r2) {
              var c = r2[l2];
              o2.targetModal = l2, o2.triggers = t(c), a = new i(o2);
            }
        }, show: function(e2, t2) {
          var o2 = t2 || {};
          o2.targetModal = e2, true === o2.debugMode && false === r(e2) || (a && a.removeEventListeners(), (a = new i(o2)).showModal());
        }, close: function(e2) {
          e2 ? a.closeModalById(e2) : a.closeModal();
        } });
        return "undefined" != typeof window && (window.MicroModal = l), l;
      });
    }
  });

  // js/digitalClock.mjs
  var dayjs = require_dayjs_min();
  var utc = require_utc();
  var timezone = require_timezone();
  var advancedFormat = require_advancedFormat();
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(advancedFormat);
  var timer = document.querySelector("H1");
  var timezoneLocal = document.querySelector(".TimeZone");
  var Date2 = document.querySelector("h2");
  var startTimeLocalInterval;
  var secondRotation;
  var minuteRotation;
  var HourRotation;
  var minuteHand = document.querySelector(".hand.minute");
  var secondHand = document.querySelector(".hand.second");
  var hourHand = document.querySelector(".hand.hour");
  function getLocalTimeDigital() {
    startTimeLocalInterval = setInterval(startTimeLocalDigital, 1e3);
    timezoneLocal.innerText = Timezone;
    startTimeLocalDigital();
  }
  function startTimeLocalDigital() {
    timer.innerText = dayjs().tz(Timezone).format("HH:mm");
    Date2.innerText = dayjs().tz(Timezone).format("dddd, Do of MMMM YYYY");
  }
  function getLocalTimeAnalog() {
    startTimeLocalAnalog();
    startTimeLocalInterval = setInterval(startTimeLocalAnalog, 1e3);
    timezoneLocal.innerText = Timezone;
  }
  function startTimeLocalAnalog() {
    secondRotation = 360 / 60 * dayjs().tz(Timezone).second();
    minuteRotation = 360 / 60 * dayjs().tz(Timezone).minute();
    HourRotation = 360 / 12 * (dayjs().tz(Timezone).hour() % 12) + 30 * dayjs().tz(Timezone).minute() / 60;
    HourRotation = Math.round(HourRotation * 10) / 10;
    hourHand.style.rotate = HourRotation + "deg";
    minuteHand.style.rotate = minuteRotation + "deg";
    secondHand.style.rotate = secondRotation + "deg";
  }

  // js/timezone.mjs
  var dayjs2 = require_dayjs_min();
  var utc2 = require_utc();
  var timezone2 = require_timezone();
  dayjs2.extend(utc2);
  dayjs2.extend(timezone2);
  var Timezone = dayjs2.tz.guess();
  var Longitude;
  var Latitude;
  var sunriseTime;
  var sunsetTime;
  var sunriseTimeElement = document.getElementById("sunriseTime");
  var sunsetTimeElement = document.getElementById("sunsetTime");
  var city = document.getElementById("city");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      Latitude = position.coords.latitude;
      Longitude = position.coords.longitude;
      getSunsetAndSunrise();
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${Latitude},${Longitude}&key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE&result_type=political|country`).then((res) => res.json()).then((data) => console.log(data));
    }
  );
  function getSunsetAndSunrise() {
    fetch(`https://api.sunrise-sunset.org/json?lat=${Latitude}&lng=${Longitude}&formatted=0`).then((res) => res.json()).then((data) => getTimes(data));
    function getTimes(data) {
      sunriseTime = dayjs2(data.results.sunrise).tz(Timezone).format("hh:mm");
      sunsetTime = dayjs2(data.results.sunset).tz(Timezone).format("hh:mm");
      sunriseTimeElement.innerText = sunriseTime;
      sunsetTimeElement.innerText = sunsetTime;
    }
  }
  function getTimezone() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city.value} &key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`).then((res) => res.json()).then((data) => GetCoordinates(data));
    function GetCoordinates(data) {
      Longitude = data.results[0].geometry.location.lng;
      Latitude = data.results[0].geometry.location.lat;
      getTimezone2();
    }
    function getTimezone2() {
      fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${Latitude + "," + Longitude}&timestamp=${dayjs2().unix()}&key=AIzaSyDu8Aze6F6zs1Vgjco6PmgzhWhOyS0rDnE`).then((res) => res.json()).then((data) => setNewTimezone(data));
      function setNewTimezone(data) {
        Timezone = data.timeZoneId;
        clearInterval(startTimeLocalInterval);
        if (clockType.checked == true) {
          getLocalTimeAnalog();
        } else {
          getLocalTimeDigital();
        }
        console.log(Latitude);
        console.log(Longitude);
        getSunsetAndSunrise();
      }
    }
  }

  // js/index.mjs
  var dayjs3 = require_dayjs_min();
  var utc3 = require_utc();
  var timezone3 = require_timezone();
  var MicroModal = require_micromodal();
  var MicroModalSubmit1 = document.getElementById("submit-Modal-1");
  var hr12FormatToggle = document.getElementById("hr12Format");
  var sunriseTime2 = document.querySelector("#sunriseTime");
  dayjs3.extend(utc3);
  dayjs3.extend(timezone3);
  MicroModal.init();
  var clockType = document.getElementById("clockType");
  getLocalTimeDigital();
  MicroModalSubmit1.addEventListener("click", getTimezone);
  clockType.addEventListener("click", () => {
    if (clockType.checked == true) {
      getLocalTimeAnalog();
      document.querySelector(".digital").style.display = "none";
      document.querySelector(".analog").style.display = "block";
      sunriseTime2.classList.add("analogSunTime");
      document.querySelector("#sunsetTime").classList.add("analogSunTime");
    } else {
      document.querySelector(".digital").style.display = "block";
      document.querySelector(".analog").style.display = "none";
      sunriseTime2.classList.remove("analogSunTime");
      document.querySelector("#sunsetTime").classList.remove("analogSunTime");
    }
  });
})();
