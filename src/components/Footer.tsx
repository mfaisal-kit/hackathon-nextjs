export default function Footer() {
  return (
    <>
      <section className="bg-black text-gray-300 body-font relative">
      <div className="container border-[#FF9F0D] px-5 py-24 mx-auto flex flex-wrap justify-between items-center">
  {/* Left Section: Heading and Paragraph */}
  <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
    <h1 className="text-3xl font-bold mb-4 text-white">
      <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
    </h1>
    <p className="text-gray-400 text-lg leading-relaxed">
      Don’t wait! Make a smart & logical quote here. It’s pretty easy.
    </p>
  </div>

  {/* Right Section: Input with Button */}
  <div className="w-full md:w-auto text-right flex items-center">
    <div className="relative">
      <input
        type="text"
        placeholder="Enter your email"
        className=" py-2 pr-24 bg-[#FF9F0D] text-white border-r-0 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
      />
      <button className="px-4 py-2 text-lg font-medium bg-white text-[#FF9F0D] border-t border-b border-gray-300 hover:bg-gray-200">
        Subscribe
      </button>
    </div>
  </div>

  {/* Decorative Line */}
  <div className="w-full mt-10">
    <hr className="border-t-2 border-[#FF9F0D]" />
  </div>
</div>

        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
             {/* About Us Section */}
    <div className="p-4 mb-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className="text-font-Helvetica text-[24px] text-white mb-8 text-sm">About Us</h2>
      <nav className="flex flex-col space-y-2.5 gap-4">
        <a className="text-white">
          Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.
        </a>
        <a className="text--white">
          <div className="flex items-center">
            <img
              src="f1.png"
              alt="Clock Icon"
              className="w-14 h-14 mr-2"
            />
            <p className="m-0">
              Opening Hours 
              <br />
              Mon-Sat (8:00-6:00)
              <br />
              Sunday - Closed
            </p>
          </div>
        </a>
      </nav>
    </div>

            {/* Useful Links Section */}
            <div className="p-4  lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="text-font-Helvetica text-[24px] text-white mb-8 text-sm">Useful Links</h2>
              <nav className="flex flex-col space-y-2.5 gap-4">
                <a className="text-white">About</a>
                <a className="text-white">News</a>
                <a className="text-white">Partners</a>
                <a className="text-white">Team</a>
                <a className="text-white">Menu</a>
                <a className="text-white">Contacts</a>
              </nav>
            </div>
            {/* Help Section */}
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full ">
              <h2 className="text-font-Helvetica text-[24px] text-white mb-8 text-sm">Help?</h2>
              <nav className="flex flex-col space-y-2.5 gap-4">
                <a className="text-white">FAQ</a>
                <a className="text-white">Terms & Conditions</a>
                <a className="text-white">Reporting</a>
                <a className="text-white">Documentation</a>
                <a className="text-white">Support Policy</a>
                <a className="text-white">Privicy</a>
              </nav>
            </div>
            {/* Recent Posts Section */}
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
  <h2 className="text-font-Helvetica text-[24px] text-white mb-8 text-sm">Recent Posts</h2>
  <nav className="flex flex-col space-y-2.5">
    {/* Post 1 */}
    <a className="text-white flex items-center">
  <img
    src="f2.png"
    alt="Post Thumbnail"
    className="w-12 h-12 mr-4"
  />
  <p className="m-0">
    <span className="font-normal">20 Feb 2022</span>
    <br />
    Keep Your Business
  </p>
</a>

    {/* Post 2 */}
  <a className="text-white flex items-center">
  <img
    src="f2.png"
    alt="Post Thumbnail"
    className="w-12 h-12 mr-4"
  />
  <p className="m-0">
    <span className="font-light">20 Feb 2022</span>
    <br />
    Keep Your Business
  </p>
</a>

    {/* Post 3 */}
    <a className="text-white flex items-center">
      <img
        src="f4.png"
        alt="Post Thumbnail"
        className="w-12 h-12 mr-4"
      />
      <p className="m-0">
        20 Feb 2022
        <br />
        Keep Your Business
      </p>
    </a>
  </nav>
</div>

          </div>

          </div>            
        {/* Background Image */}
        <div
          className="absolute bottom-0 right-0 bg-no-repeat bg-contain w-64 h-64"
          style={{
            backgroundImage: `url('f5.png')`,
          }}
        >

        </div>
      

      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 bg-gray-800 flex flex-wrap flex-col sm:flex-row items-center justify-between">
          {/* Left Section: Copyright Text */}
          <p className="text-white mr-30 text-sm text-center sm:text-center">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-4 pr-4 mt-4 mr-24 sm:mt-0">
  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-white"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89H8.077v-2.89h2.361V10.1c0-2.337 1.393-3.629 3.524-3.629.716 0 1.477.122 1.477.122v1.623h-1.06c-1.045 0-1.37.648-1.37 1.309v1.577h2.337l-.373 2.89h-1.964v7.09C18.343 21.128 22 16.991 22 12z" />
    </svg>
  </a>
  {/* Twitter */}
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-white"
    >
      <path d="M22.46 6.011c-.79.35-1.64.587-2.53.693a4.44 4.44 0 0 0 1.95-2.45 8.923 8.923 0 0 1-2.827 1.084 4.486 4.486 0 0 0-7.63 4.085 12.737 12.737 0 0 1-9.253-4.7 4.46 4.46 0 0 0 1.39 5.986 4.386 4.386 0 0 1-2.034-.564v.056a4.478 4.478 0 0 0 3.588 4.39 4.506 4.506 0 0 1-2.026.075 4.49 4.49 0 0 0 4.2 3.12A8.987 8.987 0 0 1 2 19.896a12.675 12.675 0 0 0 6.881 2.016c8.266 0 12.788-6.846 12.788-12.788 0-.195-.004-.39-.013-.585A9.134 9.134 0 0 0 22.46 6.01z" />
    </svg>
  </a>
  {/* Instagram */}
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-white"
    >
      <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm9 1.25a.75.75 0 1 0 0 1.5h.001a.75.75 0 0 0 0-1.5zm-5.25 2A5.25 5.25 0 1 0 16.25 12a5.25 5.25 0 0 0-5.25-5.25zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  </a>
  {/* YouTube */}
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-white"
    >
      <path d="M10 15.5l6-3.5-6-3.5v7zM19.63 3.2c-1.52-.4-7.63-.4-7.63-.4s-6.11 0-7.63.4c-1.52.4-2.7 1.64-3.03 3.12-.39 1.52-.39 4.71-.39 4.71s0 3.19.39 4.71c.33 1.48 1.51 2.72 3.03 3.12 1.52.4 7.63.4 7.63.4s6.11 0 7.63-.4c1.52-.4 2.7-1.64 3.03-3.12.39-1.52.39-4.71.39-4.71s0-3.19-.39-4.71c-.33-1.48-1.51-2.72-3.03-3.12z" />
    </svg>
  </a>
  {/* Pinterest */}
  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="fill-white"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12c0 5 3 9.3 7.3 11-.1-.9-.2-2.3.1-3.3.2-.8 1.5-5.4 1.5-5.4s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.8.9 1.8 2 0 1.2-.8 3-1.2 4.6-.4 1.4.8 2.5 2.2 2.5 2.7 0 4.6-2.8 4.6-6.9 0-3.6-2.6-6.1-6.3-6.1-4.3 0-7 3.2-7 6.6 0 1.2.4 2.4 1 3.1.3.4.3.5.2 1-.1.3-.4 1-.5 1.2-.2.3-.5.4-.9.3-1.6-.7-2.6-2.7-2.6-4.9 0-3.7 3.1-8.2 9.2-8.2 4.9 0 8.1 3.6 8.1 7.4 0 5-2.8 8.7-6.9 8.7-1.4 0-2.7-.8-3.1-1.7l-.9 3.6c-.3 1.1-1 2.3-1.5 3.1 1.1.4 2.3.6 3.5.6 6.6 0 12-5.4 12-12C24 5.4 18.6 0 12 0z" />
    </svg>
  </a>
</div> 
          </div>
        </div>

        </section>
    </>
  );
}
