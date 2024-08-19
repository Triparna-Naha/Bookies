import React from "react";
import Home from "./assets/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./assets/components/Signup";
//import Login from './assets/components/Login';
import Contacts from "./contact/Contacts";
import Abouts from "./abouts/Abouts";
import Jobs from "./Jobs/Jobs";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/Job" element={<Jobs />} />
          {/* <Route path="/" element={<BookStore />} /> */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
