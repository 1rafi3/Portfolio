import Link from "next/link";
import { Download, FileText, Calendar } from "lucide-react";

import { resume } from "@/data/resume";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading variant="page" subtitle="My professional résumé">
          Resume
        </SectionHeading>

        <div className="mt-12 rounded-xl border border-border/50 bg-card p-8 transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                Resume / CV
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Download my resume to learn more about my qualifications and
                experience.
              </p>
              {resume.lastUpdated && (
                <span className="mt-2 flex items-center gap-1 text-xs text-muted-foreground/70">
                  <Calendar className="h-3 w-3" />
                  Last updated: {resume.lastUpdated}
                </span>
              )}
            </div>
            <Button
              className="shrink-0"
              render={
                <Link href={resume.file.url} target="_blank" rel="noopener noreferrer" />
              }
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground">Preview</h3>
          <div className="mt-4 flex aspect-[210/297] w-full items-center justify-center rounded-xl border-2 border-dashed border-border/50 bg-muted/20 transition-colors hover:border-primary/20">
            <div className="flex flex-col items-center gap-3 text-center">
              <FileText className="h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground/60">
                Resume preview will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
