import { Fragment } from "react"
import { FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import { Container,  Copy,  Item} from "./styles";
import LogoImg from "../../assets/react.svg"

const Footer = ({title, span1, span2, span3}) => {
  return(
    <Fragment>
      <Container>
        <Item>
          <img src={LogoImg} alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <nav>
            <li><span><FaFacebook size={32}/></span></li>
            <li><span><FaInstagram size={32}/></span></li>
            <li><span><FaWhatsapp size={32}/></span></li>
          </nav>
        </Item>
        <Item>
          <h3></h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
        <Item>
          <h3>Nossos Serviços</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
        <Item>
          <h3>Nossos Serviços</h3>
          <ul>
            <li><span>Comprar</span></li>
            <li><span>Alugar</span></li>
            <li><span>Vender</span></li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>&copy; Copyright 2025 - MDS Soluções</p>
        <ul>
          <li><span>Termos de Uso</span></li>
          <li><span>Política de Privacidade</span></li>
          <li><span>Política de Cookies</span></li>
        </ul>
      </Copy>
    </Fragment>
  )
}

export default Footer;