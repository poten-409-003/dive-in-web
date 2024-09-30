"use client";

import { useContext, useEffect } from "react";
import { KakaoMapContext } from "./KakaoMap";

const Marker = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useContext(KakaoMapContext);

  useEffect(() => {
    if (!map) {
      return;
    }
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);

    return () => {
      marker.setMap(null);
    };
  }, [lat, lng, map]);

  return null;
};

export default Marker;
