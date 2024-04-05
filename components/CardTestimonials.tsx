import { styles } from "@/constant";
import Image from "next/image";
import React from "react";

const CardTestimonials = ({ id, icon, text, img, name }: any) => {
  return (
    <article
      key={id}
      className={`${styles.flexCenter} max-w-[320px] flex-col p-5 shadow-2xl`}
    >
      <Image src={icon} alt="icon" />
      <div className="flex h-52 items-center py-5">
        <p className={`${styles.paragraph} text-center`}>{text}</p>
      </div>
      <div className="border-t-2 border-t-black pb-3 pt-5">
        <Image
          src={img}
          alt={`testi ${name}`}
          className="h-[35px] w-[35px] rounded-full xl:h-[50px] xl:w-[50px]"
        />
      </div>
      <p className="text-xs font-medium md:text-base">{name}</p>
    </article>
  );
};

export default CardTestimonials;
