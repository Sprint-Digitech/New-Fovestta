import type { Metadata } from "next";
import { PricingSection } from "@/components/fovestta/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | Fovestta™",
};

export default function PricingPage() {
  return <PricingSection />;
}
