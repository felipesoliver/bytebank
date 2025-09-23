/**
 * Example usage:
 *
 * import { getScrollPosition } from '~/utils/scroll-position'
 *
 * useEffect(() => {
 *   return getScrollPosition((scrollPosition) => doSomething(scrollPosition))
 * }, [])
*/

type ScrollCallback = (scrollY: number) => void

export const getScrollPosition: (callback: ScrollCallback) => void = (callback) => {
  const updatePosition = () => {
    const scrollY = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
    callback(scrollY)
  }
  updatePosition()

  window.addEventListener('scroll', updatePosition)

  return () => {
    window.removeEventListener('scroll', updatePosition)
  }
}
