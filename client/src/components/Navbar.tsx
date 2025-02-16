import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Bio" },
  { href: "/publications", label: "Publications" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/awards", label: "Awards" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="text-lg font-bold">Mathias Felipe</a>
        </Link>
        <nav className="flex space-x-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}