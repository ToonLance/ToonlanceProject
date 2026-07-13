"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const res = await fetch("/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    setMessage(data.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8">

        <h1 className="text-3xl font-bold mb-3">
          Forgot Password
        </h1>

        <p className="text-zinc-400 mb-8">
          Enter your email and we'll send you a password reset link.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500"
          />

          <button
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold transition"
          >
            {loading
              ? "Sending..."
              : "Send Reset Link"}
          </button>

        </form>

        {message && (
          <p className="mt-6 text-center text-green-400">
            {message}
          </p>
        )}

      </div>

    </div>
  );
}