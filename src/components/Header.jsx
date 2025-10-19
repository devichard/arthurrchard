import logo6 from "../assets/logo6.png";
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    const handleContato = () => {
        const whatsappUrl = "https://wa.link/l5b5gu";

        window.open(whatsappUrl, "_blank");
    }

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 md:py-6 md:px-20">
      <div
        className="
          flex justify-between items-center max-w-7xl mx-auto 
          bg-black bg-opacity-10 backdrop-blur-lg 
          border border-neutral-600/90 rounded-xl
          py-2 px-4 md:py-4 md:px-8 
        "
      >
        <div className="flex items-center space-x-2">

        {/* Logo */}
          <img 
            src={logo6} 
            alt="Logo LemonTech" 
            className="w-10 h-10 md:w-12 md:h-12"
          />

        {/* Bloco da Logo LemonTech */}
          <h1 className="text-2xl md:text-3xl m-0 text-white">
            <span className="text-[#4ca724]">lemon</span>
            <span className="font-semibold">tech</span>
          </h1>
        </div>

        {/* Botão de CTA*/}
        <nav>
          <button
            className="
              bg-[#4ca724] hover:bg-[#7ebc45] 
              transform 
              hover:scale-110
              transition-all duration-300 ease-in-out
              text-white font-semibold 
              py-2 px-4 text-sm 
              md:py-3 md:px-6 md:text-base 
              rounded-lg shadow-xl 
            "
            onClick={handleContato}
          > 
            Fale com um especialista 
          </button> //
        </nav>
      </div>
    </header>
  );
};

export default Header;