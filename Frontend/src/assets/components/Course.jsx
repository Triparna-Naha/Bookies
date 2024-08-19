import React, { useEffect, useState } from "react";
//import list from "../../../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";


function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">
        <div className="mt-16 items-center justify-center text-center ">
          <br />
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here!!! :) </span>
          </h1>
          <p className="mt-24 font-extralight">
            Here are all the books you want!! Ponder upon these yourself!!!
          </p>
          <br />
          <h5 className="font-extrabold">
            {" "}
            Just in case you need to go back:~
          </h5>
          <Link to="/">
            <button className="mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;

// list.map((item) => <Cards key={item.id} item={item} />);
