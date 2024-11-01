import { useEffect, useState } from 'react'

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    function handleScroll() {
      setScrollPosition({ x: window.scrollX, y: window.scrollY })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

export default useScroll
