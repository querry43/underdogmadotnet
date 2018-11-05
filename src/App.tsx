import * as React from 'react'

import Header from './Header'
import NavBar from './NavBar'
import SitesCardContainer from './SitesCardContainer'
import Tab from './Tab'
import TabBody from './TabBody'
import TabBodyContainer from './TabBodyContainer'
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

interface IAppProps {
  tabId : string
}

class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div style={contentStyle}>
        <Header />
        <NavBar>
          <Tab name="Interests" tabId="#interests" default={true} />
          <Tab name="Projects" tabId="#projects" />
        </NavBar>
        <TabBodyContainer>
          <TabBody tabId="#interests" default={true}>
            <TumblrCardContainer
              blog="qrry43.tumblr.com"
              consumer_key="yEVqlLGq1iSM7PM93SK1QUx4KmSN7ncuC6zQpGQfaqhN2yiZOA" />
          </TabBody>
          <TabBody tabId="#projects">
            <SitesCardContainer thing="thing" />
          </TabBody>
        </TabBodyContainer>
      </div>
    )
  }
}

export default App
