import { Divider } from '@nextui-org/react'
import React from 'react'

export function HomePageH1({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2">
      <h1 className="text-large">{children}</h1>
      <Divider className="mt-1 mb-4"></Divider>
    </div>
  )
}
