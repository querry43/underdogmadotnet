import * as React from 'react'

interface ISitesCardContainerProps {
  ancestor : string
}

interface ISitesCardContainerState {
  posts : any
}

class SitesCardContainer extends React.Component<ISitesCardContainerProps, ISitesCardContainerState> {
  // Well dang, the google sites api is going away and my account can't handle the CORS stuff anyhow...
  // Will have to come back to this later...
  // public async componentDidMount() {
  //   const response = await rp(`https://sites.google.com/feeds/content/underdogma.net/wiki/?ancestor=${this.props.ancestor}&kind=announcement`)
  //   global.console.log(response)
  // }

  public render() {
    return (
      <p>SitesCardContainer</p>
    )
  }
}

export default SitesCardContainer
