import React from 'react'
import LiskHubExtensions from 'LiskHubExtensions'

class cryptoTop extends React.Component {

  render () {
	  
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	})
	  
	let maxResults=10;
	fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page='+maxResults+'&page=1&sparkline=false')
	.then(function(response) {
		return response.json();
	})
	.then(data => {
		let content='<table><tr><th>Rank</th><th>Name</th><th>Market Cap (USD)</th></tr>';
    
		for(let i=0; i<data.length; i++){
			content+='<tr><td>'+data[i].market_cap_rank+'</td><td>'+data[i].name+'</td><td>'+formatter.format(data[i].market_cap)+'</td></tr>';
		}
		content+='</table>';
		document.getElementById('ctContent').innerHTML=content;
	})
	
   return <LiskHubExtensions.components.Box>
      <header>
        <h1 id='myTotal'>CryptoTop - top 10 Crypto by Market Cap</h1>
      </header> 
	  <div id='ctContent' align='center'>
	  <i>Loading data...</i>
	  </div> 
	<p align='center'><sup>Made by korben3, powered by CoinGecko</sup></p>	
    </LiskHubExtensions.components.Box>
  }
  
}

export default cryptoTop

LiskHubExtensions.addModule({
  identifier:
  LiskHubExtensions.identifiers.dashboardColumn2,
  component: cryptoTop
});
