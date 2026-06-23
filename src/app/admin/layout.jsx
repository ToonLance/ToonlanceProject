
import Sidebar from "@/component/Sidebarad";
import { AuthProvider } from "../api/Provider";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default  async function AdminLayout({
  children,
}) {
    const session = await getServerSession(authOptions);
  
    if (
      !session ||
      session.user.email !== "a@gmail.com"
    ) {
      redirect("/");
    }
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
          <AuthProvider>
      <Sidebar/>

      <main className="flex-1 p-8">
        {children}

      </main>
      </AuthProvider>
    </div>
  );
}