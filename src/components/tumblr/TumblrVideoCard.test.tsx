/* tslint:disable:object-literal-sort-keys */

import * as React from 'react'

import TumblrVideoCard from './TumblrVideoCard'

it('matches snapshot', () => {
  const post = {
    "type": "video",
    "blog_name": "qrry43",
    "blog": {},
    "id": 179739805093,
    "post_url": "https://qrry43.tumblr.com/post/179739805093",
    "slug": "",
    "date": "2018-11-04 02:56:56 GMT",
    "timestamp": 1541300216,
    "state": "published",
    "format": "html",
    "reblog_key": "BAfm55p0",
    "tags": {},
    "short_url": "https://tmblr.co/ZlGD6Y2dPKyMb",
    "summary": "",
    "is_blocks_post_format": false,
    "recommended_source": null,
    "recommended_color": null,
    "note_count": 0,
    "caption": "",
    "reblog": {},
    "trail": {},
    "permalink_url": "https://www.youtube.com/watch?v=glZnkpIDWSE",
    "html5_capable": true,
    "video": {},
    "thumbnail_url": "https://i.ytimg.com/vi/glZnkpIDWSE/hqdefault.jpg",
    "thumbnail_width": 480,
    "thumbnail_height": 360,
    "player": {},
    "video_type": "youtube",
    "can_like": false,
    "can_reblog": false,
    "can_send_in_message": true,
    "can_reply": false,
    "display_avatar": true
  }

  expect(<TumblrVideoCard post={post} />).toMatchSnapshot()
})
