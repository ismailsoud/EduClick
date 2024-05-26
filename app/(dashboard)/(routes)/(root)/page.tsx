import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { Loader, Check } from "lucide-react";

import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);

  return (
    <div className="p-6 space-y-4 justify-center">
      <div className="flex w-full">
        <div className="w-4/6">
          <CoursesList
            items={[...coursesInProgress, ...completedCourses]}
          />
        </div>
        <div className="w-2/6 flex flex-col">
          <div className="flex flex-col sm:grid-cols-2 gap-4 border-slate-400 border-2 rounded-lg w-full">
            <div className="border-b-2 border-slate-400">
              <InfoCard
                icon={Loader}
                label="In Progress"
                numberOfItems={coursesInProgress.length}
              />
            </div>
            <InfoCard
              icon={Check}
              label="Completed"
              numberOfItems={completedCourses.length}
              variant="success"
            />
          </div>
        </div>


      </div>
    </div>
  )
}
