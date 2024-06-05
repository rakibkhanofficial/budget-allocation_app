import React from "react";
import { data } from "./data";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

const BudgetTable = () => {
  return (
    <div className=" p-5 ">
      <h1 className=" text-2xl font-medium p-3 ">Allocation</h1>
      <div className=" grid grid-cols-5 gap-3 border p-3 rounded-lg ">
        <p className=" text-center text-lg ">Department</p>
        <p className=" text-center text-lg ">Allocated Budget</p>
        <p className=" text-center text-lg ">InCrease By 10</p>
        <p className=" text-center text-lg ">Decrease By 10</p>
        <p className=" text-center text-lg ">Action</p>
      </div>
      {data?.map((data, index) => (
        <div className=" grid grid-cols-5 gap-3 p-3 mt-5 border rounded-lg ">
          <div className=" text-center ">{data?.department}</div>
          <div className=" text-center ">{data?.AllocateBudget}</div>
          <div className=" text-xl mx-auto text-center text-green-600 font-semibold ">
            <IoMdAddCircle />
          </div>
          <div className=" text-xl mx-auto text-center text-red-600 font-semibold ">
            <FaMinusCircle />
          </div>
          <div className=" text-xl text-center font-semibold ">+</div>
        </div>
      ))}
    </div>
  );
};

export default BudgetTable;
