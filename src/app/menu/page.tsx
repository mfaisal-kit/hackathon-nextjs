export default function SignUp() {
    return (
      <div>
        {/* Image Section */}
        <div className="relative w-full h-[40vh]">
          <img
            className="w-full h-full object-cover"
            src="/sip.png" 
            alt="Sign Up"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-semibold">
            <div>Our Menu</div>
            <div className="text-sm">Home &gt; Menu</div>
          </div>
        </div>
  
        <div className="container mx-auto px-2 py-10">
  <div className="flex flex-col md:flex-row gap-2 items-start">
    {/* Left Side: Image */}
    <div className="flex items-center justify-center flex-1">
      <img
        className="w-full max-w-[300px] h-auto rounded-md"
        src="/om1.png"
        alt="Menu Item"
      />
    </div>

  {/* Right Side: Dessert Details */}
<div className="bg-white rounded-md p-z space-y-4 flex-1">
  <h1 className="text-[36px] font-semibold">Starter Menu</h1>
  {/* Product List */}
  {[
    {
      price: "32$",
      name: "Alder Grilled Chinook Salmon",
      detail1: "Toasted French bread topped with romano, cheddar",
      detail2: "560 CAL",
    },
    {
      price: "43$",
      name: "Berries and creme tart",
      detail1: "Gorgonzola, ricotta, mozzarella, taleggio",
      detail2: "700 CAL",
    },
    {
      price: "14$",
      name: "Tormentoso Bush Pizza Pintoage",
      detail1: "Ground cumin, avocados, peeled and cubed",
      detail2: "1000 CAL",
    },
    {
      price: "35$",
      name: "Spicy Vegan Potato Curry",
      detail1: "Spreadable cream cheese, crumbled blue cheese",
      detail2: "560 CAL",
    },
  ].map((product, index) => (
    <div
      key={index}
      className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2"
    >
      {/* Left Side: Name and Detail */}
      <div className="flex flex-col">
        <p
          className={`font-medium text-sm ${
            product.name === "Berries and creme tart"
              ? "text-[#FF9F0D]"
              : "text-gray-800"
          }`}
        >
          {product.name}
        </p>
        <p className="text-gray-600 text-sm">{product.detail1}</p>
        <p className="text-gray-600 text-sm">{product.detail2}</p>
      </div>

      {/* Right Side: Price */}
      <p className="text-[#FF9F0D] font-semibold">{product.price}</p>
    </div>
  ))}
</div>
</div>
</div>

                    <div className="container mx-auto px-4 py-10">
  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Left Side: Dessert Column */}
    <div className="bg-gray-100 rounded-md p-4 space-y-4 flex-1">
      <h1 className="text-[36px] font-semibold">Main Course</h1>
      {/* Product List */}
      {[
        {
          price: "32$",
          name: "Caffè Optic Big Breakfast Combo Menuo",
          detail1: "Toasted French bread topped with romano, cheddar",
          detail2: "560 CAL",
        },
        {
          price: "43$",
          name: "Cashew Chicken With Stir-Fry",
          detail1: "Gorgonzola, ricotta, mozzarella, taleggio",
          detail2: "700 CAL",
        },
        {
          price: "14$",
          name: " Vegetables & Green Salad",
          detail1: "Ground cumin, avocados, peeled and cubed",
          detail2: "1000 CAL",
        },
        {
          price: "35$",
          name: "Spicy Vegan Potato Curry",
          detail1: "Spreadable cream cheese, crumbled blue cheese",
          detail2: "560 CAL",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2"
        >
          {/* Left Side: Name and Detail */}
          <div className="flex flex-col">
            <p className="text-gray-800 font-medium text-sm">{product.name}</p>
            <p className="text-gray-600 text-sm">{product.detail1}</p>
            <p className="text-gray-600 text-sm">{product.detail2}</p>
          </div>

          {/* Right Side: Price */}
          <p className="text-[#FF9F0D] font-semibold">{product.price}</p>
        </div>
      ))}
    </div>

    {/* Right Side: Image */}
    <div className="flex items-center justify-center flex-1">
      <img
        className="w-full max-w-[300px] h-auto rounded-md"
        src="/om2.png"
        alt="Menu Item"
      />
    </div>
  </div>
</div>

          <div className="grid grid-cols-2"></div>
          <div>
          <img
                className="w-full h-full p-2 space-y-2"
                src="/om6.png"
                alt="Menu Item"
              />
          </div>
           
          <div className="container mx-auto px-4 py-10">
  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Left Side: Image */}
    <div className="flex items-center justify-center flex-1">
      <img
        className="w-full max-w-[300px] h-auto rounded-md"
        src="/om3.png"
        alt="Menu Item"
      />
    </div>

    {/* Right Side: Dessert Details */}
    <div className="bg-gray-100 rounded-md p-4 space-y-4 flex-1">
      <h1 className="text-[36px] font-semibold">Dessert</h1>
      {/* Product List */}
      {[
        {
          price: "32$",
          name: "Fig and Lemon Cake",
          detail1: "Toasted French bread topped with romano, cheddar",
          detail2: "560 CAL",
        },
        {
          price: "43$",
          name: "Creamy Mascarpone Cake",
          detail1: "Gorgonzola, ricotta, mozzarella, taleggio",
          detail2: "700 CAL",
        },
        {
          price: "14$",
          name: "Pastry, Blueberries, Lemon Juice",
          detail1: "Ground cumin, avocados, peeled and cubed",
          detail2: "1000 CAL",
        },
        {
          price: "$35",
          name: "Pain au Chocolat",
          detail1: "Spreadable cream cheese, crumbled blue cheese",
          detail2: "560 CAL",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2"
        >
          {/* Left Side: Name and Detail */}
          <div className="flex flex-col">
            <p className="text-gray-800 font-medium text-sm">{product.name}</p>
            <p className="text-gray-600 text-sm">{product.detail1}</p>
            <p className="text-gray-600 text-sm">{product.detail2}</p>
          </div>

          {/* Right Side: Price */}
          <p className="text-[#FF9F0D] font-semibold">{product.price}</p>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="container mx-auto px-4 py-10">
  <div className="flex flex-col md:flex-row gap-6 items-start">
    {/* Left Side: Dessert Column */}
    <div className="bg-gray-100 rounded-md p-4 space-y-4 flex-1">
      <h1 className="text-[36px] font-semibold">Drinks</h1>
      {/* Product List */}
      {[
        {
          price: "32$",
          name: "Caffè macchiato",
          detail1: "Toasted French bread topped with romano, cheddar",
          detail2: "560 CAL",
        },
        {
          price: "43$",
          name: "Aperol Spritz Capacianno",
          detail1: "Gorgonzola, ricotta, mozzarella, taleggio",
          detail2: "700 CAL",
        },
        {
          price: "14$",
          name: "Caffe Latte Campuri",
          detail1: "Ground cumin, avocados, peeled and cubed",
          detail2: "1000 CAL",
        },
        {
          price: "35$",
          name: "Tormentoso BushTea Pintoage",
          detail1: "Spreadable cream cheese, crumbled blue cheese",
          detail2: "560 CAL",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2"
        >
          {/* Left Side: Name and Detail */}
          <div className="flex flex-col">
            <p className="text-gray-800 font-medium text-sm">{product.name}</p>
            <p className="text-gray-600 text-sm">{product.detail1}</p>
            <p className="text-gray-600 text-sm">{product.detail2}</p>
          </div>

          {/* Right Side: Price */}
          <p className="text-[#FF9F0D] font-semibold">{product.price}</p>
        </div>
      ))}
    </div>

    {/* Right Side: Image */}
    <div className="flex items-center justify-center flex-1">
      <img
        className="w-full max-w-[300px] h-auto rounded-md"
        src="/om4.png"
        alt="Menu Item"
      />
    </div>
  </div>
</div>

<div className="grid grid-cols-2"></div>
          <div>
          <img
                className="w-full h-full p-2 space-y-2"
                src="/om7.png"
                alt="Menu Item"
              />
          </div>
          </div>
        
    );
  }
  