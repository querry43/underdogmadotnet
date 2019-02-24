/* tslint:disable:object-literal-sort-keys */

import * as React from 'react'

import TumblrTextCard from './TumblrTextCard'

it('matches snapshot', () => {
  const post = {
    "type": "text",
    "blog_name": "qrry43",
    "blog": {},
    "id": 179779160723,
    "post_url": "https://qrry43.tumblr.com/post/179779160723/test-text",
    "slug": "test-text",
    "date": "2018-11-05 05:13:20 GMT",
    "timestamp": 1541394800,
    "state": "published",
    "format": "html",
    "reblog_key": "oZOxjg3Z",
    "tags": {},
    "short_url": "https://tmblr.co/ZlGD6Y2dRh4gJ",
    "summary": "test text",
    "is_blocks_post_format": false,
    "recommended_source": null,
    "recommended_color": null,
    "note_count": 0,
    "title": "test text",
    "body": "<p>\n\ntest text\n\n<br/></p>",
    "reblog": {},
    "trail": {},
    "can_like": false,
    "can_reblog": false,
    "can_send_in_message": true,
    "can_reply": false,
    "display_avatar": true
  }

  expect(<TumblrTextCard post={post} />).toMatchSnapshot()
)
