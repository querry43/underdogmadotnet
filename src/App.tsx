import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import NavBar from './NavBar'
import Tab from './Tab'
import TumblrCardContainer from './TumblrCardContainer'

const contentStyle : React.CSSProperties = {
  backgroundColor: '#333333',
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: '100%',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
  width: '790px'
}

const App = () => (
  <Router>
    <div style={contentStyle}>
      <Header />
      <NavBar>
        <Tab name="Interests" path="/" default={true} />
        <Tab name="Projects" path="/projects" />
      </NavBar>
      <Route exact={true} path="/" component={Interests} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
)

const Interests = () => (
  <TumblrCardContainer
    blog="qrry43.tumblr.com"
    consumer_key="yEVqlLGq1iSM7PM93SK1QUx4KmSN7ncuC6zQpGQfaqhN2yiZOA" />
)

const Projects = () => (
  <TumblrCardContainer
    blog="qrry43-projects.tumblr.com"
    consumer_key="yEVqlLGq1iSM7PM93SK1QUx4KmSN7ncuC6zQpGQfaqhN2yiZOA" />
)

export default App
