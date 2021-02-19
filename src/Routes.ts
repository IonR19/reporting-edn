interface HeaderLink {
  url: string;
  title?: string;
}

export const links: HeaderLink[] = [
  { url: "/services", title: "خدمات" },
  { url: "/faults", title: "أعطال" },
  { url: "/analytics", title: "احصائيات" },
  { url: "/other", title: "أخرى" },
];
