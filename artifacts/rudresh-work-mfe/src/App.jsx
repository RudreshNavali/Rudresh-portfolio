import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Command,
  ExternalLink,
  Menu,
} from "lucide-react";
import { Badge } from "@workspace/portfolio-design-system/components/ui/badge";
import { Button } from "@workspace/portfolio-design-system/components/ui/button";

const work = [
  {
    number: "01",
    eyebrow: "United Airlines / Product engineering",
    title: "Customer journeys across United.com",
    description:
      "Contributed to the United.com homepage, shopping, and payments experiences. The work covered responsive UI implementation and the state transitions that carry a customer from discovery through purchase.",
    capabilities: ["React", "Redux Toolkit", "Redux Saga", "JavaScript"],
    context: "Homepage · shopping · payments",
  },
  {
    number: "02",
    eyebrow: "United Airlines / Mexico onsite engagement",
    title: "From Figma detail to resilient UI",
    description:
      "Worked with product and design partners to translate Figma explorations into production UI. Accessibility, responsive behavior, and performance were part of implementation decisions rather than a final pass.",
    capabilities: ["Figma", "WCAG", "Responsive design", "Performance optimization"],
    context: "Product and design collaboration",
  },
  {
    number: "03",
    eyebrow: "Infosys / Systems and platforms",
    title: "Systems with a dependable release path",
    description:
      "Worked on the Advanced Cost Processor and ATMOS design system, with test coverage and operational visibility supporting changes from development through release.",
    capabilities: ["Node/Express", "Jest", "React Testing Library", "Dynatrace", "DataDog", "Kibana"],
    context: "Platform work · design system · operations",
  },
];

const practices = [
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

function WorkRow({ item, index }) {
  return (
    <article
      data-testid={`card-work-${index + 1}`}
      className="grid gap-5 border-t border-border py-8 first:border-t-0 md:grid-cols-[5rem_1fr_13rem] md:gap-8"
    >
      <p className="font-mono text-sm text-muted-foreground">{item.number}</p>
      <div>
        <p className="text-sm font-medium text-primary">{item.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.capabilities.map((capability) => (
            <Badge key={capability} variant="outline" data-testid={`badge-${capability.toLowerCase().replaceAll(" ", "-")}`}>
              {capability}
            </Badge>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground md:pt-1">{item.context}</p>
    </article>
  );
}

function App() {
  const href = portfolioHref();
  return (
    <main className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-3" data-testid="skip-link">
        Skip to content
      </a>
      <header className="border-b border-border" data-testid="header-work">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href={href} target="_top" rel="noreferrer" className="flex items-center gap-3" data-testid="link-portfolio-home">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Command className="size-4" aria-hidden="true" />
          </span>
            <span className="font-mono text-sm font-semibold tracking-tight">rudresh.navali</span>
            <span className="hidden text-muted-foreground sm:inline">/ work</span>
          </a>
          <nav aria-label="Work navigation" className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#selected-work" className="transition-colors hover:text-foreground">Selected work</a>
            <a href="#practice" className="transition-colors hover:text-foreground">Practice</a>
            <a href={href} target="_top" rel="noreferrer" className="inline-flex items-center gap-1 text-foreground">
              Portfolio <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </nav>
          <Menu className="size-5 text-muted-foreground sm:hidden" aria-label="Navigation available on wider screens" />
        </div>
      </header>

      <section id="main-content" className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="size-2 bg-primary" aria-hidden="true" />
              <span>Work notes / 2019—present</span>
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
              Frontend work in production contexts.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Selected work from United Airlines and Infosys, focused on shipping interface systems, handling product state, and keeping quality visible through testing and observability.
            </p>
            <Button asChild variant="outline" className="mt-8" data-testid="button-back-portfolio">
              <a href={href} target="_top" rel="noreferrer">
                Back to portfolio <ChevronRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <aside className="border-l border-border pl-6 lg:mb-2" aria-label="Module details">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Module details</p>
            <dl className="mt-5 space-y-4 text-sm">
              <div><dt className="text-muted-foreground">Scope</dt><dd className="mt-1 font-medium">Frontend engineering</dd></div>
              <div><dt className="text-muted-foreground">Organizations</dt><dd className="mt-1 font-medium">United Airlines · Infosys</dd></div>
              <div><dt className="text-muted-foreground">Focus</dt><dd className="mt-1 font-medium">UI systems, quality, operations</dd></div>
              <div><dt className="text-muted-foreground">Format</dt><dd className="mt-1 font-medium">Selected case-study notes</dd></div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">This is a standalone work surface within the portfolio, kept intentionally focused on responsibility and engineering context.</p>
          </aside>
        </div>
      </section>

      <section id="selected-work" className="border-y border-border" aria-labelledby="selected-work-heading">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="mb-2 flex items-baseline justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">01 / Selected work</p>
              <h2 id="selected-work-heading" className="mt-3 text-3xl font-semibold tracking-tight">Ownership across the stack</h2>
            </div>
            <p className="hidden text-sm text-muted-foreground sm:block">Context, contribution, and tools</p>
          </div>
          <div className="mt-8">
            {work.map((item, index) => <WorkRow key={item.number} item={item} index={index} />)}
          </div>
        </div>
      </section>

      <section id="practice" className="bg-secondary/30" aria-labelledby="skills-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.55fr_1fr] lg:px-10 lg:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">02 / Practice</p>
            <h2 id="skills-heading" className="mt-3 text-3xl font-semibold tracking-tight">Quality is part of the interface.</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">The implementation concerns that followed the work: accessible behavior, testable components, useful signals, and performance-aware delivery.</p>
          </div>
          <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {practices.map((practice) => <div key={practice} className="flex items-start gap-3 border-b border-border pb-3 text-sm" data-testid={`skill-${practice.toLowerCase().replaceAll(" ", "-" )}`}><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{practice}</span></div>)}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="text-sm text-muted-foreground">Rudresh Navali / frontend engineering work</p>
        <Button asChild variant="link" size="sm" data-testid="link-footer-portfolio">
          <a href={href} target="_top" rel="noreferrer">View the full portfolio <ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </Button>
      </footer>
    </main>
  );
}

export default App;