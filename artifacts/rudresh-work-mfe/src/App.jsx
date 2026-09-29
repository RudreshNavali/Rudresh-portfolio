import {
  ArrowUpRight,
  Braces,
  CheckCircle2,
  ChevronRight,
  Code2,
  Command,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Badge } from "@workspace/portfolio-design-system/components/ui/badge";
import { Button } from "@workspace/portfolio-design-system/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/portfolio-design-system/components/ui/card";

const work = [
  {
    number: "01",
    eyebrow: "United Airlines · Product engineering",
    title: "The journey starts before takeoff",
    description:
      "Selected work across the United.com homepage, shopping, and payments experiences—building responsive, accessible interfaces for a global travel product.",
    capabilities: ["React", "Redux Toolkit", "Redux Saga", "JavaScript"],
    accent: "bg-primary",
  },
  {
    number: "02",
    eyebrow: "United Airlines · Mexico onsite engagement",
    title: "Designing for the details between",
    description:
      "A close collaboration with product and design teams to turn Figma explorations into resilient UI, with accessibility and performance considered from the first component.",
    capabilities: ["Figma", "WCAG", "Responsive design", "Performance optimization"],
    accent: "bg-accent",
  },
  {
    number: "03",
    eyebrow: "Infosys · Systems and platforms",
    title: "Making complex systems feel clear",
    description:
      "Work on the Advanced Cost Processor and ATMOS design system, supported by a pragmatic testing and observability toolkit for dependable releases.",
    capabilities: ["Node/Express", "Jest", "React Testing Library", "Dynatrace", "DataDog", "Kibana"],
    accent: "bg-chart-5",
  },
];

const skills = [
  "React",
  "JavaScript",
  "Redux Toolkit",
  "Redux Saga",
  "Node/Express",
  "Accessibility / WCAG",
  "Jest",
  "React Testing Library",
  "Responsive design",
  "Performance optimization",
  "Figma",
  "ATMOS design system",
];

function portfolioHref() {
  const base = `${window.location.origin}${import.meta.env.BASE_URL}`;
  return new URL("../", base).href;
}

function WorkCard({ item, index }) {
  return (
    <Card
      data-testid={`card-work-${index + 1}`}
      className="group relative overflow-hidden border-border/80 bg-card/80 transition-transform duration-500 hover:-translate-y-1"
    >
      <div className={`absolute inset-y-0 left-0 w-1 ${item.accent}`} aria-hidden="true" />
      <CardHeader className="gap-5 pb-5 pl-7 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground">
            {item.number}
          </p>
          <p className="text-sm font-medium text-primary">{item.eyebrow}</p>
          <CardTitle className="mt-2 max-w-xl text-2xl leading-tight sm:text-3xl">
            {item.title}
          </CardTitle>
        </div>
        <ArrowUpRight
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
          aria-hidden="true"
        />
      </CardHeader>
      <CardContent className="pl-7">
        <CardDescription className="max-w-2xl text-base leading-relaxed">
          {item.description}
        </CardDescription>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.capabilities.map((capability) => (
            <Badge key={capability} variant="outline" data-testid={`badge-${capability.toLowerCase().replaceAll(" ", "-")}`}>
              {capability}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function App() {
  const href = portfolioHref();
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10" data-testid="header-work">
          <a href={href} target="_top" rel="noreferrer" className="group flex items-center gap-3" data-testid="link-portfolio-home">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Command className="size-4" aria-hidden="true" />
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">rudresh.navali</span>
          <span className="hidden text-muted-foreground sm:inline">/ work</span>
        </a>
        <Badge variant="secondary" className="gap-2 px-3 py-1.5">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" aria-hidden="true" />
          independent module
        </Badge>
      </header>

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-7 flex items-center gap-3 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" aria-hidden="true" />
              <span>Selected work / 2019—present</span>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Interfaces that move
              <span className="text-primary"> people forward.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A focused look at production work across United Airlines and Infosys—where thoughtful systems meet the pace of real products.
            </p>
            <Button asChild variant="outline" className="mt-8" data-testid="button-back-portfolio">
              <a href={href} target="_top" rel="noreferrer">
                Back to portfolio <ChevronRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="hidden justify-self-end lg:block" aria-hidden="true">
            <div className="relative size-64 rounded-full border border-primary/30 p-5 animate-[spin_24s_linear_infinite] motion-reduce:animate-none">
              <div className="flex size-full items-center justify-center rounded-full border border-dashed border-primary/50">
                <Code2 className="size-16 text-primary" strokeWidth={1} />
              </div>
              <span className="absolute -right-2 top-12 size-3 rounded-full bg-accent" />
              <span className="absolute -bottom-1 left-16 size-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-10" aria-labelledby="selected-work-heading">
        <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">01 / Selected work</p>
            <h2 id="selected-work-heading" className="mt-2 text-2xl font-semibold tracking-tight">Built for the real world</h2>
          </div>
          <Layers3 className="hidden size-5 text-muted-foreground sm:block" aria-hidden="true" />
        </div>
        <div className="grid gap-5">
          {work.map((item, index) => <WorkCard key={item.number} item={item} index={index} />)}
        </div>
      </section>

      <section className="relative border-y border-border bg-secondary/30" aria-labelledby="skills-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.55fr_1fr] lg:px-10 lg:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">02 / Toolkit</p>
            <h2 id="skills-heading" className="mt-3 text-3xl font-semibold tracking-tight">Craft, with range.</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">The tools and practices I use to make product experiences that hold up in production.</p>
          </div>
          <div className="flex content-start flex-wrap gap-3">
            {skills.map((skill) => <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm" data-testid={`skill-${skill.toLowerCase().replaceAll(" ", "-")}`}><CheckCircle2 className="size-3.5 text-primary" />{skill}</Badge>)}
          </div>
        </div>
      </section>

      <footer className="relative mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="text-sm text-muted-foreground">A work surface by Rudresh Navali.</p>
        <Button asChild variant="link" size="sm" data-testid="link-footer-portfolio">
          <a href={href} target="_top" rel="noreferrer">View the full portfolio <ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </Button>
      </footer>
    </main>
  );
}

export default App;