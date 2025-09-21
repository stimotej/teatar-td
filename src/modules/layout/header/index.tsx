import Image from "next/image";
import { mainNavigationLinks } from "@/lib/utils/constants";
import NavigationLink from "./nav-link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/components/sheet";
import MenuIcon from "@/modules/common/icons/menu";
import Link from "next/link";
import LogoMobile from "./logo-mobile";
import HeaderContainer from "./container";

export default function Header() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 pt-8 lg:pb-8 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* DESKTOP - IMAGES */}
        <Link href="/" className="hidden lg:block">
          <Image
            src="/teatar&td-logo-tekst.jpg"
            alt="Teatar&td logo - tekst"
            width={600}
            height={99}
            className="w-[600px] h-auto object-contain"
          />
        </Link>
        <Image
          src="/teatar&td-logo.png"
          alt="Teatar&td logo"
          width={176}
          height={251}
          className="h-44 w-auto object-contain hidden lg:block"
        />
      </div>
      <HeaderContainer>
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* PHONE - IMAGE AND NAVIGATION */}
          <LogoMobile />

          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Otvori navigaciju" className="lg:hidden">
                <MenuIcon className="size-10" />
              </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-3/4 md:w-1/2 lg:max-w-sm">
              <SheetHeader>
                <SheetTitle className="sr-only">Glavna navigacija</SheetTitle>
                <SheetDescription className="sr-only">
                  Izbornik glavne navigacije stranice. Koristite tipkovnicu ili
                  miš za odabir željene stranice.
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Glavna navigacija" className="mt-4">
                <ul className="flex flex-col items-center justify-center">
                  {mainNavigationLinks.map((link) => (
                    <li
                      key={link.href}
                      className="w-full first:[&>a]:border-t-3"
                    >
                      <SheetClose asChild>
                        <NavigationLink
                          href={link.href}
                          className="flex text-2xl py-5 w-full justify-center border-b-3 border-(--primary) data-[active=true]:bg-(--primary)/10"
                        >
                          {link.title}
                        </NavigationLink>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="container mx-auto hidden lg:block"
          aria-label="Glavna navigacija"
        >
          <ul className="flex items-center gap-2 justify-center">
            {mainNavigationLinks.map((link) => (
              <li key={link.href}>
                <NavigationLink href={link.href}>{link.title}</NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
      </HeaderContainer>
      <div className="lg:h-8" />
    </>
  );
}
