import React from 'react'
import list from "../../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  
  const filterData = list.filter((data) => data.category === "Free")
 var settings = {
   dots: true,
   infinite: false,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 3,
   initialSlide: 0,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
   ],
 };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free offered Courses</h1>
          <p>
            Discover a world of knowledge with our free books! Dive into a vast
            collection spanning all genres. Whether for study or leisure, we
            have something for everyone. Start your reading journey today at{" "}
            <div className="text-pink-600 text-font-bold text-xl">
              ABSOLUTELY NO COST!!!!
            </div>
            <br />
            <br />
            Books have been a cornerstone of human civilization, preserving
            knowledge and inspiring minds across generations. From ancient
            scrolls to digital e-books, they have shaped societies and ignited
            revolutions. Books have been the silent mentors, guiding dreamers
            and doers alike. In every era, they have been the gateway to wisdom,
            a source of solace, and a spark for innovation, driving humanity
            towards a brighter, more enlightened future.
            <br />
            <div className="text-pink-600 text-font-bold text-xl">
              Explore now!
            </div>
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;