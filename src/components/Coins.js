import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import {Link} from 'react-router-dom'
import Coin from '../routes/Coin'

const Coins = (props) => {
  return (
    <div>
    <div className='cointainer'>
      <div>
          <h1 className='coinTitle'>Cryptocurrency Prices by Market Cap</h1>
          <div className='heading'>
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt Cap</p>
          </div>

          {props.coins.map(coins =>{
              return (
                <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                  <CoinItem coins={coins} />
                </Link>
                  
              )
          })}

      </div>
    </div>

    <div class='mkt-container'>
      <h2>What is cryptocurrency market cap?</h2>
      <p>Market cap is one of the most popular metrics in the industry that is used to gauge the value of an asset. The market cap of a 
         cryptocurrency is calculated based on the coin's total circulating supply multiplied by the current price.</p>

      <h2>How can I use market cap?</h2>
      <p>As a financial metric, market cap allows you to compare the total circulating value of one cryptocurrency with another. Large cap 
        cryptocurrencies such as Bitcoin and Ethereum have a market cap of over $10 billion. They typically consist of protocols that have demonstrated 
        track record, and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as building new projects on top of them. 
        From a trading perspective, large caps would typically be hosted on more exchanges, have higher liquidity, and are less volatile when compared 
        against other mid and small cap cryptocurrencies.
      </p>
    </div>
    </div>
  )
}

export default Coins
