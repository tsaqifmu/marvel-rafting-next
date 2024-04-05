import { styles } from "@/constant";
import Image from "next/image";
import React from "react";
import { ButtonCard } from "../ButtonReservation";

const CardDetail = ({
  img,
  packet,
  title,
  distance,
  distanceIcon,
  difficulty,
  difficultyIcon,
  appropriate,
  appropriateIcon,
  price,
  start,
  finish,
  finishIcon,
}: any) => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding} xl:relative xl:-left-96`}
    >
      <div
        className={`${styles.boxWidth} group h-fit shadow-2xl md:flex md:w-fit md:px-0 md:py-0`}
      >
        <Image
          src={img}
          alt="packet image"
          height={450}
          className="shadow-xl md:h-[450px]"
        />
        <div className="bg-white p-5">
          <h3 className="w-fit rounded-full bg-gray px-4 py-2 text-sm font-bold text-white xl:text-lg">
            {packet}
          </h3>
          <h1 className="text-2xl font-bold">{title}</h1>
          <ul className="my-2 flex flex-col gap-3 py-2">
            <li className="flex gap-3 text-sm font-medium">
              <Image src={distanceIcon} alt="distance icon" />
              <h4>{distance}</h4>
            </li>
            <li className="flex gap-3 text-sm font-medium">
              <Image src={difficultyIcon} alt="duration icon" />
              <h4>{difficulty}</h4>
            </li>
            <li className="flex gap-3 text-sm font-medium">
              <Image src={appropriateIcon} alt="appropriate icon" />
              <h4>{appropriate}</h4>
            </li>
            <li className="flex gap-3 text-sm font-medium">
              <Image src={finishIcon} alt="finish icon" />
              <div>
                <h4>{start}</h4>
                <h4>{finish}</h4>
              </div>
            </li>
          </ul>
          <div>
            <h2 className="text-xl font-bold text-greenWA">{price}</h2>
            <p className="text-xs font-medium text-gray">
              Untuk maksimal 6 peserta/boat <br />+ 1 orang pemandu / river
              guide.
            </p>
          </div>
          <div className="mt-7 transition-all group-hover:-translate-y-1">
            <ButtonCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetail;
