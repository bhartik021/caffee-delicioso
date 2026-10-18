import { useId } from 'react'

// Solid coffee bean with an S-shaped crease, modelled on the bean in the logo.
// eslint-disable-next-line no-unused-vars
export function Bean({ className = '', strokeWidth, ...rest }) {
  const id = `bean${useId().replace(/:/g, '')}`
  return (
    <svg viewBox="0 0 24 32" className={className} fill="currentColor" aria-hidden="true" {...rest}>
      <defs>
        <mask id={id}>
          <rect width="24" height="32" fill="#fff" />
          <path d="M12.6 3.2c-3.4 4.4-3.4 8 0 12.8s3.4 8.4 0 12.8" fill="none" stroke="#000" strokeWidth="2.3" strokeLinecap="round" />
        </mask>
      </defs>
      <ellipse cx="12" cy="16" rx="10.5" ry="14.5" mask={`url(#${id})`} />
    </svg>
  )
}

// Decorative divider: line · coffee bean · line
export default function Ornament({ className = '', tone = 'text-brand-400' }) {
  return (
    <div className={className} aria-hidden="true">
      <span className={`inline-flex items-center gap-3 ${tone}`}>
        <span className="h-px w-12 bg-current opacity-60" />
        <Bean className="h-5 w-4 -rotate-12" />
        <span className="h-px w-12 bg-current opacity-60" />
      </span>
    </div>
  )
}
