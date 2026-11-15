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
      <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl">
          <SectionHeading variant="page" label="Curriculum Vitae" subtitle="Download or preview my verified resume with full technical credentials and academic records.">
            Resume
          </SectionHeading>

          <div className="mt-14 rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 transition-all duration-300 hover:border-[#00E5FF]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,229,255,0.15)]">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <FileText className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  Resume / Curriculum Vitae
                </h3>
                <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Download my resume for review of my full-stack web development competencies, AI engineering experience, and competitive programming achievements.
                </p>
                {resume.lastUpdated && (
                  <span className="mt-2.5 flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80">
                    <Calendar className="h-3.5 w-3.5 text-[#00E5FF]" />
                    <span>Last updated: {resume.lastUpdated}</span>
                  </span>
                )}
              </div>
              <Button
                className="shrink-0 rounded-full px-6 py-2.5 font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                style={{
                  backgroundColor: "var(--cyan-accent)",
                  color: "#030712",
                }}
                disabled={!resume.available}
                render={
                  <a
                    href={resume.file.url}
                    download="MD Sheik Rafiwol Karim Rafi resume.pdf"
                    onClick={handleDownload}
                  />
                }
              >
                <Download className="h-4 w-4 mr-1.5" />
                Download PDF
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-bold text-foreground mb-4">Document Preview</h3>
            <div className="overflow-hidden rounded-2xl glass-panel border border-white/10 shadow-2xl">
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
