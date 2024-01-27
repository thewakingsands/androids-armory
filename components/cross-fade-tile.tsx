import Link from 'next/link'
import { ClassJob024 } from '../app/_components/_app-icons'

export function CrossFadeTile() {
  return (
    <Link href="/" className="block">
      <div className="group/tile relative w-48 h-72 text-white">
        <div className="absolute bg-green-500 w-full h-full scale-90"></div>
        <div className="group/back absolute w-full h-full opacity-100 group-hover/tile:opacity-0 transition-opacity">
          <div className="w-full h-full flex justify-center items-center">
            <ClassJob024 />
          </div>
        </div>
        <div className="group/front absolute w-full h-full opacity-0 group-hover/tile:opacity-100 transition-opacity">
          <div className="transition-transform group-hover/tile:translate-y-0 -translate-y-6">
            <img src="https://i.imgur.com/8bUl3zW.png"></img>
          </div>
          <div className="transition-transform group-hover/tile:translate-y-0 translate-y-6 absolute bottom-12 w-full">
            <div className="w-full text-2xl px-4 py-2 scale-90 bg-green-500 text-center">白魔法师</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
