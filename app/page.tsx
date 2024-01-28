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
  ClassJob037,
  ClassJob038,
  ClassJob039,
  ClassJob040,
} from './_components/_app-icons'

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
        { label: '绘灵法师', abbr: 'pcm', icon: <FaPaintBrush size={120} /> },
      ],
    },
  ]

  return (
    <main className="max-w-5xl mx-auto">
      <h1>职业</h1>
      {jobTypes.map((type) => (
        <>
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
                      className="absolute h-full w-auto bg-contain bg-center bg-no-repeat -left-20 -right-20"
                      style={{ backgroundImage: `url('/images/home/jobs/${job.abbr}.png')` }}
                    />
                  }
                />
              </div>
            ))}
          </div>
        </>
      ))}
    </main>
  )
}
