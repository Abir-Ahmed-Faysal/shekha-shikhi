import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// === Video Data ===
const videos = [
  {
    id: 1,
    title: "8.1 - আলোর প্রকৃতি",
    subject: "SSC পদার্থবিজ্ঞান",
    classType: "এস.এস.সি",
    color: "#4757D0",
    thumbnail:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto:good/f_auto/c_scale,w_288/v1670820835/Shikho%20Website%20V3/Homepage/Animated%20Videos/einstine_zqbh7a",
  },
  {
    id: 2,
    title: "1.1 - জীবাশ্ম জ্বালানি",
    subject: "SSC রসায়ন",
    classType: "এস.এস.সি",
    color: "#21A4EE",
    thumbnail:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto:good/f_auto/c_scale,w_288/v1670820914/Shikho%20Website%20V3/Homepage/Animated%20Videos/fossil_fuel_ihfnpb",
  },
  {
    id: 3,
    title: "2.8 - ঘাস ফড়িং এর মুখোপাঙ্গ, বক্ষ, উদর",
    subject: "HSC জীববিজ্ঞান ২য় পত্র",
    classType: "এইচ.এস.সি",
    color: "#29B578",
    thumbnail:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto:good/f_auto/c_scale,w_288/v1670821302/Shikho%20Website%20V3/Homepage/Animated%20Videos/grasshopper_pviqbl",
  },
  {
    id: 4,
    title: "2.13 - নেটওয়ার্ক টপোলজি পর্ব ২",
    subject: "HSC তথ্য ও যোগাযোগ প্রযুক্তি",
    classType: "এইচ.এস.সি",
    color: "#2FBDA5",
    thumbnail:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto:good/f_auto/c_scale,w_288/v1642496122/woznadhxwgfpmaamebgz",
  },
  {
    id: 5,
    title: "2.13 - নেটওয়ার্ক টপোলজি পর্ব ২",
    subject: "HSC তথ্য ও যোগাযোগ প্রযুক্তি",
    classType: "এইচ.এস.সি",
    color: "#2FBDA5",
    thumbnail:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto:good/f_auto/c_scale,w_288/v1642496122/woznadhxwgfpmaamebgz",
  },
  {
    id: 6,
    title: "2.13 - নেটওয়ার্ক টপোলজি পর্ব ২",
    subject: "HSC তথ্য ও যোগাযোগ প্রযুক্তি",
    classType: "এইচ.এস.সি",
    color: "#2FBDA5",
    thumbnail:
      "https://res.cloudinary.com/cross-border-education-technologies-pte-ltd/image/upload/q_auto:good/f_auto/c_scale,w_288/v1642496122/woznadhxwgfpmaamebgz",
  },
];

const tabs = ["সকল ক্লাস", "এস.এস.সি", "এইচ.এস.সি"];

export default function AnimatedLessonSection() {
  const [activeTab, setActiveTab] = useState("সকল ক্লাস");

  const filteredVideos =
    activeTab === "সকল ক্লাস"
      ? videos
      : videos.filter((v) => v.classType === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ===== Section Header ===== */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            দারুণ সব অ্যানিমেটেড উদাহরণের ভিডিও লেসনে শেখা হবে আরও সহজ
          </h2>
          <p className="text-gray-600">
            সেরা মেন্টরদের তৈরি চমৎকার সব অ্যানিমেটেড উদাহরণ দিয়ে সাজানো ভিডিও
            লেসন দেখে সহজেই শিখে ক্লাসে-পরীক্ষায় এগিয়ে যাও
          </p>
        </div>

        {/* ===== Tabs ===== */}
        <div className="flex justify-center mb-10 space-x-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#5468FF] text-white border-[#5468FF]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ===== Swiper Carousel ===== */}
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.4}
          loop={true}
          
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper pb-10 [&_.swiper-pagination]:bottom-2 [&_.swiper-pagination]:top-auto [&_.swiper-pagination]:!absolute"

          
        >
          {filteredVideos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-44 w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded">
                    {video.classType}
                  </span>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <span className="text-sm flex items-center gap-2 mb-2">
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: video.color }}
                    ></span>
                    {video.subject}
                  </span>
                  <h3
                    className="text-gray-900 text-sm font-semibold line-clamp-1"
                    title={video.title}
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
