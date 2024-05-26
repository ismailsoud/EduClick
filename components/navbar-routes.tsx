"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      <div className="flex gap-x-2 ml-auto space-x-2 lg:space-x-8 md:space-x-8 ">
        {isTeacherPage || isCoursePage ? (
          <Link href="/">
            <div className="bg-s2 flex space-x-2 rounded-lg whitespace-nowrap w-min px-4 py-1 text-black/80">
              <LogOut className="w-4" />
              Retour au mode etudient
            </div>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <div className="bg-s2 rounded-lg whitespace-nowrap w-min px-4 py-1 text-black/80">
              Devenir un tuteur
            </div>
          </Link>
        ) : null}
        <div className="border-s2 rounded-full border-2">
          <UserButton
            appearance={{
              baseTheme: shadesOfPurple
            }}
            afterSignOutUrl="/"

          />
        </div>

      </div>
    </>
  )
}