"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ApiLoader from "@/component/ApiLoader";

export default function ProjectPage() {
  const params = useParams();

  const [project, setProject] = useState(null);
 const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
    const res = await fetch(`/api/projects/${params.id}`);
    const data = await res.json();
    if (!res.ok) {
  console.error(data.message);
  return;
}
    setProject(data);
  } finally {
    setLoading(false);
  }
  };
 if (loading) {
  return <ApiLoader />;
}
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }
  const completed = project.tasks.filter(
    (task) => task.completed
  ).length;

  const progress = Math.round(
    (completed / project.tasks.length) * 100
  );

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6 lg:px-12 pb-20">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">

        <div>
          <h1 className="text-5xl font-bold">
            {project.projectTitle}
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Client: {project.clientName}
          </p>

          <p className="text-zinc-500">
            {project.clientEmail}
          </p>
        </div>

        <div className="mt-6 lg:mt-0 bg-purple-600/20 text-purple-400 px-6 py-3 rounded-full font-semibold text-lg">
          {progress}% Completed
        </div>

      </div>

      {/* Progress */}

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">

        <div className="flex justify-between mb-4">

          <h2 className="text-2xl font-semibold">
            Project Progress
          </h2>

          <span className="text-purple-400 text-xl">
            {completed}/{project.tasks.length}
          </span>

        </div>

        <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

          <div
            className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Video + Checklist */}

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Video */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-semibold mb-6">
            Latest Preview
          </h2>

          {project.videoUrl ? (

            <video
              controls
              className="w-full rounded-2xl border border-zinc-800"
            >
              <source
                src={project.videoUrl}
                type="video/mp4"
              />
            </video>

          ) : (

            <div className="h-72 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-500">
              No Preview Uploaded Yet
            </div>

          )}

        </div>

        {/* Checklist */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-3xl font-semibold mb-6">
            Production Progress
          </h2>

          <div className="space-y-5">

            {project.tasks.map((task) => (

              <div
                key={task._id}
                className="flex items-center gap-4 bg-zinc-800 rounded-2xl p-4"
              >

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    task.completed
                      ? "bg-green-500 text-white"
                      : "bg-zinc-700 text-zinc-400"
                  }`}
                >
                  {task.completed ? "✓" : ""}
                </div>

                <span className="text-lg">
                  {task.title}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Details */}

      <div className="mt-12">

        <h2 className="text-3xl font-semibold mb-8">
          Project Details
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <p className="text-zinc-500 mb-3">
              Project Cost
            </p>

            <h3 className="text-4xl font-bold text-purple-400">
              ${project.projectcost}
            </h3>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <p className="text-zinc-500 mb-3">
              Advance Paid
            </p>

            <h3 className="text-4xl font-bold text-green-400">
              ${project.advancepaid}
            </h3>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <p className="text-zinc-500 mb-3">
              Contact Number
            </p>

            <h3 className="text-2xl font-semibold">
              {project.phone}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}