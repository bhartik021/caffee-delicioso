export function Field({ as: Tag = 'label', label, children, className = '' }) {
  return (
    <Tag className={`block ${className}`}>
      <span className="label">{label}</span>
      {children}
    </Tag>
  )
}
