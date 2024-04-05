import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardPackets = ({
  id,
  packet,
  title,
  distance,
  duration,
  detail,
  img,
  arrow,
  timeIcon,
  mapIcon,
}: any) => {
  return (
    <Link
      href={`/${id}`}
      className="group relative w-full max-w-[350px] cursor-pointer transition-all md:w-[45%] xl:max-w-[400px] xl:hover:-translate-y-2"
    >
      <article className="absolute z-10 flex h-full w-full flex-col justify-between px-4 py-7">
        <h3 className="w-fit rounded-full bg-slate-700 px-4 py-2 text-sm font-bold transition-all group-hover:bg-greenWA xl:text-lg">
          {packet}
        </h3>
        <div>
          <h1 className="mb-5 text-2xl font-bold xl:text-4xl">{title}</h1>
          <div className="ml-4 flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <Image src={timeIcon} alt="time icon" />
                <p className="text-sm font-medium xl:text-lg">{distance}</p>
              </div>
              <div className="flex gap-3">
                <Image src={mapIcon} alt="map icon" />
                <p className="text-sm font-medium xl:text-lg">{duration}</p>
              </div>
            </div>
            <button className="flex h-fit items-center gap-2 rounded-full border-[3px] border-white px-4 py-1 transition-all group-hover:border-greenWA group-hover:bg-greenWA">
              <p className="text-sm font-bold xl:text-lg">{detail}</p>
              <Image src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </article>
      <Image
        key={id}
        src={img}
        alt={`packet ${id}`}
        className="brightness-50"
      />
    </Link>
  );
};

export default CardPackets;
