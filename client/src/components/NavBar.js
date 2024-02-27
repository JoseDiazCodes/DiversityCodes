import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/favicon.png" alt="hacksLogo" className="logo" />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="space-x-4">
          <NavigationMenuItem>
            <Link to="/" className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/examTable" className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Exams
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/adminView" className="create-new-exam button bg-blue-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Admin
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
