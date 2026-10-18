// Music nights currently on the calendar. Leave empty when nothing is scheduled —
// the Events page and home card then show a "coming soon" state automatically.
// To publish events, copy entries from `exampleEvents` below into this list and edit them.
export const events = []

// weekday: 0 = Sunday … 6 = Saturday. `monthly: 'last'` means the last such weekday of each month.
import { Guitar, MicVocal, Piano, Users } from 'lucide-react'
import { img } from './images.js'

export const exampleEvents = [
  {
    title: 'Karaoke Night',
    weekday: 3,
    time: '8:00 PM',
    hour: 20,
    when: 'Every Wednesday',
    where: 'Both outlets',
    text: 'Bollywood, pop, rock or retro — pick your song, bring your squad and sing your heart out.',
    tag: 'Weekly',
    image: img.stageMic(800),
  },
  {
    title: 'Open Mic Fridays',
    weekday: 5,
    time: '8:00 PM',
    hour: 20,
    when: 'Every Friday',
    where: 'Pan Card Club Road',
    text: 'Singers, rappers, musicians — sign up at the counter, grab the mic and own the night.',
    tag: 'Weekly',
    image: img.vintageMic(800),
  },
  {
    title: 'Acoustic Unplugged',
    weekday: 6,
    time: '8:30 PM',
    hour: 20.5,
    when: 'Every Saturday',
    where: 'Near Balewadi High Street',
    text: 'Live acoustic sets from local artists — just a guitar, a voice and your favourite cold coffee.',
    tag: 'Weekly',
    image: img.acousticGuitar(800),
  },
  {
    title: 'Retro Sing-Along',
    weekday: 0,
    monthly: 'last',
    time: '7:00 PM',
    hour: 19,
    when: 'Last Sunday of the month',
    where: 'Both outlets',
    text: 'Kishore, Lata, R.D. Burman and more — an evening of golden-era classics everyone knows the words to.',
    tag: 'Monthly',
    image: img.piano(800),
  },
]

// Next date this event happens (today counts until its start time has passed).
export function nextOccurrence(ev, now = new Date()) {
  const start = new Date(now)
  start.setHours(Math.floor(ev.hour), (ev.hour % 1) * 60, 0, 0)
  for (let i = 0; i < 70; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    if (d.getDay() !== ev.weekday || d < now) continue
    if (ev.monthly === 'last') {
      const nextWeek = new Date(d)
      nextWeek.setDate(d.getDate() + 7)
      if (nextWeek.getMonth() === d.getMonth()) continue
    }
    return d
  }
  return null
}

export function relativeDay(date, now = new Date()) {
  const a = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const b = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const days = Math.round((b - a) / 86400000)
  if (days === 0) return 'Tonight'
  if (days === 1) return 'Tomorrow'
  return `In ${days} days`
}

export const performers = [
  { icon: MicVocal, title: 'Singers', text: 'Solo vocalists of every genre — Bollywood, indie, pop, ghazal.' },
  { icon: Guitar, title: 'Guitarists', text: 'Acoustic sets, covers or your own originals.' },
  { icon: Users, title: 'Duos & Bands', text: 'Small acoustic bands and duos that fit a cosy café stage.' },
  { icon: Piano, title: 'Instrumentalists', text: 'Keys, cajón, ukulele, flute — bring what you play.' },
]
