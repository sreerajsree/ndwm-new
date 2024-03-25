import Link from "next/link";
import clsx from "clsx";
import {
  RiFacebookBoxFill,
  RiTwitterXLine,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

export const SocialMediaProfiles = [
  {
    title: "Facebook",
    href: "",
    icon: RiFacebookBoxFill,
  },
  {
    title: "Instagram",
    href: "",
    icon: RiInstagramFill,
  },
  {
    title: "Linkedin",
    href: "",
    icon: RiLinkedinFill,
  },
  {
    title: "Twitter",
    href: "",
    icon: RiTwitterXLine,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
