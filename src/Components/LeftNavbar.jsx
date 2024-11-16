import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../index.css'


const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <>
      <div>
        <h3 className="font-semibold text-xl mb-6 lg:text-left text-center">
          All Categories ({categories.length})
        </h3>
        <div className="lg:flex lg:flex-col lg:gap-6 grid grid-cols-3 gap-6">
          {categories.map((category) => (
            <NavLink
            to={`/category/${category.category_id}`} 
            className="btn lg:w-1/2 lg:py-2 px-4 bg-base-200" 
            key={category.category_id}>
              {category.category_name}
            </NavLink >
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
