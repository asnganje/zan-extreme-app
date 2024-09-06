import Dashboard from "@/components/dashboard/Dashboard";
import ImagesCarousel from "@/components/LandingContentArea/ImagesCarousel";
import LandingIntro from "@/components/LandingContentArea/LandingIntro";

function Landing() {
  return (
    <div>
      <ImagesCarousel />
      <LandingIntro />
      <Dashboard />
    </div>
  );
}
export default Landing;
