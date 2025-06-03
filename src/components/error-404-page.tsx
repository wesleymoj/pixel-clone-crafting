import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorImage } from "@/components/ui/error-image";
import { ErrorContent } from "@/components/ui/error-content";
import { FloatingActionButton, FloatingActionButtonText } from "@/components/ui/floating-action-button";

interface Error404PageProps {
  onHomeClick?: () => void;
  imageSrc?: string;
  title?: string;
  description?: string;
}

export const Error404Page: React.FC<Error404PageProps> = ({
  onHomeClick,
  imageSrc,
  title,
  description
}) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      navigate('/');
    }
  };

  return (
    <main className="flex w-screen min-h-screen justify-center items-center box-border bg-white px-0 py-[186.5px] max-md:px-5 max-md:py-[100px] max-sm:px-4 max-sm:py-[60px]">
      <div className="flex flex-col justify-center items-center gap-10 w-[512px] max-w-[90vw] max-md:w-full max-md:max-w-[600px] max-md:gap-8 max-sm:gap-6">
        <article className="flex flex-col justify-center items-center gap-16 w-full max-md:gap-12 max-sm:gap-8">
          <ErrorImage 
            src={imageSrc}
            alt="Página não encontrada - Ilustração de erro 404"
          />
          <ErrorContent 
            title={title}
            description={description}
          />
        </article>
        <nav>
          <FloatingActionButton onClick={handleHomeClick}>
            <FloatingActionButtonText>
              voltar ao inicio
            </FloatingActionButtonText>
          </FloatingActionButton>
        </nav>
      </div>
    </main>
  );
};
