import * as React from 'react'

import TumblrAudioCard from './TumblrAudioCard'
import TumblrChatCard from './TumblrChatCard'
import TumblrLinkCard from './TumblrLinkCard'
import TumblrPhotoCard from './TumblrPhotoCard'
import TumblrQuoteCard from './TumblrQuoteCard'
import TumblrTextCard from './TumblrTextCard'
import TumblrVideoCard from './TumblrVideoCard'

interface ITumblrCardContainerProps {
  posts : any
}

class TumblrCardContainer extends React.Component<ITumblrCardContainerProps> {
  public render() {
    return (
      <div>
        {this.props.posts.map((post : any) => {
          switch(post.type) {
            case 'audio':
              return <TumblrAudioCard key={post.id} post={post} />

            case 'chat':
              return <TumblrChatCard key={post.id} post={post} />

            case 'link':
              return <TumblrLinkCard key={post.id} post={post} />

            case 'photo':
              return <TumblrPhotoCard key={post.id} post={post} />

            case 'quote':
              return <TumblrQuoteCard key={post.id} post={post} />

            case 'text':
              return <TumblrTextCard key={post.id} post={post} />

            case 'video':
              return <TumblrVideoCard key={post.id} post={post} />

            default: {
              return <TumblrTextCard key={post.id} post={post} />
            }
          }
        })}
      </div>
    )
  }
}

export default TumblrCardContainer
