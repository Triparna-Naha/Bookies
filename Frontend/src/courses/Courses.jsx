import React from 'react'
import Navbar from '../assets/components/Navbar'
import Footer from '../assets/components/Footer';
import Course from '../assets/components/Course';
function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;