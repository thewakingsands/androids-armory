import { Link } from '@nextui-org/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import React from 'react'
import { FaUmbrella } from 'react-icons/fa'
import {
  AppHomeMenuInventory,
  AppPaymentSymbol,
  ArmouryBody,
  ArmouryMainArm,
  ArmouryRing,
  FellowActivity18,
  ItemCategoryCrp,
  ItemCategoryDye,
  Market,
} from '../app/_components/_app-icons'
import { AALogo } from './aa-logo'
import { AaNavbarItemTextLink } from './aa-navbar-item-text-link'

export function AaRootLayout({ children }: { children: React.ReactNode }) {
  const armouryCategoryMenu = [
    { key: 'arm', icon: <ArmouryMainArm className="w-6" />, title: '武器' },
    { key: 'body', icon: <ArmouryBody className="w-6" />, title: '防具' },
    { key: 'fashion', icon: <AppPaymentSymbol className="w-6" />, title: '时装' },
    { key: 'accessories', icon: <ArmouryRing className="w-6" />, title: '饰品' },
    { key: 'tool', icon: <ItemCategoryCrp className="w-6" />, title: '工具' },
  ]

  return (
    <div className="aa-root-layout">
      <Navbar className="py-2">
        <NavbarBrand className="flex-grow-0">
          <AALogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex flex-1" justify="center">
          <AaNavbarItemTextLink title="系列" icon={<FellowActivity18 />} href="/" menu={armouryCategoryMenu} />
          <AaNavbarItemTextLink title="单品" icon={<AppHomeMenuInventory />} href="/" menu={armouryCategoryMenu} />
          <AaNavbarItemTextLink title="时尚配饰" icon={<FaUmbrella />} href="/" />
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
