import Link from 'next/link'
import { ClassJob024 } from '../app/_components/_app-icons'
import React from 'react'

export function CrossFadeTile({
  label,
  img,
  icon,
  color,
}: {
  label: React.ReactNode
  img: React.ReactNode
  icon: React.ReactNode
  color: string
}) {
  return (
    <Link href="/" className="flex justify-center h-unit-72 w-full">
      <div className="group/tile relative w-full text-white">
        <div className="absolute w-full h-full scale-90" style={{ backgroundColor: color }}></div>
        <div className="group/back absolute w-full h-full opacity-100 group-hover/tile:opacity-0 group-hover/tile:-translate-y-6 transition-all">
          <div className="w-full h-full flex justify-center items-center *:w-28">{icon}</div>
        </div>
        <div className="group/front absolute w-full h-full opacity-0 group-hover/tile:opacity-100 transition-opacity group-hover/tile:z-10">
          <div className="transition-transform group-hover/tile:translate-y-0 -translate-y-6 h-full pointer-events-none">
            {img}
          </div>
          <div className="transition-transform group-hover/tile:translate-y-0 translate-y-6 absolute bottom-12 w-full">
            <div
              className="w-full text-2xl px-4 py-2 scale-90 text-center font-bold"
              style={{ textShadow: '0px 0px 2px black' }}
            >
              {label}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
