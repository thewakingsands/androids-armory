import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSquareBoxCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-10 0 1010 1000"
    {...props}
  >
    <path
      fill="currentColor"
      d="M765 100h-532q-36 0 -66.5 18t-48.5 48.5t-18 66.5v532q0 36 18 67t48.5 48.5t66.5 17.5h532q36 0 67 -17.5t48.5 -48.5t17.5 -67v-532q0 -36 -18 -66.5t-48.5 -48.5t-66.5 -18zM752 669q18 18 18 43t-17.5 42.5t-42.5 17.5t-43 -18l-169 -169l-169 169q-18 18 -43 18 t-42.5 -17.5t-17.5 -42.5t18 -43l169 -169l-169 -169q-18 -18 -18 -43t17.5 -42.5t42.5 -17.5t43 18l169 169l169 -169q18 -18 43 -18t42.5 17.5t17.5 42.5t-18 43l-169 169z"
    />
  </svg>
)
export default SvgSquareBoxCross
