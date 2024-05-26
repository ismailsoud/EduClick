import { NavbarRoutes } from "@/components/navbar-routes";
import logo from '../../../public/logo.png';
import { MobileSidebar } from "./mobile-sidebar";
import { SidebarRoutes } from "./sidebar-routes";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="py-0 border-b justify-between items-center space-x-10 bg-s1 h-20 flex w-full lg:px-28 md:px-28 px-5 shadow-sm z-50">
      <div className="flex items-center h-full">
        <Image src={logo} alt="logo" height={70} width={200} />
      </div>
      <MobileSidebar />
      <div className="hidden lg:flex md:flex w-full h-full">
        <SidebarRoutes />
      </div>
      <NavbarRoutes />
    </div>
  );
};
