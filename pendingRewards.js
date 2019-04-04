import React from 'react'
import LiskHubExtensions from 'LiskHubExtensions'

class pendingRewards extends React.Component {

	componentDidMount(){
	
		if(this.props.data.accountAddress){
			fetch('https://api.lisk.support/v1/pending/'+this.props.data.accountAddress)
			.then(function(response) {
				return response.json();
			})
			.then(data => {
				document.getElementById('paTitle').innerHTML="Pending Rewards for "+this.props.data.accountAddress;
				let content='<table><tr><th>Delegate/Pool</th><th>Pending Lisk</th></tr>';
				
				for(let val in data){
					val==="TOTAL" ? content+='<tr><td><b>'+val+'</b></td><td><b>'+data[val]+'</b></td></tr>' : content+='<tr><td>'+val+'</td><td>'+data[val]+'</td></tr>';
				}
				content+='</table>';
				document.getElementById('paContent').innerHTML=content;
			})
		}
	}

  render () {
	  

   return <LiskHubExtensions.components.Box>
		<header>
			<h1 id='paTitle'>Pending Rewards</h1>
		</header> 
		<div id='paContent' align='center'>Sign in to view your pending rewards.</div> 
		<p align='center'><sup>Made by korben3, powered by Lisk.support</sup></p>	
    </LiskHubExtensions.components.Box>
  }  
};


export default pendingRewards


LiskHubExtensions.addModule({
  identifier: LiskHubExtensions.identifiers.dashboardColumn3,
  component: pendingRewards
});
