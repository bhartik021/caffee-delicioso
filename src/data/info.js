export const info = {
  name: 'Caffee Delicioso',
  tagline: 'Coffee, Shake, Beverages',
  phone: '+91 75076 57070',
  phoneRaw: '+917507657070',
  whatsapp: 'https://wa.me/917507657070',
  hoursText: '8:45 AM – 2:00 AM',
  hoursDetail: 'Every day · 8:45 AM till 2:00 AM (past midnight)',
}

export const outlets = [
  {
    id: 'pan-card-club',
    name: 'Pan Card Club Road',
    address: 'Shop 1, Pride Valencia Apartment, Pan Card Club Road, Baner, Pune 411045',
    // Exact pin for the café (OpenStreetMap)
    coords: [18.5597322, 73.7811959],
  },
  {
    id: 'balewadi',
    name: 'Near Balewadi High Street',
    address: 'Survey No. 135, Lane 5, Ram Indu Park, Plot No. 128, Baner, Pune',
    // Ram Indu Park, Baner — near Balewadi High Street (OpenStreetMap)
    coords: [18.5678252, 73.7778246],
  },
]

export const mapEmbedUrl = ([lat, lng]) => `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`
export const directionsUrl = ([lat, lng]) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`

// Open 8:45 AM → 2:00 AM next day, evaluated in India time (IST).
export function isOpenNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(date)
  const h = Number(parts.find((p) => p.type === 'hour').value) % 24
  const m = Number(parts.find((p) => p.type === 'minute').value)
  const mins = h * 60 + m
  return mins >= 8 * 60 + 45 || mins < 2 * 60
}

// Today's weekday in India time, 0 = Sunday … 6 = Saturday
export function todayIST(date = new Date()) {
  const wd = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', weekday: 'short' }).format(date)
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(wd)
}
