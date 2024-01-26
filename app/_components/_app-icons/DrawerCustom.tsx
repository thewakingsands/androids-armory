import * as React from 'react'
import type { SVGProps } from 'react'
const SvgDrawerCustom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M945 788l-378 -378q28 -73 12 -151t-75 -136q-40 -41 -94 -61q-52 -20 -107.5 -18t-105.5 25l178 179l-124 124l-183 -179q-25 50 -27 105.5t19 108.5t62 94q58 58 136 74.5t151 -12.5l378 379q13 12 29.5 12t29.5 -12l95 -96q15 -12 16 -30t-12 -28z"
    />
  </svg>
)
export default SvgDrawerCustom
