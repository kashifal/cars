import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-400 py-6 pb-28 sm:px-16">
          <div className="container mx-auto text-white">
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex-col  items-center">
                <img src="	https://vehicleapprovalcentre.com/_next/static/media/logo-white.27f29529.svg" alt="VAC Logo" className=" mb-5 ml-3" />
                <p className="text-sm mt-2 ml-3 md:mt-0">© Copyright 2024 Vehicle Approval Centre.</p>
              </div>
              {/* Navigation Links */}
              <div className="flex-col">
                <div className="flex flex-col px-3 justify-between mt-6 gap-3">
                  {/* Social Media Icons */}
                  <div className="flex items-center justify-end gap-4">
                    <a href="#" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 56 56"><path fill="white" fillRule="evenodd" d="M39.006 3C46.735 3 53 9.27 53 16.994v22.012C53 46.735 46.73 53 39.006 53H16.994C9.265 53 3 46.73 3 39.006V16.994C3 9.265 9.27 3 16.994 3zM28 15c-7.18 0-13 5.82-13 13s5.82 13 13 13s13-5.82 13-13s-5.82-13-13-13m0 4a9 9 0 1 1 0 18a9 9 0 0 1 0-18m14.5-9a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7" /></svg>
                    </a>
                    <a href="#" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 20 20"><path fill="white" d="M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09c-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89a.89.89 0 0 1-.89-.88V2.88c0-.49.4-.88.89-.88" /></svg>
                    </a>
                    <a href="#" aria-label="YouTube">
                      <svg xmlns="http://www.w3.org/2000/svg" width="2.32em" height="2.5em" viewBox="0 0 448 512"><path fill="white" d="m186.8 202.1l95.2 54.1l-95.2 54.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48m-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4c-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9c7.6-28.5 7.6-88.1 7.6-88.1" /></svg>
                    </a>
                    <a href="#" aria-label="TikTok">
                      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="M18.857 3H5.143A2.145 2.145 0 0 0 3 5.143v13.714C3 20.04 3.961 21 5.143 21h13.714A2.145 2.145 0 0 0 21 18.857V5.143A2.145 2.145 0 0 0 18.857 3m-1.712 7.853a3.17 3.17 0 0 1-1.822-.371a3.2 3.2 0 0 1-1.16-1.066v4.944a3.654 3.654 0 1 1-3.654-3.654c.076 0 .15.007.225.011v1.801c-.075-.009-.148-.023-.225-.023a1.865 1.865 0 1 0 0 3.73c1.03 0 1.94-.811 1.94-1.841l.018-8.398h1.723a3.21 3.21 0 0 0 2.957 2.865v2.002" /></svg>
                    </a>
                  </div>
                  <ul className="flex flex-wrap items-center gap-5 text-sm">
                    <li><a href="#" className="hover:underline">Inventory</a></li>
                    <li><a href="#" className="hover:underline">Clearance</a></li>
                    <li><a href="#" className="hover:underline">Sell &amp; Trade</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Team</a></li>
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                    <li><a href="#" className="hover:underline">Terms</a></li>
                    <li><a href="#" className="hover:underline">Support</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 flex mr-2 sm:mr-7 justify-end">
              <a href="#" className="bg-white text-black sm:flex  items-center gap-3 px-6 py-5 rounded-lg shadow-lg hover:bg-gray-100">
                <img src="	https://cfctradein.azureedge.net/images/carfax-canada-logo-black.svg" alt="Carfax" className="h-7" />
                <span className="font-medium w-36">Find out what your trade-in is worth.</span>
                <span className="ml-2 font-bold"><svg xmlns="http://www.w3.org/2000/svg" width=".7em" height="1em" viewBox="0 0 1024 1024"><path fill="black" d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475s35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" /></svg></span>
              </a>
            </div>
          </div>
        </footer>
  );
};

export default Footer;
