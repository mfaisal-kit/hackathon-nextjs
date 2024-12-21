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
          <div>404 Error</div>
          <div className="text-[12px]">Home &gt; 404</div>
        </div>
      </div>

      {/* Form Section */}
      <section className="text-gray-600 body-font mt-16 mb-16"> {/* Added `mb-12` for spacing */}
      <div className="container mx-auto flex justify-center items-center min-h-[50vh]">
  <div className="w-full max-w-md bg-gray-100 rounded-lg p-8 flex flex-col">
    <h2 className="text-gray-900 text-lg font-semibold mb-5 text-left" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '20px' }}>
      Sign In
    </h2>
            <div>
  {/* Email Input with Envelope Icon */}
  <div className="relative mb-4 flex items-center border rounded bg-white">
    <span className="ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M2 4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4zm2 0v.01L12 12 20 4.01V4H4zm0 2.08v11.92h16V6.08L12 14 4 6.08z" />
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
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c-3.31 0-6 2.69-6 6v4H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-1V8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4v4H8V8c0-2.21 1.79-4 4-4zm1 8v5h-2v-5h2zm-1 7c.83 0 1.5-.67 1.5-1.5S12.83 16 12 16s-1.5.67-1.5 1.5S11.17 20 12 20z" />
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
    className="mr-2 h-5 w-5 accent-[#FF9F0D] checked:accent-[#FF9F0D] text-white"
    defaultChecked
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
            <div>
  {/* Sign Up with Google */}
  <button className="w-full flex items-center justify-start border py-2 px-4 rounded bg-white mb-4">
    <span className="mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 48 48"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.93 0 6.64 1.68 8.17 3.09l6.22-6.22C34.94 3.48 30.39 2 24 2 14.8 2 7.5 8.73 5.3 17.27l7.49 5.83C13.5 14.87 17.71 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.92 24.49c0-1.43-.12-2.88-.35-4.29H24v8.14h12.94c-.56 3.18-2.73 5.92-5.99 7.72l7.5 5.83C42.65 37.5 46.92 31.54 46.92 24.49z"
        />
        <path
          fill="#FBBC05"
          d="M13.36 28.47c-.79-1.28-1.24-2.77-1.24-4.36 0-1.59.45-3.08 1.24-4.36l-7.49-5.83C3.87 16.72 2 20.23 2 24s1.87 7.28 5.11 9.92l7.49-5.83z"
        />
        <path
          fill="#34A853"
          d="M24 46c6.39 0 11.78-2.1 15.7-5.71l-7.5-5.83c-2.08 1.39-4.76 2.21-8.2 2.21-6.29 0-10.5-5.37-10.89-9.77l-7.49 5.83C9.06 39.19 15.94 46 24 46z"
        />
        <path fill="none" d="M2 2h44v44H2z" />
      </svg>
    </span>
    <span className="text-gray-700">Sign Up with Google</span>
  </button>

  {/* Sign Up with Apple */}
  <button className="w-full flex items-center justify-start border py-2 px-4 rounded bg-white">
    <span className="mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M16.22 1.25a6.12 6.12 0 01-1.37 4.27c-.93 1.08-2.13 1.81-3.4 1.72-.13-1.23.43-2.47 1.25-3.3.95-1.02 2.48-1.75 3.52-1.68zm6.02 14.48c-.22-.5-.53-.98-.91-1.43-.9-1.05-2.2-1.67-3.45-1.69-1.62-.02-2.33.65-3.5.65-1.18 0-2.07-.64-3.48-.63-1.42.01-2.77.85-3.67 2.13-1.56 2.25-1.31 6.5.8 9.55.6.83 1.36 1.76 2.35 1.73 1.02-.03 1.39-.65 3.06-.65 1.68 0 2.01.65 3.06.63 1.01-.02 1.64-.86 2.24-1.68.66-.89 1.13-1.79 1.46-2.65.33-.83.47-1.6.5-1.63-.01-.01-2.68-1.03-2.7-4.18z" />
      </svg>
    </span>
    <span className="text-gray-700">Sign Up with Apple</span>
  </button>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}
