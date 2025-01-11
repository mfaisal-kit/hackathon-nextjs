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
            <span className="text-[#FF9F0D]">Th</span>e Art of speed
            food Quality
            </p>
            <p className="font-inter text-base w-full max-w-md leading-relaxed text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4">
            {/* Vertical Line */}
            <div className="w-px h-full bg-gray-300"></div>
            <img 
            src="rs20.png"
            />
          </div>
            <div className="flex justify-center">
              <button className="w-48 h-14 bg-[#FF9F0D] text-white border-0 focus:outline-none hover:bg-blue-700 rounded-full text-lg">
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
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-white">
            <span className="text-[#FF9F0D]">We</span> Create the best
              <br className="hidden lg:inline-block" />
              foody product
            </h1>
            <div className="text-white ">
  <p className="mb-8 leading-relaxed flex items-start">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
  </p>
  <p className="mb-6 leading-relaxed flex items-start">
    <span className="mr-4 text-white">✔</span>
    Lacus nisi, et ac dapibus sit eu velit in consequat.
  </p>
  <p className="mb-6 leading-relaxed flex items-start">
    <span className="mr-4 text-white">✔</span>
    Quisque diam pellentesque bibendum non dui volutpat fringilla.
  </p>
  <p className="mb-6 leading-relaxed flex items-start">
    <span className="mr-4 text-white">✔</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

            <div className="flex justify-center">
            <button className="w-48 h-14 bg-[#FF9F0D] text-white border-0 focus:outline-none hover:bg-blue-700 rounded-full text-lg">
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
  <span className="text-[#FF9F0D]">Ch</span>oose Food Item
  </h1>
</div>

<div className="flex flex-wrap justify-center gap-4 items-center w-full">
  {/* Each Image */}
  <div className="w-1/4 max-w-sm">

  <div className="relative w-full max-w-4xl mb-4">
  {/* Image */}
 
  <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs5.png"
    />

  {/* First h1: Centered on the image */}
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FF9F0D] bg-white px-6 py-2 rounded-lg text-2xl font-bold">
    Save 30%
  </h1>

  {/* Second h1: Positioned on the top-left */}
  <h1 className="absolute bottom-20 text-white bg-[#FF9F0D] px-4 py-2 rounded-lg text-lg font-bold">
    Fast Food Dish
  </h1>
</div>

  </div>
  <div className="w-1/4 max-w-sm">
  <div className="relative w-full max-w-4xl">
</div>

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

{/* <div className="grid grid-cols-2"></div>
          <div>
          <img
                className="w-full h-full p-2 space-y-2"
                src="/rs10.png"
                alt="Menu Item"
              />
          </div> */}

          
<div className="flex flex-col items-center justify-center text-center w-full mb-8">
  <h1 className="font-great-vibes text-[32px] mb-4 font-medium text-[#FF9F0D]">
    Choose & Pick
  </h1>
  <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
  <span className="text-[#FF9F0D]">Fr</span>om Our Menu
  </h1>
  <p className="text-semibold text-white text-lg gap-6">
  <span style={{ color: '#FF9F0D' }}>Breakfast</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  Lunch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  Dinner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  Dessert &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  Drink &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  Snack &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
  Soups
</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {/* Column 1: Background and Overlay Image */}
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <img 
      src="rs30.png" 
      alt="Background Image" 
      style={{ display: 'block' }} 
    />
    <img 
      src="rs29.png" 
      alt="Centered Overlay Image" 
      style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)' 
      }} 
    />
  </div>

  {/* Column 2: Images with Titles, Descriptions, and Prices */}
  <div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs21.png" alt="Image 21" className="w-16 h-16" />
      
      <div className="text-left">
  <h3 className="text-white font-semibold text-lg">Lettuce Leaf</h3>
  <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
  <p className="font-bold" style={{ color: '#FF9F0D' }}>12.5$</p>
</div>

    </div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs22.png" alt="Image 22" className="w-16 h-16" />
      <div className="text-left">
        <h3 className="text-white font-semibold text-lg">Fresh Breakfast</h3>
        <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="font-bold" style={{ color: '#FF9F0D' }}>14.5$</p>
      </div>
    </div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs23.png" alt="Image 23" className="w-16 h-16" />
      <div className="text-left">
        <h3 className="text-white font-semibold text-lg">Mild Butter</h3>
        <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="font-bold" style={{ color: '#FF9F0D' }}>12.5$</p>
      </div>
    </div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs24.png" alt="Image 24" className="w-16 h-16" />
      <div className="text-left">
        <h3 className="text-white font-semibold text-lg">Fresh Bread</h3>
        <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="font-bold" style={{ color: '#FF9F0D' }}>12.5$</p>
      </div>
    </div>
  </div>

  {/* Column 3: Images with Titles, Descriptions, and Prices */}
  <div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs25.png" alt="Image 25" className="w-16 h-16" />
      <div className="text-left">
        <h3 className="text-white font-semibold text-lg">Glow Cheese</h3>
        <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="font-bold" style={{ color: '#FF9F0D' }}>12.5$</p>
      </div>
    </div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs26.png" alt="Image 26" className="w-16 h-16" />
      <div className="text-left">
        <h3 className="text-white font-semibold text-lg">Italian Pizza</h3>
        <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="font-bold" style={{ color: '#FF9F0D' }}>14.5$</p>
      </div>
    </div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs27.png" alt="Image 27" className="w-16 h-16" />
      <div className="text-left">
        <h3 className="text-white font-semibold text-lg">Slice Beef</h3>
        <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="font-bold" style={{ color: '#FF9F0D' }}>12.5$</p>
      </div>
    </div>
    <div className="flex items-center gap-4 mb-4">
      <img src="rs28.png" alt="Image 28" className="w-16 h-16" />
      <div className="text-left">
        <h3 className="text-white font-semibold text-lg">Mushroom Pizza</h3>
        <p className="text-white text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="font-bold" style={{ color: '#FF9F0D' }}>12.5$</p>
      </div>
    </div>

  </div>
</div>


</div>

          <div className="flex flex-col items-center justify-center text-center w-full mb-12">
  <h1 className="font-great-vibes text-[32px] mb-2 mt-2 font-medium text-[#FF9F0D]"> 
    Chefs</h1>
  <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
  <span className="text-[#FF9F0D]">Me</span>et Our Chef</h1>
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
  <div className="container px-5 py-10 mx-auto">
    <h1 className="font-great-vibes text-[32px] mb-4 font-medium text-[#FF9F0D]">
      Testimonials</h1>
    <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
      What our client are saying</h1>
      <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    
    <div className="bg-white">
{/* Center the Image */}
<div className="flex justify-center items-center mb-8">
  <div className="relative rounded-full bg-gradient-to-b from-black to-white w-40 h-40 flex justify-center items-center">
    <img
      className="rounded-full w-36 h-36 object-cover"
      src="rs15.png"
      alt="Centered Image"
    />
  </div>
</div>



{/* Center the SVG */}
<div className="sm:w-full sm:px-4 sm:text-center text-left p-6 bg-gray-100 rounded-lg shadow-lg">
  <div className="flex sm:flex-col flex-row items-center sm:gap-4 gap-6">
 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="inline-block sm:w-6 sm:h-6 w-8 h-8 text-[#FF9F0D]"
      viewBox="0 0 975.036 975.036"
    >
      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
    </svg>
  
    <p className="leading-relaxed sm:text-base text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
  </div>

  <div className="flex justify-center mt-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 24" className="w-auto h-6">
       Star 1 
      <polygon points="12,2 15,10 24,10 17,14 19,22 12,17 5,22 7,14 0,10 9,10" fill="#FF9F0D" />
       Star 2 
      <polygon points="36,2 39,10 48,10 41,14 43,22 36,17 29,22 31,14 24,10 33,10" fill="#FF9F0D" />
       Star 3 
      <polygon points="60,2 63,10 72,10 65,14 67,22 60,17 53,22 55,14 48,10 57,10" fill="#FF9F0D" />
       Star 4 
      <polygon points="84,2 87,10 96,10 89,14 91,22 84,17 77,22 79,14 72,10 81,10" fill="#FF9F0D" />
       Star 5 
      <polygon points="108,2 111,10 120,10 113,14 115,22 108,17 101,22 103,14 96,10 105,10" fill="none" stroke="#FF9F0D" stroke-width="2" />
    </svg>
  </div>
</div>


      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
      Alamin Hasan
      </h2>
      <p className="text-gray-500">Food Specialist</p>
    </div>
    </div>
    </div>
   
    <div className="flex justify-center items-center gap-4">
  {/* Dot 1: Darker */}
  <div className="w-4 h-4 bg-[#FF9F0D] rounded-full"></div>
  
  {/* Dot 2: Lighter */}
  <div className="w-4 h-4 bg-[#FFCE7F] rounded-full"></div>
  
  {/* Dot 3: Lighter */}
  <div className="w-4 h-4 bg-[#FFCE7F] rounded-full"></div>
  
  {/* Dot 4: Lighter */}
  <div className="w-4 h-4 bg-[#FFCE7F] rounded-full"></div>
</div>

<img
 className="object-cover object-center rounded-lg mb-4"
 alt="Contant Image"
 src="rs16.png"
/>

<div className="flex flex-col items-center justify-center text-center w-full mb-12">
  <h1 className="font-great-vibes text-[32px] mb-2 mt-2 font-medium text-[#FF9F0D]"> 
   Blog Post</h1>
  <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
  <span className="text-[#FF9F0D]">La</span>test News & Blog</h1>
</div>

<div className="flex flex-wrap justify-center gap-4 items-center w-full">
  {/* Each Image */}
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs17.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs18.png"
    />
  </div>
  <div className="w-1/4 max-w-sm">
    <img
      className="object-cover object-center rounded-lg"
      alt="Content Image"
      src="rs19.png"
    />
  </div>
  </div>

</section>          
      </div>
    </>    
    
  );
}
