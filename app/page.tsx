import Link from 'next/link'
import { HomePageH1 } from './_components/HomePageH1'
import { HomePageMainArm } from './_components/HomePageMainArm'
import { HomePageTilesRow } from './_components/HomePageTilesRow'
import {
  ArmouryBody,
  ArmouryBracelets,
  ArmouryEarrings,
  ArmouryFeet,
  ArmouryHands,
  ArmouryHead,
  ArmouryLegs,
  ArmouryMainArm,
  ArmouryNecklace,
  ArmouryRing,
  ItemCategoryDye,
  ItemCategorySoulCrystal,
} from './_components/_app-icons'
import { armouryCategory } from './_constants/armouryCategory'
import { Divider } from '@nextui-org/react'
import { AALogo } from '../components/aa-logo'

const homePageItemCategory = [
  { icon: <ArmouryHead />, label: '头部防具', id: 'head' },
  { icon: <ArmouryBody />, label: '身体防具', id: 'body' },
  { icon: <ArmouryHands />, label: '手部防具', id: 'hands' },
  { icon: <ArmouryLegs />, label: '腿部防具', id: 'legs' },
  { icon: <ArmouryFeet />, label: '脚部防具', id: 'feet' },
  { icon: <ArmouryEarrings />, label: '耳环', id: 'earrings' },
  { icon: <ArmouryNecklace />, label: '项链', id: 'necklace' },
  { icon: <ArmouryBracelets />, label: '手镯', id: 'bracelets' },
  { icon: <ArmouryRing />, label: '戒指', id: 'ring' },
  { icon: <ItemCategoryDye />, label: '染剂', id: 'dye' },
  { icon: <ItemCategorySoulCrystal />, label: '时尚配饰', id: 'fashion' },
]

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  return (
    <div>
      <main className="max-w-5xl mx-auto">
        <HomePageH1>系列</HomePageH1>
        <HomePageTilesRow
          tiles={armouryCategory.map((c) => ({
            label: c.title,
            img: c.img,
            imgAlt: c.title,
            icon: c.icon,
            color: c.color,
            _key: c.key,
          }))}
        />
        <HomePageH1>武器</HomePageH1>
        <HomePageMainArm />
        <HomePageH1>类型</HomePageH1>
        <div className="flex flex-wrap justify-center">
          {homePageItemCategory.map((cate) => (
            <Link href="/" className="group relative" key={cate.id}>
              <div className="w-16 h-16 p-4 mt-2 mb-1 text-slate-500 transition-all origin-bottom group-hover:scale-150 group-hover:text-primary-500">
                {cate.icon}
              </div>
              <div className="text-center absolute bottom-0 w-full transition-all scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                {cate.label}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="mt-4 pb-6 bg-slate-100">
        <Divider />
        <div className="max-w-5xl mx-auto px-4 pt-4">
          <div className="mt-4 opacity-60">
            <AALogo />
          </div>
          <div className="text-xs mt-2">
            <p>FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.</p>
            <p>FINAL FANTASY XIV © 2010 - {new Date().getFullYear()} SQUARE ENIX CO., LTD. All Rights Reserved.</p>
          </div>
          <div className="text-xs mt-2">
            <p>
              Hosted by{' '}
              <a href="https://www.ffcafe.cn" rel="noopenner" target="_blank">
                FFCAFE
              </a>
              , photographed by NIGHTINGALE.
            </p>
            <p>Contact: yunze (at) wakingsands (dot) com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
