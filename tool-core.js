/* India Tools v0.8 — deterministic browser-only calculations. */
(function (root) {
  'use strict';
  const DAY = 86400000;
  function date(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw Error('Choose a valid date.');
    const [y, m, d] = value.split('-').map(Number), result = new Date(Date.UTC(y, m - 1, d));
    if (y < 1900 || y > 2100 || result.getUTCFullYear() !== y || result.getUTCMonth() !== m - 1 || result.getUTCDate() !== d) throw Error('Choose a valid date between 1900 and 2100.');
    return result;
  }
  const iso = value => value.toISOString().slice(0, 10);
  function finite(value) { if (String(value).trim() === '' || !Number.isFinite(Number(value))) throw Error('Enter a valid number.'); return Number(value); }
  function checked(value) { if (!Number.isFinite(value)) throw Error('The result is too large. Try smaller numbers.'); return value; }
  function days(a, b) { return Math.round((date(b) - date(a)) / DAY); }
  function shift(value, amount) {
    amount = finite(amount);
    if (!Number.isInteger(amount) || Math.abs(amount) > 73413) throw Error('Enter a whole number of days within the supported range.');
    const result = new Date(+date(value) + amount * DAY), output = iso(result); date(output); return output;
  }
  function age(birth, asOf) {
    const a = date(birth), b = date(asOf); if (b < a) throw Error('The comparison date must be on or after the birth date.');
    const anchor = months => {
      const first = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth() + months, 1));
      const last = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + 1, 0)).getUTCDate();
      first.setUTCDate(Math.min(a.getUTCDate(), last)); return first;
    };
    let months = (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + b.getUTCMonth() - a.getUTCMonth();
    if (anchor(months) > b) months--;
    return { years: Math.floor(months / 12), months: months % 12, days: Math.round((b - anchor(months)) / DAY), totalDays: days(birth, asOf) };
  }
  function percentage(rate, amount) { return checked(finite(rate) / 100 * finite(amount)); }
  function change(before, after) {
    before = finite(before); after = finite(after);
    if (before <= 0 || after < 0) throw Error('Use a starting value above zero and a new value of zero or more.');
    return checked((after - before) / before * 100);
  }
  const units = {
    length: { m: ['Metres', 1], km: ['Kilometres', 1000], cm: ['Centimetres', 0.01], mm: ['Millimetres', 0.001], ft: ['Feet', 0.3048], in: ['Inches', 0.0254], yd: ['Yards', 0.9144], mi: ['Miles', 1609.344] },
    mass: { kg: ['Kilograms', 1], g: ['Grams', 0.001], lb: ['Pounds', 0.45359237], oz: ['Ounces', 0.028349523125] },
    temperature: { C: ['Celsius (°C)'], F: ['Fahrenheit (°F)'], K: ['Kelvin (K)'] }
  };
  function convert(value, category, from, to) {
    value = finite(value); const group = units[category];
    if (!group?.[from] || !group?.[to]) throw Error('Choose compatible units.');
    if (category !== 'temperature') return checked(value * group[from][1] / group[to][1]);
    const c = from === 'C' ? value : from === 'F' ? (value - 32) * 5 / 9 : value - 273.15;
    if (c < -273.15 - 1e-10) throw Error('Temperature cannot be below absolute zero.');
    return checked(to === 'C' ? c : to === 'F' ? c * 9 / 5 + 32 : c + 273.15);
  }
  function formatNumber(value, locale) {
    value = String(value).trim();
    if (!/^[+-]?\d{1,30}(\.\d{1,12})?$/.test(value)) throw Error('Use digits without commas: up to 30 whole digits and 12 decimal places.');
    const [whole, fraction] = value.split('.'); const sign = whole.startsWith('-') ? '-' : '';
    const grouped = BigInt(whole.replace(/^[+-]/, '')).toLocaleString(locale === 'en-IN' ? 'en-IN' : 'en-US');
    return sign + grouped + (fraction ? '.' + fraction : '');
  }
  function textStats(value) {
    const lines = value ? value.split(/\r?\n/).length : 0;
    if (typeof Intl.Segmenter === 'function') {
      const words = Array.from(new Intl.Segmenter('en', { granularity: 'word' }).segment(value)).filter(s => s.isWordLike).length;
      const chars = Array.from(new Intl.Segmenter('en', { granularity: 'grapheme' }).segment(value)).length;
      return { words, chars, lines };
    }
    return { words: (value.match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu) || []).length, chars: Array.from(value).length, lines };
  }
  function cleanText(value) { return value.replace(/\r\n/g, '\n').split('\n').map(line => line.trim().replace(/[\t ]+/g, ' ')).join('\n').replace(/\n{3,}/g, '\n\n').trim(); }
  const core = { date, iso, days, shift, age, percentage, change, units, convert, formatNumber, textStats, cleanText };
  if (typeof module === 'object' && module.exports) module.exports = core; else root.IndiaTools = core;
})(typeof globalThis !== 'undefined' ? globalThis : this);
