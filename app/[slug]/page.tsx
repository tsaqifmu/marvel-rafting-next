"use client";

import Footer from "@/components/Footer";
import CardDetail from "@/components/PacketDetail/CardDetail";
import ContentDetail from "@/components/PacketDetail/ContentDetail";
import EquipmentDetail from "@/components/PacketDetail/EquipmentDetail";
import FacilityDetail from "@/components/PacketDetail/FacilityDetail";
import HeroDetail from "@/components/PacketDetail/HeroDetail";
import TimeTable from "@/components/PacketDetail/TimeTable";
import PageWrapper from "@/components/PageWrapper";
import { packetDetail } from "@/constant/index";
import { useParams } from "next/navigation";

const PageDetail = () => {
  const params = useParams<{ slug: string }>();
  const packet = packetDetail.find((p) => p.id === params.slug);

  return (
    <PageWrapper>
      <HeroDetail {...packet} />
      <div className="xl:sticky xl:top-24">
        <CardDetail {...packet} />
      </div>
      <ContentDetail {...packet} />
      <FacilityDetail {...packet} />
      <TimeTable {...packet} />
      <EquipmentDetail {...packet} />

      <Footer />
    </PageWrapper>
  );
};

export default PageDetail;
