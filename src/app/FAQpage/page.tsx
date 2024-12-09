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
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Questions Looks Here
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              </p>
            </div>
  
            <div className="flex flex-wrap -m-2">
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      How we serve food?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                      veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                      quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                 
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                    How can we get in touch with you?
                    </h2>
                    <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                    How is our food quality?
                    </h2>
                    <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">What will be delivered? And When?</h2>
                    <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                      veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                      quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                    How do we give home delivery?
                    </h2>
                    <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                 
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Is this restaurant 24 hours open?
                    </h2>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
                      veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
                      quidem?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  