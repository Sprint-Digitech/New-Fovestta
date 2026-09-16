"use client";

import { useTransition } from "react";
import { setTicketStatus } from "@/lib/admin/actions";

export function TicketStatusToggle({
  ticketId,
  status,
}: {
  ticketId: string;
  status: "open" | "resolved";
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() =>
        startTransition(() => {
          setTicketStatus(ticketId, status === "open" ? "resolved" : "open");
        })
      }
      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors disabled:opacity-50 ${
        status === "open"
          ? "bg-orange-50 text-orange-600 hover:bg-orange-100"
          : "bg-green-50 text-green-600 hover:bg-green-100"
      }`}
    >
      {isPending ? "..." : status === "open" ? "Mark Resolved" : "Reopen"}
    </button>
  );
}
