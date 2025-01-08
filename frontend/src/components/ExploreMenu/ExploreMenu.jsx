import React, { useEffect, useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory, searchQuery }) => {
  const [filteredMenu, setFilteredMenu] = useState(menu_list);

  useEffect(() => {
    if (searchQuery) {
      const filtered = menu_list.filter((item) =>
        item.menu_name.toLowerCase().includes(searchQuery)
      );
      setFilteredMenu(filtered);
    } else {
      setFilteredMenu(menu_list);
    }
  }, [searchQuery]);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a variety of dishes.
      </p>
      <div className="explore-menu-list">
        {filteredMenu.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
            className={`explore-menu-list-item ${
              category === item.menu_name ? "selected" : ""
            }`}
          >
            <img
              className={`menu-image ${
                category === item.menu_name ? "active" : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
