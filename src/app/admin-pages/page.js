'use client'
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

import { FaShoppingCart, FaUser, FaChartLine } from "react-icons/fa";
import { Breadcrumbs, Typography } from '@mui/material'
import Head from 'next/head';
import Link from 'next/link';
// Sample chart data
const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
    }
  ]
};

const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Color Frequency',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }
  ]
};

const Dashboard = () => {
  return (
    <>
    
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 mt-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Link href="/admin-pages/orders/orders" className="p-4 bg-white shadow rounded-lg flex items-center justify-between cursor-pointer">
          <div>
            <div className="text-lg font-semibold">Orders</div>
            <div className="text-3xl font-bold">120</div>
          </div>
          <FaShoppingCart className="w-10 h-10 text-gray-400" />
        </Link>
        <Link href="/admin-pages/Users" className="p-4 bg-white shadow rounded-lg flex items-center justify-between cursor-pointer">
          <div>
            <div className="text-lg font-semibold">Users</div>
            <div className="text-3xl font-bold">320</div>
          </div>
          <FaUser className="w-10 h-10 text-gray-400" />
        </Link>
        <div className="p-4 bg-white shadow rounded-lg flex items-center justify-between cursor-pointer">
          <div>
            <div className="text-lg font-semibold">Revenue</div>
            <div className="text-3xl font-bold">$5,400</div>
          </div>
          <FaChartLine className="w-10 h-10 text-gray-400" />
        </div>
      </div>
      <div className='flex'>
      <div className="bg-white shadow rounded-lg p-10 m-6 basis-[45%] ">
        <h2 className="text-xl font-semibold mb-4">Sales Overview </h2>
        <Line data={lineData} />
      </div>
      <div className="bg-white shadow rounded-lg p-10 basis-[45%]">
        <h2 className="text-xl font-semibold mb-4">Color Frequency</h2>
        <Bar data={barData} />
      </div>
      </div>
      
    </div>
    </>
    
  );
};

export default Dashboard;
