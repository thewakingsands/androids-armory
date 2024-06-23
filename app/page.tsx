import { HomePageH1 } from './_components/HomePageH1'
import { HomePageMainArm } from './_components/HomePageMainArm'

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
  return (
    <main className="max-w-5xl mx-auto">
      <HomePageH1>系列</HomePageH1>
      <HomePageH1>武器</HomePageH1>
      <HomePageMainArm></HomePageMainArm>
      <HomePageH1>部位</HomePageH1>
      <HomePageH1>专题</HomePageH1>
    </main>
  )
}
