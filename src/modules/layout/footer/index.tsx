import Image from "next/image";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pb-6 md:px-8 md:pb-8 lg:px-12 lg:pb-12 flex items-center justify-center sm:justify-between gap-6">
      <Image
        src="/muski-logo.png"
        alt="Logo muškarac"
        width={208}
        height={208}
        className="hidden sm:block lg:w-52 lg:h-52 md:w-36 md:h-36 w-24 h-24"
      />
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/teatar&td-logo-tekst.jpg"
          alt="Teatar&TD logo tekst"
          width={300}
          height={64}
          className="lg:w-96 md:w-80 sm:w-64 w-52 h-auto object-contain"
        />
        <Socials />
      </div>
      <Image
        src="/zenski-logo.png"
        alt="Logo žena"
        width={208}
        height={208}
        className="hidden sm:block lg:w-52 lg:h-52 md:w-36 md:h-36 w-24 h-24"
      />
    </footer>
  );
}
