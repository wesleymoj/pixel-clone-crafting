import * as React from "react";
import { cn } from "@/lib/utils";

interface ErrorContentProps {
  title?: string;
  description?: string;
  className?: string;
}

export const ErrorContent: React.FC<ErrorContentProps> = ({
  title = "Página não encontrada",
  description = "A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte para a página inicial.",
  className
}) => {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center gap-6 w-full",
        className
      )}
    >
      <h1 className="font-normal text-[32px] text-[#505152] text-center max-md:text-[28px] max-sm:text-2xl">
        {title}
      </h1>
      <p className="font-normal text-base text-[#78797A] w-full text-center leading-[22.4px] max-md:text-[15px] max-sm:text-sm">
        {description}
      </p>
    </section>
  );
};
