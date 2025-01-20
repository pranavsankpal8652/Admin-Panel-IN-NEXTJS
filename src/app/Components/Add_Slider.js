import React, { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import Image_preview from "./Image_preview";

const AddSlider = () => {
  const [formData, setFormData] = useState({
    sliderName: "",
    heading: "",
    subHeading: "",
    sliderImages: [],
    status: "Active",
  });
 
  const [preview,setPreview]=useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, sliderImages:[...e.target.files] });
    setPreview([...e.target.files])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here (e.g., API call)
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <CustomBreadcrumb prevpage="Sliders" currenPage="Add Slider" />
      <h1 className="text-2xl font-bold mb-4">Add Slider</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-md space-y-9"
      >
        {/* Slider Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Slider Name</label>
          <input
            type="text"
            name="sliderName"
            value={formData.sliderName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Slider Name"
            required
          />
        </div>

        {/* Heading */}
        <div>
          <label className="block text-sm font-medium mb-1">Heading</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Heading"
            required
          />
        </div>

        {/* Sub Heading */}
        <div>
          <label className="block text-sm font-medium mb-1">Sub Heading</label>
          <input
            type="text"
            name="subHeading"
            value={formData.subHeading}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter Sub Heading"
            required
          />
        </div>

        {/* Slider Images */}
        <div>
          <label className="block text-sm font-medium mb-1">Slider Images</label>
          <div className="flex gap-[50px] items-center">
          <input
            type="file"
            name="sliderImage"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-[60%]"
          />
          <Image_preview preview={preview}/>
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={formData.status === "Active"}
                onChange={handleInputChange}
                className="w-4 h-4"
              />
              <span>Active</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="Deactive"
                checked={formData.status === "Deactive"}
                onChange={handleInputChange}
                className="w-4 h-4"
              />
              <span>Deactive</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Slider
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSlider;
