import Image from "next/image";
import LinkButton from "./link-button";
import { cn } from "@/lib/utils/cn";
import DisplayHTML from "./display-html";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";

export default function Post({
  title,
  subtitle,
  date,
  description,
  image,
  slug,
  orientation = "vertical",
  className,
}: {
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  image: string;
  slug: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex break-all",
        orientation === "horizontal"
          ? "flex-col sm:flex-row text-2xl gap-4"
          : "flex-col gap-2 text-lg",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        width={380}
        height={176}
        className={cn(
          orientation === "horizontal" ? "w-full sm:w-64 md:w-80" : "w-full",
          "h-44 object-cover rounded-lg shrink-0"
        )}
      />
      <div>
        {!!date && (
          <p className="text-(--primary) text-3xl font-medium mb-2 uppercase">
            {date}
          </p>
        )}
        {!!subtitle && (
          <DisplayHTML
            as="p"
            className="font-medium mb-1"
            html={clearHtmlFromString(subtitle)}
          />
        )}
        <DisplayHTML
          as="h4"
          className="font-semibold"
          html={clearHtmlFromString(title)}
        />
        {!!description && (
          <DisplayHTML
            as="p"
            className="text-sm text-gray-600 mt-1"
            html={clearHtmlFromString(description)}
          />
        )}
        <LinkButton
          href={slug}
          size="sm"
          className={orientation === "horizontal" ? "mt-4" : "mt-2"}
        >
          Saznaj više...
        </LinkButton>
      </div>
    </article>
  );
}
