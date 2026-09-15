import type { Metadata } from "next";
import { SuccessStoriesSection } from "@/components/fovestta/SuccessStoriesSection";

export const metadata: Metadata = {
  title: "Success Stories | Fovestta™",
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesSection />;
}
