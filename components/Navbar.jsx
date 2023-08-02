import React from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-[1223px] mx-auto flex justify-between items-center p-6">
      <Link href="/">
        <img src="/Assets/Navbar/Logo.png" alt="" />
      </Link>
      <div className="flex items-center gap-20">
        <div className="lg:flex hidden  gap-10">
          <p>آپدیت ها</p>
          <Link href="/questions">
            <p>سوالات متداول</p>
          </Link>
          <Link href="/contact-us">
            <p>تماس با ما</p>
          </Link>
        </div>
        <Link href="/Login">
          <Button
            text="ورود یا ثبت نام"
            className="px-7 py-3 border border-[#0182FE] rounded-lg text-[#0182FE] transition hover:bg-[#0182FE] hover:text-white"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
