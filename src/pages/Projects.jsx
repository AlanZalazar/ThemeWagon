import React from "react";
import { BotonGradient } from "../components/BotonGradient";

export default function Projects() {
  const images = [
    "./5.projects/1.png",
    "./5.projects/2.png",
    "./5.projects/3.png",
    "./5.projects/4.png",
    "./5.projects/5.png",
    "./5.projects/6.png",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center  px-4">
      <img
        src="./5.projects/amarillo.png"
        className="absolute left-0"
        alt="forma"
      />
      <img
        src="./5.projects/azul.png"
        className="absolute right-0 bottom-25"
        alt="asd"
      />
      <img
        src="./5.projects/azul.png"
        className="absolute right-0 bottom-25"
        alt="asd"
      />
      <img
        src="./5.projects/viborita.png"
        className="absolute right-50 top-100 "
        alt="forma"
      />
      <div className="text-center max-w-2xl mx-auto mb-5 z-10">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-500 w-[550px]">
          A project is a single or team activity, combining research and design
          with best effort. Here are some of our team's projects.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex justify-center z-10">
        <div className=" w-[80%] z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-7  backdrop-blur-lg border-white border rounded-2xl z-10 bg-white/30 ">
            <div className="space-y-6 ">
              <img
                src={images[0]}
                alt="1"
                className="w-full h-auto object-cover rounded-lg"
              />
              <img
                src={images[3]}
                alt="4"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <img
                src={images[1]}
                alt="2"
                className="w-full h-auto object-cover rounded-lg"
              />
              <img
                src={images[4]}
                alt="5"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <img
                src={images[2]}
                alt="3"
                className="w-full h-auto object-cover rounded-lg"
              />
              <img
                src={images[5]}
                alt="6"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-10">
        <BotonGradient>View More</BotonGradient>
      </div>
    </div>
  );
}
