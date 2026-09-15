import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/fovestta/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Fovestta™",
};

export default function Privacy() {
  return <PrivacyPolicyPage />;
}
