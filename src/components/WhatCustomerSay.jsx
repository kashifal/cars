import React from 'react';

const WhatCustomerSay = () => {
  return (
    <div className="bg-gray-100 text-gray-800 lg:mx-20 mt-3 md:mx-10 font-sans">
    <section className=" py-12 px-5 bg-white">
      <h1 className="text-4xl font-bold text-[#e42d46] mb-8 ">What our customers say</h1>
      <div className="  flex flex-wrap items-center justify-between  pb-6 mb-8">
        <div className="bg-gray-200 rounded-xl bg-opacity-30 w-full p-5">
          <ul className="flex gap-5 flex-wrap border-b pb-3  text-sm text-gray-600">
            <li className="underline underline-offset-[16px]  ">All Reviews <span className="font-bold  text-gray-800">4.4</span></li>
            <li className="hover:underline underline-offset-[16px] flex gap-2"><span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z" /></svg></span> Facebook <span className="font-bold text-gray-800">4.4</span></li>
            <li className="hover:underline underline-offset-[16px] flex gap-2"><span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" /><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" /><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" /><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" /><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" /></svg></span> Google <span className="font-bold text-gray-800">4.4</span></li>
          </ul>
          <div className=" mt-4 flex-col w-full mx-auto sm:items-start justify-center items-center sm:flex sm:justify-between ">
            <div className="flex flex-col justify-center items-center mb-2">
              <h3 className="text-lg font-bold mb-2">Overall Rating</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold sm:ml-9 text-gray-800">4.4</span>
                <div className="text-yellow-400 text-2xl">★★★★★</div>
                <small className="text-gray-500">(325)</small>
              </div>
            </div>
            <div className="flex sm:items-end w-full sm:-mt-12 justify-center sm:justify-end">
              <button className="bg-[#fd0223] text-white px-7 py-3 rounded-full text-sm hover:bg-[#fd0223]">Write a review</button>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className=" bg-gray-200 bg-opacity-30   rounded-xl p-6 shadow-sm text-left">
          <div className="flex gap-2">
            <div className=" bg-[#fd0223] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg mb-4">D</div>
            <div>
              <h4 className="text-base font-semibold ">Donovan Rose</h4>
              <p className="text-sm text-gray-500 ">2 days ago</p>
            </div>
          </div>
          <div className="stars text-yellow-400 text-3xl mb-4">★★★★★</div>
          <p className="text-xl text-gray-600 mb-4">Quick, fast, awesome service delivered right to my door. Got me in the...</p>
          <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2.5em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>
            <div className>
              <h1 className="text-sm -mb-1 text-gray-600">Posted on </h1>
              <a href="#"><span className="text-[#fd0223] text-sm hover:text-blue-700 hover:underline underline-offset-2 ">Google</span></a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 bg-opacity-30   rounded-xl p-6 shadow-sm text-left">
          <div className="flex gap-2">
            <div className=" bg-[#fd0223] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg mb-4">L</div>
            <div>
              <h4 className="text-base font-semibold ">Linda Steever</h4>
              <p className="text-sm text-gray-500 ">2 days ago</p>
            </div>
          </div>
          <div className="stars text-yellow-400 text-3xl mb-4">★★★★★</div>
          <p className="text-xl text-gray-600 mb-4">Thank you for going above and beyond for providing me with the...</p>
          <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2.5em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>
            <div className>
              <h1 className="text-sm -mb-1 text-gray-600">Posted on </h1>
              <a href="#"><span className="text-[#fd0223] text-sm hover:text-blue-700 hover:underline underline-offset-2 ">Google</span></a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 bg-opacity-30   rounded-xl p-6 shadow-sm text-left">
          <div className="flex gap-2">
            <div className=" bg-[#fd0223] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg mb-4">R</div>
            <div>
              <h4 className="text-base font-semibold ">Raymond Jenkin</h4>
              <p className="text-sm text-gray-500 ">3 days ago</p>
            </div>
          </div>
          <div className="stars text-yellow-400 text-3xl mb-4">★★★★★</div>
          <p className="text-xl text-gray-600 mb-4">Words can't describe Deven's work he went above and beyond. He...</p>
          <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2.5em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>
            <div className>
              <h1 className="text-sm -mb-1 text-gray-600">Posted on </h1>
              <a href="#"><span className="text-[#fd0223] text-sm hover:text-blue-700 hover:underline underline-offset-2 ">Google</span></a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 bg-opacity-30   rounded-xl p-6 shadow-sm text-left">
          <div className="flex gap-2">
            <div className=" bg-[#fd0223] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg mb-4">R</div>
            <div>
              <h4 className="text-base font-semibold ">Barry Rose</h4>
              <p className="text-sm text-gray-500 ">4 days ago</p>
            </div>
          </div>
          <div className="stars text-yellow-400 text-3xl mb-4">★★★★★</div>
          <p className="text-xl text-gray-600 mb-4">All I can say is awesome. Great service all around. From start...</p>
          <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2.5em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>
            <div className>
              <h1 className="text-sm -mb-1 text-gray-600">Posted on </h1>
              <a href="#"><span className="text-[#fd0223] text-sm hover:text-blue-700 hover:underline underline-offset-2 ">Google</span></a>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 bg-opacity-30   rounded-xl p-6 shadow-sm text-left">
          <div className="flex gap-2">
            <div className=" bg-[#fd0223] text-white w-10 h-10 flex items-center justify-center rounded-full text-lg mb-4">R</div>
            <div>
              <h4 className="text-base font-semibold ">Lori M</h4>
              <p className="text-sm text-gray-500 ">8 days ago</p>
            </div>
          </div>
          <div className="stars text-yellow-400 text-3xl mb-4">★★★★★</div>
          <p className="text-xl text-gray-600 mb-4">Deven was very professional, knowledgeable, and...</p>
          <div className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2.5em" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" /><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" /><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" /><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" /></svg>
            <div className>
              <h1 className="text-sm -mb-1 text-gray-600">Posted on </h1>
              <a href="#"><span className="text-[#fd0223] text-sm hover:text-blue-700 hover:underline underline-offset-2 ">Google</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default WhatCustomerSay;

