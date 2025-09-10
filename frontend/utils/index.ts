import { MediaAsset } from "@/types";

export const heroBannerData = [
  {
    assets: [
      {
        type: "desktop",
        src: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1521,c_limit/8679cbfc-7722-47e0-bb44-3be88c1ad933/nike-just-do-it.jpg",
      },
      {
        type: "mobile",
        src: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1521,c_limit/8679cbfc-7722-47e0-bb44-3be88c1ad933/nike-just-do-it.jpg",
      },
    ],
    type: "image",
    text: "<h3>CUT DIFFERENT</h3> <p>Anothere Grand Slam, same Carlos. Shop his top tennis picks and more now.</p>",
    cta: [
      {
        text: "Shop Carlos's Pick",
        redirectTo: "/alvaraz",
      },
      {
        text: "Shop Tennis",
        redirectTo: "/carlos",
      },
    ],
  },
  {
    assets: [
      {
        type: "desktop",
        src: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1521,c_limit/8679cbfc-7722-47e0-bb44-3be88c1ad933/nike-just-do-it.jpg",
      },
      {
        type: "mobile",
        src: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_585,c_limit/1139b142-be60-47ad-ad4a-734125af96f6/nike-just-do-it.jpg",
      },
    ],
    type: "image",
    text: "<h3>RETURN OF THE UNRETURNABLE</h3> <p>Aryna Sabalenka once again wins in New York.</p>",
    cta: [
      {
        text: "Shop Aryna's Pick",
        redirectTo: "/alvaraz",
      },
      {
        text: "Shop Tennis",
        redirectTo: "/carlos",
      },
    ],
  },
  {
    assets: [
      {
        type: "desktop",
        src: "https://res.cloudinary.com/dja3psq3t/video/upload/v1757384523/3764575867-preview.mp4",
      },
    ],
    type: "video",
    text: "<p>Only one way to find out.</p> <h3>JUST DO IT.</h3>",
    cta: [
      {
        text: "Shop",
        redirectTo: "/shop",
      },
      {
        text: "Watch",
        redirectTo: "/watch",
      },
    ],
  },
  {
    assets: [
      {
        type: "desktop",
        src: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1521,c_limit/8679cbfc-7722-47e0-bb44-3be88c1ad933/nike-just-do-it.jpg",
      },
      {
        type: "mobile",
        src: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1521,c_limit/8679cbfc-7722-47e0-bb44-3be88c1ad933/nike-just-do-it.jpg",
      },
    ],
    type: "image",
    text: "<h3>CUT DIFFERENT</h3> <p>Anothere Grand Slam, same Carlos. Shop his top tennis picks and more now.</p>",
    cta: [
      {
        text: "Shop Carlos's Pick",
        redirectTo: "/alvaraz",
      },
      {
        text: "Shop Tennis",
        redirectTo: "/carlos",
      },
    ],
  },
];

export const getResponsiveImg: (
  type: string,
  assets: MediaAsset[]
) => string = (type: string, assets: MediaAsset[]): string => {
  let filteredAssets = assets.filter(
    (asset: MediaAsset) => asset.type === type
  );
  if (filteredAssets.length > 0) {
    return filteredAssets[0].src;
  }
  return "";
};
