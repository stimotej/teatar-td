import { cn } from "@/lib/utils/cn";

export const titleClassName =
  "text-center text-2xl sm:text-3xl md:text-4xl font-semibold uppercase text-(--primary)";

export default function PageTitle({
  className,
  level = "h2",
  ...props
}: React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  const Component = level;

  return <Component className={cn(titleClassName, className)} {...props} />;
}
