import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="divLink">
            <Link to="/search/simple">1. The simple search</Link>
            <Link to="/search/binary">2. The binary search</Link>
        </div>
    )
}

export default Navigation;