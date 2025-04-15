import heroImage from "../assets/headpic.jpeg";
import Hero from "../components/Hero";
import Slider from '../components/Slider';
import BookSelection from '../components/BookSelection';
import BooksSection from '../components/BooksSection';

export default function Home() {
  return (
    <>
      <section className="relative mx-auto mt-8 w-[90%] max-w-[1320px] h-[800px] rounded-[100px] overflow-hidden">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover rounded-[100px]"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="font-[Montserrat] font-bold  text-white opacity-50 text-[28px] sm:text-[42px] md:text-[60px] lg:text-[72px] leading-tight">
            Read your book
          </h1>

          <p className="font-[Montserrat] font-bold text-white text-[24px] sm:text-[36px] md:text-[50px] lg:text-[60px] leading-tight">
            In short and in less time
          </p>
        </div>
      </section>

      <div className="h-12" />

      <Hero />
      <Slider />
      <BookSelection />
      <BooksSection />

    </>
  );
}
