import { getPageMetadata } from "@/lib/seo/data";
import { PayrollChecklistSection } from "@/components/fovestta/PayrollChecklistSection";

export async function generateMetadata() {
  return getPageMetadata("/payroll-checklist");
}

export default function PayrollChecklistPage() {
  return <PayrollChecklistSection />;
}
