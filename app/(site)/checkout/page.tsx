import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutPage } from "@/components/fovestta/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout | Fovestta™",
};

export default function Checkout() {
  return (
    <Suspense fallback={null}>
      <CheckoutPage />
    </Suspense>
  );
}
