"use server";

import { getSupabaseAdmin } from "@/lib/supabase/server";

type ActionResult = { ok: true } | { ok: false; error: string };

const GENERIC_ERROR = "Something went wrong. Please try again in a moment.";

export type DemoRequestInput = {
  fullName: string;
  companyName: string;
  employeesRange: string;
  businessEmail: string;
  contactNumber: string;
  demoDate: string;
  demoTime: string;
};

export async function submitDemoRequest(
  input: DemoRequestInput
): Promise<ActionResult> {
  const { fullName, companyName, employeesRange, businessEmail, contactNumber, demoDate, demoTime } = input;

  if (
    !fullName.trim() ||
    !companyName.trim() ||
    !employeesRange ||
    !businessEmail.trim() ||
    !contactNumber.trim() ||
    !demoDate ||
    !demoTime
  ) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("demo_requests").insert({
      full_name: fullName.trim(),
      company_name: companyName.trim(),
      employees_range: employeesRange,
      business_email: businessEmail.trim(),
      contact_number: contactNumber.trim(),
      demo_date: demoDate,
      demo_time: demoTime,
    });

    if (error) {
      console.error("submitDemoRequest insert failed:", error.message);
      return { ok: false, error: GENERIC_ERROR };
    }

    return { ok: true };
  } catch (err) {
    console.error("submitDemoRequest failed:", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}

export type SupportTicketInput = {
  fullName: string;
  email: string;
  companyName: string;
  userId: string;
  issueCategory: string;
  priorityLevel: string;
  subject: string;
  description: string;
};

export async function submitSupportTicket(
  input: SupportTicketInput
): Promise<ActionResult> {
  const { fullName, email, companyName, userId, issueCategory, priorityLevel, subject, description } = input;

  if (
    !fullName.trim() ||
    !email.trim() ||
    !companyName.trim() ||
    !userId.trim() ||
    !issueCategory ||
    !priorityLevel ||
    !subject.trim() ||
    description.trim().length < 20
  ) {
    return { ok: false, error: "Please fill in all required fields." };
  }

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("support_tickets").insert({
      full_name: fullName.trim(),
      email: email.trim(),
      company_name: companyName.trim(),
      fovestta_user_id: userId.trim(),
      issue_category: issueCategory,
      priority_level: priorityLevel,
      subject: subject.trim(),
      description: description.trim(),
    });

    if (error) {
      console.error("submitSupportTicket insert failed:", error.message);
      return { ok: false, error: GENERIC_ERROR };
    }

    return { ok: true };
  } catch (err) {
    console.error("submitSupportTicket failed:", err);
    return { ok: false, error: GENERIC_ERROR };
  }
}

export type ChecklistLeadInput = {
  fullName: string;
  workEmail: string;
  companyName: string;
};

/**
 * Best-effort lead capture for the payroll checklist download. The download
 * itself happens client-side regardless of this call's outcome, so failures
 * here are logged but never surfaced to the visitor.
 */
export async function submitChecklistLead(input: ChecklistLeadInput): Promise<void> {
  const { fullName, workEmail, companyName } = input;
  if (!fullName.trim() || !workEmail.trim() || !companyName.trim()) return;

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("checklist_leads").insert({
      full_name: fullName.trim(),
      work_email: workEmail.trim(),
      company_name: companyName.trim(),
    });
    if (error) {
      console.error("submitChecklistLead insert failed:", error.message);
    }
  } catch (err) {
    console.error("submitChecklistLead failed:", err);
  }
}
