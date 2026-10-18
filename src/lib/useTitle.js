import { useEffect } from 'react'

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Caffee Delicioso` : 'Caffee Delicioso | Coffee, Shakes & Beverages in Baner, Pune'
  }, [title])
}
