import * as React from 'react'

import styled from '../../styled-components'
import TumblrCard from './TumblrCard'

const Link = styled.a`
  color: black;
  text-decoration: none;
`

const Image = styled.img`
  margin: 10px;
`

const Excerpt = styled.p`
  margin-top: 0;
`

class TumblrLinkCard extends TumblrCard {
  protected content() {
    const imgElement = this.props.post.description
      ? <div dangerouslySetInnerHTML={{ __html: this.props.post.description }} />
      : <Image src={this.props.post.link_image} />

    return (
      <div>
        <Link href={this.props.post.url}>
          <p>{this.props.post.publisher}</p>
          {imgElement}
        </Link>
        <Excerpt>{this.props.post.excerpt}</Excerpt>
      </div>
    )
  }
}

export default TumblrLinkCard
