import clearHtmlFromString from "@/lib/utils/clear-html-from-string";
import { cn } from "@/lib/utils/cn";
import DisplayHTML from "@/modules/common/components/display-html";
import type { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

export default function Slide({
  title,
  description,
  linkHref,
  linkTitle,
  image,
  preloadImage,
  className,
}: {
  title?: string;
  description?: string;
  linkTitle?: string;
  linkHref?: Url;
  image: string;
  preloadImage?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden w-full h-80 md:h-[460px]",
        className
      )}
    >
      <Image
        src={image}
        alt={title ?? "Teatar &TD"}
        priority={preloadImage}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-y-0 inset-x-12 flex flex-col items-center justify-center text-center">
        {!!title && (
          <DisplayHTML
            as="h2"
            html={clearHtmlFromString(title)}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white"
          />
        )}
        {!!description && (
          <DisplayHTML
            as="p"
            html={clearHtmlFromString(description)}
            className="text-white mt-4 line-clamp-2"
          />
        )}
        {!!linkTitle && (
          <Link
            href={linkHref ?? ""}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white mt-4 px-6 py-2 border-2 border-white rounded-full transition-colors hover:bg-white/20 active:bg-white/30"
          >
            {linkTitle}
          </Link>
        )}
      </div>
    </div>
  );
}
