import type { Metadata } from "next";
import { CookiePolicyPage } from "@/components/fovestta/CookiePolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Fovestta™",
};

export default function CookiePolicy() {
  return <CookiePolicyPage />;
}
