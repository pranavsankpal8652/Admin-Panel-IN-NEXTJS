import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Product 1",
      description: "Description of Product 1",
      shortDescription: "Short description of Product 1",
      thumbnails: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      status: "Active",
    },
    {
      id: 2,
      productName: "Product 2",
      description: "Description of Product 2",
      shortDescription: "Short description of Product 2",
      thumbnails: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      status: "Deactive",
    },
    {
      id: 3,
      productName: "Product 3",
      description: "Description of Product 3",
      shortDescription: "Short description of Product 3",
      thumbnails: "https://i.pinimg.com/originals/bf/e0/39/bfe03930f2a1bfff7515a14dc47d34d1.png",
      status: "Active",
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectChange = (e, productId) => {
    if (e.target.checked) {
      setSelectedProducts((prev) => [...prev, productId]);
    } else {
      setSelectedProducts((prev) =>
        prev.filter((id) => id !== productId)
      );
    }
  };

  const handleDelete = () => {
    const remainingProducts = products.filter(
      (product) => !selectedProducts.includes(product.id)
    );
    setProducts(remainingProducts);
    setSelectedProducts([]);
  };

  const handleStatusChange = (productId) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
            ...product,
            status: product.status === "Active" ? "Deactive" : "Active",
          }
          : product
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <CustomBreadcrumb prevpage="Product" currenPage="Manage Products" />

      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>

      <div className="mb-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Delete Selected Products
        </button>
      </div>

      <table className="w-full border-collapse bg-white shadow-md">
        <thead>
          <tr className="border-b">
            <th className="p-2">
              <input
                type="checkbox"
                checked={selectedProducts.length === products.length}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedProducts(products.map((p) => p.id));
                  } else {
                    setSelectedProducts([]);
                  }
                }}
              />
            </th>
            <th className="p-2">S. No.</th>
            <th className="p-2">Product Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Short Description</th>
            <th className="p-2">Thumbnails</th>
            <th className="p-2">Action</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="border-b text-center">
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={(e) =>
                    handleSelectChange(e, product.id)
                  }
                />
              </td>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{product.productName}</td>
              <td className="p-2">{product.description}</td>
              <td className="p-2">{product.shortDescription}</td>
              <td className="p-2">
                <img
                  src={product.thumbnails} // Online image URL
                  alt={product.productName}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="p-2">
                <button
                  onClick={() => alert(`Edit product ${product.id}`)}
                  className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </td>
              <td className="p-2 text-center">
                <button
                  onClick={() => handleStatusChange(product.id)}
                  className={`py-1 px-3 rounded ${product.status === "Active"
                      ? "bg-green-500"
                      : "bg-gray-500"
                    } text-white`}
                >
                  {product.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
