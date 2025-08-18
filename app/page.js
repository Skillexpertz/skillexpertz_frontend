import ContactHomepage from "./components/Contact/ContactHomepage";
import Hero from "./components/Hero";
import Homepage_Courses from "./components/Homepage_Courses";
import Pricing from "./components/Pricing/pricing";


export default function Home() {
  return (
    <div>
      <Hero />
      <Homepage_Courses />
      <ContactHomepage />
      <Pricing />
    </div>
  );
}
