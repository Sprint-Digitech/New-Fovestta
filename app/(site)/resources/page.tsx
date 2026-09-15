import type { Metadata } from "next";
import { ResourcesSection } from "@/components/fovestta/ResourcesSection";

export const metadata: Metadata = {
  title: "Resources | Fovestta™",
};

export default function ResourcesPage() {
  return <ResourcesSection />;
}
