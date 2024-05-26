"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
};

export const SidebarItem = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex flex-col items-center gap-x-2 h-full text-black/90 lg:text-white md:text-white text-sm font-[500]  transition-all hover:text-slate-300",
        isActive && "text-black/90 lg:text-white md:text-white"
      )}
    >
      <div className="flex items-center gap-x-2 py-4 h-full">
        <Icon
          size={22}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto w-full opacity-0 border-2 border-s2 h-[5px] bg-s2 transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}