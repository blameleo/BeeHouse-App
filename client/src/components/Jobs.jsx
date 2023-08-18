import React from "react";
import { MdVerified } from "react-icons/md";
import { GiBee } from "react-icons/gi";
import Filter from "./Filter";

function Jobs() {
  return (
    <div className="mt-44   bg-[url('/img/beehive-bg1.jpeg')] bg-contain bg-no   flex flex-col md:flex-row">
      <div className="  min-w-[350px] hidden md:block h-screen p-5 bg-white fixed left-0 top-[200px]">
        <div className=" h-[200px] rounded-xl mb-4 bg-[url('/img/adpic.jpg')] bg-cover bg-no-repeat"></div>

        <div className="   rounded-xl">
          <Filter />
        </div>
      </div>
      <div className="  mt-20 md:ml-[440px] md:w-[75%]  ">
        <div className="p-5  fixed top-32 z-10 bg-white w-full pt-20 sm:left-[400px]">
          <h1 className="text-xl font-black">Popular Jobs</h1>
        </div>

        <div className="flex flex-wrap sm:justify-between px-8 justify-center">
          <div className="h-[330px] sm:w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-green-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-red-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-orange-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer mb-10">
            <div className="h-[240px] bg-blue-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>

          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          <div className="h-[330px] w-[300px] border border-gray-700 shadow-xl  rounded-[20px] bg-white hover:scale-105 transition duration-500 cursor-pointer">
            <div className="h-[240px] bg-pink-100 rounded-[20px] m-2 p-4">
              <p className="bg-white rounded-lg flex justify-center w-24 py-1 text-sm">
                19 Feb,2023
              </p>

              <div className="pt-6 flex items-center">
                <h1 className=" text-gray-700">Innova DDB</h1>
                <MdVerified className="ml-1 text-yellow-500 text-[20px]" />
              </div>

              <div className="py-2">
                <h1 className="font-black text-xl">
                  20 years old man needed for a food advert
                </h1>
              </div>
              <div className="flex flex-wrap">
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  chubby
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Brown Hair
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  6ft
                </p>
                <p className="border border-gray-400 mr-2 text-gray-600 rounded-xl px-[5px] my-1">
                  Muscular
                </p>
              </div>
            </div>
            <div className="px-4 pt-2 flex justify-between items-center">
              <div>
                <p className="font-black text-xl">₵1200</p>
                <p className="text-gray-500">East Legon, Accra</p>
              </div>
              <GiBee className="text-black text-[32px]  rounded-full  h-10 w-10" />
            </div>
          </div>
          {/* <div className="h-[300px] w-[300px] border border-gray-400 rounded-[20px] bg-white"></div>
          <div className="h-[300px] w-[300px] border border-gray-400 rounded-[20px] bg-white"></div>
          <div className="h-[300px] w-[300px] border border-gray-400 rounded-[20px] bg-white"></div>
          <div className="h-[300px] w-[300px] border border-gray-400 rounded-[20px] bg-white"></div>
          <div className="h-[300px] w-[300px] border border-gray-400 rounded-[20px] bg-white"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
