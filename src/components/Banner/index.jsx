import { Fragment } from "react"
import LogoImg from "../../assets/react.svg"
import { Container, Text } from "./styles";

const Banner = () => {
  return(
    <Container>
      <Text>
        <h2>Conheça a imobiliaria MDS Soluções!</h2>
        <p>A melhor imobilíaria para realizar seus sonhos.</p>
        <span>Cadastre seu anúncio</span>
      </Text>
    </Container>
  )
}

export default Banner;