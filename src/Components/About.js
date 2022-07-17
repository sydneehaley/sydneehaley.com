import React from 'react';
import target from './Icons/target.svg';

const About = () => {
  return (
    <div className='about'>
      <div className='about__container'>
        <div className='about__container__header'>
          <h1>About</h1>
          <p>
            I design and develop websites for professionals and creatives. I specialize in developing ideas from the ground up, practicing a design
            process that ranges from identity systems to web development.
          </p>
        </div>
      </div>

      <div id='desktop' className='about__cards__container'>
        <div className='about__cards__container__row'>
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <img src={target} />
              <div id='line'></div>
            </div>
            <div className='about__cards__card__content'>
              <h6>Identity</h6> <p>I create identity systems for brands and entities. From logos to image-making, I create visual language. </p>
            </div>
          </div>
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <img src={target} />
              <div id='line'></div>
            </div>

            <div className='about__cards__card__content'>
              <h6>Print</h6> <p>Pixel perfect material for various types of printing. I design publications, posters, and more. </p>
            </div>
          </div>
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <img src={target} />
              <div id='line'></div>
            </div>

            <div className='about__cards__card__content'>
              <h6>Screen</h6> <p>I design responsive websites, website themes, and user interfaces for the web. I optimize design for the screen. </p>
            </div>
          </div>
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <img src={target} />
              <div id='line'></div>
            </div>

            <div className='about__cards__card__content'>
              <h6>Web</h6> <p>I am a frontend web developer. Various client side programming languages to create websites. </p>
            </div>
          </div>
        </div>
      </div>

      {/* //mobile */}

      <div id='mobile' className='about__cards__container'>
        <div className='about__cards__container__row'>
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src={target} />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div id='line'></div>
              </div>
            </div>

            <div className='about__cards__card__content'>
              <h6>Identity</h6> <p>I create identity systems for brands and entities. From logos to image-making, I create visual language. </p>
            </div>
          </div>

          {/* 2 */}
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src={target} />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div id='line'></div>
              </div>
            </div>

            <div className='about__cards__card__content'>
              <h6>Print</h6> <p>Pixel perfect material for various types of printing. I design publications, posters, and more. </p>
            </div>
          </div>

          {/* 3 */}
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src={target} />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div id='line'></div>
              </div>
            </div>

            <div className='about__cards__card__content'>
              <h6>Screen</h6> <p>I design responsive websites, website themes, and user interfaces for the web. I optimize design for the screen. </p>
            </div>
          </div>

          {/* 4 */}
          <div className='about__cards__card'>
            <div id='target' className='about__cards__container--border--target'>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src={target} />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div id='line'></div>
              </div>
            </div>

            <div className='about__cards__card__content'>
              <h6>Web</h6> <p>I am a frontend web developer. I use various client side programming languages to create websites. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
