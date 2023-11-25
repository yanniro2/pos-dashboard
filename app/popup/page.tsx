"use client";
import React, { useState } from "react";

const Page = () => {
  const [hide, setHide] = useState<boolean>(true);
  const handleToggle = () => {
    setHide(!hide);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <button
        onClick={handleToggle}
        className="bg-orange-400 text-white font-bold p-5 rounded">
        Toggle button
      </button>

      {hide && (
        <div
          className="w-screen h-screen z-100 fixed flex backdrop-blur-sm items-center justify-center"
          onClick={handleToggle}>
          <div className="container h-[90vh] flex items-stat flex-col  bg-white drop-shadow rounded-xl p-3 ">
            <div className="flex p-3 border-b w-full h-full justify-between">
              <h3 className="font-bold">Lorem ipsum dolor sit amet.</h3>
              <button className="text-4xl">&times;</button>
            </div>

            <div className="w-full flex items-start gap-5 h-full pt-5">
              <div className="w-1/2 h-full  ">
                <div className="w-full flex items-center justify-evenly bg-gray">
                  <div className="flex flex-col items-center justify-center gap-5">
                    <img
                      src="./logo.jpeg"
                      alt="img"
                      className="w-1/2 h-1/2 object-contain rounded-xl"
                    />

                    <h1 className="h1-title">Team A</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[1rem] w-full">
                    <h1 className="h1-title">match name</h1>
                    <div className="flex items-center justify-center p-3 bg-gray-100 rounded-full">
                      <h1 className="h1-title">Date : </h1>
                      2023-11-23
                    </div>

                    <div className="flex flex-col w-full gap-5">
                      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-full w-full">
                        <h1 className="h1-title">start time : </h1>
                        11:54am
                      </div>
                      <div className="flex items-center justify-center p-3 bg-gray-100 rounded-full">
                        <h1 className="h1-title">end time : </h1>
                        11:54am
                      </div>
                    </div>

                    {/* <h1 className="h1-title">troppy name</h1> */}

                    <div className="flex items-center justify-center p-3 bg-gray-100 rounded-full">
                      <h1 className="h1-title">Duration : </h1>
                      40 min
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-5">
                    <img
                      src="./logo.jpeg"
                      alt="img"
                      className="w-1/2 h-1/2 object-contain rounded-xl"
                    />

                    <h1 className="h1-title">Team B</h1>
                  </div>
                </div>

                <div className="w-full flex items-center h-1/2 flex-col gap-1">
                  {/* heading */}
                  <div className="w-full p-3 flex border-b items-center justify-between">
                    <div>Team A</div>
                    <div>Team B</div>
                  </div>

                  {/* body */}
                  <div className="div-box-1">
                    <div>1</div>
                    <div className="capitalize font-semibold">try</div>
                    <div>3</div>
                  </div>
                  <div className="div-box-1">
                    <div>1</div>
                    <div className="capitalize font-semibold">try</div>
                    <div>3</div>
                  </div>
                  <div className="div-box-1">
                    <div>1</div>
                    <div className="capitalize font-semibold">try</div>
                    <div>3</div>
                  </div>
                  <div className="div-box-1">
                    <div>1</div>
                    <div className="capitalize font-semibold">try</div>
                    <div>3</div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col h-full justify-between  overflow-hidden">
                <div className="h-1/2 w-full overflow-hidden">
                  <img
                    src="./troppy.png"
                    alt="img troppy"
                    className="w-full h-full flex items-center justify-center object-contain"
                  />
                </div>
                <div className="h-1/2 w-full flex flex-wrap ">
                  <img
                    src="./img.avif"
                    alt="sponsor img"
                    className="w-1/2 h-1/2 object-cover"
                  />

                  <img
                    src="./img.avif"
                    alt="sponsor img"
                    className="w-1/2 h-1/2 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
