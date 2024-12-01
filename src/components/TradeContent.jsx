import React from 'react';

const TradeContent = () => {
  return (
    <div>
  <div>
     
        <div className="bg-[#fd0223] ">
          <div className="bg-[#007aff]" style={{background: 'url("https://vehicleapprovalcentre.com/_next/static/media/header-bg.e0fe274e.svg")'}}>
            <div className=" p-5 mx-auto flex items-start">
              <h1 className="py-10  sm:pl-20 leading-tight  font-extrabold text-white text-pretty text-2xl sm:text-5xl" style={{fontFamily: '"Gilroy", sans-serif'}}>
                Sell or Trade Your Vehicle
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-2 md:flex-row justify-center items-center mt-3 mb-5">
          <div className="hidden md:block md:w-1/6" /> {/* Spacer for alignment */}
          <div className="w-full border-0 border-gray-400 rounded-xl  md:w-[55%]">
            <div className="rounded-md  bg-white border">
              {/* Card Header */}
              <div className="bg-[#F9F9FA] border-b border-gray-300  px-4 py-3">
                <h4 className="text-2xl font-bold text-[#fd0223] mb-0">Get Top Value for Your Car – Hassle Free Process</h4>
              </div>
              {/* Card Body */}
              <div className="p-4 pb-7 py-5">
                <p className="text-[#41456B]">
                  Looking to sell or trade your car? At Auto Mart in Halifax, we make it easy with competitive appraisals, quick transactions, and a transparent process.
                </p>
                <p className="text-[#41456B] mt-5">
                  Partnered with <b>CARFAX Canada</b>, we ensure your vehicle's history is clearly assessed so you can get the best possible value.
                </p>
                <p className="text-[#41456B] mt-5">
                  Whether you're upgrading, downsizing, or simply need cash, we're here to make your car selling experience smooth and straightforward!
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/6" /> {/* Spacer for alignment */}
        </div>
        <div className="  mb-5 mx-3 sm:mx-auto md:w-[55%]   px-4 bg-[#F2F3F7] mt-14 py-5 ">
          <section className="md:flex-row  gap-2 flex-col flex items-center mx-4 justify-between ">
            <img src="https://cfctradein.azureedge.net/images/carfax-canada-logo-black.svg" alt="Carfax Canada Logo" className />
            <h2 className="text-xl mb-2 font-bold">Find out what your trade-in is worth.</h2>
            <button className="bg-[#fd0223] rounded hover:bg-[#fd0223] duration-300 px-6 py-2 text-white">Get Started</button>
          </section>
        </div>
        <div className="mb-5 w-full md:mt-16 mt-12 ">
          <div className="w-full flex justify-center  mx-auto   ">
            <div className="-mt-12 rounded bg-white p-6 text-center  ">
              <h3 className="mb-12 text-2xl md:text-[2rem] mt-4 font-semibold text-[#fd0223]">Or contact us with some details on your vehicle!
              </h3>
              <form id="contact-form" className=" space-y-6">
                <div className=" sm:w-[70%] w-full space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <svg aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 transform text-[#fd0223]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20} fill="currentColor">
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                    </svg>
                    <input type="text" name="name" placeholder="Name" className="bg-white shadow-xl  form-input focus:ring-[#7481FF]  w-full rounded-lg border border-gray-300 p-4 pr-12 text-lg  focus:outline-none focus:ring-1" />
                  </div>
                  {/* Phone Input */}
                  <div className="relative">
                    <svg aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 transform text-[#fd0223]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} fill="currentColor">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#fd0223]" width="2em" height="2em" viewBox="0 0 72 72"><path fill="#fff" d="M5 17h62v38H5z" /><path fill="#d22f27" d="M5 17h17v38H5zm45 0h17v38H50z" /><path fill="#d22f27" stroke="#d22f27" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55" d="M36 46v-5m0 0h6.8l-.8-2l4-4v-3h-3l-4 4v-7l-3-3m0 15h-6.8l.8-2l-4-4v-3h3l4 4v-7l3-3" /><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55" d="M5 17h62v38H5z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-11 top-[55%] -translate-y-1/2 transform text-[#fd0223]" width="0.7em" height="0.7em" viewBox="0 0 16 16"><path fill="gray" fillRule="non-zero" d="M13.069 5.157L8.384 9.768a.546.546 0 0 1-.768 0L2.93 5.158a.55.55 0 0 0-.771 0a.53.53 0 0 0 0 .759l4.684 4.61a1.65 1.65 0 0 0 2.312 0l4.684-4.61a.53.53 0 0 0 0-.76a.55.55 0 0 0-.771 0" /></svg>
                    <input type="tel" name="phone" placeholder="Phone" className="bg-white shadow-xl  form-input focus:ring-[#7481FF] pl-14 w-full rounded-lg border border-gray-300 p-4 pr-12 text-lg  focus:outline-none focus:ring-1" />
                  </div>
                  {/* Email Input */}
                  <div className="relative">
                    <svg aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 transform text-[#fd0223]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} fill="currentColor">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    <input type="email" name="email" placeholder="Email" className="bg-white shadow-xl  form-input focus:ring-[#7481FF] w-full rounded-lg border border-gray-300 p-4 pr-12 text-lg  focus:outline-none focus:ring-1" />
                  </div>
                </div>
                {/* Vehicle Details */}
                <textarea rows={4} name="message" placeholder="Vehicle Details" className="bg-white shadow-2xl shadow-neutral-300 form-input focus:ring-[#7481FF] w-full rounded-lg border border-gray-300 p-4 pr-12 text-lg  focus:outline-none focus:ring-1" defaultValue={""} />
                {/* Submit Button */}
                <div className="flex justify-start">
                  <button type="submit" className="bg-primary hover:bg-primary-dark rounded-lg px-10 py-5 text-lg font-bold text-[#fd0223] border hover:bg-gray-200 border-[#7481ff] shadow-2xl  transition duration-200">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="overflow-hidden mb-5 mx-auto md:max-w-[50rem]">
          <div className>
            <button type="button" className="flex border-b w-full items-center justify-between  px-4 py-3 text-left transition duration-200 hover:bg-gray-100 focus:outline-none" aria-expanded="false">
              <h5 className="text-xl   py-2 font-medium">How do I get my vehicle appraised?</h5>
              <svg className="h-9 w-9 transform text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="accordion-collapse hidden bg-white transition-all duration-200">
              <div className="accordion-body p-4">
                <p className="text-sm text-gray-600">Simply bring your vehicle to Auto Mart in Halifax, or start the process online. We will assess its condition, history via CARFAX Canada, and market value to provide you with the best offer.</p>
              </div>
            </div>
          </div>
          <div className>
            <button type="button" className="flex border-t w-full items-center justify-between  px-4 py-3 text-left transition duration-200 hover:bg-gray-100 focus:outline-none" aria-expanded="false">
              <h5 className="text-xl py-2 font-medium">Do I need to have my car's full service history?</h5>
              <svg className="hh-9 w-9 transform text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="accordion-collapse hidden bg-white transition-all duration-200">
              <div className="accordion-body p-4">
                <p className="text-sm text-gray-600">Simply bring your vehicle to Auto Mart in Halifax, or start the process online. We will assess its condition, history via CARFAX Canada, and market value to provide you with the best offer.</p>
              </div>
            </div>
          </div>
          <div className>
            <button type="button" className="flex border-t w-full items-center justify-between  px-4 py-3 text-left transition duration-200 hover:bg-gray-100 focus:outline-none" aria-expanded="false">
              <h5 className="text-xl py-2 font-medium">How do I get my vehicle appraised?</h5>
              <svg className="h-9 w-9 transform text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="accordion-collapse hidden bg-white transition-all duration-200">
              <div className="accordion-body p-4">
                <p className="text-sm text-gray-600">Simply bring your vehicle to Auto Mart in Halifax, or start the process online. We will assess its condition, history via CARFAX Canada, and market value to provide you with the best offer.</p>
              </div>
            </div>
          </div>
          <div className>
            <button type="button" className="flex border-t w-full items-center justify-between  px-4 py-3 text-left transition duration-200 hover:bg-gray-100 focus:outline-none" aria-expanded="false">
              <h5 className="text-xl py-2 font-medium">How do I get my vehicle appraised?</h5>
              <svg className="h-9 w-9 transform text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="accordion-collapse hidden bg-white transition-all duration-200">
              <div className="accordion-body p-4">
                <p className="text-sm text-gray-600">Simply bring your vehicle to Auto Mart in Halifax, or start the process online. We will assess its condition, history via CARFAX Canada, and market value to provide you with the best offer.</p>
              </div>
            </div>
          </div>
          <div className>
            <button type="button" className="flex border-t w-full items-center justify-between  px-4 py-3 text-left transition duration-200 hover:bg-gray-100 focus:outline-none" aria-expanded="false">
              <h5 className="text-xl py-2 font-medium">How do I get my vehicle appraised?</h5>
              <svg className="h-9 w-9 transform text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="accordion-collapse hidden bg-white transition-all duration-200">
              <div className="accordion-body p-4">
                <p className="text-sm text-gray-600">Simply bring your vehicle to Auto Mart in Halifax, or start the process online. We will assess its condition, history via CARFAX Canada, and market value to provide you with the best offer.</p>
              </div>
            </div>
          </div>
          <div className>
            <button type="button" className="flex border-t w-full items-center justify-between  px-4 py-3 text-left transition duration-200 hover:bg-gray-100 focus:outline-none" aria-expanded="false">
              <h5 className="text-xl py-2 font-medium">How do I get my vehicle appraised?</h5>
              <svg className="h-9 w-9 transform text-gray-500 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="accordion-collapse hidden bg-white transition-all duration-200">
              <div className="accordion-body p-4">
                <p className="text-sm text-gray-600">Simply bring your vehicle to Auto Mart in Halifax, or start the process online. We will assess its condition, history via CARFAX Canada, and market value to provide you with the best offer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeContent;
