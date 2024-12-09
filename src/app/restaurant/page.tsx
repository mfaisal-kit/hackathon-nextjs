export default function Restaurant() {
  return (
    <>
    <div className="bg-black">
      {/* Hero Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 bg-black md:flex-row flex-col items-center">
          {/* Left Section */}
          <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-great-vibes text-[32px] mb-4 font-medium text-[#FF9F0D]">
              It’s Quick & Amusing!
            </h1>
            <p className="font-helvetica text-[60px] font-semibold w-full max-w-xl leading-tight mb-8 text-gray-300">
              The Art of Speed Food Quality
            </p>
            <p className="font-inter text-base w-full max-w-md leading-relaxed text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <div className="flex justify-center">
              <button className="w-48 h-14 bg-[#FF9F0D] text-white border-0 focus:outline-none hover:bg-blue-700 rounded-lg text-lg">
                See Menu
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="Delicious Food"
              src="/rs1.png" // Ensure the image exists in the `public` folder
            />
          </div>
        </div>
      </section>

      {/* Content Block Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="font-great-vibes text-[32px] mb-4 font-medium text-[#FF9F0D]">
              about us</h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
            We Create the best
              <br className="hidden lg:inline-block" />
              foody product
            </h1>
            <div className="text-white">
  <p className="mb-2 leading-relaxed flex items-start">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
  </p>
  <p className="mb-2 leading-relaxed flex items-start">
    <span className="mr-2 text-white">✔</span>
    Lacus nisi, et ac dapibus sit eu velit in consequat.
  </p>
  <p className="mb-2 leading-relaxed flex items-start">
    <span className="mr-2 text-white">✔</span>
    Quisque diam pellentesque bibendum non dui volutpat fringilla.
  </p>
  <p className="mb-2 leading-relaxed flex items-start">
    <span className="mr-2 text-white">✔</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

            <div className="flex justify-center">
            <button className="w-48 h-14 bg-[#FF9F0D] text-white border-0 focus:outline-none hover:bg-blue-700 rounded-lg text-lg">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
  {/* Upper Image */}
  <div className="w-full max-w-4xl mb-4">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs2.png"
    />
  </div>

  {/* Lower Images */}
  <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
    <div>
      <img
        className="object-cover object-center rounded-lg"
        alt="Content Image"
        src="rs3.png"
      />
    </div>
    <div>
      <img
        className="object-cover object-center rounded-lg"
        alt="Content Image"
        src="rs4.png"
      />
    </div>
  </div>
</div>
</div>
      </section>
      </div>
    </>    
    
  );
}
