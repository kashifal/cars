import React from "react";
import { Link } from "react-router-dom";

const Inventory = () => {
  const carModels = [
    {
      model: "Toyota Camry",
      price: 25000,
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb",
    },
    {
      model: "Honda Civic",
      price: 23000,
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24",
    },
    {
      model: "Ford Mustang",
      price: 35000,
      image: "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f6",
    },
    {
      model: "Tesla Model 3",
      price: 45000,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    },
    {
      model: "BMW 3 Series",
      price: 42000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
    {
      model: "Hyundai Elantra",
      price: 22000,
      image: "https://images.unsplash.com/photo-1629897048514-3dd7414fe72a",
    },
    {
      model: "Mazda 3",
      price: 24000,
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99",
    },
    {
      model: "Volkswagen Golf",
      price: 26000,
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
    },
    {
      model: "Audi A4",
      price: 40000,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
    },
    {
      model: "Mercedes C-Class",
      price: 43000,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    },
    {
      model: "Lexus ES",
      price: 39000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    },
    {
      model: "Kia K5",
      price: 27000,
      image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5",
    },
    {
      model: "Chevrolet Malibu",
      price: 24500,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
    {
      model: "Nissan Altima",
      price: 26500,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
    },
    {
      model: "Subaru Legacy",
      price: 28000,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    },
    {
      model: "Volvo S60",
      price: 38000,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    },
    {
      model: "Genesis G70",
      price: 37000,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    },
    {
      model: "Infiniti Q50",
      price: 36000,
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753",
    },
    {
      model: "Acura TLX",
      price: 37500,
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341",
    },
    {
      model: "Chrysler 300",
      price: 33000,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
    // ... continuing with all 50 cars
  ];

  // Generate 50 cars by repeating and modifying the base models
  const extendedCarModels = [...Array(50)].map((_, index) => {
    const baseModel = carModels[index % carModels.length];
    const yearVariation = Math.floor(index / carModels.length);
    return {
      id: `car${index + 1}`,
      model: baseModel.model + (yearVariation > 0 ? ` ${yearVariation + 1}` : ''),
      price: baseModel.price + (yearVariation * 1000),
      year: 2023 - yearVariation,
      mileage: 15000 + index * 1000,
      transmission: index % 5 === 0 ? "Manual" : "Automatic",
      image: baseModel.image,
    };
  });

  return (
    <div>
      <div className="bg-[#fd0223] mt-20">
        <div
          className="bg-[#007aff]"
          style={{
            background:
              'url("https://vehicleapprovalcentre.com/_next/static/media/header-bg.e0fe274e.svg")',
          }}
        >
          <div className="p-5 mx-auto flex items-start">
            <h1
              className="py-10 sm:pl-20 font-extrabold text-white text-5xl"
              style={{ fontFamily: '"Gilroy", sans-serif' }}
            >
              Inventory
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 my-5 sm:mx-5 xl:mx-28 gap-4 lg:flex-row">
        <div className="lg:w-[33%]">
          <div className="mx-2">
            <h1 className="text-2xl font-medium text-[#e42d46]">
              Detailed Search
            </h1>
          </div>
          <div className="mx-1 mt-2">
            <a
              id="clearance"
              className="btn mb-2 mt-0 block flex w-full items-center justify-center rounded-md bg-[#fd0223] py-2 text-sm font-bold text-white transition duration-200 hover:bg-[#fd0223]"
              href="/clearance"
            >
              View Clearance
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="ml-2 h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
                />
              </svg>
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-col">
            <h2 className="mx-1 my-1">
              <button
                type="button"
                className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700"
                aria-expanded="false"
              >
                <h6 className="my-0 text-base font-light">Make, Model</h6>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <h2 className="mx-1 my-2">
              <button
                type="button"
                className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700"
                aria-expanded="false"
              >
                <h6 className="my-0 text-base font-light">Body Types</h6>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <h2 className="mx-1 my-1">
              <button
                type="button"
                className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700"
                aria-expanded="false"
              >
                <h6 className="my-0 text-base font-light">Transmission</h6>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <h2 className="mx-1 my-2">
              <button
                type="button"
                className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700"
                aria-expanded="false"
              >
                <h6 className="my-0 text-base font-light">Price</h6>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <h2 className="mx-1 my-1">
              <button
                type="button"
                className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700"
                aria-expanded="false"
              >
                <h6 className="my-0 text-base font-light">Year</h6>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
            <h2 className="mx-1 my-2">
              <button
                type="button"
                className="flex w-full items-center justify-between border border-gray-400 bg-gray-100 px-4 py-2 text-left text-sm font-light text-gray-700"
                aria-expanded="false"
              >
                <h6 className="my-0 text-base font-light">Kilometers</h6>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>
          </div>
          <div className="mx-1 sm:mt-4">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-md bg-red-500 px-2 py-2 text-sm font-bold text-white duration-200 hover:bg-red-600"
            >
              Reset Filters
              <svg
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="ml-2 h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:w-[67%] p-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {extendedCarModels.map((car) => (
              <Link to={`/volkswagen/${car.id}`} state={{ car: car }}>
              <div key={car.id} className="border rounded-lg shadow-md">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <div className="mt-4 p-4">
                  <h3 className="text-xl font-semibold">{car.model}</h3>
                  <p className="text-gray-600">${car.price.toLocaleString()}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Year: {car.year}</p>
                    <p>Mileage: {car.mileage} km</p>
                    <p>Transmission: {car.transmission}</p>
                  </div>
                  <Link 
                    to={`/volkswagen/${car.id}`}
                    state={{ car: car }}
                  >
                    <button className="mt-4 w-full bg-[#fd0223] text-white py-2 rounded-md hover:bg-[#fd0223]">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
              </Link>
            ))}
          </div>
          <div
            className="bg-[#fd0223] shadow-neutral-600 shadow-2xl bg-cover mt-5 mb-5 bg-top text-center"
            style={{
              backgroundImage:
                'url("https://vehicleapprovalcentre.com/_next/static/media/front-lead-bg.2c0e8fe8.svg")',
              backgroundSize: "110%",
            }}
          >
            <div className="pt-3  w-full">
              <div className>
                <div className>
                  <div className="mx-5 mt-6 mb-5 shadow-neutral-600 shadow-2xl rounded-lg  px-4 bg-gray-100 py-5 ">
                    <section className="sm:flex-row  flex-col flex items-center mx-4 justify-between ">
                      <img
                        src="https://cfctradein.azureedge.net/images/carfax-canada-logo-black.svg"
                        alt="Carfax Canada Logo"
                        className
                      />
                      <h2 className="text-xl mb-2 font-bold">
                        Find out what your trade-in is worth.
                      </h2>
                      <button className="bg-[#fd0223] rounded hover:bg-[#fd0223] duration-300 px-6 py-2 text-white">
                        Get Started
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-white font-bold text-center pt-3 px-2">
              Don't see what you're looking for?
            </h3>
            <h5 className="text-white font-light px-2">
              We have access to thousands of vehicles. Just let us know what
              your dream car is!
            </h5>
            <a
              id="contact"
              className=" mt-2 mb-3 rounded font-bold text-lg  text-[#fd0223] bg-white hover:bg-gray-200 py-4 px-2 inline-flex items-center"
              href="/contact"
            >
              Contact Us
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="w-5 mx-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </a>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Inventory;
