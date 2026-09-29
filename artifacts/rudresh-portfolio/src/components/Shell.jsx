import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@workspace/portfolio-design-system/components/ui/button";

export default function Shell({ children }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const links = [["/", "Overview"], ["/work", "Selected work"], ["/architecture", "Architecture lab"], ["/contact", "Contact"]];
  return <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3" data-testid="link-logo">
          <span className="brand-mark">RN</span><span className="font-mono text-xs tracking-[0.2em]">RUDRESH NAVALI</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {links.map(([href, label]) => <Link key={href} href={href} data-testid={`link-nav-${label.toLowerCase().replaceAll(" ", "-")}`} className={`nav-link ${location === href ? "nav-link-active" : ""}`}>{label}</Link>)}
        </nav>
        <Button className="md:hidden" size="icon" variant="ghost" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} data-testid="button-mobile-menu">{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="mobile-nav md:hidden" aria-label="Mobile navigation">{links.map(([href, label]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="mobile-nav-link" data-testid={`link-mobile-${label}`}>{label}<ArrowUpRight size={16} /></Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-border px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
      <span className="font-mono">© {new Date().getFullYear()} Rudresh Navali</span><span>Built for the edge cases.</span>
    </footer>
  </div>;
}