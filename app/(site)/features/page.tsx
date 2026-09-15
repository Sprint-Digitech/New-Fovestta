import type { Metadata } from "next";
import { PremiumFeatures } from "@/components/fovestta/PremiumFeatures";

export const metadata: Metadata = {
  title: "Features | Fovestta™",
};

export default function FeaturesPage() {
  return <PremiumFeatures />;
}
