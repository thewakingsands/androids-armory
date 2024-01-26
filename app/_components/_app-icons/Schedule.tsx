import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSchedule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M790 166h-41v-83h-84v83h-332v-83h-83v83h-42q-34 0 -58.5 24.5t-24.5 59.5v582q0 34 24 58.5t59 24.5h582q35 0 59 -24.5t24 -58.5v-582q0 -35 -24.5 -59.5t-58.5 -24.5zM790 832h-582v-458h582v458zM291 457h208v208h-208v-208z"
    />
  </svg>
)
export default SvgSchedule
