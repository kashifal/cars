import React from 'react';

const VehicleContent = () => {
  return (
    <div className='mb-20'>
        <div className="flex   w-full justify-center md:max-w-[70%]  flex-wrap py-3 gap-3 mx-auto ">
          <div className=" sm:w-[400px] w-full mx-5 border-[3px] pb-9 py-6 flex flex-col items-center border-3 border-[#3ac9e0] rounded-xl bg-white shadow-xl">
            <h4 className="text-[2.50rem] font-bold font-sans text-center">Used Vehicle</h4>
            <h1 className="text-4xl text-[#40CEE8] mt-5 font-bold text-center">3.99%</h1>
            <h5 className="text-lg font-bold mt-2 text-center text-black">OAC</h5>
            <h6 className="text-lg mt-3 text-center text-gray-500">-0.56</h6>
            <h6 className="text-sm mt-3 text-center font-semibold mb-3 text-[#606276]">since last month</h6>
            <a href="#" className="mt-4 w-[65%] hover:bg-white hover:underline hover:text-[#3AC9E0] duration-700 text-center uppercase font-sans py-[0.60rem]  bg-[#3AC9E0] text-white text-lg rounded">Get Started</a>
          </div>
          <div className=" sm:w-[400px] w-full mx-5 border-[3px] pb-9 py-6 flex flex-col items-center border-3 border-[#3ac9e0] rounded-xl bg-white shadow-xl">
            <h4 className="text-[2.50rem] font-bold font-sans text-center">New Vehicle</h4>
            <h1 className="text-4xl text-[#40CEE8] mt-5 font-bold text-center">0%</h1>
            <h5 className="text-lg font-bold mt-2 text-center text-black">OAC</h5>
            <h6 className="text-lg mt-3 text-center text-gray-500">-0.1</h6>
            <h6 className="text-sm mt-3 text-center font-semibold mb-3 text-[#606276]">since last month</h6>
            <a href="#" className="mt-4 w-[65%] hover:bg-white hover:underline hover:text-[#3AC9E0] duration-700 text-center uppercase font-sans  py-[0.60rem] bg-[#3AC9E0] text-white text-lg rounded">Get Started</a>
          </div>
        </div>
        <div className="mx-auto justify-center p-2 text-center md:max-w-7xl">
          <h1 className="text-2xl font-semibold">We find the best deal at the best bank so you don't have to</h1>
          <div className="flex cursor-pointer flex-wrap justify-center gap-5 py-5">
            <img src="https://allcreditcarloans.com/img/logos/TDAF-logo.png" alt="" className="rounded-lg" />
            <img src="https://allcreditcarloans.com/img/logos/RBC-logo.png" alt="" className />
            <img src="https://allcreditcarloans.com/img/logos/TDAF-logo.png" alt="" className="rounded-lg" />
            <img src="https://allcreditcarloans.com/img/logos/RBC-logo.png" alt="" className />
            <img src="https://allcreditcarloans.com/img/logos/TDAF-logo.png" alt="" className="rounded-lg" />
            <img src="https://allcreditcarloans.com/img/logos/RBC-logo.png" alt="" className />
          </div>
        </div>
        <div className=" flex flex-col mt-20 text-center px-1 items-center justify-center pb-10 md:pb-0">
          <h4 className=" text-sm text-[#3AC9E0] uppercase font-bold">Rates Updated: August 2020</h4>
          <h2 className="h2 mt-6  text-[#3AC9E0]  text-2xl  sm:text-4xl font-bold">Auto Loans Rates in Canada</h2>
          <p className=" text-base" />
        </div>
        <div className="bg-white shadow-2xl shadow-neutral-400 md:max-w-[60%] mx-3 md:mx-auto  ">
          <div className="flex border-t-0 rounded-t-[0.60rem]  py-6  lg:flex-row text-center flex-col gap-2 justify-between font-semibold text-white uppercase  px-10 mt-9 items-center p-3 bg-black">
            <div className>Provider</div>
            <div className="mr-10 lg:flex hidden">Range</div>
            <div className="text-black lg:flex hidden">.</div>
          </div>
          <div className="flex   lg:flex-row text-center flex-col gap-5 justify-between  mx-auto px-8  items-center py-10 bg-[#F9F9FB]">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
              <div className>
                <img src="https://allcreditcarloans.com/img/logos/TDAF-logo.png" className="rounded-xl w-14" alt="" />
              </div>
              <div className="text-center md:text-start">
                <h1 className="font-bold text-lg">TD Auto Finance</h1>
                <p className="text-gray-500">Prime</p>
              </div>
            </div>
            <div className="text-center md:text-start">
              <h1 className="font-bold text-lg">4.99% - 8.48%</h1>
              <p className="text-gray-500">OAC</p>
            </div>
            <a href="#" className=" hover:bg-white hover:underline hover:text-[#3AC9E0] duration-700 text-center uppercase font-sans px-11 py-[0.60rem]  bg-[#3AC9E0] text-white text-lg rounded">SEE RATES</a>
          </div>
        </div>
        <div className="flex flex-col font-sans gap-6 mt-10 text-center px-2 items-center justify-center pb-10 md:pb-0">
          <h2 className="h2 mt-6  text-[#3AC9E0]  text-[1.8rem]  sm:text-[2.5rem] font-extrabold">Free Pre Approval</h2>
          <h4 className=" text-base text-black uppercase ">Get your free pre approval now</h4>
          <a href="#" className=" md:w-[25%] lg:w-[17%] w-full hover:bg-white hover:underline hover:text-[#3AC9E0] duration-700 text-center uppercase font-sans py-[0.60rem]  bg-[#3AC9E0] text-white text-lg rounded">Get Started</a>
        </div>
      </div>
  );
};

export default VehicleContent;
