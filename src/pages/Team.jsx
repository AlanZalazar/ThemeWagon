import React from "react";
import { BotonGradient } from "../components/BotonGradient";

export default function Team() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our team</h2>
        <p className="text-gray-500 p-5">
          People from various origins, cultures, and personalities make up our
          team.<br></br>This blend makes it a powerful team
        </p>
      </div>
      <div className="flex justify-center items-center gap-5 p-10">
        <div className="flex flex-col items-center">
          <img className="p-2" src="./6.team/1.png" alt="john" />
          <h3 className="font-bold text-gray-600 text-[18px]">John Adams</h3>
          <p className="text-gray-500 text-[12px]">CEO</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="p-2" src="./6.team/2.png" alt="john" />
          <h3 className="font-bold text-gray-600 text-[18px]">
            Carrey Johnson
          </h3>
          <p className="text-gray-500 text-[12px]">Senior Developer</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="p-2" src="./6.team/3.png" alt="john" />
          <h3 className="font-bold text-gray-600 text-[18px]">Ray Marie</h3>
          <p className="text-gray-500 text-[12px]">Developer</p>
        </div>
        <div className="flex flex-col items-center">
          <img className="p-2" src="./6.team/4.png" alt="john" />
          <h3 className="font-bold text-gray-600 text-[18px]">Austin Min</h3>
          <p className="text-gray-500 text-[12px]">Designer</p>
        </div>
      </div>
      <div className="p-10 flex justify-center items-center">
        <BotonGradient>View Full Team</BotonGradient>
      </div>
    </div>
  );
}
