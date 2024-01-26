import * as React from 'react'
import type { SVGProps } from 'react'
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M832 83h-666q-34 0 -58.5 24.5t-24.5 58.5v749l167 -166h582q34 0 58.5 -24.5t24.5 -59.5v-499q0 -34 -24.5 -58.5t-58.5 -24.5zM250 374h499v83h-499v-83zM582 582h-332v-83h332v83zM749 333h-499v-83h499v83z"
    />
  </svg>
)
export default SvgChat
