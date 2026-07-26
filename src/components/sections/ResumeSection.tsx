"use client";

import { Download, FileText, Calendar } from "lucide-react";

import { resume } from "@/data/resume";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { showToast } from "@/components/shared/Toast";

export function ResumeSection() {
  function handleDownload(e: React.MouseEvent) {
    if (!resume.available) {
      e.preventDefault();
      showToast("Resume will be available soon. I'm currently preparing a professional version.", "info");
    }
  }

  return (
    <ScrollReveal>
      <section className="px-4 py-10 lg:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading variant="page" subtitle="My professional résumé">
          Resume
        </SectionHeading>

        <div className="mt-12 rounded-lg border border-border/50 bg-card p-8 transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10">
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
              disabled={!resume.available}
              render={
                <a
                  href={resume.file.url}
                  download="MD Sheik Rafiwol Karim Rafi resume.pdf"
                  onClick={handleDownload}
                />
              }
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-foreground">Preview</h3>
            <div className="mt-4 overflow-hidden rounded-lg border border-border/50 transition-colors hover:border-primary/20">
              <iframe
                src={resume.file.url}
                className="aspect-[210/297] w-full"
                title="Resume preview"
              />
            </div>
          </div>
      </div>
      </section>
    </ScrollReveal>
  );
}
