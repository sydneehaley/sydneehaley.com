import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navbar_info from '../components/utils/assets/icons/navbar_info.svg';
import navbar_inquire from '../components/utils/assets/icons/navbar_inquire.svg';
import navbar_projects from '../components/utils/assets/icons/navbar_projects.svg';
import navbar_services from '../components/utils/assets/icons/navbar_services.svg';
import navbar_arrowdown from '../components/utils/assets/icons/navbar_arrowdown.svg';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import mobile_nav_icon from '../components/utils/assets/icons/mobile_nav_icon.svg';
import navbar_home from '../components/utils/assets/icons/navbar_home.svg';

const anchors = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'];

const NavBar = ({ functions }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <div id="mobile" className='mobile__nav'><div className='mobile__nav__container'><MenuIcon onClick={() => setIsOpen(!isOpen)}/></div></div> */}
      <div id='mobile' className='mobile__nav'>
        <div className='mobile__nav__container' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <img src={mobile_nav_icon} />}
        </div>
      </div>
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
        <nav id='mobile'>
          <div className='navbar'>
            <div className='navbar__container'>
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 0 1.5rem 0',
                    borderRight: isActive ? '2px solid #2B2B2B' : '',
                    color: isActive ? '#2B2B2B' : '#2B2B2B',
                  };
                }}
                to={`/`}
              >
                <HomeIcon style={{ width: '30px', height: '30px' }} />
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
                    borderRight: isActive ? '2px solid #ffce48' : '',
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
                    borderRight: isActive ? '2px solid #9d83e3' : '',
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
                    borderRight: isActive ? '2px solid #10cf83' : '',
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
                    borderRight: isActive ? '2px solid #ff8377' : '',
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
      )}
    </div>
  );
};

export default NavBar;
