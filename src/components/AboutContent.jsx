import React from 'react';

const AboutContent = () => {
  return (
    <div>
     <div>
       
        <div className="bg-[#fd0223] ">
          <div className="bg-[#007aff]" style={{background: 'url("https://vehicleapprovalcentre.com/_next/static/media/header-bg.e0fe274e.svg")'}}>
            <div className=" p-5 mx-auto flex items-start">
              <h1 className="py-10  sm:pl-20 leading-tight  font-extrabold text-white text-pretty text-2xl sm:text-5xl" style={{fontFamily: '"Gilroy", sans-serif'}}>
                About Us
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full relative min-h-[500px]  bg-top bg-contain py-20" style={{background: 'url("")'}}>
          <img src="https://vehicleapprovalcentre.com/_next/static/media/dealer-bg.9c52c541.jpg" className="absolute top-0 h-[500px] w-full object-cover" alt="" />
          <div className="bg-[#FFFFFF] z-[2] max-w-7xl mx-auto  border border-gray-300 shadow-sm">
            <div className="relative bg-gray-50  max-w-xl mt-9 mx-2 z-[4]">
              <div className=" py-7  relative z-[4] px-11">
                <h2 className="sm:text-4xl  text-2xl text-[#41456B] font-bold">Auto Mart</h2>
              </div>
              <hr className="w-full  bg-slate-400" />
              <div className="card-body flex flex-col relative z-[4] space-y-4 p-11">
                {/* Location Link */}
                <a href="https://maps.app.goo.gl/L1j7rVfENKkNKg1Q7" target="_blank" className="btn btn-link hover:text-primary flex items-center text-left text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="text-[#fd0223] mr-2 h-5 w-5">
                    <path fill="currentColor" d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3L576 152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6L416 503zM15.1 187.3C6 191 0 199.8 0 209.6L0 480.4c0 17 17.1 28.6 32.9 22.3L160 451.8l0-251.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77l0 194.4 192 54.9L384 255z" />
                  </svg>
                  <span>Unit 3B - 110 Chain Lake Drive, Halifax, NS B3S 1A9, Canada</span>
                </a>
                {/* Phone Link */}
                <a href="tel:19029012105" className="btn btn-link hover:text-primary flex items-center text-left text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-[#fd0223] mr-2 h-5 w-5">
                    <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <span>+1 (902) 901-2105</span>
                </a>
                {/* Social Media Icons */}
                <div className="flex space-x-3">
                  <a href="https://www.instagram.com/vehicleapprovalcentre/" target="_blank" className="  text-white flex h-10 w-10 items-center justify-center bg-[#fd0223] rounded-full border hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className=" h-6 w-6">
                      <path fill="currentColor" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.4-48.4-7.2-67-25.9s-24.6-41.4-25.9-67c-1.5-26.4-1.5-105.6 0-132c1.4-25.6 7.2-48.4 25.9-67s41.4-24.6 67-25.9c26.4-1.5 105.6-1.5 132 0c25.6 1.4 48.4 7.2 67 25.9s24.6 41.4 25.9 67c1.5 26.4 1.5 105.6 0 132c-1.4 25.6-7.2 48.4-25.9 67z" /></svg></a>
                  <a href="https://www.instagram.com/vehicleapprovalcentre/" target="_blank" className="  text-white flex h-10 w-10 items-center justify-center bg-[#fd0223] rounded-full border hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M11.36 5.83H7.87a.51.51 0 0 0-.51.52v1.41a.51.51 0 0 0 .51.51h2.29a2.75 2.75 0 0 1-3 2.79c-2.24 0-3.32-1.9-3.32-4.06S5 2.94 7.16 2.94a4.07 4.07 0 0 1 2.64.86a.49.49 0 0 0 .72-.22l.63-1.44a.51.51 0 0 0-.15-.63a7.07 7.07 0 0 0-3.8-1C3.56.5 1.08 3.33 1.08 7s2.49 6.5 6.08 6.5s5.76-2.56 5.76-6c0-1.1-.44-1.67-1.56-1.67" /></svg></a>
                  <a href="https://www.instagram.com/vehicleapprovalcentre/" target="_blank" className="  text-white flex h-10 w-10 items-center justify-center bg-[#fd0223] rounded-full border hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" /></svg></a>
                  <a href="https://www.instagram.com/vehicleapprovalcentre/" target="_blank" className="  text-white flex h-10 w-10 items-center justify-center bg-[#fd0223] rounded-full border hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M11 2v6.414a6.85 6.85 0 1 0 5.6 6.736v-3.736a8.6 8.6 0 0 0 3.4.686h1V6.5h-1c-1.903 0-3.4-1.537-3.4-3.5V2zm2 2h1.688c.394 2.22 2.08 3.996 4.312 4.41v1.618c-1.038-.152-1.975-.542-2.843-1.123L14.6 7.863v7.287a4.85 4.85 0 1 1-4.6-4.844v1.604a3.25 3.25 0 1 0 3 3.24zM8.5 15.15a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" /></svg></a>
                  <a href="https://www.instagram.com/vehicleapprovalcentre/" target="_blank" className="  text-white flex h-10 w-10 items-center justify-center bg-[#fd0223] rounded-full border hover:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.55"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15l5-3l-5-3z" /></g></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-20 mb-7 mx-auto py-4">
          <div className="flex gap-10 flex-wrap">
            {/* Left Column */}
            <div className="w-full px-4 md:w-8/12">
              <h3 className="text-3xl font-bold text-[#fd0223]">Our Journey</h3>
              <p className="mt-2 text-gray-700">Auto Mart's story began with a passion for cars and a drive to make a difference in the automotive industry. Founded by a team of dedicated individuals with deep roots in Atlantic Canada, our journey started with a simple yet powerful vision: to revolutionize the way people buy used cars.</p>
              <h3 className="mt-6 text-3xl  font-bold text-[#fd0223]">The Vision</h3>
              <p className="mt-2 text-gray-700">Frustrated by the lack of transparency and customer-centric approach in traditional car dealerships, we set out to create a different kind of car buying experience—one that prioritized honesty, integrity, and exceptional service. We envisioned a dealership where customers could browse a diverse selection of high-quality used vehicles online, with detailed information and transparent pricing, empowering them to make informed decisions from the comfort of their own homes.</p>
              <h3 className="mt-6 text-3xl  font-bold text-[#fd0223]">Turning Vision into Reality</h3>
              <p className="mt-2 text-gray-700">With this vision in mind, Auto Mart was born. We set ourselves apart by offering a 360-degree view of our inventory online, giving customers an immersive and transparent shopping experience like never before. Our commitment to transparency extended beyond our online platform; it became the cornerstone of everything we do, guiding our interactions with customers and shaping the way we conduct business.</p>
              <h3 className="mt-6 text-3xl  font-bold text-[#fd0223]">Building Trust, One Customer at a Time</h3>
              <p className="mt-2 text-gray-700">As word spread about our innovative approach and dedication to customer satisfaction, Auto Mart quickly became a trusted name in Atlantic Canada. Our customers appreciated our honesty, integrity, and personalized service, and our reputation for excellence continued to grow. From first-time buyers to seasoned car enthusiasts, people from all walks of life began turning to Auto Mart for their automotive needs.</p>
              <h3 className="mt-6 text-3xl  font-bold text-[#fd0223]">Continuing the Journey</h3>
              <p className="mt-2 text-gray-700">Today, Auto Mart stands as a testament to the power of passion, innovation, and dedication. We are proud to have helped thousands of customers find their perfect vehicle, and we remain committed to our founding principles of transparency, integrity, and exceptional service. As we continue on our journey, we look forward to serving the community of Atlantic Canada for many years to come, helping more people find the car of their dreams and making car buying a hassle-free and enjoyable experience for everyone.</p>
            </div>
            {/* Right Column */}
            <div className="flex w-[60%] mx-auto flex-col items-center  md:px-4 md:w-[27%]">
              <svg xmlns="http://www.w3.org/2000/svg" className="my-10 text-[#fd0223]" style={{fontSize: '250px'}} viewBox="0 0 576 512">
                <path fill="currentColor" d="M256 32l-74.8 0c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480L256 480l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64 201.4 0c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32L320 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm64 192l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="my-10 hidden text-[#fd0223] md:block" style={{fontSize: '250px'}} viewBox="0 0 576 512">
                <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l40 0 0 64L0 160 0 288c53 0 96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96s96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96l0-128-72 0 0-64 40 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM456 96l0 64-80 0 0-64 80 0zM328 96l0 64-80 0 0-64 80 0zM200 96l0 64-80 0 0-64 80 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full"><iframe title="Auto Mart" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.0409217657657!2d-63.667371223996845!3d44.63708058824433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a21d2ef335385%3A0x4ef2ce3c2fee78df!2s110%20Chain%20Lake%20Dr%20%233b%2C%20Halifax%2C%20NS%20B3S%201A9!5e0!3m2!1sen!2sca!4v1698681810329!5m2!1sen!2sca" width={1500} height={400} style={{border: '0px'}} loading="lazy" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
