export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-6xl font-bold mb-10">
          Toon
          <span className="text-purple-500">
            lance
          </span>
        </h1>

        <div className="flex justify-center gap-3">

          <span className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"></span>

          <span
            className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>

          <span
            className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>

        </div>

        <p className="mt-8 text-zinc-500 tracking-[0.25em] uppercase">
          Preparing your animation...
        </p>

      </div>

    </div>
  );
}