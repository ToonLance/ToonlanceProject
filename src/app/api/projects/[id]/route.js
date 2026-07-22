import { NextResponse } from "next/server";
import Project from "../../../../../models/project";
import { connectMongodb } from "../../../../../lib/mongodb";
import { requireAdmin } from "../../../../../lib/requireadmin";

export async function GET(req, { params }) {
  try {
    const adminError = await requireAdmin();

    await connectMongodb();

    const { id } = await params;

    const project =
      await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req,
  { params }
) {
  try {
     const adminError = await requireAdmin();

if (adminError) {
  return adminError;
}
    await connectMongodb();

    const { id } = await params;

    console.log("PATCH ID:", id);

    const body = await req.json();

    console.log("PATCH BODY:", body);

    const updatedProject =
      await Project.findByIdAndUpdate(
        id,
        {
          $set: body,
        },
        {
          returnDocument: "after",
        }
      );

    console.log(
      "UPDATED:",
      updatedProject
    );

    return NextResponse.json(
      updatedProject
    );
  } catch (error) {
    console.error(
      "PATCH ERROR:",
      error
    );

    return NextResponse.json(
      {
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(
  req,
  { params }
) {
  try {
     const adminError = await requireAdmin();

if (adminError) {
  return adminError;
}
    await connectMongodb();

    const { id } = await params;

    await Project.findByIdAndDelete(id);

    return NextResponse.json({
      message:
        "Project Deleted Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error.message,
      },
      {
        status: 500,
      }
    );
  }
}