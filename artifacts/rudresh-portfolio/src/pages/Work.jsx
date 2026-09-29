import { ExternalLink, RadioTower } from "lucide-react";
import { Button } from "@workspace/portfolio-design-system/components/ui/button";
import { Card, CardContent } from "@workspace/portfolio-design-system/components/ui/card";

const WORK_MFE_URL = "/work-mfe/";

export default function Work() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-10 md:py-16">
      <Card className="overflow-hidden border-primary/20 bg-card/70 shadow-none">
        <CardContent className="border-b border-border/80 px-5 py-4 md:px-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <RadioTower className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary">
                  Remote feature / work-mfe
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  This surface is independently built and mounted into the portfolio shell.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <a href={WORK_MFE_URL} target="_blank" rel="noreferrer">
                Open standalone MFE <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </CardContent>
        <iframe
          title="Rudresh Navali selected work micro frontend"
          src={WORK_MFE_URL}
          loading="eager"
          className="block h-[1850px] w-full border-0 bg-background md:h-[1560px]"
          data-testid="iframe-work-mfe"
        />
      </Card>
    </div>
  );
}