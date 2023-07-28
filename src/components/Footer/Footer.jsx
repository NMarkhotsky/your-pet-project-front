import {
  FooterStyle,
  Title,
  Wrapper,
  Pulsingheart,
  Person,
  Container,
  ContainerInner,
  Circle,
  Divider,
  Name,
  TitlePosition,
  ImageOne,
  ImageTwo,
  ImageThree,
  MainContainer,
} from './Footer.styled';
import bgImg1 from '../../assets/images/photoTeam/1.jpg';
import photoAlb from '../../assets/images/photoTeam/Albina.png';
import { Link } from 'react-router-dom';
// import photoNata from '../../assets/images/photoTeam/Natalia.png';

export const Footer = () => {
  return (
      <FooterStyle>
          <h2>Our team</h2>
      <MainContainer>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src={bgImg1} />
              <ImageOne src={photoAlb} />
            </ContainerInner>
          </Container>
          {/* <Divider></Divider>
          <Name>Albina</Name>
          <TitlePosition>Frontend developer</TitlePosition>
          <Link target="_blank" to="https://github.com/albuska">
            GitHub
          </Link> */}
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageTwo src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Irma</Name>
          <TitlePosition>Senior Developer</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
        <Person>
          <Container>
            <ContainerInner>
              <Circle src="" />
              <ImageThree src="" />
            </ContainerInner>
          </Container>
          <Divider></Divider>
          <Name>Anton</Name>
          <TitlePosition>Senior UX</TitlePosition>
        </Person>
      </MainContainer>
      <Title>
        &#xa9; 2023 | Developed with
        <Wrapper>
          <Pulsingheart></Pulsingheart>
        </Wrapper>
      </Title>
    </FooterStyle>
  );
};
