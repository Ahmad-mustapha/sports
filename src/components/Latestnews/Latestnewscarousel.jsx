import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ui/Card";
import Activity1 from '../../assets/activity1.jpeg'
import Activity2 from '../../assets/activity2.jpeg'
import Activity3 from '../../assets/activity3.jpeg'
import Activity4 from '../../assets/activity4.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";

const lastestNewsdata = {
  tennis: [
    { id: 1, title: "Tennis Match 1", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity1, date: "Friday 6 December",},
    { id: 2, title: "Tennis Match 2", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity2,date: "Friday 6 December", },
    { id: 3, title: "Tennis Match 3", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity3,date: "Friday 6 December", },
    { id: 4, title: "Tennis Match 4", description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity4,date: "Friday 6 December", },
],
  padel: [
    { id: 1, title: 'My PadelClub Heerhugowaard', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity1, date: 'Friday 6 December',},
    { id: 2, title: 'Weijver Padel', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity2, date: 'Friday 6 December',},
    { id: 3, title: 'Padel Club Hem', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity3, date: 'Friday 6 December',},
    { id: 4, title: 'Padel Next', description: "You've read a lot of my blogs, and you now by now that I'm in love with tennis. But do you know what I'm curious about now? What kind of tennis player are you? ", image: Activity4, date: 'Friday 6 December',},
  ]
}

export const Latestnewscarousel = ({ selectedLatestNews }) => {
  const carouselNewsData = lastestNewsdata[selectedLatestNews];
  // console.log(carouselNewsData);
  
  
  const [visibleSlides, setVisibleSlides] = useState(4); // Default visible slides

  // Function to calculate visible slides based on window width
  const calculateVisibleSlides = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    // Set initial visible slides
    setVisibleSlides(calculateVisibleSlides());

    // Update visible slides on window resize
    const handleResize = () => {
      setVisibleSlides(calculateVisibleSlides());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Carousel
        visibleSlides={visibleSlides} // Dynamically set visible slides
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {carouselNewsData.map(({ id, title, description, image, date}) => (
            <CarouselItem key={id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="relative bg-white lg:h-[74vh]">
                    <div className="h-[35vh]">
                        <img
                            className="w-full h-full object-cover"
                            src={image || 'Paceholde'}
                            alt={title}
                        />
                    </div>
                    <CardContent className="flex flex-col h-[40vh]">
                        <div>
                            <p className="text-[.8rem] text-[#999] mt-2">{date}</p>
                            <p className="text-[1.2rem] lg:text-[1.2rem] font-[500]">{title}</p>
                            <p className="text-[.9rem]">{description}</p>
                        </div>
                        <div className="flex justify-end mt-6 mb-4 absolute bottom-0 right-2"><Link className="font-[700] text-orange-500 text-[1.05rem] flex items-center">Show article <IoIosArrowRoundForward className="text-[1.5rem] font-[600]"/></Link></div>
                    </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};


// PropTypes validation for selectedLatestNews prop
Latestnewscarousel.propTypes = {
  selectedLatestNews: PropTypes.string.isRequired,
};