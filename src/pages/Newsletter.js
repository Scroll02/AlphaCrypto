import React from 'react'
import './Newsletter.css'
import '../components/Testimonials'
import Testimonials from '../components/Testimonials'
import Envelope from '../assets/envelope.svg'
import Feedback from '../assets/feedback.svg'
import {useForm} from 'react-hook-form'

const Newsletter = () => {
  //Handle Events
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
  const onSubmit = data => 
                {
                  alert(JSON.stringify(`Thank you for subscribing to our newsletter!`));
                  window.location.reload(true);
                }

  return (
    <div>
      <h1 className='header-name'>Cryptocurrency Newsletter</h1>
      <div className='subscribe_container'>
        <form className='newsletter-form' onSubmit={handleSubmit(onSubmit)}>
        <img className='envelope-img' src={Envelope}/>
          <h3>Sign up today for free and get our daily cryptocurrency newsletter to stay updated with the latest news.</h3>
          {/*Name Input*/}
          <div>
            <input 
              type='text' 
              id='name'
              placeholder='Name'
              className='input-name'
              {...register("name", 
              { required: {
                  value: true,
                  message: 'Name is required'
                  },
                  minLength:{
                    value: 3,
                    message: "Please enter your name"
                  },
                  maxLength:{
                    value: 50,
                    message: "Maximum allowed length is 50 characters"
                  },
                  pattern:{
                    value: /[a-zA-Z]/,
                    message: "Please enter only alphabets"
                  } })}>
            </input>
            <div>
              {errors.name && <span className='error-message-name'>{errors.name.message}</span>}
            </div>  
          </div>
          {/*Email Input*/}
          <div>
            <input 
              type='email' 
              id='email' 
              placeholder='Email'
              className='input-email'
              {...register("email", 
              { required: {
                  value: true,
                  message: 'Email is required'
                  },
                  pattern:{
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email"
                  } })}>
            </input>
            <div>
            {errors.email && <span className='error-message-email'>{errors.email.message}</span>}
            </div>
          </div>
          {/*Submit Button*/}
          <input type='submit' value='SUBSCRIBE' className='subscribeBtn'></input>
        </form>
      </div>
      <h1 className='testimonials-name'>Testimonials</h1>
      <img className='feedback-img' src={Feedback}/>
      <Testimonials/>
    </div>
  )
}

export default Newsletter
