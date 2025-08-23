import SeminarButton from "./components/Buttons/SeminarButton";
import ContactHomepage from "./components/Contact/ContactHomepage";
import Hero from "./components/Hero";
import Homepage_Courses from "./components/Homepage_Courses";
import ImageSliderHome from "./components/shared/ImageSliderHome";
import Testimonial from "./components/Testimonials";



export default function Home() {
  return (
    <div>
      <Hero />
      <Homepage_Courses />
      <ContactHomepage />
      <ImageSliderHome />
      <SeminarButton seminarUrl="https://example.com/seminar" />
      <Testimonial />
    </div>
  );
}
