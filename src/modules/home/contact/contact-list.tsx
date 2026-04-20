import { getContent } from "@/lib/data/content";
import { cn } from "@/lib/utils/cn";
import GlobeIcon from "@/modules/common/icons/globe";
import MailIcon from "@/modules/common/icons/mail";
import MapPinIcon from "@/modules/common/icons/map-pin";
import PhoneIcon from "@/modules/common/icons/phone";

type ContactListProps = {
  className?: string;
};

function getWebsiteHref(websiteUrl: string) {
  return /^https?:\/\//i.test(websiteUrl)
    ? websiteUrl
    : `https://${websiteUrl}`;
}

function getMapHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

export default async function ContactList({ className }: ContactListProps) {
  const { kontakti } = await getContent();
  const contact = kontakti?.meta;

  const contactItems = [
    {
      id: 1,
      content: contact?.teatar_td_phone,
      href: contact?.teatar_td_phone
        ? `tel:${contact.teatar_td_phone.replace(/\s/g, "")}`
        : "",
      icon: PhoneIcon,
    },
    {
      id: 2,
      content: contact?.teatar_td_email,
      href: contact?.teatar_td_email
        ? `mailto:${contact.teatar_td_email}`
        : "",
      icon: MailIcon,
    },
    {
      id: 3,
      content: contact?.teatar_td_website_url,
      href: contact?.teatar_td_website_url
        ? getWebsiteHref(contact.teatar_td_website_url)
        : "",
      icon: GlobeIcon,
    },
    {
      id: 4,
      content: contact?.teatar_td_address,
      href: contact?.teatar_td_address
        ? getMapHref(contact.teatar_td_address)
        : "",
      icon: MapPinIcon,
    },
  ].filter((item) => item.content);

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
