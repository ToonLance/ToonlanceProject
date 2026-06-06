"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const res = await fetch("/api/clients");
    const data = await res.json();

    setClients(data);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Clients
      </h1>

      <div className="space-y-4">
        {clients.map((client) => (
          <Link
            key={client.clientEmail}
            href={`/admin/clients/${encodeURIComponent(
              client.clientEmail
            )}`}
          >
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <h2 className="text-xl font-semibold">
                {client.clientName}
              </h2>

              <p>{client.clientEmail}</p>

              <p className="mt-2 text-zinc-400">
                Projects: {client.totalProjects}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}