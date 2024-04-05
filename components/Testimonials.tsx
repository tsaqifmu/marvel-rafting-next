import { styles, testimonials } from "@/constant";
import React from "react";
import CardTestimonials from "./CardTestimonials";

const Testimonials = () => {
  return (
    <section id="testimoni" className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} ${styles.padding} px-5`}>
        <h1 className={`${styles.heading1} text-center`}>Testioni</h1>
        <section
          className={`${styles.flexCenter} mt-5 flex-wrap gap-10 md:mt-12`}
        >
          {testimonials.map((testi) => (
            <CardTestimonials key={testi.id} {...testi} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
