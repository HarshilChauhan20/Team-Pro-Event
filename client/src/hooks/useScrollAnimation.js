import { useEffect, useRef, useState } from 'react'

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element becomes visible
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Optional: unobserve after first appearance
          // observer.unobserve(entry.target)
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger when element is 50px from bottom of viewport
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  return [elementRef, isVisible]
}

export default useScrollAnimation