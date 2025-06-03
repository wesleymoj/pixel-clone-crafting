
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo à Página Inicial
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Esta é a página principal do site.
        </p>
        <nav className="space-x-4">
          <a href="/pagina-inexistente" className="text-blue-600 hover:text-blue-800 underline">
            Testar página 404
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Index;
