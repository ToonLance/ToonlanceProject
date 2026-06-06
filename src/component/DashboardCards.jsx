export default function DashboardCards() {
  const stats = [
    {
      title: "Projects",
      value: "18",
    },
    {
      title: "Clients",
      value: "12",
    },
    {
      title: "Reviews",
      value: "4",
    },
    {
      title: "Revenue",
      value: "₹1.2L",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-5">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-zinc-900 rounded-2xl p-6"
        >
          <p>{item.title}</p>

          <h2 className="text-4xl font-bold mt-3">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}