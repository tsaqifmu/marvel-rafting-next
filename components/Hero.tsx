import { styles } from "@/constant";
import { ButtonHero, ButtonNav } from "./ButtonReservation";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles.flexCenter} relative pt-[73px]`}>
      <div
        className={`${styles.boxWidth} ${styles.paddingX} absolute top-1/2 z-10 flex -translate-y-1/4 flex-col gap-1 text-white lg:gap-4`}
      >
        <h3 className="text-base font-normal md:text-lg lg:text-2xl">
          Marvel Rafting Magelang
        </h3>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
          Pengalaman <br /> terbaik rafting <br /> bersama kami.
        </h1>
        <p className={`${styles.paragraph} w-64 lg:w-1/2 xl:w-2/5`}>
          Siap-siap menjalani pengalaman seru seumur hidup dengan Marvel Rafting
          Magelang. TIm pemandu ahli kami siapa memabawa anda menjalajahi
          keindahan sungai di Jawa Tengah yang mengagumkan.
        </p>
        <ButtonHero />
      </div>
      <Image
        src={"/hero.webp"}
        alt="Hero Image"
        width={1920}
        height={1080}
        className="object h-[600px] object-cover brightness-50 sm:object-center lg:h-[700px] lg:w-full"
      />
    </section>
  );
};

export default Hero;
