import { cn } from "@/lib/utils/cn";
import FacebookIcon from "@/modules/common/icons/facebook";
import InstagramIcon from "@/modules/common/icons/instagram";
// import TiktokIcon from "@/modules/common/icons/tiktok";
import YoutubeIcon from "@/modules/common/icons/youtube";

const socialItems = [
  {
    id: 1,
    name: "Facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/itd.teatar",
  },
  {
    id: 2,
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/teatar.itd/",
  },
  {
    id: 3,
    name: "YouTube",
    icon: YoutubeIcon,
    link: "https://www.youtube.com/@teatartd736",
  },
  //   {
  //     id: 4,
  //     name: "TikTok",
  //     icon: TiktokIcon,
  //     link: "",
  //   },
];

export default function Socials({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {socialItems.map((item) => (
        <li key={item.id} className="flex items-center gap-3">
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full"
            aria-label={item.name}
          >
            <div className="p-2 bg-black rounded-full">
              <item.icon className="size-6 text-white" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
