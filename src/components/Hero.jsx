export default function Hero() {
    return (
      <section className="w-full h-[450px] bg-[#0088FA] relative overflow-hidden flex items-center justify-center mt-8">
        <div className="w-[1440px] h-[450px] flex gap-[33px] px-10">

          <div className="w-[650px] h-[343px] flex flex-col justify-center space-y-6 text-white ml-[50px]">
            <h1 className="font-montserrat font-bold text-4xl leading-tight">
              <span className="text-white/50">Read your book</span> <br />
              <span className="text-3xl font-bold text-white">briefly and easily</span>
            </h1>
  
            <p className="w-[650px] font-[Montserrat] font-bold text-white text-[16px] leading-[1.4] tracking-[0%] text-justify">
              Our community is made up of talented artists from around the world who
              share a common passion for contemporary art. We seek to showcase the
              diversity of artistic expressions and provide a platform for emerging artists to
              promote their work. With a focus on collaboration and innovation, we strive 
              to push the boundaries of creativity and inspire future generations of artists.
            </p>
  
            <button className="w-[208px] h-[65px] bg-white rounded-[20px] mt-2 flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
                  stroke="#06050F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#06050F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
  
              <span className="font-[Montserrat] font-bold text-[#06050F] text-[16px] leading-[100%] tracking-[0%]">
                Read now
              </span>
            </button>
          </div>
  

          <div className="w-[650px] h-[343px] relative ml-auto translate-x-[100px]">
            {[
              { text: "AI art", top: 0, left: 40 },
              { text: "Photography", top: 10, left: 160 },
              { text: "Music", top: 10, left: 300 },
              { text: "handmade", top: 100, left: 40 },
              { text: "poetry", top: 100, left: 180 },
              { text: "architecture", top: 100, left: 320 },
              { text: "performance", top: 180, left: 100 },
              { text: "design", top: 250, left: 40 },
              { text: "fashion", top: 250, left: 180 },
              { text: "dance", top: 250, left: 320 },
            ].map(({ text, top, left }, i) => (
              <div
                key={text}
                className="absolute px-6 py-2 min-w-[110px] text-center text-white text-sm font-medium rounded-full border border-white/30 bg-white/10 backdrop-blur-md animate-float"
                style={{ top: `${top}px`, left: `${left}px` }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  