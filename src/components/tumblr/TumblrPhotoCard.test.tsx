/* tslint:disable:object-literal-sort-keys */

import * as React from 'react'

import TumblrLinkCard from './TumblrPhotoCard'

it('matches snapshot', () => {
  const post = {
    "type": "photo",
    "blog_name": "qrry43",
    "blog": {},
    "id": 179739183803,
    "post_url": "https://qrry43.tumblr.com/post/179739183803",
    "slug": "",
    "date": "2018-11-04 02:32:37 GMT",
    "timestamp": 1541298757,
    "state": "published",
    "format": "html",
    "reblog_key": "ltvXxLHV",
    "tags": {},
    "short_url": "https://tmblr.co/ZlGD6Y2dPIagx",
    "summary": "",
    "is_blocks_post_format": false,
    "recommended_source": null,
    "recommended_color": null,
    "note_count": 0,
    "caption": "",
    "reblog": {},
    "trail": {},
    "image_permalink": "https://qrry43.tumblr.com/image/179739183803",
    "photos": {},
    "can_like": false,
    "can_reblog": false,
    "can_send_in_message": true,
    "can_reply": false,
    "display_avatar": true
  }

  expect(<TumblrLinkCard post={post} />).toMatchSnapshot()
)
