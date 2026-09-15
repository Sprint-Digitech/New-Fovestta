import type { Metadata } from "next";
import { PayrollCostCalculatorSection } from "@/components/fovestta/PayrollCostCalculatorSection";

export const metadata: Metadata = {
  title: "Payroll Cost Calculator | Fovestta™",
};

export default function PayrollCalculatorPage() {
  return <PayrollCostCalculatorSection />;
}
