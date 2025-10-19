import inter from "../assets/inter.png";
import pagarme from "../assets/pagarme.png";
import mercadopago from "../assets/mercadopago.png";
import pagbank from "../assets/pagbank.png";
// ... (imports) ...

const Integration = () => {
  return (
    <section className="bg-black-900 text-white py-32 flex flex-col items-center">



      {/* Grid dos Quadrados de Integração */}
      <div className="max-w-7xl w-full px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Quadrado 1: PagBank */}
        <div
          className="
            bg-neutral-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center
            transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:scale-[1.05]
        "
        >
          <div
            
          >
            <img
              src={pagbank}
              alt="Pagarme Logo"
              className="w-20 h-20 mb-4 bg-orange-600 rounded-lg flex items-center justify-center
            group-hover:bg-green-500 transition-colors duration-300"
            />
          </div>
          <p className="font-semibold text-lg">PagBank</p>
        </div>

        {/* Quadrado 2: Mercado Pago */}
        <div
          className="
            bg-neutral-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center
            transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:scale-[1.05]
        "
        >
          <div
            
          >
            <img
              src={mercadopago}
              alt="Mercado Pago Logo"
              className="w-20 h-20 mb-4 bg-blue-600 rounded-lg flex items-center justify-center
            group-hover:bg-green-500 transition-colors duration-300"
            />
          </div>
          <p className="font-semibold text-lg">Mercado Pago</p>
        </div>

        {/* Quadrado 3: Pagar.me */}
        <div
          className="
            bg-neutral-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center
            transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:scale-[1.05]
        "
        >
          <div
            
          >
            <img
              src={pagarme}
              alt="Pagarme Logo"
              className="w-20 h-20 mb-4 bg-orange-600 rounded-lg flex items-center justify-center
            group-hover:bg-green-500 transition-colors duration-300"
            />
          </div>
          <p className="font-semibold text-lg">Pagar.me</p>
        </div>

        {/* Quadrado 4: Banco Inter */}
        <div
          className="
            bg-neutral-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center
            transition-all duration-300 ease-in-out
            hover:shadow-2xl hover:scale-[1.05]
        "
        >
          <div
            
          >
            <img
              src={inter}
              alt="Banco Inter Logo"
              className="w-20 h-20 mb-4 bg-orange-600 rounded-lg flex items-center justify-center
            group-hover:bg-orange-500 transition-colors duration-300"
            />
          </div>
          <p className="font-semibold text-lg">Banco Inter</p>
        </div>
      </div>
    </section>
  );
};

export default Integration;
