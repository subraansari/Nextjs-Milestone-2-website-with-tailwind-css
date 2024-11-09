import Link from "next/link";
import React from "react";
const Navbar = () => {
    return(
        <div className="hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blacklish">


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
    )
}
export default Navbar;