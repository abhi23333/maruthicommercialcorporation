'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700)
    return () => clearTimeout(t)
  }, [])

  if (done) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      style={{ animation: 'mcc-loader-out 1.7s ease forwards' }}
      aria-hidden
    >
      <div style={{ animation: 'mcc-pop 0.7s cubic-bezier(0.16,1,0.3,1) forwards' }}>
        <Image
          src="/mcc-logo.jpeg"
          alt=""
          width={280}
          height={166}
          priority
          className="h-auto w-52 md:w-64"
        />
      </div>
      <div className="mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-cloud">
        <div
          className="h-full w-full origin-left rounded-full bg-gradient-to-r from-mcc-red to-mcc-blue"
          style={{ animation: 'mcc-bar 1.4s cubic-bezier(0.65,0,0.35,1) forwards' }}
        />
      </div>
    </div>
  )
}
