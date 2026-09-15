import type { Metadata } from "next";
import { ComplianceScorecardSection } from "@/components/fovestta/ComplianceScorecardSection";

export const metadata: Metadata = {
  title: "Compliance Scorecard | Fovestta™",
};

export default function ComplianceScorecardPage() {
  return <ComplianceScorecardSection />;
}
