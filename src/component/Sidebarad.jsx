import Link from "next/link";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "Create Projects", href: "/admin/projects" },
    { name: "Clients", href: "/admin/clients" },
  ];

  return (
    <aside className="w-72 bg-zinc-900 border-r border-zinc-800">
      <div className="p-6">
        <h1 className="text-3xl font-bold">
            Karthik-Toonlance
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="block px-4 py-3 rounded-xl hover:bg-zinc-800"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}