import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import inquire_codepen from './Icons/inquire_codepen.svg';
import inquire_github from './Icons/inquire_github.svg';
import inquire_twitter from './Icons/inquire_twitter.svg';

function Inquire() {
  const closeSuccessWindow = () => {
    window.location.reload();
  };

  const [state, handleSubmit] = useForm('contactForm');

  return (
    <div className='inquire'>
      <div className='inquire__container'>
        <div className='inquire__container__header'>
          <h1>{!state.succeeded ? `Let's work together.` : 'Thank you'}</h1>
          <p>
            {!state.succeeded
              ? `Please contact me through the form below for all inquiries. Please allow minimum 3 business days for a response. Feel free to connect with me on social media.`
              : null}
          </p>
          <div className='inquire__container__header__social'>
            <img src={inquire_twitter} />
            <img src={inquire_codepen} />
            <img src={inquire_github} />
          </div>
        </div>

        <div id={state.succeeded ? 'nomargin' : null} className='inquire__form'>
          {!state.succeeded ? (
            <form onSubmit={handleSubmit}>
              <div className='inquire__form__inputcontainer'>
                <label htmlFor='email'>Name</label>
                <input id='name' type='text' name='fullname' placeholder='What is your name?' />
                <div className='inquire__form--error'>
                  <ValidationError prefix='Your name' field='email' errors={state.errors} />
                </div>
              </div>

              <div className='inquire__form__inputcontainer'>
                <label htmlFor='email'>Email Address</label>
                <input id='email' type='email' name='email' placeholder='Please enter a valid email address' />
                <div className='inquire__form--error'>
                  <ValidationError prefix='Email' field='email' errors={state.errors} />
                </div>
              </div>

              <div className='inquire__form__inputcontainer'>
                <label htmlFor='email'>Say Something</label>
                <textarea id='inquiry' name='inquiry' type='text' />
                <div className='inquire__form--error'>
                  <ValidationError prefix='Message' field='message' errors={state.errors} />
                </div>
              </div>
              <div className='inquire__form__inputcontainer'>
                <button type='submit' disabled={state.submitting}>
                  Contact Me
                </button>
              </div>
            </form>
          ) : (
            <button onClick={closeSuccessWindow}>Send Another Message</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Inquire;
