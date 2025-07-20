import React from "react";
import CardService from "../components/cards/CardService";

export default function Services() {
  const card = [
    {
      name: "text",
      img: "./2.services/text.png",
      title: "Send Text Instantly",
      parrafo:
        "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
      link: "",
    },
    {
      name: "org",
      img: "./2.services/org.png",
      title: "Better Organized",
      parrafo:
        "Lasted technology and experienced guidance. trained HR specialists to keep updated.",
      link: "",
    },
    {
      name: "est",
      img: "./2.services/est.png",
      title: "Analytical Statistics",
      parrafo:
        "Messages, real-time reminders, memos, and many more will keep your team in sync.",
      link: "",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center p-5">
      <img
        src="./2.services/amarillo.png"
        className="absolute right-0"
        alt="forma"
      />
      <img
        src="./2.services/esfera.png"
        className="absolute left-75 top-10"
        alt="forma"
      />
      <img
        src="./2.services/esfera.png"
        className="absolute left-75 top-10"
        alt="forma"
      />
      <div className="w-[600px] flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-4xl font-semibold">Service</h1>
        <p className="text-gray-500">
          We offer youth with chances for career development in the their
          practice. We also support a wide range of services to ensure client
          satisfaction
        </p>
      </div>
      <div className="flex w-[80%] justify-center items-center gap-20 p-15">
        {card.map((item) => (
          <CardService
            key={item.name}
            name={item.name}
            img={item.img}
            title={item.title}
            parrafo={item.parrafo}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
