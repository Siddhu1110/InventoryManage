import React from 'react';
import {Link}from 'react-router-dom';

export default function Dashboard() {
    return (
        <>
            <div className="dashboard">
                <aside className="sidebar">
                    <div className="logo">Im</div>
                    <nav>
                        <Link to="#" className="active">Dashboard</Link>
                        <Link to="/inventoryadd">Inventory</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="#">Customers</Link>
                        <Link to="#">Reports</Link>
                    </nav>
                    <div className="sidebar-footer">
                        <Link to="#">Settings</Link>
                        <Link to="#">Logout</Link>
                    </div>
                </aside>
                <main className="main-content">
                    <header>
                        <div className="search-bar">
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="user-menu">
                            <button className="notification-btn">🔔</button>
                            <span>R.Singh</span>
                        </div>
                    </header>
                    <div className="dashboard-content">
                        <div className="card sales-activity">
                            <h2>Sales Activity</h2>
                            <div className="inventory-summary">
                                <h3>Inventory Summary</h3>
                                <div className="summary-item in-stock">
                                    <span>In-stock</span>
                                    <span>104634</span>
                                </div>
                                <div className="summary-item re-stock">
                                    <span>Re-stock</span>
                                    <span>6456</span>
                                </div>
                            </div>
                        </div>
                        <div className="card total-revenue">
                            <h2>Total Revenue</h2>
                            <div className="amount">₹3,54,000</div>
                            <div className="trend positive">19% ▲</div>
                        </div>
                        <div className="card total-customer">
                            <h2>Total Customer</h2>
                            <div className="amount">13,018</div>
                            <div className="trend positive">16% ▲</div>
                        </div>
                        <div className="card total-order">
                            <h2>Total Order</h2>
                            <div className="amount">9,018</div>
                            <div className="trend positive">15% ▲</div>
                        </div>
                        <div className="card inventory">
                            <h2>Inventory</h2>
                            <div className="low-stock">Low in stock</div>
                            <div className="stock-count">2 items</div>
                            <p>This item is low of stock, please order it soon!</p>
                            <div className="order-items">
                                <div className="order-item">
                                    <span>Fortune Oil</span>
                                    <button>Order now</button>
                                </div>
                                <div className="order-item">
                                    <span>Salted Peanuts</span>
                                    <button>Order now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card top-selling">
                            <h2>Top Selling</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Sold</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Amul Milk</td>
                                        <td>4504</td>
                                        <td>34</td>
                                    </tr>
                                    <tr>
                                        <td>Parle G</td>
                                        <td>6067</td>
                                        <td>28</td>
                                    </tr>
                                    <tr>
                                        <td>Vim Liquid</td>
                                        <td>3900</td>
                                        <td>110</td>
                                    </tr>
                                    <tr>
                                        <td>Coke</td>
                                        <td>2800</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Fortune Oil</td>
                                        <td>1886</td>
                                        <td>189</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="card recent-orders">
                            <h2>Recent Orders</h2>
                            <div className="order">
                                <div className="order-info">
                                    <div className="order-image"></div>
                                    <div>
                                        <div className="order-name">Amul Milk</div>
                                        <div className="order-id">Order Id: 000823</div>
                                    </div>
                                </div>
                                <div className="order-status pending">Pending</div>
                            </div>
                            <div className="order">
                                <div className="order-info">
                                    <div className="order-image"></div>
                                    <div>
                                        <div className="order-name">Lays CS</div>
                                        <div className="order-id">Order Id: 000822</div>
                                    </div>
                                </div>
                                <div className="order-status done">Done</div>
                            </div>
                            <div className="order">
                                <div className="order-info">
                                    <div className="order-image"></div>
                                    <div>
                                        <div className="order-name">Quaker Oats</div>
                                        <div className="order-id">Order Id: 000821</div>
                                    </div>
                                </div>
                                <div className="order-status done">Done</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
