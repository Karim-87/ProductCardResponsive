import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-green-900 text-white px-6 py-4" aria-label="Main navigation">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold">
                    Easy<span className="text-yellow-500">Shop</span>
                </div>

                {/* Links */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#" className="hover:text-green-400 hover:border-b-2 hover:border-green-400">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-400 hover:border-b-2 hover:border-green-400">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-green-400 hover:border-b-2 hover:border-green-400">Contact</a>
                    </li>
                </ul>

                {/* Button */}
                <div>
                    <button className="bg-yellow-400 text-blue-900 px-4 py-1 rounded hover:bg-yellow-500 hover:text-white">
                        Shop
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="text-white">Menu</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
