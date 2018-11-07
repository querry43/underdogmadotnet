import * as React from 'react'
import * as tumblr from 'tumblr.js'

import TumblrAudioCard from './TumblrAudioCard'
import TumblrChatCard from './TumblrChatCard'
import TumblrLinkCard from './TumblrLinkCard'
import TumblrPhotoCard from './TumblrPhotoCard'
import TumblrQuoteCard from './TumblrQuoteCard'
import TumblrTextCard from './TumblrTextCard'
import TumblrVideoCard from './TumblrVideoCard'

interface ITumblrCardContainerProps {
  blog : string,
  consumer_key : string
}

interface ITumblrCardContainerState {
  offset : number,
  posts : any
}

class TumblrCardContainer extends React.Component<ITumblrCardContainerProps, ITumblrCardContainerState> {
  public state : ITumblrCardContainerState = { offset: 0, posts: [] }

  public async componentDidMount() {
    const client = tumblr.createClient({
      credentials: {
        consumer_key: this.props.consumer_key
      },
      returnPromises: true
    })

    const p : any = client.blogPosts(this.props.blog, {offset: this.state.offset, limit: 20} as any)

    try {
      const data = await p
      this.setState({posts: data.posts})
    } catch (error) {
      global.console.warn(error)
    }
  }

  public render() {
    return (
      <div>
        {this.state.posts.map((post : any) => {
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
