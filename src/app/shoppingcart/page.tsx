import React from 'react';

const products = [
  {
    name: "Burger",
    image: "/sc1.png", // Replace with your actual image paths
    price: 35.0,
    quantity: 15,
    total: 221.0,
  },
  {
    name: "Fresh Lime",
    image: "/sc2.png",
    price: 25.0,
    quantity: 25,
    total: 521.0,
  },
  {
    name: "Pizza",
    image: "/sc3.png",
    price: 15.0,
    quantity: 10,
    total: 421.0,
  },
  {
    name: "Chocolate Muffin",
    image: "/sc4.png",
    price: 45.0,
    quantity: 10,
    total: 521.0,
  },
  {
    name: "Cheese Butter",
    image: "/sc5.png",
    price: 15.0,
    quantity: 10,
    total: 325.0,
  },
];

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
          <div>Shopping Cart</div>
          <div className="text-sm">Home &gt; Shopping cart</div>
        </div>
      </div>

      {/* Table Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-3 mx-auto">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Product
                  </th>
                  <th className="px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Quantity
                  </th>
                  <th className="px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Total
                  </th>
                  <th className="px-4 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td className="px-4">
                      <div className="bg-gray-100 rounded-md p-4 flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="bg-gray-100 h-20 w-20 object-cover rounded"
                        />
                        <h4 className="text-sm text-black font-semibold">{product.name}</h4>
                      </div>
                    </td>
                    <td className="px-4 py-3">${product.price.toFixed(2)}</td>
                    <td className="px-4 py-3">{product.quantity}</td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      ${product.total.toFixed(2)}
                    </td>
                    <td className="w-10 text-center">
                    <button className="text-red-500 hover:underline">&#10005;</button>
                    </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
        <h1 className='font-semibold text-[32px]'>
            Coupon Code</h1>
        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
    {/* Input Field */}
    <input
      type="text"
      placeholder="Enter Here Code"
      className="flex-1 px-4 py-2 text-gray-600 bg-white focus:outline-none"
    />

    {/* Search Button */}
    <button className="px-10 bg-[#FF9F0D] text-white hover:bg-orange-500 text-center transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
      </svg>
      Apply
    </button>
  </div> 
  </div>
  <div className="bg-gray-100 rounded-md p-2 space-y-4">
          <h1 className="text-[20px] font-semibold">Total Bill</h1>
              {/* Product List */}
              {[{
                price: "$120.00", 
                name: "Cart Subtotal",
            }, {
                price: "$00.00",
                name: "Shipping Charges",
            }, {
                price: "$205.00",
                name: "Total Amount",
              }].map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                    {/* Left Side: Image and Product Name */}
                    <div className="flex items-center">
                      <p className="text-gray-600 text-sm">{product.name}</p>
                    </div>

                    {/* Right Side: Product Price */}
                    <p className="text-gray-600 text-sm">{product.price}</p>
                  </div>
                ))}
            <div className="flex items-center mt-4 lg:w-2/3 w-full">
            
            <button className="flex text-white bg-[#FF9F0D] border-0 px-10 py-2 hover:bg-indigo-600 rounded overflow-hidden">
              Proceed to Checkout
            </button>
          </div>    
        </div>
        
        </div>
    </div>
  );
}
