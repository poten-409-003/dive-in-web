import { useEffect, useLayoutEffect, useRef, useState } from "react";

const usePhotoSlider = (photos: string[]) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]); //null처리
  const [visibleIndex, setVisibleIndex] = useState(0);
  const visibleImageNumber = visibleIndex + 1;

  //추가
  useEffect(() => {
    const slider = sliderRef.current;

    if(!slider || photos.length === 0) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const sliderWidth = slider.offsetWidth;

      const index = Math.round(scrollLeft / sliderWidth); //현재 스크롤 위치 파악
      setVisibleIndex(index);
    };

    slider.addEventListener("scroll", handleScroll);

    return() => {
      slider.removeEventListener("scroll", handleScroll);
    };
  },[photos]);

  useLayoutEffect(() => {
    const slider = sliderRef.current;
    const images = imageRefs.current.filter(Boolean); //null처리
    // const images = imageRefs.current;

    if(!slider || images.length === 0 ) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = images.indexOf(entry.target as HTMLDivElement);
            setVisibleIndex(index);
          }
        });
      },
      {
        root: slider,
        threshold: 0.5, // 이미지가 50% 이상 보이면 해당 이미지로 간주
      }
    );

    images.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      images.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [photos, imageRefs.current.length]);

  return { sliderRef, imageRefs, visibleIndex, visibleImageNumber };
};

export default usePhotoSlider;
