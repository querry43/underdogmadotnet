import * as React from 'react'

import TumblrCard from './TumblrCard'

const imgStyle : React.CSSProperties = {
  margin: '10px'
}

class TumblrLinkCard extends TumblrCard {
  protected content() {
    return (
      <div>
        <a href={this.props.post.url}>
          <div dangerouslySetInnerHTML={{ __html: this.props.post.description }} />
          <img style={imgStyle} src={this.props.post.link_image} />
        </a>
        <p>{this.props.post.excerpt}</p>
        <p>{new Date(this.props.post.timestamp * 1000).toLocaleString()}</p>
      </div>
    )
  }
}

export default TumblrLinkCard

// {
//   "post": {
//     "type": "text",
//     "blog_name": "qrry43",
//     "blog": {},
//     "id": 179779160723,
//     "post_url": "https://qrry43.tumblr.com/post/179779160723/test-text",
//     "slug": "test-text",
//     "date": "2018-11-05 05:13:20 GMT",
//     "timestamp": 1541394800,
//     "state": "published",
//     "format": "html",
//     "reblog_key": "oZOxjg3Z",
//     "tags": {},
//     "short_url": "https://tmblr.co/ZlGD6Y2dRh4gJ",
//     "summary": "test text",
//     "is_blocks_post_format": false,
//     "recommended_source": null,
//     "recommended_color": null,
//     "note_count": 0,
//     "title": "test text",
//     "body": "<p>\n\ntest text\n\n<br/></p>",
//     "reblog": {},
//     "trail": {},
//     "can_like": false,
//     "can_reblog": false,
//     "can_send_in_message": true,
//     "can_reply": false,
//     "display_avatar": true
//   }
// }
