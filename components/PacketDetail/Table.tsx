import React from "react";

const Table = (prop: any) => {
  return (
    <table className="overflow-hidden rounded-lg">
      <thead className=" bg-[#78A081] text-white ">
        <tr className="">
          <th>Waktu</th>
          <th>Kegiatan</th>
        </tr>
      </thead>
      <tbody className="text-xs font-semibold">
        {prop.data.map((p: any, index: any) => {
          return (
            <tr key={index} className=" odd:bg-[#F3EDE4] even:bg-white">
              <td className="whitespace-nowrap px-4 py-2">{p.time}</td>
              <td>{p.activity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
