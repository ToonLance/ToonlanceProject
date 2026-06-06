"use client";

import { useState } from "react";

export default function ProjectPage() {
  const [project, setProject] = useState({
    _id: "6a1de47f006277a26e19e5d6",

    projectTitle: "Anime Intro",

    videoUrl: "",

    tasks: [
      {
        title: "Rough Sketch",
        completed: true,
      },
      {
        title: "Storyboard",
        completed: true,
      },
      {
        title: "Line Art",
        completed: false,
      },
      {
        title: "Coloring",
        completed: false,
      },
      {
        title: "Animation",
        completed: false,
      },
      {
        title: "Final Render",
        completed: false,
      },
    ],
  });

  const completedTasks =
    project.tasks.filter(
      (task) => task.completed
    ).length;

  const progress = Math.round(
    (completedTasks /
      project.tasks.length) *
      100
  );

  const toggleTask = (index) => {
    const updatedTasks = [...project.tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setProject({
      ...project,
      tasks: updatedTasks,
    });
  };

  const handleVideoUpload = async (
    e
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    try {
      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      formData.append(
  "upload_preset",
  "toonlance_videos"
);
      const response =
        await fetch(
          "https://api.cloudinary.com/v1_1/dqxenh8mh/video/upload",
          {
            method: "POST",
            body: formData,
          }
        );

      const data =
        await response.json();

      setProject((prev) => ({
        ...prev,
        videoUrl:
          data.secure_url,
      }));
    } catch (error) {
      console.error(error);
      alert(
        "Video upload failed"
      );
    }
  };

  const saveProject =
    async () => {
      try {
        console.log(project._id);
        await fetch(
          `/api/projects/${project._id}`,
          {
            method: "PATCH",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              tasks:
                project.tasks,

              videoUrl:
                project.videoUrl,
            }),
          }
        );

        alert(
          "Project Updated Successfully"
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            {
              project.projectTitle
            }
          </h1>

          <p className="text-zinc-400 mt-2">
            Manage project
            progress and
            preview videos
          </p>
        </div>

        <button
          onClick={
            saveProject
          }
          className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl text-white"
        >
          Save Changes
        </button>
      </div>

      {/* Progress */}

      <div className="bg-zinc-900 rounded-3xl p-6 mb-8 border border-zinc-800">

        <div className="flex justify-between mb-3">
          <span className="font-medium">
            Progress
          </span>

          <span>
            {progress}%
          </span>
        </div>

        <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">

          <div
            className="h-full bg-purple-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Checklist */}

        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

          <h2 className="text-2xl font-semibold mb-6">
            Production
            Stages
          </h2>

          <div className="space-y-4">

            {project.tasks.map(
              (
                task,
                index
              ) => (
                <div
                  key={
                    task.title
                  }
                  className="flex items-center gap-4"
                >
                  <input
                    type="checkbox"
                    checked={
                      task.completed
                    }
                    onChange={() =>
                      toggleTask(
                        index
                      )
                    }
                    className="w-5 h-5 cursor-pointer"
                  />

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

        {/* Video Upload */}

        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">

          <h2 className="text-2xl font-semibold mb-6">
            Preview
            Video
          </h2>

          {project.videoUrl ? (
            <video
              controls
              className="w-full rounded-xl mb-4"
              src={
                project.videoUrl
              }
            />
          ) : (
            <div className="h-64 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 mb-4">
              No Video
              Uploaded
            </div>
          )}

          <input
            type="file"
            accept="video/*"
            onChange={
              handleVideoUpload
            }
            className="block w-full text-sm"
          />

        </div>

      </div>

    </div>
  );
}