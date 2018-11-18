import * as React from 'react'
import * as InfiniteScroll from 'react-infinite-scroller'
import {getBlogPosts} from './TumblrHelper'

import TumblrAudioCard from './TumblrAudioCard'
import TumblrChatCard from './TumblrChatCard'
import TumblrLinkCard from './TumblrLinkCard'
import TumblrPhotoCard from './TumblrPhotoCard'
import TumblrQuoteCard from './TumblrQuoteCard'
import TumblrTextCard from './TumblrTextCard'
import TumblrVideoCard from './TumblrVideoCard'

interface ITumblrCardContainerProps {
  blog : string,
  consumerKey : string
}

const initialState = {
  hasMore: true,
  posts: []
}

type State = Readonly<typeof initialState>

class TumblrCardContainer extends React.Component<ITumblrCardContainerProps, State> {
  public readonly state: State = initialState

  public render() {
    const loadMore = async () => {
      const nextPosts = await getBlogPosts(
        this.props.blog,
        this.state.posts.length,
        20,
        this.props.consumerKey
      )

      if (nextPosts.length === 0) {
        this.setState({
          hasMore: false
        })
      } else {
        this.setState({
          posts: this.state.posts.concat(nextPosts)
        })
      }
    }

    return (
      <InfiniteScroll
          loadMore={loadMore}
          hasMore={this.state.hasMore}
          loader={<div key={0}>Loading ...</div>}
      >
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
      </InfiniteScroll>
    )
  }
}

export default TumblrCardContainer
