

import DashboardCards from "@/component/DashboardCards";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default  async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (
    !session ||
    session.user.email !== process.env.ADMIN_EMAIL
  ) {
    redirect("/");
  } 
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <DashboardCards/>
    </div>
  );
}