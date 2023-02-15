import React, {useState} from 'react'
import './FAQ.css'
import FAQFunction from './FAQFunction'
import FAQLogo from '../assets/faq.svg'

const FAQ = () => {
  const [faqs, setfaqs] = useState([
    {
      question: 'Coin Price, Market Capitalization, Volume, Trust Score - What are they?',
      answer: 'Coin Price refers to the current global volume-weighted average price of a cryptoasset traded on an active cryptoasset exchange as tracked by AlphaCrypto.',
      open: false
    },
    {
      question: 'Why is the market capitalization a question mark (?) for certain projects?',
      answer: 'An accurate market capitalization takes into account the available supply of a cryptoasset and AlphaCrypto works closely with project teams or coin developers to obtain such information. If there is a question mark, it means that we have insufficient information regarding the available supply or we have reasons to doubt the accuracy of such information. The market capitalization metric is a continuous work in progress for us.',
      open: false
    },
    {
      question: 'How frequently are all the information updated?',
      answer: 'Our bots update our data based on a variable schedule. We update our information whenever possible as scheduled below, subject to rate-limits imposed by data providers.',
      open: false
    },
    {
      question: 'Why are there not more coins listed?',
      answer: 'We are always actively adding more coins to AlphaCrypto. If a coin is not on our site, it is either already on our backlog to be added, or a request for it has not been submitted yet. Our plan is to have as much information on our site as possible, and to provide a 360-degree view of them.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div>
      <h1 className='faq-title'>Frequently Asked Questions (FAQ)</h1>
      <img className='faq-logo' src={FAQLogo}/>
      <div className='faqs'>
        {faqs.map((faq, i) =>(
          <FAQFunction faq={faq} index={i} toggleFAQ={toggleFAQ}/>
        ))}

      </div>
    </div>
  )
}

export default FAQ
