import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="divLink">
      <Link to="/search/simple">1. The simple search</Link>
      <Link to="/search/binary">2. The binary search</Link>
      <Link to="/sort/selected">3. The selected sort</Link>
      <Link to="/sort/quick">4. The quick sort</Link>
    </div>
  );
}

export default Navigation;
