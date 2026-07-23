import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { IProjectLinks } from "@/types/project";

interface IProjectActionsProps {
  links: IProjectLinks;
}

export function ProjectActions({ links }: IProjectActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.liveDemo && (
        <Button render={
            <Link
              href={links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <ExternalLink className="h-4 w-4" />
          Live Demo
        </Button>
      )}
      {links.github && (
        <Button
          variant="secondary"
          render={
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          <Code2 className="h-4 w-4" />
          Source Code
        </Button>
      )}
    </div>
  );
}
