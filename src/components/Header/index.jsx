import { Fragment } from "react"
import LogoImg from "../../assets/react.svg"
import { Container, Logo, Menu } from "./styles";

const Header = () => {
  return(
    <Container>
      <Logo>
        <img src={LogoImg} alt="" />
      </Logo>
      <Menu>
        <ul>
          <li><span>Cadastro/Login</span></li>
        </ul>
      </Menu>
    </Container>
  )
}

export default Header;