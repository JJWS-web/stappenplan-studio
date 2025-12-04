import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  isLight?: boolean;
}

const Logo = ({ className, showText = true, isLight = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex items-end gap-0.5">
        {/* Step indicators representing stappenplan */}
        <div className="w-2 h-3 rounded-sm gradient-primary animate-pulse" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-5 rounded-sm gradient-primary animate-pulse" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-7 rounded-sm gradient-primary animate-pulse" style={{ animationDelay: "300ms" }} />
        <div className="w-2 h-9 rounded-sm gradient-accent animate-pulse" style={{ animationDelay: "450ms" }} />
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight">
          <span className={isLight ? "text-white" : "text-foreground"}>Uw</span>
          <span className="text-gradient">stappenplan</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
