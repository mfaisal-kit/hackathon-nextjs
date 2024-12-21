
export default function Header1() {
    return (
        <>
      <div className="w-full h-[48px] bg-[#000000] flex items-center justify-center">
        <p className="text-[14px] leading-[24px]">
          <span className="text-[#FF9F0D]">Food</span>
          <span className="text-white">tuck</span>
        </p>
      </div>
  <div className='flex bg-black border-b py-3 sm:px-6 px-12 font-[sans-serif] min-h-[75px] tracking-wide relative z-80'>
       <div className="w-[1170px] h-[38px] mt-10 relative left-[135px] flex">
        <div className="w-[674px] h-[24px] gap-[190px] flex ">
          <div id="collapseMenu"
              className='lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
              <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
                </svg>
              </button>
  
              <ul
  className="lg:flex lg:gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
>
  <li className="mb-6 hidden max-lg:block">
    <div className="w-[367px] h-[24px] gap-[48px] justify-between">
      <a href="javascript:void(0)">
        <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
      </a>
      <button className="px-4 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]">
        Sign In
      </button>
    </div>
  </li>

  {/* Home with Dropdown */}
  <li className="relative group max-lg:border-b max-lg:py-3 px-3">
    <a
      href="javascript:void(0)"
      className="flex items-center justify-between text-white hover:text-[#007bff] text-[15px] block font-semibold"
    >
      Home
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </a>
        <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md  min-w-[150px] z-10">
          <li><a href="/404page1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">404page</a></li>
          <li><a href="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">aboutus</a></li>
          <li><a href="/blogdetail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">blogdetail</a></li>
          <li><a href="/blogpage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">blogpage</a></li>
          <li><a href="/faqpage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">FAQpage</a></li>
          <li><a href="/menu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">menu</a></li>
          <li><a href="/ourchefs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">ourchefs</a></li>
          <li><a href="/restaurant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">restaurant</a></li>
          <li><a href="/shoplist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">shoplist</a></li>
          <li><a href="/shopdetail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">shopdetail</a></li>
          <li><a href="/shoppingcart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">shoppingcart</a></li>
          <li><a href="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">signin</a></li>
          <li><a href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">signup</a></li>
        </ul>
  </li>

  {/* Pages with Dropdown */}
  <li className="relative group max-lg:border-b max-lg:py-3 px-3">
    <a
      href="javascript:void(0)"
      className="flex items-center justify-between text-white hover:text-[#007bff] text-[15px] block font-semibold"
    >
      Pages
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 ml-2"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </a>
    <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md  min-w-[150px] z-10">
          <li><a href="/404page1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">404page</a></li>
          <li><a href="/aboutus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">aboutus</a></li>
          <li><a href="/blogdetail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">blogdetail</a></li>
          <li><a href="/blogpage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">blogpage</a></li>
          <li><a href="/faqpage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">faqpage</a></li>
          <li><a href="/menu" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">menu</a></li>
          <li><a href="/ourchefs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">ourchefs</a></li>
          <li><a href="/restaurant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">restaurant</a></li>
          <li><a href="/shoplist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">shoplist</a></li>
          <li><a href="/shoppingcart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">shoppingcart</a></li>
          <li><a href="/signin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">signin</a></li>
          <li><a href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">signup</a></li>
        </ul>
  </li>

  {/* Other Links */}
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <a href="/menu" className="text-white hover:text-[#007bff] text-[15px] block font-semibold">
      Menu
    </a>
  </li>
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <a href="/blog" className="text-white hover:text-[#007bff] text-[15px] block font-semibold">
      Blog
    </a>
  </li>
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <a href="/shop" className="text-white hover:text-[#007bff] text-[15px] block font-semibold">
      Shop
    </a>
  </li>
  <li className="max-lg:border-b max-lg:py-3 px-3">
    <a href="/contact" className="text-white hover:text-[#007bff] text-[15px] block font-semibold">
      Contact
    </a>
  </li>
</ul>

            </div>
  
            <div className="flex items-center gap-x-6 gap-y-">
  {/* Search Box with Icon in the Right Corner */}
  <div className="cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.904 192.904"
      width="16px"
      className="fill-white absolute right-4 top-1/2 transform -translate-y-1/2"
    >
      <path
        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
      />
    </svg>
  </div>

  <div className="relative mb-4 flex items-center border rounded bg-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 12c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5zm0 2c2.88 0 7.75 1.44 7.97 3H4.03c.22-1.56 5.09-3 7.97-3z" />
    </svg>
</div>

  {/* Handbag Icon */}
  <div className="cursor-pointer">
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
  </div>
</div>


</div>
</div>
      </div>
     </>
    )
  }
  
 