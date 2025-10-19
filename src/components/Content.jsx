import "boxicons/css/boxicons.min.css";
import tripleargslemon3 from "../assets/tripleargslemon3.png";

const Content = () => {
    const handleContato = () => {
        const whatsappUrl = "https://wa.link/l5b5gu";
        window.open(whatsappUrl, "_blank");
    }

  return (
    <section className="bg-black text-white py-20 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center px-4 mb-16 mt-32">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Crie ou otimize seu Gateway <br />
          White Label em <span className="text-[#4ca724]">10 minutos</span>
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Nossa solução simplifica seus processos, reduzindo despesas com
          tecnologia enquanto você abre novas fontes de receita. Tudo em uma
          única plataforma.
        </p>
      </div>

      <div className="max-w-7xl w-full px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 mb-32">
        {/* 1. CAIXA: Receita Potencializada */}
        <div
          className="
                bg-neutral-900 p-8 rounded-xl border border-neutral-700
                transition-all duration-300 ease-in-out
                hover:border-green-400 
                hover:bg-green-900/30
                hover:scale-[1.02]
              "
        >
          <i className="bx bx-bar-chart-alt-2 text-4xl text-green-600 mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">
            Receita Potencializada
          </h3>
          <p>
            Nossa tecnologia garante maior taxa de aprovação para otimizar seu
            lucro.
          </p>
        </div>

        {/* 2. CAIXA: Segurança e Valor */}
        <div
          className="
                bg-neutral-900 p-8 rounded-xl border border-neutral-700
                transition-all duration-300 ease-in-out
                hover:border-green-400 
                hover:bg-green-900/30
                hover:scale-[1.02]
              "
        >
          <i className="bx bx-shield-alt-2 text-4xl text-green-600 mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">Segurança e Valor</h3>
          <p>
            Anti-fraude de última geração e anti-chargeback para um maior
            conforto de quem utiliza a <b>LemonTech</b>.
          </p>
        </div>

        {/* 3. CAIXA: Conformidade Total */}
        <div
          className="
                bg-neutral-900 p-8 rounded-xl border border-neutral-700
                transition-all duration-300 ease-in-out
                hover:border-green-400 
                hover:bg-green-900/30
                hover:scale-[1.02]
              "
        >
          <i className="bxs bx-lock custom-boxicon-fix text-4xl text-green-400 mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">Conformidade Total</h3>
          <p>
            100% adequado às normas PCI-DSS, LGPD e regulações do Banco Central
            para sua tranquilidade.
          </p>
        </div>

        {/* 4. CAIXA: Redução de custos */}
        <div
          className="
                bg-neutral-900 p-8 rounded-xl border border-neutral-700
                transition-all duration-300 ease-in-out
                hover:border-green-400 
                hover:bg-green-900/30
                hover:scale-[1.02]
              "
        >
          <i className="bx bx-check text-4xl text-green-600 mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">Redução de Custos</h3>
          <p>
            Uma única integração substitui múltiplas ferramentas, reduzindo
            complexidade e custos operacionais.
          </p>
        </div>
      </div>


      <div className="max-w-7xl w-full px-4 mb-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className=" mr-auto mb-18 w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={tripleargslemon3}
            alt="Ilustração de Soluções"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Soluções completas para <br />
            <span className="text-[#4ca724]">qualquer modelo de negócio</span>.
          </h2>
          <p className="text-lg mb-8">
            Nossa solução simplifica seus processos, reduzindo despesas com
            tecnologia enquanto você abre novas fontes de receita. Tudo em uma
            única plataforma.
          </p>
        </div>
      </div>

      <button
        className="
              bg-[#4ca724] hover:bg-[#7ebc45] 
              transform 
              hover:scale-110
              transition-all duration-300 ease-in-out
              text-white font-semibold py-3 px-24 rounded-lg shadow-xl 
            "
        onClick={handleContato}
      >
        Fale com um especialista
      </button>

    



      {/* Box de Transformar Pagamentos 
      <div className="mt-24">
        <div
          className="
                text-center
                bg-[#7ebc45] p-8 rounded-xl border border-neutral-700
                transition-all duration-300 ease-in-out
              "
        >
          <h3 className="text-2xl font-bold mb-2 text-center text-black">
            Pronto para transformar seus pagamentos?
          </h3>
          <p className="text-black">
            Fale com nossos especialistas e descubra como a <b>LemonTech</b>{" "}
            pode acelerar o crescimento do seu negócio.
          </p>
          <button
            className="
              mt-8
              bg-[#121212] hover:bg-[#123e0f] 
              transform 
              hover:scale-110
              transition-all duration-300 ease-in-out
              text-white font-semibold py-3 px-24 rounded-lg shadow-xl 
            "
            href="#"
          >
            Agendar demonstração gratuita
          </button>
        </div>
      </div>
      */}

    

    </section>
  );
};

export default Content;
