import * as React from 'react'

import { ITumblrCardProps } from './TumblrCardHelper'

const TumblrUnknownCard : React.SFC<ITumblrCardProps> = (props) => (
  <div>
    I do not know how to render card type {props.post.type}
  </div>
)

export default TumblrUnknownCard
