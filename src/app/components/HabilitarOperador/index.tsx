import { KeyboardEvent, useState } from "react";

export default function HabilitarOperadorComponent() {
  const [prontuarioDoFiscal, setProntuarioDoFiscal] = useState<string>("");
  const [erroNaoEUmNumero, setErroNaoEUmNumero] = useState<boolean>(false);

  function validarProntuario(prontuario: number) {
    console.log("O prontuário do fiscal é: " + prontuario);
  }

  const ifAnyKeyIsPress = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      // se o usuário escolheu a opção 'Enter', rodamos a 'function validarProntuario()';
      case "Enter":
        const prontuarioConvertido = Number(prontuarioDoFiscal);

        // caso o prontuário seja um número validaremos ele, senão geraremos um erro;
        if (!isNaN(prontuarioConvertido)) {
          validarProntuario(prontuarioConvertido);
        } else {
          // mostra o erro;
          setErroNaoEUmNumero(true);

          // some com o erro depois de cinco segundos;
          setTimeout(() => {
            setErroNaoEUmNumero(false);
          }, 5000);
        }

        // limpa o input no final, já que colocamos <input value={prontuarioDoFiscal} />;
        setProntuarioDoFiscal("");
        break;
    }
  };

  return (
    // fixed = faz o componente se relacionar diretamente com a 'window' e não com o elemeno pai;
    // inset-0 = ocupar 100% da tela, e por ser 'fixed' será literalmente 100% de toda a tela;
    // z-50 = ficar por cima de qualquer outro elemento;
    // bg-black/50 = fundo preto, 50% de opacidade;
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="bg-red-800 shadow-2xl px-8 py-8 flex flex-col gap-[70px] justify-center items-start">
        <p className="text-white font-medium">Autenticação do Fiscal</p>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-[2rem] text-white font-medium">🪪Fiscal</p>
          <p className="text-white font-normal w-[60%] text-[1rem]">
            utilize o leitor óptico para identificar seu prontuário
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full gap-[10px]">
          {/* mensagem de erro caso o prontuário informado não seja um número */}
          {erroNaoEUmNumero && (
            <p className="text-gray-200 text-[0.9rem]">
              O prontuário informado deve ser um valor númerico
            </p>
          )}
          <input
            className="bg-gray-500 px-[15px] py-[22px] text-white border-2 border-gray-500 focus:border-pink-600"
            type="text"
            placeholder="ex: 1139504"
            // faz com que o valor do input seja sempre o mesmo em 'prontuarioDoFiscal', dessa forma
            // se quisermos limpar o input após o usuário apertar 'Enter', basta transformar o valor
            // de 'prontuarioDoFiscal' em '';
            value={prontuarioDoFiscal}
            // pega todos os caracteres que forem sendo inseridos em tempo real, e salva no 'estado';
            onChange={(e) => setProntuarioDoFiscal(e.target.value)}
            // ao apertar uma tecla fazemos a validação para ver se é o 'Enter';
            onKeyDown={ifAnyKeyIsPress}
          />
        </div>
      </div>
    </div>
  );
}
