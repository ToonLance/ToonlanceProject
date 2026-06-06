"use client";

import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    {
      _id: "1",
      clientName: "John Smith",
      clientEmail: "john@gmail.com",
      totalProjects: 2,
    },
    {
      _id: "2",
      clientName: "Sarah Wilson",
      clientEmail: "sarah@gmail.com",
      totalProjects: 1,
    },
  ];

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">
          Clients
        </h1>

        <div className="bg-purple-600 px-4 py-2 rounded-xl">
          Total Clients: {clients.length}
        </div>
      </div>

      <div className="grid gap-5">
        {clients.map((client) => (
          <div
            key={client._id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >
            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-2xl font-semibold">
                  {client.clientName}
                </h2>

                <p className="text-zinc-400 mt-2">
                  {client.clientEmail}
                </p>

                <p className="text-zinc-500 mt-3">
                  Projects: {client.totalProjects}
                </p>
              </div>

              <Link
                href={`/admin/clients/${client._id}`}
                className="bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-xl"
              >
                View Projects
              </Link>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}