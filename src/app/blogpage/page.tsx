import { GetFilterByMenuData } from "@/sanity/sanaity.query";
import { GetRecantPostData } from "@/sanity/sanaity.query";

export default async function SignUp() {
  const product1= await GetFilterByMenuData();
  const product2 = await GetRecantPostData();
  return (
    <div>
      {/* Image Section */}
      <div className="relative w-full h-[40vh] mb-10">
        <img
          className="w-full h-full object-cover"
          src="/sip.png" // Ensure the correct path to your image
          alt="Sign Up"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-semibold">
          <div>Blog List</div>
          <div className="text-sm">Home &gt; Blog</div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 mt-6">
       {/* Blog Content (Left Sidebar) */}
<div>
{[
  {
    id: 1,
    title: "10 Reasons To Do A Digital Detox Challenge",
    description:
      "Taking a digital detox helps improve mental health and reduces stress caused by constant notifications and screen time. Challenge yourself to reconnect with the real world.",
    date: "Feb 14, 2022",
    author: "Admin",
    image: "blg1.png",
  },
  {
    id: 2,
    title: "Traditional Soft Pretzels with Sweet Beer Cheese",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    date: "Mar 05, 2022",
    author: "Admin",
    image: "blg2.png",
  },
  {
    id: 3,
    title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    date: "Apr 21, 2022",
    author: "Admin",
    image: "blg3.png",
  },
  {
    id: 4,
    title: "My Favorite Easy Black Pizza Toast Recipe",
    description:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    date: "May 12, 2022",
    author: "Admin",
    image: "blg4.png",
  },
].map((blog) => (
  <div key={blog.id} className="bg-white shadow-sm rounded-lg p-6 mb-6">
    <img
      src={blog.image}
      alt={`Blog ${blog.id}`}
      className="w-full h-auto rounded-md bg-[#F4F4FC]"
    />
    <div className="space-y-2 mt-4">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <span className="px-4 py-2 text-black rounded-md">
          {blog.date} /
        </span>
        <span className="px-4 py-2 text-black rounded-md">
          3/ {blog.author}
        </span>
      </div>
      <h3 className="text-lg text-black font-semibold">{blog.title}</h3>
      <p className="text-gray-400">{blog.description}</p>
    </div>
    {/* Input and Search Button */}
    <div className="flex items-center">
      <button
        type="button"
        className="px-6 py-2 text-sm text-[#FF9F0D] bg-white border-2 border-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition-colors duration-300 rounded-md"
      >
        Read More
      </button>
    </div>
  </div>
))}

<div className="flex justify-center mt-6">
  <img
    src="blg5.png"
    alt="Centered Image"
    className="w-auto h-auto"
  />
</div>
</div>


 {/* Right Sidebar */}
        <div className="flex flex-col space-y-4">
  {/* Input and Search Button */}
  <div className="flex items-center border border-gray-300 rounded overflow-hidden">
    {/* Input Field */}
    <input
      type="text"
      placeholder="Search Your Keyword"
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
  

  {/* Section */}
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
      {/* Image */}
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="bd3.png"
      />

      {/* Text Content */}
      <div className="text-center w-full">
        <h1 className="title-font text-[16px] mb-2 font-medium text-gray-900">
          Prince Miyako
        </h1>
        <p className="mb-4 leading-relaxed">Blogger/Photographer</p>

        

        {/* Review Count */}
        <p>(1 Review)</p>

        {/* Description */}
        <p className="mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition-colors"
          >
            {/* Facebook Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.407.593 24 1.325 24h11.495v-9.293H9.69v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.465.099 2.797.143v3.24h-1.918c-1.506 0-1.798.716-1.798 1.766v2.313h3.597l-.469 3.622h-3.128V24h6.127C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.675 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition-colors"
          >
            {/* Twitter Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.17 9.722a4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.93 4.93 0 01-2.224.084 4.919 4.919 0 004.6 3.417A9.864 9.864 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.004-.426-.013-.637A9.936 9.936 0 0024 4.557z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black transition-colors"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.47.413a4.92 4.92 0 011.675 1.08 4.92 4.92 0 011.08 1.675c.173.467.357 1.264.413 2.47.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.413 2.47a4.92 4.92 0 01-1.08 1.675 4.92 4.92 0 01-1.675 1.08c-.467.173-1.264.357-2.47.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.47-.413a4.92 4.92 0 01-1.675-1.08 4.92 4.92 0 01-1.08-1.675c-.173-.467-.357-1.264-.413-2.47C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.206.24-2.003.413-2.47A4.92 4.92 0 013.726 3.58a4.92 4.92 0 011.675-1.08c.467-.173 1.264-.357 2.47-.413 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.741 0 8.332.012 7.052.07 5.703.128 4.473.315 3.4.757 2.32 1.205 1.505 1.995.757 3.4.315 4.473.128 5.703.07 7.052.012 8.332 0 8.741 0 12s.012 3.584.07 4.85c.058 1.266.245 2.496.757 3.57.747 1.405 1.563 2.195 2.7 2.643 1.073.443 2.303.63 3.57.757 1.266.058 1.646.07 4.85.07s3.584-.012 4.85-.07c1.266-.058 2.496-.245 3.57-.757 1.405-.747 2.195-1.563 2.643-2.7.443-1.073.63-2.303.757-3.57.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.058-1.266-.245-2.496-.757-3.57C20.883.315 20.073-.073 18.852-.437c-1.304-.472-2.723-.628-4.852-.698C13.596-.012 13.296 0 12 0z" />
            </svg>
          </a>

           {/* Pinterest Icon */}
  <a
    href="https://pinterest.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8.003 21.36c-.091.429-.453 1.607-.547 2.136-.08.455-.388.521-.692.378-.828-.378-3.234-1.509-3.378-4.676-.083-1.85 1.168-3.782 1.878-4.828.331-.495.298-.723-.148-2.33-.053-.206-.1-.433-.144-.642-.378-1.769.528-2.215 1.118-2.165.854.076 1.147.834 1.354 1.235.505 1.048.785 2.625 1.527 2.993.739.368 2.114-.168 2.84-1.052.727-.884 1.278-2.353 1.152-3.417-.128-1.064-1.063-1.948-2.688-1.974-3.048-.047-4.355 3.248-4.434 4.713-.085 1.585.626 3.183 1.688 3.37.328.061.594-.026.673-.297.072-.247.233-.968.297-1.252.069-.298-.07-.448-.323-.691-1.146-1.089-1.048-2.4-.898-3.135.198-.997 1.126-2.301 2.844-2.214 1.287.065 2.315.887 2.385 2.083.068 1.184-.47 2.689-1.194 3.853-.648 1.016-1.735 1.652-2.86 1.693-.689.025-1.198-.34-1.368-.834-.364-.98-.544-2.103-.628-2.508-.083-.401-.246-.847-.403-1.226-.166-.398-.257-.814-.23-1.206.081-1.141 1.193-2.032 2.673-2.076 3.47-.1 5.434 2.148 5.603 4.73.175 2.675-.979 5.764-4.26 6.488-.874.186-1.585-.023-2.11-.583-.05.172-.083.28-.097.342zm-5.035-7.55C2.984 4.604 8.182-.001 14.57.001c6.46.002 12.014 5.381 12.015 12.096C26.588 18.896 21.473 24 14.988 24c-1.627 0-3.127-.268-4.564-.788-1.44-.522-2.884-1.309-4.377-2.37-1.26-.901-2.203-1.857-2.734-2.825C1.045 16.831.426 15.636.001 14.38c-.482-1.522-.083-3.035.967-4.188zm8.274 4.25z" />
    </svg>
  </a>
        </div>
      </div>
    </div>
  </section>
        <div className="bg-gray-100 rounded-md p-4">
          <h1 className="text-[20px] font-semibold">Recant Post</h1>
              {/* const recentPosts = [
  {
    date: "June 22, 2020",
    name: "Lorem ipsum dolor sit cingelit, sed do.",
    image: "bd4.png",
  },
  {
    date: "June 22, 2020",
    name: "Lorem ipsum dolor sit cingelit, sed do.",
    image: "bd5.png",
  },
  {
    date: "June 22, 2020",
    name: "Lorem ipsum dolor sit cingelit, sed do.",
    image: "bd6.png",
  },
  {
    date: "June 22, 2020",
    name: "Lorem ipsum dolor sit cingelit, sed do.",
    image: "bd7.png",
  },
]; */}

    <div className="bg-gray-100 rounded-md p-4">
      <h1 className="text-[20px] font-semibold">Recent Post</h1>
      {/* Product List */}
      {product2.map((product:any, index:any) => (
        <div key={index} className="flex items-center gap-4 mb-4">
           <a href={process.env.BASE_URL+`/shopdetail/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="bg-gray-100 h-20 w-auto rounded-md"
          />
          <h4 className="text-sm text-black font-semibold">
            {product.date} <br />
            <br /> {product.name}
          </h4>
          </a>
        </div>
      ))}
    </div>

{/* const products = [
  { price: "26", name: "Chicken Fry", image: "bd8.png" },
  { price: "46", name: "Burger Food", image: "bd9.png" },
  { price: "16", name: "Pizza", image: "bd10.png" },
  { price: "36", name: "Fresh fruits", image: "bd11.png" },
  { price: "16", name: "Vegetables", image: "bd12.png" }
]; */}


<div className="bg-gray-100 rounded-md p-2 space-y-2">
      <h1 className="text-[20px] font-semibold">Filter By Menu</h1>
      {product1.map((product:any, index:any) => (
        <div key={index} className="flex justify-between items-center">
          {/* Left Side: Image and Product Name */}
          <div className="flex items-center">
          <a href={process.env.BASE_URL+`/shopdetail/${product.slug}`}>
            <img
              src={product.image}
              alt={product.name}
              className="bg-gray-100 h-20 w-auto mr-4" /* Added margin-right for spacing */
            />
             </a>
            <p className="text-gray-600 text-sm">{product.title}</p>
           
          </div>

          {/* Right Side: Product Price */}
          <a href={process.env.BASE_URL+`/shopdetail/${product.slug}`}>
          <p className="text-gray-600 text-sm">{product.price}</p>
          </a>
          </div>
      ))}
    </div>

        <h1 className="text-[20px] font-semibold">
        Popular Tabs</h1>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Sandwitch"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Tikka"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Bbq"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Restaurant"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Chicken Sharmaa"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Health"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Fastfood"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Food"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Pizza"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="TBurger"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Chicken"
                        className="mt-1 px-3 py-2 bg-gray-100 w-full rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>
                 
      </div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
    <div className="flex flex-col text-left w-full">
      <h1 className="text-[20px] font-semibold text-black">
        Photo Galary
      </h1>
    </div>
    <div className="flex flex-wrap mb-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="inset-0 w-full object-cover object-center"
            src="bd13.png"
          />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="inset-0 w-full object-cover object-center"
            src="bd14.png"
          />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="inset-0 w-full object-cover object-center"
            src="bd15.png"
          />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="inset-0 w-full object-cover object-center"
            src="bd16.png"
          />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="inset-0 w-full object-cover object-center"
            src="bd17.png"
          />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="inset-0 w-full object-cover object-center"
            src="bd18.png"
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col text-left w-full">
      <h1 className="text-[20px] font-semibold text-black">
        Follow Us
      </h1>

      <div className="flex space-x-4 mt-4">

         {/* Twitter */}
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black transition-colors"
  >
    {/* Twitter Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149 4.916 4.916 0 003.17 9.722a4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.93 4.93 0 01-2.224.084 4.919 4.919 0 004.6 3.417A9.864 9.864 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.004-.426-.013-.637A9.936 9.936 0 0024 4.557z" />
    </svg>
  </a>

   {/* YouTube */}
   <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.499 6.216a2.892 2.892 0 0 0-2.039-2.039C19.571 3.556 12 3.556 12 3.556s-7.571 0-9.461.621A2.892 2.892 0 0 0 .5 6.216c-.621 1.89-.621 5.837-.621 5.837s0 3.947.621 5.837a2.892 2.892 0 0 0 2.039 2.039c1.89.621 9.461.621 9.461.621s7.571 0 9.461-.621a2.892 2.892 0 0 0 2.039-2.039c.621-1.89.621-5.837.621-5.837s0-3.947-.621-5.837ZM9.753 15.568v-7.14l6.207 3.57-6.207 3.57Z" />
    </svg>
  </a>

  {/* Pinterest */}
<a
  href="https://pinterest.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-black transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="#FF9F0D"
    viewBox="0 0 24 24"
  >
    <path d="..." />
  </svg>
</a>


  {/* Instagram */}
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black transition-colors"
  >
    {/* Instagram Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.24 2.47.413a4.92 4.92 0 011.675 1.08 4.92 4.92 0 011.08 1.675c.173.467.357 1.264.413 2.47.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.003-.413 2.47a4.92 4.92 0 01-1.08 1.675 4.92 4.92 0 01-1.675 1.08c-.467.173-1.264.357-2.47.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.24-2.47-.413a4.92 4.92 0 01-1.675-1.08 4.92 4.92 0 01-1.08-1.675c-.173-.467-.357-1.264-.413-2.47C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.206.24-2.003.413-2.47A4.92 4.92 0 013.726 3.58a4.92 4.92 0 011.675-1.08c.467-.173 1.264-.357 2.47-.413 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.741 0 8.332.012 7.052.07 5.703.128 4.473.315 3.4.757 2.32 1.205 1.505 1.995.757 3.4.315 4.473.128 5.703.07 7.052.012 8.332 0 8.741 0 12s.012 3.584.07 4.85c.058 1.266.245 2.496.757 3.57.747 1.405 1.563 2.195 2.7 2.643 1.073.443 2.303.63 3.57.757 1.266.058 1.646.07 4.85.07s3.584-.012 4.85-.07c1.266-.058 2.496-.245 3.57-.757 1.405-.747 2.195-1.563 2.643-2.7.443-1.073.63-2.303.757-3.57.058-1.266.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.058-1.266-.245-2.496-.757-3.57C20.883.315 20.073-.073 18.852-.437c-1.304-.472-2.723-.628-4.852-.698C13.596-.012 13.296 0 12 0z" />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-black transition-colors"
  >
    {/* Facebook Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.407.593 24 1.325 24h11.495v-9.293H9.69v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.465.099 2.797.143v3.24h-1.918c-1.506 0-1.798.716-1.798 1.766v2.313h3.597l-.469 3.622h-3.128V24h6.127C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.675 0z" />
    </svg>
  </a>
 
</div>

    </div>
  </div>
</section>

    </div>
      </div>
    </div>
  );
}
