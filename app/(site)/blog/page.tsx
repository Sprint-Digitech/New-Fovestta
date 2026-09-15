import type { Metadata } from "next";
import { BlogPage } from "@/components/fovestta/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Fovestta™",
};

export default function Blog() {
  return <BlogPage />;
}
