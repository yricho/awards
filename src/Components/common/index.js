import React from "react";
import PropTypes from "prop-types";

export const Nav = ({ children }) => {
    return (
        <div className="sticky top-0 z-10">
            {children}
        </div>
    )
}

export const Footer = () => {
    return (
        <footer>
            <div className="py-16 text-center text-gray-500 font-light border-t">
                &copy; Awards {new Date().getFullYear()}
            </div>
        </footer>
    )
}

Nav.propTypes = {
    children: PropTypes.node
}
