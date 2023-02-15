import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" 
import { Carousel } from 'react-responsive-carousel'
import './Testimonials.css'

const Testimonals = () => {
  return (
    <div>
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <div className="myCarousel">
            <p>
            AlphaCrypto Newsletter is the only newsletter I subscribe to for all my crypto updates. I've tried other sources to stay 
            current, but AlphaCrypto has become my only daily go-to read! 
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <p>
            I like reading the AlphaCrypto Newsletters because it provides the most important and timely crypto news and market 
            information. 
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <p>
            Crypto is such a crazy space. There are so many rumors that it's hard to know what to believe. It is nice to wake up 
            each morning to AlphaCrypto's newsletters as it helps me stay up-to-date with what is happening in the industry! 
            </p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <p>
            As a newbie to the crypto space, I like the concise and short updates in the AlphaCrypto Newsletters. I don't feel 
            overwhelmed and the news are relevant. Thank you guys.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Testimonals
