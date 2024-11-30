import React from 'react';

const NavBar = () => {
  return (
   <>
     <div className=" lg:px-28 fixed z-[9999999999] top-0 w-full bg-white">
          <div className>
            <div className="mx-6 lg:mx-0 flex items-center   justify-between py-3">
              <a href="/" className="py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={112} height={33} viewBox="0 0 112 33" fill="none"><path d="M61.664 28L55.084 8.4H59.284L64.072 23.464L68.832 8.4H73.06L66.452 28H61.664ZM86.9878 28L85.8118 24.472H77.9998L76.8238 28H72.6518L79.5118 8.4H84.2998L91.1878 28H86.9878ZM79.2318 20.86H84.6078L81.9198 12.852L79.2318 20.86ZM102.236 28.392C99.2867 28.392 96.8507 27.412 94.928 25.452C93.0053 23.492 92.044 21.0747 92.044 18.2C92.044 15.3067 93.0053 12.8893 94.928 10.948C96.8507 8.988 99.2867 8.008 102.236 8.008C104.009 8.008 105.643 8.428 107.136 9.268C108.648 10.0893 109.824 11.2093 110.664 12.628L107.332 14.56C106.847 13.6827 106.156 13.0013 105.26 12.516C104.364 12.012 103.356 11.76 102.236 11.76C100.332 11.76 98.792 12.3573 97.616 13.552C96.4587 14.7467 95.88 16.296 95.88 18.2C95.88 20.0853 96.4587 21.6253 97.616 22.82C98.792 24.0147 100.332 24.612 102.236 24.612C103.356 24.612 104.364 24.3693 105.26 23.884C106.175 23.38 106.865 22.6987 107.332 21.84L110.664 23.772C109.824 25.1907 108.657 26.32 107.164 27.16C105.671 27.9813 104.028 28.392 102.236 28.392Z" fill="#7380FF" /> <path fillRule="evenodd" clipRule="evenodd" d="M19.8913 12.5066H7.4589L0 4.99508e-09H8.89149C9.97098 -4.32261e-05 11.032 0.28053 11.9709 0.814305C12.9099 1.34808 13.6945 2.1168 14.2483 3.04536L19.8913 12.5066Z" fill="#D2D6FF" /> <path fillRule="evenodd" clipRule="evenodd" d="M35.6723 2.99533L29.8778 12.5066H7.41016L16.9203 28.2515C17.4764 29.172 18.26 29.9331 19.1954 30.4612C20.1309 30.9894 21.1865 31.2668 22.2602 31.2665H27.6982C28.7796 31.2664 29.8424 30.9846 30.7824 30.4488C31.7225 29.9131 32.5074 29.1417 33.0603 28.2104L42.3815 12.5066L50.0009 6.80606e-10H40.9989C39.9293 -1.58107e-05 38.8776 0.275459 37.9449 0.799984C37.0121 1.32451 36.2296 2.08048 35.6723 2.99533Z" fill="#7380FF" /></svg>
              </a>
              <div className="flex gap-[100px] mr-11 px-9 items-center">
                <div className="flex gap-3">
                  <a role="button" tabIndex={0} href="#" className=" hidden  border border-[#7481ff] px-4 py-2 text-[#7481ff] hover:bg-gray-200 duration-300 sm:block"> INVENTORY </a>
                  <a role="button" tabIndex={0} href="#" className="hidden  bg-indigo-500 px-5 py-2 text-white hover:bg-indigo-700 duration-300 md:block"> GET APPROVED NOW </a>
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
        <div className=" mx-auto p-3 pt-24 lg:px-28 ">
          <div className="relative">
            <div className="relative">
              <input type="search" inputMode="search" placeholder="Search by make, model, or keyword" className=" w-full rounded-lg border-2 placeholder:text-gray-500 border-indigo-400 py-2 pl-12 :outline-none focus:ring-1 focus:ring-blue-500" style={{paddingLeft: '50px'}} />
              <svg aria-hidden="true" focusable="false" className="text-indigo-400 absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </div>
        </div>
        <div className>
          <ul className="sm:hidden sm:grid flex justify-between flex-wrap items-center  sm:grid-cols-3    w-full  ">
            <li className="flex items-center justify-center w-fit mx-auto ">
              <button type="button" className="flex items-center  bg-[#7481ff]  border-t rounded-t-xl w-[200px] justify-center py-2 text-white hover:bg-indigo-500 duration-300 focus:outline-none focus:ring focus:ring-blue-300">
                <svg aria-hidden="true" className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                Home
              </button>
            </li>
            <li className="flex items-center justify-center w-fit mx-auto">
              <button type="button" className="flex items-center   border-gray-300 bg-white w-[200px] justify-center py-2 text-[#7481ff] ">
                <svg aria-hidden="true" className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                  <path d="M171.3 96L224 96l0 96-112.7 0 30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192l0-96 81.2 0c9.7 0 18.9 4.4 25 12l67.2 84L272 192zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36L171.3 32c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256L0 368c0 17.7 14.3 32 32 32l33.3 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l130.7 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l33.3 0c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                Sell &amp; Trade
              </button>
            </li>
            <li className="flex items-center justify-center w-fit mx-auto pr-6">
              <button type="button" className="flex items-center   border-gray-300 bg-white m-auto w-full justify-center py-2 text-[#7481ff]">
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
