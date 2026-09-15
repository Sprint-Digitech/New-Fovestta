import type { Metadata } from "next";
import { PayrollChecklistSection } from "@/components/fovestta/PayrollChecklistSection";

export const metadata: Metadata = {
  title: "Payroll Checklist | Fovestta™",
};

export default function PayrollChecklistPage() {
  return <PayrollChecklistSection />;
}
