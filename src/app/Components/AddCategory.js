import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb"; 
import Image_preview from "./Image_preview";
import ImageSelector from "./ImageSelector";

export default function AddCategory({pageFor}) {
  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");
   const [preview,setPreview]=useState(null)

  const handleAddColor = (e) => {
    e.preventDefault();

    // if (colorName.trim() === "") {
    //   alert("Please enter a color name.");
    //   return;
    // }

    // const newColor = { name: colorName, code: colorCode };
    // setColors([...colors, newColor]);
    // setColorName("");
    // setColorCode("#ffffff");
  };
  const handleImageChange=(e)=>{
    const imgFile=e.target.files[0]
    if(imgFile){
      setPreview(URL.createObjectURL(imgFile))
    }
    else{
      setPreview(null)
    }
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      {
        pageFor
        ?
        <CustomBreadcrumb prevpage="SubCategory" currenPage="Add Category"/>
        :
        <CustomBreadcrumb prevpage="Parent Category" currenPage="Add Category"/>

      }
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-700">Add Category</h1>
      </div>

      {/* Add Color Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 py-6">Add New Category</h2>
        <form onSubmit={handleAddColor}>
          {/* Color Name */}
          <div className="mb-4 py-6">
            <label htmlFor="CatName" className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              id="CatName"
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter Size name"
            />
          </div>
          <div className="mb-4 py-6">
            <label htmlFor="CatDesc" className="block text-sm font-medium text-gray-700 mb-1">
              Category Description
            </label>
            <input
              type="text"
              id="colorDesc"
              value={catDesc}
              onChange={(e) => setCatDesc(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter Size Description"
            />
          </div>

          <ImageSelector label="Category Image" id="catImg" handleFunction={handleImageChange} preview={preview}/>
       

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
