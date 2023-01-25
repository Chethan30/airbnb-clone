import React, { useState } from "react";
import "./Filter.css";
import { links } from "../../assets/imageLinks";

export default function Filter() {
  const [selectedFilter, setSelectedFilter] = useState();

  return (
    <div className="filter">
      {links.map((item, index) => (
        <div
          key={index}
          className={`filter-image-holder ${
            index === selectedFilter && "selected"
          }`}
          onClick={() => setSelectedFilter(index)}
        >
          <img src={item.imgSrc} alt={index} />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
