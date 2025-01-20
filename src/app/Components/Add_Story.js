import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import ImageSelector from "./ImageSelector";

const AddStory = () => {
  const [storyName, setStoryName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
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
            value={storyName}
            onChange={(e) => setStoryName(e.target.value)}
            placeholder="Story Name"
            className="border p-2 rounded"
            required
          />
        </div>

        <ImageSelector label=" Image" id="Img" handleFunction={handleImageChange} preview={preview.Img}/>
        <ImageSelector label="Banner Image" id="bannerImg" handleFunction={handleImageChange} preview={preview.bannerImg}/>


        <div className="flex flex-col space-y-2">
          <label htmlFor="description" className="font-semibold">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
            className="border p-2 rounded"
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="font-semibold">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
        </div>

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
