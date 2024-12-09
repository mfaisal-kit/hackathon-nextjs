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
      </div>
    );
  }
  