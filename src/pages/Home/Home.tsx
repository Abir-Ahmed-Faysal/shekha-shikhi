import ProgramSection from "./components/ProgramSection";
import CourseSection from "./components/CourseSection";
import Hero from "./components/Hero";
import CuroselSection from "./components/CuroselSection";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CourseSection></CourseSection>
      <ProgramSection></ProgramSection>
      <CuroselSection></CuroselSection>
    </div>
  );
};

export default Home;
