import React from "react";
import "./Header.css";
import { FcShipped } from "react-icons/fc";
const Header = (props) => {
    return (
        <header>
            <span>
                Task-Tracker
                <FcShipped />
            </span>
            <button {...props} className={"button " + props.className} />
        </header>
    );
};

export default Header;
