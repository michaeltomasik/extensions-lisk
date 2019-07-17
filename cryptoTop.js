import React from 'react'
import LiskHubExtensions from 'LiskHubExtensions'


class cryptoTop extends React.Component {

	state={
		items: [],
		isLoaded: false,
		userCurrency: ""
	};
	
	componentDidMount(){
	
		let userCurrency=JSON.parse(localStorage.settings).currency;
		if(!userCurrency){userCurrency="USD";}
		this.setState({userCurrency: userCurrency})

		let maxResults=10;
		
		fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency='+userCurrency.toLowerCase()+'&order=market_cap_desc&per_page='+maxResults+'&page=1&sparkline=false')
		.then(function(response) {
			return response.json();
		})
		.then(data => {

			this.setState({
				items: data,
				isLoaded: true
			})
		
		})
	}
	render () {
	
	let {isLoaded, items}=this.state;
	
	return <LiskHubExtensions.components.Box>
		<header>
			<h1 id='myTotal'>CryptoTop - top 10 Crypto by Market Cap</h1>
		</header> 
		<div align='center'>
		<table><thead><tr><th>Rank</th><th>Name</th><th>Market Cap ({this.state.userCurrency})</th></tr></thead>
		<tbody>
		{isLoaded ? 
			items.map((item) =>
			<tr key={item.id}>
				<td>{item.market_cap_rank}</td>
				<td>{item.name}</td>
				<td>{new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: this.state.userCurrency,
				minimumFractionDigits: 0,
				maximumFractionDigits: 0
				}).format(item.market_cap)}</td>
			</tr>
			)
			: <tr><td><i>Loading data...</i></td></tr>
		}
		</tbody></table>
		</div> 
		<p align='center'><sup>Made by korben3, powered by CoinGecko</sup></p>	
    </LiskHubExtensions.components.Box>
	}
}

export default cryptoTop

LiskHubExtensions.addModule({
  identifier: LiskHubExtensions.identifiers.dashboardColumn2,
  component: cryptoTop
});
