/* eslint-disable */
class e extends Error {} class r extends e {constructor(e) { super(`Invalid DateTime: ${e.toMessage()}`); }} class n extends e {constructor(e) { super(`Invalid Interval: ${e.toMessage()}`); }} class s extends e {constructor(e) { super(`Invalid Duration: ${e.toMessage()}`); }} class N extends e {} class i extends e {constructor(e) { super(`Invalid unit ${e}`); }} class o extends e {} class a extends e {constructor() { super('Zone is an abstract class'); }} var t = 'numeric'; var u = 'short'; var l = 'long'; const c = { year: t, month: t, day: t }; const h = { year: t, month: u, day: t }; const d = {
  year: t, month: u, day: t, weekday: u,
}; const m = { year: t, month: l, day: t }; const f = {
  year: t, month: l, day: t, weekday: l,
}; const y = { hour: t, minute: t }; const g = { hour: t, minute: t, second: t }; const w = {
  hour: t, minute: t, second: t, timeZoneName: u,
}; const v = {
  hour: t, minute: t, second: t, timeZoneName: l,
}; const p = { hour: t, minute: t, hourCycle: 'h23' }; const T = {
  hour: t, minute: t, second: t, hourCycle: 'h23',
}; const S = {
  hour: t, minute: t, second: t, hourCycle: 'h23', timeZoneName: u,
}; const O = {
  hour: t, minute: t, second: t, hourCycle: 'h23', timeZoneName: l,
}; const b = {
  year: t, month: t, day: t, hour: t, minute: t,
}; const k = {
  year: t, month: t, day: t, hour: t, minute: t, second: t,
}; const M = {
  year: t, month: u, day: t, hour: t, minute: t,
}; const D = {
  year: t, month: u, day: t, hour: t, minute: t, second: t,
}; const E = {
  year: t, month: u, day: t, weekday: u, hour: t, minute: t,
}; const V = {
  year: t, month: l, day: t, hour: t, minute: t, timeZoneName: u,
}; const I = {
  year: t, month: l, day: t, hour: t, minute: t, second: t, timeZoneName: u,
}; const x = {
  year: t, month: l, day: t, weekday: l, hour: t, minute: t, timeZoneName: l,
}; const C = {
  year: t, month: l, day: t, weekday: l, hour: t, minute: t, second: t, timeZoneName: l,
}; function F(e) { return void 0 === e; } function Z(e) { return typeof e === 'number'; } function L(e) { return typeof e === 'number' && e % 1 == 0; } function z() { try { return typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat; } catch (e) { return !1; } } function q(e, r, n) { if (e.length !== 0) return e.reduce((e, t) => { t = [r(t), t]; return e && n(e[0], t[0]) === e[0] ? e : t; }, null)[1]; } function A(e, t) { return Object.prototype.hasOwnProperty.call(e, t); } function j(e, t, r) { return L(e) && t <= e && e <= r; } function _(e, t = 2) { let r; return r = e < 0 ? `-${(`${-e}`).padStart(t, '0')}` : (`${e}`).padStart(t, '0'), r; } function U(e) { if (!F(e) && e !== null && e !== '') return parseInt(e, 10); } function $(e) { if (!F(e) && e !== null && e !== '') return parseFloat(e); } function H(e) { if (!F(e) && e !== null && e !== '') { e = 1e3 * parseFloat(`0.${e}`); return Math.floor(e); } } function W(e, t, r = !1) { const n = 10 ** t; const s = r ? Math.trunc : Math.round; return s(e * n) / n; } function R(e) { return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0); } function J(e) { return R(e) ? 366 : 365; } function Y(e, t) { let r; var n = (r = t - 1) - (n = 12) * Math.floor(r / n) + 1; return n == 2 ? R(e + (t - n) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1]; } function P(e) { let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond); return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(t.getUTCFullYear() - 1900)), +t; } function G(e) { const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7; var e = e - 1; var e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7; return t == 4 || e == 3 ? 53 : 52; } function B(e) { return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e; } function Q(e, t, r, n = null) {
  const s = new Date(e); const i = {
    hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
  }; n && (i.timeZone = n); t = { timeZoneName: t, ...i }, t = new Intl.DateTimeFormat(r, t).formatToParts(s).find((e) => e.type.toLowerCase() === 'timezonename'); return t ? t.value : null;
} function K(e, t) { let r = parseInt(e, 10); Number.isNaN(r) && (r = 0); t = parseInt(t, 10) || 0, t = r < 0 || Object.is(r, -0) ? -t : t; return 60 * r + t; } function X(e) { const t = Number(e); if (typeof e === 'boolean' || e === '' || Number.isNaN(t)) throw new o(`Invalid unit value ${e}`); return t; } function ee(e, t) { const r = {}; for (const s in e) { var n; !A(e, s) || (n = e[s]) != null && (r[t(s)] = X(n)); } return r; } function te(e, t) { const r = Math.trunc(Math.abs(e / 60)); const n = Math.trunc(Math.abs(e % 60)); const s = e >= 0 ? '+' : '-'; switch (t) { case 'short': return `${s + _(r, 2)}:${_(n, 2)}`; case 'narrow': return s + r + (n > 0 ? `:${n}` : ''); case 'techie': return s + _(r, 2) + _(n, 2); default: throw new RangeError(`Value format ${t} is out of range for property format`); } } function re(e) { return r = e, ['hour', 'minute', 'second', 'millisecond'].reduce((e, t) => (e[t] = r[t], e), {}); let r; } var ne = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/; const se = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; const ie = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; const ae = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']; function oe(e) { switch (e) { case 'narrow': return [...ae]; case 'short': return [...ie]; case 'long': return [...se]; case 'numeric': return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']; case '2-digit': return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']; default: return null; } } const ue = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; const le = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; const ce = ['M', 'T', 'W', 'T', 'F', 'S', 'S']; function he(e) { switch (e) { case 'narrow': return [...ce]; case 'short': return [...le]; case 'long': return [...ue]; case 'numeric': return ['1', '2', '3', '4', '5', '6', '7']; default: return null; } } const de = ['AM', 'PM']; const me = ['Before Christ', 'Anno Domini']; const fe = ['BC', 'AD']; const ye = ['B', 'A']; function ge(e) { switch (e) { case 'narrow': return [...ye]; case 'short': return [...fe]; case 'long': return [...me]; default: return null; } } function we(e, t) { let r = ''; for (const n of e)n.literal ? r += n.val : r += t(n.val); return r; } const ve = {
  D: c, DD: h, DDD: m, DDDD: f, t: y, tt: g, ttt: w, tttt: v, T: p, TT: T, TTT: S, TTTT: O, f: b, ff: M, fff: V, ffff: x, F: k, FF: D, FFF: I, FFFF: C,
}; class pe {
  static create(e, t = {}) { return new pe(e, t); }

  static parseFormat(t) { let r = null; let n = ''; let s = !1; const i = []; for (let e = 0; e < t.length; e++) { const a = t.charAt(e); a === "'" ? (n.length > 0 && i.push({ literal: s, val: n }), r = null, n = '', s = !s) : s || a === r ? n += a : (n.length > 0 && i.push({ literal: !1, val: n }), n = a, r = a); } return n.length > 0 && i.push({ literal: s, val: n }), i; }

  static macroTokenToFormatOpts(e) { return ve[e]; }

  constructor(e, t) { this.opts = t, this.loc = e, this.systemLoc = null; }

  formatWithSystemDefault(e, t) { this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()); const r = this.systemLoc.dtFormatter(e, { ...this.opts, ...t }); return r.format(); }

  formatDateTime(e, t = {}) { const r = this.loc.dtFormatter(e, { ...this.opts, ...t }); return r.format(); }

  formatDateTimeParts(e, t = {}) { const r = this.loc.dtFormatter(e, { ...this.opts, ...t }); return r.formatToParts(); }

  resolvedOptions(e, t = {}) { const r = this.loc.dtFormatter(e, { ...this.opts, ...t }); return r.resolvedOptions(); }

  num(e, t = 0) { if (this.opts.forceSimple) return _(e, t); const r = { ...this.opts }; return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e); }

  formatDateTimeFromString(r, e) { const n = this.loc.listingMode() === 'en'; const t = this.loc.outputCalendar && this.loc.outputCalendar !== 'gregory'; const s = (e, t) => this.loc.extract(r, e, t); const i = (e) => (r.isOffsetFixed && r.offset === 0 && e.allowZ ? 'Z' : r.isValid ? r.zone.formatOffset(r.ts, e.format) : ''); const a = () => (n ? (function (e) { return de[e.hour < 12 ? 0 : 1]; }(r)) : s({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod')); const o = (e, t) => (n ? (function (e, t) { return oe(t)[e.month - 1]; }(r, e)) : s(t ? { month: e } : { month: e, day: 'numeric' }, 'month')); const u = (e, t) => (n ? (function (e, t) { return he(t)[e.weekday - 1]; }(r, e)) : s(t ? { weekday: e } : { weekday: e, month: 'long', day: 'numeric' }, 'weekday')); const l = (e) => { const t = pe.macroTokenToFormatOpts(e); return t ? this.formatWithSystemDefault(r, t) : e; }; const c = (e) => (n ? (function (e, t) { return ge(t)[e.year < 0 ? 0 : 1]; }(r, e)) : s({ era: e }, 'era')); return we(pe.parseFormat(e), (e) => { switch (e) { case 'S': return this.num(r.millisecond); case 'u': case 'SSS': return this.num(r.millisecond, 3); case 's': return this.num(r.second); case 'ss': return this.num(r.second, 2); case 'uu': return this.num(Math.floor(r.millisecond / 10), 2); case 'uuu': return this.num(Math.floor(r.millisecond / 100)); case 'm': return this.num(r.minute); case 'mm': return this.num(r.minute, 2); case 'h': return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12); case 'hh': return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2); case 'H': return this.num(r.hour); case 'HH': return this.num(r.hour, 2); case 'Z': return i({ format: 'narrow', allowZ: this.opts.allowZ }); case 'ZZ': return i({ format: 'short', allowZ: this.opts.allowZ }); case 'ZZZ': return i({ format: 'techie', allowZ: this.opts.allowZ }); case 'ZZZZ': return r.zone.offsetName(r.ts, { format: 'short', locale: this.loc.locale }); case 'ZZZZZ': return r.zone.offsetName(r.ts, { format: 'long', locale: this.loc.locale }); case 'z': return r.zoneName; case 'a': return a(); case 'd': return t ? s({ day: 'numeric' }, 'day') : this.num(r.day); case 'dd': return t ? s({ day: '2-digit' }, 'day') : this.num(r.day, 2); case 'c': return this.num(r.weekday); case 'ccc': return u('short', !0); case 'cccc': return u('long', !0); case 'ccccc': return u('narrow', !0); case 'E': return this.num(r.weekday); case 'EEE': return u('short', !1); case 'EEEE': return u('long', !1); case 'EEEEE': return u('narrow', !1); case 'L': return t ? s({ month: 'numeric', day: 'numeric' }, 'month') : this.num(r.month); case 'LL': return t ? s({ month: '2-digit', day: 'numeric' }, 'month') : this.num(r.month, 2); case 'LLL': return o('short', !0); case 'LLLL': return o('long', !0); case 'LLLLL': return o('narrow', !0); case 'M': return t ? s({ month: 'numeric' }, 'month') : this.num(r.month); case 'MM': return t ? s({ month: '2-digit' }, 'month') : this.num(r.month, 2); case 'MMM': return o('short', !1); case 'MMMM': return o('long', !1); case 'MMMMM': return o('narrow', !1); case 'y': return t ? s({ year: 'numeric' }, 'year') : this.num(r.year); case 'yy': return t ? s({ year: '2-digit' }, 'year') : this.num(r.year.toString().slice(-2), 2); case 'yyyy': return t ? s({ year: 'numeric' }, 'year') : this.num(r.year, 4); case 'yyyyyy': return t ? s({ year: 'numeric' }, 'year') : this.num(r.year, 6); case 'G': return c('short'); case 'GG': return c('long'); case 'GGGGG': return c('narrow'); case 'kk': return this.num(r.weekYear.toString().slice(-2), 2); case 'kkkk': return this.num(r.weekYear, 4); case 'W': return this.num(r.weekNumber); case 'WW': return this.num(r.weekNumber, 2); case 'o': return this.num(r.ordinal); case 'ooo': return this.num(r.ordinal, 3); case 'q': return this.num(r.quarter); case 'qq': return this.num(r.quarter, 2); case 'X': return this.num(Math.floor(r.ts / 1e3)); case 'x': return this.num(r.ts); default: return l(e); } }); }

  formatDurationFromString(e, t) { const r = (e) => { switch (e[0]) { case 'S': return 'millisecond'; case 's': return 'second'; case 'm': return 'minute'; case 'h': return 'hour'; case 'd': return 'day'; case 'w': return 'week'; case 'M': return 'month'; case 'y': return 'year'; default: return null; } }; const n = pe.parseFormat(t); const s = n.reduce((e, { literal: t, val: r }) => (t ? e : e.concat(r)), []); const i = e.shiftTo(...s.map(r).filter((e) => e)); return we(n, (a = i, (e) => { const t = r(e); return t ? this.num(a.get(t), e.length) : e; })); let a; }
} class Te {
  constructor(e, t) { this.reason = e, this.explanation = t; }

  toMessage() { return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason; }
} class Se {
  get type() { throw new a(); }

  get name() { throw new a(); }

  get ianaName() { return this.name; }

  get isUniversal() { throw new a(); }

  offsetName(e, t) { throw new a(); }

  formatOffset(e, t) { throw new a(); }

  offset(e) { throw new a(); }

  equals(e) { throw new a(); }

  get isValid() { throw new a(); }
}let Oe = null; class be extends Se {
  static get instance() { return Oe === null && (Oe = new be()), Oe; }

  get type() { return 'system'; }

  get name() { return (new Intl.DateTimeFormat()).resolvedOptions().timeZone; }

  get isUniversal() { return !1; }

  offsetName(e, { format: t, locale: r }) { return Q(e, t, r); }

  formatOffset(e, t) { return te(this.offset(e), t); }

  offset(e) { return -new Date(e).getTimezoneOffset(); }

  equals(e) { return e.type === 'system'; }

  get isValid() { return !0; }
}let ke = {}; const Me = {
  year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6,
}; let Ne = {}; class De extends Se {
  static create(e) { return Ne[e] || (Ne[e] = new De(e)), Ne[e]; }

  static resetCache() { Ne = {}, ke = {}; }

  static isValidSpecifier(e) { return this.isValidZone(e); }

  static isValidZone(e) { if (!e) return !1; try { return new Intl.DateTimeFormat('en-US', { timeZone: e }).format(), !0; } catch (e) { return !1; } }

  constructor(e) { super(), this.zoneName = e, this.valid = De.isValidZone(e); }

  get type() { return 'iana'; }

  get name() { return this.zoneName; }

  get isUniversal() { return !1; }

  offsetName(e, { format: t, locale: r }) { return Q(e, t, r, this.name); }

  formatOffset(e, t) { return te(this.offset(e), t); }

  offset(e) {
    let t = new Date(e); if (isNaN(t)) return NaN; e = this.name, ke[e] || (ke[e] = new Intl.DateTimeFormat('en-US', {
      hour12: !1, timeZone: e, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', era: 'short',
    })), e = ke[e]; let[r, n, s, i, a, o, u] = (e.formatToParts ? function (e, t) { const r = e.formatToParts(t); const n = []; for (let e = 0; e < r.length; e++) { const { type: s, value: i } = r[e]; const a = Me[s]; s === 'era' ? n[a] = i : F(a) || (n[a] = parseInt(i, 10)); } return n; } : function (e, t) { var r = e.format(t).replace(/\u200E/g, ''); var [, n, s, i, a, e, t, r] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r); return [i, n, s, a, e, t, r]; })(e, t); i === 'BC' && (r = 1 - Math.abs(r)); e = +t, t = e % 1e3; return (P({
      year: r, month: n, day: s, hour: a === 24 ? 0 : a, minute: o, second: u, millisecond: 0,
    }) - (e -= t >= 0 ? t : 1e3 + t)) / 6e4;
  }

  equals(e) { return e.type === 'iana' && e.name === this.name; }

  get isValid() { return this.valid; }
}let Ee = null; class Ve extends Se {
  static get utcInstance() { return Ee === null && (Ee = new Ve(0)), Ee; }

  static instance(e) { return e === 0 ? Ve.utcInstance : new Ve(e); }

  static parseSpecifier(e) { if (e) { e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i); if (e) return new Ve(K(e[1], e[2])); } return null; }

  constructor(e) { super(), this.fixed = e; }

  get type() { return 'fixed'; }

  get name() { return this.fixed === 0 ? 'UTC' : `UTC${te(this.fixed, 'narrow')}`; }

  get ianaName() { return this.fixed === 0 ? 'Etc/UTC' : `Etc/GMT${te(-this.fixed, 'narrow')}`; }

  offsetName() { return this.name; }

  formatOffset(e, t) { return te(this.fixed, t); }

  get isUniversal() { return !0; }

  offset() { return this.fixed; }

  equals(e) { return e.type === 'fixed' && e.fixed === this.fixed; }

  get isValid() { return !0; }
} class Ie extends Se {
  constructor(e) { super(), this.zoneName = e; }

  get type() { return 'invalid'; }

  get name() { return this.zoneName; }

  get isUniversal() { return !1; }

  offsetName() { return null; }

  formatOffset() { return ''; }

  offset() { return NaN; }

  equals() { return !1; }

  get isValid() { return !1; }
} function xe(e, t) { if (F(e) || e === null) return t; if (e instanceof Se) return e; if (typeof e !== 'string') return Z(e) ? Ve.instance(e) : typeof e === 'object' && e.offset && typeof e.offset === 'number' ? e : new Ie(e); const r = e.toLowerCase(); return r === 'local' || r === 'system' ? t : r === 'utc' || r === 'gmt' ? Ve.utcInstance : Ve.parseSpecifier(r) || De.create(e); }let Ce = () => Date.now(); let Fe = 'system'; let Ze = null; let Le = null; let ze = null; let qe; class Ae {
  static get now() { return Ce; }

  static set now(e) { Ce = e; }

  static set defaultZone(e) { Fe = e; }

  static get defaultZone() { return xe(Fe, be.instance); }

  static get defaultLocale() { return Ze; }

  static set defaultLocale(e) { Ze = e; }

  static get defaultNumberingSystem() { return Le; }

  static set defaultNumberingSystem(e) { Le = e; }

  static get defaultOutputCalendar() { return ze; }

  static set defaultOutputCalendar(e) { ze = e; }

  static get throwOnInvalid() { return qe; }

  static set throwOnInvalid(e) { qe = e; }

  static resetCaches() { Ge.resetCache(), De.resetCache(); }
} const je = {}; let _e = {}; function Ue(e, t = {}) { const r = JSON.stringify([e, t]); let n = _e[r]; return n || (n = new Intl.DateTimeFormat(e, t), _e[r] = n), n; }let $e = {}; let He = {}; let We = null; function Re(e, t, r, n, s) { r = e.listingMode(r); return r === 'error' ? null : (r === 'en' ? n : s)(t); } class Je {
  constructor(e, t, r) { this.padTo = r.padTo || 0, this.floor = r.floor || !1; const { padTo: n, floor: s, ...i } = r; if (!t || Object.keys(i).length > 0) { const a = { useGrouping: !1, ...r }; r.padTo > 0 && (a.minimumIntegerDigits = r.padTo), this.inf = (function (e, t = {}) { const r = JSON.stringify([e, t]); let n = $e[r]; return n || (n = new Intl.NumberFormat(e, t), $e[r] = n), n; }(e, a)); } }

  format(e) { if (this.inf) { const t = this.floor ? Math.floor(e) : e; return this.inf.format(t); } return _(this.floor ? Math.floor(e) : W(e, 3), this.padTo); }
} class Ye {
  constructor(e, t, r) { this.opts = r; let n; let s; e.zone.isUniversal ? (s = (s = e.offset / 60 * -1) >= 0 ? `Etc/GMT+${s}` : `Etc/GMT${s}`, e.offset !== 0 && De.create(s).valid ? (n = s, this.dt = e) : (n = 'UTC', r.timeZoneName ? this.dt = e : this.dt = e.offset === 0 ? e : Hr.fromMillis(e.ts + 60 * e.offset * 1e3))) : e.zone.type === 'system' ? this.dt = e : (this.dt = e, n = e.zone.name); const i = { ...this.opts }; n && (i.timeZone = n), this.dtf = Ue(t, i); }

  format() { return this.dtf.format(this.dt.toJSDate()); }

  formatToParts() { return this.dtf.formatToParts(this.dt.toJSDate()); }

  resolvedOptions() { return this.dtf.resolvedOptions(); }
} class Pe {
  constructor(e, t, r) { this.opts = { style: 'long', ...r }, !t && z() && (this.rtf = (function (e, t = {}) { const { base: r, ...n } = t; const s = JSON.stringify([e, n]); let i = He[s]; return i || (i = new Intl.RelativeTimeFormat(e, t), He[s] = i), i; }(e, r))); }

  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : (function (e, t, r = 'always', n) {
      const s = {
        years: ['year', 'yr.'], quarters: ['quarter', 'qtr.'], months: ['month', 'mo.'], weeks: ['week', 'wk.'], days: ['day', 'day', 'days'], hours: ['hour', 'hr.'], minutes: ['minute', 'min.'], seconds: ['second', 'sec.'],
      }; var i = ['hours', 'minutes', 'seconds'].indexOf(e) === -1; if (r === 'auto' && i) { const a = e === 'days'; switch (t) { case 1: return a ? 'tomorrow' : `next ${s[e][0]}`; case -1: return a ? 'yesterday' : `last ${s[e][0]}`; case 0: return a ? 'today' : `this ${s[e][0]}`; } } const o = Object.is(t, -0) || t < 0; var i = (r = Math.abs(t)) === 1; var t = s[e]; var i = n ? !i && t[2] || t[1] : i ? s[e][0] : e; return o ? `${r} ${i} ago` : `in ${r} ${i}`;
    }(t, e, this.opts.numeric, this.opts.style !== 'long'));
  }

  formatToParts(e, t) { return this.rtf ? this.rtf.formatToParts(e, t) : []; }
} class Ge {
  static fromOpts(e) { return Ge.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN); }

  static create(e, t, r, n = !1) { e = e || Ae.defaultLocale, n = e || (n ? 'en-US' : We || (We = (new Intl.DateTimeFormat()).resolvedOptions().locale, We)), t = t || Ae.defaultNumberingSystem, r = r || Ae.defaultOutputCalendar; return new Ge(n, t, r, e); }

  static resetCache() { We = null, _e = {}, $e = {}, He = {}; }

  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) { return Ge.create(e, t, r); }

  constructor(e, t, r, n) { var [s, i, e] = (function (e) { if ((n = e.indexOf('-u-')) === -1) return [e]; { let t; const r = e.substring(0, n); try { t = Ue(e).resolvedOptions(); } catch (e) { t = Ue(r).resolvedOptions(); } var { numberingSystem: n, calendar: e } = t; return [r, n, e]; } }(e)); this.locale = s, this.numberingSystem = t || i || null, this.outputCalendar = r || e || null, this.intl = (i = this.locale, r = this.numberingSystem, ((e = this.outputCalendar) || r) && (i += '-u', e && (i += `-ca-${e}`), r && (i += `-nu-${r}`)), i), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = n, this.fastNumbersCached = null; }

  get fastNumbers() { let e; return this.fastNumbersCached == null && (this.fastNumbersCached = (!(e = this).numberingSystem || e.numberingSystem === 'latn') && (e.numberingSystem === 'latn' || !e.locale || e.locale.startsWith('en') || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === 'latn')), this.fastNumbersCached; }

  listingMode() { const e = this.isEnglish(); const t = !(this.numberingSystem !== null && this.numberingSystem !== 'latn' || this.outputCalendar !== null && this.outputCalendar !== 'gregory'); return e && t ? 'en' : 'intl'; }

  clone(e) { return e && Object.getOwnPropertyNames(e).length !== 0 ? Ge.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, e.defaultToEN || !1) : this; }

  redefaultToEN(e = {}) { return this.clone({ ...e, defaultToEN: !0 }); }

  redefaultToSystem(e = {}) { return this.clone({ ...e, defaultToEN: !1 }); }

  months(r, n = !1, e = !0) { return Re(this, r, e, oe, () => { const t = n ? { month: r, day: 'numeric' } : { month: r }; const e = n ? 'format' : 'standalone'; return this.monthsCache[e][r] || (this.monthsCache[e][r] = (function (t) { const r = []; for (let e = 1; e <= 12; e++) { const n = Hr.utc(2016, e, 1); r.push(t(n)); } return r; }((e) => this.extract(e, t, 'month')))), this.monthsCache[e][r]; }); }

  weekdays(r, n = !1, e = !0) {
    return Re(this, r, e, he, () => {
      const t = n ? {
        weekday: r, year: 'numeric', month: 'long', day: 'numeric',
      } : { weekday: r }; const e = n ? 'format' : 'standalone'; return this.weekdaysCache[e][r] || (this.weekdaysCache[e][r] = (function (t) { const r = []; for (let e = 1; e <= 7; e++) { const n = Hr.utc(2016, 11, 13 + e); r.push(t(n)); } return r; }((e) => this.extract(e, t, 'weekday')))), this.weekdaysCache[e][r];
    });
  }

  meridiems(e = !0) { return Re(this, void 0, e, () => de, () => { if (!this.meridiemCache) { const t = { hour: 'numeric', hourCycle: 'h12' }; this.meridiemCache = [Hr.utc(2016, 11, 13, 9), Hr.utc(2016, 11, 13, 19)].map((e) => this.extract(e, t, 'dayperiod')); } return this.meridiemCache; }); }

  eras(e, t = !0) { return Re(this, e, t, ge, () => { const t = { era: e }; return this.eraCache[e] || (this.eraCache[e] = [Hr.utc(-40, 1, 1), Hr.utc(2017, 1, 1)].map((e) => this.extract(e, t, 'era'))), this.eraCache[e]; }); }

  extract(e, t, r) { const n = this.dtFormatter(e, t); const s = n.formatToParts(); const i = s.find((e) => e.type.toLowerCase() === r); return i ? i.value : null; }

  numberFormatter(e = {}) { return new Je(this.intl, e.forceSimple || this.fastNumbers, e); }

  dtFormatter(e, t = {}) { return new Ye(e, this.intl, t); }

  relFormatter(e = {}) { return new Pe(this.intl, this.isEnglish(), e); }

  listFormatter(e = {}) { return (function (e, t = {}) { const r = JSON.stringify([e, t]); let n = je[r]; return n || (n = new Intl.ListFormat(e, t), je[r] = n), n; }(this.intl, e)); }

  isEnglish() { return this.locale === 'en' || this.locale.toLowerCase() === 'en-us' || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us'); }

  equals(e) { return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar; }
} function Be(...e) { e = e.reduce((e, t) => e + t.source, ''); return RegExp(`^${e}$`); } function Qe(...e) { return (i) => e.reduce(([e, t, r], n) => { var [s, n, r] = n(i, r); return [{ ...e, ...s }, n || t, r]; }, [{}, null, 1]).slice(0, 2); } function Ke(e, ...t) { if (e == null) return [null, null]; for (let[r, n] of t) { r = r.exec(e); if (r) return n(r); } return [null, null]; } function Xe(...s) { return (e, t) => { const r = {}; let n; for (n = 0; n < s.length; n++)r[s[n]] = U(e[t + n]); return [r, null, t + n]; }; } var et = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/; const tt = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/; const rt = RegExp(`${tt.source}(?:${et.source}?(?:\\[(${ne.source})\\])?)?`); var u = RegExp(`(?:T${rt.source})?`); var t = Xe('weekYear', 'weekNumber', 'weekDay'); var l = Xe('year', 'ordinal'); var et = RegExp(`${tt.source} ?(?:${et.source}|(${ne.source}))?`); var ne = RegExp(`(?: ${et.source})?`); function nt(e, t, r) { t = e[t]; return F(t) ? r : U(t); } function st(e, t) {
  return [{
    hours: nt(e, t, 0), minutes: nt(e, t + 1, 0), seconds: nt(e, t + 2, 0), milliseconds: H(e[t + 3]),
  }, null, t + 4];
} function it(e, t) { const r = !e[t] && !e[t + 1]; var e = K(e[t + 1], e[t + 2]); return [{}, r ? null : Ve.instance(e), t + 3]; } function at(e, t) { return [{}, e[t] ? De.create(e[t]) : null, t + 1]; } const ot = RegExp(`^T?${tt.source}$`); const ut = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/; function lt(e) {
  let [t, r, n, s, i, a, o, u, l] = e; const c = t[0] === '-'; e = u && u[0] === '-', t = (e, t = !1) => (void 0 !== e && (t || e && c) ? -e : e); return [{
    years: t($(r)), months: t($(n)), weeks: t($(s)), days: t($(i)), hours: t($(a)), minutes: t($(o)), seconds: t($(u), u === '-0'), milliseconds: t(H(l), e),
  }];
} const ct = {
  GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480,
}; function ht(e, t, r, n, s, i, a) {
  const o = {
    year: t.length === 2 ? B(U(t)) : U(t), month: ie.indexOf(r) + 1, day: U(n), hour: U(s), minute: U(i),
  }; return a && (o.second = U(a)), e && (o.weekday = e.length > 3 ? ue.indexOf(e) + 1 : le.indexOf(e) + 1), o;
} const dt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/; function mt(e) { var [, t, r, n, s, i, a, o, u, l, c, e] = e; var o = ht(t, s, n, r, i, a, o); let h; return h = u ? ct[u] : l ? 0 : K(c, e), [o, new Ve(h)]; } const ft = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/; const yt = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/; const gt = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/; function wt(e) { var [, t, r, n, s, i, a, e] = e; return [ht(t, s, n, r, i, a, e), Ve.utcInstance]; } function vt(e) { var [, t, r, n, s, i, a, e] = e; return [ht(t, e, r, n, s, i, a), Ve.utcInstance]; } const pt = Be(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, u); const Tt = Be(/(\d{4})-?W(\d\d)(?:-?(\d))?/, u); const St = Be(/(\d{4})-?(\d{3})/, u); const Ot = Be(rt); const bt = Qe((e, t) => (nt(e, t), nt(e, t + 1, 1), nt(e, t + 2, 1), 1), st, it, at); const kt = Qe(t, st, it, at); const Mt = Qe(l, st, it, at); const Nt = Qe(st, it, at); const Dt = Qe(st); const Et = Be(/(\d{4})-(\d\d)-(\d\d)/, ne); const Vt = Be(et); const It = Qe(st, it, at); const xt = {
  weeks: {
    days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5,
  },
  days: {
    hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5,
  },
  hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
  minutes: { seconds: 60, milliseconds: 6e4 },
  seconds: { milliseconds: 1e3 },
}; const Ct = {
  years: {
    quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6,
  },
  quarters: {
    months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5,
  },
  months: {
    weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6,
  },
  ...xt,
}; const Ft = 365.2425; const Zt = 30.436875; const Lt = {
  years: {
    quarters: 4, months: 12, weeks: Ft / 7, days: Ft, hours: 24 * Ft, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3,
  },
  quarters: {
    months: 3, weeks: Ft / 28, days: Ft / 4, hours: 24 * Ft / 4, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999.999999,
  },
  months: {
    weeks: Zt / 7, days: Zt, hours: 24 * Zt, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3,
  },
  ...xt,
}; const zt = ['years', 'quarters', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds']; const qt = zt.slice(0).reverse(); function At(e, t, r = !1) { e = { values: r ? t.values : { ...e.values, ...t.values || {} }, loc: e.loc.clone(t.loc), conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy }; return new _t(e); } function jt(e, t, r, n, s) { const i = e[s][r]; var a = t[r] / i; var a = !(Math.sign(a) === Math.sign(n[s])) && n[s] !== 0 && Math.abs(a) <= 1 ? (e = a) < 0 ? Math.floor(e) : Math.ceil(e) : Math.trunc(a); n[s] += a, t[r] -= a * i; } class _t {
  constructor(e) { const t = e.conversionAccuracy === 'longterm' || !1; this.values = e.values, this.loc = e.loc || Ge.create(), this.conversionAccuracy = t ? 'longterm' : 'casual', this.invalid = e.invalid || null, this.matrix = t ? Lt : Ct, this.isLuxonDuration = !0; }

  static fromMillis(e, t) { return _t.fromObject({ milliseconds: e }, t); }

  static fromObject(e, t = {}) { if (e == null || typeof e !== 'object') throw new o(`Duration.fromObject: argument expected to be an object, got ${e === null ? 'null' : typeof e}`); return new _t({ values: ee(e, _t.normalizeUnit), loc: Ge.fromObject(t), conversionAccuracy: t.conversionAccuracy }); }

  static fromDurationLike(e) { if (Z(e)) return _t.fromMillis(e); if (_t.isDuration(e)) return e; if (typeof e === 'object') return _t.fromObject(e); throw new o(`Unknown duration argument ${e} of type ${typeof e}`); }

  static fromISO(e, t) { const [r] = Ke(e, [ut, lt]); return r ? _t.fromObject(r, t) : _t.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`); }

  static fromISOTime(e, t) { const [r] = Ke(e, [ot, Dt]); return r ? _t.fromObject(r, t) : _t.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`); }

  static invalid(e, t = null) { if (!e) throw new o('need to specify a reason the Duration is invalid'); t = e instanceof Te ? e : new Te(e, t); if (Ae.throwOnInvalid) throw new s(t); return new _t({ invalid: t }); }

  static normalizeUnit(e) {
    const t = {
      year: 'years', years: 'years', quarter: 'quarters', quarters: 'quarters', month: 'months', months: 'months', week: 'weeks', weeks: 'weeks', day: 'days', days: 'days', hour: 'hours', hours: 'hours', minute: 'minutes', minutes: 'minutes', second: 'seconds', seconds: 'seconds', millisecond: 'milliseconds', milliseconds: 'milliseconds',
    }[e && e.toLowerCase()]; if (!t) throw new i(e); return t;
  }

  static isDuration(e) { return e && e.isLuxonDuration || !1; }

  get locale() { return this.isValid ? this.loc.locale : null; }

  get numberingSystem() { return this.isValid ? this.loc.numberingSystem : null; }

  toFormat(e, t = {}) { t = { ...t, floor: !1 !== t.round && !1 !== t.floor }; return this.isValid ? pe.create(this.loc, t).formatDurationFromString(this, e) : 'Invalid Duration'; }

  toHuman(r = {}) {
    const e = zt.map((e) => {
      const t = this.values[e]; return F(t) ? null : this.loc.numberFormatter({
        style: 'unit', unitDisplay: 'long', ...r, unit: e.slice(0, -1),
      }).format(t);
    }).filter((e) => e); return this.loc.listFormatter({ type: 'conjunction', style: r.listStyle || 'narrow', ...r }).format(e);
  }

  toObject() { return this.isValid ? { ...this.values } : {}; }

  toISO() { if (!this.isValid) return null; let e = 'P'; return this.years !== 0 && (e += `${this.years}Y`), this.months === 0 && this.quarters === 0 || (e += `${this.months + 3 * this.quarters}M`), this.weeks !== 0 && (e += `${this.weeks}W`), this.days !== 0 && (e += `${this.days}D`), this.hours === 0 && this.minutes === 0 && this.seconds === 0 && this.milliseconds === 0 || (e += 'T'), this.hours !== 0 && (e += `${this.hours}H`), this.minutes !== 0 && (e += `${this.minutes}M`), this.seconds === 0 && this.milliseconds === 0 || (e += `${W(this.seconds + this.milliseconds / 1e3, 3)}S`), e === 'P' && (e += 'T0S'), e; }

  toISOTime(e = {}) {
    if (!this.isValid) return null; const t = this.toMillis(); if (t < 0 || t >= 864e5) return null; e = {
      suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: 'extended', ...e,
    }; const r = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds'); let n = e.format === 'basic' ? 'hhmm' : 'hh:mm'; e.suppressSeconds && r.seconds === 0 && r.milliseconds === 0 || (n += e.format === 'basic' ? 'ss' : ':ss', e.suppressMilliseconds && r.milliseconds === 0 || (n += '.SSS')); let s = r.toFormat(n); return e.includePrefix && (s = `T${s}`), s;
  }

  toJSON() { return this.toISO(); }

  toString() { return this.toISO(); }

  toMillis() { return this.as('milliseconds'); }

  valueOf() { return this.toMillis(); }

  plus(e) { if (!this.isValid) return this; const t = _t.fromDurationLike(e); const r = {}; for (const n of zt)(A(t.values, n) || A(this.values, n)) && (r[n] = t.get(n) + this.get(n)); return At(this, { values: r }, !0); }

  minus(e) { if (!this.isValid) return this; const t = _t.fromDurationLike(e); return this.plus(t.negate()); }

  mapUnits(e) { if (!this.isValid) return this; const t = {}; for (const r of Object.keys(this.values))t[r] = X(e(this.values[r], r)); return At(this, { values: t }, !0); }

  get(e) { return this[_t.normalizeUnit(e)]; }

  set(e) { return this.isValid ? At(this, { values: { ...this.values, ...ee(e, _t.normalizeUnit) } }) : this; }

  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r } = {}) { const n = this.loc.clone({ locale: e, numberingSystem: t }); const s = { loc: n }; return r && (s.conversionAccuracy = r), At(this, s); }

  as(e) { return this.isValid ? this.shiftTo(e).get(e) : NaN; }

  normalize() { if (!this.isValid) return this; let r; let n; const e = this.toObject(); return r = this.matrix, n = e, qt.reduce((e, t) => (F(n[t]) ? e : (e && jt(r, n, e, n, t), t)), null), At(this, { values: e }, !0); }

  shiftTo(...e) { if (!this.isValid) return this; if (e.length === 0) return this; e = e.map((e) => _t.normalizeUnit(e)); const t = {}; const r = {}; const n = this.toObject(); let s; for (const a of zt) if (e.indexOf(a) >= 0) { s = a; let e = 0; for (const o in r)e += this.matrix[o][a] * r[o], r[o] = 0; Z(n[a]) && (e += n[a]); const i = Math.trunc(e); t[a] = i, r[a] = (1e3 * e - 1e3 * i) / 1e3; for (const u in n)zt.indexOf(u) > zt.indexOf(a) && jt(this.matrix, n, u, t, a); } else Z(n[a]) && (r[a] = n[a]); for (const l in r)r[l] !== 0 && (t[s] += l === s ? r[l] : r[l] / this.matrix[s][l]); return At(this, { values: t }, !0).normalize(); }

  negate() { if (!this.isValid) return this; const e = {}; for (const t of Object.keys(this.values))e[t] = this.values[t] === 0 ? 0 : -this.values[t]; return At(this, { values: e }, !0); }

  get years() { return this.isValid ? this.values.years || 0 : NaN; }

  get quarters() { return this.isValid ? this.values.quarters || 0 : NaN; }

  get months() { return this.isValid ? this.values.months || 0 : NaN; }

  get weeks() { return this.isValid ? this.values.weeks || 0 : NaN; }

  get days() { return this.isValid ? this.values.days || 0 : NaN; }

  get hours() { return this.isValid ? this.values.hours || 0 : NaN; }

  get minutes() { return this.isValid ? this.values.minutes || 0 : NaN; }

  get seconds() { return this.isValid ? this.values.seconds || 0 : NaN; }

  get milliseconds() { return this.isValid ? this.values.milliseconds || 0 : NaN; }

  get isValid() { return this.invalid === null; }

  get invalidReason() { return this.invalid ? this.invalid.reason : null; }

  get invalidExplanation() { return this.invalid ? this.invalid.explanation : null; }

  equals(e) { if (!this.isValid || !e.isValid) return !1; if (!this.loc.equals(e.loc)) return !1; for (const n of zt) if (t = this.values[n], r = e.values[n], !(void 0 === t || t === 0 ? void 0 === r || r === 0 : t === r)) return !1; let t; let r; return !0; }
} const Ut = 'Invalid Interval'; class $t {
  constructor(e) { this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0; }

  static invalid(e, t = null) { if (!e) throw new o('need to specify a reason the Interval is invalid'); t = e instanceof Te ? e : new Te(e, t); if (Ae.throwOnInvalid) throw new n(t); return new $t({ invalid: t }); }

  static fromDateTimes(e, t) { const r = Wr(e); const n = Wr(t); var e = (e = n, (t = r) && t.isValid ? e && e.isValid ? e < t ? $t.invalid('end before start', `The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`) : null : $t.invalid('missing or invalid end') : $t.invalid('missing or invalid start')); return e == null ? new $t({ start: r, end: n }) : e; }

  static after(e, t) { const r = _t.fromDurationLike(t); const n = Wr(e); return $t.fromDateTimes(n, n.plus(r)); }

  static before(e, t) { const r = _t.fromDurationLike(t); const n = Wr(e); return $t.fromDateTimes(n.minus(r), n); }

  static fromISO(e, s) { const [i, a] = (e || '').split('/', 2); if (i && a) { let e; let t; try { e = Hr.fromISO(i, s), t = e.isValid; } catch (a) { t = !1; }let r; let n; try { r = Hr.fromISO(a, s), n = r.isValid; } catch (a) { n = !1; } if (t && n) return $t.fromDateTimes(e, r); if (t) { const o = _t.fromISO(a, s); if (o.isValid) return $t.after(e, o); } else if (n) { s = _t.fromISO(i, s); if (s.isValid) return $t.before(r, s); } } return $t.invalid('unparsable', `the input "${e}" can't be parsed as ISO 8601`); }

  static isInterval(e) { return e && e.isLuxonInterval || !1; }

  get start() { return this.isValid ? this.s : null; }

  get end() { return this.isValid ? this.e : null; }

  get isValid() { return this.invalidReason === null; }

  get invalidReason() { return this.invalid ? this.invalid.reason : null; }

  get invalidExplanation() { return this.invalid ? this.invalid.explanation : null; }

  length(e = 'milliseconds') { return this.isValid ? this.toDuration(e).get(e) : NaN; }

  count(e = 'milliseconds') { if (!this.isValid) return NaN; const t = this.start.startOf(e); const r = this.end.startOf(e); return Math.floor(r.diff(t, e).get(e)) + 1; }

  hasSame(e) { return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e)); }

  isEmpty() { return this.s.valueOf() === this.e.valueOf(); }

  isAfter(e) { return !!this.isValid && this.s > e; }

  isBefore(e) { return !!this.isValid && this.e <= e; }

  contains(e) { return !!this.isValid && (this.s <= e && this.e > e); }

  set({ start: e, end: t } = {}) { return this.isValid ? $t.fromDateTimes(e || this.s, t || this.e) : this; }

  splitAt(...e) {
    if (!this.isValid) return []; const t = e.map(Wr).filter((e) => this.contains(e)).sort(); const r = []; let n = this.s; let
      s = 0; for (;n < this.e;) { var i = t[s] || this.e; var i = +i > +this.e ? this.e : i; r.push($t.fromDateTimes(n, i)), n = i, s += 1; } return r;
  }

  splitBy(e) {
    const t = _t.fromDurationLike(e); if (!this.isValid || !t.isValid || t.as('milliseconds') === 0) return []; let r = this.s; let n = 1; let
      s; const i = []; for (;r < this.e;) { const a = this.start.plus(t.mapUnits((e) => e * n)); s = +a > +this.e ? this.e : a, i.push($t.fromDateTimes(r, s)), r = s, n += 1; } return i;
  }

  divideEqually(e) { return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []; }

  overlaps(e) { return this.e > e.s && this.s < e.e; }

  abutsStart(e) { return !!this.isValid && +this.e == +e.s; }

  abutsEnd(e) { return !!this.isValid && +e.e == +this.s; }

  engulfs(e) { return !!this.isValid && (this.s <= e.s && this.e >= e.e); }

  equals(e) { return !(!this.isValid || !e.isValid) && (this.s.equals(e.s) && this.e.equals(e.e)); }

  intersection(e) { if (!this.isValid) return this; const t = (this.s > e.s ? this : e).s; var { e } = this.e < e.e ? this : e; return e <= t ? null : $t.fromDateTimes(t, e); }

  union(e) { if (!this.isValid) return this; const t = (this.s < e.s ? this : e).s; var { e } = this.e > e.e ? this : e; return $t.fromDateTimes(t, e); }

  static merge(e) { const [t, r] = e.sort((e, t) => e.s - t.s).reduce(([e, t], r) => (t ? t.overlaps(r) || t.abutsStart(r) ? [e, t.union(r)] : [e.concat([t]), r] : [e, r]), [[], null]); return r && t.push(r), t; }

  static xor(e) { let t = null; let r = 0; const n = []; const s = e.map((e) => [{ time: e.s, type: 's' }, { time: e.e, type: 'e' }]); const i = Array.prototype.concat(...s); const a = i.sort((e, t) => e.time - t.time); for (const o of a)r += o.type === 's' ? 1 : -1, t = r === 1 ? o.time : (t && +t != +o.time && n.push($t.fromDateTimes(t, o.time)), null); return $t.merge(n); }

  difference(...e) { return $t.xor([this].concat(e)).map((e) => this.intersection(e)).filter((e) => e && !e.isEmpty()); }

  toString() { return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Ut; }

  toISO(e) { return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Ut; }

  toISODate() { return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ut; }

  toISOTime(e) { return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Ut; }

  toFormat(e, { separator: t = ' – ' } = {}) { return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Ut; }

  toDuration(e, t) { return this.isValid ? this.e.diff(this.s, e, t) : _t.invalid(this.invalidReason); }

  mapEndpoints(e) { return $t.fromDateTimes(e(this.s), e(this.e)); }
} class Ht {
  static hasDST(e = Ae.defaultZone) { const t = Hr.now().setZone(e).set({ month: 12 }); return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset; }

  static isValidIANAZone(e) { return De.isValidZone(e); }

  static normalizeZone(e) { return xe(e, Ae.defaultZone); }

  static months(e = 'long', {
    locale: t = null, numberingSystem: r = null, locObj: n = null, outputCalendar: s = 'gregory',
  } = {}) { return (n || Ge.create(t, r, s)).months(e); }

  static monthsFormat(e = 'long', {
    locale: t = null, numberingSystem: r = null, locObj: n = null, outputCalendar: s = 'gregory',
  } = {}) { return (n || Ge.create(t, r, s)).months(e, !0); }

  static weekdays(e = 'long', { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}) { return (n || Ge.create(t, r, null)).weekdays(e); }

  static weekdaysFormat(e = 'long', { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}) { return (n || Ge.create(t, r, null)).weekdays(e, !0); }

  static meridiems({ locale: e = null } = {}) { return Ge.create(e).meridiems(); }

  static eras(e = 'short', { locale: t = null } = {}) { return Ge.create(t, null, 'gregory').eras(e); }

  static features() { return { relative: z() }; }
} function Wt(e, t) { const r = (e) => e.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf(); var e = r(t) - r(e); return Math.floor(_t.fromMillis(e).as('days')); } function Rt(e, t, r, n) { let[s, i, a, o] = (function (t, r, e) { let n; let s; const i = {}; let a; let o; for ([n, s] of [['years', (e, t) => t.year - e.year], ['quarters', (e, t) => t.quarter - e.quarter], ['months', (e, t) => t.month - e.month + 12 * (t.year - e.year)], ['weeks', (e, t) => { t = Wt(e, t); return (t - t % 7) / 7; }], ['days', Wt]]) if (e.indexOf(n) >= 0) { a = n; let e = s(t, r); o = t.plus({ [n]: e }), o > r ? (t = t.plus({ [n]: e - 1 }), --e) : t = o, i[n] = e; } return [t, i, o, a]; }(e, t, r)); e = t - s, r = r.filter((e) => ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(e) >= 0); r.length === 0 && (a < t && (a = s.plus({ [o]: 1 })), a !== s && (i[o] = (i[o] || 0) + e / (a - s))); t = _t.fromObject(i, n); return r.length > 0 ? _t.fromMillis(e, n).shiftTo(...r).plus(t) : t; } const Jt = {
  arab: '[٠-٩]', arabext: '[۰-۹]', bali: '[᭐-᭙]', beng: '[০-৯]', deva: '[०-९]', fullwide: '[０-９]', gujr: '[૦-૯]', hanidec: '[〇|一|二|三|四|五|六|七|八|九]', khmr: '[០-៩]', knda: '[೦-೯]', laoo: '[໐-໙]', limb: '[᥆-᥏]', mlym: '[൦-൯]', mong: '[᠐-᠙]', mymr: '[၀-၉]', orya: '[୦-୯]', tamldec: '[௦-௯]', telu: '[౦-౯]', thai: '[๐-๙]', tibt: '[༠-༩]', latn: '\\d',
}; const Yt = {
  arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881],
}; const Pt = Jt.hanidec.replace(/[\[|\]]/g, '').split(''); function Gt({ numberingSystem: e }, t = '') { return new RegExp(`${Jt[e || 'latn']}${t}`); } const Bt = 'missing Intl.DateTimeFormat.formatToParts support'; function Qt(e, t = (e) => e) { return { regex: e, deser: ([e]) => t(function (t) { let r = parseInt(t, 10); if (isNaN(r)) { r = ''; for (let e = 0; e < t.length; e++) { const n = t.charCodeAt(e); if (t[e].search(Jt.hanidec) !== -1)r += Pt.indexOf(t[e]); else for (const a in Yt) { const [s, i] = Yt[a]; s <= n && n <= i && (r += n - s); } } return parseInt(r, 10); } return r; }(e)) }; } const Kt = `[ ${String.fromCharCode(160)}]`; const Xt = new RegExp(Kt, 'g'); function er(e) { return e.replace(/\./g, '\\.?').replace(Xt, Kt); } function tr(e) { return e.replace(/\./g, '').replace(Xt, ' ').toLowerCase(); } function rr(e, r) { return e === null ? null : { regex: RegExp(e.map(er).join('|')), deser: ([t]) => e.findIndex((e) => tr(t) === tr(e)) + r }; } function nr(e, t) { return { regex: e, deser: ([, e, t]) => K(e, t), groups: t }; } function sr(e) { return { regex: e, deser: ([e]) => e }; } const ir = {
  year: { '2-digit': 'yy', numeric: 'yyyyy' },
  month: {
    numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM',
  },
  day: { numeric: 'd', '2-digit': 'dd' },
  weekday: { short: 'EEE', long: 'EEEE' },
  dayperiod: 'a',
  dayPeriod: 'a',
  hour: { numeric: 'h', '2-digit': 'hh' },
  minute: { numeric: 'm', '2-digit': 'mm' },
  second: { numeric: 's', '2-digit': 'ss' },
}; let ar = null; function or(e, t) { if (e.literal) return e; const r = pe.macroTokenToFormatOpts(e.val); if (!r) return e; const n = pe.create(t, r); const s = n.formatDateTimeParts((ar = ar || Hr.fromMillis(1555555555555), ar)); const i = s.map((e) => (function (e, t) { var { type: r, value: e } = e; if (r === 'literal') return { literal: !0, val: e }; t = t[r]; let n = ir[r]; return typeof n === 'object' && (n = n[t]), n ? { literal: !1, val: n } : void 0; }(e, r))); return i.includes(void 0) ? e : i; } function ur(t, e, r) {
  const n = (c = pe.parseFormat(r), a = t, Array.prototype.concat(...c.map((e) => or(e, a)))); const s = n.map((e) => (function (t, r) { const n = Gt(r); const s = Gt(r, '{2}'); const i = Gt(r, '{3}'); const a = Gt(r, '{4}'); const o = Gt(r, '{6}'); const u = Gt(r, '{1,2}'); const l = Gt(r, '{1,3}'); const c = Gt(r, '{1,6}'); const h = Gt(r, '{1,9}'); const d = Gt(r, '{2,4}'); const m = Gt(r, '{4,6}'); const f = (e) => ({ regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')), deser: ([e]) => e, literal: !0 }); const e = ((e) => { if (t.literal) return f(e); switch (e.val) { case 'G': return rr(r.eras('short', !1), 0); case 'GG': return rr(r.eras('long', !1), 0); case 'y': return Qt(c); case 'yy': return Qt(d, B); case 'yyyy': return Qt(a); case 'yyyyy': return Qt(m); case 'yyyyyy': return Qt(o); case 'M': return Qt(u); case 'MM': return Qt(s); case 'MMM': return rr(r.months('short', !0, !1), 1); case 'MMMM': return rr(r.months('long', !0, !1), 1); case 'L': return Qt(u); case 'LL': return Qt(s); case 'LLL': return rr(r.months('short', !1, !1), 1); case 'LLLL': return rr(r.months('long', !1, !1), 1); case 'd': return Qt(u); case 'dd': return Qt(s); case 'o': return Qt(l); case 'ooo': return Qt(i); case 'HH': return Qt(s); case 'H': return Qt(u); case 'hh': return Qt(s); case 'h': return Qt(u); case 'mm': return Qt(s); case 'm': case 'q': return Qt(u); case 'qq': return Qt(s); case 's': return Qt(u); case 'ss': return Qt(s); case 'S': return Qt(l); case 'SSS': return Qt(i); case 'u': return sr(h); case 'uu': return sr(u); case 'uuu': return Qt(n); case 'a': return rr(r.meridiems(), 0); case 'kkkk': return Qt(a); case 'kk': return Qt(d, B); case 'W': return Qt(u); case 'WW': return Qt(s); case 'E': case 'c': return Qt(n); case 'EEE': return rr(r.weekdays('short', !1, !1), 1); case 'EEEE': return rr(r.weekdays('long', !1, !1), 1); case 'ccc': return rr(r.weekdays('short', !0, !1), 1); case 'cccc': return rr(r.weekdays('long', !0, !1), 1); case 'Z': case 'ZZ': return nr(new RegExp(`([+-]${u.source})(?::(${s.source}))?`), 2); case 'ZZZ': return nr(new RegExp(`([+-]${u.source})(${s.source})?`), 2); case 'z': return sr(/[a-z_+-/]{1,256}?/i); default: return f(e); } })(t) || { invalidReason: Bt }; return e.token = t, e; }(e, t))); const i = s.find((e) => e.invalidReason); let a; if (i) return { input: e, tokens: n, invalidReason: i.invalidReason }; var [o, u] = [`^${(h = s).map((e) => e.regex).reduce((e, t) => `${e}(${t.source})`, '')}$`, h]; const l = RegExp(o, 'i'); var [r, c] = (function (e, t, r) { const n = e.match(t); if (n) { const s = {}; let e = 1; for (const i in r) if (A(r, i)) { const a = r[i]; const o = a.groups ? a.groups + 1 : 1; !a.literal && a.token && (s[a.token.val[0]] = a.deser(n.slice(e, e + o))), e += o; } return [n, s]; } return [n, {}]; }(e, l, u)); var [h, o, u] = c ? (function (n) { let e = null; let t; return F(n.z) || (e = De.create(n.z)), F(n.Z) || (e = e || new Ve(n.Z), t = n.Z), F(n.q) || (n.M = 3 * (n.q - 1) + 1), F(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), F(n.u) || (n.S = H(n.u)), [Object.keys(n).reduce((e, t) => { const r = ((e) => { switch (e) { case 'S': return 'millisecond'; case 's': return 'second'; case 'm': return 'minute'; case 'h': case 'H': return 'hour'; case 'd': return 'day'; case 'o': return 'ordinal'; case 'L': case 'M': return 'month'; case 'y': return 'year'; case 'E': case 'c': return 'weekday'; case 'W': return 'weekNumber'; case 'k': return 'weekYear'; case 'q': return 'quarter'; default: return null; } })(t); return r && (e[r] = n[t]), e; }, {}), e, t]; }(c)) : [null, null, void 0]; if (A(c, 'a') && A(c, 'H')) throw new N("Can't include meridiem when specifying 24-hour format"); return {
    input: e, tokens: n, regex: l, rawMatches: r, matches: c, result: h, zone: o, specificOffset: u,
  };
} const lr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]; const cr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]; function hr(e, t) { return new Te('unit out of range', `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`); } function dr(e, t, r) { const n = new Date(Date.UTC(e, t - 1, r)); e < 100 && e >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900); e = n.getUTCDay(); return e === 0 ? 7 : e; } function mr(e, t, r) { return r + (R(e) ? cr : lr)[t - 1]; } function fr(e, t) { const r = R(e) ? cr : lr; const n = r.findIndex((e) => e < t); const s = t - r[n]; return { month: n + 1, day: s }; } function yr(e) {
  var { year: t, month: r, day: n } = e; const s = mr(t, r, n); var n = dr(t, r, n); let i = Math.floor((s - n + 10) / 7); let a; return i < 1 ? (a = t - 1, i = G(a)) : i > G(t) ? (a = t + 1, i = 1) : a = t, {
    weekYear: a, weekNumber: i, weekday: n, ...re(e),
  };
} function gr(e) {
  var { weekYear: t, weekNumber: r, weekday: n } = e; const s = dr(t, 1, 4); var i = J(t); let a = 7 * r + n - s - 3; let o; a < 1 ? (o = t - 1, a += J(o)) : a > i ? (o = t + 1, a -= J(t)) : o = t; var { month: i, day: t } = fr(o, a); return {
    year: o, month: i, day: t, ...re(e),
  };
} function wr(e) { const { year: t, month: r, day: n } = e; return { year: t, ordinal: mr(t, r, n), ...re(e) }; } function vr(e) {
  var { year: t, ordinal: r } = e; var { month: n, day: r } = fr(t, r); return {
    year: t, month: n, day: r, ...re(e),
  };
} function pr(e) { const t = L(e.year); const r = j(e.month, 1, 12); const n = j(e.day, 1, Y(e.year, e.month)); return t ? r ? !n && hr('day', e.day) : hr('month', e.month) : hr('year', e.year); } function Tr(e) {
  const {
    hour: t, minute: r, second: n, millisecond: s,
  } = e; const i = j(t, 0, 23) || t === 24 && r === 0 && n === 0 && s === 0; const a = j(r, 0, 59); const o = j(n, 0, 59); var e = j(s, 0, 999); return i ? a ? o ? !e && hr('millisecond', s) : hr('second', n) : hr('minute', r) : hr('hour', t);
} const Sr = 'Invalid DateTime'; function Or(e) { return new Te('unsupported zone', `the zone "${e.name}" is not supported`); } function br(e) { return e.weekData === null && (e.weekData = yr(e.c)), e.weekData; } function kr(e, t) {
  e = {
    ts: e.ts, zone: e.zone, c: e.c, o: e.o, loc: e.loc, invalid: e.invalid,
  }; return new Hr({ ...e, ...t, old: e });
} function Mr(e, t, r) { let n = e - 60 * t * 1e3; const s = r.offset(n); if (t === s) return [n, t]; n -= 60 * (s - t) * 1e3; r = r.offset(n); return s === r ? [n, s] : [e - 60 * Math.min(s, r) * 1e3, Math.max(s, r)]; } function Nr(e, t) {
  e += 60 * t * 1e3; const r = new Date(e); return {
    year: r.getUTCFullYear(), month: r.getUTCMonth() + 1, day: r.getUTCDate(), hour: r.getUTCHours(), minute: r.getUTCMinutes(), second: r.getUTCSeconds(), millisecond: r.getUTCMilliseconds(),
  };
} function Dr(e, t, r) { return Mr(P(e), t, r); } function Er(e, t) {
  const r = e.o; const n = e.c.year + Math.trunc(t.years); var s = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters); var s = {
    ...e.c, year: n, month: s, day: Math.min(e.c.day, Y(n, s)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks),
  }; var t = _t.fromObject({
    years: t.years - Math.trunc(t.years), quarters: t.quarters - Math.trunc(t.quarters), months: t.months - Math.trunc(t.months), weeks: t.weeks - Math.trunc(t.weeks), days: t.days - Math.trunc(t.days), hours: t.hours, minutes: t.minutes, seconds: t.seconds, milliseconds: t.milliseconds,
  }).as('milliseconds'); let[i, a] = Mr(P(s), r, e.zone); return t !== 0 && (i += t, a = e.zone.offset(i)), { ts: i, o: a };
} function Vr(e, t, r, n, s, i) { const { setZone: a, zone: o } = r; if (e && Object.keys(e).length !== 0) { const u = t || o; const l = Hr.fromObject(e, { ...r, zone: u, specificOffset: i }); return a ? l : l.setZone(o); } return Hr.invalid(new Te('unparsable', `the input "${s}" can't be parsed as ${n}`)); } function Ir(e, t, r = !0) { return e.isValid ? pe.create(Ge.create('en-US'), { allowZ: r, forceSimple: !0 }).formatDateTimeFromString(e, t) : null; } function xr(e, t) { const r = e.c.year > 9999 || e.c.year < 0; let n = ''; return r && e.c.year >= 0 && (n += '+'), n += _(e.c.year, r ? 6 : 4), t ? (n += '-', n += _(e.c.month), n += '-') : n += _(e.c.month), n += _(e.c.day), n; } function Cr(e, t, r, n, s, i) { let a = _(e.c.hour); return t ? (a += ':', a += _(e.c.minute), e.c.second === 0 && r || (a += ':')) : a += _(e.c.minute), e.c.second === 0 && r || (a += _(e.c.second), e.c.millisecond === 0 && n || (a += '.', a += _(e.c.millisecond, 3))), s && (e.isOffsetFixed && e.offset === 0 && !i ? a += 'Z' : e.o < 0 ? (a += '-', a += _(Math.trunc(-e.o / 60)), a += ':', a += _(Math.trunc(-e.o % 60))) : (a += '+', a += _(Math.trunc(e.o / 60)), a += ':', a += _(Math.trunc(e.o % 60)))), i && (a += `[${e.zone.ianaName}]`), a; } const Fr = {
  month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
}; const Zr = {
  weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
}; const Lr = {
  ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0,
}; const zr = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond']; const qr = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond']; const Ar = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond']; function jr(e) {
  const t = {
    year: 'year', years: 'year', month: 'month', months: 'month', day: 'day', days: 'day', hour: 'hour', hours: 'hour', minute: 'minute', minutes: 'minute', quarter: 'quarter', quarters: 'quarter', second: 'second', seconds: 'second', millisecond: 'millisecond', milliseconds: 'millisecond', weekday: 'weekday', weekdays: 'weekday', weeknumber: 'weekNumber', weeksnumber: 'weekNumber', weeknumbers: 'weekNumber', weekyear: 'weekYear', weekyears: 'weekYear', ordinal: 'ordinal',
  }[e.toLowerCase()]; if (!t) throw new i(e); return t;
} function _r(e, t) {
  const r = xe(t.zone, Ae.defaultZone); const n = Ge.fromObject(t); const s = Ae.now(); let i; let a; if (F(e.year))i = s; else { for (const o of zr)F(e[o]) && (e[o] = Fr[o]); t = pr(e) || Tr(e); if (t) return Hr.invalid(t); t = r.offset(s); [i, a] = Dr(e, t, r); } return new Hr({
    ts: i, zone: r, loc: n, o: a,
  });
} function Ur(t, n, s) { const i = !!F(s.round) || s.round; const e = (e, t) => { e = W(e, i || s.calendary ? 0 : 2, !0); const r = n.loc.clone(s).relFormatter(s); return r.format(e, t); }; const r = (e) => (s.calendary ? n.hasSame(t, e) ? 0 : n.startOf(e).diff(t.startOf(e), e).get(e) : n.diff(t, e).get(e)); if (s.unit) return e(r(s.unit), s.unit); for (const o of s.units) { const a = r(o); if (Math.abs(a) >= 1) return e(a, o); } return e(n < t ? -0 : 0, s.units[s.units.length - 1]); } function $r(e) { let t = {}; let r; return r = e.length > 0 && typeof e[e.length - 1] === 'object' ? (t = e[e.length - 1], Array.from(e).slice(0, e.length - 1)) : Array.from(e), [t, r]; } class Hr {
  constructor(e) { const t = e.zone || Ae.defaultZone; let r = e.invalid || (Number.isNaN(e.ts) ? new Te('invalid input') : null) || (t.isValid ? null : Or(t)); this.ts = F(e.ts) ? Ae.now() : e.ts; let n = null; let s = null; let i; r || (e.old && e.old.ts === this.ts && e.old.zone.equals(t) ? [n, s] = [e.old.c, e.old.o] : (i = t.offset(this.ts), n = Nr(this.ts, i), r = Number.isNaN(n.year) ? new Te('invalid input') : null, n = r ? null : n, s = r ? null : i)), this._zone = t, this.loc = e.loc || Ge.create(), this.invalid = r, this.weekData = null, this.c = n, this.o = s, this.isLuxonDateTime = !0; }

  static now() { return new Hr({}); }

  static local() {
    var [e, t] = $r(arguments); var [r, n, s, i, a, o, t] = t; return _r({
      year: r, month: n, day: s, hour: i, minute: a, second: o, millisecond: t,
    }, e);
  }

  static utc() {
    const [e, t] = $r(arguments); const [r, n, s, i, a, o, u] = t; return e.zone = Ve.utcInstance, _r({
      year: r, month: n, day: s, hour: i, minute: a, second: o, millisecond: u,
    }, e);
  }

  static fromJSDate(e, t = {}) { const r = Object.prototype.toString.call(e) === '[object Date]' ? e.valueOf() : NaN; if (Number.isNaN(r)) return Hr.invalid('invalid input'); e = xe(t.zone, Ae.defaultZone); return e.isValid ? new Hr({ ts: r, zone: e, loc: Ge.fromObject(t) }) : Hr.invalid(Or(e)); }

  static fromMillis(e, t = {}) { if (Z(e)) return e < -864e13 || e > 864e13 ? Hr.invalid('Timestamp out of range') : new Hr({ ts: e, zone: xe(t.zone, Ae.defaultZone), loc: Ge.fromObject(t) }); throw new o(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`); }

  static fromSeconds(e, t = {}) { if (Z(e)) return new Hr({ ts: 1e3 * e, zone: xe(t.zone, Ae.defaultZone), loc: Ge.fromObject(t) }); throw new o('fromSeconds requires a numerical input'); }

  static fromObject(e, t = {}) {
    e = e || {}; const r = xe(t.zone, Ae.defaultZone); if (!r.isValid) return Hr.invalid(Or(r)); const n = Ae.now(); const s = F(t.specificOffset) ? r.offset(n) : t.specificOffset; const i = ee(e, jr); const a = !F(i.ordinal); const o = !F(i.year); const u = !F(i.month) || !F(i.day); const l = o || u; const c = i.weekYear || i.weekNumber; const h = Ge.fromObject(t); if ((l || a) && c) throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals"); if (u && a) throw new N("Can't mix ordinal dates with month/day"); const d = c || i.weekday && !l; let m; let f; let y = Nr(n, s); d ? (m = qr, f = Zr, y = yr(y)) : a ? (m = Ar, f = Lr, y = wr(y)) : (m = zr, f = Fr); let g = !1; for (const M of m)F(i[M]) ? g ? i[M] = f[M] : i[M] = y[M] : g = !0; let w; let v; let p; var T = (d ? (w = i, v = L(w.weekYear), t = j(w.weekNumber, 1, G(w.weekYear)), p = j(w.weekday, 1, 7), v ? t ? !p && hr('weekday', w.weekday) : hr('week', w.week) : hr('weekYear', w.weekYear)) : a ? (T = i, p = L(T.year), w = j(T.ordinal, 1, J(T.year)), p ? !w && hr('ordinal', T.ordinal) : hr('year', T.year)) : pr(i)) || Tr(i); if (T) return Hr.invalid(T); const S = d ? gr(i) : a ? vr(i) : i; const [O, b] = Dr(S, s, r); const k = new Hr({
      ts: O, zone: r, o: b, loc: h,
    }); return i.weekday && l && e.weekday !== k.weekday ? Hr.invalid('mismatched weekday', `you can't specify both a weekday of ${i.weekday} and a date of ${k.toISO()}`) : k;
  }

  static fromISO(e, t = {}) { const [r, n] = Ke(e, [pt, bt], [Tt, kt], [St, Mt], [Ot, Nt]); return Vr(r, n, t, 'ISO 8601', e); }

  static fromRFC2822(e, t = {}) { const [r, n] = Ke(e.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim(), [dt, mt]); return Vr(r, n, t, 'RFC 2822', e); }

  static fromHTTP(e, t = {}) { var [r, e] = Ke(e, [ft, wt], [yt, wt], [gt, vt]); return Vr(r, e, t, 'HTTP', t); }

  static fromFormat(e, t, r = {}) {
    if (F(e) || F(t)) throw new o('fromFormat requires an input string and a format'); var { locale: n = null, numberingSystem: s = null } = r; var [i, a, n, s] = (function (e, t, r) {
      var {
        result: n, zone: e, specificOffset: t, invalidReason: r,
      } = ur(e, t, r); return [n, e, t, r];
    }(Ge.fromOpts({ locale: n, numberingSystem: s, defaultToEN: !0 }), e, t)); return s ? Hr.invalid(s) : Vr(i, a, r, `format ${t}`, e, n);
  }

  static fromString(e, t, r = {}) { return Hr.fromFormat(e, t, r); }

  static fromSQL(e, t = {}) { const [r, n] = Ke(e, [Et, bt], [Vt, It]); return Vr(r, n, t, 'SQL', e); }

  static invalid(e, t = null) { if (!e) throw new o('need to specify a reason the DateTime is invalid'); t = e instanceof Te ? e : new Te(e, t); if (Ae.throwOnInvalid) throw new r(t); return new Hr({ invalid: t }); }

  static isDateTime(e) { return e && e.isLuxonDateTime || !1; }

  get(e) { return this[e]; }

  get isValid() { return this.invalid === null; }

  get invalidReason() { return this.invalid ? this.invalid.reason : null; }

  get invalidExplanation() { return this.invalid ? this.invalid.explanation : null; }

  get locale() { return this.isValid ? this.loc.locale : null; }

  get numberingSystem() { return this.isValid ? this.loc.numberingSystem : null; }

  get outputCalendar() { return this.isValid ? this.loc.outputCalendar : null; }

  get zone() { return this._zone; }

  get zoneName() { return this.isValid ? this.zone.name : null; }

  get year() { return this.isValid ? this.c.year : NaN; }

  get quarter() { return this.isValid ? Math.ceil(this.c.month / 3) : NaN; }

  get month() { return this.isValid ? this.c.month : NaN; }

  get day() { return this.isValid ? this.c.day : NaN; }

  get hour() { return this.isValid ? this.c.hour : NaN; }

  get minute() { return this.isValid ? this.c.minute : NaN; }

  get second() { return this.isValid ? this.c.second : NaN; }

  get millisecond() { return this.isValid ? this.c.millisecond : NaN; }

  get weekYear() { return this.isValid ? br(this).weekYear : NaN; }

  get weekNumber() { return this.isValid ? br(this).weekNumber : NaN; }

  get weekday() { return this.isValid ? br(this).weekday : NaN; }

  get ordinal() { return this.isValid ? wr(this.c).ordinal : NaN; }

  get monthShort() { return this.isValid ? Ht.months('short', { locObj: this.loc })[this.month - 1] : null; }

  get monthLong() { return this.isValid ? Ht.months('long', { locObj: this.loc })[this.month - 1] : null; }

  get weekdayShort() { return this.isValid ? Ht.weekdays('short', { locObj: this.loc })[this.weekday - 1] : null; }

  get weekdayLong() { return this.isValid ? Ht.weekdays('long', { locObj: this.loc })[this.weekday - 1] : null; }

  get offset() { return this.isValid ? +this.o : NaN; }

  get offsetNameShort() { return this.isValid ? this.zone.offsetName(this.ts, { format: 'short', locale: this.locale }) : null; }

  get offsetNameLong() { return this.isValid ? this.zone.offsetName(this.ts, { format: 'long', locale: this.locale }) : null; }

  get isOffsetFixed() { return this.isValid ? this.zone.isUniversal : null; }

  get isInDST() { return !this.isOffsetFixed && (this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset); }

  get isInLeapYear() { return R(this.year); }

  get daysInMonth() { return Y(this.year, this.month); }

  get daysInYear() { return this.isValid ? J(this.year) : NaN; }

  get weeksInWeekYear() { return this.isValid ? G(this.weekYear) : NaN; }

  resolvedLocaleOptions(e = {}) { var { locale: t, numberingSystem: r, calendar: e } = pe.create(this.loc.clone(e), e).resolvedOptions(this); return { locale: t, numberingSystem: r, outputCalendar: e }; }

  toUTC(e = 0, t = {}) { return this.setZone(Ve.instance(e), t); }

  toLocal() { return this.setZone(Ae.defaultZone); }

  setZone(t, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) { if ((t = xe(t, Ae.defaultZone)).equals(this.zone)) return this; if (t.isValid) { let e = this.ts; return (r || n) && (r = t.offset(this.ts), n = this.toObject(), [e] = Dr(n, r, t)), kr(this, { ts: e, zone: t }); } return Hr.invalid(Or(t)); }

  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) { r = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r }); return kr(this, { loc: r }); }

  setLocale(e) { return this.reconfigure({ locale: e }); }

  set(e) { if (!this.isValid) return this; var t = ee(e, jr); var r = !F(t.weekYear) || !F(t.weekNumber) || !F(t.weekday); const n = !F(t.ordinal); const s = !F(t.year); const i = !F(t.month) || !F(t.day); var e = t.weekYear || t.weekNumber; if ((s || i || n) && e) throw new N("Can't mix weekYear/weekNumber units with year/month/day or ordinals"); if (i && n) throw new N("Can't mix ordinal dates with month/day"); let a; r ? a = gr({ ...yr(this.c), ...t }) : F(t.ordinal) ? (a = { ...this.toObject(), ...t }, F(t.day) && (a.day = Math.min(Y(a.year, a.month), a.day))) : a = vr({ ...wr(this.c), ...t }); var [r, t] = Dr(a, this.o, this.zone); return kr(this, { ts: r, o: t }); }

  plus(e) { return this.isValid ? kr(this, Er(this, _t.fromDurationLike(e))) : this; }

  minus(e) { return this.isValid ? kr(this, Er(this, _t.fromDurationLike(e).negate())) : this; }

  startOf(e) { if (!this.isValid) return this; const t = {}; const r = _t.normalizeUnit(e); switch (r) { case 'years': t.month = 1; case 'quarters': case 'months': t.day = 1; case 'weeks': case 'days': t.hour = 0; case 'hours': t.minute = 0; case 'minutes': t.second = 0; case 'seconds': t.millisecond = 0; } return r === 'weeks' && (t.weekday = 1), r === 'quarters' && (e = Math.ceil(this.month / 3), t.month = 3 * (e - 1) + 1), this.set(t); }

  endOf(e) { return this.isValid ? this.plus({ [e]: 1 }).startOf(e).minus(1) : this; }

  toFormat(e, t = {}) { return this.isValid ? pe.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : Sr; }

  toLocaleString(e = c, t = {}) { return this.isValid ? pe.create(this.loc.clone(t), e).formatDateTime(this) : Sr; }

  toLocaleParts(e = {}) { return this.isValid ? pe.create(this.loc.clone(e), e).formatDateTimeParts(this) : []; }

  toISO({
    format: e = 'extended', suppressSeconds: t = !1, suppressMilliseconds: r = !1, includeOffset: n = !0, extendedZone: s = !1,
  } = {}) { if (!this.isValid) return null; const i = e === 'extended'; var e = xr(this, i); return e += 'T', e += Cr(this, i, t, r, n, s); }

  toISODate({ format: e = 'extended' } = {}) { return this.isValid ? xr(this, e === 'extended') : null; }

  toISOWeekDate() { return Ir(this, "kkkk-'W'WW-c"); }

  toISOTime({
    suppressMilliseconds: e = !1, suppressSeconds: t = !1, includeOffset: r = !0, includePrefix: n = !1, extendedZone: s = !1, format: i = 'extended',
  } = {}) { return this.isValid ? (n ? 'T' : '') + Cr(this, i === 'extended', t, e, r, s) : null; }

  toRFC2822() { return Ir(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1); }

  toHTTP() { return Ir(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'"); }

  toSQLDate() { return this.isValid ? xr(this, !0) : null; }

  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: r = !0 } = {}) { let n = 'HH:mm:ss.SSS'; return (t || e) && (r && (n += ' '), t ? n += 'z' : e && (n += 'ZZ')), Ir(this, n, !0); }

  toSQL(e = {}) { return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null; }

  toString() { return this.isValid ? this.toISO() : Sr; }

  valueOf() { return this.toMillis(); }

  toMillis() { return this.isValid ? this.ts : NaN; }

  toSeconds() { return this.isValid ? this.ts / 1e3 : NaN; }

  toUnixInteger() { return this.isValid ? Math.floor(this.ts / 1e3) : NaN; }

  toJSON() { return this.toISO(); }

  toBSON() { return this.toJSDate(); }

  toObject(e = {}) { if (!this.isValid) return {}; const t = { ...this.c }; return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t; }

  toJSDate() { return new Date(this.isValid ? this.ts : NaN); }

  diff(e, t = 'milliseconds', r = {}) { if (!this.isValid || !e.isValid) return _t.invalid('created by diffing an invalid DateTime'); r = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }; const n = (t = t, (Array.isArray(t) ? t : [t]).map(_t.normalizeUnit)); const s = e.valueOf() > this.valueOf(); const i = s ? this : e; const a = s ? e : this; const o = Rt(i, a, n, r); return s ? o.negate() : o; }

  diffNow(e = 'milliseconds', t = {}) { return this.diff(Hr.now(), e, t); }

  until(e) { return this.isValid ? $t.fromDateTimes(this, e) : this; }

  hasSame(e, t) { if (!this.isValid) return !1; const r = e.valueOf(); const n = this.setZone(e.zone, { keepLocalTime: !0 }); return n.startOf(t) <= r && r <= n.endOf(t); }

  equals(e) { return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc); }

  toRelative(e = {}) {
    if (!this.isValid) return null; const t = e.base || Hr.fromObject({}, { zone: this.zone }); const r = e.padding ? this < t ? -e.padding : e.padding : 0; let n = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']; let s = e.unit; return Array.isArray(e.unit) && (n = e.unit, s = void 0), Ur(t, this.plus(r), {
      ...e, numeric: 'always', units: n, unit: s,
    });
  }

  toRelativeCalendar(e = {}) {
    return this.isValid ? Ur(e.base || Hr.fromObject({}, { zone: this.zone }), this, {
      ...e, numeric: 'auto', units: ['years', 'months', 'days'], calendary: !0,
    }) : null;
  }

  static min(...e) { if (!e.every(Hr.isDateTime)) throw new o('min requires all arguments be DateTimes'); return q(e, (e) => e.valueOf(), Math.min); }

  static max(...e) { if (!e.every(Hr.isDateTime)) throw new o('max requires all arguments be DateTimes'); return q(e, (e) => e.valueOf(), Math.max); }

  static fromFormatExplain(e, t, r = {}) { var { locale: n = null, numberingSystem: r = null } = r; return ur(Ge.fromOpts({ locale: n, numberingSystem: r, defaultToEN: !0 }), e, t); }

  static fromStringExplain(e, t, r = {}) { return Hr.fromFormatExplain(e, t, r); }

  static get DATE_SHORT() { return c; }

  static get DATE_MED() { return h; }

  static get DATE_MED_WITH_WEEKDAY() { return d; }

  static get DATE_FULL() { return m; }

  static get DATE_HUGE() { return f; }

  static get TIME_SIMPLE() { return y; }

  static get TIME_WITH_SECONDS() { return g; }

  static get TIME_WITH_SHORT_OFFSET() { return w; }

  static get TIME_WITH_LONG_OFFSET() { return v; }

  static get TIME_24_SIMPLE() { return p; }

  static get TIME_24_WITH_SECONDS() { return T; }

  static get TIME_24_WITH_SHORT_OFFSET() { return S; }

  static get TIME_24_WITH_LONG_OFFSET() { return O; }

  static get DATETIME_SHORT() { return b; }

  static get DATETIME_SHORT_WITH_SECONDS() { return k; }

  static get DATETIME_MED() { return M; }

  static get DATETIME_MED_WITH_SECONDS() { return D; }

  static get DATETIME_MED_WITH_WEEKDAY() { return E; }

  static get DATETIME_FULL() { return V; }

  static get DATETIME_FULL_WITH_SECONDS() { return I; }

  static get DATETIME_HUGE() { return x; }

  static get DATETIME_HUGE_WITH_SECONDS() { return C; }
} function Wr(e) { if (Hr.isDateTime(e)) return e; if (e && e.valueOf && Z(e.valueOf())) return Hr.fromJSDate(e); if (e && typeof e === 'object') return Hr.fromObject(e); throw new o(`Unknown datetime argument: ${e}, of type ${typeof e}`); }et = '2.4.0'; export {
  Hr as DateTime, _t as Duration, Ve as FixedOffsetZone, De as IANAZone, Ht as Info, $t as Interval, Ie as InvalidZone, Ae as Settings, be as SystemZone, et as VERSION, Se as Zone,
};