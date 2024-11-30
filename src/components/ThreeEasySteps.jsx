import React from 'react';

const ThreeEasySteps = () => {
  return (
    <div className="mt-10 sm:px-10">
          <div className="container mx-auto">
            <h2 className="font-bold text-[2.5rem] ml-10 text-black mb-20">Your perfect car in 3 easy steps</h2>
            <div className="flex flex-wrap">
              <div className="lg:w-1/2 md:w-full sm:w-full w-full">
                <div className="flex mb-6">
                  <div className="w-1/4 p-4 text-center">
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="relative  top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2" width={75} height={67} fill="none"><path d="M29.224 5.233c3.677-6.31 12.875-6.31 16.552 0l27.43 47.074C76.878 58.61 72.293 66.5 64.93 66.5H10.07c-7.363 0-11.948-7.89-8.276-14.193l27.43-47.074z" fill="#fff" stroke="#41456B" /></svg>
                      <h2 className="absolute top-6 left-1/2 font-semibold transform -translate-x-1/2 -translate-y-1/2 text-4xl">1</h2>
                    </div>
                  </div>
                  <div className="w-3/4 p-0">
                    <div className="px-4">
                      <h4 className="text-xl text-gray-600 font-semibold">1. Submit Your Information</h4>
                      <h6 className="font-light mt-3 leading-relaxed">Complete our online application form, providing essential details about yourself and your preferred vehicle. This step allows us to pre-approve your application and tailor the best possible terms for you.</h6>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6">
                  <div className="w-1/4 p-0 text-center">
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="relative  top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2" width={75} height={67} fill="none"><path d="M29.224 5.233c3.677-6.31 12.875-6.31 16.552 0l27.43 47.074C76.878 58.61 72.293 66.5 64.93 66.5H10.07c-7.363 0-11.948-7.89-8.276-14.193l27.43-47.074z" fill="#fff" stroke="#41456B" /></svg>
                      <h2 className="absolute top-10 left-1/2 font-semibold transform -translate-x-1/2 -translate-y-1/2 text-4xl">2</h2>
                    </div>
                  </div>
                  <div className="w-3/4 p-0">
                    <div className="px-4">
                      <h4 className="text-xl text-gray-600 font-semibold">2. Application Review</h4>
                      <h6 className="font-light mt-3 leading-relaxed">After receiving your application, one of our qualified agents will promptly get in touch with you to verify your information, secure the car loan with the lowest possible interest rate, and guide you through the vehicle selection process.</h6>
                    </div>
                  </div>
                </div>
                <div className="flex mb-6">
                  <div className="w-1/4 p-0 text-center">
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="relative  top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2" width={75} height={67} fill="none"><path d="M29.224 5.233c3.677-6.31 12.875-6.31 16.552 0l27.43 47.074C76.878 58.61 72.293 66.5 64.93 66.5H10.07c-7.363 0-11.948-7.89-8.276-14.193l27.43-47.074z" fill="#fff" stroke="#41456B" /></svg>
                      <h2 className="absolute top-10 left-1/2 font-semibold transform -translate-x-1/2 -translate-y-1/2 text-4xl">3</h2>
                    </div>
                  </div>
                  <div className="w-3/4 p-0">
                    <div className="px-4">
                      <h4 className="text-xl text-gray-600 font-semibold">3. Choose Your Vehicle</h4>
                      <h6 className="font-light mt-3 leading-relaxed">Explore a wide range of vehicles that align with your pre-approved qualifications. Simply select the one that suits your preferences, and we'll deliver it directly to your doorstep. Say goodbye to wasted time and the fear of rejection!</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden justify-center items-center mx-auto ">
                <a id="apply-mobile" className="w-full  mx-3 mb-2 mt-3 duration-300 rounded px-10 py-5 text-center bg-[#7481ff] text-white hover:bg-indigo-600" style={{boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .5)'}} href="/apply-now">GET APPROVED NOW!</a>
              </div>
              <div className="lg:w-1/2 md:w-full sm:w-full w-full pb-4">
                <img src="https://vehicleapprovalcentre.com/_next/static/media/front-steps-bg.ef23beec.png" alt="Steps on your phone" className=" mx-auto lg:-mt-24" />
              </div>
              <div className="hidden lg:flex  justify-center items-center mx-auto ">
                <a id="apply-desktop" style={{boxShadow: '0 .3rem 1rem rgba(0, 0, 0, .5)'}} className=" rounded-xl px-24 text-xl   py-6 bg-[#7481ff] text-white hover:bg-indigo-600 duration-300" href="/#">GET APPROVED NOW!</a>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ThreeEasySteps;
