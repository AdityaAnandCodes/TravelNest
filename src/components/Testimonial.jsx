import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../constants"; // Assuming your testimonials are in a constants file
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials",
        markers: false,
        start: "top center",
        end: "190% bottom",
        toggleActions: "play pause reverse reverse",
        scrub: 4,
      },
    });
    tl.to(".testsec", {
      x: -3000,
    });
  });

  return (
    <section id='testimonials' className="testimonials px-5 p-10">
      <div className="text-3xl font-bold mb-6 text-center text-gray-800">What Our Travelers Say</div>
      <div className="flex gap-10 justify-start p-6 testsec">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            role={testimonial.role}
            testimonial={testimonial.testimonial}
            rating={testimonial.rating}  // Pass rating here
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
