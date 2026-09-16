"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createAdminSession, destroyAdminSession, verifyAdminSession } from "./session";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export type AdminLoginState = {
  error?: string;
} | null;

export async function adminLogin(
  _prevState: AdminLoginState,
  formData: FormData
): Promise<AdminLoginState> {
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return { error: "Admin login is not configured yet." };
  }

  if (typeof password !== "string" || password.length === 0) {
    return { error: "Enter the admin password." };
  }

  if (password !== adminPassword) {
    return { error: "Incorrect password." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function adminLogout() {
  await destroyAdminSession();
  redirect("/admin-auth");
}

export async function setTicketStatus(ticketId: string, status: "open" | "resolved") {
  const isAdmin = await verifyAdminSession();
  if (!isAdmin) {
    throw new Error("Not authorized.");
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("support_tickets")
    .update({ status })
    .eq("id", ticketId);

  if (error) {
    console.error("setTicketStatus failed:", error.message);
    throw new Error("Failed to update ticket.");
  }

  revalidatePath("/admin/support-tickets");
  revalidatePath("/admin");
}
