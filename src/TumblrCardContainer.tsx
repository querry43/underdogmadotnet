import * as React from 'react'
import * as tumblr from 'tumblr.js'

interface ITumblrCardContainerProps {
  blog : string,
  consumer_key : string
}

interface ITumblrCardContainerState {
  posts : any
}

class TumblrCardContainer extends React.Component<ITumblrCardContainerProps, ITumblrCardContainerState> {
  public async componentDidMount() {
    const client = tumblr.createClient({
      credentials: {
        consumer_key: this.props.consumer_key
      },
      returnPromises: true
    })

    const p : any = client.blogPosts(this.props.blog)

    try {
      const data = await p
      this.setState({posts: data.posts})
    } catch (error) {
      global.console.warn(error)
    }
  }

  public render() {
    return (
      <p>TumblrCardContainer</p>
    )
  }
}

export default TumblrCardContainer
