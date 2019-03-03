import * as React from 'react'

import Card from '../Card'
import { ITumblrCardProps } from './TumblrCardHelper'

class TumblrPhotoCard extends React.Component<ITumblrCardProps> {
   public render() {
    return (
      <Card timestamp={this.props.post.timestamp}>
        <p dangerouslySetInnerHTML={{ __html: this.props.post.caption }} />
        {this.props.post.photos.map((img : any, i : number) =>
          <div key={i}>
            <img src={img.original_size.url} />
          </div>
        )}
      </Card>
    )
  }
}

export default TumblrPhotoCard
