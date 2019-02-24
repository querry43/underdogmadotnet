import * as React from 'react'

import TumblrCard from './TumblrCard'
import './TumblrTextCard.css'

const titleStyle : React.CSSProperties = {
  color: 'black',
  textDecoration: 'none'
}

class TumblrTextCard extends TumblrCard {
  protected content() {
    return (
      <div className="TumblrTextCard">
        <p style={titleStyle}>{this.props.post.title}</p>
        <div className="TumblrTextCard_body" dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
      </div>
    )
  }
}

export default TumblrTextCard
