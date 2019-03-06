import * as React from 'react'

import styled from '../../styled-components'

import { ITumblrCardProps } from './TumblrCardHelper'

const Image = styled.img`
  max-width: 100%;
`

const TumblrPhotoCard : React.SFC<ITumblrCardProps> = (props) => (
  <div>
    <p dangerouslySetInnerHTML={{ __html: props.post.caption }} />
    {props.post.photos.map((img : any, i : number) =>
      <div key={i}>
        <Image src={img.original_size.url} />
      </div>
    )}
  </div>
)

export default TumblrPhotoCard
