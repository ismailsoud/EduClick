import { Category, Course } from "@prisma/client";
import { db } from "@/lib/db";

type CourseWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
};

export const getAllCourses = async (): Promise<CourseWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          }
        }
      },
      orderBy: {
        createdAt: "desc",
      }
    });

    return courses;
  } catch (error) {
    console.log("[GET_ALL_COURSES]", error);
    return [];
  }
}
