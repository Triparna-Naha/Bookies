import React from 'react';
import Home from './assets/home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './assets/components/Signup';
import Login from './assets/components/Login';
import Contacts from './contact/Contacts';
import Abouts from './abouts/Abouts';
import Jobs from './Jobs/Jobs';
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/Job" element={<Jobs />} />
          {/* <Route path="/" element={<BookStore />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;