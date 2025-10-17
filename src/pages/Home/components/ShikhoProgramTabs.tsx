import { useState } from "react";

const PROGRAMS = [
  {
    id: "animated-video",
    title: "অ্যানিমেটেড ভিডিও",
    icon: "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245400/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/animated_video_nccr7e",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1671090186/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Animeted_Video_841x656_qgv12n",
  },
  {
    id: "practice-mcq",
    title: "প্র্যাকটিস MCQ টেস্ট",
    icon: "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245364/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/practice_mcq_test_bmayhq",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221272/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%95%E0%A6%9F%E0%A6%BF%E0%A6%B8_MCQ_%E0%A6%9F%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F_841x656_gt6s6z",
  },
  {
    id: "live-mcq",
    title: "লাইভ MCQ টেস্ট",
    icon: "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245380/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/live_mcq_test_kyutum",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Live_Exam_841x656_om8gg0",
  },
  {
    id: "smart-note",
    title: "স্মার্ট নোট",
    icon: "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245321/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%203/smart_note_qapccx",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Smart_Note_841x656_ijvm1o",
  },
  {
    id: "report-card",
    title: "রিপোর্ট কার্ড",
    icon: "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1748245348/Shikho%20Website%20V3/Homepage/Feature%20Icon%20-%20Secion%20-3/report_card_mojfos",
    image:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/v1670221271/Shikho%20Website%20V3/Homepage/Feature%20Image%20Carousel/Website_Banner_Report_Card_841x656_weoyb8",
  },
];

export default function ShikhoProgramSection() {
  const [active, setActive] = useState(0);
  const current = PROGRAMS[active];

  return (
<section
  className="w-full mx-auto px-4 py-16 bg-no-repeat "
  style={{
    backgroundColor: "#1A213A",
    backgroundImage:
      "url('https://i.ibb.co.com/tpFJRtYr/Chat-GPT-Image-Oct-17-2025-03-07-30-PM-min.png'), url('https://i.ibb.co.com/tpFJRtYr/Chat-GPT-Image-Oct-17-2025-03-07-30-PM-min.png')",
    backgroundPosition: " top right, bottom left",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundSize: "350px, 550px", 
  }}
>




      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl text-white md:text-3xl font-bold  mb-2">
          Shikho একাডেমিক প্রোগ্রামে যা যা থাকছে
        </h2>
        <h3 className="text-white md:text-lg">
          ক্লাসের পড়ায় ও বোর্ড পরীক্ষার প্রস্তুতিতে সবার চেয়ে এগিয়ে রাখতে এই
          প্রোগ্রামে রয়েছে —
        </h3>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Tabs */}
        <div className="w-full hidden md:w-1/3 md:flex flex-wrap md:flex-col gap-3">
          {PROGRAMS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActive(idx)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all w-full ${
                active === idx
                  ? "bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm"
                  : "bg-white hover:bg-gray-50 text-gray-700 border border-transparent"
              }`}
            >
              <img src={p.icon} alt={p.title} className="w-10 h-10" />
              <span className="text-sm md:text-base font-medium">
                {p.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-2/3 flex justify-center">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full max-w-3xl rounded-2xl shadow-lg object-cover h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}
