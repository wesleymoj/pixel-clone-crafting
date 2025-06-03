import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  children,
  onClick,
  className,
  disabled = false,
  type = "button"
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "flex w-full max-w-lg h-12 justify-center items-center gap-1 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.14),0px_3px_4px_0px_rgba(0,0,0,0.12),0px_1px_5px_0px_rgba(0,0,0,0.20)] relative cursor-pointer box-border bg-[#099] px-2 py-0 rounded-[44px] max-sm:h-11 transition-transform duration-150",
        isPressed && "transform scale-95",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      aria-label="Voltar ao início"
    >
      <div className="w-full h-12 absolute bg-[rgba(255,255,255,0.24)] rounded-[35px] left-0 top-0 max-sm:h-11" />
      <div className="flex items-center justify-center gap-2.5 relative z-[1] px-2 py-0">
        {children}
      </div>
    </button>
  );
};

interface FloatingActionButtonTextProps {
  children: React.ReactNode;
  className?: string;
}

export const FloatingActionButtonText: React.FC<FloatingActionButtonTextProps> = ({
  children,
  className
}) => {
  return (
    <span className={cn(
      "font-medium text-sm text-white leading-5 tracking-[1.25px] uppercase max-sm:text-[13px] max-sm:tracking-[1px]",
      className
    )}>
      {children}
    </span>
  );
};
