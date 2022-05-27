import "./App.css";
import { pessoas } from "./modelo/pessoas";
import { maisVelho } from "./utils/utils";

function App() {
  // Tiparemos o array de números
  const idades: number[] = [15, 16, 23, 16];

  return (
    <div className="App">
      <div>
        <h3>Pessoas</h3>
        {pessoas.map((pessoas) => {
          return <div key={pessoas}>{pessoas}</div>;
        })}
      </div>
      <div>
        <h3>Idades</h3>
        {idades.map((idades) => {
          return <div key={idades}>{idades}</div>;
        })}
      </div>
      <div>
        <h3>Quem é mais velho</h3>
        <div>{maisVelho(pessoas[0], idades[0], pessoas[1], idades[1])}</div>
        <div>{maisVelho(pessoas[2], idades[2], pessoas[3], idades[3])}</div>
        <div>{maisVelho(pessoas[1], idades[1], pessoas[3], idades[3])}</div>
      </div>
    </div>
  );
}

export default App;
