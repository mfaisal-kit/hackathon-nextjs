export default function SignUp() {
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
        <div className="w-[1320px] pt-[60px] mx-auto grid grid-cols-4 gap-8">
  {[
    { name: "Tahmina Rumi", occupation: "Chef", src: "ch1.png" },
    { name: "Jorina Begum", occupation: "Chef", src: "ch2.png" },
    { name: "M.Mohammad", occupation: "Chef", src: "ch3.png" },
    { name: "Munna Kathy", occupation: "Chef", src: "ch4.png" },
    { name: "Tahmina Rumi", occupation: "Chef", src: "ch5.png" },
    { name: "Bisnu devgon", occupation: "Chef", src: "ch6.png" },
    { name: "Motin Molladsf", occupation: "Chef", src: "ch7.png" },
    { name: "William Rumi", occupation: "Chef", src: "ch8.png" },
    { name: "Kets william roy", occupation: "Chef", src: "ch9.png" },
    { name: "Mahmud kholil", occupation: "Chef", src: "ch10.png" },
    { name: "Ataur Rahman", occupation: "Chef", src: "ch11.png" },
    { name: "Monalisa holly", occupation: "Chef", src: "ch12.png" },
  ].map((person, index) => (
    <div key={index} className="text-center">
      <img
        src={person.src}
        alt={person.name}
        className="w-full h-auto object-cover rounded-lg"
      />
      <h2 className="mt-2 text-lg font-medium text-gray-800">{person.name}</h2>
      <p className="text-sm text-gray-500">{person.occupation}</p>
    </div>
  ))}
</div>

    </div>
    )
}