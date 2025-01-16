import { useEffect, useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";

export default function ManageColorsPage() {
  const [colors, setColors] = useState([]);

  // Sample color data (this would be loaded into localStorage initially)
  const sampleColors = [
    { id: 1, name: "Red", code: "#FF0000", status: "Active" },
    { id: 2, name: "Green", code: "#00FF00", status: "Active" },
    { id: 3, name: "Blue", code: "#0000FF", status: "Inactive" },
    { id: 4, name: "Yellow", code: "#FFFF00", status: "Active" },
    { id: 5, name: "Purple", code: "#800080", status: "Inactive" },
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
      <CustomBreadcrumb prevpage="Color" currenPage="Manage Colours"/>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Manage Colors</h1>
      </div>

      {/* Color List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Colors</h2>
        {sampleColors.length === 0 ? (
          <p className="text-gray-500">No colors available. Add some colors first.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Color Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Color Code</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleColors.map((color) => (
                <tr key={color.id}>
                  <td className="border border-gray-300 px-4 py-2">{color.name}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex items-center">
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color.code }}
                        title={color.name}></div>
                      <span className="ml-2">{color.code}</span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(color.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => toggleStatus(color.id)}
                      className={`px-2 py-1 rounded ${
                        color.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                      } text-white hover:opacity-80`}>
                      {color.status}
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
