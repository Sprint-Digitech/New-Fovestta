import { listDemoRequests } from "@/lib/admin/data";

export const dynamic = "force-dynamic";

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function DemoRequestsPage() {
  const requests = await listDemoRequests();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Demo Requests</h1>
      <p className="text-gray-500 font-medium mb-8">
        {requests.length} request{requests.length === 1 ? "" : "s"} submitted through the site.
      </p>

      {requests.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 font-medium">
          No demo requests yet.
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 uppercase text-xs font-bold tracking-wider">
                  <th className="px-5 py-3">Name</th>
                  <th className="px-5 py-3">Company</th>
                  <th className="px-5 py-3">Employees</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-5 py-3">Phone</th>
                  <th className="px-5 py-3">Requested Slot</th>
                  <th className="px-5 py-3">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {requests.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50/50">
                    <td className="px-5 py-4 font-bold text-gray-900 whitespace-nowrap">{r.full_name}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{r.company_name}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{r.employees_range}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                      <a href={`mailto:${r.business_email}`} className="hover:text-[#8B5CF6]">{r.business_email}</a>
                    </td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                      <a href={`tel:${r.contact_number}`} className="hover:text-[#8B5CF6]">{r.contact_number}</a>
                    </td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{r.demo_date} at {r.demo_time}</td>
                    <td className="px-5 py-4 text-gray-400 whitespace-nowrap">{formatDateTime(r.created_at)}</td>
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
