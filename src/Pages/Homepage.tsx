import React from "react";
import Category from "../Components/Category";
import Search from "../Components/Search";

const Homepage: React.FC = () => {
  return (
    <div>
      <Search />
      <Category />
    </div>
  );
};

export default Homepage;
