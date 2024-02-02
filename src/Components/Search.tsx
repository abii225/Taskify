import React from "react";

const Search: React.FC = () => {
  return (
    <div className="w-[95%] max-w-[600px] mx-auto gap-3 rounded-md  mt-[20px] flex flex-col md:flex-row items-center justify-between align-middle">
      <label className="flex flex-row max-w-[300px]">
        <input
          type="email"
          className=" text-[20px] font-primary outline-none border-b-gray-700  text-black   ps-11 block w-full   rounded-l-md"
          placeholder="Search todo"
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></div>
        <button className="w-[120px] h-[50px]  bg-item2  text-[18px] text-white rounded-r-md">
          Search
        </button>
      </label>

      <div className="flex items-center align-middle gap-2 pl-2 bg-item2  h-[50px] rounded-md">
        <h3 className="text-[18px] font-primary text-white"> View by</h3>
        <select
          className="h-[100%] p-2 bg-white rounded-md text-gray-700  text-[18px] hover:cursor-pointer"
          name=""
          id=""
        >
          <option className="text-[18px]  font-primary" value="">
            Default
          </option>
          <option className="text-[18px] font-primary" value="Low">
            Low
          </option>
          <option className="text-[18px] font-primary" value="Medium">
            Medium
          </option>
          <option className="text-[18px] font-primary" value="High">
            High
          </option>
        </select>
      </div>
    </div>
  );
};

export default Search;
