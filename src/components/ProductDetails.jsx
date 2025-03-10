import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "./MockData/Productmock"; // Ensure this imports your mock data
import AppLayout from "./AppLayout";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="">
      <AppLayout>
        <Link to="/">
          <button className="bg-[#FFF] hover:bg-[#000000] text-black font-bold py-2 px-4 rounded mt-5 mx-2">
            Back
          </button>
        </Link>
        <div className="grid sm:grid-cols-2 gap-4 grid-cols-1 my-10 bg-[#421921] text-white">
          <div className="flex mx-2 sm:mx-auto">
            <div className="flex-col gap-4">
              <img
                src={product.img}
                alt=""
                className="h-[100px] sm:h-[200px] w-full border-2 sm:border-4 border-[#000000] bg-[#5E1523]"
              />
              <img
                src={product.img}
                alt=""
                className="h-[100px] sm:h-[200px] w-full border-2 sm:border-4 border-[#000000] bg-[#5E1523]"
              />
              <img
                src={product.img}
                alt=""
                className="h-[100px] sm:h-[200px] w-full border-2 sm:border-4 border-[#000000] bg-[#5E1523]"
              />
            </div>
            <div className="">
              <img
                src={product.img}
                alt=""
                className="h-[300px] sm:h-[600px] w-full border-2 sm:border-4 border-[#000000] bg-[#5E1523]"
              />
            </div>
          </div>

          <div className="mx-2 lg:mx-20">
            <h2 className="font-bold text-[30px] sm:text-[38px] text-[#3D3D3D]">
              {product.name}
            </h2>
            <div className="mt-4 sm:mt-8 font-normal text-[16px] sm:text-[20px] tracking-[1px]">
              <p>{product.description}</p>
            </div>
            <div className="mt-4 sm:mt-8 font-normal text-[16px] sm:text-[20px] tracking-[1px]">
              <p>{product.title}</p>
            </div>
             <div className="mt-4 sm:mt-8 font-bold text-[16px] sm:text-[20px] tracking-[1px]">
              <p>Rs {product.price}</p>
            </div>
            <div className="w-[100%] sm:w-[80%] mt-8 sm:mt-20">
              <a href="https://api.whatsapp.com/send?phone=+919530243375&text=Hello!">
                <button className="bg-[#FFF] hover:bg-[#000000] text-black font-bold py-2 px-4 rounded w-[100%]">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default ProductDetails;
