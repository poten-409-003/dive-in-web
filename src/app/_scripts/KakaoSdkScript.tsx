"use client";

import Script from "next/script";

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY!;
const KAKAO_SDK_VERSION = "2.7.2";

const KakaoSdkScript = () => {
  return (
    <Script
      type="text/javascript"
      src={`https://t1.kakaocdn.net/kakao_js_sdk/${KAKAO_SDK_VERSION}/kakao.min.js`}
      integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
      crossOrigin="anonymous"
      onLoad={() => {
        Kakao.init(KAKAO_APP_KEY);
      }}
    />
  );
};

export default KakaoSdkScript;
