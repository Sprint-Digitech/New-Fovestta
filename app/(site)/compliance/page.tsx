import type { Metadata } from "next";
import { ComplianceSecurityPage } from "@/components/fovestta/ComplianceSecurityPage";

export const metadata: Metadata = {
  title: "Compliance & Security | Fovestta™",
};

export default function Compliance() {
  return <ComplianceSecurityPage />;
}
