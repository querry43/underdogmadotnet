import * as React from 'react'
import * as tumblr from 'tumblr.js'

import './App.css'
import logo from './logo.svg'


class App extends React.Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
