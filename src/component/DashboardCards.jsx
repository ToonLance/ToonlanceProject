"use client";

import {
  useEffect,
  useState,
} from "react";

export default function DashboardCards() {
  const [stats, setStats] =
    useState({
      totalProjects: 0,
      totalClients: 0,
    });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats =
    async () => {
      try {
        const res =
          await fetch(
            "/api/dashboard-stats"
          );

        const data =
          await res.json();

        setStats(data);
      } catch (error) {
        console.log(error);
      }
    };

  const cards = [
    {
      title: "Projects",
      value:
        stats.totalProjects,
    },
    {
      title: "Clients",
      value:
        stats.totalClients,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {cards.map((item) => (
        <div
          key={item.title}
          className="bg-zinc-900 rounded-2xl p-6"
        >
          <p className="text-zinc-400">
            {item.title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}