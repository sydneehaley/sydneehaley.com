import React, { Component } from 'react';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import Modal from './Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FolderIcon from '@mui/icons-material/Folder';

const ProjectView = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const projectDetailsOpen = useRef();

  console.log(id);

  return (
    <div className='projectsview'>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Outlet />
      </Modal>

      {data
        .filter((project) => project.id === parseInt(id))
        .map((project, i) => (
          <div id={isOpen ? 'hidden' : null} key={i} className='projectsview__container' ref={projectDetailsOpen}>
            <div className='projectsview__information__container'>
              <div className='projectsview__left'>
                <div className='projectsview__left__title'>
                  <motion.div
                    initial={{ transform: 'translateY(40px)', margin: '0 0 0 0' }}
                    animate={{ transform: 'translateY(0px)', margin: '0 0 0 0' }}
                    transition={{ duration: 1, type: 'spring', stiffness: 20 }}
                  >
                    <Link to={'/projects'}> {`<`} Back to projects</Link>
                    <br />
                    <br />
                    <br />
                    <br />
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1>{project.title}</h1>
                  </motion.h1>
                  <span>Description</span>
                  <br />
                  <br />
                  <p>{project.description}</p>

                  <br />
                  <br />
                  <br />
                </div>
              </div>

              <div className='projectsview__right'>
                <div className='projectsview__right__explore'>
                  <div className='projectsview__right__explore__section'>
                    <h2>Explore</h2>
                    <br />
                    <br />
                    <h6>Demo</h6>
                    <div className='projectsview__right__explore__section--row'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20.999' height='21.052' viewBox='0 0 20.999 21.052'>
                        <path
                          id='path14'
                          d='M15.3,7.306l-.008,0a.032.032,0,0,1-.013-.007.06.06,0,0,1-.015-.051l.424-2.595L17.675,6.64l-2.067.881a.043.043,0,0,1-.018,0h-.008l-.011-.009a.941.941,0,0,0-.271-.209Zm2.883-.158,2.125,2.128c.441.443.662.663.743.919a1.035,1.035,0,0,1,.03.115L16,8.156l-.008,0c-.02-.008-.044-.018-.044-.038s.024-.031.044-.039l.007,0Zm2.811,3.845a4,4,0,0,1-.685.783l-2.4,2.4-3.1-.646-.016,0c-.027,0-.056-.009-.056-.034a.937.937,0,0,0-.359-.655.054.054,0,0,1-.005-.051.018.018,0,0,1,0-.008L14.96,9.2l0-.012c0-.027.008-.059.033-.059a.948.948,0,0,0,.636-.365c0-.005.008-.012.015-.015a.072.072,0,0,1,.056.008l5.291,2.241Zm-3.632,3.734-3.94,3.945.674-4.151v-.005a.085.085,0,0,1,0-.016c.005-.013.02-.019.033-.024l.007,0a1.014,1.014,0,0,0,.381-.284.084.084,0,0,1,.049-.033h.016l2.774.571Zm-4.774,4.781-.444.445-4.91-7.106-.005-.008a.049.049,0,0,1-.014-.033.037.037,0,0,1,.012-.023l.005-.007c.015-.022.027-.044.041-.068l.011-.019,0,0a.079.079,0,0,1,.028-.033.067.067,0,0,1,.04,0l5.439,1.123a.09.09,0,0,1,.042.018.04.04,0,0,1,.01.024.964.964,0,0,0,.564.645c.015.008.009.025,0,.043a.129.129,0,0,0-.008.025c-.069.417-.656,4.007-.814,4.976Zm-.928.928a2.062,2.062,0,0,1-.739.566,1.1,1.1,0,0,1-.661,0c-.255-.081-.476-.3-.918-.745L4.412,15.319l1.288-2a.083.083,0,0,1,.022-.026.057.057,0,0,1,.05,0,1.333,1.333,0,0,0,.9-.046c.015-.005.03-.009.041,0a.1.1,0,0,1,.015.018l4.934,7.17ZM3.936,14.843,2.805,13.71l2.234-.954a.046.046,0,0,1,.018,0c.019,0,.03.019.039.036q.034.052.071.1l.007.009c.007.009,0,.019,0,.027L3.937,14.843ZM2.3,13.209.874,11.776c-.243-.244-.42-.421-.543-.573l4.351.9.016,0c.027,0,.056.009.056.035s-.032.04-.06.051l-.013.005ZM.081,10.467a1.1,1.1,0,0,1,.049-.272c.081-.256.3-.477.743-.919L2.705,7.442Q3.97,9.28,5.241,11.113c.015.02.031.042.014.058a1.524,1.524,0,0,0-.217.29.088.088,0,0,1-.027.034.03.03,0,0,1-.023,0h0L.081,10.466ZM3.2,6.951,5.656,4.485c.232.1,1.075.458,1.827.776.57.242,1.09.461,1.253.533a.061.061,0,0,1,.038.03.056.056,0,0,1,0,.033,1.1,1.1,0,0,0,.287,1c.016.016,0,.04-.014.06l-.008.012L6.54,10.81a.076.076,0,0,1-.024.027.063.063,0,0,1-.047,0,1.245,1.245,0,0,0-.3-.041,1.638,1.638,0,0,0-.286.035h0a.036.036,0,0,1-.03,0,.116.116,0,0,1-.025-.028L3.195,6.951Zm2.96-2.964L9.342.8C9.784.353,10,.132,10.26.051a1.1,1.1,0,0,1,.661,0c.255.081.476.3.918.744l.691.692L10.263,5a.085.085,0,0,1-.022.026.058.058,0,0,1-.049,0,1.148,1.148,0,0,0-1.053.2c-.015.015-.037.007-.055,0-.3-.129-2.6-1.1-2.928-1.244Zm6.857-2.018,2.093,2.1-.5,3.128V7.2a.074.074,0,0,1,0,.021c-.005.011-.016.013-.027.016a1,1,0,0,0-.3.15l-.011.009a.035.035,0,0,1-.022.014.062.062,0,0,1-.024,0l-3.19-1.357-.006,0c-.02-.008-.044-.018-.044-.039a1.208,1.208,0,0,0-.17-.5c-.015-.025-.032-.052-.019-.077ZM10.856,6.694l2.99,1.268c.016.008.035.015.042.032a.058.058,0,0,1,0,.031.745.745,0,0,0-.016.144v.084c0,.021-.021.03-.041.038l-.006,0c-.474.2-6.65,2.84-6.66,2.84a.035.035,0,0,1-.029-.009c-.016-.016,0-.04.015-.06l.008-.011,2.457-3.81,0-.007c.014-.023.031-.049.057-.049l.025,0a1.139,1.139,0,0,0,.155.015,1.11,1.11,0,0,0,.927-.492.089.089,0,0,1,.019-.022.056.056,0,0,1,.054,0ZM7.431,11.737l6.733-2.875a.03.03,0,0,1,.019.009.912.912,0,0,0,.1.085l.015.009c.014.008.027.016.029.031a.053.053,0,0,1,0,.014l-.577,3.548,0,.014c0,.027-.008.059-.033.059a.948.948,0,0,0-.753.465l0,0a.076.076,0,0,1-.027.031.062.062,0,0,1-.038,0L7.52,12.023c-.005,0-.083-.285-.089-.286Z'
                          transform='translate(-0.081)'
                          fill='#FEFCF1'
                        />
                      </svg>

                      <p>
                        <a href={project.demoUrl} target='_blank'>
                          Netlify
                        </a>
                      </p>
                    </div>
                    <br />
                    <br />
                    <h6>Repository</h6>
                    <div className='projectsview__right__explore__section--row'>
                      <svg xmlns='http://www.w3.org/2000/svg' width='20.5' height='19.988' viewBox='0 0 20.5 19.988'>
                        <path
                          id='github-brands_1_'
                          data-name='github-brands (1)'
                          d='M6.857,24.094c0,.083-.1.149-.215.149-.136.012-.231-.054-.231-.149s.1-.149.215-.149S6.857,24,6.857,24.094Zm-1.285-.186c-.029.083.054.178.178.2a.194.194,0,0,0,.256-.083c.025-.083-.054-.178-.178-.215a.212.212,0,0,0-.256.1Zm1.827-.07c-.12.029-.2.107-.19.2s.12.136.244.107.2-.107.19-.19S7.518,23.826,7.4,23.838ZM10.118,8A9.911,9.911,0,0,0,0,18.085a10.362,10.362,0,0,0,7.006,9.886c.529.1.715-.231.715-.5s-.012-1.67-.012-2.538c0,0-2.893.62-3.5-1.232,0,0-.471-1.2-1.149-1.513,0,0-.946-.649.066-.636a2.182,2.182,0,0,1,1.6,1.066,2.185,2.185,0,0,0,3.013.864,2.3,2.3,0,0,1,.661-1.393c-2.31-.256-4.641-.591-4.641-4.567a3.132,3.132,0,0,1,.975-2.434,3.9,3.9,0,0,1,.107-2.806C5.7,12.013,7.688,13.4,7.688,13.4a9.764,9.764,0,0,1,5.191,0s1.988-1.389,2.852-1.116a3.9,3.9,0,0,1,.107,2.806A3.213,3.213,0,0,1,16.9,17.523c0,3.988-2.434,4.307-4.745,4.567a2.444,2.444,0,0,1,.7,1.918c0,1.393-.012,3.116-.012,3.455,0,.269.19.6.715.5A10.267,10.267,0,0,0,20.5,18.085,10.134,10.134,0,0,0,10.118,8Zm-6.1,14.255c-.054.041-.041.136.029.215s.161.1.215.041.041-.136-.029-.215S4.071,22.2,4.017,22.255Zm-.446-.335c-.029.054.012.12.1.161a.123.123,0,0,0,.178-.029c.029-.054-.012-.12-.1-.161C3.666,21.866,3.6,21.879,3.571,21.92ZM4.91,23.392c-.066.054-.041.178.054.256.1.1.215.107.269.041s.029-.178-.054-.256C5.088,23.338,4.964,23.325,4.91,23.392Zm-.471-.608c-.066.041-.066.149,0,.244s.178.136.231.1a.189.189,0,0,0,0-.256c-.058-.1-.165-.136-.231-.083Z'
                          transform='translate(0 -8)'
                          fill='#FEFCF1'
                        />
                      </svg>

                      <p>
                        <a href={project.repoUrl} target='_blank'>
                          Github
                        </a>
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className='projectsview__right__explore__section'>
                    <h2>Project Information</h2>
                    <br />
                    <br />
                    <h6>Author</h6>
                    <div className='projectsview__right__explore__section--row'>
                      <AccountCircleIcon />
                      <p>{project.authors}</p>
                    </div>
                    <br />
                    <br />
                    <h6>Progress</h6>
                    <div className='projectsview__right__explore__section--row'>
                      <CheckCircleIcon />
                      <p>{project.progress}</p>
                    </div>
                    <br />
                    <br />
                    <h6>Filed Under</h6>
                    <div className='projectsview__right__explore__section--row'>
                      <FolderIcon />
                      <p>{project.tags}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectView;