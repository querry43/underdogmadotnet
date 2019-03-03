import * as React from 'react'

import styled from '../../styled-components'
import TumblrCard from './TumblrCard'
import { IPostProps } from './TumblrCardHelper'

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

class TumblrLinkCard extends React.Component<IPostProps> {
  public render() {
    const imgElement = this.props.post.description
      ? <div dangerouslySetInnerHTML={{ __html: this.props.post.description }} />
      : <Image src={this.props.post.link_image} />

    return (
      <TumblrCard timestamp={this.props.post.timestamp}>
        <Link href={this.props.post.url}>
          <p>{this.props.post.publisher}</p>
          {imgElement}
        </Link>
        <Excerpt>{this.props.post.excerpt}</Excerpt>
      </TumblrCard>
    )
  }
}

export default TumblrLinkCard
