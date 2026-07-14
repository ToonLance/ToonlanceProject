"use client";

import { useState } from "react";


export default function CreateProjectPage() {
  const [formData, setFormData] = useState({
    clientName:"",
    clientEmail:"",
    phone:"",
    projectCost:"",
    advancePaid:"",
    projectTitle:"",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // console.log(formData);
 
const response = await fetch(
  "/api/projects",
  {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json",
    },

    body: JSON.stringify(formData),
  }
);

const data = await response.json();
console.log(data);

if (response.ok) {
  alert("Project Created Successfully");
} else {
  alert(data.message || "Failed to create project");
}
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-20">
      <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

        <h1 className="text-4xl font-bold text-white mb-8">
          Create New Project
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* CLIENT DETAILS */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Client Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="clientName"
                placeholder="Client Name"
                value={formData.clientName}
                onChange={handleChange}
                className="p-4 rounded-xl bg-zinc-800 text-white"
                  required
              />

              <input
                type="email"
                name="clientEmail"
                placeholder="Client Email"
                value={formData.clientEmail}
                onChange={handleChange}
                className="p-4 rounded-xl bg-zinc-800 text-white"
                  required
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-4 rounded-xl bg-zinc-800 text-white"
              />
            </div>
          </div>

          {/* PROJECT DETAILS */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Project Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="projectTitle"
                placeholder="Project Title"
                value={formData.projectTitle}
                onChange={handleChange}
                className="p-4 rounded-xl bg-zinc-800 text-white"
                  required
              />
            </div>
          </div>
          {/* PAYMENT */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Payment Details
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="number"
                name="projectCost"
                placeholder="Project Cost"
                value={formData.projectCost}
                onChange={handleChange}
                className="p-4 rounded-xl bg-zinc-800 text-white"
              />

              <input
                type="number"
                name="advancePaid"
                placeholder="Advance Paid"
                value={formData.advancePaid}
                onChange={handleChange}
                className="p-4 rounded-xl bg-zinc-800 text-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl font-semibold text-white"
          >
            Create Project
          </button>

        </form>
      </div>
    </div>
  );
}