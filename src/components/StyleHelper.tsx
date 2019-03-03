import * as React from 'react'

import { css } from '../styled-components'

interface IRoundedCornerStyleProps {
  radius? : string
}

export const RoundedCornerStyle = css<IRoundedCornerStyleProps>`
  -moz-border-radius: ${props => props.radius || '3px'};
  -webkit-border-radius: ${props => props.radius || '3px'};
  border-radius: ${props => props.radius || '3px'};
`

export const roundCornersStyles = (radius : string) : React.CSSProperties => ({
  MozBorderRadius: radius,
  WebkitBorderRadius: radius,
  borderRadius: radius,
})
