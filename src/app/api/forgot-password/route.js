import { NextResponse } from "next/server";
import crypto from "crypto";

import { connectMongodb } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { resend } from "../../../../lib/resend";
import { forgotPasswordLimiter } from "../../../../lib/ratelimit";
export async function POST(req) {

    try {

        await connectMongodb();
        const forwardedFor = req.headers.get("x-forwarded-for");
const ip = forwardedFor
  ? forwardedFor.split(",")[0].trim()
  : "127.0.0.1";

const { success } =
  await forgotPasswordLimiter.limit(ip);

if (!success) {
  return NextResponse.json(
    {
      message:
        "Too many password reset requests. Please try again in 15 minutes.",
    },
    {
      status: 429,
    }
  );
}

        const { email } = await req.json();

        const user = await User.findOne({ email });

        // Generic response
        if (!user) {
            return NextResponse.json({
                message:
                    "If an account exists, we've sent a reset link."
            });
        }

        // Google account
        if (user.provider === "google") {
            return NextResponse.json({
                message:
                    "This account uses Google Sign-In."
            });
        }
     // multiple email send security
     if (
  user.resetToken &&
  user.resetTokenExpiry &&
  user.resetTokenExpiry > new Date()
) {
  return NextResponse.json({
    message:
      "If an account exists, we've sent a password reset link.",
  });
}
        // Generate secure token
        const token = crypto.randomBytes(32).toString("hex");

        user.resetToken = token;

        user.resetTokenExpiry =
            new Date(Date.now() + 15 * 60 * 1000);      
        await user.save();
       const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password/${token}`;

await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "blackwhiteentertainment1234@gmail.com" ,
  subject: "Reset your Toonlance password",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 30px;">
      <h2>Reset Your Password</h2>

      <p>
        We received a request to reset your Toonlance password.
      </p>

      <a
        href="${resetUrl}"
        style="
          display:inline-block;
          margin-top:20px;
          padding:14px 24px;
          background:#7c3aed;
          color:white;
          text-decoration:none;
          border-radius:10px;
          font-weight:bold;
        "
      >
        Reset Password
      </a>

      <p style="margin-top:20px;color:#666;">
        This link expires in 15 minutes.
      </p>

      <p style="color:#666;">
        If you didn't request this, you can safely ignore this email.
      </p>
    </div>
  `,
});
return NextResponse.json({
  message:
    "If an account exists, we've sent a reset link.",
});

    } catch (error) {

        console.log(error);

        return NextResponse.json(
            {
                message: "Something went wrong."
            },
            {
                status: 500
            }
        );

    }

}