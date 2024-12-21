export default function SignUp() {
  return (
    <div>
      {/* Main Container */}
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="relative w-full h-[40vh] mb-8">
          <img
            className="w-full h-full object-cover"
            src="/sip.png" // Ensure the correct path to your image
            alt="Sign Up"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-semibold">
            <div>Checkout Page</div>
            <div className="text-[12px]">Home &gt; Checkout</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Shipping Address Section */}
  <div className="col-span-2">
    <h1 className="text-2xl font-semibold mb-6">Shipping Address</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div>
        {[
          { label: "First Name", id: "first-name", type: "text" },
          { label: "Email Address", id: "email", type: "email" },
          { label: "Company", id: "company", type: "text" },
          { label: "City", id: "city", type: "text", placeholder: "Choose City" },
          { label: "Address 1", id: "address1", type: "text" },
        ].map((field) => (
          <div key={field.id} className="relative mb-4">
            <label htmlFor={field.id} className="block text-sm text-gray-600 mb-2">
              {field.label}
            </label>
            <div className="relative">
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base text-gray-700 py-2 px-4 pr-10 transition-colors"
              />
              {field.id === "city" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          </div>
        ))}

              </div>

              {/* Right Column */}
              <div>
  {[
    { label: "Last Name", id: "last-name", type: "text" },
    { label: "Phone Number", id: "phone", type: "text" },
    { label: "Country", id: "country", type: "text", placeholder: "Choose Country" },
    { label: "Zip Code", id: "zip", type: "text" },
    { label: "Address 2", id: "address2", type: "text" },
  ].map((field) => (
    <div key={field.id} className="relative mb-4">
      <label htmlFor={field.id} className="block text-sm text-gray-600 mb-2">
        {field.label}
      </label>
      <div className="relative">
        <input
          type={field.type}
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base text-gray-700 py-2 px-4 pr-10 transition-colors"
        />
        {field.id === "country" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
    </div>
  ))}
</div>

            </div>

            {/* Billing Address */}
            <h1 className="text-2xl font-semibold mt-8 mb-6">Billing Address</h1>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
                Same as shipping address
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <input
                type="button"
                value="< Back to cart"
                className="flex-1 text-gray-600 bg-white border border-gray-300 text-sm px-4 py-2.5 rounded cursor-pointer"
              />
              <button className="flex-1 text-white bg-[#FF9F0D] py-2.5 px-4 rounded hover:bg-orange-500 transition-colors">
                Proceed to shipping
              </button>
            </div>
          </div>

          {/* Order Summary Section */}
          <div>
  <div className="bg-gray-100 rounded-md p-4 space-y-6">
    {/* Product List */}
    {[
      {
        name: "Chicken Tikka Kabab",
        weight: "150 gm net",
        price: "$50",
        image: "Chicken.png",
      },
      {
        name: "Chicken Tikka Kabab",
        weight: "150 gm net",
        price: "$50",
        image: "Chicken.png",
      },
      {
        name: "Chicken Tikka Kabab",
        weight: "150 gm net",
        price: "$50",
        image: "Chicken.png",
      },
    ].map((product, index) => (
      <div key={index} className="flex items-center gap-4">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="bg-gray-100 h-20 w-auto"
        />
        {/* Product Details */}
        <div className="text-sm text-black">
          <h4 className="font-semibold">{product.name}</h4>
          <p className="text-gray-600">{product.weight}</p>
          <p className="font-bold">{product.price}</p>
        </div>
      </div>
    ))}
  </div>

              {/* Pricing Details */}
              <ul className="text-gray-800 space-y-4">
                <li className="flex justify-between text-base">
                  Sub-total <span className="font-bold">$130</span>
                </li>
                <li className="flex justify-between text-base">
                  Shipping <span className="font-bold">Free</span>
                </li>
                <li className="flex justify-between text-base">
                  Discount <span className="font-bold">50%</span>
                </li>
                <li className="flex justify-between text-base">
                  Tax <span className="font-bold">$54.76</span>
                </li>
                <li className="flex justify-between text-base font-bold">
                  Total <span>$432.65</span>
                </li>
              </ul>

              {/* Place Order Button */}
              <button
                type="button"
                className="w-full text-sm px-4 py-2.5 font-semibold tracking-wide bg-[#FF9F0D] hover:bg-orange-500 text-white rounded-md"
              >
                Place an Order
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
