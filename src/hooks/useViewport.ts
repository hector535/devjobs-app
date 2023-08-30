import { useEffect, useState } from "react";
import { getViewportSize } from "@/utils/viewport";

export const useViewport = () => {
  const [size, setSize] = useState<{ vw: number; vh: number }>({
    vw: 0,
    vh: 0,
  });

  useEffect(() => {
    const resize = () => setSize(getViewportSize());

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return {
    vw: size?.vw,
    vh: size?.vh,
  };
};
