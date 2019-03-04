import * as React from 'react'
import * as InfiniteScroll from 'react-infinite-scroller'
import {getBlogPosts} from './TumblrHelper'

import Card from '../Card'
import TumblrCard from './TumblrCard'

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
        10,
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
          loader={<Card key={0}>Loading ...</Card>}
      >
        {this.state.posts.map((post : any) => {
          return <TumblrCard key={post.id} post={post} />
        })}
      </InfiniteScroll>
    )
  }
}

export default TumblrCardContainer
