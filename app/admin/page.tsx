import Link from "next/link";
import { Calendar, MessageSquare, AlertCircle, ClipboardList } from "lucide-react";
import { getDashboardCounts } from "@/lib/admin/data";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const counts = await getDashboardCounts();

  const cards = [
    { label: "Demo Requests", value: counts.demoRequests, icon: Calendar, href: "/admin/demo-requests", color: "text-[#8B5CF6] bg-purple-50" },
    { label: "Open Tickets", value: counts.openTickets, icon: AlertCircle, href: "/admin/support-tickets", color: "text-orange-600 bg-orange-50" },
    { label: "Total Tickets", value: counts.totalTickets, icon: MessageSquare, href: "/admin/support-tickets", color: "text-blue-600 bg-blue-50" },
    { label: "Checklist Leads", value: counts.checklistLeads, icon: ClipboardList, href: "/admin/checklist-leads", color: "text-emerald-600 bg-emerald-50" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard</h1>
      <p className="text-gray-500 font-medium mb-8">An overview of demo requests, support activity, and checklist leads.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
              <card.icon className="w-5 h-5" />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-1">{card.value}</div>
            <div className="text-sm font-bold text-gray-500">{card.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
