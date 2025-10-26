import { Link } from "react-router";
import type { ICourse } from "../../../types/ICourse";

interface SingleCourseProps {
  course: ICourse;
}

const SingleClassCourse = ({ course }: SingleCourseProps) => {
  return (
    <div className="border rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-200">
      {/* Icon & Title */}
      <div className="flex items-center gap-3 mb-3">
        {course.icon && (
          <img
            src={course.icon}
            alt={course.name}
            className="w-10 h-10 object-contain"
          />
        )}
        <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {course.description}
      </p>

      {/* Topics Info */}
      <p className="text-xs text-gray-500 mb-4">
        মোট টপিক: <span className="font-medium">{course.topicsCount}</span>
      </p>

      {/* View Details Button */}
      <Link
        to={`/courses/${course._id}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
      >
        বিস্তারিত দেখুন
      </Link>
    </div>
  );
};

export default SingleClassCourse;
