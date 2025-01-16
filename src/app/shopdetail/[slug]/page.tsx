import { GetProductDetails } from "@/sanity/sanaity.query";

export default async function ShopDetail({params}:any) {
  const productData = await GetProductDetails(params.slug);
  console.log(productData);
  return (
    <>
     <div className="font-sans">
  {/* Product Details Section */}
  <div className="p-4 lg:max-w-7xl max-w-lg mx-auto">
    <div className="flex flex-col lg:flex-row gap-6 shadow-lg rounded-lg p-6 bg-white">
      {/* Left Sidebar - Small Images */}
      <div className="w-[80px] sm:w-[100px] lg:w-[80px] flex gap-2 flex-wrap sm:flex-col h-[500px]">
        {["sps2.png", "sps3.png", "sps4.png", "sps5.png"].map((img, index) => (
          <img
            key={index}
            src= {'http://localhost:3000/'+productData[0].image}
            alt={`Product Thumbnail ${index + 1}`}
            className="w-[70px] h-[70px] cursor-pointer rounded-md outline outline-2 outline-gray-200 hover:outline-blue-500 mb-2"
          />
        ))}
      </div>

      {/* Right Sidebar - Product Image and Description */}
      <div className="flex-1 flex flex-col lg:flex-row h-[500px]">
        {/* Main Product Image */}
        <div className="w-full lg:w-[375px] h-full p-4 flex-shrink-0">
          <img
            src= {'http://localhost:3000/'+productData[0].image}
            alt="Main Product"
            className="w-full object-cover rounded-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-start lg:pl-6 space-y-4">
          {/* Stock Button */}
          <div className="flex items-center">
            <button className="w-[86px] h-[28px] text-white bg-[#FF9F0D] text-sm focus:outline-none hover:bg-orange-500 rounded-md">
              In Stock
            </button>
          </div>

          {/* Product Name */}
          <h1 className="text-[48px] font-bold text-left">
            {productData[0].title}
          </h1>

          {/* Product Description */}
          <p className="text-left font-normal text-gray-700">
          {productData[0].description}
          </p>

          {/* Price */}
          <p className="text-[40px] font-bold text-left text-[#151875]"> {productData[0].price}</p>

          {/* Rating and Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.144c.969 0 1.371 1.24.588 1.81l-3.356 2.44a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.54 1.118l-3.356-2.44a1 1 0 00-1.175 0l-3.356 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.97 9.37c-.784-.57-.38-1.81.588-1.81h4.144a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <span>| 5.0 Rating | 22 Reviews</span>
          </div>

          {/* Dictum / Cursus / Risus */}
          <p className="text-[18px] text-gray-700">Dictum / Cursus / Risus</p>

          {/* Add to Cart Button */}
          <div className="flex justify-center mt-8">
            <button
              type="button"
              className="flex items-center justify-center space-x-2 w-[191px] h-[50px] px-4 py-3 bg-[#FF9F0D] text-white text-sm font-semibold rounded-md border border-[#FF9F0D]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                className="fill-white"
              >
                <path
                  d="M19 6h-2V4c0-2.209-1.791-4-4-4s-4 1.791-4 4v2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4c0-1.103.897-2 2-2s2 .897 2 2v2H9V4zm10 17H5V8h14v13z"
                />
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div className="flex items-center space-x-4 mt-4 text-[18px]">
            <span className="flex items-center space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                className="fill-current text-black"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1 4.5 2.09C12.09 5 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span>Add to Wishlist</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20px"
                height="20px"
                className="fill-current text-black"
              >
                <path
                  d="M13 2H6C4.897 2 4 2.897 4 4v6c0 1.103.897 2 2 2h2v2H8c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-6c0-1.103-.897-2-2-2h-2v-2h2c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM6 4h7v6H6V4zm5 16H8v-6h3v6zm-3-9H6V8h2v3zm5 3v6h-3v-6h3zm-1-3h-2v-2h2v2zm0-3H8V8h5v3z"
                />
              </svg>
              <span>Compare</span>
            </span>
          </div>

          {/* Category, Tag, and Share */}
          <div className="text-[18px]">
            <p>Category: Pizza</p>
            <p>Tag: Our Shop</p>
            <p>
              Share:
              <img
                src="sps6.png"
                alt="Share"
                className=" bg-white inline-block ml-2 w-6 h-6"
              />
            </p>
          </div>
        </div>
      </div>
    </div>

</div>

           <div className="flex items-center space-x-4 mt-4 h-full">
  {/* Description Button */}
  <button className="w-48 h-14 bg-[#FF9F0D] text-white border-b-2 focus:outline-none hover:bg-blue-700 text-lg">
    Description
  </button>
  
  {/* Reviews */}
  <span className="text-lg text-[#151875] font-semibold">Reviews (24)</span>
</div>



       
                <p className="mt-4">
                Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
                </p>
                
                <p className="mt-4">
                Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
                </p>
                <h1 className="font-semibold mb-2">
                  Key Benefits
                </h1>
                <ul className="list-disc list-inside mb-2">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
  <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
  <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
  <li>Mauris eget diam magna, in blandit turpis.</li>
</ul>

  </div>
           
  <div className="p-4 lg:max-w-7xl max-w-lg mx-auto">
  <h3 className="text-2xl font-bold text-left mb-6 text-black">Similar Products</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {
    // [
    //   { name: "Fresh Lime", price: "$38.00", image: "sp1.png" },
    //   { name: "Chocolate Muffin", price: "$28.00", image: "sp2.png" },
    //   { name: "Burger", price: "$21.00", image: "sp3.png" },
    //   { name: "Fresh Lime", price: "$38.00", image: "sp4.png" },
    // ];
    productData.map((product:any, index:any) => (
      <div key={index} className="bg-white p-4 rounded-md shadow-md">
        <img
          src={`${product.image}`}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
        <p className="mt-2 font-bold text-[#FF9F0D]">{product.price}</p>
      </div>
    ))}
  </div>
</div>

    </>
  );
}
