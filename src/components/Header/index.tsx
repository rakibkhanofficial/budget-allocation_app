import React from "react";

const HeaderComponenet = () => {
  return (
    <div>
      <h1 className=" text-4xl text-start font-semibold ">{`Company's Budget Allocation`}</h1>
      <div className=" grid grid-cols-4 gap-5 p-5 ">
        <div className=" flex bg-gray-200 p-2 rounded-lg justify-center items-center gap-3 ">
          <div>
            <h1>Budget $</h1>
          </div>
          <div>
            <input
              className=" px-2 py-3 border rounded-lg "
              title="budget"
              type="number"
              placeholder="Enter Budget"
            />
          </div>
        </div>
        <div className=" bg-green-200 flex justify-start items-center text-xl text-green-700 rounded-lg p-2 ">
          <div>
            <h1>Remaining: $ 1000</h1>
          </div>
        </div>
        <div className=" bg-blue-200 flex justify-start items-center text-xl text-blue-700 rounded-lg p-2 ">
          <div>
            <h1>Spent So Far: $ 1000</h1>
          </div>
        </div>
        <div className=" bg-green-500 flex justify-start items-center text-xl text-white rounded-lg p-2 ">
          <select className=" bg-green-400 w-full border border-green-500 rounded-lg p-3 " title="currency">
            <option>$ Dollar</option>
            <option>Pound</option>
            <option>Euro</option>
            <option>Rupee</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponenet;
