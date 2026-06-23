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
        <div className="grid place-items-center h-screen "> 
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