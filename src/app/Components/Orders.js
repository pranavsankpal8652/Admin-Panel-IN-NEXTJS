import { useState } from "react";
import CustomBreadcrumb from "./CustomBreadcrumb";
import { orange } from "@mui/material/colors";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: "ORD12345",
      customerName: "John Doe",
      productName: "Product 1",
      Quantity:2,
      Price:'Rs.3433',
      status: "Pending...",
      orderDate: "2025-01-01",
    },
    {
      id: 2,
      orderNumber: "ORD12346",
      customerName: "Jane Doe",
      productName: "Product 2",
      Quantity:2,
      Price:'Rs.3433',
      status: "Completed",
      orderDate: "2025-01-02",
    },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <CustomBreadcrumb prevpage="Orders" currenPage=" Orders" />
      <h1 className="text-2xl font-bold mb-4"> Orders</h1>

      <table className="w-full border-collapse bg-white shadow-md" cellPadding={10}>
        <thead>
          <tr className="border border-gray-400">
            <th><button className="p-[10px_20px] bg-gradient-to-br from-violet-700 via-violet-400 to-blue-800 rounded-lg text-white ">Delete</button></th>
            <th className="p-2">S. No.</th>
            <th className="p-2">Order Number</th>
            <th className="p-2">Customer Name</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
            <th className="p-2">Product Name</th>
            <th className="p-2">Order Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="border border-gray-300 text-center ">
              <td><input type="checkbox"></input></td>
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{order.orderNumber}</td>
              <td className="p-2">{order.customerName}</td>
              <td className="p-2">{order.Quantity}</td>
              <td className="p-2">{order.Price}</td>
              <td className="p-2">{order.productName}</td>
              <td className="p-2">{order.orderDate}</td>
              <td className={`p-2 ${order.status=='Completed'?'bg-green-500':'bg-orange-300'}`}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
