import { cn } from "@/lib/utils/cn";
import GlobeIcon from "@/modules/common/icons/globe";
import MailIcon from "@/modules/common/icons/mail";
import MapPinIcon from "@/modules/common/icons/map-pin";
import PhoneIcon from "@/modules/common/icons/phone";

const contactItems = [
  {
    id: 1,
    content: "01 4593 510",
    href: "tel:01 4593 510",
    icon: PhoneIcon,
  },
  {
    id: 2,
    content: "itd@sczg.hr",
    href: "mailto:itd@sczg.hr",
    icon: MailIcon,
  },
  {
    id: 3,
    content: "itd.sczg.hr",
    href: "http://itd.sczg.hr/",
    icon: GlobeIcon,
  },
  {
    id: 4,
    content: "Savska cesta 25, Zagreb, Hrvatska",
    href: "https://maps.app.goo.gl/6bftJXAL5r56fzMe6",
    icon: MapPinIcon,
  },
];

export default function ContactList({ className }: { className?: string }) {
  return (
    <ul className={cn("text-xl space-y-4", className)}>
      {contactItems.map((item) => (
        <li key={item.id} className="flex items-center gap-3">
          <div className="p-2 bg-black rounded-full">
            <item.icon className="size-6 text-white" />
          </div>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {item.content}
          </a>
        </li>
      ))}
    </ul>
  );
}
