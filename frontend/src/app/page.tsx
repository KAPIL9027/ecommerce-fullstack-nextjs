import CardSwiper from "@/components/organisms/CardSwiper";
import HeroBanner from "@/components/organisms/HeroBanner";
import { heroBannerData } from "../../utils";

export default function Home() {
  return (
    <div>
      <CardSwiper>
        {heroBannerData.map((heroBanner) => {
          return <HeroBanner {...heroBanner} />;
        })}
      </CardSwiper>
    </div>
  );
}
