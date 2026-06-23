import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import Project from "../../../../models/project";

export async function GET() {
  try {
    await connectMongodb();

    const projects = await Project.find();

    const totalProjects = projects.length;

    const uniqueClients = new Set(
      projects.map(
        (project) => project.clientEmail
      )
    );

    const totalClients =
      uniqueClients.size;

    return NextResponse.json({
      totalProjects,
      totalClients,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}