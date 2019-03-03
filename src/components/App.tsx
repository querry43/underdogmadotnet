import * as React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import Header from './Header'
import NavBar from './NavBar'
import NavBarItem from './NavBarItem'
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

class App extends React.Component {
  public render() {
    const cardContainer = (name : string, blog : string) => {
      return (
        <div>
          <Helmet>
            <title>Matt Harrington | {name}</title>
          </Helmet>
          <TumblrCardContainer blog={blog} consumerKey={consumerKey} />
        </div>
      )
    }

    const interests = () => cardContainer('Interests', 'qrry43.tumblr.com')
    const projects = () => cardContainer('Projects', 'qrry43-projects.tumblr.com')

    return (
      <Router>
        <div style={contentStyle}>
          <Header>Matt Harrington's Stuff</Header>
          <NavBar>
            <NavBarItem to="/">Interests</NavBarItem>
            <NavBarItem to="/projects">Projects</NavBarItem>
          </NavBar>
          <Switch>
            <Route path="/" exact={true} component={interests} />
            <Route path="/projects" component={projects} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
