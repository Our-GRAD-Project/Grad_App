import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full bg-[#0088FA] h-[100px] flex items-center justify-between px-10">
      <h1
        className="text-white font-[Jolly Lodger] text-[48px] sm:text-[64px] leading-[22px]"
        style={{ fontFamily: "Jolly Lodger, cursive" }}
      >
        Baseera
      </h1>

      <nav className="flex gap-6 sm:gap-10 text-white text-base sm:text-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/library">Library</Link>
        <Link to="/me">Me</Link>
      </nav>
    </header>
  );
};

export default Navbar;
