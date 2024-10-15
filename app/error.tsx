'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <p>오류 발생!</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
