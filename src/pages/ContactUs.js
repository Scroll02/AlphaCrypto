import React from 'react'
import './ContactUs.css'
import OurTeam from '../components/OurTeam'
import ContactUsLogo from '../assets/contactUs.svg'
import OurTeamLogo from '../assets/ourTeamBg.svg'
import {useForm} from 'react-hook-form'

const ContactUs = () => {
  //Handle Events
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    mode:'onTouched'
  });
  const onSubmit = data => 
                {
                  alert(JSON.stringify(`Thank you for contacting us! We read every message and typically respond within 48 hours if a reply is required. Want to stay in touch? Follow us on our social media accounts!`));
                  window.location.reload(true);
                }
  
  return (
    <div>
      <h1 className='contactUs-title'>CONTACT US</h1>
      <img className='contactUs-logo'src={ContactUsLogo} alt=''/>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*First Name Input*/}
          <div>
            <input 
              type='text' 
              id='firstName' 
              placeholder='First Name' 
              className='input-firstName'
              {...register("firstName", 
              { required: {
                  value: true,
                  message: 'First Name is required'
                  },
                  minLength:{
                    value: 3,
                    message: "Please enter your first name"
                  },
                  maxLength:{
                    value: 20,
                    message: "Maximum allowed length is 20 characters"
                  },
                  pattern:{
                    value: /[a-zA-Z]/,
                    message: "Please enter only alphabets"
                  } })}>
            </input>
            <div>
            {errors.firstName && <span className='error-message-firstName'>{errors.firstName.message}</span>}
            </div>
          </div>
          {/*Last Name Input*/}
          <div>
            <input 
              type='text' 
              id='lastName' 
              placeholder='Last Name'
              className='input-lastName'
              {...register("lastName", 
              { required: {
                  value: true,
                  message: 'Last Name is required'
                  },
                  minLength:{
                    value: 2,
                    message: "Please enter your last name"
                  },
                  maxLength:{
                    value: 20,
                    message: "Maximum allowed length is 20 characters"
                  },
                  pattern:{
                    value: /[a-zA-Z]/,
                    message: "Please enter only alphabets"
                  } })}>
            </input>
            <div>
            {errors.lastName && <span className='error-message-lastName'>{errors.lastName.message}</span>}
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
          {/*Mobile Input Input*/}
          <div>
            <input 
              type='text' 
              id='mobile' 
              placeholder='Mobile'
              className='input-mobileNo'
              {...register("mobileNo", 
              { required: {
                  value: true,
                  message: 'Mobile Number is required'
                  },
                  pattern:{
                    value: /^[0-9]*$/,
                    message: "Please enter a mobile number"
                  } })}>
            </input>
            <div>
              {errors.mobileNo && <span className='error-message-mobileNo'>{errors.mobileNo.message}</span>}
            </div>
          </div>
          {/*Message Input*/}
          <div>
            <h4 className='message-header'>Type your message here...</h4>
            <textarea 
              className='input-message'
              {...register("messageBx", 
              { required: {
                  value: true,
                  message: 'Message is required'
                  } })}>
            </textarea>
            <div>
              {errors.messageBx && <span className='error-message-mobileNo'>{errors.messageBx.message}</span>}
            </div>
          </div>
          <input type='submit' value='SUBMIT' className='submitBtn'></input>
        </form>
      </div>

      <div className='ourTeam'>
        <h1>MEET OUR TEAM!</h1>
        <h3>Meet the people behind the product. The AlphaCrypto team is a close knit group of people working towards the same goal in the crypto space.</h3>
        <img className='ourTeamLogo'src={OurTeamLogo}/>
        
        <OurTeam/>
      </div>
    </div>
  )
}

export default ContactUs
