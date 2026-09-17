import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export type DemoRequestRow = {
  id: string;
  full_name: string;
  company_name: string;
  employees_range: string;
  business_email: string;
  contact_number: string;
  demo_date: string;
  demo_time: string;
  created_at: string;
};

export type SupportTicketRow = {
  id: string;
  full_name: string;
  email: string;
  company_name: string;
  fovestta_user_id: string;
  issue_category: string;
  priority_level: string;
  subject: string;
  description: string;
  status: "open" | "resolved";
  created_at: string;
};

export type ChecklistLeadRow = {
  id: string;
  full_name: string;
  work_email: string;
  company_name: string;
  created_at: string;
};

export async function listDemoRequests(): Promise<DemoRequestRow[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("demo_requests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("listDemoRequests failed:", error.message);
    return [];
  }
  return data ?? [];
}

export async function listSupportTickets(): Promise<SupportTicketRow[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("support_tickets")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("listSupportTickets failed:", error.message);
    return [];
  }
  return data ?? [];
}

export async function listChecklistLeads(): Promise<ChecklistLeadRow[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("checklist_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("listChecklistLeads failed:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getDashboardCounts() {
  const supabase = getSupabaseAdmin();

  const [demoRequests, openTickets, totalTickets, checklistLeads] = await Promise.all([
    supabase.from("demo_requests").select("id", { count: "exact", head: true }),
    supabase.from("support_tickets").select("id", { count: "exact", head: true }).eq("status", "open"),
    supabase.from("support_tickets").select("id", { count: "exact", head: true }),
    supabase.from("checklist_leads").select("id", { count: "exact", head: true }),
  ]);

  return {
    demoRequests: demoRequests.count ?? 0,
    openTickets: openTickets.count ?? 0,
    totalTickets: totalTickets.count ?? 0,
    checklistLeads: checklistLeads.count ?? 0,
  };
}
