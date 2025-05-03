export default function HabilitarOperadorComponent() {
  function validarProntuario(prontuario: number) {}

  return (
    // fixed = faz o componente se relacionar diretamente com a 'window' e não com o elemeno pai;
    // inset-0 = ocupar 100% da tela, e por ser 'fixed' será literalmente 100% de toda a tela;
    // z-50 = ficar por cima de qualquer outro elemento;
    // bg-black/50 = fundo preto, 50% de opacidade;
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-red-800 shadow-2xl px-8 py-8 flex flex-col gap-[90px] justify-center items-start">
        <p className="text-white font-medium">Autenticação do Fiscal</p>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-[2rem] text-white font-medium">🪪Fiscal</p>
          <p className="text-white font-normal w-[60%] text-[1rem]">
            utilize o leitor óptico para identificar seu prontuário
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <input
            className="bg-gray-500 px-[15px] py-[22px] text-white border-2 border-gray-500 focus:border-pink-600"
            type="text"
            placeholder="ex: 1139504"
          />
        </div>
      </div>
    </div>
  );
}
