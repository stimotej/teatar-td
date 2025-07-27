"use client";

import { cn } from "@/lib/utils/cn";
import { useEffect, useState } from "react";
import ChevronLeftIcon from "../icons/chevron-left";

export default function ScrollToTopButton() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.pageYOffset;

      if (scrollOffset > 500 && !opened) {
        setOpened(true);
      } else if (scrollOffset <= 500 && opened) {
        setOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opened]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed top-3/4 right-0 flex items-start z-50 transition-transform",
        opened ? "translate-x-0" : "translate-x-full"
      )}
    >
      <button
        onClick={handleScrollToTop}
        className="bg-neutral-600 text-white p-2 rounded-l-lg"
        title="Idi na vrh stranice"
        aria-label="Idi na vrh stranice"
      >
        <ChevronLeftIcon className="size-6 rotate-90" />
      </button>
    </div>
  );
}
