import { NextResponse } from "next/server";
import Project from "../../../../models/project";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongodb } from "../../../../lib/mongodb";

export async function GET() {
  try {
    await connectMongodb();

    const session =
      await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const projects =
      await Project.find({
        clientEmail:
          session.user.email,
      });

    return NextResponse.json(
      projects
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}