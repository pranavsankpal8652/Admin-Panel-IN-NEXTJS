import React, { useEffect, useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import Image_preview from "./Image_preview";
import ImageSelector from "./ImageSelector";

const ProductAdd = () => {
  const [productDetails, setProductDetails] = useState({
    productName: "",
    description: "",
    shortDescription: "",
    price: "",
    mrp: "",
    parentCategory: "",
    subCategory: "",
    size: "",
    color: "",
    status: "Active",
    productImage: null,
    animationImage: null,
    galleryImages: null,
  });
  const [preview, setPreview] = useState({
    productImage: null,
    animationImage: null,
    galleryImages: null,
  })


  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setProductDetails((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
    if (type == "file" && files[0]) {
      const imgUrl = URL.createObjectURL(files[0])
      setPreview((prev) => ({ ...prev, [name]: imgUrl }))
    }


  };
  //Memory CleanUp
  useEffect(() => {
    return () => {
      Object.values(preview).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [preview]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product Details:", productDetails);
    alert("Product details submitted successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <CustomBreadcrumb prevpage="Product" currenPage="Add Product" />
      <h1 className="text-2xl font-bold mb-4">Add Product Details</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="productName"
            value={productDetails.productName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Product Description</label>
          <textarea
            name="description"
            value={productDetails.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="4"
            placeholder="Add product description..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Short Description</label>
          <textarea
            name="shortDescription"
            value={productDetails.shortDescription}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="2"
            placeholder="Add product short description..."
          />
        </div>

               <ImageSelector label="Product Image" id="productImage" handleFunction={handleInputChange} preview={preview.productImage}/>
               <ImageSelector label="Animation Image" id="animationImage" handleFunction={handleInputChange} preview={preview.animationImage}/>
               <ImageSelector label="Gallary Image" id="galleryImages" handleFunction={handleInputChange} preview={preview.galleryImages}/>
     

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={productDetails.price}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter product price"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">MRP</label>
            <input
              type="number"
              name="mrp"
              value={productDetails.mrp}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
              placeholder="Enter product MRP"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select Parent Category</label>
            <select
              name="parentCategory"
              value={productDetails.parentCategory}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="">--Select Parent Category--</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select Sub Category</label>
            <select
              name="subCategory"
              value={productDetails.subCategory}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="">--Select Sub Category--</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="T-Shirts">T-Shirts</option>
              <option value="Novels">Novels</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Size</label>
            <select
              name="size"
              value={productDetails.size}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="">--Select Size--</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Color</label>
            <select
              name="color"
              value={productDetails.color}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="">--Select Color--</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Status</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={productDetails.status === "Active"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="Deactive"
                checked={productDetails.status === "Deactive"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Deactive
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
