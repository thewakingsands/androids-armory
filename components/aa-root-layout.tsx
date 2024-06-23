import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar'
import React from 'react'
import {
  AppHomeMenuInventory,
  FellowActivity18,
  ItemCategoryDye,
  ItemCategorySoulCrystal,
  Market,
} from '../app/_components/_app-icons'
import { armouryCategory } from '../app/_constants/armouryCategory'
import { AALogo } from './aa-logo'
import { AaNavbarItemTextLink } from './aa-navbar-item-text-link'

export function AaRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="aa-root-layout">
      <Navbar className="py-2">
        <NavbarBrand className="flex-grow-0">
          <AALogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex flex-1" justify="center">
          <AaNavbarItemTextLink title="系列" icon={<FellowActivity18 />} href="/" menu={armouryCategory} />
          <AaNavbarItemTextLink title="单品" icon={<AppHomeMenuInventory />} href="/" menu={armouryCategory} />
          <AaNavbarItemTextLink title="时尚配饰" icon={<ItemCategorySoulCrystal />} href="/" />
          <AaNavbarItemTextLink title="染剂" icon={<ItemCategoryDye />} href="/" />
          <AaNavbarItemTextLink title="专题" icon={<Market />} href="/" />
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
