"use client";
import { cn } from "@/lib/utils/cn";
import { useEffect, useRef, useState } from "react";

export default function HeaderContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [isSticky, setIsSticky] = useState(false);
  const positionDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (positionDivRef.current) {
        const headerTop = positionDivRef.current.offsetTop;
        setIsSticky(window.scrollY > headerTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={positionDivRef} />
      <header
        className={cn(
          "sticky top-0 z-50 bg-(--background) transition-shadow",
          isSticky && "shadow-md",
          className
        )}
      >
        {children}{" "}
      </header>
    </>
  );
}
