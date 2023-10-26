import './App.css'
import { produtosFiltrados } from './service/service.js'

const App = () => (
  <div>
    <h2>Lista de produtos para comprar</h2>
    <ul>
      {produtosFiltrados.map((produto) => (
        <li key={produto.id}>
          {produto.nome} - R$ {produto.preco.toFixed(2)}
        </li>
      ))}
    </ul>
    <p>
      Total: R${" "}
      {produtosFiltrados
        .reduce((total, produto) => total + produto.preco, 0)
        .toFixed(2)}
    </p>
    <p>
      {produtosFiltrados.length > 0
        ? `Faltam comprar ${produtosFiltrados.length} produtos.` : "Você já comprou todos os produtos."}
    </p>
  </div>
);


export default App;