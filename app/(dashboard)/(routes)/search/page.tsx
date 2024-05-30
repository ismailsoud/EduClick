import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";

import { Categories } from "./_components/categories";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

const SearchPage = async ({
  searchParams
}: SearchPageProps) => {
  const { userId } = auth();

  if (!userId) { 
    return redirect("/");
  }

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });


  return (
    <>
      <div className="px-6 pt-6 md:mb-0 flex items-center justify-center">
        <div className="w-1/2">
          <SearchInput />
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-center">
          <Categories
            items={categories}
          />
        </div>
        <CoursesList items={courses} />
      </div>
    </>
   );
}
 
export default SearchPage;