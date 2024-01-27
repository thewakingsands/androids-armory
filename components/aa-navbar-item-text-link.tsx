'use client'

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { Link } from '@nextui-org/link'
import { NavbarItem } from '@nextui-org/navbar'
import React, { forwardRef, useRef, useState } from 'react'
import useEvent from 'react-use-event-hook'

const NavItemBody = forwardRef<
  HTMLDivElement,
  {
    handleOpen: () => void
    handleClose: () => void
    href: string
    icon: React.ReactNode
    title: string
    portalContainer: React.RefObject<HTMLDivElement>
  }
>(function ({ handleClose, handleOpen, href, icon, title, portalContainer }, ref) {
  return (
    <div
      ref={ref}
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
  )
})

export function AaNavbarItemTextLink({
  title,
  icon,
  href,
  menu,
}: {
  title: string
  icon: React.ReactNode
  href: string
  menu?: Array<{ key: string; icon: React.ReactNode; title: React.ReactNode }>
}) {
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

  return menu ? (
    <Dropdown isOpen={open} triggerScaleOnOpen={false} portalContainer={portalContainer.current ?? undefined}>
      <NavbarItem className="h-full">
        <DropdownTrigger>
          <NavItemBody {...{ handleOpen, handleClose, href, icon, title, portalContainer }} />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label={title}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        // itemClasses={{ base: 'py-2' }}
      >
        {menu.map((menuItem) => (
          <DropdownItem key={menuItem.key} startContent={menuItem.icon}>
            {menuItem.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  ) : (
    <NavbarItem className="h-full">
      <NavItemBody {...{ handleOpen, handleClose, href, icon, title, portalContainer }} />
    </NavbarItem>
  )
}
