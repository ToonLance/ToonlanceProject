

import DashboardCards from "@/component/DashboardCards";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default  async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (
    !session ||
    session.user.email !== "a@gmail.com"
  ) {
    redirect("/");
  } 
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <DashboardCards/>
       {/* <button  onClick={()=>signOut()}  className="bg-red-400 font-bold text-white px-6 py-2 mt-3 ">Log out</button> */}
    </div>
  );
}