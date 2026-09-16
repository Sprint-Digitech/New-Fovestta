import { getPageMetadata } from "@/lib/seo/data";
import { UserAuthSection } from "@/components/fovestta/UserAuthSection";

export async function generateMetadata() {
  return getPageMetadata("/user-auth");
}

export default function UserAuthPage() {
  return <UserAuthSection />;
}
