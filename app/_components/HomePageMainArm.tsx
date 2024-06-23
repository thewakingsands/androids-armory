'use client'

import Image from 'next/image'
import { Divider } from '@nextui-org/react'
import { Fragment, useState } from 'react'
import { CrossFadeTile } from '../../components/cross-fade-tile'
import { jobImages } from '../_constants/jobImages'
import { jobTypes } from '../_constants/jobTypes'
import { ClassJobTabs } from './ClassJobTabs'
import classnames from 'classnames'
import { HomePageTilesRow } from './HomePageTilesRow'

export function HomePageMainArm() {
  const [mainArm, setMainArm] = useState('tank')

  return (
    <div className="px-2">
      <div className="text-center mb-4">
        <ClassJobTabs value={mainArm} setValue={setMainArm}></ClassJobTabs>
      </div>

      {jobTypes.map((type) => (
        <Fragment key={type.key}>
          <HomePageTilesRow
            className={{ hidden: type.key !== mainArm }}
            tiles={type.jobs.map((job) => ({
              label: job.label,
              icon: job.icon,
              color: type.color,
              img: jobImages[job.abbr],
              imgAlt: job.label,
              _key: job.label,
            }))}
          ></HomePageTilesRow>
        </Fragment>
      ))}
    </div>
  )
}
