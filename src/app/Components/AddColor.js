import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";

export default function AddColorPage() {
  const [colors, setColors] = useState([]);
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("#ffffff");

  const handleAddColor = (e) => {
    e.preventDefault();

    if (colorName.trim() === "") {
      alert("Please enter a color name.");
      return;
    }

    const newColor = { name: colorName, code: colorCode };
    setColors([...colors, newColor]);
    setColorName("");
    setColorCode("#ffffff");
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <CustomBreadcrumb prevpage="Color" currenPage="Add Colour"/>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Add Colors</h1>
      </div>

      {/* Add Color Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 py-6">Add New Color</h2>
        <form onSubmit={handleAddColor}>
          {/* Color Name */}
          <div className="mb-4 py-6">
            <label htmlFor="colorName" className="block text-sm font-medium text-gray-700 mb-1">
              Color Name
            </label>
            <input
              type="text"
              id="colorName"
              value={colorName}
              onChange={(e) => setColorName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter color name"
            />
          </div>

          {/* Color Picker */}
          <div className="mb-4 py-6">
            <label htmlFor="colorCode" className="block text-sm font-medium text-gray-700 mb-1">
              Color Code
            </label>
            <input
              type="color"
              id="colorCode"
              value={colorCode}
              onChange={(e) => setColorCode(e.target.value)}
              className="w-full h-10 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="status" className="px-4">Satus:</label>
            <label htmlFor="Active" className="px-1">Active</label>
            <input type="radio" name="status" id="Active"  className="me-6"></input>
            <label htmlFor="InActive" className="px-1">InActive</label>
            <input type="radio" name="status" id="InActive"></input>

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mt-10">
            Add Color
          </button>
        </form>
      </div>

  
    </main>
  );
}
