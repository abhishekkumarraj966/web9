import React, { useState } from "react";
import AppLayout from "./AppLayout";

const EnqForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, mobile, msg);
    //Make your api call here
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMobile("");
  };
  return (
    <AppLayout>
      <section id="contact">
        <div className="text-[#FFF] bg-[#920C26] h-auto mb-5 rounded-md">
          <div className="text-start font-semibold leading-5 mx-auto pt-10">
            <div className="italic  text-[30px]  text-center">Enquiry</div>
          </div>

          <div className="mt-14 ">
            <form>
              <AppLayout>
                <div className="mb-4 bg-[#000] w-[95%] mx-auto h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="name"
                      className="block  font-semibold text-[#FFF]  mx-10  lg:text-2xl text-lg"
                    >
                      Name:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 bg-[#000] text-[#FFF]"
                      placeholder="Enter your Name"
                      required
                    />
                    <hr className="lg:w-[400px]   mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
                <div className="mb-4 w-[95%] mx-auto bg-[#000] h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="Email"
                      className="block  font-semibold text-[#FFF]  mx-10  lg:text-2xl text-lg"
                    >
                      Email:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="email"
                      id="name"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=" mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 bg-[#000] text-[#FFF]"
                      placeholder="Enter your Email."
                      required
                    />
                    <hr className="lg:w-[400px]   mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
                <div className="mb-4 w-[95%] mx-auto bg-[#000] h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="MobilNo"
                      className="block  font-semibold text-[#FFF]  mx-10  lg:text-2xl text-lg"
                    >
                      Mobile:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="tel"
                      id="name"
                      name="name"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="  mt-2 border-none rounded-md focus:outline-none focus:border-black-500 mx-10 bg-[#000] text-[#FFF]"
                      placeholder="Enter your Mobile No."
                      required
                    />
                    <hr className="lg:w-[400px]   mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
                <div className="mb-4 w-[95%] mx-auto bg-[#000] h-auto my-15 rounded-2xl sm:mx-5 sm:px-5">
                  <div className="py-2 ">
                    <label
                      htmlFor="MobilNo"
                      className="block  font-semibold text-[#FFF]  mx-10  lg:text-2xl text-lg"
                    >
                      Message:
                      <span className="text-red-500 text-2xl">&nbsp;*</span>
                    </label>
                    <input
                      type="tel"
                      id="name"
                      name="name"
                      value={mobile}
                      onChange={(e) => setMsg(e.target.value)}
                      className="  mt-2 border-none bg-[#000] rounded-md focus:outline-none focus:border-black-500 mx-10 text-[#FFF]"
                      placeholder="Some Text"
                      required
                    />
                    <hr className="lg:w-[400px]  mb-2 mx-10 h-[1px] lg:h-[2px] bg-[#D9D9D9]" />
                  </div>
                </div>
                <div className="flex items-center justify-center lg:justify-start lg:ml-[27px] mt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="mr-2 w-[20px] mb-2 p-[5px] h-[20px] "
                  />
                  <label
                    htmlFor="terms"
                    className="text-[20px] mb-[8px] text-[#FFF] lg:text-[30px] lg:py-6  sm:py-4 sm:mx-4"
                  >
                    I agree to the{" "}
                    <a
                      href="/terms"
                      className="underline lg:w-[30px] lg:h-[30px]"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </AppLayout>
              <div className=" bg-black">
                <AppLayout>
                  <div className="grid grid-cols-2 gap-2 sm:gap-1">
                    <div className=" p-4 rounded-md">
                      <div className="sm:ml-10">
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="bg-[#FFF] text-black px-4 py-2 rounded-md hover:bg-[#000] hover:text-white focus:outline-none focus:shadow-outline-blue w-28 h-10"
                          //   onClick={handleButtonClick} // Replace with your click handler function
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className=" p-4 rounded-md justify-items-end lg:ml-72 sm:ml-10">
                      <div className=" lg:mx-20 sm:mx-5">
                        <button
                          type="button"
                          onClick={handleClear}
                          className="  font-bold  px-4 py-2 rounded-md bg-[#000] text-white hover:bg-[#FF9796] hover:text-black focus:outline-none focus:shadow-outline-blue"
                          //   onClick={handleButtonClick} // Replace with your click handler function
                        >
                          Clear form
                        </button>
                      </div>
                    </div>
                  </div>
                </AppLayout>
              </div>
            </form>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default EnqForm;
