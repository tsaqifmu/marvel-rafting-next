import { packetLinks, styles } from "@/constant";
import React from "react";
import countur from "@/public/countur.svg";
import CardPackets from "./CardPackets";

const Packet = () => {
  return (
    <section
      id="paket"
      className={`${styles.flexCenter} bg-[#39393B]`}
      style={{ backgroundImage: `url(${countur.src})` }}
    >
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} ${styles.padding} flex-col text-white`}
      >
        <h1 className={`${styles.heading1}`}>Paket Rafting</h1>
        <section
          className={`${styles.flexCenter} mt-5 flex-col gap-5 md:mt-12 md:flex-row md:flex-wrap xl:gap-7`}
        >
          {packetLinks.map((packet) => (
            <CardPackets key={packet.id} {...packet} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Packet;
