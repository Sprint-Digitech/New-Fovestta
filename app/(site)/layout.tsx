import { PremiumNav } from "@/components/fovestta/PremiumNav";
import { Footer } from "@/components/fovestta/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PremiumNav />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
