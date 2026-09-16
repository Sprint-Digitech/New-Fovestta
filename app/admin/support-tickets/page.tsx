import { listSupportTickets } from "@/lib/admin/data";
import { TicketStatusToggle } from "./TicketStatusToggle";

export const dynamic = "force-dynamic";

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

const priorityColor: Record<string, string> = {
  "High - Critical business block": "bg-red-50 text-red-600",
  "Medium - Issue affecting work": "bg-blue-50 text-blue-600",
  "Low - General question": "bg-gray-100 text-gray-500",
};

export default async function SupportTicketsPage() {
  const tickets = await listSupportTickets();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Support Tickets</h1>
      <p className="text-gray-500 font-medium mb-8">
        {tickets.length} ticket{tickets.length === 1 ? "" : "s"} submitted through the site.
      </p>

      {tickets.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 font-medium">
          No support tickets yet.
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{t.subject}</h3>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${priorityColor[t.priority_level] ?? "bg-gray-100 text-gray-500"}`}>
                      {t.priority_level.split(" - ")[0]}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-50 text-[#8B5CF6]">
                      {t.issue_category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    {t.full_name} &middot; {t.company_name} &middot; User ID {t.fovestta_user_id} &middot; {formatDateTime(t.created_at)}
                  </p>
                </div>
                <TicketStatusToggle ticketId={t.id} status={t.status} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{t.description}</p>
              <a href={`mailto:${t.email}`} className="text-xs font-bold text-[#8B5CF6] hover:underline">
                {t.email}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
