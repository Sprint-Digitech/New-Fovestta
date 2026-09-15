import type { Metadata } from "next";
import { AdminAuthSection } from "@/components/fovestta/AdminAuthSection";

export const metadata: Metadata = {
  title: "Admin Login | Fovestta™",
};

export default function AdminAuthPage() {
  return <AdminAuthSection />;
}
