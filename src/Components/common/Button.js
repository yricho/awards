import React from "react";
import PropTypes from "prop-types";

const Button = ({
    className = '',
    children,
    onClick
}) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func
}

export default Button;