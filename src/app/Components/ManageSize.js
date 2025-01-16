import { useEffect, useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";

export default function ManageSizes() {
  const [colors, setColors] = useState([]);

  // Sample color data (this would be loaded into localStorage initially)
  const sampleSizes = [
    { id: 1, name: "S",  status: "Active" },
    { id: 2, name: "M",  status: "Active" },
    { id: 3, name: "L",  status: "Inactive" },
 
  ];

  // Initialize colors with sample data if localStorage is empty
  // useEffect(() => {
  //   const storedColors = JSON.parse(localStorage.getItem("colors"));
  //   if (!storedColors || storedColors.length === 0) {
  //     localStorage.setItem("colors", JSON.stringify(sampleColors));
  //     setColors(sampleColors);
  //   } else {
  //     setColors(storedColors);
  //   }
  // }, []);

  // Handle delete
  // const handleDelete = (id) => {
  //   const updatedColors = colors.filter((color) => color.id !== id);
  //   setColors(updatedColors);
  //   localStorage.setItem("colors", JSON.stringify(updatedColors));
  //   alert("Color deleted successfully!");
  // };

  // Toggle status
  // const toggleStatus = (id) => {
  //   const updatedColors = colors.map((color) =>
  //     color.id === id ? { ...color, status: color.status === "Active" ? "Inactive" : "Active" } : color
  //   );
  //   setColors(updatedColors);
  //   localStorage.setItem("colors", JSON.stringify(updatedColors));
  // };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <CustomBreadcrumb prevpage="Size" currenPage="Manage Sizes"/>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Manage Sizes</h1>
      </div>

      {/* Color List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Sizes</h2>
        {sampleSizes.length === 0 ? (
          <p className="text-gray-500">No Sizes available. Add some Size first.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Size Name</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleSizes.map((size) => (
                <tr key={size.id}>
                  <td className="border border-gray-300 px-4 py-2">{size.name}</td>
                 
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(size.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => toggleStatus(size.id)}
                      className={`px-2 py-1 rounded ${
                        size.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                      } text-white hover:opacity-80`}>
                      {size.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
