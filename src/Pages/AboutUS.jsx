import img3 from "../assets/img3.png";
import look1 from '../assets/look1.png';
import im6 from '../assets/img6.png'; 

const AboutUs = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center pt-10 px-4">
      <div className="w-[900px] h-[600px] rounded-[100px] overflow-hidden bg-white flex items-center justify-center mb-16 relative">
        <img
          src={img3}
          alt="About Us"
          className="w-full h-full object-cover rounded-[100px]"
        />
        <button
          className="absolute w-[300px] h-[100px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFFB2] rounded-[50px] flex items-center justify-center"
          onClick={() => {
            document.getElementById('rectangle-3').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span
            className="text-black text-center font-[Changa One] font-[400] text-[36px] leading-[22px]"
          >
            Listen
          </span>
        </button>
      </div>

      <div className="max-w-[1233px] px-4">
        <p className="font-[Cairo] font-bold text-[40px] leading-[60px] text-[#A19D9D] text-center">
          My favourite hobby is swimming. I like swimming because I like to go to the beach on summer days.
          <br />
          Swimming is good for the body because it makes it stronger and makes me look in shape.
          <br />
          I learned to swim when I was two years old. I don’t remember if I was afraid or not.
          <br />
          I am very thankful that my father taught me at a young age.
        </p>
      </div>

      <div className="w-full max-w-[1000px] bg-gray-100 rounded-3xl mt-[60px] mx-auto flex flex-col items-center justify-start pt-[20px] pb-[20px] gap-6">
        <img 
          src={im6} 
          alt="cover" 
          className="w-[670px] h-[500px] rounded-[80px] mt-[100px]" 
        />

        <img 
          src={look1}
          alt="controls" 
          className="w-[600px] h-[540px]" 
        />
      </div>
    </div>
  );
};

export default AboutUs;
