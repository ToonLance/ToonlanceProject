
import Sidebar from "@/component/Sidebarad";
import { AuthProvider } from "../api/Provider";

export default function AdminLayout({
  children,
}) {
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