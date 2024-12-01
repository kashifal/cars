import React from 'react';
import { Link } from 'react-router-dom';
import fstImg from '../assets/img1.webp'
import fstImg2 from '../assets/img2.webp'
import fstImg3 from '../assets/img3.webp'
import fstImg4 from '../assets/img4.webp'
import bigBg from '../assets/bigBg.svg'
import caraLogo from '../assets/caraLogo.svg'

const HomeHero = () => {
  return (
    <div className=" w-full lg:block">
    <div className="bg-[#fd0223] bg-cover bg-top bg-repeat-y text-center" style={{backgroundImage: `url(${bigBg})`, backgroundSize: '110%'}}>
      <div className="container mx-auto w-full px-0 pb-3   lg:px-5">
        <h1 className="px-2 pt-4 text-[1.4rem] md:text-[2.5rem] sm:font-bold font-extrabold text-white lg:pt-5 xl:pt-5">The Easiest Way to Buy &amp; Trade<br />Vehicles in Atlantic Canada</h1>
        <h6 className="pb-3 pt-2 sm:pt-4 font-semibold text-white lg:pb-4 xl:pb-4">From Your Phone To Your Home - <br />Quality cars delivered to your door since 2017</h6>
        <div className="xl:mx-16">
          <div className="mx-auto grid w-full gap-3 pt-8 lg:grid-cols-3">
            <div className="flex flex-col px-4 xl:mx-4 pb-4 lg:mx-1 gap-2  lg:px-0 lg:pb-5 xl:pb-5">
              <Link to="/approved" role="button" tabIndex={0} className="py-[0.85rem] hover:bg-gray-300 duration-300 bg-white text-[#fd0223] mb-2 flex text-center gap-3 justify-center w-full rounded-lg text-lg font-bold shadow-md" style={{boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .5)'}}>
                Get Pre-Approved
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" className=" mt-1 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{maxHeight: '20px'}}><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2L80 448c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 8.9 0c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6l0-43.6-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z" /></svg>
              </Link>
              <Link to="/inventory" role="button" tabIndex={0} className="py-[0.85rem] hover:bg-gray-300 duration-300 bg-white text-[#fd0223] mb-2 flex text-center gap-3 justify-center w-full rounded-lg text-lg font-bold shadow-md" style={{boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .5)'}}>
                Shop Inventory
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car" className=" mt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{maxHeight: '20px'}}><path fill="currentColor" d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>
              </Link>
              <Link to="/clearance" role="button" tabIndex={0} className="py-[0.85rem] hover:bg-gray-300 duration-300 bg-white text-[#fd0223] mb-2 flex text-center gap-3 justify-center w-full rounded-lg text-lg font-bold shadow-md" style={{boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .5)'}}>
                Shop Clearance
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" className="mt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{maxHeight: '20px'}}><path fill="currentColor" d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg>
              </Link>
            </div>
            <div className="hidden overflow-hidden pb-5 pt-3 lg:col-span-2 lg:block xl:block">
              <div className="relative min-h-[200px]">
                <img src={fstImg2} alt="car" className="w-72 absolute right-[400px] top-[30px] hidden md:block lg:hidden xl:block " />
                <img src={fstImg} alt="truck" className="w-72 absolute right-[200px] top-[20px] hidden sm:block" />
                <img src={fstImg3} alt="suv" className="w-72 absolute right-[20px] top-[12px]" />
              </div>
            </div>
          </div>
          <div className="mx-5 mt-6 mb-5 rounded-lg lg:block  shadow-2xl shadow-neutral-600 hidden px-10 bg-gray-100 py-5 ">
            <section className="flex items-center mx-4 justify-between">
              <img src={caraLogo} alt="Carfax Canada Logo" className />
              <h2 className="text-xl font-bold">Find out what your trade-in is worth.</h2>
              <button className="bg-[#fd0223] rounded hover:bg-[#fd0223] duration-300 px-6 py-2 text-white">Get Started</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomeHero;
