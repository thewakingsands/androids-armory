import { FaPaintBrush } from 'react-icons/fa'
import { CrossFadeTile } from '../components/cross-fade-tile'
import {
  ClassJob001,
  ClassJob019,
  ClassJob020,
  ClassJob021,
  ClassJob022,
  ClassJob023,
  ClassJob024,
  ClassJob025,
  ClassJob027,
  ClassJob028,
  ClassJob030,
  ClassJob031,
  ClassJob032,
  ClassJob033,
  ClassJob034,
  ClassJob035,
  ClassJob036,
  ClassJob037,
  ClassJob038,
  ClassJob039,
  ClassJob040,
} from './_components/_app-icons'
import Image, { StaticImageData } from 'next/image'

import jobImgAst from './_images/jobs/ast.png'
import jobImgBlm from './_images/jobs/blm.png'
import jobImgBlu from './_images/jobs/blu.png'
import jobImgBrd from './_images/jobs/brd.png'
import jobImgDnc from './_images/jobs/dnc.png'
import jobImgDrg from './_images/jobs/drg.png'
import jobImgDrk from './_images/jobs/drk.png'
import jobImgGnb from './_images/jobs/gnb.png'
import jobImgMch from './_images/jobs/mch.png'
import jobImgMnk from './_images/jobs/mnk.png'
import jobImgNin from './_images/jobs/nin.png'
import jobImgPcm from './_images/jobs/pcm.png'
import jobImgPld from './_images/jobs/pld.png'
import jobImgRdm from './_images/jobs/rdm.png'
import jobImgRpr from './_images/jobs/rpr.png'
import jobImgSam from './_images/jobs/sam.png'
import jobImgSch from './_images/jobs/sch.png'
import jobImgSge from './_images/jobs/sge.png'
import jobImgSmn from './_images/jobs/smn.png'
import jobImgVpr from './_images/jobs/vpr.png'
import jobImgWar from './_images/jobs/war.png'
import jobImgWhm from './_images/jobs/whm.png'
import { Fragment } from 'react'

const jobImages = {
  ast: jobImgAst,
  blm: jobImgBlm,
  blu: jobImgBlu,
  brd: jobImgBrd,
  dnc: jobImgDnc,
  drg: jobImgDrg,
  drk: jobImgDrk,
  gnb: jobImgGnb,
  mch: jobImgMch,
  mnk: jobImgMnk,
  nin: jobImgNin,
  pcm: jobImgPcm,
  pld: jobImgPld,
  rdm: jobImgRdm,
  rpr: jobImgRpr,
  sam: jobImgSam,
  sch: jobImgSch,
  sge: jobImgSge,
  smn: jobImgSmn,
  vpr: jobImgVpr,
  war: jobImgWar,
  whm: jobImgWhm,
} as Record<string, StaticImageData>

export default function Page() {
  const jobTypes = [
    {
      label: '防护',
      color: '#2d3a80',
      jobs: [
        { label: '骑士', abbr: 'pld', icon: <ClassJob019 /> },
        { label: '战士', abbr: 'war', icon: <ClassJob021 /> },
        { label: '暗黑骑士', abbr: 'drk', icon: <ClassJob032 /> },
        { label: '绝枪战士', abbr: 'gnb', icon: <ClassJob037 /> },
      ],
    },
    {
      label: '治疗',
      color: '#346624',
      jobs: [
        { label: '白魔法师', abbr: 'whm', icon: <ClassJob024 /> },
        { label: '学者', abbr: 'sch', icon: <ClassJob028 /> },
        { label: '占星术士', abbr: 'ast', icon: <ClassJob033 /> },
        { label: '贤者', abbr: 'sge', icon: <ClassJob040 /> },
      ],
    },
    {
      label: '近战',
      color: '#732828',
      jobs: [
        { label: '武僧', abbr: 'mnk', icon: <ClassJob020 /> },
        { label: '龙骑士', abbr: 'drg', icon: <ClassJob022 /> },
        { label: '忍者', abbr: 'nin', icon: <ClassJob030 /> },
        { label: '武士', abbr: 'sam', icon: <ClassJob034 /> },
        { label: '钐镰客', abbr: 'rpr', icon: <ClassJob039 /> },
        { label: 'Viper', abbr: 'vpr', icon: <ClassJob001 /> },
      ],
    },
    {
      label: '远敏',
      color: '#732828',
      jobs: [
        { label: '吟游诗人', abbr: 'brd', icon: <ClassJob023 /> },
        { label: '机工士', abbr: 'mch', icon: <ClassJob031 /> },
        { label: '舞者', abbr: 'dnc', icon: <ClassJob038 /> },
      ],
    },
    {
      label: '法系',
      color: '#732828',
      jobs: [
        { label: '黑魔法师', abbr: 'drk', icon: <ClassJob025 /> },
        { label: '召唤师', abbr: 'smn', icon: <ClassJob027 /> },
        { label: '赤魔法师', abbr: 'rdm', icon: <ClassJob035 /> },
        { label: '青魔法师', abbr: 'blu', icon: <ClassJob036 /> },
        { label: '绘灵法师', abbr: 'pcm', icon: <FaPaintBrush size={120} /> },
      ],
    },
  ]

  return (
    <main className="max-w-5xl mx-auto">
      <h1>职业</h1>
      {jobTypes.map((type) => (
        <Fragment key={type.label}>
          <h2>{type.label}</h2>
          <div className="flex flex-wrap justify-center gap-4 px-4 overflow-hidden" key={type.label}>
            {type.jobs.map((job) => (
              <div key={job.abbr}>
                <CrossFadeTile
                  label={job.label}
                  icon={job.icon}
                  color={type.color}
                  img={
                    <div
                      key={job.abbr}
                      className="absolute h-full w-auto bg-contain bg-center bg-no-repeat -left-20 -right-20"
                    >
                      <Image
                        className="object-contain"
                        placeholder="data:image/svg+xml,%3Csvg width='96' height='96' viewBox='0 0 96 96' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.s%7Banimation:a 1.2s cubic-bezier(0.52,.6,.25,.99) infinite%7D@keyframes a%7B0%25%7Br:0;opacity:1%7D100%25%7Br:11px;opacity:0%7D%7D%3C/style%3E%3Ccircle class='s' cx='48' cy='40' r='0' fill='%23fff'/%3E%3C/svg%3E"
                        src={jobImages[job.abbr]}
                        fill
                        alt={job.label}
                      />
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </main>
  )
}
