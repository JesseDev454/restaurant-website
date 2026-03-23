export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type NavLinkItem = {
  label: string;
  href: string;
};

const phoneDisplay = "+234 807 604 5532";
const phoneIntl = "2348076045532";
const defaultWhatsAppMessage = "Hello I want to order from Lagos Kinetic";
const whatsAppHref = `https://wa.me/${phoneIntl}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

export const siteConfig = {
  brand: {
    name: "Lagos Kinetic",
    logoText: "Lagos Kinetic",
    title: "Delicious Local Meals, Fast & Fresh",
    subtitle:
      "Authentic Nigerian flavors, delivered to your door. Experience the rhythm of Lagos through every bite.",
  },
  contact: {
    phoneDisplay,
    phoneHref: `tel:+${phoneIntl}`,
    whatsAppNumber: phoneIntl,
    email: "hello@lagoskinetic.com",
    address: "12 Adeola Odeku St, Victoria Island, Lagos",
    hours: "Mon-Sun: 11am - 11pm",
  },
  whatsApp: {
    defaultMessage: defaultWhatsAppMessage,
    heroMessage: defaultWhatsAppMessage,
    menuMessage: "Hello I want to view the Lagos Kinetic menu and place an order",
    reservationMessage:
      "Hello I want to ask about Lagos Kinetic seating, walk-in availability, and reservations",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About & Contact", href: "/about" },
  ] satisfies NavLinkItem[],
  mobileNav: [
    { label: "Home", href: "/", icon: "home" },
    { label: "Menu", href: "/menu", icon: "utensils" },
    { label: "Call", href: `tel:+${phoneIntl}`, icon: "phone" },
    {
      label: "Chat",
      href: whatsAppHref,
      icon: "message",
    },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com", icon: "sparkles" },
    {
      label: "WhatsApp",
      href: whatsAppHref,
      icon: "message",
    },
    {
      label: "Google Maps",
      href: "https://maps.google.com/?q=12+Adeola+Odeku+St,+Victoria+Island,+Lagos",
      icon: "map",
    },
  ] satisfies SocialLink[],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About & Contact", href: "/about" },
  ],
  trustSignals: [
    {
      title: "Fast Delivery",
      description: "Hot and ready across Victoria Island in under 30 minutes.",
      icon: "truck",
    },
    {
      title: "Affordable Premium Meals",
      description: "Big Nigerian flavor without turning the checkout into work.",
      icon: "badge",
    },
    {
      title: "Loved by Locals",
      description: "Trusted for repeat orders, walk-ins, and office lunches.",
      icon: "heart",
    },
  ],
  visitHighlights: [
    {
      title: "Walk In for Fresh Grills",
      description: "Bole, croaker, and signature suya finished hot throughout the day.",
      icon: "flame",
    },
    {
      title: "Call Ahead for Pickup",
      description: "Place your order before you leave home or the office.",
      icon: "phone",
    },
    {
      title: "Find Us Easily",
      description: "Right in the heart of Adeola Odeku, Victoria Island.",
      icon: "map",
    },
  ],
  story: {
    eyebrow: "Our Story",
    paragraphs: [
      "We started with a simple belief: the soul of Nigerian cuisine lies in the rhythm of the streets. Lagos Kinetic is more than a restaurant; it is a culinary heartbeat that pulses with the energy of Victoria Island and the heritage of authentic flavors.",
      "Every plate we serve is built on local, fresh ingredients sourced daily from people who understand the richness of our soil. We do not just cook food; we curate an experience that honors our roots while embracing modern hospitality.",
    ],
    quote: "The rhythm of spice in every bite.",
  },
};
