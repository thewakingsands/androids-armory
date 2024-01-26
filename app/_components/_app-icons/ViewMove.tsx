import * as React from 'react'
import type { SVGProps } from 'react'
const SvgViewMove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path fill="currentColor" d="M499 333v-167l333 333l-333 333v-167h-333v-332h333z" />
  </svg>
)
export default SvgViewMove
