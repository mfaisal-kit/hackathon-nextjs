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
        <div className="w-[1320px] h-[1386px] pt-[60px] pl-[300px]">
        <img
        src="Chef.png"
        />
        </div>
    </div>
    )
}