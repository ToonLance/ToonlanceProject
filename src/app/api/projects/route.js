import { NextResponse } from "next/server";
import { connectMongodb } from "../../../../lib/mongodb";
import Project from "../../../../models/project";

export async function POST(req) {
  try {
   await connectMongodb();
    const body = await req.json();

    const {
      clientName,clientEmail,projectTitle,
       phone,
    projectCost,
    advancePaid,} = body;

    if (
      !clientName ||
      !clientEmail ||
      !projectTitle
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    const project = await Project.create({
      clientName,
      clientEmail,
      projectTitle,
      videoUrl: "",
      tasks: [
        {
          title: "Rough Sketch",
          completed: false,
        },
        {
          title: "Storyboard",
          completed: false,
        },
        {
          title: "Line Art",
          completed: false,
        },
        {
          title: "Coloring",
          completed: false,
        },
        {
          title: "Animation",
          completed: false,
        },
        {
          title: "Final Render",
          completed: false,
        },
      ],
       projectcost:projectCost,

       advancepaid:advancePaid,
  
       phone:phone,

    });

    return NextResponse.json(
      {
        success: true,
        project,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}