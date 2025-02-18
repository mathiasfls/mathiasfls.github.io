import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Bio/CV" },
  { href: "/consulting", label: "Consulting" },
  { href: "/research", label: "Research" },
  { href: "/journalism", label: "Journalism" },
  { href: "/awards", label: "Awards & Grants" },
  { href: "/media-coverage", label: "Media Coverage" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container px-6 flex h-16 items-center justify-between">
        <Link href="/">
          <a className="text-lg font-bold px-2">Mathias Felipe</a>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
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

        {/* Mobile menu button and navigation */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {mobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-background border-b">
              <nav className="container px-6 py-4 flex flex-col space-y-4">
                {links.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                        location === link.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}