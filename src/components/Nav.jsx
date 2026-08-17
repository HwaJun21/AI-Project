import { NavLink } from "react-router-dom";

const links = [
  { to: "/my-task", label: "My Task" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/task-setting", label: "Task Setting" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-navy-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-teal-500" />
          <span className="font-display text-sm font-semibold tracking-widest text-white/90">
            SAMSUNG SDS
          </span>
          <span className="ml-2 hidden font-body text-xs text-white/40 sm:inline">
            Next-Gen Data Migration
          </span>
        </NavLink>
        <nav>
          <ul className="flex items-center gap-8 font-display text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `path-connector pb-1 transition-colors ${
                      isActive ? "text-teal-500" : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
