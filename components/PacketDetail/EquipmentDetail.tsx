import { styles } from "@/constant";
import Image from "next/image";
import React from "react";

const EquipmentDetail = ({
  equipment,
  brings,
  bringIcon,
  avoids,
  avoidIcon,
}: any) => {
  return (
    <section className={`${styles.flexCenter} xl:justify-end`}>
      <div className={`${styles.padding} xl:w-1/2`}>
        <h1 className={`${styles.heading1}`}>Perlengkapan</h1>
        <p className={`${styles.paragraph} mt-5`}>{equipment}</p>
        <div>
          <div className="flex">
            <Image src={bringIcon} alt="check" />
            <h2 className="my-5 ml-2 text-xl font-bold">
              Peralatan yang harus dibawa
            </h2>
          </div>
          <div className="ml-5 flex flex-col gap-5 ">
            {brings.map((bring: any, index: any) => (
              <div key={index} className="flex gap-2">
                <Image src={bring.icon} alt="check" className="w-5" />
                <p className={`${styles.paragraph}`}>{bring.item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex">
            <Image src={avoidIcon} alt="ignore" />
            <h2 className="my-5 ml-2 text-xl font-bold">
              Peralatan yang jangan dibawa
            </h2>
          </div>
          <div className="ml-5 flex flex-col gap-5 ">
            {avoids.map((avoid: any, index: any) => (
              <div key={index} className="flex gap-2">
                <Image src={avoid.icon} alt="ignore" className="w-5" />
                <p className={`${styles.paragraph}`}>{avoid.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentDetail;
