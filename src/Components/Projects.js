import React from 'react';
import { useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from './Modal';

const Projects = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const projectsblock = data.slice(0, 4);

  const projectsRef = useRef(null);

  function handleScroll() {
    projectsRef.current.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth',
    });
  }

  console.log(data);

  return (
    <div className='projects'>
      <div className='projects__container'>
        <div className='projects__container__header'>
          <h1>Explore my work</h1>
          <p>Welcome to my project archive.</p>
        </div>

        <div className='projects__list'>
          <div id='desktopfullwidth' className='projects__list__headers'>
            <div className='projects__list__headers--title'>
              <h2>Select a project</h2>
            </div>
            <div className='projects__list__headers--title'>
              <h2>Project Type</h2>
            </div>
            <div className='projects__list__headers--title'>
              <h2>Progress</h2>
            </div>
          </div>
          <div className='projects__list__container'>
            {projectsblock.map((project, i) => (
              <motion.div
                initial={{ transform: 'translateY(700px)', margin: 0 }}
                animate={{ transform: 'translateY(0px)', margin: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 20 }}
              >
                <div key={i} className='projects__row'>
                  <div className='projects__row--name'>
                    <div className='projects__row--name--img'>
                      <img src={project.icon} />
                    </div>
                    <div className='projects__row--name--description'>
                      {/* <Link to={`https://github.com/sydneehaley/pinned`} onClick={() => setIsOpen(true)}>
                        <h6>{project.title}</h6>
                      </Link> */}
                      <a href={project.repoUrl} target='blank'>
                        <h6>{project.title}</h6>
                      </a>
                      <p>{project.headline}</p>
                    </div>
                  </div>

                  {/* <div className='projects__row--labels'>
                    <ul>
                    {project.labels.map((label, i) => (
                      <li key={i}>{label.label}</li>
                      ))}
                    </ul>
                    </div>   */}

                  <div className='project__row--type'>
                    <label>{project.type}</label>
                  </div>

                  <div className='project__row--progress'>
                    <div className='project__row__progress--progressbarcontainer'>
                      <div
                        style={{
                          width: `${project.progress}`,
                          background: '#FEFCF1',
                          height: '8px',
                          borderRadius: '50px',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div onClick={() => console.log('clicked')}>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <Outlet />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
