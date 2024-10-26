import React from 'react';
import { Link } from 'react-router-dom';
import { MdAssignmentAdd } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";






export default function InventoryAdd() {
    const foodCategories = ['Food & Bevarages', 'Health & Wellness', 'Electronics & Appliances', 'Packages & Processed Food', 'Baby Products', 'Speciality Items', 'Household Supplies', 'Pet Supplies', 'Alochol & Tobacco Products', 'Personal Care', 'Non-Food Items', 'Miscellenaous']

    return (
        <>
            <div className="inventoryadd">
                <aside className="sidebar ">
                    <div className="logo">Im</div>
                    <nav>
                        <Link to="/">Dashboard</Link>
                        <Link to="/inventoryadd" className="active">Inventory</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="#">Customers</Link>
                        <Link to="#">Reports</Link>
                    </nav>
                    <div className="sidebar-footer">
                        <Link to="#">Settings</Link>
                        <Link to="#">Logout</Link>
                    </div>
                </aside>
                <div className="main-content">
                    {/* search-bar */}
                    <header>
                        <div className="search-bar">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="user-menu">
                            <button className="notification-btn">🔔</button>
                            <span>R.Singh</span>
                        </div>
                    </header>
                    {/* section-1 */}
                    <div
                        className="flex justify-between gap-x-4 ">
                        <div
                            className="w-1/2 bg-blue-700 p-2 rounded-md">
                            {/* title */}
                            <div
                                className='  rounded-md flex justify-between'>
                                <span
                                    className="text-white text-xl font-semibold">Inventory Summary</span>

                                <MdAssignmentAdd size={25} style={{ 'color': 'white' }} />
                            </div>
                            <div className="flex mt-4 justify-center items-center">
                                <div className="border-2 h-40 w-40 rounded-full flex flex-col justify-center items-center
                                ">
                                    <p className="text-blue-400 font-semibold text-lg">All Products</p>
                                    <p className="text-white">568989813</p>
                                </div>
                                <div className="border-2 h-40 w-40 rounded-full -ml-4 bg-blue-700  flex flex-col justify-center items-center">
                                    <p className="text-blue-400 font-semibold text-lg">In Store</p>
                                    <p className="text-white">568989813</p>
                                </div>
                                <div className="border-2 h-40 w-40 rounded-full -ml-4 bg-blue-700 flex flex-col justify-center items-center">
                                    <p className="text-blue-400 font-semibold text-lg">Low In Stock</p>
                                    <p className="text-red-600 ">568989813</p>
                                </div>
                            </div>
                        </div>
                        {/* add section */}
                        <div className="w-1/2  flex  flex-col gap-y-4 justify-center
                        ">
                                 <Link to='/newproduct'>
                                <div className="bg-blue-700 text-white cursor-pointer flex justify-center items-center p-2 rounded-md
                             ">
                                    <CiSquarePlus size={25} />
                                    <p>Add new products</p>

                                </div>
                            </Link>
                            <Link to='/newproduct'>
                                <div className="bg-blue-700 text-white cursor-pointer flex justify-center items-center p-2 rounded-md
                             ">
                                    <CiSquarePlus size={25} />
                                    <p>Add existing products</p>

                                </div>
                            </Link>

                            <div className="bg-red-700 text-white flex justify-center items-center p-2 rounded-md
                             ">
                                <p>Delete products</p>

                            </div>

                        </div>


                    </div>


                    <div className='bg-blue-300 mt-5 rounded-md p-2'>
                        <p
                            className="text-lg font-semibold text-white ">
                            Category
                        </p>
                        <div className="grid grid-cols-3 p-2 gap-1">

                            {foodCategories.map((category, index) => (
                                <div key={index} className="bg-blue-700 text-white p-2 rounded-md">
                                    {category}
                                </div>
                            ))}



                        </div>
                    </div>

                </div>

            </div>


        </>

    )
}
