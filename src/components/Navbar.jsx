import { Link, useLocation } from "react-router-dom";  // استيراد useLocation

const Navbar = () => {
  const location = useLocation();  
  const isAboutPage = location.pathname === "/about";

  return (
    <header className={`w-full h-[100px] flex items-center justify-between px-10 ${isAboutPage ? 'bg-white' : 'bg-[#0088FA]'}`}>
      <h1
        className={`text-[48px] sm:text-[64px] leading-[22px] ${isAboutPage ? 'text-black' : 'text-white'} font-[Jolly Lodger]`}
        style={{ fontFamily: "Jolly Lodger, cursive" }}
      >
        {isAboutPage && <span className="mr-2">&#8592;</span>} Baseera  
      </h1>

      <nav className={`flex gap-6 sm:gap-10 text-base sm:text-lg ${isAboutPage ? 'text-black' : 'text-white'}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/library">Library</Link>
        <Link to="/me">Me</Link>
      </nav>
    </header>
  );
};

export default Navbar;
