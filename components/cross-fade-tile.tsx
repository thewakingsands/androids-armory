import Link from 'next/link'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

export function CrossFadeTile({
  label,
  img,
  imgAlt,
  icon,
  color,
}: {
  label: React.ReactNode
  img: StaticImageData
  imgAlt: string
  icon: React.ReactNode
  color: string
}) {
  return (
    <Link href="/" className="flex justify-center h-72 w-full">
      <div className="group/tile relative w-full text-white">
        <div className="absolute w-full h-full scale-90" style={{ backgroundColor: color }}></div>
        <div className="group/back absolute w-full h-full opacity-100 group-hover/tile:opacity-0 group-hover/tile:-translate-y-6 transition-all">
          <div className="w-full h-full flex justify-center items-center *:w-28">{icon}</div>
        </div>
        <div className="group/front absolute w-full h-full opacity-0 group-hover/tile:opacity-100 transition-opacity group-hover/tile:z-10">
          <div className="transition-transform group-hover/tile:translate-y-0 -translate-y-6 h-full pointer-events-none">
            <div className="absolute h-full w-auto bg-contain bg-center bg-no-repeat -left-20 -right-20">
              <Image
                className="object-contain hidden group-hover/tile:block"
                placeholder="data:image/svg+xml,%3Csvg width='96' height='96' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.s%7Banimation:a 1.2s cubic-bezier(0.52,.6,.25,.99) infinite%7D@keyframes a%7B0%25%7Br:0;opacity:1%7D100%25%7Br:11px;opacity:0%7D%7D%3C/style%3E%3Ccircle class='s' cx='48' cy='40' r='0' fill='%23fff'/%3E%3C/svg%3E"
                src={img}
                fill
                alt={imgAlt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="transition-transform group-hover/tile:translate-y-0 translate-y-6 absolute bottom-12 w-full">
            <div
              className="w-full text-2xl py-2 scale-90 text-center font-bold"
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
