import * as React from 'react'

import './App.css'
import CardContainer from './CardContainer'
import Header from './Header'
import NavBar from './NavBar'

class App extends React.Component {
  public render() {
    return (
      <div id="content">
        <Header />
        <NavBar />
        <CardContainer />
      </div>
    )
  }
}

export default App
