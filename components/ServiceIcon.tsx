import {
  Scale,
  Briefcase,
  Shield,
  Users,
  FileText,
  Building2,
} from "lucide-react";
import type { Service } from "@/lib/data/services";

const map = {
  scale: Scale,
  briefcase: Briefcase,
  shield: Shield,
  users: Users,
  fileText: FileText,
  building: Building2,
} as const;

export function ServiceIcon({
  name,
  className = "h-8 w-8",
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Cmp = map[name];
  return (
    <Cmp
      className={`shrink-0 text-current ${className}`}
      strokeWidth={1.25}
      aria-hidden
    />
  );
}
