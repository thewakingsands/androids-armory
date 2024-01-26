import * as React from 'react'
import type { SVGProps } from 'react'
const SvgExternalLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M790 790h-582v-582h291v-83h-291q-35 0 -59 24.5t-24 58.5v582q0 35 24 59t59 24h582q35 0 59 -24t24 -59v-291h-83v291zM582 125v83h150l-409 409l58 58l409 -408v149h83v-291h-291z"
    />
  </svg>
)
export default SvgExternalLink
