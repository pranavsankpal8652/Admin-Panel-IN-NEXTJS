'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaPalette, FaArrowsAltV, FaTag, FaProductHunt, FaBookOpen, FaShoppingCart, FaSlidersH, FaFileContract, FaTachometerAlt, FaUser } from "react-icons/fa";
import { IoMdRadioButtonOn, IoMdMenu } from "react-icons/io";
const SideBar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({[menu]: !prev[menu] }));
  };

  const iconMap = {
    Dashboard: <FaTachometerAlt />,
    Profile: <FaUser />,
    Colors: <FaPalette />,
    Size: <FaArrowsAltV />,
    'Parent Category': <FaTag />,
    'Sub Category': <FaTag />,
    Product: <FaProductHunt />,
    Story: <FaBookOpen />,
    Orders: <FaShoppingCart />,
    Slider: <FaSlidersH />,
    'Terms & Conditions': <FaFileContract />,
  };

  const menuItems = [
    { label: 'Dashboard', link: '/admin-pages' },
    { label: 'Profile', link: '/admin-pages/profile' },
  ];

  const ecommerceItems = [
    { label: 'Colors', submenu: ['Add Color', 'Manage Colors'], link: '/admin-pages/colors' },
    { label: 'Size', submenu: ['Add Size', 'Manage Sizes'], link: '/admin-pages/size' },
    { label: 'Parent Category', submenu: ['Add Category', 'Manage Category'], link: '/admin-pages/parentcat' },
    { label: 'Sub Category', submenu: ['Add Subcategory', 'Manage SubCategory'], link: '/admin-pages/subcate' },
    { label: 'Product', submenu: ['Add Product', 'Manage Products'], link: '/admin-pages/Product' },
    { label: 'Story', submenu: ['Add Story', 'Manage Stories'], link: '/admin-pages/story' },
    { label: 'Orders', submenu: ['Orders'], link: '/admin-pages/orders' },
    { label: 'Slider', submenu: ['Add Slider', 'Manage Sliders'], link: '/admin-pages/slider' },
    { label: 'Terms & Conditions', submenu: ['View Terms', 'Update Terms'], link: '/admin-pages/terms' },
  ];

  return (
    <div className="flex flex-col min-h-screen sm:flex-row sticky top-0 left-0">
      <div className={`fixed sm:static h-full sm:h-auto w-64 bg-gray-800 text-white p-2 pt-5 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform sm:translate-x-0`}>
        <div className="flex justify-between items-center pb-5 border-b border-gray-700">
          <Link href='/admin-pages' className="text-2xl font-bold flex gap-3">
            <img src="/loyalty_logo_light.png" width={30} height={30}></img>
            <span>Frank and Oak</span>
          </Link>
        </div>
        <ul className="mt-4 space-y-2">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link} className="block px-4 py-2 hover:bg-gray-700 lg:flex items-center gap-2">
                {iconMap[item.label]} {item.label}
              </Link>
            </li>
          ))}
          <hr className="border-gray-700 my-2" />
          <div className="px-2 pe-4 py-2 font-semibold text-gray-400 text-nowrap">ECOMMERCE COMPONENTS</div>
          {ecommerceItems.map((item, idx) => (
            <li key={idx}>
              <button className="flex justify-between w-full px-4 py-2 hover:bg-gray-700" onClick={() => toggleMenu(item.label)}>
                <span className="flex items-center gap-2">
                  {iconMap[item.label]} {item.label}
                </span>
                {item.submenu && (
                  <svg className={`w-5 h-5 transition-transform ${openMenus[item.label] ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
              {item.submenu && openMenus[item.label] && (
                <ul className="pl-4 space-y-1">
                  {item.submenu.map((subitem, subIdx) => (
                    <li key={subIdx}>
                      <Link href={`${item.link}/${subitem.toLowerCase().replace(/ /g, '-')}`} className="block px-4 py-2 hover:bg-gray-600 lg:flex items-center gap-2">
                        <IoMdRadioButtonOn /> {subitem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default SideBar;
