import React from "react";
import { Link } from "react-router-dom";
import BookVdoCont from "../../../public/BookVdoCont.mp4";
function Contact() {
  return (
    <>
      <div className="mt-16 items-center justify-center text-center ">
        <div className="items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl">
            <br />
            <span className="text-pink-500 font-extrabold">Contact Us!!! </span>
          </h1>
          <p className="mt-6 font-extralight">
            We’re here to help! Whether you have a question about our books,
            need assistance with an order, or just want to say hello, we’d love
            to hear from you.
          </p>
          <br />
          <h1 className="font-extrabold text-2xl "> Get in Touch:~</h1>
          <div>
            <div className="mt-5">
              {" "}
              <p className="text-xl text-blue-400"> 📍Address:</p>
              <div className="ml-6">
                <p>Book Haven</p>
                <p>123 Literature Lane Booktown, </p>
                <p>BT 45678 </p>
                <p>Country</p>
              </div>
            </div>
            <Link to="https://www.google.com/maps/place/Cossipore,+Kolkata,+West+Bengal+700002/@22.6213291,88.3601415,15z/data=!3m1!4b1!4m6!3m5!1s0x39f89d863d23ee2f:0x25291926882ed35!8m2!3d22.6235612!4d88.3724567!16s%2Fm%2F03hfzp7?entry=ttu">
              <button className="mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
                COME OVER!
              </button>
            </Link>
          </div>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className="text-xl text-blue-400"> 📞 Phone:</p>
            <div className="ml-6">
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <Link to="https://web.whatsapp.com/">
            <button className="mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              CALL US!
            </button>
          </Link>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className="text-xl text-blue-400"> 📧 Email:</p>
            <div className="ml-6">
              <p>iamdebopriyo@gmail.com</p>
            </div>
          </div>
          <Link to="https://mail.google.com/mail/u/1/#inbox?compose=jrjtXMnpzLDGtTPGNRBmWqvvXjNTqNJndTNfSKTfWRgTXwgmgsQKCvBhHmvmwRSmcJZCjPDv">
            <button className="mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              EMAIL US!
            </button>
          </Link>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className="text-xl text-blue-400"> 🕒 Hours:</p>
            <div className="ml-6">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <Link to="https://www.rapidtables.com/tools/notepad.html">
            <button className="mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              KEEP NOTE!
            </button>
          </Link>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className="text-xl text-blue-400"> #️⃣Follow Us:</p>
            <div className="ml-6">
              <p className="font-semibold">
                Stay connected and get the latest updates, new releases, and
                special offers by following us on social media:
              </p>
              <p className="font-mono">Click on them!</p>
              <div className="animate-pulse">
                <Link to="https://www.youtube.com/channel/UCZjWgj1akpvlxGymUyxBsig">
                  ❥ Youtube
                </Link>
                <br />
                <Link to="https://www.instagram.com/debopriyo_ghosh_/">
                  ❥ Instagram
                </Link>
                <br />
                <Link to="https://www.linkedin.com/in/debopriyo-ghosh-648825225/">
                  ❥ LinkedIn
                </Link>
                <br />
                <Link to="https://github.com/Debopriyo396">❥ Github</Link>
              </div>
              <br />
            </div>
          </div>
          <div className="font-bold text-3xl text-blue-400">
            💌THANK YOU FOR YOUR LOVELY VISIT!
          </div>
          <Link to="/">
            <button className="mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              GO BACK TO HOME!
            </button>
          </Link>
        </div>
      </div>
      <br />
      <div className="order-1 w-full ">
        <video className="w-full h-auto" autoPlay muted playsInline loop>
          <source src={BookVdoCont} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default Contact;
