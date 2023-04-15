import React from "react";
import { data } from "../data";

const Food = () => {
  return (
    <div classname="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              
            >
              All
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
             
            >
              Burgers
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              
            >
              Pizzas
            </button>
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
             
            >
              Salads
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {data.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
