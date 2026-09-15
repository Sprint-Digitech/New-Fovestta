import type { Metadata } from "next";
import { TermsOfServicePage } from "@/components/fovestta/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service | Fovestta™",
};

export default function Terms() {
  return <TermsOfServicePage />;
}
