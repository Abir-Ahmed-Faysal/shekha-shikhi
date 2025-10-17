
import ShikhoProgramSection from "./components/ShikhoProgramTabs";
import CourseSection from "./components/CourseSection";
import Hero from "./components/Hero";
import CuroselSection from "./components/CuroselSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CourseSection></CourseSection>
      <ShikhoProgramSection></ShikhoProgramSection>
      <CuroselSection></CuroselSection>
    </div>
  );
};

export default Home;
