import { useMemo } from "react";

export default function ClientDashboard() {
  const checklist = [
    {
      title: "rough sketch",
      completed: true,
    },
    {
      title: "clean line art",
      completed: true,
    },
    {
      title: "coloring",
      completed: false,
    },
    {
      title: "final animation",
      completed: false,
    },
  ];

  const progress = useMemo(() => {
    const completedTasks = checklist.filter(
      (item) => item.completed
    ).length;

    return Math.round((completedTasks / checklist.length) * 100);
  }, [checklist]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-8">
      <div className="w-full max-w-6xl border border-zinc-800 bg-black p-10 rounded-sm">
        <h1 className="text-center text-5xl font-serif mb-16 tracking-wide">
          client dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-serif mb-20">
              client project name
            </h2>

            <div className="space-y-10">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6"
                >
                  <div
                    className={`w-10 h-10 border border-white flex items-center justify-center ${
                      item.completed
                        ? "bg-white text-black"
                        : "bg-transparent"
                    }`}
                  >
                    {item.completed && (
                      <span className="text-lg">✓</span>
                    )}
                  </div>

                  <p className="text-3xl font-serif text-zinc-100 lowercase">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-serif mb-10 text-center">
              video from cloud
            </h2>

            <div className="w-full max-w-md overflow-hidden border border-zinc-700 bg-zinc-900">
              <video
                className="w-full h-64 object-cover"
                controls
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              />
            </div>

            <div className="w-full max-w-md bg-zinc-300 mt-12 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-4xl text-black font-serif">
                  progress
                </h3>

                <span className="text-2xl text-black font-serif">
                  {progress}%
                </span>
              </div>

              <div className="w-full h-8 bg-zinc-500 overflow-hidden">
                <div
                  className="h-full bg-black transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-black mt-4 text-lg font-serif">
                progress updates automatically based on completed checklist
                items.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <button className="bg-zinc-300 text-black px-24 py-6 text-4xl font-serif hover:bg-white transition-all duration-300">
            payment
          </button>
        </div>
      </div>
    </div>
  );
}

