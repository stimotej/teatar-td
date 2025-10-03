"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LogoMobile() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link href="/" className="lg:hidden">
      <Image
        src="/teatar-td/teatar&td-logo-sa-tekstom.jpg"
        alt="Teatar &TD logo"
        width={176}
        height={251}
        className={`w-auto object-contain transition-all duration-300 ease-in-out ${
          isScrolled ? "h-16" : "h-28"
        }`}
      />
    </Link>
  );
}
