import mongoose, { models, Schema } from "mongoose";


const  projectSchema=new Schema({
  projectTitle: String,

  clientName: String,

  clientEmail: String,

  videoUrl: String,

  tasks: [
    {
      title: String,
      completed: Boolean
    }
  ],
  projectcost:{
    type:Number
  },
  advancepaid:{
    type:Number
  },
  phone:{
    type:Number,
}
},{timestamps:true});

const Project=models.Project||mongoose.model("Project",projectSchema);

export default Project;