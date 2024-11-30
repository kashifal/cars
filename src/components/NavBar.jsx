import React from 'react';
import logo from '../assets/logo.jpeg'
const NavBar = () => {
  return (
   <>
     <div className=" lg:px-28 fixed z-[9999999999] top-0 w-full bg-white">
          <div className>
            <div className="mx-6 lg:mx-0 flex items-center   justify-between py-3">
              <a href="/" className="py-3">
                <img src={logo} className="size-[50px]" alt="" />
              </a>
              <div className="flex gap-[100px] mr-11 px-9 items-center">
                <div className="flex gap-3">
                  <a role="button" tabIndex={0} href="#" className=" hidden  border border-[#fd0223] px-4 py-2 text-[#fd0223] hover:bg-gray-200 duration-300 sm:block"> INVENTORY </a>
                  <a role="button" tabIndex={0} href="#" className="hidden  bg-[#fd0223] px-5 py-2 text-white   duration-300 md:block"> GET APPROVED NOW </a>
                </div>
                <div className="fixed right-7   h-6 w-8">
                  <button type="button" id className="absolute inset-0 hover:text-red-600 group m-0 h-full w-full cursor-pointer border-none bg-transparent p-0">
                    <div>
                      <span className="absolute left-0 right-0 top-0 block h-[20%]  group-hover:bg-red-600 bg-gray-500" />
                      <span className="absolute left-0 right-0 top-[40%] block h-[20%] group-hover:bg-red-600 bg-gray-500" />
                      <span className="absolute left-0 right-0 top-[80%] block h-[20%] group-hover:bg-red-600 bg-gray-500" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto p-3 pt-32 lg:px-28 ">
          <div className="relative">
            <div className="relative">
              <input type="search" inputMode="search" placeholder="Search by make, model, or keyword" className=" w-full rounded-lg border-2 placeholder:text-gray-500 border-[#fd0223] py-2 pl-12 :outline-none focus:ring-1 focus:ring-blue-500" style={{paddingLeft: '50px'}} />
              <svg aria-hidden="true" focusable="false" className="text-[#fd0223] absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </div>
        </div>
        <div className>
          <ul className="sm:hidden sm:grid flex justify-between flex-wrap items-center  sm:grid-cols-3    w-full  ">
            <li className="flex items-center justify-center w-fit mx-auto ">
              <button type="button" className="flex items-center  bg-[#fd0223]  border-t rounded-t-xl w-[200px] justify-center py-2 text-white hover:bg-[#fd0223] duration-300 focus:outline-none focus:ring focus:ring-blue-300">
                <svg aria-hidden="true" className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                Home
              </button>
            </li>
            <li className="flex items-center justify-center w-fit mx-auto">
              <button type="button" className="flex items-center   border-gray-300 bg-white w-[200px] justify-center py-2 text-[#fd0223] ">
                <svg aria-hidden="true" className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                  <path d="M171.3 96L224 96l0 96-112.7 0 30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192l0-96 81.2 0c9.7 0 18.9 4.4 25 12l67.2 84L272 192zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36L171.3 32c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256L0 368c0 17.7 14.3 32 32 32l33.3 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l130.7 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l33.3 0c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                Sell &amp; Trade
              </button>
            </li>
            <li className="flex items-center justify-center w-fit mx-auto pr-6">
              <button type="button" className="flex items-center   border-gray-300 bg-white m-auto w-full justify-center py-2 text-[#fd0223]">
                <svg aria-hidden="true" className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2L80 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 54.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z" />
                </svg>
                Finance
              </button>
            </li>
          </ul>
        </div>
   </>
  );
};

export default NavBar;
