import { cn } from "@/lib/utils/cn";
import Link, { type LinkProps } from "next/link";

export default function LinkButton(
  props: React.ComponentProps<"a"> & {
    size?: "sm" | "md" | "lg";
    href: LinkProps["href"];
  }
) {
  return (
    <Link
      {...props}
      className={cn(
        "flex w-fit rounded-full border-3 border-(--primary) transition-shadow bg-(--background)",
        "focus-visible:ring-(--ring) focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "transition-colors hover:bg-(--primary)/10 active:bg-(--primary)/20",
        props.size === "sm"
          ? "py-1 px-4 text-sm"
          : props.size === "lg"
          ? "py-4 px-8 text-lg"
          : "py-3 px-6 text-base",
        props.className
      )}
    />
  );
}
