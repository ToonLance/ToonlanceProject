"use client";

import {
  useEffect,
  useState,
} from "react";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject =
    async () => {
      try {
        const res =
          await fetch(
            `/api/projects/${params.id}`
          );

        const data =
          await res.json();

        setProject(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const toggleTask = (index) => {
    const updatedTasks = [
      ...project.tasks,
    ];

    updatedTasks[index].completed =
      !updatedTasks[index]
        .completed;

    setProject({
      ...project,
      tasks: updatedTasks,
    });
  };

  const completedTasks =
    project?.tasks?.filter(
      (task) => task.completed
    ).length || 0;

  const progress =
    project?.tasks?.length
      ? Math.round(
          (completedTasks /
            project.tasks.length) *
            100
        )
      : 0;

  const handleVideoUpload =
    async (e) => {
      const file =
        e.target.files[0];

      if (!file) return;

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
        console.log("CLOUDINARY DATA:", data);
        setProject((prev) => {
  console.log(
    "SETTING URL:",
    data.secure_url
  );

  return {
    ...prev,
    videoUrl: data.secure_url,
  };
});

      setProject((prev) => ({
        ...prev,
        videoUrl:
          data.secure_url,
      }));
    };
console.log("VIDEO URL BEFORE SAVE:");
// console.log(project.videoUrl);
const deleteProject =
  async () => {

    const confirmDelete =
      confirm(
        "Are you sure?"
      );

    if (!confirmDelete)
      return;

    try {
      const res =
        await fetch(
          `/api/projects/${project._id}`,
          {
            method:
              "DELETE",
          }
        );

      const data =
        await res.json();


      router.push(
        "/admin/clients"
      );
 
      // alert(data.message);

    } catch (error) {
      console.log(error);
    }
  };



  const saveProject = async () => {
  try {
    console.log("PROJECT ID:", project._id);
    console.log(
  "VIDEO URL BEFORE SAVE:",
  project.videoUrl
);
    const res = await fetch(
      `/api/projects/${project._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          tasks: project.tasks,
          videoUrl: project.videoUrl,
        }),
      }
    );

    console.log("STATUS:", res.status);

    const data = await res.json();

    console.log("RESPONSE:", data);

    setProject(data);
    if(res.ok){
      alert("saved changes!!");
    }
  } catch (error) {
    console.log(error);
  }
};

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-10">
        Project Not Found
      </div>
    );
  }
  console.log("PROJECT:", project);

  return (
    <div className="max-w-7xl mx-auto p-8 mt-10">

      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-4xl font-bold">
            {
              project.projectTitle
            }
          </h1>

          <p className="text-zinc-400 mt-2">
            {
              project.clientName
            }
          </p>

          <p className="text-zinc-500">
            {
              project.clientEmail
            }
          </p>
        </div>
         
        <button
          onClick={
            saveProject
          }
          className="bg-purple-600 px-5 py-3 rounded-xl"
        >
          Save Changes
        </button>
   
      </div>

      {/* Progress */}

      <div className="bg-zinc-900 p-6 rounded-3xl mb-8">

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

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Checklist */}

        <div className="bg-zinc-900 p-6 rounded-3xl">

          <h2 className="text-2xl mb-6">
            Production Stages
          </h2>

          <div className="space-y-4">

            {project?.tasks?.map((task, index) => (
  <div
    key={task._id || task.title}
    className="flex items-center gap-3"
  >
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTask(index)}
    />

    <span>{task.title}</span>
  </div>
))}

          </div>

        </div>

        {/* Video */}

        <div className="bg-zinc-900 p-6 rounded-3xl">

          <h2 className="text-2xl mb-6">
            Preview Video
          </h2>

          {project.videoUrl ? (
            <video
              controls
              className="w-full rounded-xl mb-5"
              src={
                project.videoUrl
              }
            />
          ) : (
            <div className="h-64 bg-zinc-800 rounded-xl flex items-center justify-center mb-5">
              No Video Uploaded
            </div>
          )}

          <input
            type="file"
            accept="video/*"
            onChange={
              handleVideoUpload
            }
          />

        </div>

      </div>
      <div className="flex justify-center items-center ">
            <button
    onClick={deleteProject}
    className="bg-red-600 px-50 py-3  rounded-xl mt-6"
  >
    Delete Project
  </button>
  </div>
    </div>
  );
}