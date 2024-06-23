import { HomePageH1 } from './_components/HomePageH1'
import { HomePageMainArm } from './_components/HomePageMainArm'
import { HomePageTilesRow } from './_components/HomePageTilesRow'
import { armouryCategoryRecord } from './_constants/armouryCategory'

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  return (
    <main className="max-w-5xl mx-auto">
      <HomePageH1>系列</HomePageH1>
      <HomePageTilesRow
        tiles={[
          {
            label: armouryCategoryRecord['main-arm'].title,
            img: armouryCategoryRecord['main-arm'].img,
            imgAlt: armouryCategoryRecord['main-arm'].title,
            icon: armouryCategoryRecord['main-arm'].icon,
            color: '#726e6d',
            _key: 'main-arm',
          },
          {
            label: armouryCategoryRecord['body'].title,
            img: armouryCategoryRecord['body'].img,
            imgAlt: armouryCategoryRecord['body'].title,
            icon: armouryCategoryRecord['body'].icon,
            color: '#83291e',
            _key: 'body',
          },
          {
            label: armouryCategoryRecord['mog-station'].title,
            img: armouryCategoryRecord['mog-station'].img,
            imgAlt: armouryCategoryRecord['mog-station'].title,
            icon: armouryCategoryRecord['mog-station'].icon,
            color: '#618da8',
            _key: 'mog-station',
          },
          {
            label: armouryCategoryRecord['accessories'].title,
            img: armouryCategoryRecord['accessories'].img,
            imgAlt: armouryCategoryRecord['accessories'].title,
            icon: armouryCategoryRecord['accessories'].icon,
            color: '#cc9145',
            _key: 'accessories',
          },
          {
            label: armouryCategoryRecord['tool'].title,
            img: armouryCategoryRecord['tool'].img,
            imgAlt: armouryCategoryRecord['tool'].title,
            icon: armouryCategoryRecord['tool'].icon,
            color: '#7abfa0',
            _key: 'tool',
          },
        ]}
      ></HomePageTilesRow>
      <HomePageH1>武器</HomePageH1>
      <HomePageMainArm></HomePageMainArm>
      <HomePageH1>部位</HomePageH1>
      <HomePageH1>专题</HomePageH1>
    </main>
  )
}
