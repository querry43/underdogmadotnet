import * as React from 'react'

import TumblrCard from './TumblrCard'

const publisherStyle : React.CSSProperties = {
  color: 'black',
  textDecoration: 'none'
}

const imgStyle : React.CSSProperties = {
  margin: '10px'
}

const excerptStyle : React.CSSProperties = {
  marginTop: '0'
}

class TumblrLinkCard extends TumblrCard {
  protected content() {
    const imgElement = this.props.post.description
      ? <div dangerouslySetInnerHTML={{ __html: this.props.post.description }} />
      : <img style={imgStyle} src={this.props.post.link_image} />

    return (
      <div>
        <a style={publisherStyle} href={this.props.post.url}>
          <p>{this.props.post.publisher}</p>
          {imgElement}
        </a>
        <p style={excerptStyle}>{this.props.post.excerpt}</p>
      </div>
    )
  }
}

export default TumblrLinkCard
