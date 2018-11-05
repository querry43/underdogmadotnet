import * as React from 'react'

export interface ITabBodyProps {
  default : boolean,
  tabId : string
}

class TabBody extends React.Component<ITabBodyProps> {
  public static defaultProps: Partial<ITabBodyProps> = {
    default: false
  }

  public isVisible() : boolean {
    return (this.props.default && window.location.hash === "")
      || (this.props.tabId === window.location.hash)
  }

  public render() {
    const style : React.CSSProperties = {
      display: this.isVisible() ? 'initial' : 'none'
    }

    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

export default TabBody
