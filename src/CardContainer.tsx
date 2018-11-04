import * as React from 'react'
import * as tumblr from 'tumblr.js'

class CardContainer extends React.Component {
  public async componentDidMount() {
    const client = tumblr.createClient({
      credentials: {
        consumer_key: 'yEVqlLGq1iSM7PM93SK1QUx4KmSN7ncuC6zQpGQfaqhN2yiZOA'
      },
      returnPromises: true
    })

    const p : any = client.blogPosts('qrry43.tumblr.com')

    try {
      const data = await p
      global.console.log(data)
    } catch (error) {
      global.console.warn(error)
    }
  }

  public render() {
    return (
      <p>Content</p>
    )
  }
}

export default CardContainer
