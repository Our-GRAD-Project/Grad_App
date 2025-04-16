import React from 'react';
import pho1 from '../assets/pho1.png';
import pho2 from '../assets/pho2.png';
import pho3 from '../assets/pho3.png';
import pho4 from '../assets/pho4.png';
import pho5 from '../assets/pho5.png';
import pho6 from '../assets/pho6.png';

const images = [pho1, pho2, pho3, pho4, pho5, pho6];

const BookSelection = () => {
  return (
    <div className="w-full h-[1211px] bg-[#0088FA] flex flex-col items-center py-14">
      <div className="text-left w-[90%] max-w-[1340px] mb-12">
        <h2 className="text-[64px] font-bold leading-[100%] tracking-[0] font-[Montserrat] text-white">
          What Books are you<br />interested in?
        </h2>
        <p className="w-[867px] h-[120px] text-white text-[49px] font-[Montserrat] font-bold leading-[100%] tracking-[0%] opacity-50 mt-4">
  Choose at least 3 Books for better personalization.
</p>

      </div>

      <div className="grid grid-cols-3 gap-x-[40px] gap-y-[40px]">
        {images.map((img, index) => (
          <div key={index} className="w-[350px] h-[350px] rounded-full overflow-hidden shadow-[0px_4px_100px_#000000B5]">
            <img src={img} alt={`book-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default BookSelection;
