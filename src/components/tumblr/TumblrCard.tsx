import * as React from 'react'

import Card from '../Card'

import TumblrLinkCard from './TumblrLinkCard'
import TumblrPhotoCard from './TumblrPhotoCard'
import TumblrTextCard from './TumblrTextCard'
import TumblrUnknownCard from './TumblrUnknownCard'
import TumblrVideoCard from './TumblrVideoCard'

import { ITumblrCardProps } from './TumblrCardHelper'

class TumblrCard extends React.Component<ITumblrCardProps> {
  public render() {
    const getCardSpecialization = (post : any) => {
      switch(post.type) {
        case 'link':
          return <TumblrLinkCard post={post} />

        case 'photo':
          return <TumblrPhotoCard post={post} />

        case 'text':
          return <TumblrTextCard post={post} />

        case 'video':
          return <TumblrVideoCard post={post} />

        default: {
          return <TumblrUnknownCard post={post} />
        }
      }
    }

    return (
      <Card timestamp={this.props.post.timestamp}>
        {getCardSpecialization(this.props.post)}
      </Card>
    )
  }
}

export default TumblrCard
