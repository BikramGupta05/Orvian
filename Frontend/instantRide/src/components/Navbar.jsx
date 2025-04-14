import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 navbar px-4 py-2 bg-slate-100 transition-all duration-300 ${
        scrolled ? "shadow-md  bg-slate-150" : "shadow-sm"
      }`}
    >
      {/* LEFT: Logo */}
      <div className="flex flex-row">
        <a className="btn btn-ghost text-xl border-none bg-slate-100 hover:bg-slate-200 hidden md:flex">
          Orvian
        </a>
      </div>

      {/* CENTER: Navigation Buttons */}
      <div className="flex-1 justify-center hidden md:flex">
        <div className="flex gap-2">
          <a
            href="/"
            className="btn btn-xs sm:btn-sm md:btn-md bg-slate-100 hover:bg-slate-200 border-none"
          >
            Instant Ride
          </a>
          <a
            href="/scheduledride"
            className="btn btn-xs sm:btn-sm md:btn-md bg-slate-100 hover:bg-slate-200 border-none"
          >
            Scheduled Ride
          </a>
          <a
            href="/about"
            className="btn btn-xs sm:btn-sm md:btn-md bg-slate-100 hover:bg-slate-200 border-none"
          >
            About Us
          </a>
          <a
            href="/testimonials"
            className="btn btn-xs sm:btn-sm md:btn-md bg-slate-100 hover:bg-slate-200 border-none"
          >
            Testimonials
          </a>
        </div>
      </div>

      {/* Login / Signup */}
      {authUser ? (
        <Logout />
      ) : (
        <div>
          <Link
            to="/login"
            className="btn bg-slate-100 hover:bg-slate-200 gap-2 mx-3 border-none text-green-500"
          >
            <span>Login</span>
            <span>|</span>
            <span>Signup</span>
          </Link>
        </div>
      )}

      {/* RIGHT: Avatar Dropdown */}
      <div className="flex-none justify-end flex">
        <div className="dropdown dropdown-end flex gap-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home Page</a>
            </li>
            <li>
              <a>My Rides</a>
            </li>
            <li>
              <a href="/scheduledride">Scheduled Ride</a>
            </li>
            <li>
              <a>Saved Address</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
