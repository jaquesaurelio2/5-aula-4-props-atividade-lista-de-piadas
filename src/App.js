import Joke from "./components/Joke";

/**
  - Criar uma lista de 5 piadas utilizando o componente Joke
  - O componente receberá duas props, setup e punchline
  - Algumas piadas não têm setup, portanto, só mostre esse elemento 
  se a piada tiver setup 

  Lista de piadas:

  Setup: O que o pato disse para a pata?
  Punchline: Vem Quá!
  ------------------------------
  Punchline: Quando o Papai Noel morrer, ele não estará mais em trenós.
  ------------------------------
  Setup: Qual é a fórmula da água benta?
  Punchline: H Deus O!
  ------------------------------
  Punchline: Era uma vez um pintinho que se chama Relam. Toda vez que chovia, Relam piava!
  ------------------------------
  Setup: Qual é a cidade brasileira que não tem táxi?
  Punchline: Uberlândia.
  ------------------------------
 */

export default function App() {
  return (
    <div data-testid="App">
      <Joke />
    </div>
  );
}
