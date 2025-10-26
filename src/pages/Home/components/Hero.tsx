import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[478px] w-full overflow-hidden sm:h-[500px] md:mt-[-22px] lg:h-[630px]"
      role="banner"
      aria-label="Hero — একাডেমিক থেকে এডমিশন"
    >
      {/* Background image */}
      <img
        src="https://res.cloudinary.com/dcsiypscn/image/upload/v1760626966/mobile_responsive_punqka_fi6akl.webp"
        alt="একাডেমিক থেকে এডমিশন প্রস্তুতি নাও দেশ সেরা শিক্ষক ও প্রযুক্তির সাথে"
        loading="eager"
        className="absolute left-0 top-0 h-full w-full object-cover object-center md:object-bottom z-0"
      />

      {/* dark mode if(dark===true){} */}
      {/* Gradient overlay (visible, above image but below text) */}
      {/* <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/40 z-[1]"
  ></div> */}

      {/* Content */}
      <div className="relative z-[2] mx-auto w-full max-w-[1270px] px-4 sm:px-6 lg:h-full lg:px-8">
        <div className="grid w-full grid-cols-12 lg:h-full">
          <div className="col-span-12 pt-[60px] md:col-span-7 md:pt-[90px] lg:pt-[120px] text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-baloo-da font-bold leading-tight">
              শুরুটা হোক শেখাশিখির সাথে -
            </h1>

            <p className="pt-2 font-baloo-da text-lg">
              নিজেকে এক ধাপ এগিয়ে নাও আজ থেকেই!
            </p>

            {/* Buttons */}
            <div className="mt-[32px] flex flex-col sm:flex-row gap-3">
              <button
                onClick={()=>navigate("/courses/all")}
                type="button"
                className="bg-[#CF278D] text-white px-8 py-[14px] rounded-[12px] font-bangla hover:bg-[#b61c78] transition w-full sm:w-auto"
              >
                একাডেমিক প্রোগ্রাম দেখো
              </button>

              <button
                type="button"
                className="group border border-[#CF278D] text-[#CF278D] px-8 py-[14px] rounded-[12px] font-bangla hover:bg-[#CF278D] hover:text-white transition w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5 fill-[#CF278D] stroke-[#CF278D] group-hover:fill-white group-hover:stroke-white transition"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M2.375 16.8901V3.10928L9.44012 10L2.375 16.8901Z" />
                  <path d="M11.1403 8.36792L5.4534 2.93013L12.6699 6.90597L11.1403 8.36792Z" />
                  <path d="M12.67 13.0939L5.45358 17.07L11.1403 11.6313L12.67 13.0939Z" />
                  <path d="M12.8469 9.99982L14.8356 8.09702L17.3122 9.46097C17.7292 9.6917 17.7292 10.3082 17.3124 10.5387L14.8356 11.9017L12.8469 9.99982Z" />
                </svg>
                শিখতে শুরু করো
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
