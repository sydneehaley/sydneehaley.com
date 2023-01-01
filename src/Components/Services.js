import React from 'react';
import { Data } from '../Components/Utils/Data/Services';

const Services = () => {
  const ServicesBlockFirst = Data.slice(0, 4);
  const ServicesBlockSecond = Data.slice(4, 8);

  return (
    <div>
      <div id='desktop'>
        <div className='services'>
          <div className='services__container'>
            <div className='services__container__header'>
              <h1>Services</h1>
              <p>Below are the services I am currently offering.</p>
            </div>
            <div className='services__labels__container'>
              <div className='services__labels__container__row'>
                <h6 id='row--lg'>Landing Pages</h6>
                <h6 id='row--sm'>Themes</h6>
                <h6 id='row--sm'>Identity</h6>
              </div>
              <div className='services__labels__container__row'>
                <h6>Logo</h6>
                <h6>Static Websites</h6>
                <h6>UI/Web Design</h6>
              </div>
              <div className='services__labels__container__row'>
                <h6 id='row--lg'>Web Support</h6>
                <h6 id='row--md'>Single Page Web Apps</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='mobile'>
        <div className='services'>
          <div className='services__container'>
            <div className='services__container__header'>
              <h1>Services</h1>
              <p>Below are the services I am currently offering.</p>
            </div>
            <div className='services__labels__container'>
              <div className='services__labels__container__row'>
                <h6 id='row--xlg'>Landing Pages</h6>
              </div>
              <div className='services__labels__container__row'>
                <h6 id='row--md'>Themes</h6>
                <h6 id='row--md'>Identity</h6>
              </div>
              <div className='services__labels__container__row'>
                <h6 id='row--sm'>Logo</h6>
                <h6 id='row--lg'>Static Websites</h6>
              </div>
              <div className='services__labels__container__row'>
                <h6 id='row--md'>UI/Web Design</h6>
                <h6 id='row--md'>Web Support</h6>
              </div>
              <div className='services__labels__container__row'>
                <h6 id='row--xlg'>Single Page Web Apps</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
