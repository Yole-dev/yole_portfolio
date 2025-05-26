import { useState, useEffect } from "react";

// custom hook to watch screen width changes
export default function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(
    function () {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    },
    [width]
  );

  return width;
}
