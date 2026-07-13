import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "../../../../models/user";
import { connectMongodb } from "../../../../lib/mongodb";
import { isStrongPassword } from "../../../../lib/passwordvalidator";

export async function POST(req) {
  try {
    await connectMongodb

    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        {
          message: "Missing required fields.",
        },
        { status: 400 }
      );
    }

    // Find user with valid token
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: new Date() },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Invalid or expired reset link.",
        },
        { status: 400 }
      );
    }
    //paswword requirements
    if (!isStrongPassword(password)) {
  return NextResponse.json(
    {
      message:
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
    },
    {
      status:400,
    }
  );
}
    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update password
    user.password = hashedPassword;

    // Remove reset token
    user.resetToken = null;
    user.resetTokenExpiry = null;

    await user.save();

    return NextResponse.json({
      message: "Password reset successfully.",
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}