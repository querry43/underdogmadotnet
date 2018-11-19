/* tslint:disable:object-literal-sort-keys */

import * as React from 'react'

import TumblrLinkCard from './TumblrLinkCard'

it('matches snapshot with link_image', () => {
  const post = {
    "type": "link",
    "blog_name": "qrry43",
    "blog": {
      "name": "qrry43",
      "title": "Untitled",
      "description": "",
      "url": "https://qrry43.tumblr.com/",
      "uuid": "t:R6xQMLMIgO9gjxUYoccRAw",
      "updated": 1542591727
    },
    "id": 180258366208,
    "post_url": "https://qrry43.tumblr.com/post/180258366208/redditors-across-america-have-spotted-the-same-vw",
    "slug": "redditors-across-america-have-spotted-the-same-vw",
    "date": "2018-11-19 01:42:06 GMT",
    "timestamp": 1542591726,
    "state": "published",
    "format": "html",
    "reblog_key": "sjQHEUVF",
    "tags": [],
    "short_url": "https://tmblr.co/ZlGD6Y2duF6C0",
    "summary": "Redditors Across America Have Spotted the Same VW Bus Towing Its Mini Replica",
    "is_blocks_post_format": false,
    "recommended_source": null,
    "recommended_color": null,
    "note_count": 0,
    "title": "Redditors Across America Have Spotted the Same VW Bus Towing Its Mini Replica",
    "url": "https://redditblog.com/2016/05/11/redditors-across-america-have-spotted-the-same-vw-bus-towing-its-mini-replica/",
    "link_image": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_540.jpg",
    "link_image_dimensions": {
      "width":540,
      "height":284
    },
    "link_author": null,
    "excerpt": "Let's face it. Mini versions of normal-sized things are freaking adorable. How can we not be filled with giddy glee at the sight of these teeny-tiny donuts or this",
    "publisher": "redditblog.com",
    "photos": [
      {
        "caption": "",
        "original_size": {
          "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_1280.jpg",
          "width": 600,
          "height": 315
        },
        "alt_sizes": [
          {
            "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_640.jpg",
            "width": 600,
            "height": 315
          },
          {
            "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_540.jpg",
            "width": 540,
            "height": 284
          },
          {
            "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_500.jpg",
            "width": 500,
            "height": 263
          },
          {
            "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_400.jpg",
            "width": 400,
            "height": 210
          },
          {
            "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_250.jpg",
            "width": 250,
            "height": 131
          },
          {
            "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_100.jpg",
            "width": 100,
            "height": 53
          },
          {
            "url": "https://66.media.tumblr.com/eac3655368495a21057e2e3f31d81acb/tumblr_pif3e6mZ1v1xlf559_og_75sq.jpg",
            "width": 75,
            "height": 75
          }
        ]
      }
    ],
    "description": "",
    "reblog":{
      "comment": "",
      "tree_html": ""
    },
    "trail":[],
    "can_like":false,
    "can_reblog":false,
    "can_send_in_message":true,
    "can_reply":false,
    "display_avatar":true
  }

  expect(<TumblrLinkCard post={post} />).toMatchSnapshot()
})

it('matches snapshot with description', () => {
	const post = {
    "type": "link",
    "blog_name": "qrry43",
    "blog": {
      "name": "qrry43",
      "title": "Untitled",
      "description": "",
      "url": "https://qrry43.tumblr.com/",
      "uuid": "t:R6xQMLMIgO9gjxUYoccRAw",
      "updated": 1542591727
    },
    "id": 180243293733,
    "post_url": "https://qrry43.tumblr.com/post/180243293733/ksenia-perova-noaxaon-instagram-photos-and",
    "slug": "ksenia-perova-noaxaon-instagram-photos-and",
    "date": "2018-11-18 17:01:14 GMT",
    "timestamp": 1542560474,
    "state": "published",
    "format": "html",
    "reblog_key": "1yxPns93",
    "tags": [],
    "short_url": "https://tmblr.co/ZlGD6Y2dtLcOb",
    "summary": "Ksenia Perova (@noaxaon) • Instagram photos and videos",
    "is_blocks_post_format": false,
    "recommended_source": null,
    "recommended_color": null,
    "note_count": 0,
    "title": "Ksenia Perova (@noaxaon) • Instagram photos and videos",
    "url": "https://www.instagram.com/noaxaon/",
    "link_author": null,
    "excerpt": "70.2k Followers, 626 Following, 156 Posts - See Instagram photos and videos from Ksenia Perova (@noaxaon)",
    "publisher": "instagram.com",
    "description": "<figure class=\"tmblr-full\" data-orig-height=\"990\" data-orig-width=\"1080\"><img src=\"https://66.media.tumblr.com/1501cd9c503211ba2a9b516c8c6dfdb7/tumblr_inline_pief9zvJJI1wrzqz7_540.jpg\" data-orig-height=\"990\" data-orig-width=\"1080\"/></figure>",
    "reblog": {
      "comment": "<p><figure class=\"tmblr-full\" data-orig-height=\"990\" data-orig-width=\"1080\"><img src=\"https://66.media.tumblr.com/1501cd9c503211ba2a9b516c8c6dfdb7/tumblr_inline_pief9zvJJI1wrzqz7_540.jpg\" data-orig-height=\"990\" data-orig-width=\"1080\"></figure></p>",
      "tree_html": ""
    },
    "trail": [
      {
        "blog": {
          "name": "qrry43",
          "active": true,
          "theme": {
            "avatar_shape": "circle",
            "background_color": "#FAFAFA",
            "body_font": "Helvetica Neue",
            "header_bounds": "",
            "header_image": "https://assets.tumblr.com/images/default_header/optica_pattern_08.png?_v=f0f055039bb6136b9661cf2227b535c2",
            "header_image_focused": "https://assets.tumblr.com/images/default_header/optica_pattern_08_focused_v3.png?_v=f0f055039bb6136b9661cf2227b535c2",
            "header_image_scaled": "https://assets.tumblr.com/images/default_header/optica_pattern_08_focused_v3.png?_v=f0f055039bb6136b9661cf2227b535c2",
            "header_stretch": true,
            "link_color": "#529ECC",
            "show_avatar": true,
            "show_description": true,
            "show_header_image": true,
            "show_title": true,
            "title_color": "#444444",
            "title_font": "Gibson",
            "title_font_weight": "bold"
          },
          "share_likes": true,
          "share_following": true,
          "can_be_followed": true
        },
        "post": {
          "id": "180243293733"
        },
        "content_raw": "<p><figure class=\"tmblr-full\" data-orig-height=\"990\" data-orig-width=\"1080\"><img src=\"https://66.media.tumblr.com/1501cd9c503211ba2a9b516c8c6dfdb7/tumblr_inline_pief9zvJJI1wrzqz7_540.jpg\" data-orig-height=\"990\" data-orig-width=\"1080\"></figure></p>",
        "content": "<p><figure class=\"tmblr-full\"><img src=\"https://66.media.tumblr.com/1501cd9c503211ba2a9b516c8c6dfdb7/tumblr_inline_pief9zvJJI1wrzqz7_540.jpg\" class=\"\"/></figure></p>",
        "is_current_item": true,
        "is_root_item": true
      }
    ],
    "can_like": false,
    "can_reblog": false,
    "can_send_in_message": true,
    "can_reply": false,
    "display_avatar": true
  }

  expect(<TumblrLinkCard post={post} />).toMatchSnapshot()
)
