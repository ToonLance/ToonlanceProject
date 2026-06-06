import { connectMongodb } from "../../../../../lib/mongodb";
import Project from "../../../../../models/project";
import { NextResponse } from "next/server";

export async function PATCH(
  req,
  { params }
) {
  try {
    await connectMongodb();

    const { id } =
      await params;
    console.log(id);
    const body =
      await req.json();

    const updatedProject =
      await Project.findByIdAndUpdate(
        id,
        {
          $set: body,
        },
        {
          returnDocument:
            "after",
        }
      );

    return NextResponse.json(
      updatedProject
    );
  } catch (error) {
    console.error(error);

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