"use client";

import { usePathname, useRouter } from "next/navigation";
import { scrollToSection } from "./utils";

export function usePageLink() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (href: string | null, scroll?: string) => {
    if (!href) return;

    if (pathname === href) {
      if (scroll) scrollToSection(scroll);
      return;
    }

    if (scroll) {
      router.push(`${href}#${scroll}`);
      return;
    }

    if (href.startsWith("http://") || href.startsWith("https://")) {
      window.open(href, "_blank");
    } else {
      router.push(href);
    }
  };

  return { handleClick };
}
