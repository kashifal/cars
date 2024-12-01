import React from 'react';
import { Link } from 'react-router-dom';
import CardImg from '../assets/forSocial.avif'
import bgImg from '../assets/bg.svg'
import caraLogo from '../assets/caraLogo.svg'
import bigBg from '../assets/bigBg.svg'

const ClearanceContent = () => {
  return (
    <div>
      <div>
        <div className="bg-[#fd0223] mt-20">
          <div className="bg-[#007aff]" style={{background: `url(${bgImg})`}}>
            <div className=" p-5 mx-auto flex items-start">
              <h1 className="py-10  sm:pl-20  font-extrabold text-white text-5xl" style={{fontFamily: '"Gilroy", sans-serif'}}>
                Clearance
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 my-5 sm:mx-5 xl:mx-28 gap-4 lg:flex-row">
           
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 xl:mx-28">
          {[...Array(4)].map((_, index) => ({
            img: CardImg,
            name: "Honda Odyssey 2022",
            model: "EX-L",
            price: "45,995.00", 
            km: "38,000",
            transmission: "Automatic"
          })).map((car, index) => (
            <Link to='/volkswagen' key={index} className="border cursor-pointer rounded-lg shadow-sm">
              <img src={car.img} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="mt-4 p-4">
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-gray-600">{car.model}</p>
                <p className="text-xl font-bold text-[#fd0223] mt-2">${car.price}</p>
                <div className="flex justify-between mt-4 text-sm text-gray-500">
                  <span>{car.km} km</span>
                  <span>{car.transmission}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="w-1/2 py-2 text-[#fd0223] border border-[#fd0223] rounded hover:bg-indigo-50">View Details</button>
                  <button className="w-1/2 py-2 text-white bg-[#fd0223] rounded  ">Apply Now</button>
                </div>
              </div>
            </Link>
          ))}
          
        </div>
        <div className="bg-[#fd0223] xl:mx-28 shadow-neutral-600 shadow-2xl bg-cover mt-5 mb-5 bg-top text-center" style={{backgroundImage: `url(${bigBg})`, backgroundSize: '110%'}}>
      <div className="pt-3  w-full">
        <div className>
          <div className>
            <div className="mx-5 mt-6 mb-5 shadow-neutral-600 shadow-2xl rounded-lg  px-4 bg-gray-100 py-5 ">
              <section className="sm:flex-row  flex-col flex items-center mx-4 justify-between ">
                <img src={caraLogo} alt="Carfax Canada Logo" className />
                <h2 className="text-xl mb-2 font-bold">Find out what your trade-in is worth.</h2>
                <button className="bg-[#fd0223] rounded hover:bg-[#fd0223] duration-300 px-6 py-2 text-white">Get Started</button>
              </section>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-white font-bold text-center pt-3 px-2">Don't see what you're looking for?</h3>
      <h5 className="text-white font-light px-2">We have access to thousands of vehicles. Just let us know what your dream car is!</h5>
      <a id="contact" className=" mt-2 mb-3 rounded font-bold text-lg  text-[#fd0223] bg-white hover:bg-gray-200 py-4 px-2 inline-flex items-center" href="/contact">
        Contact Us
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="w-5 mx-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      </a>
    </div>
      </div>
    </div>
  );
};

export default ClearanceContent;
