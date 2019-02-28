import React from 'react'
import LiskHubExtensions from 'LiskHubExtensions'

class Hello extends React.Component {
  render () {
    return <LiskHubExtensions.components.Box><h1>{this.props.t('Last  click at ')} {this.props.data.time}</h1> <LiskHubExtensions.components.Button
    label='Check time'
    onClick={() => {this.props.actions.testExtensions();}} /></LiskHubExtensions.components.Box>
  }
}

export default Hello

LiskHubExtensions.addModule({
  identifier:
  LiskHubExtensions.identifiers.dashboardColumn1,
  component: Hello
});
