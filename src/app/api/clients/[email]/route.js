
import Project from "../../../../../models/project";
import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../../lib/mongodb";

export async function GET(
  req,
  { params }
) {
  await connectMongodb();

  const { email } = await params;

  const projects = await Project.find({
    clientEmail: decodeURIComponent(
      email
    ),
  });

  return NextResponse.json(projects);
}