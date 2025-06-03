import * as React from "react";
import { cn } from "@/lib/utils";

interface ErrorImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const ErrorImage: React.FC<ErrorImageProps> = ({
  src = "https://cdn.builder.io/api/v1/image/assets/TEMP/fb595378501e6adb4aea500ad21e0d3db66507dc?placeholderIfAbsent=true",
  alt = "Error illustration",
  className
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "w-full max-w-lg h-auto aspect-[512/475]",
        className
      )}
    />
  );
};
