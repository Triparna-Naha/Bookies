import React from 'react'
import Navbar from '../assets/components/Navbar';
import Footer from '../assets/components/Footer';
import Job from '../assets/components/Job';
function Jobs() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'><Job/></div>
      <Footer/>
    </>
  );
}

export default Jobs;