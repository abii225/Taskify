import React from "react";

const Search: React.FC = () => {
  return (
    <div className="w-[95%] max-w-[600px] mx-auto gap-3 rounded-md  mt-[20px] flex flex-col md:flex-row items-center justify-between align-middle">
      <div className="relative flex ">
        <input
          type="email"
          className="peer p-2 font-primary text-[18px]  text-white  ps-11 block w-full  bg-table border-transparent focus:outline-none rounded-l-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent  dark:focus:ring-gray-600"
          placeholder="Search todo"
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></div>
        <button className="w-[120px] h-[50px]  bg-blue-900  text-[18px] text-white rounded-r-md">
          Search
        </button>
      </div>

      <div className="flex items-center align-middle gap-2 pl-2  h-[50px] rounded-md">
        <h3 className="text-[18px] font-primary text-white"> View by</h3>
        <select
          className="h-[100%] p-2 bg-blue-900 rounded-md text-white focus:outline-blue-700 text-[18px] hover:cursor-pointer"
          name=""
          id=""
        >
          <option className="text-[18px] font-primary" value="">
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
