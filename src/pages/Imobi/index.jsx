import { Fragment } from "react";
import {
  Container,
  Description,
  Left,
  Profile,
  ProfileContact,
  ProfileDescription,
  ProfileFormContact,
  ProfileImg,
  Right,
  Thumb,
} from "./styles";
import TopBanner from "../../components/TopBanner";

const Imobi = () => {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src="../../src/assets/banner.jpg" alt="" />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              aperiam.
            </p>
          </Description>
        </Left>

        <Right>
          <Profile>
            <ProfileImg>
              <img src="../../src/assets/user.png" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>Junior</h3>
              <p>Descrição do usuário</p>
              <p>teste@teste.com</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Informações para contato:</h3>
            <p>(21)9999xxx</p>
            <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o anunciante</h3>
            <form action="">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
              <button>Enviar mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Imobi;
