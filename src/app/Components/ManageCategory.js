import React, { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";

const ManageCategories = ({pageFor}) => {
  // Sample data for categories
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Electronics",
      image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      description: "Devices, gadgets, and accessories.",
      status: "Active",
    },
    {
      id: 2,
      name: "Clothing",
      image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      description: "Men's and women's fashion.",
      status: "Active",
    },
    {
      id: 3,
      name: "Groceries",
      image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      description: "Daily essentials and food items.",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Furniture",
      image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      description: "Home and office furniture.",
      status: "Active",
    },
    {
      id: 5,
      name: "Books",
      image: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      description: "Educational and recreational books.",
      status: "Active",
    },
  ]);

  // Handle delete action
  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      setCategories(categories.filter((category) => category.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    {
            pageFor
            ?
            <CustomBreadcrumb prevpage="SubCategory" currenPage="Manage Category"/>
            :
            <CustomBreadcrumb prevpage="Parent Category" currenPage="Manage Category"/>
    
          }
      <h1 className="text-2xl font-bold mb-4">Manage Categories</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 border">S. No.</th>
              <th className="py-3 px-4 border">Category Name</th>
              <th className="py-3 px-4 border">Image</th>
              <th className="py-3 px-4 border">Description</th>
              <th className="py-3 px-4 border">Action</th>
              <th className="py-3 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={category.id}
                className={`text-gray-700 text-sm ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-4 border text-center">{index + 1}</td>
                <td className="py-3 px-4 border">{category.name}</td>
                <td className="py-3 px-4 border text-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 border">{category.description}</td>
                <td className="py-3 px-4 border text-center">
                  <button
                    onClick={() => alert(`Edit category: ${category.name}`)}
                    className="bg-blue-500 text-white py-1 px-2 rounded mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
                <td className="py-3 px-4 border text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs font-semibold ${
                      category.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {category.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCategories;
