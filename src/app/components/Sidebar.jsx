import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog/this-is-test">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
