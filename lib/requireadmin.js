import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  if (
    session.user.email !== process.env.ADMIN_EMAIL
  ) {
    return NextResponse.json(
      {
        message: "Forbidden",
      },
      {
        status: 403,
      }
    );
  }

  return null;
}