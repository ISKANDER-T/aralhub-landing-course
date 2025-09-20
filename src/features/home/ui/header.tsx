import { logoFull } from "@/shared/assets";
import { cn } from "@/shared/lib/css";
import { useState } from "react";

type menu = {
  href: string;
  text: string;
};

const menu: Array<menu> = [
  { href: "#main", text: "Bas bet" },
  { href: "#course", text: "Kurslar" },
  { href: "#mentor", text: "Mentorlar" },
  {
    href: "#contact",
    text: "Baylanis",
  },
];

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>(menu[0].text);
  return (
    <div
      className={cn(
        "bg-[#123A32] h-[80px] p-6 flex flex-row justify-between items-center",
      )}
    >
      <img src={logoFull} />
      <div
        className={cn(
          "text-[16px] leading-6 font-inter hidden",
          "lg:flex lg:flex-row lg:gap-16 text-white",
        )}
      >
        {menu.map((item) => (
          <div
            key={item.href}
            onClick={() => setActiveLink(item.text)}
            className={
              activeLink === item.text
                ? "font-semibold "
                : "font-medium opacity-50"
            }
          >
            <a href={item.href}>{item.text}</a>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
