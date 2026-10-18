import { Link, useLocation } from 'react-router-dom'
import { scrollToHash } from '../lib/scroll'

// <Link> that also scrolls when clicked again while already on that #section
export default function HashLink({ to, onClick, ...rest }) {
  const location = useLocation()
  return (
    <Link
      to={to}
      onClick={(e) => {
        onClick?.(e)
        scrollToHash(to, location)
      }}
      {...rest}
    />
  )
}
