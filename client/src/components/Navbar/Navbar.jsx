import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import MDN_LOGO from "../../assests/MDN_logo.png";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Products",
      link: "/products",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const isLoggedIn = true;
  console.log(links.length, "links.length ");

  const [wishlistCount, setWishlistCount] = useState(8);
  const [cartCount, setCartCount] = useState(15);

  const [mobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="gold-head relative flex bg-zinc-800  px-5 py-2 items-center justify-between z-50">
        <div className="flex items-center  gap-2">
          <img className="h-20 w-auto" src={MDN_LOGO} alt="logo" />
          <h1 className="text-2xl font-semibold">
            <span className="stylish-hindi-text">मशालें</span>
          </h1>
        </div>
        <div className="px-3 py-2 bg-zinc-700 rounded-md">
          <div className="nav-links-bookheaven block md:flex gap-4 items-center">
            <div className="hidden  md:flex gap-4 items-center">
              {links.map((item, i) =>
                item.title === "Profile" ? (
                  <Link
                    to={item.link}
                    className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-30"
                    key={i}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <Link
                    to={item.link}
                    className=" px-2 py-1 rounded hover:text-blue-500 font-semibold transition-all duration-30 hover:bg-zinc-800 "
                    key={i}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>

            <button
              className="md:hidden text-2xl text-white hover:text-zinc-200"
              onClick={() =>
                mobileNav == "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <div className={`hidden md:block`}>
          <div className="nav-links-bookheaven block md:flex gap-4 items-center">
            <div className="hidden  md:flex gap-4 items-center">
              {isLoggedIn === false && (
                <div className="hidden md:flex gap-4">
                  <Link
                    to="/LogIn"
                    className="px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-30"
                  >
                    SignIn
                  </Link>
                  <Link
                    to="/SignUp"
                    className="px-2 py-1 bg-blue-500 rounded text-zinc-800  hover:bg-white hover:text-zinc-800 transition-all duration-30"
                  >
                    SignUp
                  </Link>
                </div>
              )}
              {isLoggedIn && (
                <div className="hidden md:flex gap-4">
                  <Link
                    to="/cart"
                    className="relative px-2 py-1 text-2xl hover:text-blue-500 transition-all duration-300"
                  >
                    <FaRegHeart />
                    <span
                      className={` ${
                        wishlistCount > 9 ? `w-6` : `w-5`
                      } absolute top-0 right-0 inline-block mt-[-3px] h-auto text-xs font-bold leading-tight text-center text-white bg-red-500 rounded-full`}
                    >
                      {wishlistCount > 9 ? `9+` : `${wishlistCount}`}
                    </span>
                  </Link>
                  <Link
                    to="/progile"
                    className="relative px-2 py-1 text-2xl hover:text-blue-500 transition-all duration-300"
                  >
                    <BsCartPlus />

                    <span
                      className={` ${
                        cartCount > 9 ? `w-6` : `w-5`
                      } absolute top-0 right-0 inline-block mt-[-3px]  h-auto text-xs font-bold leading-tight text-center text-white bg-red-500 rounded-full`}
                    >
                      {cartCount > 9 ? `9+` : `${cartCount}`}
                    </span>
                  </Link>
                  <Link
                    to="/progile"
                    className="px-2 py-1 text-2xl hover:text-blue-500 transition-all duration-30"
                  >
                    <FaRegUser />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${mobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center md:hidden`}
      >
        {links.map((item, i) => (
          <Link
            to={item.link}
            className={`${mobileNav} hover:text-blue-500 transition-all duration-30 text-white text-4xl font-semibold mb-8`}
            key={i}
            onClick={() =>
              mobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            {item.title}
          </Link>
        ))}

        {isLoggedIn && (
          <>
            <Link
              to="/LogIn"
              className={`${mobileNav} px-4 py-2 mb-8 text-3xl font-semibold border border-blue-500 rounded bg-zinc-800 hover:bg-white hover:text-zinc-800 text-white transition-all duration-30"`}
              onClick={() =>
                mobileNav == "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              SignIn
            </Link>
            <Link
              to="/SignUp"
              className={`${mobileNav} px-4 py-2 mb-8 text-3xl font-semibold bg-blue-500 rounded text-zinc-800  hover:bg-white hover:text-zinc-800 transition-all duration-30`}
              onClick={() =>
                mobileNav == "hidden"
                  ? setMobileNav("block")
                  : setMobileNav("hidden")
              }
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
