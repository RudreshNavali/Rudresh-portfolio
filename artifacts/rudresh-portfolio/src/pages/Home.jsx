import { ArrowDownRight, ArrowUpRight, Code2, Gauge, Layers3, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@workspace/portfolio-design-system/components/ui/button";
import { Badge } from "@workspace/portfolio-design-system/components/ui/badge";
import { Card, CardContent } from "@workspace/portfolio-design-system/components/ui/card";

const signals = [["01", "React systems", "Reusable primitives that stay coherent as teams and surfaces multiply.", Code2], ["02", "Performance", "Route-level thinking, measured trade-offs, and less work on the critical path.", Gauge], ["03", "Inclusive by default", "WCAG-aware interfaces that work with keyboards, assistive tech, and real constraints.", ShieldCheck]];
export default function Home() { return <div>
  <section className="hero-grid mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
    <div className="max-w-5xl">
      <p className="eyebrow reveal">Technology lead / frontend systems</p>
      <h1 className="display reveal reveal-delay-1">I make the hard parts<br /><span className="accent-text">feel inevitable.</span></h1>
      <div className="mt-8 flex max-w-2xl flex-col gap-6 md:flex-row md:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">I’m Rudresh Navali. I turn difficult frontend constraints into fast, accessible, maintainable product experiences — from large travel surfaces to the systems underneath them.</p>
        <Link href="/work" className="shrink-0"><Button size="lg" data-testid="button-explore-work">Explore the work <ArrowUpRight /></Button></Link>
      </div>
    </div>
    <div className="hero-note reveal reveal-delay-2" aria-label="Current role">
      <span className="font-mono text-xs text-primary">CURRENT POSITION</span><strong>Technology Lead</strong><span className="text-muted-foreground">Infosys · Mar 2021 — present</span><span className="mt-3 block border-t border-border pt-3 font-mono text-xs text-muted-foreground">5+ years shipping at production scale</span>
    </div>
  </section>
  <section className="mx-auto max-w-7xl px-5 pb-24 md:px-10"><div className="mb-8 flex items-end justify-between"><div><p className="eyebrow">The operating system</p><h2 className="section-title">What I bring to a constraint.</h2></div><ArrowDownRight className="hidden text-primary md:block" /></div>
    <div className="grid gap-4 md:grid-cols-3">{signals.map(([num, title, body, Icon]) => <Card key={num} className="signal-card"><CardContent className="p-6"><div className="mb-12 flex items-start justify-between"><span className="font-mono text-sm text-primary">{num}</span><Icon className="text-muted-foreground" size={22} /></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{body}</p></CardContent></Card>)}</div>
  </section>
  <section className="band"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1fr_2fr] md:px-10"><div><Badge variant="outline">A field note</Badge></div><blockquote className="max-w-3xl text-2xl font-medium leading-tight md:text-4xl">“Good frontend work is not decoration. It is the quiet removal of friction — for the user, the browser, and the next engineer.”</blockquote></div></section>
  <section className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-24 md:flex-row md:items-center md:justify-between md:px-10"><div><p className="eyebrow">Go deeper</p><h2 className="section-title">See how the system holds.</h2></div><Link href="/architecture"><Button variant="outline" size="lg" data-testid="button-architecture">Open architecture lab <Layers3 /></Button></Link></section>
</div>; }