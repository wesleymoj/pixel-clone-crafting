
import { Error404Page } from "@/components/error-404-page";

const NotFound = () => {
  const handleHomeClick = () => {
    // Custom logic for home navigation
    console.log("Navigating to home page from 404");
    // Could also trigger analytics, show toast, etc.
  };

  return (
    <Error404Page 
      onHomeClick={handleHomeClick}
      imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fb595378501e6adb4aea500ad21e0d3db66507dc?placeholderIfAbsent=true"
      title="Página não encontrada"
      description="A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte para a página inicial."
    />
  );
};

export default NotFound;
