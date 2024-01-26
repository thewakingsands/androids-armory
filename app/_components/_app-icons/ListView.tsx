import * as React from 'react'
import type { SVGProps } from 'react'
const SvgListView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M582 707h-416v83h416v-83zM832 374h-666v83h666v-83zM166 624h666v-83h-666v83zM166 208v83h666v-83h-666z"
    />
  </svg>
)
export default SvgListView
