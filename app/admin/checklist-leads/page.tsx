import { listChecklistLeads } from "@/lib/admin/data";

export const dynamic = "force-dynamic";

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function ChecklistLeadsPage() {
  const leads = await listChecklistLeads();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Checklist Leads</h1>
      <p className="text-gray-500 font-medium mb-8">
        {leads.length} lead{leads.length === 1 ? "" : "s"} captured from the payroll checklist download.
      </p>

      {leads.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 font-medium">
          No checklist leads yet.
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 uppercase text-xs font-bold tracking-wider">
                  <th className="px-5 py-3">Name</th>
                  <th className="px-5 py-3">Company</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-gray-50/50">
                    <td className="px-5 py-4 font-bold text-gray-900 whitespace-nowrap">{l.full_name}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{l.company_name}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                      <a href={`mailto:${l.work_email}`} className="hover:text-[#8B5CF6]">{l.work_email}</a>
                    </td>
                    <td className="px-5 py-4 text-gray-400 whitespace-nowrap">{formatDateTime(l.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
