import { DeliveryStrip } from "@/components/operator";

const clients = [
  { name: "DTC E-Commerce Brand", href: "/our-work/media-buy-analytics/" },
  { name: "Major Supplier", href: "/our-work/circular-economy-platform/" },
  { name: "Community Housing Organisation", href: "/our-work/community-housing-organisation/" },
  { name: "Construction Firm", href: "/our-work/fire-protection-compliance/" },
];

export function ActiveDelivery() {
  return <DeliveryStrip chips={clients} />;
}
