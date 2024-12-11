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
              It is Quick & Amusing!
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

<div className="flex flex-col items-center justify-center text-center w-full mb-8">
  <h1 className="font-great-vibes text-[32px] mb-4 font-medium text-[#FF9F0D]">
    Food Category
  </h1>
  <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
    Choose Food Item
  </h1>
</div>

<div className="flex flex-wrap justify-center gap-4 items-center w-full">
  {/* Each Image */}
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs5.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs6.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs7.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs8.png"
    />
  </div>
</div>


<div className="grid grid-cols-2"></div>
          <div>
          <img
                className="w-full h-full p-2 space-y-2"
                src="/rs9.png"
                alt="Menu Item"
              />
          </div>

<div className="grid grid-cols-2"></div>
          <div>
          <img
                className="w-full h-full p-2 space-y-2"
                src="/om6.png"
                alt="Menu Item"
              />
          </div>

<div className="grid grid-cols-2"></div>
          <div>
          <img
                className="w-full h-full p-2 space-y-2"
                src="/rs10.png"
                alt="Menu Item"
              />
          </div>

          <div className="flex flex-col items-center justify-center text-center w-full mb-12">
  <h1 className="font-great-vibes text-[32px] mb-2 mt-2 font-medium text-[#FF9F0D]"> 
    Chefs</h1>
  <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
  Meet Our Chef</h1>
</div>

<div className="flex flex-wrap justify-center gap-4 items-center w-full">
  {/* Each Image */}
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs11.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs12.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs13.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs14.png"
    />
  </div>
</div>

<div className="flex justify-center items-center mt-4 h-full">
  <button className="w-48 h-14 bg-black text-[#FF9F0D] border-b-2 focus:outline-none hover:bg-blue-700 rounded-full text-lg">
    See More
  </button>
</div>

<section className="text-black body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="font-great-vibes text-[32px] mb-4 font-medium text-[#FF9F0D]">
      Testimonials</h1>
    <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
      What our client are saying</h1>
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

{/* Center the Image */}
<div className="flex justify-center items-center mb-8">
  <img
    className="inline-block w-40 h-40 text-gray-400"
    src="rs15.png"
    alt="Centered Image"
  />
</div>

{/* Center the SVG */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  className="inline-block w-8 h-8 text-[#FF9F0D] mb-8"
  viewBox="0 0 975.036 975.036"
>
  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
</svg>
      <p className="leading-relaxed text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
      </p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
        HOLDEN CAULFIELD
      </h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
  
  </div>
</section>



          
      </div>
    </>    
    
  );
}
