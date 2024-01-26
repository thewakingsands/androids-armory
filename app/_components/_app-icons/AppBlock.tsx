import * as React from 'react'
import type { SVGProps } from 'react'
const SvgAppBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M500 930q-117 0 -217 -59q-97 -57 -154 -154q-59 -100 -59 -217t59 -217q57 -97 154 -154q100 -59 217 -59t217 59q97 57 154 154q59 100 59 217t-59 217q-57 97 -154 154q-100 59 -217 59zM320 760q39 28 85.5 42.5t94.5 14.5q86 0 160 -44q71 -42 113 -113 q44 -74 44 -160q0 -48 -14.5 -94.5t-42.5 -85.5zM500 183q-86 0 -160 44q-71 42 -113 113q-44 74 -44 160q0 48 14.5 94.5t42.5 85.5l440 -440q-39 -28 -85.5 -42.5t-94.5 -14.5z"
    />
  </svg>
)
export default SvgAppBlock
