/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Link from "next/link";

import Navbar from "./Navbar";
interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-4xl m-auto pt-4">
      <Navbar />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
