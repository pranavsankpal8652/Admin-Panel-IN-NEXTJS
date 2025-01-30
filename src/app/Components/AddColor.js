import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import StatusComp from "./StatusComp";

export default function AddColorPage() {
  const [formData, setFormData] = useState({
    colorName: '',
    colorCode: '',
    status: "Active",
  });


  const handleAddColor = (e) => {
    e.preventDefault();

    if (colorName.trim() === "") {
      alert("Please enter a color name.");
      return;
    }


  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <CustomBreadcrumb prevpage="Color" currenPage="Add Colour" />
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
              name='colorName'
              value={formData.colorName}
              onChange={handleInputChange}
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
              name='colorCode'
              value={formData.colorCode}
              onChange={handleInputChange}
              className="w-full h-10 border border-gray-300 rounded-lg"
            />
          </div>

          <StatusComp handleInputChange={handleInputChange} />

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
