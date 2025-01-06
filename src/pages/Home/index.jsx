import { Fragment } from "react"
import { Header, Wrapper } from "./style";
import Card from "../../components/Card";

const Home = () => {
  const propriedades = [
    { nome: "Apartamento Luxo", localizacao: "Rio de Janeiro, RJ", preco: "R$ 2.400,00 / mês", imagem: "../../src/assets/banner.jpg" },
    { nome: "Casa Moderna", localizacao: "São Paulo, SP", preco: "R$ 3.200,00 / mês", imagem: "../../src/assets/banner.jpg" },
    { nome: "Estúdio", localizacao: "Macaé, RJ", preco: "R$ 1.800,00 / mês", imagem: "../../src/assets/banner.jpg" },
    { nome: "Cobertura", localizacao: "Niterói, RJ", preco: "R$ 5.000,00 / mês", imagem: "../../src/assets/banner.jpg" }
  ];

  return(
    <Fragment>
      <Header>
        <h2>Procure sua propriedade!</h2>
      </Header>
      <Wrapper>
        {propriedades.map((propriedade, index) => (
          <Card
            key={index}
            nome={propriedade.nome}
            localizacao={propriedade.localizacao}
            preco={propriedade.preco}
            imagem={propriedade.imagem}
          />
        ))}
      </Wrapper>
    </Fragment>
  )
}

export default Home;