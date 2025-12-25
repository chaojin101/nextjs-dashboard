"use client";

import { useEffect, useRef } from "react";

export default function AdScript() {
  const lastTriggerTime = useRef<number>(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const now = Date.now();
      // Check if 10 seconds (10000ms) have passed
      if (now - lastTriggerTime.current >= 10000) {
        lastTriggerTime.current = now;

        const url =
          "https://unequaledexchange.com/bZ3.Vn0sPn3WpOvhbwm/V/JUZ/DK0C2lNozJM/0DMODGI_zvLcTzYf3XMbz/QowFM/jNQh";

        // Attempt to open pop-under
        const newWindow = window.open(url, "_blank");
        if (newWindow) {
          // Try to blur the new window and focus the current one to keep user on the page
          try {
            newWindow.blur();
            window.focus();
          } catch (e) {
            console.error("AdScript focus error:", e);
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
