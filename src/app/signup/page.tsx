export default function SignUp() {
    return (
      <div>
        {/* Image Section */}
        <div className="relative w-full h-[40vh]">
          <img
            className="w-full h-full object-cover"
            src="/sip.png" // Ensure the correct path to your image
            alt="Sign Up"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-semibold">
            <div>Sign Up Page</div>
            <div className="text-[12px]">Home &gt; sign up </div>
          </div>
        </div>
  
        {/* Form Section */}
        <section className="text-gray-600 body-font mt-16 mb-16">
          <div className="container mx-auto flex justify-center items-center min-h-[50vh]">
            <div className="w-full max-w-md bg-gray-100 rounded-lg p-8 flex flex-col">
              <h2 className="text-gray-900 text-lg font-semibold mb-5 text-left" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px' }}>
                Sign Up
              </h2>
  
              {/* Name Input with Icon */}
              <div className="relative mb-4 flex items-center border rounded bg-white">
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0-3.866-1.343-5-3-5s-3 1.134-3 5 1.343 5 3 5 3-1.134 3-5z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 px-3 py-2 text-gray-700"
                />
              </div>
  
              {/* Email Input with Envelope Icon */}
              <div className="relative mb-4 flex items-center border rounded bg-white">
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l8 5m0 0l8-5m-8 5v6"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 px-3 py-2 text-gray-700"
                />
              </div>
  
              {/* Password Input with Lock Icon */}
              <div className="relative mb-4 flex items-center border rounded bg-white">
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0-3.866-1.343-5-3-5s-3 1.134-3 5 1.343 5 3 5 3-1.134 3-5z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 px-3 py-2 text-gray-700"
                />
              </div>
  
              {/* Remember Me Checkbox */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2 h-5 w-5 accent-[#FF9F0D]"
                />
                <label htmlFor="remember" className="text-gray-600">
                  Remember me
                </label>
              </div>
  
              {/* Sign Up Button */}
              <button
                className="w-full text-white bg-[#FF9F0D] border-0 py-2 px-4 focus:outline-none hover:bg-orange-500 rounded text-lg"
              >
                Sign Up
              </button>
  
              {/* Forgot Password */}
              <p className="text-right text-sm text-gray-500 mt-2">
                <a href="#">Forgot Password?</a>
              </p>
  
              {/* OR Divider */}
              <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-3 text-gray-500 text-sm">OR</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
  
              {/* Sign Up with Google */}
              <button className="w-full flex items-center justify-start border py-2 px-4 rounded bg-white mb-4">
                <span className="mr-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google Icon"
                    className="h-6 w-6"
                  />
                </span>
                <span className="text-gray-700">Sign Up with Google</span>
              </button>
  
              {/* Sign Up with Apple */}
              <button className="w-full flex items-center justify-start border py-2 px-4 rounded bg-white">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.12 13.39a5.94 5.94 0 01-4.28 4.71c.12-1.48 1.16-2.76 2.7-3.62a3.35 3.35 0 01-2.71-3.32c.44.13.84.18 1.24.18.68 0 1.34-.13 1.94-.4.02 1.17.5 2.19 1.38 3z" />
                  </svg>
                </span>
                <span className="text-gray-700">Sign Up with Apple</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  