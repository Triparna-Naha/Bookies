import React from "react";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import Contact from "../assets/components/Contact";
//import Course from "../assets/components/Course";
function Contacts() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
