"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "px-3 py-2 rounded-xl font-medium transition",
        active
          ? "text-white bg-gradient-to-r from-indigo-600 to-purple-500 shadow-md"
          : "text-gray-700 hover:text-indigo-600"
      )}
    >
      {children}
    </Link>
  );
};

export function Navbar() {
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-40 border-b">
      <nav className="container flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-extrabold text-xl bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent"
        >
          RB.
        </Link>
        <div className="flex items-center gap-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
