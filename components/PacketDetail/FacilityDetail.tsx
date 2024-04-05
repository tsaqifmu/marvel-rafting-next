import { styles } from "@/constant";
import Image from "next/image";
import React from "react";

function FacilityDetail({includes, excludes}:any) {
  return (
    <section className={`${styles.flexCenter} xl:justify-end`}>
      <div className={` ${styles.padding} xl:w-1/2`}>
        <h1 className={`${styles.heading1}`}>Fasilitas</h1>
        <div>
          <h2 className="my-5 text-xl font-bold">
            Paket <span className="text-greenWA">termasuk</span> fasilitas
          </h2>
          <div className="ml-5 flex flex-col gap-5 ">
            {includes.map((include:any, index:any) => (
              <div key={index} className="flex gap-2">
                <Image src={include.icon} alt="check" className="w-5" />
                <p className={`${styles.paragraph}`}>{include.item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="my-5 text-xl font-bold">
            Paket <span className="text-red-600">belum termasuk</span> fasilitas
          </h2>
          <div className="ml-5 flex flex-col gap-5 ">
            {excludes.map((exclude:any, index:any) => (
              <div key={index} className="flex gap-2">
                <Image src={exclude.icon} alt="ignore" className="w-5" />
                <p className={`${styles.paragraph}`}>{exclude.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilityDetail;
