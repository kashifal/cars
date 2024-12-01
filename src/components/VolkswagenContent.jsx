import React from "react";
import { useLocation } from "react-router-dom";
import caraLogo from '../assets/caraLogo.svg'
import bgImg from '../assets/bg.svg'

const VolkswagenContent = () => {
  const location = useLocation();
  const car = location.state?.car;

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <div className="bg-[#fd0223] mt-20">
        <div
          className="bg-[#007aff]"
          style={{background: `url(${bgImg})`}}
        >
          <div className="p-5 mx-auto flex items-start">
            <h1
              className="py-10 sm:pl-20 font-extrabold text-white text-5xl"
              style={{ fontFamily: '"Gilroy", sans-serif' }}
            >
              {car.model}
            </h1>
          </div>
        </div>
      </div>

      <div className="lg:mx-20 mt-4 xl:mt-32 mb-7 md:mb-32 mx-2">
        <div className="grid lg:grid-cols-12 justify-center items-center gap-8">
          {/* Left Column - Image */}
          <div className="rounded-lg h-[500px] lg:col-span-8 w-full overflow-hidden shadow-lg">
            <img
              src={car.image}
              alt={car.model}
              className="w-full object-cover object-center relative"
            />
          </div>

          {/* Right Column - Car Details */}
          <div className="bg-white lg:col-span-4 h-full p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{car.model}</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4">
                <span className="text-2xl font-bold text-[#fd0223]">
                  ${car.price.toLocaleString()}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Year:</span>
                  <span className="font-semibold">{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mileage:</span>
                  <span className="font-semibold">{car.mileage} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transmission:</span>
                  <span className="font-semibold">{car.transmission}</span>
                </div>
              </div>


            </div>
            <div class="mt-28 mx-2 flex flex-col ">
              <img src={caraLogo} class="w-44 mb-5" />
              <button type="button" class="rounded bg-gray-100  text-base py-3 font-bold text-gray-800 w-56 shadow-2xl shadow-black border border-[#fd0223] hover:bg-gray-200">Request History Report</button>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="sm:mt-20 mb-14 mt-5 ">
          <div className="lg:flex-row flex flex-col-reverse gap-2 ">
            <div className="lg:w-1/2 w-full">
              <div className="mx-3 my-3">
                <div className="mb-5 px-0 lg:px-6 xl:px-4  py-[1.5rem] bg-[#F8F9FA] border shadow-2xl shadow-neutral-40 rounded-lg ">
                  <h4 className="text-[#7481FF] text-2xl mx-4 p-0 font-semibold">Description</h4>
                  <div className="px-4 ">
                    <div className="-mt-6 ">
                      <p className="text-gray-800  whitespace-pre-line">
                        <br />
                        <b className="text-[1.25rem] inline-block mb-2">Features &amp; Highlights</b><br />
                        Engine: 3.6L V6
                        Transmission: 8-Speed Automatic
                        Drivetrain: 4MOTION® All-Wheel Drive
                        Sound System: 8-inch Touchscreen Display with Apple CarPlay &amp; Android Auto
                        Safety: Blind Spot Monitor, Rear Cross-Traffic Alert, Adaptive Cruise Control
                        Additional: Heated Front Seats, Power Liftgate, Tri-Zone Automatic Climate Control, Keyless Entry with Push Button Start, 20-inch Alloy Wheels
                        <br />
                        <b className="text-lg inline-block mb-2">Vehicle Overview</b><br />
                        The 2022 Volkswagen Atlas V6 4MOTION® is a spacious and versatile midsize SUV designed to accommodate families and adventurers alike. Powered by a 3.6L V6 engine producing 276 horsepower, paired with an 8-speed automatic transmission, the Atlas delivers smooth and responsive performance. The 4MOTION® All-Wheel Drive system enhances traction and stability across various road conditions, ensuring confidence in every drive.
                        Inside, the Atlas features an 8-inch touchscreen infotainment system compatible with Apple CarPlay and Android Auto, providing seamless connectivity for navigation, music, and communication. Heated front seats and tri-zone automatic climate control ensure comfort for all occupants, while the power liftgate adds convenience for loading and unloading cargo.
                        Safety is a priority, with features such as Blind Spot Monitor, Rear Cross-Traffic Alert, and Adaptive Cruise Control, offering peace of mind on every journey. The exterior is complemented by 20-inch alloy wheels, enhancing the vehicle's bold and sophisticated appearance.
                        <br />
                        <b className="text-base inline-block mb-2">Why Buy From Vehicle Approval Centre?</b><br />
                        Tailored Financing Options: We offer flexible financing solutions tailored to your needs and budget, ensuring you can drive home in your Atlas V6 4MOTION® with confidence.
                        360-Degree Online Viewing: Explore the Volkswagen Atlas V6 4MOTION® in detail with our online viewing tool, allowing you to inspect every aspect of the vehicle from the comfort of your home.
                        <br />
                        <b className="text-base inline-block mb-2">Delivery Across Atlantic Canada:</b><br />
                        No matter where you are in Atlantic Canada, we’ll deliver your vehicle directly to you, ensuring a convenient and hassle-free buying experience.
                        Experience the perfect blend of performance, technology, and comfort with the 2022 Volkswagen Atlas V6 4MOTION®.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 px-2 inline-grid w-full overflow-x-auto sm:overflow-x-hidden  ">
              <div className="  w-full sm:inline inline-block my-2">
                {/* Container */}
                <div className="px-0 lg:px-6 xl:px-4  py-[1.5rem] bg-[#F8F9FA] rounded-lg border shadow-2xl shadow-neutral-300 mb-4">
                  {/* Title */}
                  <h4 className="text-[#7481FF] text-2xl mx-4 p-0 font-semibold">More Details</h4>
                  {/* Table Wrapper */}
                  <div className="m-4">
                    {/* Table */}
                    <table className="w-full text-sm border border-gray-300 rounded-md bg-white">
                      <tbody>
                        <tr className=" even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 hover:bg-gray-100 text-base text-black border">Trim</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">V6 SEL 4MOTION</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Color</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">WHITE</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Doors</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">4 Door</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Engine</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">3.6L V6 DOHC 24V</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Cylinder</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">6</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Drive Train</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">AWD</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Fuel Type</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Gas</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Transmission</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">8-Speed Automatic</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">VIN</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">1V2BR2CA6NC562889</td>
                        </tr>
                        <tr className="even:bg-white odd:bg-gray-100">
                          <td className="px-4 py-2 text-base hover:bg-gray-100 text-black border">Stock #</td>
                          <td colSpan={2} className="px-4 py-2 text-base hover:bg-gray-100 text-black border">V1006</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolkswagenContent;
