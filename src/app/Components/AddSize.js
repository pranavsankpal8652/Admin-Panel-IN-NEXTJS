import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import StatusComp from "./StatusComp";

export default function AddSize() {
  const [formData, setFormData] = useState({
    sizeName: "",
    status: "Active",
  });

  const handleAddSize = (e) => {
    e.preventDefault();

   
  };
  const handleInputChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <CustomBreadcrumb prevpage="Size" currenPage="Add Size"/>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Add Sizes</h1>
      </div>

      {/* Add Color Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 py-6">Add New Size</h2>
        <form onSubmit={handleAddSize}>
          {/* Color Name */}
          <div className="mb-4 py-6">
            <label htmlFor="colorName" className="block text-sm font-medium text-gray-700 mb-1">
              Size Name
            </label>
            <input
              type="text"
              id="sizeName"
              name="sizeName"
              value={formData.sizeName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter Size name"
            />
          </div>

       

         <StatusComp handleInputChange={handleInputChange}/>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition my-10">
            Add Size
          </button>
        </form>
      </div>

  
    </main>
  );
}
