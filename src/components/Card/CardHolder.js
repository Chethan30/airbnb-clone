import React from "react";
import Card from "./Card";
import "./CardHolder.css";
import { list } from "../../assets/cardLinks";

export default function CardHolder() {
  return (
    <div className="card-holer">
      {list.map((item, index) => (
        <Card key={index} cardinfo={item} />
      ))}
    </div>
  );
}
