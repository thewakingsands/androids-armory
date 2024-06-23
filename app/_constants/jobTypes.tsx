import { FaPaintBrush } from 'react-icons/fa'
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
} from '../_components/_app-icons'

export const jobTypes = [
  {
    key: 'tank',
    label: '防护职业',
    color: '#2d3a80',
    jobs: [
      { label: '骑士', abbr: 'pld', icon: <ClassJob019 /> },
      { label: '战士', abbr: 'war', icon: <ClassJob021 /> },
      { label: '暗黑骑士', abbr: 'drk', icon: <ClassJob032 /> },
      { label: '绝枪战士', abbr: 'gnb', icon: <ClassJob037 /> },
    ],
  },
  {
    key: 'healer',
    label: '治疗职业',
    color: '#346624',
    jobs: [
      { label: '白魔法师', abbr: 'whm', icon: <ClassJob024 /> },
      { label: '学者', abbr: 'sch', icon: <ClassJob028 /> },
      { label: '占星术士', abbr: 'ast', icon: <ClassJob033 /> },
      { label: '贤者', abbr: 'sge', icon: <ClassJob040 /> },
    ],
  },
  {
    key: 'melee',
    label: '近战职业',
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
    key: 'physical_ranged',
    label: '远程物理职业',
    color: '#732828',
    jobs: [
      { label: '吟游诗人', abbr: 'brd', icon: <ClassJob023 /> },
      { label: '机工士', abbr: 'mch', icon: <ClassJob031 /> },
      { label: '舞者', abbr: 'dnc', icon: <ClassJob038 /> },
    ],
  },
  {
    key: 'magical',
    label: '远程魔法职业',
    color: '#732828',
    jobs: [
      { label: '黑魔法师', abbr: 'blm', icon: <ClassJob025 /> },
      { label: '召唤师', abbr: 'smn', icon: <ClassJob027 /> },
      { label: '赤魔法师', abbr: 'rdm', icon: <ClassJob035 /> },
      { label: '青魔法师', abbr: 'blu', icon: <ClassJob036 /> },
      { label: '绘灵法师', abbr: 'pcm', icon: <FaPaintBrush size={64} /> },
    ],
  },
]
