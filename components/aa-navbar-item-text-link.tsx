'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { useCallback, useRef, useState } from 'react'
import useEvent from 'react-use-event-hook'
import {
  AppPaymentSymbol,
  ArmouryBody,
  ArmouryMainArm,
  ArmouryRing,
  ClassJob008,
  ItemCategoryCrp,
} from '../app/_components/_app-icons'

export function AaNavbarItemTextLink({ title, icon, href }: { title: string; icon: React.ReactNode; href: string }) {
  const debuggingMenu = false

  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const portalContainer = useRef<HTMLDivElement>(null)

  const handleOpen = useEvent(() => {
    setOpen(true)
    if (closeTimer.current != null) {
      clearTimeout(closeTimer.current)
    }
  })

  const handleClose = useEvent(() => {
    if (debuggingMenu) return
    closeTimer.current = setTimeout(() => {
      setOpen(false)
    }, 100) as any as number
  })

  return (
    <Dropdown isOpen={open} triggerScaleOnOpen={false} portalContainer={portalContainer.current ?? undefined}>
      <NavbarItem className="h-full">
        <DropdownTrigger>
          <div
            className="relative before:inline-block before:absolute before:w-full before:h-2 before:bg-primary-500 before:-top-4 hover:before:translate-y-1 before:transition-transform hover:text-primary-500 transition-colors"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <Link href={href} className="w-20 h-full relative flex justify-center items-center text-inherit">
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="text-2xl inline-block" style={{ width: '1em', height: '1em' }}>
                  {icon}
                </div>
                <p className="text-sm">{title}</p>
              </div>
            </Link>
            <div className="text-foreground-900" ref={portalContainer}></div>
          </div>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label={title}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        // itemClasses={{ base: 'py-2' }}
      >
        <DropdownItem key="main-arm" startContent={<ArmouryMainArm className="w-6" />}>
          武器
        </DropdownItem>
        <DropdownItem key="body" startContent={<ArmouryBody className="w-6" />}>
          防具
        </DropdownItem>
        <DropdownItem key="fashion" startContent={<AppPaymentSymbol className="w-6" />}>
          时装
        </DropdownItem>
        <DropdownItem key="accessories" startContent={<ArmouryRing className="w-6" />}>
          饰品
        </DropdownItem>
        <DropdownItem key="tool" startContent={<ItemCategoryCrp className="w-6" />}>
          工具
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
