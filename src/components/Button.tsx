import React from "react";

export default function Button({text}: {text: string}) {
  return (
    <button className="p-3 bg-[#00880B] text-white rounded-full">{text}</button>
  );
}
