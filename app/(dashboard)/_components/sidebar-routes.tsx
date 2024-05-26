"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Accueil",
    href: "/",
  },
  {
    icon: Compass,
    label: "Cours",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Cours",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Statistique",
    href: "/teacher/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col lg:flex-row md:flex-row w-full lg:h-full md:h-full space-x-10 justify-center">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}