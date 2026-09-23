import { CONTACT } from './data';

export function makeRef(prefix) {
  return prefix + '-' + Date.now().toString().slice(-6);
}

/**
 * Submits an order by composing a fully itemised email.
 * Swap this for a POST to an API route to take payment online.
 */
export function submitOrder({ subject, body }) {
  const href = 'mailto:' + CONTACT.emails[0]
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);
  if (typeof window !== 'undefined') window.location.href = href;
}

export function itemLines(items, withCode) {
  return items.map(x => '  • ' + (withCode && x.code ? x.code + '  ' : '') + x.name + '  × ' + x.qty).join('\n');
}
