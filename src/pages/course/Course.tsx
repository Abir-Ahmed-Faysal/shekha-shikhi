import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import SingleCourse from "./components/SingleCourse";
import { GetData } from "../../lib/api/api";
import type { ICourse } from "../../types/ICourse";

export type Class = {
  id: string;
  label: string;
  path: string;
};

const primaryCourses: Class[] = [
  { id: "1", label: "ক্লাস 1", path: "/courses/primary" },
  { id: "2", label: "ক্লাস 2", path: "/courses/primary" },
  { id: "3", label: "ক্লাস 3", path: "/courses/primary" },
  { id: "4", label: "ক্লাস 4", path: "/courses/primary" },
  { id: "5", label: "ক্লাস 5", path: "/courses/primary" },
];

const secondaryCourses: Class[] = [
  { id: "6", label: "ক্লাস 6", path: "/courses/secondary" },
  { id: "7", label: "ক্লাস 7", path: "/courses/secondary" },
  { id: "8", label: "ক্লাস 8", path: "/courses/secondary" },
  { id: "9", label: "ক্লাস 9", path: "/courses/secondary" },
  { id: "10", label: "ক্লাস 10", path: "/courses/secondary" },
];

const GetCourses = (category?: string) => {
  switch (category) {
    case "primary":
      return primaryCourses;
    case "secondary":
      return secondaryCourses;
    default:
      return [...primaryCourses, ...secondaryCourses];
  }
};

export const CourseFn = () => {
  const { category } = useParams();
  const courses = GetCourses(category);

  const { data, isLoading, error } = useQuery<ICourse[], Error>({
    queryKey: ["courses", category],
    queryFn: () =>
      GetData<ICourse[]>(`/api/courses/${category || "all"}`),
  });

  return (
    <div className="space-y-8">
      {/* ✅ Navbar always visible */}
      <nav className="w-full border-b pb-2">
        <ul className="flex flex-wrap gap-4 text-gray-700">
          {courses.map(({ id, label, path }) => (
            <li key={id}>
              <Link
                to={path}
                className="hover:text-blue-600 font-medium transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ✅ Course list area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]">
        {isLoading && (
          <p className="col-span-full text-center py-4 text-gray-500">
            Loading courses...
          </p>
        )}

        {error && (
          <p className="col-span-full text-center text-red-500 py-4">
            ⚠️ {error.message || "Failed to load courses"}
          </p>
        )}

        {!isLoading && !error && data?.length === 0 && (
          <p className="col-span-full text-center text-gray-600 py-4">
            No courses found for this category.
          </p>
        )}

        {!isLoading &&
          !error &&
          data?.map((course) => (
            <SingleCourse key={course._id} course={course} />
          ))}
      </div>
    </div>
  );
};
