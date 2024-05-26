import React from "react";
import "./Header.css";
import { FcShipped } from "react-icons/fc";
const Header = (props) => {
    return (
        <header className="header">
            <div className="logo">
                <span>Task-Tracker</span>
                <FcShipped />
            </div>
        </header>
    );
};

export default Header;
