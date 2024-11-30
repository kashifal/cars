import React from 'react';

const Inventory = () => {
  const carModels = [
    { model: "Toyota Camry", price: 25000 },
    { model: "Honda Civic", price: 23000 },
    { model: "Ford Mustang", price: 35000 },
    { model: "Tesla Model 3", price: 45000 },
    { model: "BMW 3 Series", price: 42000 },
    { model: "Hyundai Elantra", price: 22000 },
    { model: "Mazda 3", price: 24000 },
    { model: "Volkswagen Golf", price: 26000 },
    { model: "Audi A4", price: 40000 }
  ];

  const cars = carModels.map((car, index) => ({
    id: index + 1,
    model: car.model,
    price: car.price,
    year: 2023,
    mileage: 15000 + (index * 1000),
    transmission: "Automatic",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop"
  }));

  return (
    <div>
    <div>
      <div className="fixed z-[9999999999] bottom-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 cursor-pointer h-10 bg-[#fd0223] p-2 rounded-full text-white" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" /></svg>
      </div>
    </div>
    <div className="lg:px-28 fixed z-[9999999999] top-0 w-full bg-white">
      <div>
        <div className="mx-6 lg:mx-0 flex items-center justify-between py-3">
          <a href="/" className="py-3">
            <svg xmlns="http://www.w3.org/2000/svg" width={112} height={33} viewBox="0 0 112 33" fill="none"><path d="M61.664 28L55.084 8.4H59.284L64.072 23.464L68.832 8.4H73.06L66.452 28H61.664ZM86.9878 28L85.8118 24.472H77.9998L76.8238 28H72.6518L79.5118 8.4H84.2998L91.1878 28H86.9878ZM79.2318 20.86H84.6078L81.9198 12.852L79.2318 20.86ZM102.236 28.392C99.2867 28.392 96.8507 27.412 94.928 25.452C93.0053 23.492 92.044 21.0747 92.044 18.2C92.044 15.3067 93.0053 12.8893 94.928 10.948C96.8507 8.988 99.2867 8.008 102.236 8.008C104.009 8.008 105.643 8.428 107.136 9.268C108.648 10.0893 109.824 11.2093 110.664 12.628L107.332 14.56C106.847 13.6827 106.156 13.0013 105.26 12.516C104.364 12.012 103.356 11.76 102.236 11.76C100.332 11.76 98.792 12.3573 97.616 13.552C96.4587 14.7467 95.88 16.296 95.88 18.2C95.88 20.0853 96.4587 21.6253 97.616 22.82C98.792 24.0147 100.332 24.612 102.236 24.612C103.356 24.612 104.364 24.3693 105.26 23.884C106.175 23.38 106.865 22.6987 107.332 21.84L110.664 23.772C109.824 25.1907 108.657 26.32 107.164 27.16C105.671 27.9813 104.028 28.392 102.236 28.392Z" fill="#7380FF" /> <path fillRule="evenodd" clipRule="evenodd" d="M19.8913 12.5066H7.4589L0 4.99508e-09H8.89149C9.97098 -4.32261e-05 11.032 0.28053 11.9709 0.814305C12.9099 1.34808 13.6945 2.1168 14.2483 3.04536L19.8913 12.5066Z" fill="#D2D6FF" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.6723 2.99533L29.8778 12.5066H7.41016L16.9203 28.2515C17.4764 29.172 18.26 29.9331 19.1954 30.4612C20.1309 30.9894 21.1865 31.2668 22.2602 31.2665H27.6982C28.7796 31.2664 29.8424 30.9846 30.7824 30.4488C31.7225 29.9131 32.5074 29.1417 33.0603 28.2104L42.3815 12.5066L50.0009 6.80606e-10H40.9989C39.9293 -1.58107e-05 38.8776 0.275459 37.9449 0.799984C37.0121 1.32451 36.2296 2.08048 35.6723 2.99533Z" fill="#7380FF" /></svg>
          </a>
          <div className="flex gap-[100px] mr-11 px-9 items-center">
            <div className="flex gap-3">
              <a role="button" tabIndex={0} href="#" className="hidden border border-[#7481ff] px-4 py-2 text-[#fd0223] hover:bg-gray-200 duration-300 sm:block">INVENTORY</a>
              <a role="button" tabIndex={0} href="#" className="hidden bg-[#fd0223] px-5 py-2 text-white   duration-300 md:block">GET APPROVED NOW</a>
            </div>
            <div className="fixed right-7 h-6 w-8">
              <button type="button" className="absolute inset-0 hover:text-red-600 group m-0 h-full w-full cursor-pointer border-none bg-transparent p-0">
                <div>
                  <span className="absolute left-0 right-0 top-0 block h-[20%] group-hover:bg-red-600 bg-gray-500" />
                  <span className="absolute left-0 right-0 top-[40%] block h-[20%] group-hover:bg-red-600 bg-gray-500" />
                  <span className="absolute left-0 right-0 top-[80%] block h-[20%] group-hover:bg-red-600 bg-gray-500" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#fd0223] mt-20">
      <div className="bg-[#007aff]" style={{background: 'url("https://vehicleapprovalcentre.com/_next/static/media/header-bg.e0fe274e.svg")'}}>
        <div className="p-5 mx-auto flex items-start">
          <h1 className="py-10 sm:pl-20 font-extrabold text-white text-5xl" style={{fontFamily: '"Gilroy", sans-serif'}}>
            Inventory
          </h1>
        </div>
      </div>
    </div>
    <div className="flex flex-col mt-6 my-5 sm:mx-5 xl:mx-28 gap-4 lg:flex-row">
      <div className="lg:w-[33%]">
        <div className="mx-2">
          <h1 className="text-2xl font-medium text-[#e42d46]">Detailed Search</h1>
        </div>
        <div className="mx-1 mt-2">
          <a id="clearance" className="btn mb-2 mt-0 block flex w-full items-center justify-center rounded-md bg-[#fd0223] py-2 text-sm font-bold text-white transition duration-200 hover:bg-[#fd0223]" href="/clearance">
            View Clearance
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ml-2 h-5 w-5">
              <path fill="currentColor" d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-col">
          <h2 className="mx-1 my-1">
            <button type="button" className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700" aria-expanded="false">
              <h6 className="my-0 text-base font-light">Make, Model</h6>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <h2 className="mx-1 my-2">
            <button type="button" className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700" aria-expanded="false">
              <h6 className="my-0 text-base font-light">Body Types</h6>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <h2 className="mx-1 my-1">
            <button type="button" className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700" aria-expanded="false">
              <h6 className="my-0 text-base font-light">Transmission</h6>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <h2 className="mx-1 my-2">
            <button type="button" className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700" aria-expanded="false">
              <h6 className="my-0 text-base font-light">Price</h6>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <h2 className="mx-1 my-1">
            <button type="button" className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700" aria-expanded="false">
              <h6 className="my-0 text-base font-light">Year</h6>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
          <h2 className="mx-1 my-2">
            <button type="button" className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700" aria-expanded="false">
              <h6 className="my-0 text-base font-light">Kilometers</h6>
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </h2>
        </div>
        <div className="mx-1 sm:mt-4">
          <button type="button" className="flex w-full items-center justify-center rounded-md bg-red-500 px-2 py-2 text-sm font-bold text-white duration-200 hover:bg-red-600">
            Reset Filters
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ml-2 h-5 w-5">
              <path fill="currentColor" d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="lg:w-[67%] p-4">
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
        {cars.map(car => (
          <div key={car.id} className="border rounded-lg shadow-md p-4">
            <img 
              src={car.image} 
              alt={car.model} 
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{car.model}</h3>
              <p className="text-gray-600">${car.price.toLocaleString()}</p>
              <div className="mt-2 text-sm text-gray-500">
                <p>Year: {car.year}</p>
                <p>Mileage: {car.mileage} km</p>
                <p>Transmission: {car.transmission}</p>
              </div>
              <button className="mt-4 w-full bg-[#fd0223] text-white py-2 rounded-md hover:bg-[#fd0223]">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#fd0223] shadow-neutral-600 shadow-2xl bg-cover mt-5 mb-5 bg-top text-center" style={{backgroundImage: 'url("https://vehicleapprovalcentre.com/_next/static/media/front-lead-bg.2c0e8fe8.svg")', backgroundSize: '110%'}}>
        <div className="pt-3  w-full">
          <div className>
            <div className>
              <div className="mx-5 mt-6 mb-5 shadow-neutral-600 shadow-2xl rounded-lg  px-4 bg-gray-100 py-5 ">
                <section className="sm:flex-row  flex-col flex items-center mx-4 justify-between ">
                  <img src="https://cfctradein.azureedge.net/images/carfax-canada-logo-black.svg" alt="Carfax Canada Logo" className />
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {[...Array(50)].map((_, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4">
            <img 
              src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2936&auto=format&fit=crop"
              alt={`Car ${index + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Sample Car Model</h3>
              <p className="text-gray-600">$25,000</p>
              <div className="mt-2 text-sm text-gray-500">
                <p>Year: 2023</p>
                <p>Mileage: 15000 km</p>
                <p>Transmission: Automatic</p>
              </div>
              <button className="mt-4 w-full bg-[#fd0223] text-white py-2 rounded-md hover:bg-[#fd0223]">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
     
      
    
    </div>
   
  </div>
  );
};

export default Inventory;
