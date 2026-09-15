import type { Metadata } from "next";
import { RequestDemoSection } from "@/components/fovestta/RequestDemoSection";

export const metadata: Metadata = {
  title: "Request a Demo | Fovestta™",
};

export default function RequestDemoPage() {
  return <RequestDemoSection />;
}
