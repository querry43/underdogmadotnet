import * as React from 'react'

import Card from '../Card'
import { ITumblrCardProps } from './TumblrCardHelper'

class TumblrAudioCard extends React.Component<ITumblrCardProps> {
  public render() {
    return (
      <Card timestamp={this.props.post.timestamp}>
        I do not know how to render card type {this.props.post.type}
      </Card>
    )
  }
}

export default TumblrAudioCard

// {
//   "post": {
//     "type": "audio",
//     "blog_name": "qrry43",
//     "blog": {},
//     "id": 179779196448,
//     "post_url": "https://qrry43.tumblr.com/post/179779196448/caramell-caramelldansen",
//     "slug": "caramell-caramelldansen",
//     "date": "2018-11-05 05:14:49 GMT",
//     "timestamp": 1541394889,
//     "state": "published",
//     "format": "html",
//     "reblog_key": "MbJToXNt",
//     "tags": {},
//     "short_url": "https://tmblr.co/ZlGD6Y2dRhDOW",
//     "summary": "Caramell - Caramelldansen",
//     "is_blocks_post_format": false,
//     "recommended_source": null,
//     "recommended_color": null,
//     "note_count": 0,
//     "source_url": "https://open.spotify.com/track/0ShZidyBdeUF00b4ontvom",
//     "source_title": "Spotify",
//     "artist": "Caramell",
//     "album": "Caramelldansen - Speedy Mixes",
//     "track_name": "Caramelldansen",
//     "album_art": "https://i.scdn.co/image/2312d540a08ce0091f30700fd52aaabb6c232360",
//     "caption": "",
//     "reblog": {},
//     "trail": {},
//     "player": "<iframe class=\"spotify_audio_player\" src=\"https://embed.spotify.com/?uri=spotify%3Atrack%3A0ShZidyBdeUF00b4ontvom&amp;view=coverart\" frameborder=\"0\" allowtransparency=\"true\" width=\"540\" height=\"620\"></iframe>",
//     "embed": "<iframe class=\"spotify_audio_player\" src=\"https://embed.spotify.com/?uri=spotify%3Atrack%3A0ShZidyBdeUF00b4ontvom&amp;view=coverart\" frameborder=\"0\" allowtransparency=\"true\" width=\"540\" height=\"620\"></iframe>",
//     "plays": 0,
//     "audio_url": "https://open.spotify.com/track/0ShZidyBdeUF00b4ontvom",
//     "audio_source_url": "https://open.spotify.com/track/0ShZidyBdeUF00b4ontvom",
//     "provider_uri": "spotify:track:0ShZidyBdeUF00b4ontvom",
//     "is_external": true,
//     "audio_type": "spotify",
//     "can_like": false,
//     "can_reblog": false,
//     "can_send_in_message": true,
//     "can_reply": false,
//     "display_avatar": true
//   }
// }
