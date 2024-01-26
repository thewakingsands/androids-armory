import * as React from 'react'
import type { SVGProps } from 'react'
const SvgCharacterEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M499 20q-130 0 -242 65q-108 64 -172 172q-65 112 -65 242t65 242q64 108 172 172q112 65 242 65t242 -65q108 -64 172 -172q65 -112 65 -242t-65 -242q-64 -108 -172 -172q-112 -65 -242 -65zM116 499q0 -104 52 -193q51 -87 138 -138q89 -52 193 -52q65 0 125 21 t110 60l-537 537q-39 -50 -60 -110t-21 -125zM499 882q-65 0 -125 -21t-110 -60l537 -537q39 50 60 110t21 125q0 104 -52 193q-51 87 -138 138q-89 52 -193 52z"
    />
  </svg>
)
export default SvgCharacterEmpty
