'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return <NextUIProvider navigate={router.push.bind(router)}>{children}</NextUIProvider>
}
