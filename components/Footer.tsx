import { navLinks, socialMedia, styles } from "@/constant";
import countur from "@/public/countur.svg";
import marvelFooter from "@/public/marvelFooter.png";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} bg-[#39393B] xl:absolute xl:h-[480px]`}
      style={{ backgroundImage: `url(${countur.src})` }}
    >
      <div className={`${styles.boxWidthNavFoot} ${styles.padding} `}>
        <nav className="flex flex-col gap-8 border-b-4 border-white pb-5 md:flex-row md:justify-between">
          <div className="w-40 lg:w-60">
            <Image src={marvelFooter} alt="marvel" />
            <div className="mt-3 flex gap-2 lg:justify-between lg:gap-0">
              {socialMedia.map((social) => (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 transition-all hover:bg-white"
                >
                  <Image src={social.icon} alt={social.id} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:justify-end xl:gap-14">
            <ul className="flex flex-col gap-4 whitespace-nowrap">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="cursor-pointer text-[16px] text-sm font-medium text-white md:text-lg"
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d296.0616310848299!2d110.23295680306956!3d-7.612188799583454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8d1dd43fceed%3A0x353252292c4e9f2f!2sMarvel%20Adventure%20Magelang!5e0!3m2!1sen!2sid!4v1689002304250!5m2!1sen!2sid"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-square w-3/5 md:w-2/3"
            />
          </div>
        </nav>
        <p className="mt-5 text-center text-xs font-medium text-white md:text-base xl:text-right xl:text-lg">
          {new Date().getFullYear()} marvelmagelang.com All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
