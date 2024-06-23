import { ArmouryMainArm, ArmouryBody, AppPaymentSymbol, ArmouryRing, ItemCategoryCrp } from '../_components/_app-icons'
import accessories from '../_images/types/accessories.png'
import arm from '../_images/types/arm.png'
import body from '../_images/types/body.png'
import mogstation from '../_images/types/mogstation.png'
import tool from '../_images/types/tool.png'

export const armouryCategory = [
  { key: 'main-arm', icon: <ArmouryMainArm className="w-6" />, title: '武器', img: arm, color: '#726e6d' },
  { key: 'body', icon: <ArmouryBody className="w-6" />, title: '防具', img: body, color: '#83291e' },
  { key: 'mog-station', icon: <AppPaymentSymbol className="w-6" />, title: '时装', img: mogstation, color: '#618da8' },
  { key: 'accessories', icon: <ArmouryRing className="w-6" />, title: '饰品', img: accessories, color: '#cc9145' },
  { key: 'tool', icon: <ItemCategoryCrp className="w-6" />, title: '工具', img: tool, color: '#7abfa0' },
]

export const armouryCategoryRecord: Record<
  'main-arm' | 'body' | 'mog-station' | 'accessories' | 'tool',
  (typeof armouryCategory)[0]
> = {
  ['main-arm']: armouryCategory[0],
  body: armouryCategory[1],
  ['mog-station']: armouryCategory[2],
  accessories: armouryCategory[3],
  tool: armouryCategory[4],
}
