import { getPageMetadata } from "@/lib/seo/data";
import { PayrollCostCalculatorSection } from "@/components/fovestta/PayrollCostCalculatorSection";

export async function generateMetadata() {
  return getPageMetadata("/payroll-calculator");
}

export default function PayrollCalculatorPage() {
  return <PayrollCostCalculatorSection />;
}
