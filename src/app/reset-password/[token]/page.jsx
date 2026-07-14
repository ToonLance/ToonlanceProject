"use client";

import { useParams, useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function ResetPassword() {
  const { token } = useParams();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
  useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        password,
      }),
    });

    const data = await res.json();

    setMessage(data.message);

    setLoading(false);

    if (res.ok) {
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-5">

      <div className="w-full max-w-md bg-zinc-900 rounded-3xl border border-white/10 p-8">

        <h1 className="text-3xl font-bold mb-3">
          Reset Password
        </h1>

        <p className="text-zinc-400 mb-8">
          Enter your new password.
        </p>
     
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          
          <div className="relative">
          <input
          type={showPassword ? "text" : "password"}
            placeholder="New Password"
            required
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:border-purple-500 outline-none"
          />
            <button
    type="button"
    onClick={() =>
      setShowPassword(!showPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
  >
    {showPassword ? (
      <EyeOff size={20} />
    ) : (
      <Eye size={20} />
    )}
  </button>
 </div>
 <div className="relative">
          <input
          type={
  showConfirmPassword
    ? "text"
    : "password"
}
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 focus:border-purple-500 outline-none"
          />

  <button
    type="button"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
  >
    {showConfirmPassword ? (
      <EyeOff size={20} />
    ) : (
      <Eye size={20} />
    )}
  </button>
          </div>
          <p className="text-sm text-zinc-400">
Password must contain:
</p>

<ul className="text-sm text-zinc-500 list-disc ml-5 space-y-1">
  <li>Minimum 8 characters</li>
  <li>One uppercase letter</li>
  <li>One lowercase letter</li>
  <li>One number</li>
  <li>One special character</li>
</ul>
          <button
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold transition"
          >
            {loading
              ? "Updating..."
              : "Reset Password"}
          </button>

        </form>

        {message && (
          <p className="mt-6 text-center">
            {message}
          </p>
        )}

      </div>

    </div>
  );
}