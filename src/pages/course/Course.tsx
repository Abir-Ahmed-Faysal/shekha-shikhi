import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import SingleClassCourse from "./components/SingleCourse";
import { GetData } from "../../lib/api/api";
import type { ICourse } from "../../types/ICourse";

/** Navigation options */
export type INavOption = {
  id: string;
  label: string;
  path: string;
};

const navOption: INavOption[] = [
  { id: "1", label: "আমার কোর্সসমূহ", path: "/courses/my-course" },
  { id: "2", label: "রুটিন", path: "/courses/routine" },
  { id: "3", label: "লার্নিং রিপোর্ট", path: "/courses/learning-report" },
  { id: "4", label: "সাবস্ক্রিপশন", path: "/courses/subscription" },
];

/**  Course component */
export const CourseFn = () => {
  const { category } = useParams();

  const { data, isLoading, error } = useQuery<ICourse[], Error>({
    queryKey: ["courses", category],
    queryFn: () => GetData<ICourse[]>(`/api/grades/${category || "all"}`),
  });

  return (
    <div className="space-y-8 px-4 md:px-8">
      {/* 🔹 Navigation */}
      <nav className="w-full border-b pb-2">
        <ul className="flex flex-wrap gap-4 text-gray-700">
          {navOption.map(({ id, label, path }) => (
            <li key={id}>
              <Link
                to={path}
                className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 Courses grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[250px]">
        {/* Loading */}
        {isLoading && (
          <p className="col-span-full text-center py-4 text-gray-500">
            Loading courses...
          </p>
        )}

        {/* Error */}
        {error && (
          <p className="col-span-full text-center text-red-500 py-4">
            {error.message || "Failed to load courses"}
          </p>
        )}

        {/* No data found */}
        {!isLoading && !error && data?.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m9 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="mt-3 text-gray-500">No courses found for this category.</p>
          </div>
        )}

        {/* Data show */}
        {!isLoading &&
          !error &&
          data?.map((singleCls) => (
            <SingleClassCourse key={singleCls._id} course={singleCls} />
          ))}
      </div>
    </div>
  );
};
