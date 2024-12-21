export default function SignUp() {
    return (
      <div>
        {/* Image Section */}
        <div className="relative w-full h-[40vh] mb-6">
          <img
            className="w-full h-full object-cover"
            src="/sip.png" // Ensure the correct path to your image
            alt="404 Error"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-semibold">
            <div>About Us</div>
            <div className="text-sm">Home &gt; About</div>
          </div>
        </div>
  
        {/* About Section Images */}
        <div className="flex flex-col items-center gap-6">
          {/* First Image */}
          <div className="w-full max-w-[1120px] px-6">
            <img
              className="w-full h-auto object-contain"
              src="au.png"
              alt="About Us Section 1"
            />
          </div>
  
          {/* Second Image */}
          <div className="w-full max-w-[1120px] px-6">
            <img
              className="w-full h-auto object-contain"
              src="au2.png"
              alt="About Us Section 2"
            />
          </div>
        </div>
       
        <div className="relative text-center">
  {/* Main Image and Overlay Text */}
  <div className="relative inline-block">
    <img
      src="au3.png"
      alt="Team Member"
      className="w-full h-auto"
    />
    <h1 className="absolute top-1/3 left-1/2 font-[48px] transform -translate-x-1/2 text-white text-2xl font-bold">
      Team Member
    </h1>
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br /> Varius sed pharetra dictum neque massa congue
    </p>
  </div>

  {/* Images with Names and Occupations */}
  <div className="relative">
  <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex gap-4">
    {/* Each Image Container */}
    {[
      { name: "Mark Henry", occupation: "Owner", src: "au4.png" },
      { name: "Lucky Helen", occupation: "Chef", src: "au4.png" },
      { name: "Moon Henry", occupation: "Founder", src: "au4.png" },
      { name: "Tom Monrow", occupation: "Specialist", src: "au4.png" },
    ].map((person, index) => (
      <div
        key={index}
        className="relative flex flex-col items-center w-[212px] h-[298px]"
      >
        <img
          className="object-cover object-center rounded-lg w-full h-[80%]" // Adjust height as needed
          alt={person.name}
          src={person.src}
        />
        <h2 className="mt-2 text-sm sm:text-base font-semibold text-gray-800">
          {person.name}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          {person.occupation}
        </p>
      </div>
    ))}
  </div>
</div>

<section className="text-black body-font">
<div className="container px-5 py-10 mx-auto">
  {/* Title Section */}
  <div className="text-left mb-2">
    <h1 className="font-great-vibes text-[48px] font-medium text-[#FF9F0D]">
      Testimonials
    </h1>
    <h1 className="title-font font-sembold sm:text-4xl text-3xl font-medium text-black">
      What our client are saying
    </h1>
  </div>

  {/* Testimonial Section */}
  <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <div className="bg-white">
      {/* Center the Image */}
      <div className="flex justify-center items-center mb-4">
        <div className="relative rounded-full bg-gradient-to-b from-black to-white w-40 h-40 flex justify-center items-center">
          <img
            className="rounded-full w-36 h-36 object-cover"
            src="rs15.png"
            alt="Centered Image"
          />
        </div>
      </div>

      {/* Center the SVG and Testimonial */}
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

        {/* Star Rating */}
        <div className="flex justify-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 24"
            className="w-auto h-6"
          >
            <polygon points="12,2 15,10 24,10 17,14 19,22 12,17 5,22 7,14 0,10 9,10" fill="#FF9F0D" />
            <polygon points="36,2 39,10 48,10 41,14 43,22 36,17 29,22 31,14 24,10 33,10" fill="#FF9F0D" />
            <polygon points="60,2 63,10 72,10 65,14 67,22 60,17 53,22 55,14 48,10 57,10" fill="#FF9F0D" />
            <polygon points="84,2 87,10 96,10 89,14 91,22 84,17 77,22 79,14 72,10 81,10" fill="#FF9F0D" />
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
   </section>
   
   <div className="relative text-center bg-gray-50 min-h-screen flex flex-col items-center">
  {/* Title and Description */}
  <div className="mt-8 text-gray-800">
    <h1 className="text-4xl font-bold mb-4">Our Food Menu</h1>
    <p className="text-sm text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br /> Varius sed pharetra dictum neque massa congue
    </p>
  </div>

  {/* Categories */}
  <ol className="flex justify-center items-center gap-6 mt-8 text-gray-800 text-lg font-medium">
    <li>Breakfast</li>
    <li>Lunch</li>
    <li>Dinner</li>
    <li>Dessert</li>
    <li>Drink</li>
    <li>Snack</li>
  </ol>

  {/* Product List */}
  <div className="flex justify-between gap-8 mt-12 w-full max-w-6xl">
    {/* Left Side */}
    <div className="bg-gray-100 rounded-md p-4 space-y-4 flex-1">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2"
        >
          <div className="flex flex-col">
            <p className="text-gray-800 font-medium text-sm">
              Alder Grilled Chinook Salmon
            </p>
            <p className="text-gray-600 text-sm">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-gray-600 text-sm">560 CAL</p>
          </div>
          <p className="text-[#FF9F0D] font-semibold">32$</p>
        </div>
      ))}
    </div>

    {/* Right Side */}
    <div className="bg-white rounded-md p-4 space-y-4 flex-1">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2"
        >
          <div className="flex flex-col">
            <p className="text-gray-800 font-medium text-sm">
              Alder Grilled Chinook Salmon
            </p>
            <p className="text-gray-600 text-sm">
              Toasted French bread topped with romano, cheddar
            </p>
            <p className="text-gray-600 text-sm">560 CAL</p>
          </div>
          <p className="text-[#FF9F0D] font-semibold">32$</p>
        </div>
      ))}
    </div>
 </div>


 <div className="flex justify-center items-center">
  <button
    type="button"
    className="px-6 py-2 text-sm text-[#FF9F0D] bg-white border-2 border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition-colors duration-300"
  >
    View Menu
  </button>
</div>
 </div>
 </div>
      </div>
    );
  }
  