import React from 'react';
import { motion } from 'framer-motion';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useRoutes, useParams, NavLink } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import NavBar from './Components/NavBar';
import Functions from './Components/Utils/Data/Functions';

import navbar_info from './Components/Icons/navbar_info.svg';
import navbar_inquire from './Components/Icons/navbar_inquire.svg';
import navbar_projects from './Components/Icons/navbar_projects.svg';
import navbar_services from './Components/Icons/navbar_services.svg';
import navbar_arrowdown from './Components/Icons/navbar_arrowdown.svg';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import mobile_nav_icon from './Components/Icons/mobile_nav_icon.svg';
import navbar_home from './Components/Icons/navbar_home.svg';
import { css } from '@emotion/react';
import RingLoader from 'react-spinners/RingLoader';

const Loading = ({ loading }) => {
  let [color, setColor] = useState('#fefcf1');
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className='loading'>
      <div className='loading__container'>
        <RingLoader color={color} loading={loading} css={override} size={50} />
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  console.log(loading);

  useEffect(() => {
    const isLoading = setTimeout(() => {
      setLoading({ loading: false });
    }, 3000);

    // return () => {
    //   clearTimeout(isLoading);}
  }, []);

  return loading === true ? <Loading loading={loading} /> : <AppInfo />;

  // return (
  //   <div className="App">
  //     <div className='App__section__left'><Navbar /></div>
  //     <div class='App__section__right'> <Dashboard /></div>
  //   </div>
  // );
};

function AppInfo() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    console.log('clicked');
  };

  return (
    <div className='App'>
      <div className='mobile'>
        {/* <div id="mobile" className='mobile__nav'><div className='mobile__nav__container'><MenuIcon onClick={() => setIsOpen(!isOpen)}/></div></div> */}

        <nav id='desktop'>
          <div className='navbar'>
            <div className='navbar__container'>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 0 1.5rem 0',
                    borderRight: isActive ? '4px solid #FEFCF1' : '',
                    color: isActive ? '#2B2B2B' : '#2B2B2B',
                  };
                }}
                to={`/`}
              >
                <img src={navbar_home} />
              </NavLink>
            </div>
            <div id='myMenu' className='navbar__container'>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 0 1.5rem 0',
                    borderRight: isActive ? '4px solid #FEFCF1' : '',
                    color: isActive ? '#FFFFFF' : '#2B2B2B',
                  };
                }}
                to={`/about`}
              >
                <img src={navbar_info} />
              </NavLink>

              <NavLink
                style={({ isActive }) => {
                  return {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 0 1.5rem 0',
                    borderRight: isActive ? '4px solid #FEFCF1' : '',
                  };
                }}
                to={`/projects`}
              >
                <img src={navbar_projects} />
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 0 1.5rem 0',
                    borderRight: isActive ? '4px solid #FEFCF1' : '',
                  };
                }}
                to={`/services`}
              >
                <img src={navbar_services} />
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 0 1.5rem 0',
                    borderRight: isActive ? '4px solid #FEFCF1' : '',
                  };
                }}
                to={`/inquire`}
              >
                <img src={navbar_inquire} />
              </NavLink>
            </div>
            <div className='navbar__button__container'>
              <div className='navbar__container__icon'>
                <img src={navbar_arrowdown} />
              </div>
            </div>
          </div>
        </nav>

        {isOpen && (
          <motion.div
            initial={{ transform: 'translateX(-700px)' }}
            animate={{ transform: 'translateX(0px)' }}
            transition={{
              duration: 1,

              type: 'spring',
              stiffness: 50,
            }}
          >
            <nav id='mobile'>
              <div className='navbar'>
                <div id='myMenu' className='navbar__container'>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 0 1.5rem 0',
                        borderRight: isActive ? '4px solid #FEFCF1' : '',
                        color: isActive ? '#2B2B2B' : '#2B2B2B',
                      };
                    }}
                    to={`/`}
                  >
                    <img src={navbar_home} />
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 0 1.5rem 0',
                        borderRight: isActive ? '4px solid #FEFCF1' : '',
                        color: isActive ? '#FFFFFF' : '#2B2B2B',
                      };
                    }}
                    to={`/about`}
                  >
                    <img src={navbar_info} />
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 0 1.5rem 0',
                        borderRight: isActive ? '4px solid #FEFCF1' : '',
                      };
                    }}
                    to={`/projects`}
                  >
                    <img src={navbar_projects} />
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 0 1.5rem 0',
                        borderRight: isActive ? '4px solid #FEFCF1' : '',
                      };
                    }}
                    to={`/services`}
                  >
                    <img src={navbar_services} />
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 0 1.5rem 0',
                        borderRight: isActive ? '4px solid #FEFCF1' : '',
                      };
                    }}
                    to={`/inquire`}
                  >
                    <img src={navbar_inquire} />
                  </NavLink>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </div>

      <div id='mobile' className='mobile__nav'>
        <div className='mobile__nav__container' onClick={toggleNav}>
          {isOpen ? <CloseIcon /> : <img src={mobile_nav_icon} style={{ width: '40px' }} />}
        </div>
      </div>
      {/* <div style={isOpen ? {filter: 'blur(4px)'}: null} className="content"></div> */}
      <div style={isOpen ? { filter: 'opacity(20%)' } : null} className='content'>
        <FormspreeProvider project='1813683782192987645'>
          <Outlet />
        </FormspreeProvider>
      </div>
    </div>
  );
}

export default App;
