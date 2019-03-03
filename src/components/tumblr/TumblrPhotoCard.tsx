import * as React from 'react'

import TumblrCard from './TumblrCard'
import { IPostProps } from './TumblrCardHelper'

class TumblrPhotoCard extends React.Component<IPostProps> {
   public render() {
    return (
      <TumblrCard timestamp={this.props.post.timestamp}>
        <p dangerouslySetInnerHTML={{ __html: this.props.post.caption }} />
        {this.props.post.photos.map((img : any, i : number) =>
          <div key={i}>
            <img src={img.original_size.url} />
          </div>
        )}
      </TumblrCard>
    )
  }
}

export default TumblrPhotoCard
