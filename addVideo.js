import React from 'react'
import LiskHubExtensions from 'LiskHubExtensions'

class addVideo extends React.Component {
  render () {
    return <LiskHubExtensions.components.Box>
      <header>
        <h1>{this.props.t('Lisk Hub Introduction')}</h1>
      </header> 
	  <div>
		<iframe width="358" height="200" src="https://www.youtube.com/embed/ktmpnyPaVQo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
	  </div> 

    </LiskHubExtensions.components.Box>
  }
}

export default addVideo


LiskHubExtensions.addModule({
  identifier:
  LiskHubExtensions.identifiers.dashboardColumn2,
  component: addVideo
});
