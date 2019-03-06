import * as React from 'react'

import styled from '../../styled-components'
import { ITumblrCardProps } from './TumblrCardHelper'

const Link = styled.a`
  color: black;
  text-decoration: none;
`

const Container = styled.div`
  img { max-width: 100%; }
`

const Image = styled.img`
  margin-bottom: 10px;
  max-width: 100%;
`

const Excerpt = styled.p`
  margin-top: 0;
`

const TumblrLinkCard : React.SFC<ITumblrCardProps> = (props) => {
  const imgElement = props.post.description
    ? <Container dangerouslySetInnerHTML={{ __html: props.post.description }} />
    : <Image src={props.post.link_image} />

  return (
    <div>
      <Link href={props.post.url}>
        <p>{props.post.publisher}</p>
        {imgElement}
      </Link>
      <Excerpt>{props.post.excerpt}</Excerpt>
    </div>
  )
}

export default TumblrLinkCard
