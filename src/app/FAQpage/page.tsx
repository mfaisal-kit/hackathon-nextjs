export default function SignUp() {
    return (
      <div>
        {/* Image Section */}
        <div className="relative w-full h-[40vh]">
          <img
            className="w-full h-full object-cover"
            src="/sip.png" // Ensure the correct path to your image
            alt="FAQ"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <div className="text-[38px] md:text-[44px] font-semibold">FAQ Page</div>
            <div className="text-[12px] md:text-[16px] mt-2">Home &gt; FAQ</div>
          </div>
        </div>
  
        {/* FAQ Section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
                Questions Looks Here
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              </p>
            </div>
  
            <div className="flex flex-wrap -m-2">
  {[
    {
      question: "How we serve food?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How is our food quality?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do we give home delivery?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Is this restaurant 24 hours open?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ].map((item, index) => (
    <div key={index} className="p-2 md:w-1/2 w-full">
      <div className="h-full flex flex-col border-gray-200 border p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-900 title-font font-bold">{item.question}</h2>
          {/* "+" Sign */}
          <div className="text-black font-bold text-2xl">+</div>
        </div>
        <p className="text-gray-500 mt-2">{item.content}</p>
      </div>
    </div>
  ))}
</div>
          </div>
        </section>
      </div>
    );
  }
  