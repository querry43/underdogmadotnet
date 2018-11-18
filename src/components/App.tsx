import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import {getBlogPosts} from './TumblrHelper'

import Header from './Header'
import NavBar from './NavBar'
import Tab from './Tab'
import TumblrCardContainer from './tumblr/TumblrCardContainer'

const consumerKey = 'yEVqlLGq1iSM7PM93SK1QUx4KmSN7ncuC6zQpGQfaqhN2yiZOA'

const contentStyle : React.CSSProperties = {
  backgroundColor: '#333333',
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: '100%',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
  width: '900px'
}

const initialState = {
  interestsPosts: [],
  projectsPosts: []
}

type State = Readonly<typeof initialState>

class App extends React.Component<object, State> {
  public readonly state: State = initialState

  public async componentDidMount() {
    this.setState({
      interestsPosts: await getBlogPosts('qrry43.tumblr.com', 0, 20, consumerKey),
      projectsPosts: await getBlogPosts('qrry43-projects.tumblr.com', 0, 20, consumerKey)
    })
    global.console.log(this.state)
  }

  public render() {
    const interests = () => {
      return (
        <TumblrCardContainer posts={this.state.interestsPosts} />
      )
    }

    const projects = () => {
      return (
        <TumblrCardContainer posts={this.state.projectsPosts} />
      )
    }

    return (
      <Router>
        <div style={contentStyle}>
          <Header />
          <NavBar>
            <Tab name="Interests" path="/" />
            <Tab name="Projects" path="/projects" />
          </NavBar>
          <Route exact={true} path="/" component={interests} />
          <Route path="/projects" component={projects} />
          <Redirect from="*" to="/" />
        </div>
      </Router>
    )
  }
}

export default App
