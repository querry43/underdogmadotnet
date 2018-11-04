import * as React from 'react'

export const roundCornersStyles = (radius : string) : React.CSSProperties => ({
  MozBorderRadius: radius,
  WebkitBorderRadius: radius,
  borderRadius: radius,
})

export const insetShadowStyles = (spread : string) : React.CSSProperties => ({
  MozBoxShadow: `inset 0 0 {spread} black`,
  WebkitBoxShadow: `inset 0 0 {spread} black`,
  boxShadow: `inset 0 0 {spread} black`
})
