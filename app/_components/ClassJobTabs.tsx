'use client'

import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import useEvent from 'react-use-event-hook'
import { jobTypes } from '../_constants/jobTypes'

export function ClassJobTabs({ value, setValue }: { value: string; setValue: (v: string) => void }) {
  const handleSelectionChange = useEvent((v: React.Key) => {
    setValue(`${v}`)
  })

  return (
    <Tabs aria-label="职能分类" selectedKey={value} onSelectionChange={handleSelectionChange}>
      {jobTypes.map((job) => (
        <Tab title={job.label} key={job.key}></Tab>
      ))}
    </Tabs>
  )
}
