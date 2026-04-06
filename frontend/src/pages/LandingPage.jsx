import { LandingHero, Features, Process, FinalCTA } from "../components";

const LandingPage = () => {
  return (
    <div className="w-full ">
      <LandingHero />
      <Features />
      <Process />
      <FinalCTA />
    </div>
  );
};

export default LandingPage;