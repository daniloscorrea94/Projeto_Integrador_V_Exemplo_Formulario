import "./lista_produto.css";

function ListaProdutos() {
  const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse Gamer", preco: 120 },
    { id: 3, nome: "Teclado Mecânico", preco: 250 },
    { id: 4, nome: "Monitor", preco: 900 },
  ];

  return (
    <div className="lista-produtos">
      <h2>Lista de Produtos</h2>

      {produtos.map((produto, index) => (
        <div key={produto.id} className={`produto produto-${index}`}>
          <h3>{produto.nome}</h3>
          <p>Preço: R$ {produto.preco.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaProdutos;