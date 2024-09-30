"use client";

import { convertReactComponentToHTMLElement } from "@/utils/domUtils";
import { useContext, useEffect } from "react";
import { KakaoMapContext } from "./KakaoMap";
import BaseOverlayContent from "./overlay-contents/BaseOverlayContent";

const Overlay = ({
  lat,
  lng,
  name,
  address,
  kakaoUrl,
  naverUrl,
}: {
  lat: number;
  lng: number;
  name: string;
  address: string;
  kakaoUrl: string;
  naverUrl: string;
}) => {
  const kakaoMap = useContext(KakaoMapContext);

  useEffect(() => {
    if (!kakaoMap) {
      return;
    }

    const overlayPosition = new kakao.maps.LatLng(lat, lng);

    const contentString = convertReactComponentToHTMLElement(
      <BaseOverlayContent
        name={name}
        address={address}
        kakaoUrl={kakaoUrl}
        naverUrl={naverUrl}
      />
    );

    const overlay = new kakao.maps.CustomOverlay({
      position: overlayPosition,
      content: contentString,
      xAnchor: 0.3,
      yAnchor: 0.91,
    });

    overlay.setMap(kakaoMap);

    return () => {
      overlay.setMap(null);
    };
  }, [lat, lng, kakaoMap, name, address, kakaoUrl, naverUrl]);

  return null;
};

export default Overlay;
