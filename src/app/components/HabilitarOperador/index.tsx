export default function HabilitarOperadorComponent() {
  function validarProntuario(prontuario: number) {}

  return (
    // fixed = faz o componente se relacionar diretamente com a 'window' e não com o elemeno pai;
    // inset-0 = ocupar 100% da tela, e por ser 'fixed' será literalmente 100% de toda a tela;
    // z-50 = ficar por cima de qualquer outro elemento;
    // bg-black/50 = fundo preto, 50% de opacidade;
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-white shadow-2xl px-16 py-12 flex flex-col gap-[30px] justify-center items-center">
        <p>Autentificação do Fiscal</p>
        <p className="font-light text-[2rem]">Fiscal</p>
        <p>utilize o leitor óptico para identificar seu prontuário.</p>
        <input
          className="bg-gray-500 px-[15px] py-[22px] text-white border-2 border-gray-500 focus:border-pink-600"
          type="text"
          placeholder="ex: 1139504"
        />
      </div>
    </div>
  );
}
