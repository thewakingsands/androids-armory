import { HomePageH1 } from './_components/HomePageH1'
import { HomePageMainArm } from './_components/HomePageMainArm'
import { HomePageTilesRow } from './_components/HomePageTilesRow'
import { armouryCategory, armouryCategoryRecord } from './_constants/armouryCategory'

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  return (
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
      ></HomePageTilesRow>
      <HomePageH1>武器</HomePageH1>
      <HomePageMainArm></HomePageMainArm>
      <HomePageH1>部位</HomePageH1>
      <HomePageH1>专题</HomePageH1>
    </main>
  )
}
