import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPaintColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M565 204q-62 0 -115 30.5t-84 83.5t-31 115t31 115t84 84t115 31t115 -31t83.5 -84t30.5 -115t-30.5 -115t-83.5 -83.5t-115 -30.5z"
    />
  </svg>
)
export default SvgPaintColor
