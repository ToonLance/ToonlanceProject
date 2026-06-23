"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
   const{data:session}=useSession();
  const [projects, setProjects] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects =
    async () => {
      try {
        const res =
          await fetch(
            "/api/client-projects"
          );

        const data =
          await res.json();
            console.log(data);
        setProjects(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-10">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map(
          (project) => {
            const completed =
              project.tasks.filter(
                (
                  task
                ) =>
                  task.completed
              ).length;

            const progress =
              Math.round(
                (completed /
                  project
                    .tasks
                    .length) *
                  100
              );

            return (
              <div
                key={
                  project._id
                }
                className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {
                    project.projectTitle
                  }
                </h2>

                <div className="flex justify-between mb-2">
                  <span>
                    Progress
                  </span>

                  <span>
                    {
                      progress
                    }
                    %
                  </span>
                </div>

                <div className="h-3 bg-zinc-800 rounded-full overflow-hidden mb-5">
                  <div
                    className="h-full bg-purple-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>

                <Link
                  href={`/dashboard/project/${project._id}`}
                  className="inline-block bg-purple-600 px-5 py-3 rounded-xl"
                >
                  View Project
                </Link>
              </div>
            );
          }
        )}

      </div>
   <div className="grid place-items-center h-screen"> 
        <div className="shadow-lg p-8  bg-zinc-300/10 flex flex-col gap-2 my-6">
         <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
         </div>
         <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
         </div>
         <button  onClick={()=>signOut()}  className="bg-red-400 font-bold text-white px-6 py-2 mt-3 ">Log out</button>
        </div>
        </div>
    </div>
    
  );

}