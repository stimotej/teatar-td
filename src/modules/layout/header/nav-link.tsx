"use client";

import { cn } from "@/lib/utils/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({
  children,
  href,
  className,
  ...props
}: LinkProps & {
  children?: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      data-active={pathname === href}
      className={cn(
        "block text-xl font-medium text-(--primary) py-3 px-4 hover:opacity-80",
        pathname === href && "border-b-2 border-(--primary)",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
