import { createRef, useEffect } from 'react'

const useClickAway = (callback: () => any) => {
  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current) {
        const isClickAway = !ref.current.contains(e.target as Node)

        if (isClickAway) {
          callback()
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })

  return ref
}

export default useClickAway
