import type { Metadata } from "next";
import { SupportSection } from "@/components/fovestta/SupportSection";

export const metadata: Metadata = {
  title: "Support | Fovestta™",
};

export default function SupportPage() {
  return <SupportSection />;
}
