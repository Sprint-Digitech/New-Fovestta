import type { Metadata } from "next";
import { UserAuthSection } from "@/components/fovestta/UserAuthSection";

export const metadata: Metadata = {
  title: "Sign In | Fovestta™",
};

export default function UserAuthPage() {
  return <UserAuthSection />;
}
