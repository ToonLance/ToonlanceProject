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
            console.log("plz",data);
        setProjects(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
 const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/myzenzjg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const formMessage = document.getElementById("formMessage");

    if (response.ok) {
      formMessage.classList.remove("hidden");
      formMessage.innerHTML =
        "<p class='text-green-400'>Thanks! we will reach out in 24 Hr</p>";

      e.target.reset();
    } else {
      formMessage.classList.remove("hidden");
      formMessage.innerHTML =
        "<p class='text-red-400'>Something went wrong. Try again.</p>";
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }
  if (projects.length === 0) {
  return (
    <div className="p-10">
       <div>
      <section
        id="contact"
        className="bg-black text-white py-20 px-5"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-bold text-center mb-14">
            Start Your <span className="text-gray-400">Animation Project</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Side */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">

              <h3 className="text-3xl font-semibold mb-2">
                Get in Touch
              </h3>

              <p className="text-gray-400 mb-8">
                We're just a message away
              </p>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
                    <i className="fas fa-envelope"></i>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-400">
                      toonlanceservice@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
                    <i className="fab fa-discord"></i>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">Discord</h4>
                    <p className="text-gray-400">@toonlance</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
                    <i className="fas fa-clock"></i>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">
                      Response Time
                    </h4>
                    <p className="text-gray-400">
                      Within 24 hours
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-5">

                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@gmail.com"
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                  />
                </div>

              </div>

              {/* Discord */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Discord Username
                </label>

                <input
                  type="text"
                  name="discord"
                  placeholder="@username"
                  className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* Budget */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Budget *
                  </label>

                  <input
                    type="text"
                    name="budget"
                    placeholder="$350 - $5000"
                    required
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block mb-2 text-sm text-gray-300">
                    Service *
                  </label>

                  <select
                    name="service"
                    required
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                  >
                    <option value="">Select</option>
                    <option>2D Animation</option>
                    <option>Storyboard</option>
                    <option>Character Design</option>
                    <option>Background Art</option>
                    <option>Cartoon Series</option>
                  </select>
                </div>

              </div>

              {/* Timeline */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Project Timeline
                </label>

                <select
                  name="timeline"
                  className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                >
                  <option value="">Select Timeline</option>
                  <option>1 Week</option>
                  <option>2 Weeks</option>
                  <option>1 Month</option>
                  <option>2-3 Months</option>
                  <option>Flexible</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Project Details *
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder=""
                  className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-white transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 transition duration-300"
              >
                Send Inquiry{" "}
                <i className="fas fa-paper-plane ml-2"></i>
              </button>

              {/* Success/Error Message */}
              <div
                id="formMessage"
                className="mt-4 hidden text-center"
              ></div>

            </form>

          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

  return (
  <div className="max-w-7xl mx-auto px-6 py-12 mt-20">

    <div className="mb-12">
      <h1 className="text-5xl font-bold">
        My Projects
      </h1>

      <p className="text-zinc-400 mt-3 text-lg">
        Track the progress of your animation projects.
      </p>
    </div>

    {projects.length === 0 ? (
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          No Projects Yet
        </h2>

        <p className="text-zinc-500">
          Your projects will appear here once the admin creates one.
        </p>
      </div>
    ) : (

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project) => {

          const completed =
            project.tasks.filter(
              (task) => task.completed
            ).length;

          const progress = Math.round(
            (completed / project.tasks.length) * 100
          );

          return (

            <div
              key={project._id}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,.2)] transition-all duration-300"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-semibold mb-2">
                    {project.projectTitle}
                  </h2>

                  <p className="text-zinc-500 text-sm">
                    {completed} of {project.tasks.length} tasks completed
                  </p>

                </div>

                <div className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                  {progress}%
                </div>

              </div>

              <div className="mt-8">

                <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

              </div>

              <div className="mt-8 space-y-3">

                <div className="flex justify-between text-zinc-400">

                  <span>Owner</span>

                  <span>{project.clientName}</span>

                </div>

  

              </div>

              <Link
                href={`/dashboard/project/${project._id}`}
                className="mt-8 w-full flex justify-center items-center rounded-2xl bg-purple-600 hover:bg-purple-700 transition py-4 font-semibold"
              >
                View Project →
              </Link>

            </div>

          );

        })}

      </div>

    )}

  </div>
);

}