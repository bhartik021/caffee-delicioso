// Open positions. Leave empty when not hiring — the Careers page and home card then switch to a
// "join our talent list" state automatically. To post a job, copy an entry from `exampleRoles` below.
import { CalendarCheck, Clock, Coffee, GraduationCap, HeartHandshake, MessageCircle, PartyPopper, Smile, TrendingUp } from 'lucide-react'

export const roles = []

export const exampleRoles = [
  {
    title: 'Barista',
    type: 'Full-time',
    shift: 'Morning / Evening',
    summary: 'Pull great espresso, steam silky milk and craft our frappés and shakes.',
    duties: [
      'Prepare espresso drinks, frappés, shakes and mojitos to recipe',
      'Keep the bar clean, stocked and running smoothly at rush hour',
      'Chat with guests and recommend their next favourite drink',
    ],
    fit: ['Love coffee (no experience? we will train you)', 'Quick hands and a friendly smile', 'Comfortable with evening shifts'],
  },
  {
    title: 'Café Server',
    type: 'Full-time / Part-time',
    shift: 'Flexible',
    summary: 'Welcome guests, take orders and keep the café feeling warm and welcoming.',
    duties: ['Greet guests and take orders at the counter and tables', 'Serve drinks and keep tables tidy', 'Handle billing and UPI payments'],
    fit: ['Polite and good with people', 'Basic English and Hindi / Marathi', 'Students welcome for part-time'],
  },
  {
    title: 'Shift Supervisor',
    type: 'Full-time',
    shift: 'Evening / Late night',
    summary: 'Lead the team on shift and make sure every guest leaves happy.',
    duties: ['Run the shift and guide the team', 'Manage stock, cash and daily closing', 'Handle guest feedback and keep quality consistent'],
    fit: ['1+ year in a café or restaurant', 'Calm under pressure', 'Comfortable with closing at 2 AM'],
  },
  {
    title: 'Kitchen & Prep Assistant',
    type: 'Full-time',
    shift: 'Rotational',
    summary: 'Keep ingredients prepped, the bar stocked and everything spotless.',
    duties: ['Prep syrups, toppings and garnishes', 'Restock the bar and storage', 'Maintain hygiene and cleanliness standards'],
    fit: ['Organised and hard-working', 'Takes pride in a clean workspace', 'Freshers welcome'],
  },
]

// Shown in the application form when there are no open roles
export const interestAreas = ['Barista', 'Café Server', 'Shift Supervisor', 'Kitchen & Prep', 'Any role']

export const perks = [
  { icon: Coffee, title: 'Free drinks on shift', text: 'Taste everything you make — that’s part of the job.' },
  { icon: Clock, title: 'Flexible shifts', text: 'Morning, evening and late-night slots to fit your life.' },
  { icon: TrendingUp, title: 'Grow with us', text: 'Room to move up as we open more outlets.' },
  { icon: HeartHandshake, title: 'A team that has your back', text: 'Friendly crew, fair treatment and a fun vibe.' },
]

export const featuredPerk = {
  icon: GraduationCap,
  title: 'Real barista training',
  text: 'Learn espresso extraction, milk texturing and latte art from day one — skills that stay with you for life.',
}

export const steps = [
  { icon: MessageCircle, title: 'Apply on WhatsApp', text: 'Fill the form below — it takes a minute.' },
  { icon: Smile, title: 'Quick chat', text: 'We call you for a short, friendly conversation.' },
  { icon: CalendarCheck, title: 'Trial shift', text: 'Spend a few hours with the team at the café.' },
  { icon: PartyPopper, title: 'Welcome aboard', text: 'Get your apron and start brewing!' },
]
