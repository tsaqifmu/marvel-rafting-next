import Image from "next/image";

export const ButtonNav = () => (
  <a href="https://wa.link/4190xr" target="_blank" rel="noreferrer">
    <button className="flex items-center gap-x-2 rounded-3xl bg-greenWA px-6 py-2 shadow-lg">
      <Image
        src={"/wa.svg"}
        width={24}
        height={24}
        alt="Reservatin Button"
        className="h-[24px] w-[24px]"
      />
      <h3 className="text-base font-semibold text-white">Reservasi Sekarang</h3>
    </button>
  </a>
);

export const ButtonCard = () => (
  <a href="https://wa.link/4190xr" target="_blank" rel="noreferrer">
    <button className="flex w-full items-center justify-center gap-x-2 rounded-3xl bg-greenWA px-6 py-2 shadow-lg">
      <Image
        src={"/wa.svg"}
        width={24}
        height={24}
        alt="Reservatin Button"
        className="h-[24px] w-[24px]"
      />
      <h3 className="text-base font-semibold text-white">Reservasi Sekarang</h3>
    </button>
  </a>
);

export const ButtonHero = () => (
  <a href="https://wa.link/4190xr" target="_blank" rel="noreferrer">
    <button className="flex w-fit items-center gap-x-2 rounded-3xl border-4 border-white px-6 py-2 shadow-lg transition-all hover:border-greenWA hover:bg-greenWA ">
      <Image
        src={"/wa.svg"}
        alt="Reservatin Button"
        width={20}
        height={24}
        className="h-[20px] w-[20px]"
      />
      <h3 className="text-base font-semibold text-white">Reservasi Sekarang</h3>
    </button>
  </a>
);
