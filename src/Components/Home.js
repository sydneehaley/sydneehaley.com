import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__container__header'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: 'spring', stiffness: 50, duration: 3 }}>
            <div className='home__container__header--title'>
              <h1>Hello</h1>
              <span>👋</span>
            </div>
            <p>I am a web developer and designer.</p>
          </motion.div>
        </div>
        {/* <button type="submit">
            Hire Me
          </button> */}
      </div>
    </div>
  );
};

export default Home;
