import { getPageMetadata } from "@/lib/seo/data";
import { Suspense } from "react";
import { CheckoutPage } from "@/components/fovestta/CheckoutPage";

export async function generateMetadata() {
  return getPageMetadata("/checkout");
}

export default function Checkout() {
  return (
    <Suspense fallback={null}>
      <CheckoutPage />
    </Suspense>
  );
}
