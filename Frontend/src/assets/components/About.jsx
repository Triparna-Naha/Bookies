import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div>
        <div class="bg-white py-24 sm:py-32 bg-purple-100">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                  Transactions every 24 hours
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  44 million
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                  Assets under holding
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  $119 trillion
                </dd>
              </div>
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-gray-600">
                  New users annually
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  46,000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 p-6 rounded-lg shadow-lg text-purple-900">
        <h2 class="text-2xl font-bold text-center mb-6">
          What Our Customers Say
        </h2>

        <div class="flex flex-wrap justify-center gap-6">
          <div class="bg-white p-4 rounded-lg shadow-md max-w-sm">
            <div class="flex items-center mb-4">
              <img
                src="DgReview.jpg"
                alt="Customer Photo"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-semibold">Debopriyo Ghosh</h3>
                <p class="text-gray-600 text-sm">Customer</p>
              </div>
            </div>
            <p class="text-gray-800">
              “The service was excellent, and the book selection was amazing. I
              will definitely return!”
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-md max-w-sm">
            <div class="flex items-center mb-4">
              <img
                src="MaReview.jpg"
                alt="Customer Photo"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-semibold">Moumita Ghosh</h3>
                <p class="text-gray-600 text-sm">Premium User</p>
              </div>
            </div>
            <p class="text-gray-800">
              “I love this bookstore! The staff is always so helpful and the
              ambiance is perfect.”
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-md max-w-sm">
            <div class="flex items-center mb-4">
              <img
                src="TnReview.jpg"
                alt="Customer Photo"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-semibold">Triparna Naha</h3>
                <p class="text-gray-600 text-sm">Influencer</p>
              </div>
            </div>
            <p class="text-gray-800">
              “A fantastic place to find rare books and enjoy a peaceful reading
              atmosphere.”
            </p>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 p-6 rounded-lg shadow-lg text-purple-900">
        <h2 class="text-2xl font-bold text-center mb-6 animate-bounce">
          Your Precious Ratings
        </h2>

        <div class="flex flex-wrap justify-center gap-6">
          <div class="bg-white p-4 rounded-lg shadow-md max-w-sm">
            <div class="flex items-center mb-4">
              <img
                src="CatReview.jpg"
                alt="Customer Photo"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-semibold">Meaww</h3>
                <p class="text-gray-600 text-sm">Fish Thief</p>
              </div>
            </div>
            <div class="flex items-center mb-2">
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
            </div>
            <p class="text-gray-800">
              "Meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw
              meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw
              meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw
              meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw meaw."
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-md max-w-sm">
            <div class="flex items-center mb-4">
              <img
                src="SgReview.jpg"
                alt="Customer Photo"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-semibold">Souradip Ghosh</h3>
                <p class="text-gray-600 text-sm">Freelancer</p>
              </div>
            </div>
            <div class="flex items-center mb-2">
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-gray-300 text-xl">&#9733;</span>
            </div>
            <p class="text-gray-800">
              "I love visiting BookStore! It’s a book lover's paradise with an
              impressive range of titles and a welcoming environment. The staff
              is always ready to help and recommend fantastic reads. A perfect
              place to unwind and discover new favorites."
            </p>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-md max-w-sm">
            <div class="flex items-center mb-4">
              <img
                src="JsReview.jpg"
                alt="Customer Photo"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-semibold">Abdul Sins</h3>
                <p class="text-gray-600 text-sm">Teacher</p>
              </div>
            </div>
            <div class="flex items-center mb-2">
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
              <span class="text-yellow-500 text-xl">&#9733;</span>
            </div>
            <p class="text-gray-800">
              "BookStore offers an incredible selection of books in a cozy
              atmosphere. The staff is knowledgeable and friendly, making every
              visit a pleasure. Whether you're searching for a bestseller or a
              hidden gem, this bookstore has it all!"
            </p>
          </div>
        </div>
      </div>

      <div className="mt-28 items-center justify-center text-center">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl">
            <span className="text-purple-400 font-extrabold">About Us </span>
          </h1>
          <p className="mt-6 font-semibold text-xl">Welcome to BookStore!</p>
          <br />
          <p>
            At BookStore, we believe that a love for books is a gateway to
            endless possibilities.
            <p>
              Nestled in the heart of Booktown, we are more than just a
              bookstore—we
            </p>{" "}
            are a vibrant community of readers, dreamers, and storytellers.
          </p>
          <br />
          <div>
            <div className="mt-5">
              {" "}
              <p className=" text-blue-400 font-extrabold text-2xl ">
                {" "}
                Our Story
              </p>
              <div className="ml-6">
                <p>
                  Founded with a passion for{" "}
                  <p>
                    literature and a commitment to fostering a love for reading,{" "}
                  </p>
                  <p> BookStore began as a small, cozy corner where </p>
                  <p>
                    book enthusiasts could come together. Over the years, we’ve
                    grown
                  </p>{" "}
                  into a haven for those seeking the perfect read,{" "}
                  <p>a quiet place to escape, or </p> a thoughtful gift for a
                  loved one.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className="text-xl text-blue-400 font-extrabold text-2xl">
              {" "}
              What We Offer
            </p>
            <div className="ml-6">
              <p>
                🫧 Curated Selection: From timeless classics{" "}
                <p>
                  to the latest bestsellers, our carefully curated selection
                  includes something for every reader.Explore
                </p>{" "}
                our diverse genres, from fiction and non-fiction{" "}
                <p> to children’s books and graphic novels.</p>
              </p>
              <br />
              <p>
                🫧 Warm Atmosphere: Step into our store and immerse yourself{" "}
                <p> </p> in a welcoming environment designed to make every visit{" "}
                special . <p> </p> Our knowledgeable staff is always on hand to
                offer recommendations <p></p>
                and help you find your next great read.
              </p>
              <br />
              <p>
                🫧 Events and Community: Join us for author signings, book clubs,{" "}
                <p></p>
                and special events. At BookStore, we believe in the power of{" "}
                <p></p>
                books to bring people together and create meaningful <p></p>
                connections.
              </p>
            </div>
          </div>
          <Link to="/signup">
            <button className="mt-6 text-white bg-purple-400 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              SIGN-UP ?
            </button>
          </Link>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className="text-xl text-blue-400 font-extrabold text-2xl">
              {" "}
              Our Mission
            </p>
            <div className="ml-6">
              <p>
                Our mission is simple: to ignite the imagination and inspire{" "}
                <p></p> a lifelong love for reading. Whether you’re an avid
                reader <p></p> or just starting your literary journey, we’re
                here to <p></p>support and celebrate your passion for books.
              </p>
            </div>
          </div>
          <Link to="/course">
            <button className="mt-6 text-white bg-purple-400 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              Go to Courses!
            </button>
          </Link>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className=" text-blue-400 font-extrabold text-2xl">
              {" "}
              Get in Touch
            </p>
            <div className="ml-6">
              <p>
                We’d love to hear from you! Whether you have a question about{" "}
                <p></p>
                our inventory, need help with an order, or just want to share{" "}
                <p></p>
                your favorite book recommendation, feel free to reach out. Visit{" "}
                <p></p>
                us, give us a call, or drop us an email—we’re always here to{" "}
                <p></p>
                connect with fellow book lovers.
              </p>
            </div>
          </div>
          <Link to="/contact">
            <button className="mt-6 text-white bg-purple-400 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              CONTACT US!
            </button>
          </Link>
        </div>

        <div className="ml-0 px-2 ">
          <div className="mt-5">
            {" "}
            <p className=" text-blue-400 font-extrabold text-2xl"> Thank You</p>
            <div className="ml-6">
              Thank you for making BookStore a part of your reading adventures.{" "}
              <p></p>
              We look forward to many more chapters together!
            </div>
          </div>
          <br />
          <div className="font-bold text-3xl text-blue-400 justify-center text-center">
            💌VISIT <span className="text-pink-400">AGAIN!</span>
          </div>
          <Link to="/">
            <button className="mt-6 text-white bg-purple-400 px-4 py-2 rounded-md hover:bg-pink-700 duration-300 animate-bounce">
              GO BACK TO HOME!
            </button>
          </Link>
        </div>
      </div>
      <br />
      {/* <div className="order-1 w-full ">
        <video className="w-full h-auto" autoPlay muted playsInline loop>
          <source src={BookVdoCont} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </>
  );
}

export default About;
