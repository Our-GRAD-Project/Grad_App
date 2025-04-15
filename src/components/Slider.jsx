import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    { src: img1, alt: 'Image 1' },
    { src: img2, alt: 'Image 2' },
    { src: img3, alt: 'Image 3' },
    { src: img4, alt: 'Image 4' },
    { src: img5, alt: 'Image 5' },
    { src: img6, alt: 'Image 6' },
  ];
  
  const Slider = () => {
    const scrollRef = useRef();
  
    const scrollLeft = () => {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: 'smooth',
      });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: 'smooth',
      });
    };
  
    return (
      <div className="bg-white w-full h-[804px] px-[40px] py-[50px]">
      
        <div className="w-full max-w-[1440px] mx-auto px-[40px] mb-10">
  <h2 className="text-[#949494] font-[Montserrat] font-bold text-[50px] leading-[100%]">
    Today
  </h2>
  <h1 className="text-black font-[Montserrat] font-bold text-[50px] leading-[100%]">
    for you
  </h1>
</div>

  
        <div className="relative w-full max-w-[1440px] mx-auto">
          <button
            onClick={scrollLeft}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-[#0088FA] text-white p-3 rounded-full shadow-lg hover:bg-[#0073d1] transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-[#0088FA] text-white p-3 rounded-full shadow-lg hover:bg-[#0073d1] transition"
          >
            <ChevronRight />
          </button>
  
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-[300px] h-[460px] rounded-[20px] overflow-hidden flex-shrink-0 bg-gray-200 shadow"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Slider;