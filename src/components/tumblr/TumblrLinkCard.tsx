import * as React from 'react'

import styled from '../../styled-components'
import { ITumblrCardProps } from './TumblrCardHelper'

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

const TumblrLinkCard : React.SFC<ITumblrCardProps> = (props) => {
  global.console.log(props)
  const imgElement = props.post.description
    ? <div dangerouslySetInnerHTML={{ __html: props.post.description }} />
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
