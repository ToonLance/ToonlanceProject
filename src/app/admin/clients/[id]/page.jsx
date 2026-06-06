import Link from "next/link";

export default function ClientDetailsPage() {
  const client = {
    clientName: "John Smith",
    clientEmail: "john@gmail.com",
  };

  const projects = [
    {
      _id: "1",
      title: "Anime Intro",
      progress: 50,
    },
    {
      _id: "2",
      title: "YouTube Intro",
      progress: 80,
    },
  ];

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        {client.clientName}
      </h1>

      <p className="text-zinc-400 mb-10">
        {client.clientEmail}
      </p>

      <div className="space-y-5">

        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >
            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-3">
                  Progress: {project.progress}%
                </p>
              </div>

              <Link
                href={`/admin/projects/${project._id}`}
                className="bg-purple-600 px-5 py-3 rounded-xl"
              >
                Manage
              </Link>

            </div>

            <div className="h-3 bg-zinc-800 mt-5 rounded-full">
              <div
                className="h-full bg-purple-500 rounded-full"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}