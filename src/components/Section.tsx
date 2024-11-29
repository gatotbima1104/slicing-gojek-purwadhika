import React from "react";
import Card from "./Card";
import MiniSection from "./MiniSection";
import { Cards } from "@/app/constant/Cards";

export default function Section() {
  return (
    <div className="w-full h-screen bg-white text-black flex flex-col rounded-t-lg">
      <div className="w-full h-[350px] bg-white text-black flex flex-row relative">
        <div className="grid md:grid-cols-4 gap-5 px-28 absolute -top-10 ">
          {Cards.map((el, index) => {
            return (
              <div>
                <Card
                  key={el.key}
                  image={el.image}
                  title={el.title}
                  desc={el.desc}
                />
              </div>
            );
          })}
        </div>
      </div>

      <MiniSection
        btnText="Gabung"
        title="Skala Kami"
        bg="#ffff"
        textColor="text-black"
      />
    </div>
  );
}
