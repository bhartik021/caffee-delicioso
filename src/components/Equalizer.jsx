export default function Equalizer({ className = '' }) {
  const bars = [0.55, 0.9, 0.4, 1, 0.65, 0.8, 0.45, 0.95, 0.6]
  return (
    <div className={`flex h-10 items-end gap-1 ${className}`} aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1.5 origin-bottom animate-eq rounded-full bg-brand-200"
          style={{ height: `${h * 100}%`, animationDelay: `${i * 0.13}s` }}
        />
      ))}
    </div>
  )
}
