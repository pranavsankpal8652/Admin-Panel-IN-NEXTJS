'use client'
import { useState } from 'react';
import { FiBell, FiSettings, FiLogOut, FiUser } from 'react-icons/fi';
import CustomBreadcrumb from '@/app/Components/CustomBreadcrumb';
const Avatar = ({ src, type }) => (
    type == "icon"
        ?
        <img src={src} alt="User Avatar" className="w-10 h-10 rounded-full mx-auto shadow-lg" />
        :
        <img src={src} alt="User Avatar" className="w-32 h-32 rounded-full mx-auto shadow-lg" />

);

const EditableField = ({ label, value, onChange }) => (
    <div className="flex flex-col mb-6">
        <label className="mb-2 text-lg font-semibold">{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

const ProfilePage = () => {
    const [email, setEmail] = useState('admin@example.com');
    const [phone, setPhone] = useState('123-456-7890');
    const [address, setAddress] = useState('123 Admin Lane, Pune');
    const [Password, setPassword] = useState('*********');
    const [showNotifications, setShowNotifications] = useState(false);



    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="p-4 grid grid-cols-3 items-center shadow-md">
                <CustomBreadcrumb currenPage="Profile" />
                <div className="text-2xl font-bold text-center">Profile</div>
            </header>

            <div className="flex">
                <main className="flex-1 p-6">
                    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <Avatar src="/2.jpg" />
                        <EditableField
                            label="Email"
                            value={email}
                            onChange={setEmail}
                        />
                        <EditableField
                            label="Phone"
                            value={phone}
                            onChange={setPhone}
                        />
                        <EditableField
                            label="Address"
                            value={address}
                            onChange={setAddress}
                        />
                        <EditableField
                            label="Password"
                            value={Password}
                            onChange={setPassword}
                        />
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Save
                        </button>
                    </div>
                </main>


            </div>
        </div>
    );
};

export default ProfilePage;
