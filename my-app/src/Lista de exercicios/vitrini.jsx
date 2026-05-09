import "./VitrineLoja.css";

function VitrineLoja() {
  const produtos = [
    {
      id: 1,
      nome: "Notebook Gamer",
      preco: 4500,
      categoria: "Informática",
    },
    {
      id: 2,
      nome: "Mouse Sem Fio",
      preco: 120,
      categoria: "Acessórios",
    },
    {
      id: 3,
      nome: "Teclado Mecânico",
      preco: 280,
      categoria: "Acessórios",
    },
    {
      id: 4,
      nome: "Monitor Full HD",
      preco: 850,
      categoria: "Informática",
    },
    {
      id: 5,
      nome: "Headset Gamer",
      preco: 190,
      categoria: "Áudio",
    },
    {
      id: 6,
      nome: "Cadeira Gamer",
      preco: 900,
      categoria: "Móveis",
    },
  ];

  return (
    <div className="vitrine-container">
      <h1>Mini Vitrine de Loja</h1>
      <p className="subtitulo">Confira nossos produtos em destaque</p>

      <div className="grid-vitrine">
        {produtos.map((produto) => (
          <div key={produto.id} className="card-produto">
            <div className="imagem-produto">
              <span>Imagem</span>
            </div>

            <div className="info-produto">
              <span className="categoria">{produto.categoria}</span>
              <h2>{produto.nome}</h2>
              <p className="preco">R$ {produto.preco.toFixed(2)}</p>

              <button className="btn-comprar">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VitrineLoja;