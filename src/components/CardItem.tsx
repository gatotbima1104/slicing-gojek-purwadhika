import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

export default function CardItem({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: StaticImageData;
}) {

  return (
    <div
      className={`bg-[#7CCC6D] w-[250px] h-[300px] items-center justify-center flex flex-col mx-auto text-black p-5 rounded-3xl space-y-5 relative`}
    >
      <Image alt={title} src={image} className="absolute -top-20" />
      <h2 className="font-bold text-4xl">{title}</h2>
      <p className="font-semibold text-sm">{desc}</p>
    </div>
  );
}
