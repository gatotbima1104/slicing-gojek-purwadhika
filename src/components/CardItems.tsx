import React from "react";
import CardItem from "./CardItem";
import { ItemCards } from "@/app/constant/CardItem";

export default function CardItems() {
  const colors = ["#7CCC6D", "#D58BC8", "#FFAF61", "#4BC8E4"];

  return (
    <div className="grid md:grid-cols-2 gap-y-20 mx-10 pb-5 lg:grid-cols-4 sm:grid-cols-1">
      {ItemCards.map((el, index) => {
        return (
          <CardItem
            key={el.key}
            desc={el.desc}
            title={el.title}
            image={el.image}
            bg={"#7CCC6D"}
          />
        );
      })}
    </div>
  );
}
