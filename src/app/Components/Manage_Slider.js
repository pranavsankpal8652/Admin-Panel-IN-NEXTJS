import React from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";

const ManageSlider = () => {
  // Sample slider data
  const sliders = [
    {
      id: 1,
      name: "Homepage Slider",
      heading: "Welcome to Our Store",
      subHeading: "Shop the best deals",
      image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      status: "Active",
    },
    {
      id: 2,
      name: "Seasonal Sale Slider",
      heading: "Winter Collection",
      subHeading: "Up to 50% Off",
      image: "https://cdn.dribbble.com/users/9358822/screenshots/17654770/media/55b47027c4011bc8cef2cc1657dcc3ab.jpg?resize=400x0",
      status: "Active",
    },
    {
      id: 3,
      name: "New Arrivals",
      heading: "Exclusive Items",
      subHeading: "Trending Now",
      image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      status: "Deactive",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <CustomBreadcrumb prevpage="Sliders" currenPage="Manage Slider" />
      <h1 className="text-2xl font-bold mb-4">Manage Slider</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border border-gray-300">S. No.</th>
              <th className="p-3 border border-gray-300">Slider Name</th>
              <th className="p-3 border border-gray-300">Heading</th>
              <th className="p-3 border border-gray-300">Sub Heading</th>
              <th className="p-3 border border-gray-300">Slider Image</th>
              <th className="p-3 border border-gray-300">Action</th>
              <th className="p-3 border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {sliders.map((slider, index) => (
              <tr
                key={slider.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="p-3 border border-gray-300">{index + 1}</td>
                <td className="p-3 border border-gray-300">{slider.name}</td>
                <td className="p-3 border border-gray-300">{slider.heading}</td>
                <td className="p-3 border border-gray-300">{slider.subHeading}</td>
                <td className="p-3 border border-gray-300">
                  <img
                    src={slider.image}
                    alt={slider.name}
                    className="h-16 w-24 object-cover rounded-md"
                  />
                </td>
                <td className="p-3 border border-gray-300">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <span className="mx-2">|</span>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
                <td className="p-3 border border-gray-300">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      slider.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {slider.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSlider;
