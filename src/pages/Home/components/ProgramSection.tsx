import { useState, useRef, useEffect, useCallback } from "react";

interface Program {
  id: string;
  title: string;
  icon: string;
  image: string;
}

const PROGRAMS: Program[] = [
  {
    id: "animated-video",
    title: "অ্যানিমেটেড ভিডিও",
    icon:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245400/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/animated_video_nccr7e",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1671090186/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Animeted_Video_841x656_qgv12n",
  },
  {
    id: "practice-mcq",
    title: "প্র্যাকটিস MCQ টেস্ট",
    icon:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245364/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/practice_mcq_test_bmayhq",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221272/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%9F%E0%A6%BF%E0%A6%B8_MCQ_%E0%A6%9F%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F_841x656_gt6s6z",
  },
  {
    id: "live-mcq",
    title: "লাইভ MCQ টেস্ট",
    icon:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245380/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/live_mcq_test_kyutum",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Live_Exam_841x656_om8gg0",
  },
  {
    id: "smart-note",
    title: "স্মার্ট নোট",
    icon:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245321/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/smart_note_qapccx",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Smart_Note_841x656_ijvm1o",
  },
  {
    id: "report-card",
    title: "রিপোর্ট কার্ড",
    icon:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245348/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%20-3/report_card_mojfos",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Report_Card_841x656_weoyb8",
  },
];

function ImageWithFallback({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [erred, setErred] = useState(false);
  const fallback =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='841' height='656'%3E%3Crect width='100%25' height='100%25' fill='%231A213A'/%3E%3C/svg%3E";

  return (
    <img
      src={erred ? fallback : src}
      alt={alt}
      loading="lazy"
      onError={() => setErred(true)}
      className={`w-full h-full object-cover block ${className}`}
    />
  );
}

export default function ProgramSection() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]); // ✅ fixed type
  const current = PROGRAMS[active];

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (["ArrowDown", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        setActive((s) => (s + 1) % PROGRAMS.length);
      } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
        e.preventDefault();
        setActive((s) => (s - 1 + PROGRAMS.length) % PROGRAMS.length);
      }
    },
    []
  );

  useEffect(() => {
    tabsRef.current = tabsRef.current.slice(0, PROGRAMS.length);
  }, []);

  return (
    <section
      className="w-full mx-auto px-4 py-12"
      style={{ backgroundColor: "#1A213A" }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
          Shikho একাডেমিক প্রোগ্রামে যা যা থাকছে
        </h2>
        <p className="text-white md:text-lg">
          ক্লাসের পড়ায় ও বোর্ড পরীক্ষার প্রস্তুতিতে সবার চেয়ে এগিয়ে রাখতে এই
          প্রোগ্রামে রয়েছে —
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Sidebar */}
        <aside
          className="hidden md:flex md:w-1/3 flex-col gap-3"
          role="tablist"
          aria-orientation="vertical"
        >
          {PROGRAMS.map((p, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  tabsRef.current[idx] = el;
                }} // ✅ Fixed callback ref
                onClick={() => setActive(idx)}
                onKeyDown={onKeyDown}
                className={`group flex items-center justify-between gap-3 p-3 rounded-xl text-left transition-all duration-300 transform ${
                  isActive
                    ? "bg-white border-2 border-red-500 text-red-600 shadow-md translate-x-1"
                    : "bg-white text-gray-700 hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={p.icon}
                    alt={`${p.title} icon`}
                    className="w-10 h-10 flex-shrink-0"
                  />
                  <span className="text-sm md:text-base font-medium">
                    {p.title}
                  </span>
                </div>

                <span
                  className={`text-red-500 text-lg transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 group-hover:opacity-80"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </aside>

        {/* Main Image Area */}
        <div className="w-full md:w-2/3">
          {/* Desktop Active Image */}
          <div className="hidden md:block w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg h-[420px] md:h-[520px] lg:h-[600px] bg-slate-800">
            <ImageWithFallback src={current.image} alt={current.title} />
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden w-full">
            <div className="w-full overflow-x-auto touch-pan-x -mx-4 px-4">
              <div className="flex gap-4 items-start snap-x snap-mandatory">
                {PROGRAMS.map((p) => (
                  <div
                    key={p.id}
                    className="min-w-[80%] sm:min-w-[70%] snap-start rounded-2xl overflow-hidden shadow-lg bg-slate-800"
                  >
                    <div className="flex items-center gap-3 px-3 py-2">
                      <img
                        src={p.icon}
                        alt={`${p.title} icon`}
                        className="w-8 h-8"
                      />
                      <h4 className="text-white font-medium text-sm">
                        {p.title}
                      </h4>
                    </div>
                    <div className="w-full h-[220px] sm:h-[280px]">
                      <ImageWithFallback src={p.image} alt={p.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
