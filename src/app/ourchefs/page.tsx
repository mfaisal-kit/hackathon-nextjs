import { GetOurChefsData } from "@/sanity/sanaity.query"

export default async function SignUp() {
  const productData = await GetOurChefsData();  
  return (
      <div>
        {/* Image Section */}
        <div className="relative w-full h-[50vh]">
          <img
            className="w-full h-full object-cover"
            src="/sip.png" // Ensure the correct path to your image
            alt="Sign Up"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-3xl font-semibold">
            <div>Our Chef</div>
            <div className="text-[12px]">Home &gt; Chef </div>
          </div>
        </div>
        {/* const people = [
  { name: "Tahmina Rumi", description: "Chef", src: "ch1.png" },
  { name: "Jorina Begum", description: "Chef", src: "ch2.png" },
  { name: "M.Mohammad", description: "Chef", src: "ch3.png" },
  { name: "Munna Kathy", description: "Chef", src: "ch4.png" },
  { name: "Tahmina Rumi", description: "Chef", src: "ch5.png" },
  { name: "Bisnu devgon", description: "Chef", src: "ch6.png" },
  { name: "Motin Molladsf", description: "Chef", src: "ch7.png" },
  { name: "William Rumi", description: "Chef", src: "ch8.png" },
  { name: "Kets william roy", description: "Chef", src: "ch9.png" },
  { name: "Mahmud kholil", description: "Chef", src: "ch10.png" },
  { name: "Ataur Rahman", description: "Chef", src: "ch11.png" },
  { name: "Monalisa holly", description: "Chef", src: "ch12.png" },
]; */}

<div className="w-[1320px] pt-[60px] mx-auto grid grid-cols-4 gap-8">
  {productData.map((item: any, index: number) => (
    <div key={index} className="text-center">
      <a href={`shopdetail/${item.slug}`}>
        <img
          src={`${process.env.BASE_URL}/${item.image}`}
          alt={item.name}
          className="w-full h-auto object-cover rounded-lg"
        />
        <h2 className="mt-2 text-lg font-medium text-gray-800">{item.name}</h2>
        <p className="text-sm text-gray-500">{item.description}</p>
      </a>
    </div>
  ))}
</div>

);


    </div>
    )
}