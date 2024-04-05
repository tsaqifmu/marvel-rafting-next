import { styles } from "@/constant";
import React from "react";

const ContentDetail = ({ title, content }: any) => {
  return (
    <section className={`${styles.flexCenter} xl:-mt-[600px] xl:justify-end`}>
      <div className={` ${styles.padding} xl:w-1/2 `}>
        <article className="xl:max-w-[700px]">
          <h1 className={`${styles.heading1}`}>{title}</h1>
          <section>
            {content.map((paraph: any, index: any) => (
              <p key={index} className={`${styles.paragraph} mt-5`}>
                {paraph.p}
              </p>
            ))}
          </section>
        </article>
      </div>
    </section>
  );
};

export default ContentDetail;
