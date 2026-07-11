"use client";

export default function ApiLoader() {
    console.log("ApiLoader rendered");
  return (
    <div className="min-h-screen bg-black text-white pt-28 px-8">

      <div className="max-w-7xl mx-auto">

        Toon

        <div className="h-10 w-64 bg-zinc-800 rounded-lg animate-pulse mb-12"></div>

        Lance

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1,2,3,4,5,6].map((item)=>(
            <div
              key={item}
              className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"
            >

              <div className="h-7 w-3/4 bg-zinc-800 rounded animate-pulse mb-6"></div>

              <div className="h-3 w-full bg-zinc-800 rounded animate-pulse mb-3"></div>

              <div className="h-3 w-2/3 bg-zinc-800 rounded animate-pulse mb-8"></div>

              <div className="h-12 bg-zinc-800 rounded-xl animate-pulse"></div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}