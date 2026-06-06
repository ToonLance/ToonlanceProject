import Project from "../../../../models/project";
import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";

export async function GET() {
  await connectMongodb();

  const projects = await Project.find();

  const clientsMap = new Map();

  projects.forEach((project) => {
    const email = project.clientEmail;

    if (!clientsMap.has(email)) {
      clientsMap.set(email, {
        clientName: project.clientName,
        clientEmail: project.clientEmail,
        totalProjects: 1,
      });
    } else {
      clientsMap.get(email).totalProjects++;
    }
  });

  return NextResponse.json(
    Array.from(clientsMap.values())
  );
}