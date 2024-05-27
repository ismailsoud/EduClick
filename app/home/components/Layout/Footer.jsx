import React from "react";
import logo from '../../../../public/logoDark.png'
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image src={logo} alt='logo'/>
          <p className="mb-4">
            <strong className="font-medium">EduClic</strong> est une plateforme d'apprentissage en ligne qui propose des cours diversifiés pour développer des compétences à travers une interface intuitive.
          </p>
          <p className="text-gray-400">Abdelmounim & Ismail</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Menu</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Acceuil{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
            Se connecter{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Inscription{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Autre</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
