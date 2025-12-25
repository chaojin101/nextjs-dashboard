"use client";

import { useEffect, useRef } from "react";

export default function AdScript() {
  const lastTriggerTime = useRef<number>(0);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const now = Date.now();
      // Check if 10 seconds (10000ms) have passed
      if (now - lastTriggerTime.current >= 10000) {
        // Prevent default action (navigation, etc.)
        e.preventDefault();
        // Stop propagation to prevent other handlers (optional, but good for "hijacking")
        e.stopPropagation();

        lastTriggerTime.current = now;

        const adUrl =
          "https://unequaledexchange.com/bZ3.Vn0sPn3WpOvhbwm/V/JUZ/DK0C2lNozJM/0DMODGI_zvLcTzYf3XMbz/QowFM/jNQh";

        // Determine the content URL (destination)
        // If clicked on a link, use its href. Otherwise, use current page URL.
        let contentUrl = window.location.href;
        const link = (e.target as HTMLElement).closest("a");
        if (link && link.href) {
          contentUrl = link.href;
        }

        // 1. Open the content (destination) in a NEW tab.
        // This becomes the active tab for the user.
        window.open(contentUrl, "_blank");

        // 2. Navigate the CURRENT tab to the Ad URL.
        // This effectively "swaps" the current page with the ad, leaving it in the background/previous tab.
        window.location.href = adUrl;
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
