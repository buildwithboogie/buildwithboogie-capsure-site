// Small helpers used across the site. You shouldn't need to edit this.

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// Turns "[X] of 50" into safe HTML with the [X] part highlighted,
// so unfinished placeholders are impossible to miss on the page.
export const ph = (text) =>
  escapeHtml(text).replace(/\[[^\]]+\]/g, (m) => `<mark class="ph">${m}</mark>`);

// True when a value has been filled in (not empty, not a [PLACEHOLDER]).
export const isSet = (v) => typeof v === 'string' && v.trim() !== '' && !/\[[^\]]+\]/.test(v);

export const telHref = (phone) => 'tel:' + String(phone).replace(/[^\d+]/g, '');
