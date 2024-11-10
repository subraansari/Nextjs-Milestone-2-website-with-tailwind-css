

"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b">
            <div className="container mx-auto flex justify-between items-center p-4 lg:p-0">
                
                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden block text-blacklish" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                
                <div className="lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden' mt-4 lg:mt-5 mb-6">
                    <div className="flex flex-col lg:flex-row lg:gap-10 gap-4">
                        <Link className="navbar-link relative" href="/">HOME</Link>
                        <Link className="navbar-link relative" href="/Categories">CATEGORIES</Link>
                        <Link className="navbar-link relative" href="/Men">MEN'S</Link>
                        <Link className="navbar-link relative" href="/Women">WOMEN'S</Link>
                        <Link className="navbar-link relative" href="/Jewelery">JEWELERY</Link>
                        <Link className="navbar-link relative" href="/Perfume">PERFUME</Link>
                        <Link className="navbar-link relative" href="/HotOffers">HOT OFFERS</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
