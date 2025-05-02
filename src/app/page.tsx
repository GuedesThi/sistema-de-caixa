"use client";

import { useEffect, useState } from "react";
import HabilitarOperadorComponent from "./components/HabilitarOperador";

export default function Home() {
  // estado para saber se uma tecla foi pressionada (true) ou não (false);
  const [buttonPress, setButtonPress] = useState<boolean>(false);

  // 'function' que será executada sempre que um 'event keydown' for acionado;
  // ela vê que tecla foi clicada e faz algo de acordo com isso;
  const ifAnyKeyIsPress = (event: KeyboardEvent) => {
    // se o usuário escolheu a opção '1' eu mudo o estado para 'true', mostrando uma outra tela;
    if (event.key === "1") {
      setButtonPress(true);
    }
    // se o usuário escolheu a opção 'Esc' eu mudo o estado para 'false', fechando uma tela;
    if (event.key === "Escape") {
      setButtonPress(false);
    }
  };

  // abre um 'addEventListener' para ficar de olho se o usuário clico numa tecla;
  // quando o usuário sair da página (por causa do '[]' no final) o 'event' é fechado;
  useEffect(() => {
    // se uma tecla é pressionada rodamos a 'function ifAnyKeyIsPress';
    window.addEventListener("keydown", ifAnyKeyIsPress);
    return () => {
      // fechamos o 'event' (processo de Cleanup Function) que espera uma tecla ser pressionada;
      window.removeEventListener("keydown", ifAnyKeyIsPress);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-red-700 flex justify-center items-center">
      <div className="w-[70rem] h-[30rem] bg-white flex justify-center items-center">
        <main className="flex flex-col gap-[1rem] justify-center items-center">
          <h1 className="text-[2.5rem] font-light">Caixa sem Operador</h1>
          <h2 className="text-[2.3rem] font-light mb-[2rem]">
            Fiscal deve escolher uma das opções abaixo
          </h2>
          <ol className="w-[26rem] flex justify-between">
            <li className="bg-red-700 text-gray-100 font-normal px-[20px] py-[18px]">
              1 - Habilitar Operador
            </li>
            <li className="bg-red-700 text-gray-100 font-normal pt-[20px] pb-[20px] pl-[18px] pr-[18px]">
              2 - Ver registros
            </li>
          </ol>
        </main>
      </div>
      {/* Fazemos um Short-circuit conditional rendering */}
      {/* Isso significa, renderizar um componente com base numa condicional curta (sem uso do if/else) */}
      {/* Nessa situação, se 'buttonPress = true' renderizamos o componente 'HabilitarOperador' */}
      {buttonPress && <HabilitarOperadorComponent />}
    </div>
  );
}
