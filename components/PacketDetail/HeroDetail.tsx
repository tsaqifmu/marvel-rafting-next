import { styles } from "@/constant";
import Image from "next/image";
import countur from "@/public/countur.svg";

const HeroDetail = ({ img, packet, title, resume }: any) => {
  return (
    <section
      className={`${styles.flexCenter} bg-[#39393B] pt-[70px]`}
      style={{ backgroundImage: `url(${countur.src})` }}
    >
      <div className={`${styles.boxWidth} ${styles.padding}`}>
        <div className="flex flex-col gap-5 md:flex-row-reverse">
          <Image
            src={img}
            alt="Hero image"
            className="aspect-square object-cover object-top md:w-1/2"
          />
          <div className="flex flex-col gap-5 text-white">
            <h3 className="w-fit rounded-full bg-slate-700 px-4 py-2 text-sm font-bold xl:text-lg">
              {packet}
            </h3>
            <h1 className={`${styles.heading1} font-extrabols text-4xl`}>
              Paket Rafting <br />
              {title}
            </h1>
            <p className={`${styles.paragraph} text-base font-normal`}>
              {resume}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDetail;
