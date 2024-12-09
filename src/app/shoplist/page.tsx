import React from "react";

export default function ShopList() {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full h-full bg-white cursor-pointer hover:shadow-lg transition-all rounded-md flex flex-col items-center text-center p-4"
            >
              {/* Image Section */}
              <div className="bg-gray-100 flex justify-center items-center w-full h-48 rounded-md">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* Title and Price Section */}
              <div className="mt-2">
                <h3 className="text-base font-medium text-[#151875]">{product.title}</h3>
                <p className="text-lg font-bold text-[#FF9F0D]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar for Filtering */}
      <div className="w-full lg:w-1/4 p-4 bg-gray-50 shadow-md">
        <div className="space-y-6">
          {/* Product Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#101750]">Product</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> Brand 1
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Brand 2
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Brand 3
              </li>
            </ul>
          </div>

          {/* Discount Offer Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#101750]">Discount Offer</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> 20% Cashback
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> 30% Cashback
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> 40% Cashback
              </li>
            </ul>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#101750]">Rating</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> â˜…â˜…â˜…â˜…â˜† (1000+ Reviews)
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> â˜…â˜…â˜…â˜†â˜† (500+ Reviews)
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> â˜…â˜…â˜†â˜†â˜† (100+ Reviews)
              </li>
            </ul>
          </div>

          {/* Categories Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#101750]">Categories</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> Food
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Beverages
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> Snacks
              </li>
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-semibold text-[#101750]">Price</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" className="mr-2" /> $0.00 - $50.00
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> $50.00 - $100.00
              </li>
              <li>
                <input type="checkbox" className="mr-2" /> $100.00 - $200.00
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}