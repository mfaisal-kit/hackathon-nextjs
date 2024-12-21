export default function SignUp() {
    return (
      <div>
        {/* Image Section */}
        <div className="relative w-full h-[50vh] mb-6"> {/* Reduced margin-bottom */}
          <img
            className="w-full h-full object-cover"
            src="/sip.png" // Ensure the correct path to your image
            alt="404 Error"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-semibold">
            <div>404 Error</div>
            <div className="text-[12px]">Home &gt; 404</div>
          </div>
        </div>
  
        {/* Main 404 Section */}
        <section className="text-gray-600 body-font mb-6"> {/* Reduced margin-bottom */}
          <div className="container px-5 py-4 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <h1 className="text-4xl md:text-7xl font-bold text-[#FF9F0D] mb-6">404</h1> {/* Added margin-bottom */}
              <p className="leading-relaxed font-bold text-lg md:text-xl text-gray-800 mb-4">
                Oops! Looks like something went wrong.
              </p>
              <p className="text-gray-900 font-medium text-center title-font tracking-wider text-sm mb-2">
                Page cannot be found! We’ll have it figured out in no time.
                <br /> Meanwhile, check out these fresh ideas:
              </p>
            </div>
          </div>
        </section>

        {/* Button */}
        <div className="flex justify-center mb-6"> {/* Reduced margin-bottom */}
          <button 
            className="w-auto text-white bg-[#FF9F0D] py-2 px-6 focus:outline-none hover:bg-orange-500 rounded-md text-lg"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
}
