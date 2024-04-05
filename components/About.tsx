import { about, socialMedia, styles } from "@/constant";
import Image from "next/image";
import React from "react";
import aboutRafting from "@/public/aboutRafting.webp";

const About = () => {
  return (
    <section id="tentang" className={`${styles.flexCenter} relative`}>
      <div
        className={`${styles.boxWidth} ${styles.padding} flex flex-col items-center gap-4 md:flex-row-reverse`}
      >
        <div>
          <Image
            src={aboutRafting}
            alt="rafting"
            width={4500}
            className="shadow-xl md:shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-4 xl:gap-8">
          <h1 className={`${styles.heading1}`}>{about.title}</h1>
          <p className={`${styles.paragraph}`}>{about.content}</p>
          <h3 className="text-xl font-extrabold xl:text-3xl">
            Temukan Kami di:
          </h3>
          <div className="flex gap-2">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-2 transition-all hover:bg-slate-900"
              >
                <Image src={social.icon} alt={social.id} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
