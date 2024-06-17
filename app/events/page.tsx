import React from "react";
import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import sinulogpic from "../../public/sinulog.jpg";
const Events = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex justify-center min-w-fit rounded-xl">
        <Image
          src={sinulogpic}
          alt="Sinulog Festival"
          width={800}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center gap-5 mt-4">
        <button className="text-white p-3 bg-yellow-400 rounded-lg">
          Join event
        </button>
        <button className="text-white p-3 bg-yellow-400 rounded-lg">
          Copy Event Link
        </button>
      </div>
      <div className="text-white ml-40">
        <h1 className="text-yellow-400 font-bold text-3xl">SINULOG FESTIVAL</h1>
        <p className="font-semibold">Date of event: Jan. 16-21, 2024</p>
      </div>
      <div className="bodytext text-white ml-40 mt-4" style={{ width: 1000 }}>
        <h1 className="text-yellow-400 font-bold text-3xl">Details</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Events;
