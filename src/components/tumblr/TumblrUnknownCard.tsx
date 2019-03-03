import * as React from 'react'

import { ITumblrCardProps } from './TumblrCardHelper'

class TumblrUnknownCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <div>
        I do not know how to render card type {this.props.post.type}
      </div>
    )
  }
}

export default TumblrUnknownCard
