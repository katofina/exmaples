import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="divLink">
            1. <Link to="/binarysearch">The binary search</Link>
        </div>
    )
}

export default Navigation;