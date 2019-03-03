import * as React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import NavBar from './components/NavBar'
import NavBarItem from './components/NavBarItem'
import TumblrCardContainer from './components/tumblr/TumblrCardContainer'

import Counter from './components/Counter'

import store from './store'
import styled from './styled-components'

const consumerKey = 'yEVqlLGq1iSM7PM93SK1QUx4KmSN7ncuC6zQpGQfaqhN2yiZOA'

const Content = styled.div`
  background-color: #333333;
  margin-left: auto;
  margin-right: auto;
  min-height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 900px;
`

class App extends React.Component {
  public render() {
    const cardContainer = (name : string, blog : string) => {
      return (
        <div>
          <Helmet>
            <title>Matt Harrington | {name}</title>
          </Helmet>
          <Counter />
          <TumblrCardContainer blog={blog} consumerKey={consumerKey} />
        </div>
      )
    }

    const interests = () => cardContainer('Interests', 'qrry43.tumblr.com')
    const projects = () => cardContainer('Projects', 'qrry43-projects.tumblr.com')

    return (
      <Provider store={store}>
        <Router>
          <Content>
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
          </Content>
        </Router>
      </Provider>
    )
  }
}

export default App
