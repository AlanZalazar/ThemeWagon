import React from "react";

export default function Features() {
  const features = [
    {
      name: "Encrypted Mail",
      image: "./4.features/1.png",
      text: "A process of encrypting email communications",
    },
    {
      name: "Display Sharing",
      image: "./4.features/2.png",
      text: "With other participants, you may share your screen",
    },
    {
      name: "Private Notebook",
      image: "./4.features/3.png",
      text: "Private Notebook is an application that is protected",
    },
    {
      name: "App Assistance",
      image: "./4.features/4.png",
      text: "App Assistant is quickly and effectively ran the system",
    },
    {
      name: "Multiple Printing",
      image: "./4.features/5.png",
      text: "Our canvas prints are crafted on top-notch canvas",
    },
    {
      name: "Free Sketch",
      image: "./4.features/6.png",
      text: "Our canvas prints are crafted on top-notch canvas",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6 ">Features</h1>
      <p className="text-gray-500 w-max-[550px] text-center">
        We provide a number of excellent features that will undoubtedly improve
        the user experience. We also provide a better support system
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-[80%]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-[335px]"
          >
            <img
              src={feature.image}
              alt={feature.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-xl text-gray-600 font-semibold mb-2">
              {feature.name}
            </h3>
            <p className="text-gray-500">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
