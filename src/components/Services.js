import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
      <h1 className="cryptoHead" style={{color: "white", fontSize: "60px", fontWeight: 700}}>
          Our Services
          </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Today, billions of people can’t open bank accounts, others have their payments blocked. Ethereum's decentralized finance (DeFi) system never sleeps or discriminates. With just an internet connection, you can send, receive, borrow, earn interest, and even stream funds anywhere in the world.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
      <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Your personal data is encrypted and all transactions are 100% secured"
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="Safe and secure"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Your personal data is encrypted and all transactions are 100% secured"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="24/7 support"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Your personal data is encrypted and all transactions are 100% secured"
        />
      </div>
    </div>
  </div>
);

export default Services;