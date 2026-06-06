"use client";

import {
  useEffect,
  useState,
} from "react";

import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();

  const [project, setProject] =
    useState(null);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject =
    async () => {
      const res =
        await fetch(
          `/api/projects/${params.id}`
        );

      const data =
        await res.json();

      setProject(data);
    };

  if (!project) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  const completed =
    project.tasks.filter(
      (task) =>
        task.completed
    ).length;

  const progress =
    Math.round(
      (completed /
        project.tasks.length) *
        100
    );

  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        {
          project.projectTitle
        }
      </h1>

      <div className="bg-zinc-900 rounded-3xl p-6 mb-8">

        <div className="flex justify-between mb-3">
          <span>
            Progress
          </span>

          <span>
            {progress}%
          </span>
        </div>

        <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

          <div
            className="h-full bg-purple-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <div className="bg-zinc-900 rounded-3xl p-6 mb-8">

        <h2 className="text-2xl mb-4">
          Latest Preview
        </h2>

        {project.videoUrl ? (
          <video
  controls
className="w-full max-w-md mx-auto rounded-xl"
>
  <source
    src={project.videoUrl}
    type="video/mp4"
  />
</video>
        ) : (
          <p>
            No preview
            uploaded yet
          </p>
        )}

      </div>

      <div className="bg-zinc-900 rounded-3xl p-6">

        <h2 className="text-2xl mb-5">
          Production Progress
        </h2>

        <div className="space-y-4">

          {project.tasks.map(
            (task) => (
              <div
                key={
                  task._id
                }
                className="flex items-center gap-3"
              >
                <span>
                  {task.completed
                    ? "✅"
                    : "⬜"}
                </span>

                <span>
                  {
                    task.title
                  }
                </span>
              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}