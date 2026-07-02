import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function Nav({ onContact, scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-100">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-500/15 text-orange-400">
            <Zap size={14} />
          </span>
          Hiten S. Chowdhary
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `group relative text-sm transition-colors ${isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"}`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-orange-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            download="Hiten_Chowdhary_Resume.pdf"
            className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Resume
          </a>
          <button
            onClick={onContact}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-orange-500/50 hover:text-orange-300"
          >
            Get in touch
          </button>
        </nav>

        <button className="text-zinc-300 md:hidden" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `text-left text-base ${isActive ? "text-orange-400" : "text-zinc-300"}`}
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                onContact();
                setOpen(false);
              }}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-left text-sm text-zinc-200"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
