import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

export default function Card({
  image,
  title,
  desc,
}: {
  image: StaticImageData;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image src={image} alt={title} width={140} height={140}/>
      <h2 className="text-center tracking-tighter font-bold text-lg lg:text-2xl">{title}</h2>
      <p className="lg:text-base text-sm text-center">{desc}</p>
    </div>
  );
}
