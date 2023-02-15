import React from 'react'
import Card from '../components/Card'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.JPG'
import Image3 from '../assets/image3.JPG'
import './Blog.css'

const Blog = () => {
  return (
   
    <div >
        <div className='blog__title'>
          <h1 className='blog-header'>Cryptocurrency Blogs</h1>
        </div>
       <div className='row-wrapper'>
          <Card 
          img ={Image1}
          title='Import CoinGecko Cryptocurrency Data into Microsoft Excel'
          description='Did you know that you are able to extract data from API into Microsoft Excel using the in-built Power Query feature? CoinGecko’s API is completely'/>
          <Card 
          img ={Image2}
          title='Trust Score Explained'
          description='Trust Score Explained (Updated November 2020) This post is also available in Chinese: 请点击此读取中文版 In traditional markets, exchanges with high volume equate to high liquidity'/>
          <Card 
          img ={Image3}
          title='CoinGecko 2020 Year in Review'
          description='Wow, 2020 flew by in the blink of an eye! It has been a crazy year with so many exciting things happening. From calm markets,'/>
      </div>
    </div>
  )
}

export default Blog
