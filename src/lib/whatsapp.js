import { info } from '../data/info'

// No backend: forms build a pre-filled WhatsApp message to the café's number.
export function sendToWhatsApp(heading, fields) {
  const lines = [heading, '', ...fields.filter(([, v]) => v).map(([k, v]) => `*${k}:* ${v}`)]
  const url = `${info.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
  window.open(url, '_blank', 'noopener')
}

// Indian mobile numbers, optionally with +91 / spaces / dashes
export const phoneProps = {
  type: 'tel',
  inputMode: 'tel',
  autoComplete: 'tel',
  pattern: '^(\\+?91[\\-\\s]?)?[6-9]\\d{4}[\\-\\s]?\\d{5}$',
  title: 'Enter a 10-digit mobile number, e.g. 98765 43210',
}

// Pre-filled WhatsApp chat link (for "notify me" style buttons)
export const whatsappLink = (text) => `${info.whatsapp}?text=${encodeURIComponent(text)}`
