import * as React from 'react'

import { ITumblrCardProps } from './TumblrCardHelper'

const TumblrPhotoCard : React.SFC<ITumblrCardProps> = (props) => (
  <div>
    <p dangerouslySetInnerHTML={{ __html: props.post.caption }} />
    {props.post.photos.map((img : any, i : number) =>
      <div key={i}>
        <img src={img.original_size.url} />
      </div>
    )}
  </div>
)

export default TumblrPhotoCard
