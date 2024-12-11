import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-2xl font-medium">
          Hello, World.
        </Link>
        <div>
          <ul className="flex items-center text-sm py-4">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:text-teal-500 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/Tomfool24234234"
                className="block px-4 py-2 hover:text-teal-500  transition-all duration-300"
              >
                X
              </Link>
            </li>
            <li>
              <Link
                href="https://qiita.com/MidnightLute"
                className="block px-4 py-2 hover:text-teal-500  transition-all duration-300"
              >
                Qiita
              </Link>
            </li>
            <li>
              <Link
                href="/author"
                className="block px-4 py-2 hover:text-teal-500  transition-all duration-300"
              >
                Author
              </Link>
            </li>
            <li>
              <Link
                href="/privacyPolicy"
                className="block px-4 py-2 hover:text-teal-500  transition-all duration-300"
              >
                Privacy Policy{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;