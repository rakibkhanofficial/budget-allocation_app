import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <h1 className=" text-3xl font-medium p-3 ">Cahnge Allocation</h1>
      <div className=" grid grid-cols-3 gap-5 p-4 ">
        <div className="flex">
          <div className=" bg-gray-200 border p-5 rounded-l-lg ">
            Department
          </div>
          <select
            className=" bg-gray-200 w-full border-r-2 border-gray-200 rounded-lg p-5 "
            title="department"
          >
            <option>choose</option>
            <option>Finance</option>
            <option>Salse</option>
          </select>
        </div>
        <div className="flex">
          <div className=" bg-gray-200 border-l-2 p-5 rounded-l-lg ">
            Allocation
          </div>
          <select
            className=" bg-gray-100 w-full border-r-2 border-gray-100 rounded-lg p-5 "
            title="Allocation"
          >
            <option>Add</option>
            <option>Remove</option>
            <option>Salse</option>
          </select>
        </div>
        <div className=" flex gap-3 ">
          <input
            placeholder="Enter Amount"
            className=" p-3 rounded-lg border "
            title="amount"
            type="number"
          />
          <button
            title="save"
            type="button"
            className=" bg-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-600 "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
