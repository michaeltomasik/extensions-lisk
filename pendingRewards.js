import React from 'react'
import LiskHubExtensions from 'LiskHubExtensions'

class pendingRewards extends React.Component {

	state={
		isLoaded: false,
		rewards: [],
		title: 'Pending rewards'
	}

	styleDiv={
		fontFamily: 'basier-circle,sans-serif',
		marginLeft: 10,
		paddingTop: 4
	};
	
	componentDidMount(){
	
		let accountAddress=this.props.data.accountAddress;
	
		if(this.props.data.accountAddress){
			fetch('https://api.lisk.support/v1/pending/'+accountAddress)
			.then(function(response) {
				return response.json();
			})
			.then(data => {
				console.log(data);
				
				//convert to json object
				let data2json='[';
				for(let val in data){
					data2json+='{"delegate":"'+val+'","reward":'+data[val]+'},';
				}
				data2json=data2json.substr(0,data2json.length-1)+"]";
				data2json=JSON.parse(data2json);

				console.log(data2json);
				this.setState({
					title: 'Pending Rewards for '+accountAddress,
					isLoaded: true,
					rewards: data2json
				});
			})
		}
	}

	render () {
	  
		let {isLoaded, rewards, title}=this.state;
	
		return <LiskHubExtensions.components.Box>
			<header>
				<h1>{title}</h1>
			</header> 
			<div align='center' style={this.styleDiv}>
			<table><thead><tr><th>Delegate/Pool</th><th>Pending Lisk</th></tr></thead>
			<tbody>
			{isLoaded ? 
				
				rewards.map((item) =>
				<tr key={item.delegate}>
					<td>{item.delegate}</td>
					<td>{item.reward}</td>
				</tr>	
				)
				: <tr><td><i>Sign in to view your pending rewards...</i></td></tr>
			}
			</tbody></table>
			</div> 
			<p align='center'><sup>Made by korben3, powered by Lisk.support</sup></p>	
		</LiskHubExtensions.components.Box>
	}
};

export default pendingRewards


LiskHubExtensions.addModule({
  identifier: LiskHubExtensions.identifiers.dashboardColumn2,
  component: pendingRewards
});
