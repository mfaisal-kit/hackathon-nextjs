export default function Footer() {
  return (
    <>
      <section className="bg-black text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap justify-between items-center">
          {/* Left Section: Heading and Paragraph */}
          <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
            <h1 className="text-white text-3xl font-bold mb-4">
              Still Need Our Support?
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Don’t wait! Make a smart & logical quote here. It’s pretty easy.
            </p>
          </div>

          {/* Right Section: Button */}
          <div className="w-full md:w-auto text-right flex items-center">
  <input
    type="text"
    placeholder="Enter your email"
    className="px-4 py-2 w-64 bg-[#FF9F0D] text-white border-r-0 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
  />
  <button className="px-4 py-2 text-lg font-medium bg-white text-[#FF9F0D] border-t border-b border-gray-300 hover:bg-gray-200">
    Subscribe Now
  </button>
</div>


</div>
          {/* Footer Links */}
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* About Us Section */}
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="text-font-Helvetica text-size-24px text-white mb-4 text-sm">About Us</h2>
              <nav className="flex flex-col space-y-2.5">
                <a className="text-gray-400">Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities worldwide.</a>
                <a className="text-gray-400">Second Link</a>
                <a className="text-gray-400">Third Link</a>
              </nav>
            </div>
            {/* Useful Links Section */}
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium text-white mb-4 text-sm">Useful Links</h2>
              <nav className="flex flex-col space-y-2.5">
                <a className="text-gray-400">About</a>
                <a className="text-gray-400">News</a>
                <a className="text-gray-400">Partners</a>
                <a className="text-gray-400">Team</a>
                <a className="text-gray-400">Menu</a>
              </nav>
            </div>
            {/* Help Section */}
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium text-white mb-4 text-sm">Help?</h2>
              <nav className="flex flex-col space-y-2.5">
                <a className="text-gray-400">FAQ</a>
                <a className="text-gray-400">Terms & Conditions</a>
                <a className="text-gray-400">Reporting</a>
                <a className="text-gray-400">Documentation</a>
              </nav>
            </div>
            {/* Recent Posts Section */}
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
              <h2 className="font-medium text-white mb-4 text-sm">Recent Posts</h2>
              <nav className="flex flex-col space-y-2.5">
                <a className="text-gray-400">First Post</a>
                <a className="text-gray-400">Second Post</a>
                <a className="text-gray-400">Third Post</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
