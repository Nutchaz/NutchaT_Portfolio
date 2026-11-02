import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

const foundations = [
  {
    icon: Code2,
    title: "A solid foundation",
    description: "App Router, React, and strict TypeScript are ready to build on.",
    tag: "Application",
  },
  {
    icon: Layers3,
    title: "A consistent UI system",
    description: "Accessible shadcn/ui components, styled with Tailwind CSS.",
    tag: "Design system",
  },
  {
    icon: Sparkles,
    title: "Room to grow",
    description: "A clear src structure that can expand with each new feature.",
    tag: "Architecture",
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-svh overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_top,var(--color-muted),transparent_66%)] opacity-70"
      />
      <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-6 sm:px-10">
        <header className="flex h-20 items-center justify-between border-b border-border/70">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Code2 aria-hidden="true" className="size-4" />
            </span>
            <span>Next.js<span className="text-muted-foreground"> Starter</span></span>
          </a>
          <nav aria-label="Main navigation" className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">Project starter</span>
            <ThemeToggle />
          </nav>
        </header>

        <section id="home" className="grid flex-1 items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Your workspace is ready
            </div>
            <h1 className="text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-6xl sm:leading-[1.06]">
              A clear start for
              <span className="block text-muted-foreground">what comes next.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Welcome to your Next.js project. The essentials are in place, so you can focus on shaping the product you have in mind.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                className="h-11 rounded-full px-5"
                render={<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" />}
              >
                Explore the docs <ArrowUpRight aria-hidden="true" className="ml-2 size-4" />
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-full px-5"
                render={<a href="#foundation" />}
              >
                See what&apos;s included <ArrowDownRight aria-hidden="true" className="ml-2 size-4" />
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-muted-foreground">
              <span>Next.js App Router</span>
              <span>React + TypeScript</span>
              <span>Tailwind CSS</span>
              <span>shadcn/ui</span>
            </div>
          </div>

          <Card id="foundation" className="relative overflow-hidden rounded-3xl border-border/80 bg-card/90 shadow-xl shadow-foreground/[0.04] backdrop-blur">
            <div aria-hidden="true" className="absolute right-0 top-0 size-40 rounded-full bg-muted blur-3xl" />
            <CardHeader className="relative border-b border-border/70 px-6 pb-5 pt-6 sm:px-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Project overview</span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">Starter kit</span>
              </div>
              <CardTitle className="text-2xl tracking-tight">Everything in its place.</CardTitle>
              <CardDescription className="text-sm leading-6">A thoughtful base for building, one feature at a time.</CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-1 p-3 sm:p-4">
              {foundations.map(({ icon: Icon, title, description, tag }, index) => (
                <div key={title} className="flex gap-4 rounded-2xl p-3 transition-colors hover:bg-muted/70 sm:p-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground shadow-sm">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h2 className="text-sm font-semibold">{title}</h2>
                      <span className="text-[10px] text-muted-foreground">{tag}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
                  </div>
                  <span className="pt-1 text-xs tabular-nums text-muted-foreground">0{index + 1}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <footer className="flex flex-col gap-2 border-t border-border/70 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>Built with care. Ready for your next idea.</span>
          <span>Next.js · TypeScript · Tailwind CSS</span>
        </footer>
      </div>
    </main>
  );
}
