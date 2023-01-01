import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import inquire_codepen from '../components/utils/assets/icons/inquire_codepen.svg';
import inquire_github from '../components/utils/assets/icons/inquire_github.svg';

function Inquire() {
  const closeSuccessWindow = () => {
    window.location.reload();
  };

  const [state, handleSubmit] = useForm('contactForm');

  return (
    <div className='inquire'>
      <div className='inquire__container'>
        <div className='inquire__container__header'>
          <h1>{`Let's work together.`}</h1>
          <p>
            {`Please contact me at the email below for all inquiries. Please allow minimum 3 business days for a response. Feel free to connect with me on social media.`}
          </p>

          <p style={{ color: '#fff' }}>
            <b>hello@sydneehaley.com</b>
          </p>
          <div className='inquire__container__header__social'>
            <img src={inquire_codepen} />
            <img src={inquire_github} />
          </div>
        </div>

        {/* <div id={state.succeeded ? 'nomargin' : null} className='inquire__form'>
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
        </div> */}
      </div>
    </div>
  );
}

export default Inquire;
