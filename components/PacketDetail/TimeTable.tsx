import { styles } from "@/constant";
import countur from "@/public/countur.svg";
import Table from "./Table";
import Image from "next/image";

const TimeTable = ({
  schedule,
  morningSchedule,
  afternoonSchedule,
  timeTable,
}: any) => {
  return (
    <section
      className={`${styles.flexCenter} bg-[#39393B] xl:justify-end `}
      style={{ backgroundImage: `url(${countur.src})` }}
    >
      <div className={`${styles.padding} xl:w-1/2`}>
        <h1 className={`${styles.heading1} text-white`}>Jadwal Kegiatan</h1>
        <p className={`${styles.paragraph} mt-5 text-white`}>{schedule}</p>
        <div className="gap-20 md:flex">
          <div className="mt-5">
            <p className={`${styles.paragraph} font-semibold text-white`}>
              Jadwal Pagi
            </p>
            <div className="mt-3 flex gap-3">
              {morningSchedule.map((time: any, index: any) => (
                <div
                  key={index}
                  className="flex w-fit flex-col items-center justify-center rounded-full bg-[#78A081] p-3"
                >
                  <Image src={time.icon} alt="time" />
                  <p className="text-xs font-extrabold text-white">
                    {time.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className={`${styles.paragraph} font-semibold text-white`}>
              Jadwal Siang
            </p>
            <div className="mt-3 flex gap-3">
              {afternoonSchedule.map((time: any, index: any) => (
                <div
                  key={index}
                  className="flex w-fit flex-col items-center justify-center rounded-full bg-[#D76C42] p-3"
                >
                  <Image src={time.icon} alt="time" />
                  <p className="text-xs font-extrabold text-white">
                    {time.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className={`${styles.paragraph} mt-10 text-white`}>
          Untuk gambaran itinerary kegiatan pengarungan pagi seperti berikut:
        </p>
        <div className="mt-5">
          <Table data={[...timeTable]} />
        </div>
      </div>
    </section>
  );
};

export default TimeTable;
