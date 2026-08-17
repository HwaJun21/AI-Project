import { Link } from "react-router-dom";

const accent = {
  cyan: "text-teal-500 bg-teal-500/10",
  orange: "text-amber-500 bg-amber-500/10",
  rose: "text-rose-600 bg-rose-600/10",
  navy: "text-navy-800 bg-navy-800/10",
};

export default function ServiceCard({ to, icon, accentKey, title, lines }) {
  return (
    <Link
      to={to}
      className="group relative flex flex-col gap-3 rounded-2xl border border-navy-950/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${accent[accentKey]}`}
      >
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-navy-950 group-hover:text-teal-600">
        {title}
      </h3>
      <div className="space-y-1.5">
        {lines.map((line, i) => (
          <p key={i} className="pl-4 text-left text-sm leading-relaxed text-navy-950/60 -indent-4">
            ■ {line}
          </p>
        ))}
      </div>
    </Link>
  );
}
