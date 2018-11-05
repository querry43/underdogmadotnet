import * as React from 'react'

class TabBodyContainer extends React.Component {
  // public switchTabs(e : Event) {
  //   global.console.log('event')
  //   global.console.log(e)
  //   // const c = React.Children.toArray(this.props.children)
  //   // global.console.log(c) // , c => c.forceUpdate())
  //   // this.props.children.forEach(c => c.forceUpdate())
  // }

  // public componentDidMount() {
  //   window.addEventListener('hashchange', this.switchTabs)
  // }

  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TabBodyContainer
