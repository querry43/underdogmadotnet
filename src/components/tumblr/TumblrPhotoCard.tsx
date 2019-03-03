import * as React from 'react'

import { ITumblrCardProps } from './TumblrCardHelper'

class TumblrPhotoCard extends React.Component<ITumblrCardProps> {
   public render() {
    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: this.props.post.caption }} />
        {this.props.post.photos.map((img : any, i : number) =>
          <div key={i}>
            <img src={img.original_size.url} />
          </div>
        )}
      </div>
    )
  }
}

export default TumblrPhotoCard
