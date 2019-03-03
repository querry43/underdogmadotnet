import * as React from 'react'

import Card from '../Card'
import { ITumblrCardProps } from './TumblrCardHelper'

class TumblrChatCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <Card timestamp={this.props.post.timestamp}>
        I do not know how to render card type {this.props.post.type}
      </Card>
    )
  }
}

export default TumblrChatCard

// {
//   "post": {
//     "type": "chat",
//     "blog_name": "qrry43",
//     "blog": {},
//     "id": 179779177923,
//     "post_url": "https://qrry43.tumblr.com/post/179779177923/asd",
//     "slug": "asd",
//     "date": "2018-11-05 05:14:03 GMT",
//     "timestamp": 1541394843,
//     "state": "published",
//     "format": "html",
//     "reblog_key": "5GLvYpla",
//     "tags": {},
//     "short_url": "https://tmblr.co/ZlGD6Y2dRh8t3",
//     "summary": "asd",
//     "is_blocks_post_format": false,
//     "recommended_source": null,
//     "recommended_color": null,
//     "note_count": 0,
//     "title": "asd",
//     "body": "J: Guess what?\nG: Chicken butt!",
//     "dialogue": {},
//     "can_like": false,
//     "can_reblog": false,
//     "can_send_in_message": true,
//     "can_reply": false,
//     "display_avatar": true
//   }
// }
