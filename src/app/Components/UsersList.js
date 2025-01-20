import React from 'react'
import CustomBreadcrumb from './CustomBreadcrumb'

export default function UsersList({users}) {
    return (
        <>
           <div className="container mx-auto p-4 min-h-screen">
            <CustomBreadcrumb currenPage="Users" />
            <h1 className="text-2xl font-bold text-gray-800 mb-6">User List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="text-left px-6 py-3 text-gray-600 font-semibold">S. No.</th>
                            <th className="text-left px-6 py-3 text-gray-600 font-semibold">Name</th>
                            <th className="text-left px-6 py-3 text-gray-600 font-semibold">Email</th>
                            <th className="text-left px-6 py-3 text-gray-600 font-semibold">Role</th>
                            <th className="text-left px-6 py-3 text-gray-600 font-semibold">Status</th>
                            <th className="text-left px-6 py-3 text-gray-600 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={user.id}
                                className="border-b hover:bg-gray-50 transition duration-300"
                            >
                                <td className="px-6 py-4 text-gray-700">{index + 1}</td>
                                <td className="px-6 py-4 text-gray-700">{user.name}</td>
                                <td className="px-6 py-4 text-gray-700">{user.email}</td>
                                <td className="px-6 py-4 text-gray-700">{user.role}</td>
                                <td
                                    className={`px-6 py-4 font-semibold ${user.status === 'Active'
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                        }`}
                                >
                                    {user.status}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm mr-2">
                                        Edit
                                    </button>
                                    <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
     
    )
}
