import React from 'react';
import Img from '../assets/Volkswagen Golf.jpg'
import fstImg from '../assets/img1.webp'
import fstImg2 from '../assets/img2.webp'
import fstImg3 from '../assets/img3.webp'
import fstImg4 from '../assets/img4.webp'
import { Link } from 'react-router-dom';

const ContactContent = () => {
  return (
    <div>
        <div className=" mt-20">
        <div className="pt-4">
          <div className="w-full">
            <h6 className="mb-2 w-full text-center font-bold text-[#fd0223]">Step 1 of 7</h6>
            <div className="mx-auto h-5 w-72 rounded-full bg-gray-200 md:w-96" />
          </div>
        </div>
        <div className="w-full text-center">
          <h2 className="pt-2 text-2xl font-bold leading-snug text-[#fd0223] sm:text-[2.5rem]">What type of vehicle are you looking for?</h2>
          <h4 className="mt-1 pb-4 text-lg font-light text-[#fd0223] sm:mt-3 sm:text-2xl">No Appointments, No Obligation and Free to Apply</h4>
        </div>
        <div className="mx-5 lg:mx-60">
          <div className="mt-3 w-full rounded-md border bg-white p-3 shadow-2xl shadow-neutral-700">
            <div className="grid grid-cols-1 gap-7 border-b pb-10 md:grid-cols-2">
              <div className="rounded-md bg-[#fd0223] hover:bg-[#fd0223] pb-3 shadow-2xl shadow-neutral-700">
                <div className="h-full">
                  <button type="button" className="mt-3 h-full w-full flex-col rounded px-0">
                    <img alt="truck" loading="lazy" width={316} height={170} decoding="async" className="max-h-[170px] max-w-full px-1" src={fstImg} style={{color: 'transparent', margin: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '170px'}} />
                    <div className="mt-5 w-full">
                      <div className="mx-auto mb-6 w-[80%] justify-center rounded bg-white py-3 text-3xl  text-[#fd0223] shadow-xl">Truck</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="rounded-md bg-[#fd0223] pb-3 hover:bg-[#fd0223] shadow-2xl shadow-neutral-700">
                <div className="h-full">
                  <button type="button" className="mt-3 h-full w-full flex-col rounded px-0">
                    <img alt="truck" loading="lazy" width={316} height={170} decoding="async" className="max-h-[170px] max-w-full px-1" src={fstImg2} style={{color: 'transparent', margin: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '170px'}} />
                    <div className="mt-5 w-full">
                      <div className="mx-auto mb-6 w-[80%] justify-center rounded bg-white py-3 text-3xl  text-[#fd0223] shadow-xl">Car</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="rounded-md hover:bg-[#fd0223] bg-[#fd0223] pb-3 shadow-2xl shadow-neutral-700">
                <div className="h-full">
                  <button type="button" className="mt-3 h-full w-full flex-col rounded px-0">
                    <img alt="truck" loading="lazy" width={316} height={170} decoding="async" className="max-h-[170px] max-w-full px-1" src={fstImg3} style={{color: 'transparent', margin: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '170px'}} />
                    <div className="mt-5 w-full">
                      <div className="mx-auto mb-6 w-[80%] justify-center rounded bg-white py-3 text-3xl  text-[#fd0223] shadow-xl">SUV</div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="rounded-md hover:bg-[#fd0223] bg-[#fd0223] pb-3 shadow-2xl shadow-neutral-700">
                <div className="h-full">
                  <button type="button" className="mt-3 h-full w-full flex-col rounded px-0">
                    <img alt="truck" loading="lazy" width={316} height={170} decoding="async" className="max-h-[170px] max-w-full px-1" src={fstImg4} style={{color: 'transparent', margin: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '170px'}} />
                    <div className="mt-5 w-full">
                      <div className="mx-auto mb-6 w-[80%] justify-center rounded bg-white py-3 text-3xl  text-[#fd0223] shadow-xl">Van</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="container mx-auto flex pt-5">
                <Link role="button" tabIndex={0} to="/inventory" className="ml-auto mr-2 flex items-center rounded bg-[#fd0223] px-4 py-3 font-bold text-white duration-300 hover:bg-[#fd0223] sm:mr-5">
                  Choose Later
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className>
          <div className="mx-auto  mb-8 mt-10 max-w-2xl p-5">
            <h2 className="mb-6 text-center  text-2xl border-b-2 pb-3 font-bold text-[#fd0223] md:text-3xl">Some of our Favorite Customer Success Stories</h2>
            <div className="overflow-hidden shadow-neutral-600 shadow-lg rounded-lg bg-white  md:flex">
              <div className="relative md:w-1/2">
                <img src={Img} alt="Customer with Ford Escape" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col  bg-[#fd0223] p-6 md:w-1/2">
                <h3 className="mb-2 text-xl sm:text-3xl border-b border-gray-300 w-full mt-5 pb-5 font-bold text-white">2019 Ford Escape</h3>
                <p className="text-2xl font-extralight  text-white">Ambyr M.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
