import { cn } from "@/lib/utils";

type PixelDecorProps = {
  className?: string;
  tone?: "flower" | "spark";
};

export function PixelDecor({ className, tone = "flower" }: PixelDecorProps) {
  if (tone === "spark") {
    return (
      <span className={cn("pixel-spark", className)} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
    );
  }

  return (
    <span className={cn("pixel-flower", className)} aria-hidden="true">
      <span className="petal petal-top" />
      <span className="petal petal-right" />
      <span className="petal petal-bottom" />
      <span className="petal petal-left" />
      <span className="core" />
      <span className="stem" />
      <span className="leaf leaf-left" />
      <span className="leaf leaf-right" />
    </span>
  );
}
