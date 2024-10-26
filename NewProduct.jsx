import React from 'react';
import { Link } from 'react-router-dom';
import UploadImage from '../components/UploadImage';

export default function NewProduct() {
    return (
        <>
            <div className="newproduct">
                <aside className="sidebar ">
                    <div className="logo">Im</div>
                    <nav>
                        <Link to="#" >Dashboard</Link>
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

                {/* main content of add new product */}
                <div className="main-content">
                    <header>
                        <div className="search-bar">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="user-menu">
                            <button className="notification-btn">🔔</button>
                            <span>R.Singh</span>
                        </div>
                    </header>


                    <div className="grid grid-cols-12 px-4">

                        <div className="col-span-9">
                            <p className="text-2xl font-semibold"> New Inventory Item</p>
                        </div>
                        <div className="col-span-3 flex gap-x-2">
                            <button className='text-white bg-blue-400 rounded-md px-2 py-1'>
                                Save as Draft
                            </button>
                            <button className='text-white bg-blue-400 rounded-md px-2 py-1'>
                                Save & Publish
                            </button>
                        </div>

                    </div>

                    <div className="grid grid-cols-12  rounded-md mt-4  gap-x-2">

                        <div className="col-span-9 bg-blue-300 rounded-md  px-4">
                            <p className="text-md font-semibold">Product Details</p>
                            <div className=" min-h-screen flex justify-center items-center">
                                <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
                                    {/* Product Name */}
                                    <input
                                        type="text"
                                        placeholder="Product Name"
                                        className="p-2 rounded-md border border-gray-300"
                                    />

                                    {/* Short Description */}
                                    <input
                                        type="text"
                                        placeholder="Short Description"
                                        className="p-2 rounded-md border border-gray-300"
                                    />

                                    {/* Product ID */}
                                    <input
                                        type="text"
                                        placeholder="Product ID"
                                        className="p-2 rounded-md border border-gray-300 col-span-2"
                                    />

                                    {/* Product Category */}
                                    <input
                                        type="text"
                                        placeholder="Select Product Category"
                                        className="p-2 rounded-md border border-gray-300 col-span-2"
                                    />

                                    {/* Selling Price */}
                                    <input
                                        type="number"
                                        placeholder="Selling Price"
                                        className="p-2 rounded-md border border-gray-300"
                                    />

                                    {/* Cost Price */}
                                    <input
                                        type="number"
                                        placeholder="Cost Price"
                                        className="p-2 rounded-md border border-gray-300"
                                    />

                                    {/* Quantity in Stock */}
                                    <input
                                        type="number"
                                        placeholder="Quantity in Stock"
                                        className="p-2 rounded-md border border-gray-300 col-span-2"
                                    />

                                    {/* Product Detail Description */}
                                    <div className="col-span-2">
                                        <label className="block font-semibold mb-1">
                                            Product Detail Description
                                        </label>
                                        <textarea
                                            placeholder="Add a detailed description for your product..."
                                            className="w-full p-2 rounded-md border border-gray-300 h-24 resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Return Policy */}
                                    <label className="col-span-2 font-semibold">Return Policy</label>

                                    {/* Date Picker */}
                                    <input
                                        type="date"
                                        className="p-2 rounded-md border border-gray-300"
                                    />

                                    {/* Time Picker */}
                                    <input
                                        type="time"
                                        className="p-2 rounded-md border border-gray-300"
                                    />
                                </div>
                            </div>



                        </div>

                        <div className="col-span-3 rounded-md">
                            <UploadImage/>

                        </div>

                    </div>

                </div>

            </div>


        </>



    )
}
