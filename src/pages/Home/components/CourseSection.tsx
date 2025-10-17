import { ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    img: "/icons/learning-path/cls-6-8.svg",
    titleTop: "স্কুল",
    titleBottom: "ক্লাস 1 - 5",
    gradient: "radial-gradient(139.2% 154.14% at 104.39% 0%, #88e7fd 0%, #086478 100%)",
    hoverColor:"#88e7fd"
  },
  {
    id: 2,
    img: "/icons/learning-path/cls-9-12.svg",
    titleTop: "স্কুল",
    titleBottom: "ক্লাস ৬ - ৮",
    gradient: "radial-gradient(143.14% 158.2% at 104.39% 0%, #a788fd 0%, #250878 100%)",
    hoverColor:"#a788fd"
  },
  {
    id: 3,
    img: "/icons/learning-path/cls-12-plus.svg",
    titleTop: "একাডেমিক",
    titleBottom: "ক্লাস ৯ - ১২",
    gradient: "radial-gradient(132.27% 144.56% at 104.39% 0%, #cd3a91 0%, #51176f 100%)",
    hoverColor:"#cd3a91"
  },
];

const CourseSection = () => {
  return (
    <section className="max-w-[1260px] mx-auto px-4 py-10">
      {/* Title */}
      <div className="text-center mb-10 px-2 md:px-0">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
         প্রাথমিক ও মাধ্যমিকের পড়ালেখা এবং পরীক্ষা প্রস্তুতির পূর্ণাঙ্গ প্রোগ্রাম
        </h2>
        <h3 className="mt-2 text-sm md:text-base text-gray-700">
          বছরজুড়ে লাইভ ক্লাস, লাইভ এক্সাম, ক্লাস নোট, অ্যানিমেটেড ভিডিও-তে A+ প্রস্তুতি নাও
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:gap-12 md:grid-cols-3">
        {courses.map((c) => (
          <article
            key={c.id}
            className={`relative flex cursor-pointer flex-row items-center justify-between rounded-2xl p-4 md:flex-col md:items-center md:p-6 shadow-lg transition-transform duration-300 hover:bg-[${c.hoverColor}]`}
            style={{ background: c.gradient }}
          >
            {/* Image and Text */}
            <div className="flex flex-row items-center gap-3 md:flex-col md:gap-4">
              <img
                src={c.img}
                alt={c.titleTop}
                className="h-8 w-8 md:h-20 md:w-20 object-contain"
              />
              <div className="flex flex-col items-start md:items-center">
                <h4 className="text-lg md:text-2xl font-semibold text-white">{c.titleTop}</h4>
                <p className="text-sm md:text-base font-semibold text-white">{c.titleBottom}</p>
              </div>
            </div>

            {/* Mobile arrow */}
            <button
              aria-label={`Open ${c.titleBottom}`}
              className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/20"
            >
              <ArrowRight size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
