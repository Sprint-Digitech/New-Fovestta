import Link from "next/link";
import { LayoutDashboard, Calendar, MessageSquare, Search, LogOut, ClipboardList } from "lucide-react";
import { adminLogout } from "@/lib/admin/actions";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/demo-requests", label: "Demo Requests", icon: Calendar },
  { href: "/admin/support-tickets", label: "Support Tickets", icon: MessageSquare },
  { href: "/admin/checklist-leads", label: "Checklist Leads", icon: ClipboardList },
  { href: "/admin/seo", label: "SEO", icon: Search },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex">
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="px-6 py-6 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">Fovestta™</span>
          <span className="block text-xs font-bold text-[#8B5CF6] uppercase tracking-widest mt-0.5">Admin</span>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-semibold text-gray-600 hover:bg-purple-50 hover:text-[#8B5CF6] transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-gray-100">
          <form action={adminLogout}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-semibold text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 min-w-0 p-6 lg:p-10">{children}</main>
    </div>
  );
}
