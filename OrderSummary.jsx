import React from 'react';
import { Link } from 'react-router-dom';
import Summary from '../components/Summary';

export default function OrderSummary() {
    return (
        <div className="orderSummary">
            <aside className="sidebar ">
                <div className="logo">Im</div>
                <nav>
                    <Link to="/">Dashboard</Link>
                    <Link to="/inventoryadd">Inventory</Link>
                    <Link to="/orders" className="active">Orders</Link>
                    <Link to="#">Customers</Link>
                    <Link to="#">Reports</Link>
                </nav>
                <div className="sidebar-footer">
                    <Link to="#">Settings</Link>
                    <Link to="#">Logout</Link>
                </div>
            </aside>

            <div className="main-content">
                <Summary/>
            </div>
        </div>
    )
}
