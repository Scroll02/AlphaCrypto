import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Coin from './routes/Coin'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Blogs from './pages/Blog'
import Newsletter from './pages/Newsletter'
import FAQ from './pages/FAQ'
import Footer from './components/Footer'


function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) =>{
      console.log(error)
    })
  }, [])


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Coins coins={coins} />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contactUs' element={<ContactUs />}></Route>
      <Route path='/blogs' element={<Blogs />}></Route>
      <Route path='/newsletter' element={<Newsletter />}></Route>
      <Route path='/faq' element={<FAQ />}></Route>
      <Route path='/coin' element={<Coin />}>
        <Route path=':coinId' element={<Coin />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
