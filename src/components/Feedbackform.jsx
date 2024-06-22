import React from "react";
import AppLayout from "./AppLayout";

const Feedbackform = () => {
  return (
    <div className="  py-[15px] my-8  ">
      <AppLayout>
      <h2 className="font-bold text-[30px]  pb-6  text-white text-center ">
            Feedback form
          </h2>
        <div className="p-4 mx-auto sm:mx-20 w-[80%] bg-[#5E1523] rounded-xl ">
         
          <p className="text-[#FFF]">Name</p>
          <input
            type="text"
            placeholder="Name"
            className=" w-[100%] rounded-md h-8 py-1 px-2 mt-1 bg-black"
          />
          <p className="text-[#FFF] mt-5">Feedback</p>
          <input
            type="text"
            placeholder="Type your message..."
            className=" w-[100%]  rounded-md h-14 lg:h-24 px-2 mt-1 bg-black "
          />
          <br/>
          <button
            type="submit"
            className="bg-[#FFF] sm:w-[30%]  text-black rounded-md py-2 px-3 mt-4 font-medium"
          >
            Submit
          </button>
        </div>
      </AppLayout>
    </div>
  );
};

export default Feedbackform;
