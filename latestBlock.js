import React from 'react'
import LiskHubExtensions from 'LiskHubExtensions'

class Hello extends React.Component {
  render () {
    return <LiskHubExtensions.components.Box>
      <header>{this.props.t('Last Blocks')}</header> 
      {this.props.data.latestBlocks ? this.props.data.latestBlocks.map((block, index) =>
      <div>{index}. {block.id}</div>) : "NO BLOCKS"}
    </LiskHubExtensions.components.Box>
  }
}

export default Hello


LiskHubExtensions.addModule({
  identifier:
  LiskHubExtensions.identifiers.dashboardColumn2,
  component: Hello
});
