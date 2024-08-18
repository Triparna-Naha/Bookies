import React from "react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import About from "../assets/components/About";
function Abouts()
{
  return(
  <>
      <Navbar />
      <div className="min-h-screen"> <About/></div>
      <Footer/>

  </>
  );
  }
export default Abouts;