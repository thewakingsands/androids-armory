import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { AALogo } from './aa-logo'
import { SiSteelseries } from 'react-icons/si'
import { GiHeartArmor } from 'react-icons/gi'
import { FaGlasses } from 'react-icons/fa'
import { GrPaint } from 'react-icons/gr'
import { HiTemplate } from 'react-icons/hi'

export function AaRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="aa-root-layout">
      <Navbar className="py-2">
        <NavbarBrand className="flex-grow-0">
          <AALogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex flex-1" justify="center">
          <AaNavbarItemTextLink title="系列" icon={<SiSteelseries />} href="/" />
          <AaNavbarItemTextLink title="单品" icon={<GiHeartArmor />} href="/" />
          <AaNavbarItemTextLink title="时尚配饰" icon={<FaGlasses />} href="/" />
          <AaNavbarItemTextLink title="染剂" icon={<GrPaint />} href="/" />
          <AaNavbarItemTextLink title="专题" icon={<HiTemplate />} href="/" />
        </NavbarContent>
        {/* <NavbarContent justify="end">
          <Button as={Link} color="primary" href="/" variant="flat">
            登录
          </Button>
        </NavbarContent> */}
      </Navbar>
      <div>{children}</div>
    </div>
  )
}

function AaNavbarItemTextLink({ title, icon, href }: { title: string; icon: React.ReactNode; href: string }) {
  return (
    <NavbarItem className="h-full">
      <Link
        color="foreground"
        href={href}
        className="w-20 h-full flex justify-center items-center before:inline-block before:absolute before:w-full before:h-1 before:bg-primary-500 before:-top-4 hover:before:translate-y-2 before:transition-transform"
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="text-2xl inline-block">{icon}</div>
          <p className="text-sm">{title}</p>
        </div>
      </Link>
    </NavbarItem>
  )
}
