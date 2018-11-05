import * as React from 'react'

import TumblrCard from './TumblrCard'

class TumblrQuoteCard extends TumblrCard {
  public render() {
    return (
      <div>
        {this.props.post.type}
      </div>
    )
  }
}

export default TumblrQuoteCard

// {
//   "post": {
//     "type": "quote",
//     "blog_name": "qrry43",
//     "blog": {},
//     "id": 179779163738,
//     "post_url": "https://qrry43.tumblr.com/post/179779163738/wat",
//     "slug": "wat",
//     "date": "2018-11-05 05:13:28 GMT",
//     "timestamp": 1541394808,
//     "state": "published",
//     "format": "html",
//     "reblog_key": "9HCoIGTx",
//     "tags": {},
//     "short_url": "https://tmblr.co/ZlGD6Y2dRh5PQ",
//     "summary": "wat",
//     "is_blocks_post_format": false,
//     "recommended_source": null,
//     "recommended_color": null,
//     "note_count": 0,
//     "text": "wat",
//     "source": "",
//     "reblog": {},
//     "can_like": false,
//     "can_reblog": false,
//     "can_send_in_message": true,
//     "can_reply": false,
//     "display_avatar": true
//   }
// }
