"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ClientProjectsPage() {
  const [projects, setProjects] =
    useState([]);

  const params = useParams();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects =
    async () => {
      const res =
        await fetch(
          `/api/clients/${params.email}`
        );

      const data =
        await res.json();

      setProjects(data);
    };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Client Projects
      </h1>

      <div className="space-y-4">

        {projects.map(
          (project) => (
            <div
              key={
                project._id
              }
              className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
            >
              <h2 className="text-xl font-semibold">
                {
                  project.projectTitle
                }
              </h2>

              <p className="mt-2">
                {
                  project.clientName
                }
              </p>

              <Link
                href={`/admin/projects/${project._id}`}
                className="inline-block mt-4 bg-purple-600 px-4 py-2 rounded-xl"
              >
                Manage
                Project
              </Link>
            </div>
          )
        )}

      </div>

    </div>
  );
}