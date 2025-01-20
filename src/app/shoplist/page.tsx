import React from "react";
import { GetShopListData } from "@/sanity/sanaity.query";

export default async function ShopList() {
  const productData = await GetShopListData();
  const products = [
    { img: "img/products/os1.png", title: "Fresh Lime", price: "$38.00" },
    { img: "img/products/os2.png", title: "Chocolate Muffin", price: "$28.00" },
    { img: "img/products/os3.png", title: "Burger", price: "$21.00" },
    { img: "img/products/os4.png", title: "Country Burger", price: "$45.00" },
    { img: "img/products/os5.png", title: "Drink", price: "$23.00" },
    { img: "img/products/os6.png", title: "Pizza", price: "$43.00" },
    { img: "img/products/os7.png", title: "Cheese Butter", price: "$10.00" },
    { img: "img/products/os8.png", title: "Sandwiches", price: "$12.00" },
    { img: "img/products/os9.png", title: "Country Burger", price: "$45.00" },
    { img: "img/products/os10.png", title: "Drink", price: "$23.00" },
    { img: "img/products/os11.png", title: "Pizza", price: "$43.00" },
    { img: "img/products/os12.png", title: "Cheese Butter", price: "$10.00" },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Sidebar for Products */}
      <div className="w-full lg:w-3/4 p-4">
  {/* Sort By Section */}
  <div className="flex items-center mb-4 space-x-16">
    {/* Sort By */}
    <div className="flex items-center">
      <p className="text-gray-700 mr-4">Sort by:</p>
      <div className="relative w-[236px]">
        <div className="block w-full h-[46px] bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded">
          Newest
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Show */}
    <div className="flex items-center">
      <p className="text-gray-700 mr-4">Show:</p>
      <div className="relative w-[236px]">
        <div className="block w-full h-[46px] bg-white border border-gray-300 text-gray-600 py-2 px-4 pr-8 rounded">
          Default
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {productData.map((product:any, index:any) => (
            <div
              key={index}
              className="w-full h-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col p-4"
            >
              {/* Image Section */}
              <div className="bg-gray-100 flex justify-center items-center w-[312px] h-[320px] rounded-md">
               <a href={`/shopdetail/${product.slug}`}>
                  <img
                    src={process.env.BASE_URL+`/${product.image}`}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
              </div>
              {/* Title and Price Section */}
              <div className="mt-2">
              <a href={`/shopdetail/${product.slug}`}>
                <h3 className="text-base font-medium text-[#151875]">
                  {product.title}
                </h3>
              </a>
                <p className="text-lg font-bold text-[#FF9F0D]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar for Filtering */}
      <div className="w-full lg:w-1/4 p-4 bg-gray-50 shadow-md">
        <div className="space-y-6">
          {/* Filtering Options */}
          {/* Other Filters */}
        </div>

        <div className="flex flex-col space-y-4">
  {/* Input and Search Button */}
  <div className="flex items-center border border-gray-300 rounded overflow-hidden">
    {/* Input Field */}
    <input
      type="text"
      placeholder="Search Product"
      className="flex-1 px-4 py-2 text-gray-600 bg-white focus:outline-none"
    />

    {/* Search Button */}
    <button className="px-4 py-2 bg-[#FF9F0D] text-white hover:bg-orange-500 transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.2-5.65a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    </button>
  </div> 

  <h1 className="font-semibold">
    Catagory
  </h1>
  <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
                Sandwiches
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
               Burger
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
                Chicken Chup
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
                Drink
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
                Pizza
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
               Thi
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
                Non Veg
              </label>
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="same-address"
                name="same-address"
                className="mr-2 h-5 w-5 accent-[#FF9F0D]"
              />
              <label htmlFor="same-address" className="text-gray-600">
                Uncatagorized
              </label>
            </div>

            <img
            src="os13.png"
            />

            <h1 className="font-semibold">
              Filter By Price
            </h1>

            <img
            src="os14.png"
            />
            <p className="flex justify-between items-center">
  <span>From $0 to $8000</span>
  <span className="text-black cursor-pointer">Filter</span>
</p>
<h1 className="font-semibold">
              Latest Products
            </h1>

             {/* Product List */}
             {[{
                name: "Pizza",
                price: "$35.00",
                image: "os15.png"
              }, {
                name: "Cupcake",
                price: "$35.00",
                image: "os15.png"
              }, {
                name: "Cookies",
                price: "$35.00",
                image: "os15.png"
              }, {
                name: "Burger",
                price: "$35.00",
                image: "os15.png"
              }].map((product, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="bg-gray-100 h-20 w-auto" />
                  <h4 className="text-sm text-black font-semibol font-Helvetica">
                    {product.name} <br /><br /> {product.price}
              </h4>
            
                </div>
              ))}
<p style={{ lineHeight: "1.8" }}>
  Services &nbsp;&nbsp; Our Menu &nbsp;&nbsp; Pizza <br />
  Cupcake &nbsp;&nbsp; <span style={{ color: "#FF9F0D" }}>Burger</span> &nbsp;&nbsp; Cookies <br />
  Our Shop &nbsp;&nbsp; Tandoori Chicken
</p>
       </div>
    </div>
    </div>
  );
}
