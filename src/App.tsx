import * as React from 'react'

import CardContainer from './CardContainer'
import Header from './Header'
import NavBar from './NavBar'

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

class App extends React.Component {
  public render() {
    return (
      <div style={contentStyle}>
        <Header />
        <NavBar />
        <CardContainer />
      </div>
    )
  }
}

export default App
