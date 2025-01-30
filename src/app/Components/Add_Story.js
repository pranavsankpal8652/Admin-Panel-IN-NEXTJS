import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import ImageSelector from "./ImageSelector";
import StatusComp from "./StatusComp";

const AddStory = () => {
  const [formData, setFormData] = useState({
    storyName: "",
    description: "",
    status: "Active",
  });

  const [preview, setPreview] = useState({
    Img: null,
    bannerImg: null,
  })
  const handleImageChange = (e,) => {
    const {files,name}  = e.target;
    
    if (files && files[0]) {
      setPreview(prev=>({...prev,[name]:URL.createObjectURL(files[0])}))

    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for saving the story (e.g., POST request to server or API call)
    alert("Story Added!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
        <CustomBreadcrumb prevpage="Story" currenPage="Add Story"/>
      <h1 className="text-2xl font-bold mb-4">Add Story</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label htmlFor="storyName" className="font-semibold">Story Name</label>
          <input
            type="text"
            id="storyName"
            value={formData.storyName}
            onChange={handleInputChange}
            placeholder="Story Name"
            className="border p-2 rounded"
            required
          />
        </div>

        <ImageSelector label="Image" id="Img" handleFunction={handleImageChange} preview={preview.Img}/>
        <ImageSelector label="Banner Image" id="bannerImg" handleFunction={handleImageChange} preview={preview.bannerImg}/>


        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="font-semibold">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description..."
            className="border p-2 rounded"
            required
          />
        </div>

       <StatusComp handleInputChange={handleInputChange}/>

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Add Story
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStory;
