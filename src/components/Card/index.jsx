import { Fragment } from "react"
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Container, Description, Img, Items } from "./styles";

const Card = ({ nome, localizacao, preco, imagem }) => {
  return(
    <Container>
      <Img>
        <img src={imagem} alt={nome} />
      </Img>
      <Description>
        <h4>{nome}</h4>
        <Items>
          <span>
            <FaMapMarkerAlt />
            {localizacao}
          </span>
          <span>{preco}</span>
        </Items>
        <a href="">
          Detalhes <FaArrowRight />
        </a>
      </Description>
    </Container>
  )
}

export default Card;