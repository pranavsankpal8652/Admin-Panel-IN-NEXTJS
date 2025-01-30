import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb"; 
import Image_preview from "./Image_preview";
import ImageSelector from "./ImageSelector";
import StatusComp from "./StatusComp";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddCategory({pageFor}) {

  const [formData, setFormData] = useState({
    catName: "",
    catDesc: "",
    status: "Active",
  });
   const [preview,setPreview]=useState(null)

  const handleAddCategory = (e) => {
    e.preventDefault();
    const formData=new FormData(e.target)
    axios.post('http://localhost:8000/admin/category/add',formData)
    .then(res=>{
      toast.success(res.data.message)
    })
    .catch(err=>{
      console.log(err)
    })
    setFormData({
      catName: "",
      catDesc: "",
      status: "Active",
    })
    e.target.reset()

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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
        <h2 className="text-lg font-semibold text-gray-800  py-6">Add New Category</h2>
        <form onSubmit={handleAddCategory}>
          {/* Color Name */}
          <div className="mb-4 py-6">
            <label htmlFor="CatName" className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              id="catName"
              name='catName'
              value={formData.catName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter Category name"
            />
          </div>
          <div className="mb-4 py-6">
            <label htmlFor="CatDesc" className="block text-sm font-medium text-gray-700 mb-1">
              Category Description
            </label>
            <input
              type="text"
              id="catDesc"
              name="catDesc"
              value={formData.catDesc}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter Category Description"
            />
          </div>

          <ImageSelector label="Category Image" id="catImg" handleFunction={handleImageChange} preview={preview}/>
       

         <StatusComp handleInputChange={handleInputChange}/>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition mt-10">
            Add Category
          </button>
        </form>
      </div>

  
    </main>
  );
}
