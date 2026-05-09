import "./GridProdutos.css";

function GridProdutos() {
  const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse Gamer", preco: 120 },
    { id: 3, nome: "Teclado Mecânico", preco: 250 },
    { id: 4, nome: "Monitor", preco: 900 },
    { id: 5, nome: "Headset", preco: 180 },
    { id: 6, nome: "Cadeira Gamer", preco: 850 },
  ];

  return (
    <div className="tela-produtos">
      <h2>Grid de Produtos</h2>

      <div className="grid-produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="card-produto">
            <h3>{produto.nome}</h3>
            <p>Preço: R$ {produto.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridProdutos;